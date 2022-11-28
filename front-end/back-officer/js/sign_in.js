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
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (name == "huynh tan dat") {
        if (email == "huynhtandat3636@gmail.com") {
            if (password == "12345678") {
                alert("Successfully sign in !");
            }
            else alert("Please check password !")
        }
        else alert("Please check email !")
    }
    else alert("Please check name !")
}
