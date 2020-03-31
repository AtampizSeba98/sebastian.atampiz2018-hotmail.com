//5- Escribir una función que muestre el reverso de un número:
  var numero;
  numero=prompt('Ingrese un numero :','');
  document.write('<br>'+ numero +'<br>'+'<br>');

  imprimirAlreves(numero);

  function imprimirAlreves(numero)
  {
    document.write('En forma inversa:');
    var f;
    for(f=0;f<numero.length;f++)
    {
      document.write(numero.charAt(numero.length-f-1));
    }
    document.write('<br><br>');
  }