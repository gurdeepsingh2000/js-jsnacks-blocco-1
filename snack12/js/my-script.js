/*
CI SERVONO 2 LISTE 

1. LISTA NOMI 
2. LISTA COGNOMI

GATSBY VUOLE GENERARE UNA FALSA LISTA DI 3 INVITATI
*/

var output = document.getElementById('surnames');

listName = ['Marco', 'Andrea','Luigi'];
listSurname = ['Rossi', 'Verdi' ,'Gialli'];
listGenerated = []

for(var x = 0; x < listName.length && x < listSurname.length; x++) {
    var invite = listName[x] + ' ' + listSurname[x];
    listGenerated.push(invite);
    console.log(listGenerated)
}

