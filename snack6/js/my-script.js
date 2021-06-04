var number = prompt('Inserisci un numero');
var cube = undefined

var output = document.getElementById('number');

for (var i = 1; i <= number ; i++){
    cube = Math.pow(i, 3);
        output.innerHTML += '<br>' + cube ;
}