/*
CI SERVONO 2 LISTE 

1. LISTA NOMI 
2. LISTA COGNOMI

GATSBY VUOLE GENERARE UNA FALSA LISTA DI 3 INVITATI
*/

var output = document.getElementById('surnames');

listName = ['Marco', 'Andrea','Luigi', 'Fabio' , 'Patrizia' , 'Alessio'];
listSurname = ['Rossi', 'Verdi' ,'Gialli', 'Ferrari', 'Moreno', 'Bianchi'];
listGenerated = []

result = ' '

for (var x = 1; x <= 3; x++) {
    result += "<li>" + listName[Math.floor(Math.random() * listName.length)] + " " + alistSurname[Math.floor(Math.random() * listSurname.length)] + "</li>";
    listGenerated.push(result)
    console.log(result)
}

