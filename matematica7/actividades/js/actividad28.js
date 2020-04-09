 var numero = [];
 var titulos = "aplico";

 function Inicio() {
     $('#nota-informativa').slideUp('slow');
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
     var conte = [];
     var numero = Math.round(Math.random() * (4 - 1) + 1);
     conte[0] = '<tr><td><img src="img/i2_p13_act7.jpg" class="figuras"></td>' +
         '<td><textarea id="nombre1" class="nombre"></textarea></td>' +
         '<td class="n1"><label>Tiene lados opuestos paralelos e iguales de dos en dos.</label></td>' +
         '<td class="n2"><textarea id="angulos1" class="nombre"></textarea></td>' +
         '</tr>';
     conte[1] = '<tr><td><img src="img/i9_p12_act5.jpg" class="figuras"></td>' +
         '<td><textarea id="nombre2" class="nombre"></textarea></td>' +
         '<td class="n1"><textarea id="lados2" class="nombre"></textarea></td>' +
         '<td class="n2"><label>Tiene ángulos de diferente medida.</label></td>' +
         '</tr>';
     conte[2] = '<tr><td><img src="img/i6_p13_act7.jpg" class="figuras"></td>' +
         '<td><textarea id="nombre3" class="nombre"></textarea></td>' +
         '<td><textarea id="lados3" class="nombre"></textarea></td>' +
         '<td><textarea id="angulos3" class="nombre"></textarea></td>' +
         '</tr>';
     conte[3] = '<tr><td><img src="img/i3_p13_act7.jpg" class="figuras"></td>' +
         '<td><textarea id="nombre4" class="nombre"></textarea></td>' +
         '<td class="n1"><label>Tiene lados opuestos paralelos e iguales de dos en dos.</label></td>' +
         '<td class="n2"><textarea id="angulos4" class="nombre"></textarea></td>' +
         '</tr>';
     conte[4] = '<tr><td><img src="img/i1_p12_act50.jpg" class="figuras"></td>' +
         '<td><textarea id="nombre5" class="nombre"></textarea></td>' +
         '<td class="n1"><textarea id="lados5" class="nombre"></textarea></td>' +
         '<td class="n2"><label>Tiene dos ángulos obtusos y dos agudos de igual medida.</label></td>' +
         '</tr>';
     console.log(numero)
     if(numero==1)
     $("#dib1").append(conte);
     if(numero == 2)
     $("#dib1").append(conte[1]+conte[2]+conte[3]+conte[0]);
     if(numero == 3)
     $("#dib1").append(conte[2]+conte[3]+conte[0]+conte[1]);
     if(numero == 4)
     $("#dib1").append(conte[3]+conte[0]+conte[1]+conte[2]);
 };

 function Cargar() {
     $("#dib1").html('');
     Inicio();
 }
 $(document).ready(function() {
     Inicio();
     $("#Calificar").click(function() {
         var figura = ["", "rectángulo", "trapezoide asimétrico", "trapecio rectangular", "romboide", "trapecio isósceles"]
         var lados = ["", "",
             "no tiene lados paralelos.",
             "un lado no paralelo es perpendicular a las bases.",
             "",
             "tiene dos lados paralelos. Los dos lados no paralelos son de igual medida."
         ];

         var angulos = ["",
             "tiene cuatro ángulos rectos.",
             "",
             "tiene dos ángulos rectos, un agudo y un obtuso.",
             "tiene dos ángulos obtusos y dos agudos, opuestos e iguales entre sí.",
             ""
         ];
         var nota = 0;
         
         for (var i = 1; i <= 5; i++) {
             if ($("#nombre" + i).val().toLowerCase() == figura[i]) {
                 nota = nota + 1;
                 $('#nombre' + i).css("border", "4px solid green");
             } else {
                 $('#nombre' + i).css("border", "4px solid red");
             }
             if (i == 1 || i == 3 || i == 4) {
                 if ($("#angulos" + i).val().toLowerCase() == angulos[i]) {
                     nota = nota + 1;
                     $('#angulos' + i).css("border", "4px solid green");
                 } else {
                     $('#angulos' + i).css("border", "4px solid red");
                 }
             }
             if (i == 2 || i == 3 || i == 5) {
                 if ($("#lados" + i).val().toLowerCase() == lados[i]) {
                     nota = nota + 1;
                     $('#lados' + i).css("border", "4px solid green");
                 } else {
                     $('#lados' + i).css("border", "4px solid red");
                 }
             }
         }
         debugger;
         var notaFinal = 0;
         notaFinal = (nota * 10);
         notaFinal = notaFinal / 11;
         notaFinal = notaFinal.toFixed(2);
         $("#txtNota").text(notaFinal + "/" + 10);
         $('#Calificar').attr('disabled', true);
         $('#Refrescar').attr('disabled', false);
     });
 });