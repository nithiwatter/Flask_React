import datetime

# need this to jsonify sql query
from dataclasses import dataclass

# using the same instance of db initialized in __init__.py
from . import db

from sqlalchemy_utils import UUIDType
import uuid


@dataclass
class Review(db.Model):
    """Data model for review."""
    review_id: str
    user_id: str
    anime_id: int
    review_rating: int
    review_content: str
    created_at: datetime.datetime

    review_id = db.Column(UUIDType(), primary_key=True)
    user_id = db.Column(UUIDType(), nullable=False)
    anime_id = db.Column(db.Integer, nullable=False)
    review_rating = db.Column(db.Integer, nullable=False)
    review_content = db.Column(db.Text)
    created_at = db.Column(db.DateTime)

    def __repr__(self):
        return '(Review | ID: {} | userId: {} | animeId: {})'.format(self.review_id, self.user_id, self.anime_id)
