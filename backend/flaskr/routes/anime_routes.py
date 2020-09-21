from flask import Blueprint
import flaskr.controllers.anime_controllers as main_controller

bp = Blueprint('anime', __name__, url_prefix='/anime')

# cannot use a normal decorator syntax as it needs def:
# just call the function directly
bp.route('/all', methods=['GET'])(main_controller.test_method)