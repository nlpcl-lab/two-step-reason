import json, math, datetime, os
from flask import request, render_template, Response, g, session, redirect, send_file
from flask_mongoengine import Pagination
from bson import json_util

from models import Doc, User, Sent, Annotation, DocLog
from decorator import is_user, is_active_user, is_admin
import config


def login_page():
    callback = request.args.get('callback', '/')
    return render_template('login.html', g=g, callback=callback)


def page_403():
    return render_template('403.html', g=g)


def page_404():
    return render_template('404.html', g=g)


def auto_signup_page():
    callback = request.args.get('callback', '/')

    import random, string
    def random_char():
        return ''.join(random.choice(string.digits + string.ascii_lowercase) for _ in range(10))

    username = random_char()
    password = random_char()

    user = User(username=username, first_name='Random ID', last_name='')
    user.set_password(password)
    user.save()

    return render_template('auto_signup.html', callback=callback, g=g, username=username, password=password)


def logout_page():
    if 'username' in session: del session['username']
    return redirect('/login')


@is_active_user
def get_doc(doc_id):
    doc = Doc.objects.get(id=doc_id)
    sents = Sent.objects(doc=doc).order_by('index')

    sents_data = []
    for sent in sents:
        sents_data.append(sent.dump())

    return json.dumps({
        'sents': sents_data,
    })


@is_user
def post_annotation():
    data = request.get_json()

    doc = data['doc']
    target_text = data['target_text']
    index = data['index']
    anchor_offset = data['anchor_offset']
    focus_offset = data['focus_offset']
    type = data['type']
    basket = data['basket']

    doc = Doc.objects().get(id=doc)
    sent = Sent.objects().get(doc=doc, index=index)
    user = g.user

    target_sent = Sent.objects().get(doc=doc, index=index)

    # In sentence, filter logic have to be changed
    if type == 'sentence':
        annotations = Annotation.objects.filter(doc=doc, sent=sent, index=index, user=g.user, type=type)
    else:
        annotations = Annotation.objects.filter(doc=doc, sent=sent, index=index, user=g.user, type=type, anchor_offset=anchor_offset)

    if annotations.count() > 0:
        annotation = annotations[0]
    else:
        annotation = Annotation(doc=doc, sent=sent, user=user, index=index, type=type, anchor_offset=anchor_offset)

    annotation.anchor_offset = anchor_offset
    annotation.focus_offset = focus_offset
    annotation.entire_text = target_sent.text
    annotation.target_text = target_text
    annotation.basket = basket
    annotation.ip = request.remote_addr

    annotation.save()

    return json.dumps({
        'annotation': annotation.dump(),
    })


@is_user
def get_annotation(doc_id):
    try:
        doc = Doc.objects().get(id=doc_id)
        annotations = Annotation.objects(doc=doc, user=g.user)
    except Exception as e:
        return Response('not found', status=404)
    data = []
    for annotation in annotations:
        data.append(annotation.dump())

    return json.dumps({
        'annotations': data,
    })


@is_user
def delete_annotation(annotation_id):
    try:
        annotation = Annotation.objects().get(id=annotation_id)
    except Annotation.DoesNotExist:
        return Response('not found', status=404)

    if annotation.user.id != g.user.id:
        return Response('permission error', status=403)
    annotation.delete()
    return Response('success', status=200)


@is_user
def put_annotation(annotation_id):
    data = request.get_json()
    basket = data['basket']
    try:
        annotation = Annotation.objects().get(id=annotation_id)
    except Exception:
        return Response('not found', status=404)
    if annotation.user.id != g.user.id:
        return Response('permission error', status=403)
    annotation.basket = basket
    annotation.updated_at = datetime.datetime.now
    annotation.save()

    return json.dumps({
        'annotation': annotation.dump(),
    })


def post_login():
    data = request.get_json()
    username = data['username']
    password = data['password']

    user = User.objects.filter(username=username)
    if len(user) == 0:
        return Response(status=403)

    user = user[0]
    if not user.check_password(password):
        return Response(status=403)

    session['username'] = username
    g.user = user.dump()
    return Response('success', status=200)


def post_signup():
    data = request.get_json()
    username = data['username']
    first_name = data['first_name']
    last_name = data['last_name']
    password = data['password']

    user = User.objects.filter(username=username)
    if len(user) != 0:
        return Response(status=401)

    user = User(username=username, first_name=first_name, last_name=last_name)
    user.set_password(password)
    user.save()

    return Response('success', status=200)


@is_user
def upload_page(doc_type):
    return render_template('upload.html'.format(doc_type), g=g)


@is_user
def doc_page(doc_id, doc_type):
    try:
        doc = Doc.objects.get(id=doc_id)
    except Exception as e:
        return redirect('/404')

    doc_log = DocLog(doc=doc, ip=request.remote_addr)
    doc_log.save()

    return render_template('doc.html'.format(doc_type), doc=doc, g=g, ENCRYPTION_KEY=config.Config.ENCRYPTION_KEY)


@is_user
def post_mturk_upload():
    data = request.get_json()
    text = data['text']
    doc_type = data['doc_type']

    if 'turker_id' in data:
        turker_id = data['turker_id']

        g.user.turker_id = turker_id
        g.user.save()

    from nltk.tokenize import sent_tokenize
    sents = sent_tokenize(text)

    doc = Doc(title='', text=text, source='mturk', type=doc_type)
    if 'source_url' in data:
        doc.source = data['source_url']
    doc.save()

    res = {
        'doc_id': str(doc.id),
        'sents': list(),
        'seq': doc.seq,
        'title': doc.title,
        'created_at': doc.created_at.isoformat(),
    }
    for index in range(0, len(sents)):
        sent = Sent(index=index, text=sents[index], doc=doc).save()
        res['sents'].append(sent.dump())

    return json.dumps(res)
