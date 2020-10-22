# Will edit keys later to prevent SQL Injection Attack, Accessing user data, etc. For EC

ENV = "development"
SECRET_KEY = "SECRET_KEY"
SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:password@localhost/flask_react"
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True
JWT_SECRET_KEY = "SECRET_KEY"
JWT_ACCESS_TOKEN_EXPIRES = False
