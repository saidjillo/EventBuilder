from flask import Flask

app = Flask(__name__)

@app.route('/api/auth/register')

from flask import Flask, jsonify

app = Flask(__name__ )

tasks = [
    {
        'firstName': 'said',
        'secondName': 'umuru',
        'lastName': 'jillo',
        'email': 'umurjillo@gmail.com', 
        'password': 12344
    },
    {
        'firstName': 'said',
        'secondName': 'umuru',
        'lastName': 'jillo',
        'email': 'umurjillo@gmail.com', 
        'password': 12344
    },
    {
        'firstName': 'said',
        'secondName': 'umuru',
        'lastName': 'jillo',
        'email': 'umurjillo@gmail.com', 
        'password': 12344
    }
]

@app.route('/api/auth/v1.0/register', methods=['GET'])
def get_tasks():
    return jsonify({'tasks': tasks})

    if __name__ == '__main__':
        app.run(debug=True)
