from math import exp, log
import pandas as pd


class DataScaler:
    def __init__(self, df: pd.DataFrame) -> None:
        self.log_const = 0.0001
        self.numerical_features = df.select_dtypes(include="number").columns
        df_scaled = pd.DataFrame()
        for feature in self.numerical_features:
            df_scaled[feature] = df[feature].apply(
                lambda x: log(x + self.log_const)
            )
        self.mean = df_scaled.mean()
        self.std = df_scaled.std()

    def scale(self, df: pd.DataFrame) -> pd.DataFrame:
        numerical_features = df.select_dtypes(include="number").columns
        df_scaled = pd.DataFrame()
        for feature in numerical_features:
            df_scaled[feature] = df[feature].apply(
                lambda x: log(x + self.log_const)
            )
        for feature in numerical_features:
            df_scaled[feature] = df_scaled[feature].apply(
                lambda x: (x - self.mean[feature]) / self.std[feature]
            )
        return df_scaled

    def de_scale(self, df_scaled: pd.DataFrame) -> pd.DataFrame:
        df = pd.DataFrame()
        for feature in self.numerical_features:
            df[feature] = df_scaled[feature].apply(
                lambda x: x * self.std[feature] + self.mean[feature]
            )
        for feature in self.numerical_features:
            df[feature] = df[feature].apply(
                lambda x: exp(x - self.log_const)
            )
        return df
