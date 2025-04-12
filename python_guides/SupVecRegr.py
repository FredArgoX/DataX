# CODE IMPLEMENTATION: Support Vector Regression (SVR)

# Import necessary libraries
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split # Splitting data
from sklearn.preprocessing import StandardScaler # Feature Scaling
from sklearn.svm import SVR # SVR = Support Vector Regressor
from sklearn.metrics import mean_squared_error, r2_score  # Model evaluation

# --------------------------------------------------------------------------
# DATA PREPARATION

# Load the dataset and transform it to dataframe
# ...
df

# Split the data into features (X) and target (y)
X = df.drop(columns=["target"])  # Replace "target" with the actual column name
y = df["target"]

# Split the data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scale the features using StandardScaler
# Scaling done after Data split into training and test sets to avoid data leakage
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# --------------------------------------------------------------------------
# MODEL TRAINING AND PREDICTION

# Model training
# kernel can be specified
svr_model = SVR()
svr_model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = svr_model.predict(X_test)

# --------------------------------------------------------------------------
# MODEL EVALUATION

# Calculate Mean Squared Error (MSE)
mse = mean_squared_error(y_test, y_pred)

# Calculate R-squared score (R²)
r2 = r2_score(y_test, y_pred)