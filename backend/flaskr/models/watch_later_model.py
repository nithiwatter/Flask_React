# need this to jsonify sql query
from dataclasses import dataclass

# using the same instance of db initialized in __init__.py
from . import db

# MySQL currently does not support UUID (use this library to fall back to BINARY(16) immediately)
# from sqlalchemy_utils import UUIDType
# import uuid

@dataclass
class watchLater(db.Model):
    """Data model for watch later"""
    user_id: str
    anime_id: int

    user_id = db.Column(db.String(45), primary_key=True)
    anime_id = db.Column(db.Integer, db.ForeignKey('anime.anime_id'), primary_key=True)

    def __repr__(self):
        return '(watchLater | user_id: {} | anime_id: {})'.format(self.user_id,self.anime_id)

