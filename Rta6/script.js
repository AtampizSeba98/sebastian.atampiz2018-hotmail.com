/*6 - Escriba una función que acepte una cadena como parámetro y convierta la primera letra de cada palabra de la cadena en mayúsculas.
>_**Ejemplo**: el caballero de la armadura oxidada_   
>_**Output**: El Caballero De La Armadura Oxidada_
*/

 
         
var frase = prompt('Ingrese una frase :','');
document.write('<br>'+'Frase sin convertir: ',
               '<br>'+'<b>'+ frase + '</b>'+'<br>'+
               'Frase convertida: ','<br>');

convertir(frase);
    

function convertir(frase)
{
     var convertida = [ ];
     convertida=frase.split(" ");
     for (var i = 0; i <convertida.length;i++)
       {
             document.write(convertida[i].charAt(0).toUpperCase()+ convertida[i].slice(1)+' ') ;
        }
    
}
