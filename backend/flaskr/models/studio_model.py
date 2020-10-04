# need this to jsonify sql query
from dataclasses import dataclass

# using the same instance of db initialized in __init__.py
from . import db

@dataclass
class Studio(db.Model):
    """Data model for studio."""
    studio_id: int
    studio_name: str

    studio_id = db.Column(db.Integer, primary_key = True)
    studio_name = db.Column(db.String(50), unique=True, nullable=False)

    def __repr__(self):
        return '(Studio | ID: {} | Studio: {})'.format(self.studio_id,self.studio_name)