/*10 - Escriba una función de JavaScript para extraer caracteres únicos de una cadena
>>>
_**Ejemplo**: “thequickbrownfoxjumpsoverthelazydog”_   
_**Output**: “thequickbrownfxjmpsvlazydg”_
*/
       var cadena = prompt(' ingrese una cadena de caracteres: '
       );
       evaluarunicos(cadena);

       function evaluarunicos(cadena)
       {
            var unicos = Array.from(new Set(cadena)).join('');
            document.write('<br> La cadena ingresada es: '+'<b>'+ cadena +'</b>');
            document.write('<br> Los valores unicos son: '+'<b>'+ unicos +'</b>');
            
       }
       
       
        