 var numero = [];
 var titulos = "refuerzo";

 function Inicio() {
     $('#nota-informativa').slideUp('slow');
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
     var conte = [];
     var textos = [];
     var aleatorios = [];
     var numero = Math.round(Math.random() * (4 - 1) + 1);
     textos[0] = '1. Cuadrilátero que tiene lados iguales y cuatro ángulos rectos. Su diagonal forma dos triángulos rectángulos iguales.'
     textos[1] = '2. Cuadrilátero que tiene dos lados paralelos llamados bases (mayor y menor) y ángulos bases iguales.'
     textos[2] = '3. Cuadrilátero que tiene lados opuestos iguales, dos ángulos agudos iguales y dos obtusos iguales.'
     textos[3] = '4. Cuadrilátero que tiene cuatro lados desiguales y forma dos ángulos rectos con sus bases.'
     textos[4] = '5. Cuadrilátero que tiene diagonales perpendiculares que se cortan en un punto medio, además de cuatro lados iguales.'
     textos[5] = '6. Cuadrilátero que tiene 2 lados paralelos y todos los lados y los ángulos con medidas diferentes.'
     var imagenes = [];
     imagenes[1] = '<td class="fig"><div class="row"><label>a)</label>&nbsp;<img src="img/i3_p13_act7.jpg" class="figuras"></div></td>'
     imagenes[2] = '<td class="fig"><div class="row"><label>b)</label>&nbsp;<img src="img/i6_p13_act7.jpg" class="figuras"></div></td>'
     imagenes[3] = '<td class="fig"><div class="row"><label>c)</label>&nbsp;<img src="img/i5_p13_act7.jpg" class="figuras"></div></td>'
     imagenes[4] = '<td class="fig"><div class="row"><label>d)</label>&nbsp;<img src="img/i4_p46_act34.jpg" class="figuras"></div></td>'
     imagenes[5] = '<td class="fig"><div class="row"><label>e)</label>&nbsp;<img src="img/i8_p13_act7.jpg" class="figuras"></div></td>'
     imagenes[6] = '<td class="fig"><div class="row"><label>f)</label>&nbsp;<img src="img/i1_p46_act34.jpg" class="figuras"></div></td>'
     for (var i = 0; i <= 1000; i++) {
         aleatorios[i] = Math.round(Math.random() * (6 - 1) + 1);
     }

     aleatorios = jQuery.unique(aleatorios);
     console.log(aleatorios);
     conte[0] = '<tr>' +
         '<td class="n1"><label>' + textos[0] + '</label></td>' +
         imagenes[aleatorios[0]] +
         '<td class="n2"><div class="row"><label class="nombre1">1 - </label><input id="a1" class="nombre2"></div></td>' +
         '</tr>';
     conte[1] = '<tr>' +
         '<td class="n1"><label>' + textos[1] + '</label></td>' +
         imagenes[aleatorios[1]] +
         '<td class="n2"><div class="row"><label class="nombre1">2 - </label><input id="a2" class="nombre2"></div></td>' +
         '</tr>';
     conte[2] = '<tr>' +
         '<td class="n1"><label>' + textos[2] + '</label></td>' +
         imagenes[aleatorios[2]] +
         '<td class="n2"><div class="row"><label class="nombre1">3 - </label><input id="a3" class="nombre2"></div></td>' +
         '</tr>';
     conte[3] = '<tr>' +
         '<td class="n1"><label>' + textos[3] + '</label></td>' +
         imagenes[aleatorios[3]] +
         '<td class="n2"><div class="row"><label class="nombre1">4 - </label><input id="a4" class="nombre2"></div></td>' +
         '</tr>';
     conte[4] = '<tr>' +
         '<td class="n1"><label>' + textos[4] + '</label></td>' +
         imagenes[aleatorios[4]] +
         '<td class="n2"><div class="row"><label class="nombre1">5 - </label><input id="a5" class="nombre2"></div></td>' +
         '</tr>';
     conte[5] = '<tr>' +
         '<td class="n1"><label>' + textos[5] + '</label></td>' +
         imagenes[aleatorios[5]] +
         '<td class="n2"><div class="row"><label class="nombre1">6 - </label><input id="a6" class="nombre2"></div></td>' +
         '</tr>';
     console.log(numero)
     $("#dib1").append(conte);

 };

 function Cargar() {
     $("#dib1").html('');
     $("#txtNota").text("/" + 10);
     Inicio();
 }
 $(document).ready(function() {
     Inicio();
     var res = ["","c", "d", "a", "b", "e", "f"]
     $("#Calificar").click(function() {
         var nota = 0;
         for (var i = 1; i <= 6; i++) {
             if ($("#a" + i).val().toLowerCase() == res[i]) {
                 nota = nota + 1;
                 $('#a' + i).css("background-color", "green");
             } else {
                 $('#a' + i).css("background-color", "red");
             }
         }
         debugger;
         var notaFinal = 0;
         notaFinal = (nota * 10);
         notaFinal = notaFinal / 6;
         notaFinal = notaFinal.toFixed(2);
         $("#txtNota").text(notaFinal + "/" + 10);
         $('#Calificar').attr('disabled', true);
         $('#Refrescar').attr('disabled', false);
     });
 });