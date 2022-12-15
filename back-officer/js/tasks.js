function show_modal_tasks() {
    var modall = document.getElementById('modall_tasks');
    modall.style.display = 'flex';
}
function close_modal_tasks() {
    var modall = document.getElementById('modall_tasks');
    modall.style.display = 'none';
    var modall = document.getElementById('modall_tasks_edit');
    modall.style.display = 'none';
}
var data = [];
function add() {
    var nametask_id = document.getElementById('nametask').value;
    var manager_id = document.getElementById('manager').value;
    var time_id = document.getElementById('time').value;
    var address_id = document.getElementById('address').value;

    if (nametask_id == '' || manager_id == '' || time_id == '' || address_id == '') {
        alert("Please complete all information !")
    }
    else {
        var item = {
            nametask: nametask_id,
            manager: manager_id,
            time: time_id,
            address: address_id
        }
        data.push(item)
        render()
        data.pop()
        close_modal_tasks()
        clear()
    }

}
function render() {
    table = document.getElementById('tasks_table').innerHTML;
    var row = document.getElementById('tasks_table').rows.length;

    table += `<tr id=${row}>
            <td> ${row}</td> 
            <td> ${data[0].nametask}</td> 
            <td> ${data[0].manager}</td> 
            <td> ${data[0].time}</td>
            <td> ${data[0].address}</td>
            <td><button onclick="edit(${row})" class="btn-tasks"></button></td>
            <td><button onclick="deleteID(${row})" class="btn-tasks"></button></td>
            </tr>`

    document.getElementById('tasks_table').innerHTML = table;
}
function clear() {
    document.getElementById('nametask').value = '';
    document.getElementById('manager').value = '';
    document.getElementById('time').value = '';
    document.getElementById('address').value = '';
}
function deleteID(id) {
    var x = confirm("Are you want to delete this task ?");
    if (x) {
        document.getElementById('tasks_table').deleteRow(id);
    }
}

function edit(id) {
    var id_edit = document.getElementById('id_edit');
    var modall = document.getElementById('modall_tasks_edit');
    modall.style.display = 'flex';

    var nametask = document.getElementById('nametask_edit');
    var manager = document.getElementById('manager_edit');
    var time = document.getElementById('time_edit');
    var address = document.getElementById('address_edit');

    var table_edit = document.getElementById("tasks_table");

    id_edit.innerHTML = id;

    nametask.value = table_edit.rows[id].cells[1].innerHTML;
    manager.value = table_edit.rows[id].cells[2].innerHTML;
    time.value = table_edit.rows[id].cells[3].innerHTML;
    address.value = table_edit.rows[id].cells[4].innerHTML;

    var save = document.getElementById('save');
    save.onclick = function () {
        table_edit.rows[id].cells[1].innerHTML = document.getElementById("nametask_edit").value;
        table_edit.rows[id].cells[2].innerHTML = document.getElementById("manager_edit").value;
        table_edit.rows[id].cells[3].innerHTML = document.getElementById("time_edit").value;
        table_edit.rows[id].cells[4].innerHTML = document.getElementById("address_edit").value;

        alert("Save completed !");
    };

}
