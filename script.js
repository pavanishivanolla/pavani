document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let gender = document.getElementById("gender").value;

    let message = document.getElementById("message");

    // Check empty fields
    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        password === "" ||
        confirmPassword === "" ||
        gender === ""
    ) {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    // Validate name
    if (!/^[A-Za-z ]+$/.test(name)) {
        message.textContent = "Name should contain only letters.";
        message.style.color = "red";
        return;
    }

    // Validate 
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
        return;
    }

    // Validate phone number
    if (!/^[0-9]{10}$/.test(phone)) {
        message.textContent = "Phone number must contain 10 digits.";
        message.style.color = "red";
        return;
    }

    // Validate password
    if (password.length < 6) {
        message.textContent = "Password must contain at least 6 characters.";
        message.style.color = "red";
        return;
    }

    // Check passwords
    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match.";
        message.style.color = "red";
        return;
    }

    // Registration successful
    message.textContent = "Registration successful!";
    message.style.color = "green";

    // Clear form
    document.getElementById("registrationForm").reset();
});
