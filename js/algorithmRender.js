
/*
// Linear Regression Rendering
// ------------------------------------------------------------------------------------------------
// Get the element with id="001"
const linearRegressionLink = document.getElementById("001");
// Get the div with class="code-container"
const codeContainer = document.querySelector(".code-container");
// Add a click event listener to the element with id="001"
linearRegressionLink.addEventListener("click", function(event) {
    event.preventDefault();
    // First, load the linearRegression.html content
    fetch("./algorithms/linearRegression.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load linearRegression.html");
            }
            return response.text();
        })
        .then(data => {
            // Update the code-container with the HTML content
            codeContainer.innerHTML = data;
            // Now that linearRegression.html is loaded, fetch the Python code
            fetch("./python_guides/linearRegression.py")
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Failed to load linearRegression.py");
                    }
                    return response.text();
                })
                .then(code => {
                    // Update the <pre> tag with the Python code
                    const codeElement = document.getElementById("linearRegression-code");
                    if (codeElement) {
                        codeElement.textContent = code;
                        // Highlight the code using Prism (if you're using Prism for syntax highlighting)
                        if (typeof Prism !== "undefined") {
                            Prism.highlightAll();
                        }
                    } else {
                        console.error("Element with id 'linearRegression-code' not found.");
                    }
                })
                .catch(error => {
                    console.error("Error loading the Linear Regression code:", error);
                    codeContainer.innerHTML += "<p>Error loading the Python code. Please try again.</p>";
                });
            //
            //
            //
            const copyButton = document.querySelector(".copy-btn");
            const codeElement = document.getElementById("linearRegression-code");

            if (copyButton && codeElement) {
            copyButton.addEventListener("click", () => {
                navigator.clipboard.writeText(codeElement.textContent)
                .then(() => {
                    copyButton.innerHTML = "Copied";
                    copyButton.classList.add("Bluer");
                    setTimeout(() => {
                    copyButton.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                        viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" stroke-width="2" 
                        stroke-linecap="round" stroke-linejoin="round" class="icon">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9"/>
                        </svg>`;
                    }, 1500);
                })
                .catch(err => console.error("Copy failed", err));
            });
            }
            //
            //
            //
            const projectBTN = document.getElementById('project-linearRegression');
            projectBTN.addEventListener("click", () => {
                window.open("https://www.google.com", "_blank");
            });
            //
            //
            //
        })
        .catch(error => {
            console.error("Error loading linearRegression.html:", error);
            codeContainer.innerHTML = "<p>Error loading content. Please try again.</p>";
        });
});













// Decision Tree Regression Rendering
// ------------------------------------------------------------------------------------------------
// Get the element with id="007"
const decisionTreeRegressionLink = document.getElementById("007");
// Get the div with class="code-container"
// The same container for all algorithms .code-container
const codeContainer2 = document.querySelector(".code-container");
// Add a click event listener to the element with id="007"
decisionTreeRegressionLink.addEventListener("click", function(event) {
    event.preventDefault();
    // First, load the dtr.html content
    fetch("./algorithms/dtr.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load dtr.html");
            }
            return response.text();
        })
        .then(data => {
            // Update the code-container with the HTML content
            codeContainer2.innerHTML = data;
            // Now that linearRegression.html is loaded, fetch the Python code
            fetch("./python_guides/decisionTreeRegression.py")
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Failed to load decisionTreeRegression.py");
                    }
                    return response.text();
                })
                .then(code => {
                    // Update the <pre> tag with the Python code
                    const codeElement = document.getElementById("dtr-code");
                    if (codeElement) {
                        codeElement.textContent = code;
                        // Highlight the code using Prism (if you're using Prism for syntax highlighting)
                        if (typeof Prism !== "undefined") {
                            Prism.highlightAll();
                        }
                    } else {
                        console.error("Element with id 'dtr-code' not found.");
                    }
                })
                .catch(error => {
                    console.error("Error loading the Decision Tree Regression code:", error);
                    codeContainer.innerHTML += "<p>Error loading the Python code. Please try again.</p>";
                });
            //
            //
            //
            const copyButton = document.querySelector(".copy-btn");
            const codeElement = document.getElementById("dtr-code");

            if (copyButton && codeElement) {
            copyButton.addEventListener("click", () => {
                navigator.clipboard.writeText(codeElement.textContent)
                .then(() => {
                    copyButton.innerHTML = "Copied";
                    copyButton.classList.add("Bluer");
                    setTimeout(() => {
                    copyButton.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                        viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" stroke-width="2" 
                        stroke-linecap="round" stroke-linejoin="round" class="icon">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9"/>
                        </svg>`;
                    }, 1500);
                })
                .catch(err => console.error("Copy failed", err));
            });
            }
            //
            //
            //
            const projectBTN = document.getElementById('project-dtr');
            projectBTN.addEventListener("click", () => {
                window.open("https://www.amazon.com", "_blank");
            });
            //
            //
            //
        })
        .catch(error => {
            console.error("Error loading dtr.html:", error);
            codeContainer.innerHTML = "<p>Error loading content. Please try again.</p>";
        });
});


*/




























function renderAlgorithm(linkId, htmlPath, pyPath, codeId, projectId, projectUrl) {
    const link = document.getElementById(linkId);
    const container = document.querySelector(".code-container");
    
    link.addEventListener("click", (event) => {
        event.preventDefault();
        fetch(htmlPath)
            .then(response => response.ok ? response.text() : Promise.reject("Failed to load HTML"))
            .then(data => {
                container.innerHTML = data;
                return fetch(pyPath);
            })
            .then(response => response.ok ? response.text() : Promise.reject("Failed to load Python"))
            .then(code => {
                const codeElement = document.getElementById(codeId);
                if (codeElement) {
                    codeElement.textContent = code;
                    Prism?.highlightAll();
                }
                setupCopyButton(codeId);
                setupProjectButton(projectId, projectUrl);
            })
            .catch(error => {
                console.error(`Error loading ${htmlPath}:`, error);
                container.innerHTML += "<p>Error loading content. Please try again.</p>";
            });
    });
}

function setupCopyButton(codeId) {
    const copyButton = document.querySelector(".copy-btn");
    const codeElement = document.getElementById(codeId);
    if (copyButton && codeElement) {
        copyButton.addEventListener("click", () => {
            navigator.clipboard.writeText(codeElement.textContent)
                .then(() => {
                    copyButton.innerHTML = "Copied";
                    copyButton.classList.add("Bluer");
                    setTimeout(() => {
                        copyButton.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                            viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" stroke-width="2" 
                            stroke-linecap="round" stroke-linejoin="round" class="icon">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9"/>
                            </svg>`;
                    }, 1500);
                })
                .catch(err => console.error("Copy failed", err));
        });
    }
}

function setupProjectButton(projectId, url) {
    const projectBTN = document.getElementById(projectId);
    projectBTN?.addEventListener("click", () => window.open(url, "_blank"));
}

// Usage
renderAlgorithm(
    "001",
    "./algorithms/linearRegression.html",
    "./python_guides/linearRegression.py",
    "linearRegression-code",
    "project-linearRegression",
    "https://www.google.com"
);

renderAlgorithm(
    "007",
    "./algorithms/dtr.html",
    "./python_guides/decisionTreeRegression.py",
    "dtr-code",
    "project-dtr",
    "https://www.amazon.com"
);
