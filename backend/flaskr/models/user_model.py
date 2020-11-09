import datetime

# need this to jsonify sql query
from dataclasses import dataclass

# using the same instance of db initialized in __init__.py
from . import db

# MySQL currently does not support UUID (use this library to fall back to BINARY(16) immediately)
from sqlalchemy_utils import UUIDType
import uuid


@dataclass
class User(db.Model):
    """Data model for user."""
    user_id: str
    email: str
    password: str
    joined_at: datetime.datetime
    status: str

    user_id = db.Column(UUIDType(), primary_key=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    joined_at = db.Column(db.DateTime)
    status = db.Column(db.Text)

    def __repr__(self):
        return '(User | user_id: {} | email:{} | password:{})'.format(self.user_id, self.email, self.password)
