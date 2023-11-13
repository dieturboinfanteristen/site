    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("loginForm");
        const loginButton = document.querySelector(".login__button");
        const errorMessage = document.getElementById("error-message");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const emailInput = document.getElementById("email");
            const passwordInput = document.getElementById("password");

            const email = emailInput.value;
            const password = passwordInput.value;

            const users = [
                { email: "max@example.com", password: "Max" },
                { email: "leon@example.com", password: "Leon" },
                { email: "jendrigo@example.com", password: "Jendrigo" }
            ];

            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                console.log("Erfolgreich eingeloggt! Benutzer:", user);

                localStorage.setItem("loggedInEmail", email);
                loginButton.style.display = "none"; // Hide the button on successful login
                errorMessage.textContent = ""; // Clear any previous error messages
                window.location.href = "index.html";  // Adjust the path based on your folder structure.
            } else {
                errorMessage.textContent = "Anmeldung fehlgeschlagen. Überprüfe deine E-Mail-Adresse und dein Passwort.";
                loginButton.style.display = "block"; // Show the button on login failure
            }
        });
    });