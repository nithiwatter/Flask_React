# need this to jsonify sql query
from dataclasses import dataclass

# using the same instance of db initialized in __init__.py
from . import db

@dataclass
class Genre(db.Model):
    """Data model for genre."""
    genre_id: int
    genre_name: str

    genre_id = db.Column(db.Integer, primary_key = True)
    genre_name = db.Column(db.String(30), unique=True, nullable=False)

    def __repr__(self):
        return '(Genre | ID: {} | genre: {})'.format(self.genre_id,self.genre_name)
