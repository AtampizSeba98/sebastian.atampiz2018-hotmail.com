function mostrarOrdenados(v1,v2,v3)
{
    if (v1>v2 && v1>v3)
    {
      alert(v1);
      if (v2>v3){alert(v2);alert(v3);}
      else{alert(v3);alert(v2);}
    }
    else
    {
        if (v2>v3) {alert(v2);
        if (v1>v3){alert(v1);alert(v3);}
        else{alert(v3); alert(v1);}
      }
      else
      {
        alert(v3);
        if (v1>v2){alert(v1);alert(v2);}
        else{alert(v2);alert(v1);}
        }
    } 
  }

  var valor1,valor2,valor3;
  valor1=prompt('Ingrese primer valor:','');
  valor1=parseInt(valor1);
  valor2=prompt('Ingrese segundo valor:','');
  valor2=parseInt(valor2);
  valor3=prompt('Ingrese tercer valor:','');
  valor3=parseInt(valor3);
  document.write('<br> Los tres valores ingresados son '+valor1+' '+valor2+' '+valor3+'<br>'); 
  alert('Los valores ordenados de mayor a menor son: ');
  mostrarOrdenados(valor1,valor2,valor3);
	
