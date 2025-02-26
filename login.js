document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form refresh

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Get stored users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user in the array
    let validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        alert("Login Successful! ✅");
        window.location.href = ".html"; // Redirect after login
    } else {
        alert("Invalid Username or Password ❌");
    }
});
