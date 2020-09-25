from flask import jsonify
from flaskr.models.anime_model import db, Anime


def test_method():
    test_result = Anime.query.order_by(Anime.rating.desc()).limit(50).all()

    return jsonify(test_result)


def get_top_50_anime():
    result = Anime.query.order_by(Anime.rating.desc()).limit(50).all()
    res = {}
    res['status'] = 'success'
    res['data'] = result
    return jsonify(res)
