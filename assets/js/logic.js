document.addEventListener("DOMContentLoaded", function() {
    const blogForm = document.getElementById("blogForm");
    const toggleModeButton = document.getElementById("moonButton");

    // Handle form submission
    blogForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.querySelector('input[name="username"]').value;
        const title = document.querySelector('input[name="title"]').value;
        const content = document.querySelector('textarea[name="content"]').value;

        if (!username || !title || !content) {
            alert("Please complete all fields!");
            return;
        }

        const postData = {
            username: username,
            title: title,
            content: content
        };

        // Save post data to localStorage
        savePost(postData);

        // Redirect to posts page
        window.location.href = "blog.html";
    });

    // Function to toggle moon/sun icon and dark mode
    toggleModeButton.addEventListener("click", function() {
        // Toggle the text content of the button based on its current value
        if (toggleModeButton.textContent.trim() === "🌙") {
            toggleModeButton.textContent = "🌞"; // Change to sun icon
            document.body.classList.remove("light-mode");
            document.body.classList.add("dark-mode"); // Add dark mode class
        } else {
            toggleModeButton.textContent = "🌙"; // Change back to moon icon
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode"); // Add light mode class
        }
    });

    // Function to save post data to localStorage
    function savePost(postData) {
        let posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.push(postData);
        localStorage.setItem("posts", JSON.stringify(posts));
    }
});
