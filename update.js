document.getElementById("update-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const blogTitle = document.getElementById("blog-title").value;
    const blogContent = document.getElementById("blog-content").value;

    if (!blogTitle || !blogContent) {
        document.getElementById("error-message").textContent = "Please fill in all fields.";
        return;
    }

    
    alert("Blog post updated successfully!");
});
