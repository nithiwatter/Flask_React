from flask import Flask
app = Flask(__name__)


@app.route('/api/')
def hello_world():
    return 'Hello Worlds hello'


if __name__ == '__main__':
    app.run()
