/*
7 - Escriba una función que acepte una cadena como parámetro y encuentre la palabra más larga dentro de la cadena.
_**Ejemplo**: Curso profesional de Vue_  
_**Output**: profesional_*/

 

var cadena =prompt('Ingrese una frase :',' ');
document.write('<br>'+'<br>'+'Frase completa : '+ cadena +'<br>'+'Palabra mas grande : ');
palabramaslarga(cadena);

function palabramaslarga(cadena) {
    var frase = []; var valores =[]; 
    var max=0; var pos=0;
    frase=cadena.split(" ");
    for (var i = 0; i < frase.length;i++)
            { valores.push(frase[i].length); }

    for (var j=0; j < valores.length;j++)
    { if(max< valores[j]) { max= valores[j]; pos=j;} }

    document.write(frase[pos]);

}


 


       
     