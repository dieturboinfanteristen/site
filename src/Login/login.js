function validateForm() {
    // Holen Sie die Werte der Email- und Passwortfelder
    var email = document.querySelector(".login__input[type=email]").value;
    var password = document.querySelector(".login__input[type=password]").value;
 
    // Führe die Überprüfung hier durch, z.B. mit AJAX-Anfragen an einen Server
    if (email === "max@max.com" && password === "123") {
       // Erfolgreiche Anmeldung, hier kannst du Weiterleitungen oder andere Aktionen durchführen
       alert("Anmeldung erfolgreich!");
    } else {
       // Anmeldung fehlgeschlagen, zeige eine Fehlermeldung oder führe andere Aktionen durch
       alert("Anmeldung fehlgeschlagen. Überprüfe deine Eingaben.");
    }
 }
