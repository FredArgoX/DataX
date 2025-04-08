# Import necessary libraries
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split # Splitting data
from sklearn.linear_model import LogisticRegression # Logistic Regression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix  # Model evaluation

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

# Feature scaling not required. Read more above

# --------------------------------------------------------------------------
# MODEL TRAINING AND PREDICTION

# Model training
lg_model = LogisticRegression()
lg_model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = lg_model.predict(X_test)

# --------------------------------------------------------------------------
# MODEL EVALUATION

# Calculate accuracy
accuracy = accuracy_score(y_test, y_pred)

# Confusion matrix (to see correct/incorrect classifications)
conf_matrix = confusion_matrix(y_test, y_pred)

# Classification report
report = classification_report(y_test, y_pred)