# CODE IMPLEMENTATION: Decision Tree Regression

# Import necessary libraries
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split # Splitting data
from sklearn.tree import DecisionTreeRegressor # DT Regressor
from sklearn.metrics import mean_squared_error, r2_score  # Model evaluation
from sklearn import tree  # Decision Tree Visualization
import graphviz                # Decision Tree Visualization

# --------------------------------------------------------------------------
# DATA PREPARATION

# Load the dataset and transform it to dataframe
# ...
df

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
X = df.drop(columns=["target"])  # Replace "target" with the actual column name
y = df["target"]

# Split the data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# If Dimensionality Reduction will be performed:
# 1. Feature Scaling required before
# 2. Perform Dimensionality Reduction

# If Feature Selection will be performed instead of PCA or ICA:
# No Feature Scaling required

# --------------------------------------------------------------------------
# MODEL TRAINING AND PREDICTION

# max_depth can be specified
dtr_model = DecisionTreeRegressor()
dtr_model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = dtr_model.predict(X_test)

# --------------------------------------------------------------------------
# MODEL EVALUATION

# Calculate Mean Squared Error (MSE)
mse = mean_squared_error(y_test, y_pred)

# Calculate R-squared score (R²)
r2 = r2_score(y_test, y_pred)

# --------------------------------------------------------------------------
# DECISION TREE VISUALIZATION

dot_data = tree.export_graphviz(dtr_model, out_file=None, filled=True,  rounded=True,   special_characters=True)  
graph = graphviz.Source(dot_data)  
graph 