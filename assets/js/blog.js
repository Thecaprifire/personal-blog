// Function to render blog posts from localStorage
function renderBlogPosts() {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const blogPostsContainer = document.getElementById("blogPosts");

    // Clear previous posts
    blogPostsContainer.innerHTML = "";

    // Loop through posts and render each one
    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h2 class="post-title">${post.title}</h2>
            <p class="post-content">${post.content}</p>
            <p><em>Posted by: ${post.username}</em></p>
        `;
        blogPostsContainer.appendChild(postElement);
    });
}

// Call renderBlogPosts function when page loads
document.addEventListener("DOMContentLoaded", renderBlogPosts);

// Function to toggle moon/sun icon and dark mode
document.addEventListener("DOMContentLoaded", function() {
    const toggleModeButton = document.getElementById("toggleMode");

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
});

