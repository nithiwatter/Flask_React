from flask_sqlalchemy import SQLAlchemy

# need to call coercion first to allows conversion from UUID to datatypes/convenient checking of types
from sqlalchemy_utils import force_auto_coercion

# globally accessible SQLAlchemy (not binded yet)
# will be imported to __init__.py in /flaskr
db = SQLAlchemy()
force_auto_coercion()
