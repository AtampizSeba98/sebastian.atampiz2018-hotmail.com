/*<br>
<br>  Alumno   | Promedio        Rango  | Calificación final
<br> _________ | __________      < 60   | F menor a 60
<br>  David    | 80              < 70   | D mayor a 60 menor = a 70
<br>  Juan     | 77              < 80   | C mayor a 70 menor = a 80
<br>  Marcelo  | 88              < 90   | B mayor a 80 menor = a 90
<br>  Carlos   | 95              < 100  | A mayor a 90 menor = a 100
<br>  Tomas    | 68
<br>___________________________________________
 
 */
var alumnos = ['david','juan','marcelo','carlos','tomas'];
var notas = [80,77,88,95,68];
for (var i=0 ; i <= notas.length -1;i++)
{
    if (notas[i]<=60)
        {
            document.write('alumno '+ alumnos[i]+' , nota: '+ notas[i]+' su calificacion es <b> F </b> <br> ')
        }
    if (notas[i]<=70 && notas[i]>60)
        {
            document.write('alumno '+ alumnos[i] + ' , nota: ' + notas[i]+' su calificacion es <b> D </b> <br> ')
        }
    if (notas[i]<=80 && notas[i]>70 )
        {
            document.write('alumno '+ alumnos[i]+ ' , nota: ' + notas[i]+ ' su calificacion es <b> C </b> <br> ')
        }
    if (notas[i]<=90 && notas[i]>80)
        {
            document.write('alumno '+ alumnos[i]+ ' , nota: ' + notas[i]+' su calificacion es <b>  B </b> <br>')
        }    
    if (notas[i]<=100 &&notas[i]>90)
        {
            document.write('alumno '+ alumnos[i]+ ' , nota: ' + notas[i]+' su calificacion es <b> A  </b> <br> ')
        }    
}