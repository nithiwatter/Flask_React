import datetime

# need this to jsonify sql query
from dataclasses import dataclass

# using the same instance of db initialized in __init__.py
from . import db

from .relationship_tables import anime_genre, anime_studio


@dataclass
class Anime(db.Model):
    """Data model for anime."""
    # specifying fields for dataclass
    anime_id: int
    name: str
    name_eng: str
    name_jpn: str
    num_episodes: int
    source: str
    members: int
    favorites: int
    status: str
    rank: int
    popularity: int
    scored_by: int
    duration: str
    synopsis: str
    background: str
    rating: float
    anime_type: str
    airing_start: str
    airing_end: str
    airing_str: str
    anime_image_path: str
    mal_anime_image_path: str
    trailer_url: str
    # genre: list

    # fields
    anime_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), unique=True, nullable=False)
    name_eng = db.Column(db.String(150))
    name_jpn = db.Column(db.String(150))
    num_episodes = db.Column(db.Integer)
    source = db.Column(db.String(50))
    members = db.Column(db.Integer)
    favorites = db.Column(db.Integer)
    status = db.Column(db.String(50))
    rank = db.Column(db.Integer)
    popularity = db.Column(db.Integer)
    scored_by = db.Column(db.Integer)
    duration = db.Column(db.String(50))
    synopsis = db.Column(db.Text)
    background = db.Column(db.Text)
    rating = db.Column(db.Float)
    anime_type = db.Column(db.String(30))
    airing_start = db.Column(db.DateTime)
    airing_end = db.Column(db.DateTime)
    airing_str = db.Column(db.String(60))
    anime_image_path = db.Column(db.String(150))
    mal_anime_image_path = db.Column(db.String(150))
    trailer_url = db.Column(db.String(500))

    # relationships
    genre = db.relationship('Genre', secondary=anime_genre, lazy=True,
        backref=db.backref('anime', lazy=True))
    studio = db.relationship('Studio', secondary=anime_studio, lazy=True,
        backref=db.backref('anime', lazy=True))

    def __repr__(self):
        return '(Anime | ID: {} | name:{} | synopsis:{} | rating:{} | type: {})'.format(self.anime_id, self.name, self.synopsis, self.rating, self.anime_type)
