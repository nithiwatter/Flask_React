# need this to jsonify sql query
from dataclasses import dataclass

# using the same instance of db initialized in __init__.py
from . import db

@dataclass
class Genre(db.Model):
    """Data model for genre."""
    anime_id: int
    genre: str

    db.metadata.clear()
    anime_id = db.Column(db.Integer, primary_key = True)
    genre = db.Column(db.String(20), primary_key = True)

    def __repr__(self):
        return 'ID: {} | genre: {}'.format(self.anime_id,self.genre)
