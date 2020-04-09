 var titulos = "prueba";

 function Cargar() {
     $('#nota-informativa').slideUp('slow');
     $("#txtNota").text("");
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
     $("#contenido1").html('');
     $("#contenido2").html('');
     var preg = [];
     var numeros = [];
     for (var j = 0; j <= 11; j++) {
         numeros[j] = Math.round(Math.random() * (20000 - 1) + 1);
     }
     numeros = jQuery.unique(numeros);
     for (var i = 0; i <= 5; i++) {
         preg[i] = '<tr><td style="padding: 5px;"><label id="numeroIni' + i + '">' + numeros[i] + '</labe></td>' +
             '<td style="padding: 5px;"><input type="number" id="a' + i + '" style="width: 60px;height: 20px;"></td>' +
             '<td style="padding: 5px;"><input type="number" id="b' + i + '" style="width: 60px;height: 20px;"></td>' +
             '<td style="padding: 5px;"><input type="number" id="c' + i + '" style="width: 60px;height: 20px;"></td>' +
             '<td style="padding: 5px;"><input type="number" id="d' + i + '" style="width: 60px;height: 20px;"></td>' +
             '<td style="padding: 5px;"><input type="number" id="e' + i + '" style="width: 60px;height: 20px;"></td>' +
             '<td style="padding: 5px;"><input type="number" id="f' + i + '" style="width: 60px;height: 20px;"></td>' +
             '<td style="padding: 5px;"><input type="number" id="g' + i + '" style="width: 60px;height: 20px;"></td>' +
             '<td style="padding: 5px;"><input type="number" id="h' + i + '" style="width: 60px;height: 20px;"></td>' +
             '<td style="padding: 5px;"><label id="numeroFin' + i + '">' + (numeros[i]+9) + '</labe></td></tr>';
     }
     $("#contenido1").append(preg)
 };

 $(document).ready(function() {

     Cargar();

     $("#Calificar").click(function() {
         nota = 0;
         var vA = [];
         var vB = [];
         var vC = [];
         var vD = [];
         var vE = [];
         var vF = [];
         var vG = [];
         var vH = [];
         var vIni = [];
         var vFin = [];
         var resA = [];
         var resB = [];
         var resC = [];
         var resD = [];
         var resE = [];
         var resF = [];
         var resG = [];
         var resH = [];


         for (var i = 0; i <= 5; i++) {
             vA[i] = parseInt($("#a" + i).val());
             vB[i] = parseInt($("#b" + i).val());
             vC[i] = parseInt($("#c" + i).val());
             vD[i] = parseInt($("#d" + i).val());
             vE[i] = parseInt($("#e" + i).val());
             vF[i] = parseInt($("#f" + i).val());
             vG[i] = parseInt($("#g" + i).val());
             vH[i] = parseInt($("#h" + i).val());
             vIni[i] = parseInt($("#numeroIni" + i).text());
             vFin[i] = parseInt($("#numeroFin" + i).text());
             resA[i] = vIni[i] + 1;
             resB[i] = vIni[i] + 2;
             resC[i] = vIni[i] + 3;
             resD[i] = vIni[i] + 4;
             resE[i] = vIni[i] + 5;
             resF[i] = vIni[i] + 6;
             resG[i] = vIni[i] + 7;
             resH[i] = vIni[i] + 8;           
         }
         for (var i = 0; i <= 5; i++) {
             if (vA[i] == resA[i]) {
                 nota = nota + 1;
                 $("#a"+i).css("background-color", "green");
             } else {
                 $("#a"+i).css("background-color", "red");
             }
             
             if (vB[i] == resB[i]) {
                 nota = nota + 1;
                 $("#b"+i).css("background-color", "green");
             } else {
                 $("#b"+i).css("background-color", "red");
             }

             if (vC[i] == resC[i]) {
                 nota = nota + 1;
                 $("#c"+i).css("background-color", "green");
             } else {
                 $("#c"+i).css("background-color", "red");
             }

             if (vD[i] == resD[i]) {
                 nota = nota + 1;
                 $("#d"+i).css("background-color", "green");
             } else {
                 $("#d"+i).css("background-color", "red");
             }

             if (vE[i] == resE[i]) {
                 nota = nota + 1;
                 $("#e"+i).css("background-color", "green");
             } else {
                 $("#e"+i).css("background-color", "red");
             }

             if (vF[i] == resF[i]) {
                 nota = nota + 1;
                 $("#f"+i).css("background-color", "green");
             } else {
                 $("#f"+i).css("background-color", "red");
             }

             if (vG[i] == resG[i]) {
                 nota = nota + 1;
                 $("#g"+i).css("background-color", "green");
             } else {
                 $("#g"+i).css("background-color", "red");
             }

             if (vH[i] == resH[i]) {
                 nota = nota + 1;
                 $("#h"+i).css("background-color", "green");
             } else {
                 $("#h"+i).css("background-color", "red");
             }
         }
         var notaFinal = (nota * 10) / 48;
         notaFinal = notaFinal.toFixed(2)
         $("#txtNota").text(+notaFinal + "/10");
         $('#Calificar').attr('disabled', true);
         $('#Refrescar').attr('disabled', false);
     });
 });