//javascript code
function check(){
    var saldo= document.getElementById("saldo").value;

    if(saldo==500){
        document.getElementById("tekst").innerHTML = "salaris gestort" ;
    }else if(saldo>500){
        document.getElementById("tekst").innerHTML = "salaris + bonus gestort";
    }else {
        document.getElementById("tekst").innerHTML = "niks gestort";
    }
    

}