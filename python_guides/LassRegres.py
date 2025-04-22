# CODE IMPLEMENTATION: Lasso Regression

# Import necessary libraries
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler  # Feature scaling
from sklearn.model_selection import train_test_split  # Splitting data
from sklearn.linear_model import Lasso, LassoCV  # Lasso Regression
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error  # Model evaluation
import matplotlib.pyplot as plt  # Visualization
import seaborn as sns  # Visualization

# --------------------------------------------------------------------------
# DATA PREPARATION

# Load the dataset and transform it to dataframe
# ...
df

# LASSO REGRESSION WORKS WITH NUMERICAL DATA
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
# ---> Checking linearity and multicollinearity before regression

# Linearity
# Multicollinearity
# (sns.heatmap(df.corr()))(Scatter Plots) (sns.pairplot(df))

# --------------------------------------------------------------------------
# DATA SPLIT (X, y) & (Train, Test)

# Split the data into features (X) and target (y)
# Option 1: X = df[feature_names_list]
# Option 2:
X = df.drop(columns=["target"])  # Replace "target" with the actual column name
y = df["target"]

# Split the data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Feature Scaling required
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# --------------------------------------------------------------------------
# MODEL TRAINING AND PREDICTION

# Model creation and training
model = Lasso(alpha=0.1)  # Manual selection of alpha value (Use LassoCV to find optimal alpha value)
model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test)

# --------------------------------------------------------------------------
# MODEL TRAINING AND PREDICTION (Cross-Validation)

# Model creation and training using cross-validation
model_cv = LassoCV(alphas=np.logspace(-6, 6, 100), cv=5, max_iter=10000)
model_cv.fit(X_train, y_train)

# Make predictions on the test set
y_pred_cv = model_cv.predict(X_test)

# --------------------------------------------------------------------------
# MODEL EVALUATION

# Train Score
train_score = model.score(X_train, y_train)
train_score_cv = model_cv.score(X_train, y_train)

# Test Score
test_score = model.score(X_test, y_test)
test_score_cv = model_cv.score(X_test, y_test)

# Calculate R-squared score (R²)
r2 = r2_score(y_test, y_pred)
r2_cv = r2_score(y_test, y_pred_cv)

# Calculate Mean Squared Error (MSE)
mse = mean_squared_error(y_test, y_pred)
mse_cv = mean_squared_error(y_test, y_pred_cv)

# Calculate Root Mean Squared Error (RMSE)
rmse = np.sqrt(mse)
rmse_cv = np.sqrt(mse_cv)

# Calculate Mean Absolute Error
mae = mean_absolute_error(y_test, y_pred)
mae_cv = mean_absolute_error(y_test, y_pred_cv)

# Print metrics
print(f"Train Score: {train_score:>12,.10f}")
print(f"Test Score : {test_score:>12,.10f}")
metrics_values = [r2, mse, rmse, mae]
metrics_names  = ["R²", "MSE", "RMSE", "MAE"]
for name, value in zip(metrics_names, metrics_values):
    print(f"{name:<4}: {value:>12,.10f}")

# Print metrics (Cross-Validation)
print(f"Train Score CV: {train_score_cv:>12,.10f}")
print(f"Test Score CV : {test_score_cv:>12,.10f}")
metrics_values_cv = [r2_cv, mse_cv, rmse_cv, mae_cv]
metrics_names_cv  = ["R²", "MSE", "RMSE", "MAE"]
for name, value in zip(metrics_names_cv, metrics_values_cv):
    print(f"{name:<4}: {value:>12,.10f}")

# --------------------------------------------------------------------------
# TEST ASSUMPTIONS AFTER REGRESSION
# ---> Checking the error-related assumptions after regression, helps to define "model validity" and "statistical inference reliability (hypothesis testing, confidence intervals)"

# Independence of errors (Autocorrelation , Durbin-Watson test)
# Homoscedasticity (Constant variance of errors) (Include Residual plots)
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

# features_cv = X.columns
# coefficients_cv = model_cv.coef_
# plt.plot(features_cv, coefficients_cv)
