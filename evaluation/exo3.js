prenom();

function prenom() {
var tab = ["Audrey" , "Aurélien" , "Flavien" , "Jérémy" , "Laurent" , "Melik" , "Nouara" , "Salem" , "Samuel" , "Stéphane"];
var p = window.prompt("Veuillez choisir un prénom " + tab).toLowerCase();
console.log(p);
    if (p==null) {
        return;
    }

    var prenom = p.charAt(0).toUpperCase() + p.slice(1);
    console.log(prenom);

    for(i=0; i<tab.length ; i++) {
        if (prenom == tab[i]){
        tab.splice(i,1);
        tab.push("");
        console.log(tab);
        alert(tab);
        return true;
        }
    console.log(i);
    }
    alert ("mauvais prenom");
    return false;
}