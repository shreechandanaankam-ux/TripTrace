let users = JSON.parse(localStorage.getItem("users")) || [];

function showRegister() {

    const box = document.getElementById("registerBox");
    box.style.display = box.style.display === "none" ? "block" : "none";

}

function register() {

    let username = document.getElementById("newUser").value.trim();
    let password = document.getElementById("newPass").value.trim();
    let role = document.getElementById("newRole").value;

    if (username === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    let exists = users.some(user => user.username === username);

    if (exists) {
        alert("Username already exists");
        return;
    }

    users.push({
        username,
        password,
        role
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful! Please login.");

    document.getElementById("newUser").value = "";
    document.getElementById("newPass").value = "";

}

function login() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let role = document.getElementById("role").value;

    let user = users.find(u =>
        u.username === username &&
        u.password === password &&
        u.role === role
    );

    if (!user) {
        alert("Invalid Username, Password or Role");
        return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    if (role === "Mentor") {
        window.location.href = "mentorDashboard.html";
    } else {
        window.location.href = "traveller.html";
    }

}