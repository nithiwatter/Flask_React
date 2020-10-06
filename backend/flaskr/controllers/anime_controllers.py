# need this to access dataclass listed in the db class obj
import dataclasses
from flask import jsonify, request
from flask.json import dump
from flaskr.models.anime_model import Anime
from flaskr.models.genre_model import Genre
from flaskr.models.studio_model import Studio
from flaskr.utils.helperFunctions import getPagination


def test_method():
    test_result = Anime.query.order_by(Anime.rating.desc()).limit(50).all()

    return jsonify(test_result)


def get_search_lists():
    genre_list = Genre.query.all()
    studio_list = Studio.query.all()
    res = {}
    res['status'] = 'success'
    res['data'] = {}
    res['data']['genre'] = genre_list
    res['data']['studio'] = studio_list

    # for creating json files to be read in the frontend
    # need to dump this everytime if we decide to create new genre?
    # with open('genre.json', 'w') as json_file:
    #     dump(genre_list, json_file)

    # with open('studio.json', 'w') as json_file:
    #     dump(studio_list, json_file)

    return jsonify(res)


# need to work on caching to improve offset performance
# is size really important?


def get_top_50_anime():
    # getting the query strings
    args = request.args

    # default values of page and size
    page = 0
    if 'page' in args.keys():
        page = int(args['page'])

    size = 50
    if 'size' in args.keys():
        size = int(args['size'])

    limit, offset = getPagination(page, size)

    result = Anime.query.order_by(Anime.rating.desc()).limit(
        limit).offset(offset).all()
    res = {}
    res['status'] = 'success'
    res['data'] = result
    return jsonify(res)


def get_specific_anime(anime_id):
    result = Anime.query.get(anime_id)

    # get all the fields we currently have (except genre and studio)
    # manually add these
    result_dict = dataclasses.asdict(result)
    result_dict['genre'] = result.genre
    result_dict['studio'] = result.studio
    res = {}
    res['status'] = 'success'
    res['data'] = result_dict
    return jsonify(res)


def live_search():
    args = request.args
    keyword = args['keyword']

    # could add order by to this query? Performance issue?
    result = Anime.query.filter(Anime.name.contains(keyword)).limit(10).all()
    res = {}
    res['status'] = 'success'
    res['data'] = result
    return jsonify(res)
