 var numero = [];
 var titulos = "aplico";

 function Inicio() {
     $('#nota-informativa').slideUp('slow');
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
     var p = [];
     var contenido = [];
     contenido[0] = '<span>¿Cuántas personas limpian los patios y jardines?</span>' +
         '<input type="text" id="resA"><br>';
     contenido[1] = '<span>¿Cuántas personas pintan las paredes?</span>' +
         '<input type="text" id="resB"><br>';
     contenido[2] = '<span>¿Cuántas personas arreglan las bancas?</span>' +
         '<input type="text" id="resC"><br>';
     contenido[3] = '<span>¿Cuántas personas limpian puertas y ventanas?</span>' +
         '<input type="text" id="resD"><br>';

     var al = Math.round(Math.random() * (3 - 1) + 1);
     if (al == 1)
         $("#contenido").append(contenido);
     if(al == 2)
         $("#contenido").append(contenido[1] + contenido[0] + contenido[2] + contenido[3]);
     if(al == 3)
         $("#contenido").append(contenido[3] + contenido[0] + contenido[1] + contenido[2]);


 };

 function Cargar() {
     Inicio();
     location.reload();
 }
 $(document).ready(function() {
     Inicio();
     $("#Calificar").click(function() {
         var exponente = []
         var base = [];
         for (var i = 0; i <= 5; i++) {
             exponente[i] = (numero[i] / 2) + 1;
             base[i] = $("#b0" + i).text();
         }
         debugger;
         console.log(exponente);
         console.log(base);
         var nota = 0;
         if ($("#resA").val() == "50 personas") {
             nota = nota + 1;
             $('#resA').css("border", "4px solid green");
         } else {
             $('#resA').css("border", "4px solid red");
         }
         if ($("#resB").val() == "60 personas") {
             nota = nota + 1;
             $('#resB').css("border", "4px solid green");
         } else {
             $('#resB').css("border", "4px solid red");
         }
         if ($("#resC").val() == "45 personas") {
             nota = nota + 1;
             $('#resC').css("border", "4px solid green");
         } else {
             $('#resC').css("border", "4px solid red");
         }
         if ($("#resD").val() == "595 personas") {
             nota = nota + 1;
             $('#resD').css("border", "4px solid green");
         } else {
             $('#resD').css("border", "4px solid red");
         }
         var notaFinal = 0;
         notaFinal = (nota * 10);
         notaFinal = notaFinal / 4;
         notaFinal = notaFinal.toFixed(2);
         $("#txtNota").text(notaFinal + "/" + 10);
         $('#Calificar').attr('disabled', true);
         $('#Refrescar').attr('disabled', false);
     });
 });