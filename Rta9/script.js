/*
9 - Escriba una función que tomará un array de números almacenados
 y encontrará el segundo número más bajo y el segundo más grande, respectivamente.
Ejemplo**_: [1, 2, 3, 4, 5]   
_**Output**_: 2, 4
*/
var numeros;
numeros=new Array(5); 
cargar(numeros);

function cargar(numeros)
  {
    var f;
    for(f=0;f<numeros.length;f++)
    {
      var v;
      v=prompt('Ingrese numero','');
      numeros[f]=parseInt(v); 
    }
    document.write('<br>');
    document.write('Valores ingresados: ');
    document.write(' '+ numeros)+'<br>';
    evaluar(numeros);
  }

  function evaluar(numeros)
  {    
          var maximo=Math.max.apply(null,numeros);
          var minimo=Math.min.apply(null,numeros);
          var index = numeros.indexOf(maximo);
          var indice = numeros.indexOf(minimo);
                if (index > -1){numeros.splice(index,1);} 
                if (indice > -1){numeros.splice(indice,1);} 
          var segmaximo=Math.max.apply(null,numeros);
          var segminimo=Math.min.apply(null,numeros);
          
           
                 
         document.write('<br>'+'Segundo valor maximo: '+ segmaximo+'<br>'+' Segundo valor minimo: '+segminimo);
         
         

    }
         
        
    
    

  
  
   