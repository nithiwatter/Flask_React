# need this to jsonify sql query
from dataclasses import dataclass

# using the same instance of db initialized in __init__.py
from . import db

@dataclass
class Studio(db.Model):
    """Data model for studio."""
    anime_id: int
    studio: str

    anime_id = db.Column(db.Integer, primary_key = True)
    studio = db.Column(db.String(50), primary_key = True)

    def __repr__(self):
        return 'ID: {} | Studio: {}'.format(self.anime_id,self.studio)