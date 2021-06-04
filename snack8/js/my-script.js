var number = prompt('Inserisci un numero di 4 cifre')
var number_X = [];
var sum = 0;

var output = document.getElementById('number');

for(var x = 0; x < number.length ; x++){
    number_x [x] =+ number.charAt(x);
}


for(var x= 0; z < number_x.length; x++){
    output.innerHTML += number_x[x] + '<br>' ;
    sum += parseInt(number_x[x]);
}

output.innerHTML ='La somma è' + sum ;






