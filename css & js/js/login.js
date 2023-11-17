// login.js

function toggleMenu() {
    let subMenu = document.getElementById("subMenu");
    subMenu.classList.toggle("open-menu");
}

function loginUser() {
    // Get username and password from input fields (replace these with your actual input field IDs)
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validate username and password (you can replace this with your authentication logic)
    if (username === "example" && password === "password") {
        alert("Login successful! Redirecting to the dashboard."); // Replace with your desired action
        // Add code to redirect or perform actions after successful login
    } else {
        alert("Invalid username or password. Please try again."); // Replace with your desired action
    }
}
