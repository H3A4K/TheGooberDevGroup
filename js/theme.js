function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)

}

function getTheme() {
    const stored = localStorage.getItem("theme")
}