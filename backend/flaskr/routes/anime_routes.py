from flask import Blueprint
import flaskr.controllers.anime_controllers as main_controller

bp = Blueprint('anime', __name__, url_prefix='/api/anime')

# cannot use a normal decorator syntax as it needs def:
# just call the function directly
bp.route('/all', methods=['GET'])(main_controller.test_method)
bp.route('/searchLists', methods=['GET'])(main_controller.get_search_lists)
bp.route('/topAnime', methods=['GET'])(main_controller.get_top_50_anime)
bp.route('/<anime_id>',
         methods=['GET'])(main_controller.get_specific_anime)
