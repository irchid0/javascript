var j=0;
var a=0;
var v=0;
var c;
do{
c = window.prompt("Entrez votre age");

if ( c < 18 ) {
j++;
console.log(c);
}

else if ( c >= 18 && c <= 49 ){

a++;

}
else if ( c >= 50 && c <= 99 ){

v++;
console.log(v);
}


}

while ( c < 100 );


window.alert("Il y a " + "" + j + "" + " jeunes\n " + "Il y a " + "" + a + "" + " adulte\n " 
+ " Il y a " + " Il y a " + "" + v + "" +" vieux\n " + " dont "+ " 1 " + "" + " centenaire ");