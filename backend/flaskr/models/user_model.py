from dataclasses import dataclass

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

    user_id = db.Column(UUIDType(), primary_key=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return '(User | user_id: {} | email:{} | password:{})'.format(self.user_id, self.email, self.password)
