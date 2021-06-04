var userList = ["Marco", "Andre", "Giosue", "Martina"];

var nameLogIn = prompt("Inserire la proprio Nome");

var check = false;

var output = document.getElementById("numero");

for (var i = 0; i < userList.length; i++) {
    if (userList[i] === nameLogIn)
        check = true;
}

if (check) {
    output.innerHTML += "Ciao " + nameLogIn + "Puoi entrare";
} else {
    alert("Non puoi entrare");
}