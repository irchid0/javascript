


document.writeln ( "<table border =' 8 ' > " );
            
var j = window.prompt ( " Quelle tableau de multiplication voulez-vous affichier ? " );

document.writeln ( " Tableau de multiplication pour le numero (" + j + ")" );

for ( var i = 1 ; i <= 20 ; i++ ) 
    {

    document.writeln ( "<tr>" );


        document.writeln ( "<td>"+i+"x"+j+"="+i*j+"</td>" );


        document.writeln ( '</tr>' );

    }