# using the same instance of db initialized in __init__.py
from . import db


class Anime(db.Model):
    """Data model for anime."""

    anime_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), unique=True, nullable=False)
    synopsis = db.Column(db.Text)
    rating = db.Column(db.String(4))
    anime_type = db.Column(db.String(30))
    airing_start = db.Column(db.DateTime)
    anime_image_path = db.Column(db.String(150))

    def __repr__(self):
        return '(Anime | ID: {} | name:{} | synopsis:{} | rating:{} | type: {})'.format(self.anime_id, self.name, self.synopsis, self.rating, self.anime_type)
