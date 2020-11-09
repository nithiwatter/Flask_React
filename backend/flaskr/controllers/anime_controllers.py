# need this to access dataclass listed in the db class obj
import dataclasses
import uuid
from flask import jsonify, request
from flask.json import dump
from flaskr.models import db
from flaskr.models.anime_model import Anime
from flaskr.models.genre_model import Genre
from flaskr.models.review_model import Review
from flaskr.models.studio_model import Studio
from flaskr.models.user_model import User
from flaskr.models.relationship_tables import anime_studio, anime_genre
from flaskr.utils.helperFunctions import getPagination
from datetime import datetime
from sqlalchemy import func


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
    # live search functionality improvements?
    args = request.args
    keyword = args['keyword']

    # could add order by to this query? Performance issue?
    result = Anime.query.filter(Anime.name.contains(keyword)).limit(10).all()
    res = {}
    res['status'] = 'success'
    res['data'] = result
    return jsonify(res)

# Parses query


def advanced_search():
    args = request.args
    anime_title = args['title'] if 'title' in args else 'All'
    anime_type = args['type'] if 'type' in args else 'All'
    anime_score = args['score'] if 'score' in args else 'All'
    anime_status = args['status'] if 'status' in args else 'All'
    anime_producer = args['producer'] if 'producer' in args else 'All'
    anime_start = args['startDate'] if 'startDate' in args else 'All'
    anime_end = args['endDate'] if 'endDate' in args else 'All'
    anime_genre = args['genre'] if 'genre' in args else 'All'
    result = Anime.query

    # Filter all queries
    if anime_title != 'All':
        result = result.filter(Anime.name.contains(anime_title))
    if anime_type != 'All':
        result = result.filter(Anime.anime_type == anime_type)
    if anime_score != 'All':
        anime_score = float(anime_score)
        result = result.filter(Anime.rating >= anime_score)
    if anime_status != 'All':
        result = result.filter(Anime.status == anime_status)
    if anime_producer != 'All':
        result = result.join(Anime.studio)
        result = result.filter(Studio.studio_id == anime_producer)
    if anime_genre != 'All':
        result = result.join(Anime.genre)
        genre_list = anime_genre.split(',')

        result = result.filter(Genre.genre_name.in_(genre_list))
        result = result.group_by(Anime.anime_id).having(
            func.count(Genre.genre_name) == len(genre_list))

    if anime_start != 'All':
        dtstart = datetime.strptime(anime_start, '%m/%d/%Y')
        result = result.filter(Anime.airing_start >= dtstart)
    if anime_end != 'All':
        dtend = datetime.strptime(anime_end, '%m/%d/%Y')
        dtend = dtend.replace(hour=23, minute=59, second=59)
        result = result.filter(Anime.airing_end <= dtend)

    total = result.count()

    # for debugging if genre and studio really yield the correct filtered output
    for a in result:
        print(a.name, a.airing_start, a.genre)
        print('-------------------')

    result = result.limit(10).all()
    res = {}
    res['status'] = 'success'
    res['data'] = result
    res['total'] = total
    return jsonify(res)

def get_reviews():
    args = request.args
    review_user = args['user'] if 'user' in args else 'All'
    review_anime = args['anime'] if 'anime' in args else 'All'
    result = Review.query
    if review_anime != 'All':
        result = result.filter(Review.anime_id == review_anime)
    if review_user != 'All':
        result = result.filter(Review.user_id == review_user)
    res = {}
    result = result.all()
    res['data'] = result
    res['status'] = 'success'
    return jsonify(res)

def post_reviews():
    args = request.args
    res = {}
    review_user = args['user'] if 'user' in args else None
    review_anime = args['anime'] if 'anime' in args else None
    review_rating = args['rating'] if 'rating' in args else None
    review_content = args['content'] if 'content' in args else None
    if review_user == None or review_anime == None or review_rating == None:
        res['status'] = 'failure: user, anime, or rating not passed in'
        return jsonify(res)
    if Anime.query.filter(Anime.anime_id == review_anime).first() == None:
        res['status'] = 'failure: anime does not exist'
        return jsonify(res)
    if User.query.filter(User.user_id == review_user).first() == None:
        res['status'] = 'failure: user does not exist'
        return jsonify(res)
    if review_rating > 10 or review_rating < 1
        res['status'] = 'failure: invalid rating'
        return jsonify(res)
    to_add = Review(
            review_id = uuid.uuid4(),
            user_id = review_user,
            anime_id = review_anime,
            review_rating = review_rating,
            review_content = review_content
        )
    db.session.merge(to_add)
    db.session.commit()
    res['data'] = to_add
    res['status'] = 'success'
    return jsonify(res)