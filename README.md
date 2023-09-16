# TC3006C-house-prices
ML model for House Prices dataset

This repository contains the backend and frontend code to serve a Machine Learning Model trained to predict a house price using features related to the house, like total area, number of bedrooms, etc.

## Running the repository

To run the backend server, use the following commands to install are required libraries (Python 3.10):

```
pip install flask
pip install flask-cors
pip install joblib
pip install numpy
pip install pandas
pip install scikit-learn
```

Then, start the Flask development server, with the terminal located in the root directory:

```
python backend/server.py
```

For the frontend server, it is required to have the latest version of node-js and npm.

To run the React development server, change first to the directory 'frontend'.

```
cd frontend
```

Then, install all the required dependencies.

```
npm install
```

Finally, run the server.

```
npm start
```

Access the project via ` localhost:3000 ` using a web browser.

Author: David Damian Galan

Submission Date: September 16, 2023

Student ID: A01752785
