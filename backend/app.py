# backend/app.py
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Placeholder data
customers = [
    {"id": 1, "name": "John Doe"},
    {"id": 1, "name": "John Doe"},
    {"id": 2, "name": "Jane Smith"}
]

accounts = [
    {"id": 101, "customer_id": 1, "balance": 5000},
    {"id": 102, "customer_id": 2, "balance": 8000}
]

transactions = [
    {"id": 1001, "account_id": 101, "amount": 200, "action": "withdrawal"},
    {"id": 1002, "account_id": 102, "amount": 500, "action": "deposit"}
]

# Routes
@app.route('/api/customers', methods=['GET'])
def get_customers():
    return jsonify(customers)

@app.route('/api/accounts', methods=['GET'])
def get_accounts():
    return jsonify(accounts)

@app.route('/api/transactions', methods=['GET'])
def get_transactions():
    return jsonify(transactions)

if __name__ == '__main__':
    app.run(port=5000, debug=True)

