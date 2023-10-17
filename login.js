document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        document.getElementById("error-message").textContent = "Please fill in all fields.";
        return;
    }

 
    if (username === "user" && password === "password") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password.";
    }
});
