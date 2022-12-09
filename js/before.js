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

function check_user() {
    if (document.getElementById("email").value == "admin@hcmut.edu.vn" && document.getElementById("password").value == "password")
    {
        alert( "validation succeeded" );
    }
    else 
    {
        alert( "validation failed" );
    }
}