function validateForm() {
    // Holen Sie die Werte der Email- und Passwortfelder
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Hier fügst du die Überprüfung auf die korrekten Anmeldeinformationen ein
    if (email === "nocopyrightsoundssd@gmail.com" && password === "123") {
        // Erfolgreiche Anmeldung, hier kannst du den Benutzer weiterleiten
        window.location.href = "weiterleitungs-url.html"; // Ersetze "weiterleitungs-url.html" durch die gewünschte URL
    } else {
        // Anmeldung fehlgeschlagen, zeige eine Fehlermeldung in der Div
        errorMessage.innerHTML = "Anmeldung fehlgeschlagen. Überprüfe deine Eingaben.";
    }
}
