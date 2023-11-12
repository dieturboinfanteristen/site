document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

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

    // Sicherheitshinweis: In der Praxis sollten Passwörter gehasht und sicher in einer Datenbank gespeichert werden.

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      console.log("Erfolgreich eingeloggt! Benutzer:", user);

      // Sicherheitshinweis: In der Praxis sollte ein sicherer Token generiert und vom Server zurückgegeben werden.
      // Hier wird nur die E-Mail-Adresse zu Demonstrationszwecken im Local Storage gespeichert.
      localStorage.setItem("loggedInEmail", email);

      // Pfade für die Weiterleitung sollten in einer produktiven Umgebung angepasst werden.
      window.location.href = "/site/index.html";  // Passe den Pfad entsprechend deiner Ordnerstruktur an.
    } else {
      const errorMessage = document.getElementById("error-message");
      errorMessage.textContent = "Anmeldung fehlgeschlagen. Überprüfe deine E-Mail-Adresse und dein Passwort.";
    }
  });
});
