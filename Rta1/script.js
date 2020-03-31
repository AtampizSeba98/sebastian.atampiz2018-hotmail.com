cargar();
function cargar()
{
	var valor1,valor2;
	valor1=prompt('Ingrese un entero:','');
	valor2=prompt('Ingrese otro entero:','');

	valor1=parseInt(valor1);
	valor2=parseInt(valor2);
	
	if (isNaN(valor1) ||isNaN(valor2)) 
	{ alert("ocurrio un error intentelo nuevamente");cargar();}
	else
	{mostrarNumeros(valor1,valor2);}
}
function mostrarNumeros(v1,v2)
{
	
    if (v1>v2)
		{
			 return document.write('<br> El valor mas grande es: <br>'+ v1);
		}
    if (v1<v2)
		{
			 return document.write('<br> El valor mas grande es : <br>'+ v2);
		}
	
	 
	if (v1==v2)
		{ 
			return alert('son todos iguales');
		}	
}
