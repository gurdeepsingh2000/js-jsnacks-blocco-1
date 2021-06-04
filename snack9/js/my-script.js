var output = document.getElementById("number");

var arreyNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = 0;

for (var i = 0; i < arreyNumber.length; i++) {
    result += arreyNumber[i];
}

var media = result / arreyNumber.length;



output.innerHTML += result + "<br/>";
output.innerHTML += media;