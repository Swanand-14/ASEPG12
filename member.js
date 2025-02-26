document.addEventListener("DOMContentLoaded", function () {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let tableBody = document.getElementById("userTable");

    function displayUsers() {
        tableBody.innerHTML = ""; // Clear table first
        users.forEach((user, index) => {
            let row = `<tr>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                        <td><button onclick="deleteUser(${index})">Delete</button></td>
                      </tr>`;
            tableBody.innerHTML += row;
        });
    }

    window.deleteUser = function(index) {
        users.splice(index, 1); // Remove user from array
        localStorage.setItem("users", JSON.stringify(users)); // Update local storage
        displayUsers(); // Refresh table
    };

    window.clearAllUsers = function() {
        localStorage.removeItem("users"); // Remove from storage
        users = []; // Empty array
        displayUsers(); // Refresh table
    };

    displayUsers(); // Load users on page load
});
