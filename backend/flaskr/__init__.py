# application factory to create the main app for this particular package
from flask import Flask
import os
import sys

# need to import models first
from flaskr.models.anime_model import Anime
from flaskr.models import db
from flaskr.models.sample_scrape import *


def create_app(test_config=None):
    # create and configure the app
    # true means will load config.py from the instance folder
    app = Flask(__name__, instance_relative_config=True)

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
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # initialize the SQLAlchemy plugin
    # this db has already been passed through model definitions
    db.init_app(app)

    # bind the db to this particular instance of app
    # no need to to clean up application context (with already handles that)
    # no need to clean up session of SQLAlchemy (Flask extension already handles that)
    with app.app_context():
        # creating our tables
        db.create_all()

        # import parts of our application
        from flaskr.routes import anime_routes

        # register our blueprints
        app.register_blueprint(anime_routes.bp)

    # a simple page that says hello
    @app.route('/hello')
    def hello():
        # test with adding a simple anime
        db.session.add(Anime(name="testtest"))
        db.session.commit()
        return 'Hello, World!'
    
    @app.route('/add_animes')
    def add_animes():
        # for i in range(len(winter['anime'])):
        # to_add = Anime(anime_id=winter['anime'][i]['mal_id'],name=winter['anime'][i]['title'],synopsis=winter['anime'][i]['synopsis'],rating=winter['anime'][i]['score'],airing='123')
        for i in range(len(id_anime)):
            to_add = Anime(anime_id=id_anime[i],name=name_anime[i],synopsis=synopsis_anime[i],rating=rating_anime[i],airing='123')
            db.session.merge(to_add)
            db.session.commit()
        return 'done'

    return app
