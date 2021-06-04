var number_1 = prompt('Inserisci qui il numero');
var number_2 = prompt("Inserisci un'altro numero");

var output = document.getElementById('number');

if (number_1 > number_2){
    output.innerHTML += "Questo è il numero maggiore " + number_1;
}else if (number_1 < number_2){
    output.innerHTML = "Questo è il numero maggiore " + number_2;
}
else{
    output.innerHTML = "è un pareggio";
}
