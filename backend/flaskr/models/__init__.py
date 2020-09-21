from flask_sqlalchemy import SQLAlchemy

# globally accessible SQLAlchemy (not binded yet)
# will be imported to __init__.py in /flaskr
db = SQLAlchemy()
