# using the same instance of db initialized in __init__.py
from . import db


class Anime(db.Model):
    """Data model for anime."""

    anime_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), unique=True, nullable=False)
    synopsis = db.Column(db.String(2000))
    rating = db.Column(db.String(4))
    airing = db.Column(db.String(30))

    def __repr__(self):

        return '(Anime | ID: {} | name:{} | synopsis:{} | rating:{} | airing:{} |)'.format(self.anime_id, self.name, self.synopsis, self.rating, self.airing)
