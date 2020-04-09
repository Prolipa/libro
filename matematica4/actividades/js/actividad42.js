 var numero = [];
 var titulos ="preparo"
 function Inicio() {
     $('#nota-informativa').slideUp('slow');
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
     var conte = [];
     var textos = [];
     var aleatorios = [];
     var numero = Math.round(Math.random() * (4 - 1) + 1);
     textos[0] = '1. Tiene cuatro lados iguales, sus ángulos opuestos tienen la misma medida y sus diagonales se cortan en forma perpendicular.'
     textos[1] = '2. Sus lados paralelos se denominan bases (mayor y menor) y tiene solos dos ángulos rectos.'
     textos[2] = '3. No tiene lados paralelos, sus diagonales se cortan en forma perpendicular.'
     var imagenes = [];
     imagenes[1] = '<td class="fig"><div class="row"><label>a)</label>&nbsp;<img src="img/i1_p49_act42.jpg" class="figuras"></div></td>'
     imagenes[2] = '<td class="fig"><div class="row"><label>b)</label>&nbsp;<img src="img/i2_p49_act42.jpg" class="figuras"></div></td>'
     imagenes[3] = '<td class="fig"><div class="row"><label>c)</label>&nbsp;<img src="img/i3_p49_act42.jpg" class="figuras"></div></td>'
     for (var i = 0; i <= 1000; i++) {
         aleatorios[i] = Math.round(Math.random() * (3 - 1) + 1);
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
     var res = ["","c","b","a"]
     $("#Calificar").click(function() {
         var nota = 0;
         debugger;
         for (var i = 1; i <= 3; i++) {
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
         notaFinal = notaFinal / 3;
         notaFinal = notaFinal.toFixed(2);
         $("#txtNota").text(notaFinal + "/" + 10);
         $('#Calificar').attr('disabled', true);
         $('#Refrescar').attr('disabled', false);
     });
 });