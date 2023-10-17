document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const blogTitle = document.getElementById("blog-title").value;
    const blogContent = document.getElementById("blog-content").value;

    // Perform basic client-side validation
    if (!name || !email || !password || !blogTitle || !blogContent) {
        document.getElementById("error-message").textContent = "Please fill in all fields.";
        return;
    }

    // You can add more specific validation here (e.g., email format).

    // If the form is valid, you can submit the data to the server.
    // You would typically use AJAX to send the data to your PHP backend.

    // For this example, simulate a successful submission.
    // Replace this with actual submission logic.
    alert("Registration and blog post submission successful!");
});
