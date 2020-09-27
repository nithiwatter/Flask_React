import uuid
from flask_jwt_extended import create_access_token
from flask import jsonify, request
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
    except:
        # most likely due to duplicate emails
        # will need to handle separate errors later
        res = {}
        res['status'] = 'failure'
        return jsonify(res), 400
