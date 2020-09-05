from flask import Flask
app = Flask(__name__)


@app.route('/api/')
def hello_world():
    return 'Hello World 123'


if __name__ == '__main__':
    app.run()
