function renderAlgorithm(linkId, htmlPath, pyPath, codeId, projectId, projectUrl) {
    const link = document.getElementById(linkId);
    const container = document.querySelector(".code-container");
    
    link.addEventListener("click", (event) => {
        event.preventDefault();
        container.innerHTML = ""; // Clear content first

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

                // Scroll to mn3 div after content is fully rendered
                const targetDiv = document.getElementById("mn3");
                if (targetDiv) {
                    targetDiv.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
                }
            })
            .catch(error => {
                console.error(`Error loading ${htmlPath}:`, error);
                container.innerHTML = "<p>Error loading content. Please try again.</p>";
            });
    });
}

function setupCopyButton(codeId) {
    const copyButton = document.querySelector(".copy-btn");
    const codeElement = document.getElementById(codeId);
    if (copyButton && codeElement) {
        const newButton = copyButton.cloneNode(true);
        copyButton.parentNode.replaceChild(newButton, copyButton);
        
        newButton.addEventListener("click", () => {
            navigator.clipboard.writeText(codeElement.textContent)
                .then(() => {
                    newButton.innerHTML = "Copied";
                    newButton.classList.add("Bluer");
                    setTimeout(() => {
                        newButton.innerHTML = `
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
    if (projectBTN) {
        const newButton = projectBTN.cloneNode(true);
        projectBTN.parentNode.replaceChild(newButton, projectBTN);
        newButton.addEventListener("click", () => window.open(url, "_blank"));
    }
}

// Usage
renderAlgorithm("001", 
    "./algorithms/linearRegression.html", 
    "./python_guides/linearRegression.py", 
    "linearRegression-code", 
    "project-linearRegression", 
    "https://www.google.com");
renderAlgorithm("007", 
    "./algorithms/dtr.html", 
    "./python_guides/decisionTreeRegression.py", 
    "dtr-code", 
    "project-dtr", 
    "https://www.amazon.com");




// renderAlgorithm(linkId, htmlPath, pyPath, codeId, projectId, projectUrl)