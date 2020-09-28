import uuid
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from flask import jsonify, request
from sqlalchemy import exc
from flaskr.models.user_model import User, db


def register():
    try:
        new_uuid = uuid.uuid4()
        new_user = User(user_id=new_uuid, email=request.json['email'],
                        password=request.json['password'])
        db.session.add(new_user)
        db.session.commit()

        res = {}
        res['status'] = 'success'
        res['data'] = new_user
        res['access_token'] = create_access_token(identity=new_uuid)
        return jsonify(res)
    except exc.IntegrityError:
        # most likely due to duplicate emails
        # Integrity error is for duplicated records
        res = {}
        res['status'] = 'failure'
        res['message'] = 'This email alreadys exists in the record. Please log in!'
        return jsonify(res), 400


def login():
    try:
        res = {}
        # check if the email exist
        user = User.query.filter_by(email=request.json['email']).first()
        if user is None:
            raise ValueError('No user exists for this email!')
        # check if the password is correct
        if request.json['password'] != user.password:
            raise ValueError('The password is wrong!')
        res['status'] = 'success'
        res['data'] = user
        res['access_token'] = create_access_token(identity=user.user_id)
        return jsonify(res)
    except ValueError as e:
        res['status'] = 'failure'
        res['message'] = str(e)
        return jsonify(res), 400

# protected route that will assess the validity of the jwt token
# if valid, will return the user data to the frontend
# used for automatic login


@jwt_required
def getIdentity():
    try:
        res = {}
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        if user is None:
            raise ValueError(
                'No user exists for this access token. Please log in again.')
        res['status'] = 'success'
        res['data'] = user
        return jsonify(res)
    except ValueError as e:
        res['status'] = 'failure'
        res['message'] = str(e)
        return jsonify(res), 400
