/**
 * Alexander Perlock
 * 
 * Managing swap between light and dark mode
 */

/**
 * Sets the doc's theme to the given
 * stores to local storage for consistency whist swapping pages
 * 
 * @param {string} theme
 */
function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    const button = document.getElementById("theme");
    button.innerHTML = `<img src="./assets/images/${theme}_mode.png">`;
}

/**
 * Gets the most relevant theme: 
 * 1. locally stored  
 * 2. browser
 * 3. default (light)
 * 
 * @returns theme
 */
function getTheme() {
    const stored = localStorage.getItem("theme")
    if (stored) {
        return stored;
    }

    //https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript4
    if (window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"; 
    }

    return "light";
}

/**
 * Inverts the current theme
 * (Implies only light and dark mode available)
 * (Will default to light)
 */
function invertTheme() {
    const theme = getTheme() == "light" ? "dark" : "light";
    setTheme(theme);
}

var rootContext = document.body.getAttribute("data-root");

// Browser event listener
//https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript4
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    setTheme(event.matches ? "dark" : "light");
});

// Document event listener
document.getElementById("theme").addEventListener("click", () => {
    invertTheme();
});

// Theme instantiation
setTheme(getTheme())