document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
    const nav = document.querySelector("nav");
    const modeToggle = document.querySelector(".dark-light");
    const sidebarOpen = document.querySelector(".sidebarOpen");
    const sidebarClose = document.querySelector(".sidebarClose");
    const menu = document.querySelector(".menu");
    const profileButton = document.getElementById("profileButton");
    const profileMenu = document.querySelector(".user-menu");

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

    profileButton.addEventListener("click", () => {
        // Toggle visibility of the user profile menu only if the user is logged in
        if (authManager.isLoggedIn) {
            profileMenu.classList.toggle("show");
        }
    });

    // Füge einen Event-Listener für den Logout-Button hinzu
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            authManager.logout();
            // Hier weiterleiten zur Index-Seite
            window.location.href = "index.html";
        });
    }

    // Füge einen Event-Listener für den Login-Button hinzu
    document.getElementById("loginButton").addEventListener("click", function () {
        // Hier weiterleiten zur Login-Seite
        window.location.href = "login.html";
    });
});

class AuthManager {
    constructor() {
        this.isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        this.userEmail = localStorage.getItem("userEmail") || "";
        this.setUserInformation();
    }

    setUserInformation() {
        const userNames = {
            "max@example.com": "Max",
            "leon@example.com": "Leon",
            "jendrigo@example.com": "Jendrigo"
            // Weitere E-Mail-Adressen und Benutzernamen nach Bedarf hinzufügen
        };

        this.userName = userNames[this.userEmail] || "Max"; // Standardwert ist "Max"
    }

    updateLoginStatus() {
        const loginButton = document.getElementById("loginButton");
        const logoutButton = document.getElementById("logoutButton");
        const profileButton = document.getElementById("profileButton");

        if (this.isLoggedIn) {
            loginButton.style.display = "none";
            logoutButton.style.display = "inline-block";
            profileButton.style.display = "inline-block";
        } else {
            loginButton.style.display = "inline-block";
            logoutButton.style.display = "none";
            profileButton.style.display = "none";
        }
    }

    logout() {
        this.isLoggedIn = false;
        this.userEmail = "";
        localStorage.setItem("isLoggedIn", "false");
        localStorage.setItem("userEmail", "");
        this.setUserInformation();
        this.updateLoginStatus();
    }

    login(email) {
        // Hier könntest du den Login-Prozess implementieren
        // Zum Beispiel: Setze isLoggedIn auf true, speichere die E-Mail-Adresse und aktualisiere den Login-Status
        this.isLoggedIn = true;
        this.userEmail = email;
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", email);
        this.setUserInformation();
        this.updateLoginStatus();
    }
}
