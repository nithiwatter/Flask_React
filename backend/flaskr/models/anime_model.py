# using the same instance of db initialized in __init__.py

from . import db


class Anime(db.Model):
    """Data model for anime."""

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)

    def __repr__(self):
        return '(Anime {})'.format(self.name)
