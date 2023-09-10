from data_scaler import DataScaler
from flask import Flask, jsonify, request
from joblib import load
import numpy as np
import pandas as pd
import pathlib
from sklearn.linear_model import Lasso
from typing import Optional

app = Flask(__name__)

model: Optional[Lasso] = None
x_scaler: Optional[DataScaler] = None
y_scaler: Optional[DataScaler] = None


@app.route('/predict', methods=["POST"])
def predict():
    data = request.get_json()
    print(data)
    row = pd.DataFrame()
    row["LotArea"] = np.array([data["lot_area"]])
    row["OverallQual"] = np.array([data["overall_quality"]])
    row["OverallCond"] = np.array([data["overall_cond"]])
    row["YearBuilt"] = np.array([data["year_built"]])
    row["YearRemodAdd"] = np.array([data["year_remod_add"]])
    row["BsmtFinSF1"] = np.array([data["bsmt_finished_sf_1"]])
    row["BsmtFinSF2"] = np.array([data["bsmt_finished_sf_2"]])
    row["2ndFlrSF"] = np.array([data["second_floor_sf"]])
    row["GrLivArea"] = np.array([data["above_grade_living_area_sf"]])
    row["BsmtFullBath"] = np.array([data["bsmt_full_bath"]])
    row["BedroomAbvGr"] = np.array([data["bedroom_above_grade"]])
    row["KitchenAbvGr"] = np.array([data["kitchen_above_grade"]])
    row["Fireplaces"] = np.array([data["fireplaces"]])
    row["GarageYrBlt"] = np.array([data["garage_year_built"]])
    row["GarageCars"] = np.array([data["garage_cars"]])
    row["GarageArea"] = np.array([data["garage_area"]])
    predicted_price = model.predict(x_scaler.scale(row))
    df_result = pd.DataFrame()
    df_result["SalePrice"] = np.array(predicted_price)
    result = {"predicted_price": y_scaler.de_scale(df_result).iloc[0][0]}
    return jsonify(result)


if __name__ == "__main__":
    model = load(pathlib.Path("house-pricing.joblib"))
    x_scaler = load(pathlib.Path("x-data-scaler.joblib"))
    y_scaler = load(pathlib.Path("y-data-scaler.joblib"))
    app.run(host="0.0.0.0")
