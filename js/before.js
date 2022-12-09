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

function check_user() 
{
    location.href = "main.html";
    var em = document.getElementById("email").value;
    var p = document.getElementById("password").value;
    if ( em == "admin@hcmut.edu.vn" &&  p == "password")
    {
        alert( "validation succeed" );
        // location.href = "main.html";
    }
    else 
    {
         alert( "validation failed" );
    }
}
function gotomain() {
    location.href = "main.html";
}