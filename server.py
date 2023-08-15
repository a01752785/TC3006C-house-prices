from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/predict', methods=["POST"])
def predict():
    data = request.get_json()
    result = {"predicted_price": 5.5}
    return jsonify(result)


if __name__ == "__main__":
    app.run(host="0.0.0.0")
