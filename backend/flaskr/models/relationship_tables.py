
# using the same instance of db initialized in __init__.py
from . import db

anime_genre = db.Table('anime_to_genre',
    db.Column('anime_id', db.Integer, db.ForeignKey('anime.anime_id'), primary_key=True), 
                       #Foreign Key set as animeid
    db.Column('genre_id', db.Integer, db.ForeignKey('genre.genre_id'), primary_key=True)
                       #Foreign Key set as genreid
)

anime_studio = db.Table('anime_to_studio',
    db.Column('anime_id', db.Integer, db.ForeignKey('anime.anime_id'), primary_key=True),
                        #Foreign Key set as animeid
    db.Column('studio_id', db.Integer, db.ForeignKey('studio.studio_id'), primary_key=True)
                        #Foreign Key set as studioid
)   
