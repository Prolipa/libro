 $("#txtNota").html("0");


 function resolverN33() {
     var nota1 = document.getElementById("nt33_1").value;
     var nota2 = document.getElementById("nt33_2").value;


     if ((nota1 >= 1) && (nota1 <= 10)) {
         document.getElementById("nt33_1").style.backgroundColor = "#6DFF6F";
     } else {
         document.getElementById("nt33_1").style.backgroundColor = "#F95858";
         alert('Todas las preguntas se deben evaluar y la nota no debe exceder los 10 puntos');
         nota1 = 0;
     }
     if ((nota2 >= 1) && (nota2 <= 10)) {
         document.getElementById("nt33_2").style.backgroundColor = "#6DFF6F";
     } else {
         document.getElementById("nt33_2").style.backgroundColor = "#F95858";
         alert('Todas las preguntas se deben evaluar y la nota no debe exceder los 10 puntos');
         nota2 = 0;
     }




     if ((nota1 > 10) || (nota2 > 10)) {
         var resp = 0;
         $('#txtNota').html(total.toFixed(2) + ' ');
     } else {
         var resp = parseInt(nota1) + parseInt(nota2);

         $('#txtNota').html(resp.toFixed(2) + ' ');
         document.getElementById('nt33_1').disabled = true;
         document.getElementById('nt33_2').disabled = true;
         document.getElementById('bt_comprobar').disabled = true;
     }
 }