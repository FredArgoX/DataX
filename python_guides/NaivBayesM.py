# CODE IMPLEMENTATION: Naive Bayes (Gaussian, Multinomial, Bernoulli)

# Import necessary libraries
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split # Splitting data
from sklearn.preprocessing import StandardScaler # Feature Scaling
from sklearn.naive_bayes import GaussianNB, MultinomialNB, ComplementNB, BernoulliNB, CategoricalNB # Different Naive Bayes methods
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

# Scale the features using StandardScaler
# Scaling done after Data split into training and test sets. Read KNN explanation on data scaling
# Only performed because this example uses Gaussian Naive Bayes. Read details in the explanation above
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# --------------------------------------------------------------------------
# MODEL TRAINING AND PREDICTION

# Model training
# Using specifically Gaussian Naive Bayes
nb_model = GaussianNB()
nb_model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = nb_model.predict(X_test)

# --------------------------------------------------------------------------
# MODEL EVALUATION

# Calculate accuracy
accuracy = accuracy_score(y_test, y_pred)

# Confusion matrix (to see correct/incorrect classifications)
conf_matrix = confusion_matrix(y_test, y_pred)

# Classification report
report = classification_report(y_test, y_pred)
