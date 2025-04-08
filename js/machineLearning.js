/* /////////////////////////////////////////////////////// */
// MACHINE LEARNING INTERACTIVITY

// COPY CODE BUTTON
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".copy-btn").forEach(button => {
        button.addEventListener("click", () => copyCode(button));
    });
    function copyCode(button) {
        const codeBlock = button.nextElementSibling.querySelector("code");
        if (!codeBlock) return;
        const textToCopy = codeBlock.innerText || codeBlock.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            button.classList.add("copied");
            setTimeout(() => button.classList.remove("copied"), 1500);
        }).catch(err => console.error("Error copying text: ", err));
    }
});

/* /////////////////////////////////////////////////////// */

// KNN
document.addEventListener("DOMContentLoaded", function() {
    fetch("./python_guides/knn.py")
        .then(response => response.text())
        .then(code => {
            document.getElementById("knn-code").textContent = code;
            Prism.highlightAll();
        })
        .catch(error => console.error("Error loading the K-Nearest Neighbors code:", error));
});

// Naive Bayes
document.addEventListener("DOMContentLoaded", function() {
    fetch("./python_guides/naiveBayes.py")
        .then(response => response.text())
        .then(code => {
            document.getElementById("naiveBayes-code").textContent = code;
            Prism.highlightAll();
        })
        .catch(error => console.error("Error loading the Naive Bayes code:", error));
});

// Logistic Regression
document.addEventListener("DOMContentLoaded", function() {
    fetch("./python_guides/logisticRegression.py")
        .then(response => response.text())
        .then(code => {
            document.getElementById("logisticRegression-code").textContent = code;
            Prism.highlightAll();
        })
        .catch(error => console.error("Error loading the Logistic Regression code:", error));
});

// SVC
document.addEventListener("DOMContentLoaded", function() {
    fetch("./python_guides/svc.py")
        .then(response => response.text())
        .then(code => {
            document.getElementById("svc-code").textContent = code;
            Prism.highlightAll();
        })
        .catch(error => console.error("Error loading the Support Vector Classification code:", error));
});

// SVR
document.addEventListener("DOMContentLoaded", function() {
    fetch("./python_guides/svr.py")
        .then(response => response.text())
        .then(code => {
            document.getElementById("svr-code").textContent = code;
            Prism.highlightAll();
        })
        .catch(error => console.error("Error loading the Support Vector Regression code:", error));
});

// DTC
document.addEventListener("DOMContentLoaded", function() {
    fetch("./python_guides/decisionTreeClassification.py")
        .then(response => response.text())
        .then(code => {
            document.getElementById("dtc-code").textContent = code;
            Prism.highlightAll();
        })
        .catch(error => console.error("Error loading the Decision Tree Classification code:", error));
});

// DTR
document.addEventListener("DOMContentLoaded", function() {
    fetch("./python_guides/decisionTreeRegression.py")
        .then(response => response.text())
        .then(code => {
            document.getElementById("dtr-code").textContent = code;
            Prism.highlightAll();
        })
        .catch(error => console.error("Error loading the Decision Tree Regression code:", error));
});

// Linear Regression
document.addEventListener("DOMContentLoaded", function() {
    fetch("./python_guides/linearRegression.py")
        .then(response => response.text())
        .then(code => {
            document.getElementById("linearRegression-code").textContent = code;
            Prism.highlightAll();
        })
        .catch(error => console.error("Error loading the Linear Regression code:", error));
});

/* /////////////////////////////////////////////////////// */

// PROJECTS LINKS TO EXEMPLIFY EACH ML ALGORITHM
// K-Nearest Neighbors
// #project-knn
// #project-naiveBayes
//
//
//
//
//
//
//
//
//
//
//
//
//