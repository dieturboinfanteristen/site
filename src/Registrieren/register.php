<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/3.5.0/remixicon.css" crossorigin="">
   <link rel="stylesheet" href="assets/css/styles.css">

   <title>Registrierung</title>
</head>
<body>

<?php
$registrationError = ''; // Initialisiere die Fehlermeldung

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $servername = "sql8.freesqldatabase.com";
    $username = "sql8660634";
    $password = "JVbySyJapU";
    $dbname = "sql8660634";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Verbindung zur Datenbank fehlgeschlagen: " . $conn->connect_error);
    }

    $nutzername = $_POST['user'];
    $email = $_POST['email'];
    $passwort = $_POST['password'];

    // Überprüfen, ob die E-Mail bereits in der Datenbank existiert
    $email_check = "SELECT * FROM benutzer WHERE email = '$email'";
    $result = $conn->query($email_check);

    if ($result->num_rows > 0) {
        $registrationError = "Diese E-Mail-Adresse wird bereits verwendet. Bitte verwende eine andere E-Mail-Adresse.";
    } else {
        // Wenn die E-Mail-Adresse nicht gefunden wird, füge den Benutzer hinzu
        $sql = "INSERT INTO benutzer (nutzername, email, passwort) VALUES ('$nutzername', '$email', '$passwort')";

        if ($conn->query($sql) === true) {
            // Erfolgreiche Registrierung, leite den Benutzer weiter
            header('Location: /Login/index.html');
            exit(); // Beende das Skript nach der Weiterleitung
        } else {
            $registrationError = "Fehler bei der Registrierung: " . $conn->error;
        }
    }

    $conn->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/3.5.0/remixicon.css" crossorigin="">
   <link rel="stylesheet" href="assets/css/styles.css">

   <title>Registrierung</title>
   <style>
      .error-message {
         color: red;
      }
   </style>
</head>
<body>
   <div class="login">
      <img src="assets/img/login-bg.png" alt="image" class="login__bg">

      <form action="register.php" method="POST" class="login__form">
         <h1 class="login__title">Registrierung</h1>

         <div class="login__inputs">
            <div class="login__box">
               <input type="text" placeholder="Nutzername" required class="login__input" name="user">
               <i class="ri-user-fill"></i>
            </div>

            <div class="login__box">
               <input type="email" placeholder="Email" required class="login__input" name="email">
               <i class="ri-mail-fill"></i>
            </div>

            <div class="login__box">
               <input type="password" placeholder="Passwort" required class="login__input" name="password">
               <i class="ri-lock-2-fill"></i>
            </div>
         </div>

         <div id="error-message" class="error-message">
            <?php
            if (isset($registrationError)) {
                echo $registrationError;
            }
            ?>
         </div>
         
         <button type="submit" class="login__button">Registrieren</button>
      </form>
   </div>
</body>
</html>