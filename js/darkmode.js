export default function DarkMode() {
    const root = document.documentElement;
    const toggle = document.querySelector("#switch");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const storageKey = "darkmode";

    function applyTheme(theme) {
        root.setAttribute("data-mode", theme);

        if (theme === "dark") {
            toggle.checked = true;
        } else {
            toggle.checked = false;
        }
    }

    const savedTheme = localStorage.getItem(storageKey);

    if (savedTheme !== null) {
        applyTheme(savedTheme);
    } else {
        if (systemTheme.matches) {
            applyTheme("dark");
        } else {
            applyTheme("light");
        }
    }

    toggle.addEventListener("change", function () {
        let theme;

        if (toggle.checked) {
            theme = "dark";
        } else {
            theme = "light";
        }

        applyTheme(theme);
        localStorage.setItem(storageKey, theme);
    });
}