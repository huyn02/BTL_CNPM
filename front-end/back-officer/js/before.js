function show_password() {
    var password = document.getElementById("password");

    if (password.type == "password") {
        password.type = "text";
    }

    else if (password.type == "text") {
        password.type = "password";
    }
}

function notice() {
    alert("Coming Soon !");
}
