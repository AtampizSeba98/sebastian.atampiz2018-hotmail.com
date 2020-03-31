/*8 - Escriba una función que acepte una cadena como parámetro y cuente el número de vocales dentro de esa cadena.
>>>
_**Ejemplo**: El imperio contrataca_   
_**Output**: 9_
*/
function cantidadVocales(frase)
{
  var f;
  var cant=0;
  for(f=0;f<frase.length;f++)
  {
    if (frase.charAt(f)=='a' ||
        frase.charAt(f)=='e' ||
        frase.charAt(f)=='i' ||
        frase.charAt(f)=='o' ||
        frase.charAt(f)=='u' || 
        frase.charAt(f)=='A' ||
        frase.charAt(f)=='E' ||
        frase.charAt(f)=='I' ||
        frase.charAt(f)=='O' ||
        frase.charAt(f)=='U')
    {
      cant++;
    }
  }
  document.write('Cantidad de vocales:'+cant);
}


var frase;
frase=prompt(' Ingrese una palabra o frase:','');
document.write('<br><br>'+ frase +'<br>'+'<br>');

cantidadVocales(frase);