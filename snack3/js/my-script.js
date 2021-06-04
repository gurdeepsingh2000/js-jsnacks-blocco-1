var result = 0;
for (var i = 0; i < 10; i++) {
    var number = parseInt(prompt("Inserisci un numero"));
    result += number;
}
document.getElementById("numero").innerHTML = result;