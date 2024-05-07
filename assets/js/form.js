document.addEventListener("DOMContentLoaded", function() {
    const usernameInput = document.querySelector('input[name="username"]');
    const titleInput = document.querySelector('input[name="title"]');
    const contentInput = document.querySelector('textarea[name="content"]');

    // Add event listeners for input validation
    usernameInput.addEventListener("input", validateInput);
    titleInput.addEventListener("input", validateInput);
    contentInput.addEventListener("input", validateInput);

    // Function to validate input fields
    function validateInput() {
        const username = usernameInput.value;
        const title = titleInput.value;
        const content = contentInput.value;

        if (!username || !title || !content) {
            // Disable submit button if any field is empty
            document.querySelector('button[type="submit"]').disabled = true;
        } else {
            // Enable submit button if all fields are filled
            document.querySelector('button[type="submit"]').disabled = false;
        }
    }
});
