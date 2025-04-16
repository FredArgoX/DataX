# CODE IMPLEMENTATION: Linear Regression

# Import necessary libraries
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split # Splitting data
from sklearn.linear_model import LinearRegression # Linear Regression
from sklearn.metrics import mean_squared_error, r2_score # Model evaluation
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

# Model training
linR_model = LinearRegression()
linR_model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = linR_model.predict(X_test)

# --------------------------------------------------------------------------
# MODEL EVALUATION

# Calculate Mean Squared Error (MSE)
mse = mean_squared_error(y_test, y_pred)

# Calculate R-squared score (R²)
r2 = r2_score(y_test, y_pred)

# --------------------------------------------------------------------------
# REGRESSION VISUALIZATION
# RESIDUAL PLOT VISUALIZATION

# Feature Matrix with 1 feature: 2D visualization
# Feature Matrix with 2 features: 3D visualization
# Feature Matrix with 2+ features: Dimensionality Reduction > 2D or 3D plot
