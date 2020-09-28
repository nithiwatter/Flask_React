from flask_jwt_extended import JWTManager
from flask import jsonify

jwt_manager = JWTManager()


@jwt_manager.unauthorized_loader
def unauthorized_loader(msg):
    return jsonify({
        'status': 'failure',
        'message': msg
    }), 401


@jwt_manager.expired_token_loader
def expired_token_loader(data):
    print(data)
    return jsonify({
        'status': 'failure',
        'message': 'Token has expired'
    }), 401
