import os, sys, datetime, random
from flask import Flask, session, g, request, render_template, redirect
from flask_mongoengine import MongoEngine
# import sentry_sdk
# from sentry_sdk.integrations.flask import FlaskIntegration

import views, config
from models import User

base_dir = os.path.abspath(os.path.dirname(__file__) + '/')
sys.path.append(base_dir)

app = Flask(__name__)

app.config.from_object('config.Config')
db = MongoEngine(app)


@app.before_request
def before_request():
    g.random = random.randrange(1, 10000)
    if 'username' not in session:
        g.user = None
    else:
        user = User.objects.get(username=session['username'])
        user.accessed_at = datetime.datetime.now
        user.last_ip = request.remote_addr
        user.save()
        g.user = user


app.add_url_rule('/', view_func=views.upload_page, methods=['GET'])
app.add_url_rule('/doc/<doc_id>', view_func=views.doc_page, methods=['GET'])


app.add_url_rule('/403', view_func=views.page_403, methods=['GET'])
app.add_url_rule('/404', view_func=views.page_404, methods=['GET'])
app.add_url_rule('/login', view_func=views.login_page, methods=['GET'])
app.add_url_rule('/auto_signup', view_func=views.auto_signup_page, methods=['GET'])
app.add_url_rule('/logout', view_func=views.logout_page, methods=['GET'])
app.add_url_rule('/doc/<doc_id>', view_func=views.doc_page, methods=['GET'])

# for api
app.add_url_rule('/api/login', view_func=views.post_login, methods=['POST'])
app.add_url_rule('/api/signup', view_func=views.post_signup, methods=['POST'])
app.add_url_rule('/api/doc/<doc_id>/annotation', view_func=views.get_annotation, methods=['GET'])
app.add_url_rule('/api/annotation', view_func=views.post_annotation, methods=['POST'])
app.add_url_rule('/api/annotation/<annotation_id>', view_func=views.delete_annotation, methods=['DELETE'])
app.add_url_rule('/api/annotation/<annotation_id>', view_func=views.put_annotation, methods=['PUT'])

app.add_url_rule('/api/mturk/upload', view_func=views.post_mturk_upload, methods=['POST'])

if __name__ == '__main__':
    FLASK_DEBUG = os.getenv('FLASK_DEBUG', True)
    app.run(host='0.0.0.0', debug=FLASK_DEBUG, port=8081)
