/* /////////////////////////////////////////////////////// */
// SOCIAL MEDIA LINKS: Github, LinkedIn, X
const githubBtn = document.querySelector(".github");
const linkedinBtn = document.querySelector(".linkedin");
const xBtn = document.querySelector(".x");
//
githubBtn.addEventListener("click", () => {
    window.open("https://github.com/FredArgoX", "_blank");
});
linkedinBtn.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/fredy-arce-data-science/", "_blank");
});
xBtn.addEventListener("click", () => {
    window.open("./index.html", "_blank");
});
