function notice_call() {
    alert("You are calling " + document.getElementById('user').innerHTML + " ...");
}
function notice_delete() {
    confirm("DO you want to delete the message ?");
}
function sent() {
    var content = document.getElementById('content').value;
    var boxchat = document.getElementById('boxchat');
    var h3 = document.createElement("h3");
    if (content && content != ' ') {
        h3.className = "chat";
        boxchat.appendChild(h3);
        h3.innerHTML = content;
        document.getElementById('content').value = ' ';
    }
}