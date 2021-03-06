# application factory to create the main app for this particular package
from flask import Flask, jsonify
from flaskr.utils.custom_jwt_error import jwt_manager
import os
import sys
import uuid

# date time utils
from flaskr.utils import custom_json_encoder

# need to import models first
from flaskr.models.anime_model import Anime
from flaskr.models.user_model import User
from flaskr.models.genre_model import Genre
from flaskr.models.studio_model import Studio
from flaskr.models.watch_later_model import watchLater
from flaskr.models.favorites_model import Favorites
from flaskr.models.review_model import Review
from flaskr.models import db

# importing mock data
from flaskr.models.sample_scrape import *


def create_app(test_config=None):
    # create and configure the app
    # true means will load config.py from the instance folder
    app = Flask(__name__, instance_relative_config=True,
                static_folder='../build', static_url_path='/')

    # ensure the instance folder exists (by creating the folder)
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # from_mapping accepts **kwargs arguments (keyword pairs such as first ='Geeks', mid ='for', last='Geeks')
    app.config.from_mapping(
        SECRET_KEY='dev',
        # DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        # the config.py exists in the instance folder (neighbour to /flaskr)
        # load the instance config, if it exists, when not testing
        # loaded variables are config variables, not env variables
        # env variables are loaded by dot-env by default (should be specified in .flaskenv)
        app.config.from_pyfile('config.py', silent=True)
    elif test_config == 'azure':
        app.config.from_pyfile('azure_config.py', silent=True)
    else:
        # load the test config if passed in successfully
        app.config.from_mapping(test_config)

    # custom Encoder to parse datetime object
    app.json_encoder = custom_json_encoder.CustomJSONEncoder

    # initialize the SQLAlchemy plugin
    # this db has already been passed through model definitions
    db.init_app(app)

    # initialize JWT authentication system
    jwt_manager.init_app(app)

    # bind the db to this particular instance of app
    # no need to to clean up application context (with already handles that)
    # no need to clean up session of SQLAlchemy (Flask extension already handles that)
    with app.app_context():
        # creating our tables
        db.create_all()

        # import parts of our application
        from flaskr.routes import anime_routes
        from flaskr.routes import user_routes

        # register our blueprints
        app.register_blueprint(anime_routes.bp)
        app.register_blueprint(user_routes.bp)

    # a simple page that tests deployment
    @app.route('/test_deploy')
    def test_deploy():
        return 'Deploy on Azure successfully!'

    @app.route('/add_anime')
    def add_anime():
        # committing mock data (probably real data right now)
        # can always commit airing_start_str additionally
        for i in range(len(id_anime)):
            to_add = Anime(
                anime_id=id_anime[i],
                name=name_anime[i],
                name_eng=name_eng_anime[i],
                name_jpn=name_jpn_anime[i],
                num_episodes=num_episodes_anime[i],
                source=source_anime[i],
                members=members_anime[i],
                favorites=favorites_anime[i],
                status=status_anime[i],
                rank=rank_anime[i],
                popularity=popularity_anime[i],
                scored_by=scored_by_anime[i],
                duration=duration_anime[i],
                synopsis=synopsis_anime[i],
                background=background_anime[i],
                rating=rating_anime[i],
                anime_type=type_anime[i],
                airing_start=airing_start_anime[i],
                airing_end=airing_end_anime[i],
                airing_str=airing_str_anime[i],
                anime_image_path=image_path_anime[i],
                mal_anime_image_path=mal_image_path_anime[i],
                trailer_url=trailer_url_anime[i]
            )
            # SQL Alchemy automatically handle genre and studio models to us
            for j in anime_genre_rel[i]:
                to_add.genre.append(Genre(genre_id=j[0], genre_name=j[1]))
            for j in anime_studio_rel[i]:
                to_add.studio.append(Studio(studio_id=j[0], studio_name=j[1]))
            db.session.merge(to_add)
            db.session.commit()

        return '<img src="https://media1.tenor.com/images/678955ca4337fc9a61ceb342ecb26760/tenor.gif?itemid=7905894" title="i love emilia">'

    # a simple page that tests the React build directory
    @app.errorhandler(404)
    def not_found(e):
        return app.send_static_file('index.html')

    @app.route('/test')
    def test():
        to_add = Favorites(
            user_id="0x2A5377A0BBF54DACBE9712008D001138", anime_id=33042)
        db.session.merge(to_add)
        db.session.commit()
        return '<img src="https://media1.tenor.com/images/72a449017113abf6716656a18ac85582/tenor.gif?itemid=17382357" title="yukino best girl">'
    
    @app.route('/test_review')
    def test_review():
        to_add = Review(
            review_id = uuid.uuid4(),
            user_id = uuid.uuid4(),
            anime_id = "12345",
            review_rating = "100",
            review_content = "hi! this is alex"
        )
        db.session.merge(to_add)
        db.session.commit()
        return 'test_review finished!'

    return app
