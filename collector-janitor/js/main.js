function notice() {
    alert("Coming Soon !");
}

function sign_out() {
    var sign_out = confirm("Do you want to sign out ?");
    if (sign_out) {
        location.href = "sign_in.html";
    }
}
function show_modal() {
    var modall = document.getElementById('modall');
    modall.style.display = 'flex';
}
function close_modal() {
    var modall = document.getElementById('modall');
    modall.style.display = 'none';
}
function selected(id) {
    var id_item = document.getElementById(id);

    var tttasks = document.getElementById('tttasks');
    var ttmess = document.getElementById('ttmess');
    var ttpro = document.getElementById('ttpro');

    var tasks_m = document.getElementById('tasks_m');
    var messages_m = document.getElementById('messages_m');
    var profiles_m = document.getElementById('profiles_m');

    var tasks = document.getElementById('tasks');
    var messages = document.getElementById('messages');
    var profiles = document.getElementById('profiles');

    if (id == 'tasks') {
        tttasks.className = 'text16918 show';
        ttmess.className = 'not-show';
        ttpro.className = 'not-show';

        tasks_m.style.display = 'block';
        messages_m.style.display = 'none';
        profiles_m.style.display = 'none';

        tasks.className = 'selected';
        messages.className = 'not-selected';
        profiles.className = 'not-selected';
    }
    else if (id == 'messages') {
        tttasks.className = 'not-show';
        ttmess.className = 'text16918 show';
        ttpro.className = 'not-show';

        messages_m.style.display = 'block';
        tasks_m.style.display = 'none';
        profiles_m.style.display = 'none';

        messages.className = 'selected';
        tasks.className = 'not-selected';
        profiles.className = 'not-selected';
    }
    else if (id == 'profiles') {
        tttasks.className = 'not-show';
        ttmess.className = 'not-show';
        ttpro.className = 'text16918 show';

        profiles_m.style.display = 'block';
        messages_m.style.display = 'none';
        tasks_m.style.display = 'none';

        profiles.className = 'selected';
        messages.className = 'not-selected';
        tasks.className = 'not-selected';
    }
    else if (id == 'create_profile') {
        tttasks.className = 'not-show';
        ttmess.className = 'not-show';
        ttpro.className = 'text16918 show';

        profiles_m.style.display = 'none';
        messages_m.style.display = 'none';
        tasks_m.style.display = 'none';

        profiles.className = 'selected';
        messages.className = 'not-selected';
        tasks.className = 'not-selected';
    }
    else if (id == 'edit_profile') {
        tttasks.className = 'not-show';
        ttmess.className = 'not-show';
        ttpro.className = 'text16918 show';

        profiles_m.style.display = 'none';
        messages_m.style.display = 'none';
        tasks_m.style.display = 'none';

        profiles.className = 'selected';
        messages.className = 'not-selected';
        tasks.className = 'not-selected';
    }
}

