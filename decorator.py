from functools import wraps
from flask import g, session, request, redirect, url_for, render_template
import random


def is_user(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if g.user is None:
            return redirect('/login?callback={}'.format(request.path))
        return f(*args, **kwargs)

    return decorated_function


def is_active_user(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if g.user is None:
            return redirect('/login?callback={}'.format(request.path))
        if not g.user.is_active:
            return redirect('/403')
        return f(*args, **kwargs)

    return decorated_function


def is_admin(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if g.user is None or g.user.is_admin == False:
            return redirect('/403')
        return f(*args, **kwargs)

    return decorated_function
