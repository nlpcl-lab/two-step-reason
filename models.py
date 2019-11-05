import datetime
from flask_mongoengine import MongoEngine
import uuid
import hashlib
import logging

db = MongoEngine()


class Doc(db.Document):
    title = db.StringField(default='')
    text = db.StringField(default='')
    source = db.StringField(default='')
    seq = db.IntField(default=0)
    created_at = db.DateTimeField(default=datetime.datetime.now)
    type = db.StringField(default='v1')

    meta = {
        'indexes': [
            'seq',

        ]
    }

    def dump(self):
        return {
            'title': self.title,
            'text': self.text,
            'id': str(self.id),
            'seq': self.seq,
        }


class Sent(db.Document):
    doc = db.ReferenceField(Doc)
    index = db.IntField()
    text = db.StringField()
    created_at = db.DateTimeField(default=datetime.datetime.now)

    meta = {
        'indexes': [
            'doc',
        ]
    }

    def dump(self):
        return {
            'index': self.index,
            'text': self.text,
        }


class User(db.Document):
    username = db.StringField()
    password = db.StringField()
    salt = db.StringField()
    first_name = db.StringField()
    last_name = db.StringField()
    is_active = db.BooleanField(default=False)
    is_admin = db.BooleanField(default=False)

    last_ip = db.StringField()
    created_at = db.DateTimeField(default=datetime.datetime.now)
    accessed_at = db.DateTimeField(default=datetime.datetime.now)

    worker_id = db.StringField(default='')

    def set_password(self, password):
        self.salt = uuid.uuid4().hex
        self.password = hashlib.sha256(self.salt.encode() + password.encode()).hexdigest()

    def check_password(self, password):
        return self.password == hashlib.sha256(self.salt.encode() + password.encode()).hexdigest()

    def dump(self):
        return {
            'id': self.id,
            'username': self.username,
        }


class DocLog(db.Document):
    doc = db.ReferenceField(Doc)
    user = db.ReferenceField(User)
    ip = db.StringField()
    created_at = db.DateTimeField(default=datetime.datetime.now)

    meta = {
        'indexes': [
            'user',
        ]
    }


class Annotation(db.Document):
    doc = db.ReferenceField(Doc)
    sent = db.ReferenceField(Sent)
    user = db.ReferenceField(User)

    type = db.StringField(choices=('event', 'sentence'))

    index = db.IntField()
    anchor_offset = db.IntField()
    focus_offset = db.IntField()

    entire_text = db.StringField()
    target_text = db.StringField()

    basket = db.DictField()

    ip = db.StringField(default='0.0.0.0')
    """
    ### format ###
    basket = {
        'attribute_key': {
            'initial_value': 'attribute_value',
            'value': 'attribute_value',
            'memo': '',
            'reason': '',
        },
    }
    """

    memo = db.StringField()

    created_at = db.DateTimeField(default=datetime.datetime.now)
    updated_at = db.DateTimeField(default=datetime.datetime.now)

    meta = {
        'indexes': [
            ('doc', 'user'),
            ('doc', 'user', 'type'),
        ]
    }

    def dump(self):
        return {
            'id': str(self.id),
            'doc': str(self.doc.id),
            'sent': str(self.sent.id),
            'user': str(self.user.id),
            'type': self.type,
            'index': self.index,
            'anchor_offset': self.anchor_offset,
            'focus_offset': self.focus_offset,
            'target_text': self.target_text,
            'basket': self.basket,
            'created_at': str(self.created_at),
            'updated_at': str(self.updated_at),
            'memo': self.memo,
        }
