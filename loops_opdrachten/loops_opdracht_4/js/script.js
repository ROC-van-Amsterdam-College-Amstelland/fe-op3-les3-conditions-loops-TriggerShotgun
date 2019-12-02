//javascript code
var tekst="";
for(i = 0; i <1001 ; i+=10) {
  tekst += i + "<br>";
  console.log(i);
}
document.getElementById("tekst").innerHTML = tekst;