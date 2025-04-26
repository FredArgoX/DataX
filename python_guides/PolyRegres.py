# CODE IMPLEMENTATION: Polynomial Regression

# Import necessary libraries
import numpy as np
import pandas as pd
from sklearn.preprocessing import PolynomialFeatures # Polynomial features
from sklearn.preprocessing import StandardScaler # Feature scaling
from sklearn.model_selection import train_test_split # Splitting data
from sklearn.linear_model import LinearRegression # Linear Regression
from sklearn.linear_model import ElasticNetCV, RidgeCV, LassoCV, ElasticNet, Ridge, Lasso # Regularization options
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error # Model evaluation
import matplotlib.pyplot as plt # Visualization
import seaborn as sns # Visualization

# --------------------------------------------------------------------------
# DATA PREPARATION

# Load the dataset and transform it to dataframe
# ...
df

# POLYNOMIAL REGRESSION WORKS WITH NUMERICAL DATA
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
# ??????????????????????????????????????????????????????????????????????????
# ??????????????????????????????????????????????????????????????????????????
# TEST ASSUMPTIONS BEFORE REGRESSION
# ---> Checking linearity and multicollinearity before regression

# Linearity
# Multicollinearity
# (sns.heatmap(df.corr()))(Scatter Plots) (sns.pairplot(df) (VIF))
# ??????????????????????????????????????????????????????????????????????????
# ??????????????????????????????????????????????????????????????????????????

# --------------------------------------------------------------------------
# DATA SPLIT (X, y) & (Train, Test)

# Split the data into features (X) and target (y)
# Option 1: X = df[feature_names_list]
# Option 2:
X = df.drop(columns=["target"])  # Replace "target" with the actual column name
y = df["target"]

# Split the data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# --------------------------------------------------------------------------
# POLYNOMIAL TRANSFORMATION AND FEATURE SCALING

# Creation of Polynomial features
poly = PolynomialFeatures(degree=2)
X_train_poly = poly.fit_transform(X_train)
X_test_poly = poly.transform(X_test)

# Feature Scaling
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train_poly)
X_test_scaled = scaler.transform(X_test_poly)

# --------------------------------------------------------------------------
# MODEL TRAINING AND PREDICTION

# Model creation and  training
# OLS linear regression or regularized linear regression
# Options:
#model = LinearRegression() # No regularization
#model = Ridge(alpha=10) # Manual
#model = Lasso(alpha=10) # Manual
#model = ElasticNet(alpha=10, l1_ratio=0.5) # Manual
#model = RidgeCV(alphas=np.logspace(-6,6,100), cv=5, max_iter=10000) # Regularization with CV
#model = LassoCV(alphas=np.logspace(-6,6,100), cv=5, max_iter=10000) # Regularization with CV

model = ElasticNetCV(alphas=np.logspace(-6,6,100), l1_ratio=np.linspace(0.0, 1.0, 101), cv=5, random_state=36) # Regularization with Cv
model.fit(X_train_scaled, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test_scaled)

# --------------------------------------------------------------------------
# MODEL TRAINING AND PREDICTION (ITERATION TO FIND OPTIMAL DEGREE BASED ON BIC VALUE)

"""
degrees = np.arange(1, 6, 1) # Degree from 1 to 5
bics = []
def degree_bic_calculator():
  global X_train
  global X_test
  global y_train
  global y_test
  global degrees
  global bics
  for degree in degrees:
    # Creation of Polynomial features
    poly = PolynomialFeatures(degree=degree)
    X_train_poly = poly.fit_transform(X_train)
    X_test_poly = poly.transform(X_test)
    # Feature Scaling
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train_poly)
    X_test_scaled = scaler.transform(X_test_poly)
    # Model Training
    model = ElasticNetCV(alphas=np.logspace(-6,6,100), l1_ratio=np.linspace(0.0, 1.0, 101), cv=6, random_state=36)
    model.fit(X_train_scaled, y_train)
    # Make predictions on the test set
    y_pred = model.predict(X_test_scaled)
    # Calculate BIC (to select degree)
    # bic = ...
    bics.append(bic)
"""
# Select degree associated with the lowest bic

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
# TEST ASSUMPTIONS AFTER REGRESSION
# ---> Checking the error-related assumptions after regression, hepls to define "model validity" and "statistical inference reliability (hypothesis testing, confidence intervals)"

# Independence of errors (Autocorrelation , Durbin-Watson test)
# Homoscedasticity (Constant variance of  errors) (Include Residual plots)
# Normality of errors (Q-Q plots, histograms of residuals, Omnibus, Jarque-Bera test) (for inference)

# --------------------------------------------------------------------------
# REGRESSION VISUALIZATION
# RESIDUAL PLOT VISUALIZATION

# Feature Matrix with 1 feature: 2D visualization
# Feature Matrix with 2 features: 3D visualization
# Feature Matrix with 2+ features: Dimensionality Reduction > 2D or 3D plot

# --------------------------------------------------------------------------
# COEFFICIENT VISUALIZATION

# features = X.columns
# coefficients = model.coef_
# plt.plot(features, coefficients)