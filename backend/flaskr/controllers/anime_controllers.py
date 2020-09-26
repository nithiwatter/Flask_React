from flask import jsonify, request
from flaskr.models.anime_model import Anime
from flaskr.utils.helperFunctions import getPagination


def test_method():
    test_result = Anime.query.order_by(Anime.rating.desc()).limit(50).all()

    return jsonify(test_result)

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
    res = {}
    res['status'] = 'success'
    res['data'] = result
    return jsonify(res)
