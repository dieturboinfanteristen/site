document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector("body");
    const nav = document.querySelector("nav");
    const modeToggle = document.querySelector(".dark-light");
    const sidebarOpen = document.querySelector(".sidebarOpen");
    const sidebarClose = document.querySelector(".sidebarClose");
    const menu = document.querySelector(".menu");

    // Initialisiere die AuthManager-Instanz global
    window.authManager = new AuthManager();
    authManager.updateLoginStatus();

    modeToggle.addEventListener("click", () => {
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        if (!body.classList.contains("dark")) {
            localStorage.setItem("mode", "light-mode");
        } else {
            localStorage.setItem("mode", "dark-mode");
        }
    });

    sidebarOpen.addEventListener("click", () => {
        if (window.innerWidth <= 790) {
            menu.style.left = "0";
        } else {
            nav.classList.add("active");
        }
    });

    sidebarClose.addEventListener("click", () => {
        if (window.innerWidth <= 790) {
            menu.style.left = "-100%";
        } else {
            nav.classList.remove("active");
        }
    });

    // Füge einen Event-Listener für den Logout-Button hinzu
    document.getElementById("logoutButton").addEventListener("click", function () {
        authManager.logout();
        // Hier weiterleiten zur Index-Seite
        window.location.href = "index.html";
    });

    // Füge einen Event-Listener für den Login-Button hinzu
    document.getElementById("loginButton").addEventListener("click", function () {
        // Hier weiterleiten zur Login-Seite
        window.location.href = "login.html";
    });
});

class AuthManager {
    constructor() {
        this.isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    }

    updateLoginStatus() {
        const loginButton = document.getElementById("loginButton");
        const logoutButton = document.getElementById("logoutButton");

        if (this.isLoggedIn) {
            loginButton.style.display = "none";
            logoutButton.style.display = "inline-block";
        } else {
            loginButton.style.display = "inline-block";
            logoutButton.style.display = "none";
        }
    }

    logout() {
        this.isLoggedIn = false;
        localStorage.setItem("isLoggedIn", "false");
        this.updateLoginStatus();
    }

    login() {
        // Hier könntest du den Login-Prozess implementieren
        // Zum Beispiel: Setze isLoggedIn auf true und aktualisiere den Login-Status
        this.isLoggedIn = true;
        localStorage.setItem("isLoggedIn", "true");
        this.updateLoginStatus();
    }
}
