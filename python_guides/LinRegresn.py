# CODE IMPLEMENTATION: Linear Regression

# Import necessary libraries
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split # Splitting data
from sklearn.linear_model import LinearRegression # Linear Regression
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error # Model evaluation
import matplotlib.pyplot as plt # Visualization

# --------------------------------------------------------------------------
# DATA PREPARATION

# Load the dataset and transform it to dataframe
# ...
df

# LINEAR REGRESSION WORKS WITH NUMERICAL DATA
# Categorical Feature/Target Encoding
# - One-Hot Encoding: Unordered categories (e.g., red, blue, green)
# - Ordinal Encoding: Ordered categories (e.g., low, medium, high)
# - Binary Encoding: Categories with many unique values (e.g., IDs, ZIP codes)
# - Target Encoding: Categories with many unique values
# - Frequency Encoding: Categories with many unique values

# !!! IMPORTANT:
# Most categorical encoding methods should be applied to the entire dataset before data splitting into training and test sets
# !!! EXCEPTION:
# Some encoding methods introduce data leakage if applied before splitting into training and test sets:
# - Target Encoding | Frequency Encoding
# These methods should be fitted only on the training set and then applied to the test set

# --------------------------------------------------------------------------
# TEST ASSUMPTIONS BEFORE REGRESSION
# ---> Checking linearity and multicollinearity before helps to decide on "variable transformations" and "elimination of redundant predictors"

# Linearity (Include Scatter Plots)
# Multicollinearity

# --------------------------------------------------------------------------
# DATA SPLIT (X, y) & (Train, Test)

# Split the data into features (X) and target (y)
# Option 1: X = df[feature_names_list]
# Option 2:
X = df.drop(columns=["target"])  # Replace "target" with the actual column name
y = df["target"]

# Split the data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# No requirement for feature scaling

# --------------------------------------------------------------------------
# MODEL TRAINING AND PREDICTION

# Model creation and  training
linR_model = LinearRegression()
linR_model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = linR_model.predict(X_test)

# --------------------------------------------------------------------------
# TEST ASSUMPTIONS AFTER REGRESSION
# ---> Checking the error-related assumptions after regression, hepls to define "model validity" and "statistical inference reliability (hypothesis testing, confidence intervals)"

# Independence of errors (Autocorrelation , Durbin-Watson test)
# Homoscedasticity (Constant variance of  errors) (Include Residual plots)
# Normality of errors (Q-Q plots, histograms of residuals, Omnibus, Jarque-Bera test)

# --------------------------------------------------------------------------
# MODEL EVALUATION

# Calculate R-squared score (R²)
r2 = r2_score(y_test, y_pred)

# Calculate Mean Squared Error (MSE)
mse = mean_squared_error(y_test, y_pred)

# Calculate Root Mean Squared Error (RMSE)
rmse = np.sqrt(mse)

# Calculate Mean Absolute Error
mae = mean_absolute_error(y_test, y_pred)

# Print metrics
metrics_values = [r2, mse, rmse, mae]
metrics_names  = ["R²", "MSE", "RMSE", "MAE"]
for name, value in zip(metrics_names, metrics_values):
    print(f"{name:<4}: {value:>12,.10f}")

# --------------------------------------------------------------------------
# REGRESSION VISUALIZATION
# RESIDUAL PLOT VISUALIZATION

# Feature Matrix with 1 feature: 2D visualization
# Feature Matrix with 2 features: 3D visualization
# Feature Matrix with 2+ features: Dimensionality Reduction > 2D or 3D plot
