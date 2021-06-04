var txt_1 = prompt('Inserisci il testo');
var txt_2 = prompt("Inserisci un'altro testo");
var output = document.getElementById('text');

if (txt_1.length > txt_2.length ){
    output.innerHTML += 'Questa è la parola più corta ' + txt_2;
}else if (txt_1.length < txt_2.length ){
    output.innerHTML += 'Questa è la parola più corta ' + txt_1;
}else{
    output.innerHTML += 'Entrambi hanno la stessa lunghezza';
}
