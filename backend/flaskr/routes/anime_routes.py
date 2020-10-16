from flask import Blueprint
import flaskr.controllers.anime_controllers as main_controller

bp = Blueprint('anime', __name__, url_prefix='/api/anime')

<<<<<<< HEAD
<<<<<<< HEAD
# cannot use a normal decorator syntax as it needs def:
# just call the function directly
=======
# Can't use normal decorator syntax -> needs def:
# Just call the function directly git push
>>>>>>> origin/master
=======
# Can't use normal decorator syntax -> needs def:
# Just call the function directly git push
>>>>>>> 66b93e24cf7215f0a834d8747490051e0df7567c
bp.route('/all', methods=['GET'])(main_controller.test_method)
bp.route('/searchLists', methods=['GET'])(main_controller.get_search_lists)
bp.route('/topAnime', methods=['GET'])(main_controller.get_top_50_anime)
bp.route('/liveSearch', methods=['GET'])(main_controller.live_search)
bp.route('/advancedSearch', methods=['GET'])(main_controller.advanced_search)
bp.route('/<anime_id>',
         methods=['GET'])(main_controller.get_specific_anime)