const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
dom.window.document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        console.log("DOM loaded. Number of scroll items:", dom.window.document.querySelectorAll('.scroll-indicator-item').length);
        console.log("Indicator classes:", dom.window.document.getElementById('scrollIndicator').className);
        console.log("Active item:", dom.window.document.querySelector('.scroll-indicator-item.active') ? dom.window.document.querySelector('.scroll-indicator-item.active').dataset.cat : "none");
    }, 1000);
});
