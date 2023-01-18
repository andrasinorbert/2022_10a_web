function kiir(x){
    console.log(x);
}

//kiir("hagyma");
/*
kiir(5);
*/

var szoveg="hagyma";
var szam=5;

var x=szoveg+szam;
kiir(x);

document.getElementById("eztkeresem").innerHTML=x;

function $(x){
    return document.getElementById(x);
}

$("eztkeresem").innerHTML="szia";

$("eztkeresem").innerHTML+="!";


function szovegKeszit(x){
    let szoveg=""
    for(let i=0; i< x; ++i){
        szoveg+=i;
    }
    return szoveg;
}

