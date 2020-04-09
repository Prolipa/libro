           $("#txtNota").html("0");


           function resolverN31() {
               var nota1 = document.getElementById("nt31_1").value;
               var nota2 = document.getElementById("nt31_2").value;

               if ((nota1 >= 1) && (nota1 <= 5)) {
                   document.getElementById("nt31_1").style.backgroundColor = "#6DFF6F";
               } else {
                   document.getElementById("nt31_1").style.backgroundColor = "#F95858";
                   alert('Todas las preguntas se deben evaluar y la nota no debe exceder los 5 puntos');
               }
               if ((nota2 >= 1) && (nota2 <= 5)) {
                   document.getElementById("nt31_2").style.backgroundColor = "#6DFF6F";
               } else {
                   document.getElementById("nt31_2").style.backgroundColor = "#F95858";
                   alert('Todas las preguntas se deben evaluar y la nota no debe exceder los 5 puntos');
               }

               if ((nota1 > 5) || (nota2 > 5)) {
                   var total = 0;
                   $('#txtNota').html(total.toFixed(2) + ' ');
               } else {
                   var resp = parseInt(nota1) + parseInt(nota2);

                   $('#txtNota').html(resp.toFixed(2) + ' ');
                   document.getElementById('nt31_1').disabled = true;
                   document.getElementById('nt31_2').disabled = true;
                   document.getElementById('bt_comprobar').disabled = true;
               }
           }