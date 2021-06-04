var List = [];


var output = document.getElementById("numero");

for (var i = 1; i <= 6; i++) {
    var numeroList = parseInt(prompt("Inserire NUMERO"));

    if (numeroList % 2 !== 0)
        List.push(numeroList)
}

console.log(list);