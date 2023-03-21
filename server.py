from flask import Flask, jsonify
from flask_cors import cross_origin


app = Flask(__name__)


@app.route("/<uri>")
@cross_origin()
def hello_world(uri):
    return jsonify({
        "html": f"<p>Hello, {uri}!</p>"
    })


if __name__ == '__main__':
    app.run(debug=True)
