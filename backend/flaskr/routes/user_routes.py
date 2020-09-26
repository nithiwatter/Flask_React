from flask import Blueprint
import flaskr.controllers.user_controllers as main_controller

bp = Blueprint('user', __name__, url_prefix='/api/user')

bp.route('/register', methods=['POST'])(main_controller.register)
