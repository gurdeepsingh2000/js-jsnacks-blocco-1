var ask_number = parseInt(prompt('inserisci un numero'));
var output = document.getElementById('number');
var number = 1;

if(ask_number % 2 === 0 ){
    output.innerHTML = ask_number + '<br>' ;
}else{
    output.innerHTML = ask_number + number + '<br>' ;
}

