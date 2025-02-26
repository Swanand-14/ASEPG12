document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form refresh

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Get existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if username already exists
    if (users.some(user => user.username === username)) {
        alert("Username already exists! Choose another.");
        return;
    }

    // Add new user to array
    users.push({ username, email, password });

    // Save updated users array in localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Sign Up Successful! ✅");
    window.location.href = "login.html"; // Redirect to login
});
