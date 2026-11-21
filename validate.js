
function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let event = document.getElementById("event").value;

    if (name == "" || email == "" ||
        phone == "" || event == "") {

        alert("Please fill all fields");
        return false;
    }

    if (!email.includes("@")) {
        alert("Enter a valid email");
        return false;
    }

    if (phone.length != 10 || isNaN(phone)) {
        alert("Enter a valid 10-digit phone number");
        return false;
    }

    alert("Registration Successful!");
    return true;
}
