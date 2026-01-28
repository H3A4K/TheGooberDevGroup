function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
}

function getTheme() {
    const stored = localStorage.getItem("theme")
    if (stored) {
        return stored
    }

    //https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript4
    if (window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"; 
    }

    return "light"
}

// Implies only light and dark mode available
function invertTheme() {
    const theme = getTheme() == "light" ? "dark" : "light"
    setTheme(theme);
    const button = document.getElementById("theme");
    button.innerHTML = `Switch to ${theme} mode`
}

//https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript4
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    setTheme(event.matches ? "dark" : "light");
});

document.getElementById("theme").addEventListener("click", () => {
    invertTheme()
});
