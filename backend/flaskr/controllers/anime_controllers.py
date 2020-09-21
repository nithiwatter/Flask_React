from flaskr.models.anime_model import db, Anime


def test_method():
    test_result = Anime.query.order_by(Anime.name).all()
    print(test_result)
    return str(test_result)
