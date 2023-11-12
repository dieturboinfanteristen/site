document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Verhindert das Standardverhalten des Formulars (Seitenaktualisierung)

      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");

      const email = emailInput.value;
      const password = passwordInput.value;

      // Definiere eine Liste von Benutzerdaten
      const users = [
          { email: "max@example.com", password: "Max" },
          { email: "leon@example.com", password: "Leon" },
          { email: "jendrigo@example.com", password: "Jendrigo" }
      ];

      console.log("Eingegebene E-Mail:", email);
      console.log("Eingegebenes Passwort:", password);

      // Überprüfe, ob die eingegebenen Benutzerdaten in der Liste vorhanden sind
      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
          console.log("Erfolgreich eingeloggt! Benutzer:", user);

          // Benutzer erfolgreich eingeloggt, speichere die E-Mail-Adresse im Local Storage
          localStorage.setItem("loggedInEmail", email);

          // Weiterleiten zur eingeloggt.html-Seite
          window.location.href = "index.html"; // Achte darauf, dass du zur richtigen Seite weiterleitest
      } else {
          // Zeige eine präzise Fehlermeldung an
          const errorMessage = document.getElementById("error-message");
          errorMessage.textContent = "Anmeldung fehlgeschlagen. Überprüfe deine E-Mail-Adresse und dein Passwort.";
      }
  });
});
