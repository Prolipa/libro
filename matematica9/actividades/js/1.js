 titulos = "prueba";

 function Cargar() {
     location.reload();
 }

 function Pregunta1() {

     var preg = [];
     var numeros = Math.round(Math.random() * (3 - 1) + 1);
     preg[0] = '<tr><td><label>Tercer piso<label></td><td><input type="text" id="resP1" class="resp1"></td></tr>';
     preg[1] = '<tr><td><label>Ana debe dinero<label></td><td><input type="text" id="resP2" class="resp1"></td></tr>';
     preg[2] = '<tr><td><label>Bajo el nivel del mar<label></td><td><input type="text" id="resP3" class="resp1"></td></tr>';
     if (numeros == 1) {
         $("#contenidolA").append(preg);
     }
     if (numeros == 2) {
         $("#contenidolA").append(preg[1] + preg[0] + preg[2]);
     }
     if (numeros == 3) {
         $("#contenidolA").append(preg[2] + preg[0] + preg[1]);
     }
 }

 function calPre1() {
     var nota1 = 0;
     var respuestas = ["", "+3", "-a", "-m"];
     for (var i = 1; i <= 3; i++) {
         if ($("#resP" + i).val().toLowerCase() == respuestas[i]) {
             nota1 = nota1 + 1;
             $("#resP" + i).css("background-color", "green");
         } else {
             $("#resP" + i).css("background-color", "red");
         }
     }
     nota1 = (nota1 * 1) / 3;
     nota1 = nota1.toFixed(2);
     $("#nota1").text(nota1);
 }

 function Pregunta2() {
     var contenido2 = [];
     var celdas = [];
     contenido2[0] = '<tr >' +
         '<td colspan="30"><img src="img/i1_p12_act1.jpg"></td>'
     '</tr>';
     for (var i = 0; i <= 30; i++) {
         if (i == 0) {
             celdas[i] = '<td style="width:40px"></td>'
         }
         if (i > 0 && i % 2 == 0) {
             celdas[i] = '<td class="celP2"><input type="text" id="val3' + i + '" class="valP2"></td>';
         }
         if (i == 24 || i == 20) {
             celdas[i] = '<td class="celP2"><label id="vq' + i + '"></label></td>';

         }
         if (i == 26) {
             celdas[i] = '<td class="celP3"><label id="vq' + i + '"></label></td>';
         }
     }
     contenido2[1] = '<tr>' + celdas + '</tr>'
     $("#contenido2").append(contenido2);
     $("#vq20").text("-30");
     $("#vq24").text("-10");
     $("#vq26").text("0");
 }

 function calPre2() {
     var nota2 = 0;
     var valoresP2 = [];
     var respuestas2 = ["", "-120", "-110", "-100", "-90", "-80", "-70", "-60", "-50", "-40", "-30", "-20", "-10", "0", "10", "20"];
     for (var i = 1; i <= 30; i++) {
         if (i > 0 && i % 2 == 0) {
             valoresP2[i] = $("#val3" + i).val();
         }
     }
     respuestas2 = jQuery.unique(respuestas2);
     var nota2 = 0
     var j = 1;
     debugger;
     for (var i = 1; i <= 15; i++) {
         j = 2 * i;
         if ($("#val3" + j).val() == respuestas2[i]) {
             nota2 = nota2 + 1;

             $("#val3" + 2 * i).css("background-color", "green");
         } else {
             $("#val3" + 2 * i).css("background-color", "red");
         }
     }

     nota2 = (nota2 * 1) / 12;
     nota2 = nota2.toFixed(2);
     $("#nota2").text(nota2);
 }

 function Pregunta3() {
     var contenido3 = [];
     var contenido3a = [];
     var contenido3b = [];
     var celdasP3 = [];
     var celdasP3a = [];
     var celdasP3b = [];

     contenido3[0] = '<label>Dos números mayores que +4 y sus opuestos.</label><br>'
     contenido3[1] = '<tr>' +
         '<td colspan="30"><img src="img/i1_p12_act1.jpg"></td>'
     '</tr>';
     for (var i = 0; i <= 30; i++) {
         if (i == 0) {
             celdasP3[i] = '<td style="width:40px"></td>'
         }
         if (i % 2 == 0) {
             celdasP3[i] = '<td class="celP4"></td>';
         }
         if (i % 2 == 1) {
             celdasP3[i] = '<td class="celP4"></td>';
         }
         if (i == 3 || i == 4 || i == 5 || i == 18 || i == 19 || i == 20) {
             celdasP3[i] = '<td class="celP3A"><input type="text" id="val3' + i + '" class="valP2"></td>';
         }
         if (i == 12) {
             celdasP3[i] = '<td class="celP4"><label id="vP3' + i + '"></label></td>';
         }
     }

     contenido3a[0] = '<label>Dos números menores que –2 y sus opuestos.</label><br>'
     contenido3a[1] = '<tr>' +
         '<td colspan="30"><img src="img/i1_p12_act1.jpg"></td>'
     '</tr>';
     for (var i = 0; i <= 30; i++) {
         if (i == 0) {
             celdasP3a[i] = '<td style="width:40px"></td>'
         }
         if (i % 2 == 0) {
             celdasP3a[i] = '<td class="celP4"></td>';
         }
         if (i % 2 == 1) {
             celdasP3a[i] = '<td class="celP4"></td>';
         }
         if (i == 3 || i == 7 || i == 9 || i == 18 || i == 19 || i == 20) {
             celdasP3a[i] = '<td class="celP3A"><input type="text" id="val3' + i + '" class="valP2"></td>';
         }
         if (i == 12) {
             celdasP3a[i] = '<td class="celP4"><label id="vPb3' + i + '"></label></td>';
         }
     }

     contenido3b[0] = '<label>Dos números menores que cero y sus opuestos.</label><br>'
     contenido3b[1] = '<tr>' +
         '<td colspan="30"><img src="img/i1_p12_act1.jpg"></td>'
     '</tr>';
     for (var i = 0; i <= 30; i++) {
         if (i == 0) {
             celdasP3b[i] = '<td style="width:40px"></td>'
         }
         if (i % 2 == 0) {
             celdasP3b[i] = '<td class="celP4"></td>';
         }
         if (i % 2 == 1) {
             celdasP3b[i] = '<td class="celP4"></td>';
         }
         if (i == 3 || i == 5 || i == 7 || i == 17 || i == 19 || i == 21) {
             celdasP3b[i] = '<td class="celP3A"><input type="text" id="val3' + i + '" class="valP2"></td>';
         }
         if (i == 12) {
             celdasP3b[i] = '<td class="celP4"><label id="vPc3' + i + '"></label></td>';
         }
     }

     contenido3[2] = '<tr>' + celdasP3 + '</tr>'
     contenido3a[2] = '<tr>' + celdasP3a + '</tr>'
     contenido3b[2] = '<tr>' + celdasP3b + '</tr>'

     $("#contenido3A").append(contenido3);
     $("#contenido3B").append(contenido3a);
     $("#contenido3C").append(contenido3b);

     $("#vP312").text("0");
     $("#vPb312").text("-2");
     $("#vPc312").text("0");
 }

 function Pregunta4() {
     var contenido4 = [];
     var valores4 = []
     for (var i = 0; i <= 10; i++) {
         valores4[i] = Math.round(Math.random() * (100 - (-100)) + (-100));
     }
     contenido4[0] = '<tr><td>-|<label id="valores40">' + valores4[0] + '</label>|</td>' +
         '<td><label>→</label></td>' +
         '<td><input type="number" id="res4A" class="valP4"></td></tr>';
     contenido4[1] = '<tr><td>|<label id="valores41">' + valores4[1] + '</label>|</td>' +
         '<td><label>→</label></td>' +
         '<td><input type="number" id="res4B" class="valP4"></td>';
     contenido4[2] = '<tr><td><label id="valores42">' + valores4[2] * -1 + '</label></td>' +
         '<td><label>→</label></td>' +
         '<td><input type="number" id="res4C" class="valP4"></td></tr>';
     contenido4[3] = '<tr><td><label id="valores43">' + valores4[3] + '</label></td>' +
         '<td><label>→</label></td>' +
         '<td><input type="number" id="res4D" class="valP4"></td></tr>';
     $("#contenido4").append(contenido4);
 }

 function calPre4() {

     var vprop4 = [];
     var resp4 = [];
     var nota4 = 0;
     for (var i = 0; i <= 3; i++)
         vprop4[i] = parseInt($("#valores4" + i).text());
     if (Math.abs(vprop4[0]) == $("#res4A").val()) {
         nota4 = nota4 + 1;
         $("#res4A").css("background-color", "green");
     } else {
         $("#res4A").css("background-color", "red");
     }
     if (Math.abs(vprop4[1]) * -1 == $("#res4B").val()) {
         nota4 = nota4 + 1;
         $("#res4B").css("background-color", "green");
     } else {
         $("#res4B").css("background-color", "red");
     }
     if (vprop4[2] * -1 == $("#res4C").val()) {
         nota4 = nota4 + 1;
         $("#res4C").css("background-color", "green");
     } else {
         $("#res4C").css("background-color", "red");
     }

     if (-vprop4[3] == $("#res4D").val()) {
         nota4 = nota4 + 1;
         $("#res4D").css("background-color", "green");
     } else {
         $("#res4D").css("background-color", "red");
     }
     nota4 = (nota4 * 1) / 4;
     nota4 = nota4.toFixed(2);
     $("#nota4").text(nota4);
 }

 function Pregunta5() {
     var contenido5 = [];
     var valores5 = []
     for (var i = 0; i <= 10; i++) {
         valores5[i] = Math.round(Math.random() * (100 - 1) + 1);
     }
     contenido5[0] = '<tr><td>|<label id="valores50">' + valores5[0] * -1 + '</label>|</td>' +
         '<td><label>→</label></td>' +
         '<td><input type="number" id="res5A" class="valP4"></td></tr>';
     contenido5[1] = '<tr><td>|+|<label id="valores51">' + valores5[1] * -1 + '</label>||</td>' +
         '<td><label>→</label></td>' +
         '<td><input type="number" id="res5B" class="valP4"></td>';
     contenido5[2] = '<tr><td>-|-|<label id="valores52">' + valores5[2] * -1 + '</label>||</td>' +
         '<td><label>→</label></td>' +
         '<td><input type="number" id="res5C" class="valP4"></td></tr>';
     contenido5[3] = '<tr><td>+|<label id="valores53">' + valores5[3] * -1 + '</label>|</td>' +
         '<td><label>→</label></td>' +
         '<td><input type="number" id="res5D" class="valP4"></td></tr>';
     $("#contenido5").append(contenido5);
 }

 function calPre5() {

     var vprop5 = [];
     var resp5 = [];
     var nota5 = 0;
     for (var i = 0; i <= 3; i++)
         vprop5[i] = parseInt($("#valores5" + i).text());
     if (Math.abs(vprop5[0]) == $("#res5A").val()) {
         nota5 = nota5 + 1;
         $("#res5A").css("background-color", "green");
     } else {
         $("#res5A").css("background-color", "red");
     }
     if (Math.abs(vprop5[1]) == $("#res5B").val()) {
         nota5 = nota5 + 1;
         $("#res5B").css("background-color", "green");
     } else {
         $("#res5B").css("background-color", "red");
     }
     if (-1 * Math.abs(vprop5[2]) == $("#res5C").val()) {
         nota5 = nota5 + 1;
         $("#res5C").css("background-color", "green");
     } else {
         $("#res5C").css("background-color", "red");
     }

     if (Math.abs(vprop5[3]) == $("#res5D").val()) {
         nota5 = nota5 + 1;
         $("#res5D").css("background-color", "green");
     } else {
         $("#res5D").css("background-color", "red");
     }
     nota5 = (nota5 * 1) / 4;
     nota5 = nota5.toFixed(2);
     $("#nota5").text(nota5);
 }

 function Pregunta6() {
     var contenido6 = [];
     var valores6 = [];
     for (var i = 0; i <= 10; i++) {
         valores6[i] = Math.round(Math.random() * (100 - 1) + 1);
     }
     contenido6[0] = '<tr>' +
         '<td><input type="number" id="resA60" class="valP4"></td>' +
         '<td><label><</label></td>' +
         '<td class="celda6">|<label id="valores60">' + valores6[0] * -1 + '</label>|</td>' +
         '<td><label><</label></td>' +
         '<td><input type="number" id="resB60" class="valP4"></td>' +
         '</tr>';
     contenido6[1] = '<tr>' +
         '<td><input type="number" id="resA61" class="valP4"></td>' +
         '<td><label><</label></td>' +
         '<td class="celda6">-|+<label id="valores61">' + valores6[1] + '</label>|</td>' +
         '<td><label><</label></td>' +
         '<td><input type="number" id="resB61" class="valP4"></td>' +
         '</tr>';
     contenido6[2] = '<tr>' +
         '<td><input type="number" id="resA62" class="valP4"></td>' +
         '<td><label><</label></td>' +
         '<td class="celda6"><label id="valores62">' + valores6[3] * -1 + '</label></td>' +
         '<td><label><</label></td>' +
         '<td><input type="number" id="resB62" class="valP4"></td>' +
         '</tr>';
     contenido6[3] = '<tr>' +
         '<td><input type="number" id="resA63" class="valP4"></td>' +
         '<td><label><</label></td>' +
         '<td class="celda6"><label id="valores63">' + valores6[2] * -1 + '</label></td>' +
         '<td><label><</label></td>' +
         '<td><input type="number" id="resB63" class="valP4"></td>' +
         '</tr>';
     $("#contenido6").append(contenido6);
 }

 function calPre6() {
     var vprop6 = [];
     var resp6 = [];
     var nota6 = 0;
     for (var i = 0; i <= 3; i++)
         vprop6[i] = parseInt($("#valores6" + i).text());
     if (Math.abs(vprop6[0]) - 1 == $("#resA60").val()) {
         nota6 = nota6 + 1;
         $("#resA60").css("background-color", "green");
     } else {
         $("#resA60").css("background-color", "red");
     }
     if (-1 * Math.abs(vprop6[1]) - 1 == $("#resA61").val()) {
         nota6 = nota6 + 1;
         $("#resA61").css("background-color", "green");
     } else {
         $("#resA61").css("background-color", "red");
     }
     if (vprop6[2] - 1 == $("#resA62").val()) {
         nota6 = nota6 + 1;
         $("#resA62").css("background-color", "green");
     } else {
         $("#resA62").css("background-color", "red");
     }
     if (vprop6[3] - 1 == $("#resA63").val()) {
         nota6 = nota6 + 1;
         $("#resA63").css("background-color", "green");
     } else {
         $("#resA63").css("background-color", "red");
     }

     if (Math.abs(vprop6[0]) + 1 == $("#resB60").val()) {
         nota6 = nota6 + 1;
         $("#resB60").css("background-color", "green");
     } else {
         $("#resB60").css("background-color", "red");
     }
     if (-Math.abs(vprop6[1]) + 1 == $("#resB61").val()) {
         nota6 = nota6 + 1;
         $("#resB61").css("background-color", "green");
     } else {
         $("#resB61").css("background-color", "red");
     }
     if (vprop6[2] + 1 == $("#resB62").val()) {
         nota6 = nota6 + 1;
         $("#resB62").css("background-color", "green");
     } else {
         $("#resB62").css("background-color", "red");
     }
     if (vprop6[3] + 1 == $("#resB63").val()) {
         nota6 = nota6 + 1;
         $("#resB63").css("background-color", "green");
     } else {
         $("#resB63").css("background-color", "red");
     }

     nota6 = (nota6 * 1) / 8;
     nota6 = nota6.toFixed(2);
     $("#nota6").text(nota6);
 }

 function Pregunta7() {
     var contenido7 = [];
     var valores7 = [];
     for (var i = 0; i <= 10; i++) {
         valores7[i] = Math.round(Math.random() * (100 - 1) + 1);
     }
     contenido7[0] = '<tr>' +
         '<td class="celda6"><label id="valoresA70">' + valores7[0] * -1 + '</label></td>' +
         '<td><label><</label></td>' +
         '<td><input type="number" id="resA70" class="valP4"></td>' +
         '<td><label><</label></td>' +
         '<td><input type="number" id="resA71" class="valP4"></td>' +
         '<td><label><</label></td>' +
         '<td class="celda6"><label id="valoresA71">' + (valores7[0] + 3) * -1 + '</label></td>' +
         '</tr>';

     contenido7[1] = '<tr>' +
         '<td class="celda6"><label id="valoresB70">' + valores7[1] + '</label></td>' +
         '<td><label><</label></td>' +
         '<td class="celda6"><label id="valoresB71">' + (valores7[1] + 1) + '</label></td>' +
         '<td><label><</label></td>' +
         '<td><input type="number" id="resB70" class="valP4"></td>' +
         '<td><label><</label></td>' +
         '<td><input type="number" id="resB71" class="valP4"></td>' +

         '</tr>';

     contenido7[2] = '<tr>' +
         '<td><input type="number" id="resC70" class="valP4"></td>' +
         '<td><label><</label></td>' +
         '<td class="celda6">-|<label id="valoresC70">' + valores7[2] + '</label>|</td>' +
         '<td><label><</label></td>' +
         '<td class="celda6"><label id="valoresC71">' + (valores7[2] + 1) * -1 + '</label></td>' +
         '<td><label><</label></td>' +
         '<td><input type="number" id="resC71" class="valP4"></td>' +
         '</tr>';

     contenido7[3] = '<tr>' +
         '<td class="celda6"><label id="valoresD70">' + valores7[3] * -1 + '</label></td>' +
         '<td><label><</label></td>' +
         '<td><input type="number" id="resD70" class="valP4"></td>' +
         '<td><label><</label></td>' +
         '<td class="celda6"><label id="valoresD71">' + (valores7[3] + 2) * -1 + '</label></td>' +
         '<td><label><</label></td>' +
         '<td><input type="number" id="resD71" class="valP4"></td>' +
         '</tr>';
     $("#contenido7").append(contenido7);
 }

 function calPre7() {
     var res7A = [];
     var nota7 = 0;
     res7A[0] = parseInt($("#valoresA70").text()) - 1;
     res7A[1] = parseInt($("#valoresA71").text()) + 1;
     var res7B = [];
     res7B[0] = parseInt($("#valoresB71").text()) + 1;
     res7B[1] = parseInt($("#valoresB71").text()) + 2;
     var res7C = [];
     res7C[0] = -parseInt($("#valoresC70").text()) + 1;
     res7C[1] = parseInt($("#valoresC71").text()) - 1;
     var res7D = [];
     res7D[0] = parseInt($("#valoresD70").text()) - 1;
     res7D[1] = parseInt($("#valoresD71").text()) - 1;
     for (var i = 0; i <= 1; i++) {
         if ($("#resA7" + i).val() == res7A[i]) {
             nota7 = nota7 + 1;
             $("#resA7" + i).css("background-color", "green");
         } else {
             $("#resA7" + i).css("background-color", "red");
         }
         if ($("#resB7" + i).val() == res7B[i]) {
             nota7 = nota7 + 1;
             $("#resB7" + i).css("background-color", "green");
         } else {
             $("#resB7" + i).css("background-color", "red");
         }
         if ($("#resC7" + i).val() == res7C[i]) {
             nota7 = nota7 + 1;
             $("#resC7" + i).css("background-color", "green");
         } else {
             $("#resC7" + i).css("background-color", "red");
         }
         if ($("#resD7" + i).val() == res7D[i]) {
             nota7 = nota7 + 1;
             $("#resD7" + i).css("background-color", "green");
         } else {
             $("#resD7" + i).css("background-color", "red");
         }
     }
     debugger;
     nota7 = (nota7 * 1) / 8;
     nota7 = nota7.toFixed(2);
     $("#nota7").text(nota7);
 }

 function Pregunta8() {
     var contenido8 = [];
     var valores8 = [];
     for (var i = 0; i <= 20; i++) {
         valores8[i] = Math.round(Math.random() * (100 - 1) + 1);
     }
     contenido8[0] = '<label>-</label>' +
         '<label>' + valores8[0] + '</label>&nbsp;' +
         '<label>+</label>&nbsp;' +
         '<label>' + valores8[1] + '</label>&nbsp;' +
         '<label>-</label>&nbsp;' +
         '<label>' + valores8[2] + '</label>&nbsp;' +
         '<label>+</label>&nbsp;' +
         '<label>' + valores8[3] + '</label>&nbsp;' +
         '<label>=</label>&nbsp;' +
         '<br><br>' +
         '<textarea class="textoA"></textarea><br>';
     contenido8[1] = '<label>-</label>' +
         '<label>' + valores8[4] + '</label>&nbsp;' +
         '<label>+</label>&nbsp;' +
         '<label>' + valores8[5] + '</label>&nbsp;' +
         '<label>-</label>&nbsp;' +
         '<label>' + valores8[6] + '</label>&nbsp;' +
         '<label>+</label>&nbsp;' +
         '<label>' + valores8[7] + '</label>&nbsp;' +
         '<label>=</label>&nbsp;' +
         '<br><br>' +
         '<textarea class="textoA"></textarea><br>';

     contenido8[2] = '<label>-</label>' +
         '<label>' + valores8[8] + '</label>&nbsp;' +
         '<label>+</label>&nbsp;' +
         '<label>' + valores8[9] + '</label>&nbsp;' +
         '<label>-</label>&nbsp;' +
         '<label>' + valores8[10] + '</label>&nbsp;' +
         '<label>+</label>&nbsp;' +
         '<label>' + valores8[11] + '</label>&nbsp;' +
         '<label>=</label>' +
         '<br><br>' +
         '<textarea class="textoA"></textarea>';

     $("#contenido8").append(contenido8);
 }

 function Pregunta9() {
     var contenido9 = [];
     var valores9 = [];
     for (var i = 0; i <= 20; i++) {
         valores9[i] = Math.round(Math.random() * (100 - 1) + 1);
     }
     contenido9[0] = '(<label>' + valores9[0] + '</label>)&nbsp;' +
         '<label>-</label>&nbsp;' +
         '(<label>' + valores9[1] + '</label>)&nbsp;' +
         '<label>=</label>&nbsp;' +
         '<br><br>' +
         '<textarea class="textoA"></textarea><br>';
     contenido9[1] = '(<label>' + valores9[4] + '</label>)&nbsp;' +
         '<label>-</label>&nbsp;' +
         '(<label>' + valores9[5] + '</label>)&nbsp;' +
         '<label>=</label>&nbsp;' +
         '<br><br>' +
         '<textarea class="textoA"></textarea><br>';

     contenido9[2] = '(<label>' + valores9[8] + '</label>)&nbsp;' +
         '<label>+</label>&nbsp;' +
         '(<label>' + valores9[9] + '</label>)&nbsp;' +
         '<label>=</label>' +
         '<br><br>' +
         '<textarea class="textoA"></textarea>';

     $("#contenido9").append(contenido9);
 }

 function Pregunta10() {
     var contenido10 = [];
     var valores8 = [];
     for (var i = 0; i <= 20; i++) {
         valores8[i] = Math.round(Math.random() * (100 - 1) + 1);
     }
     contenido10[0] = '(<label>' + valores8[0] + '</label>)&nbsp;' +
         '<label>-</label>&nbsp;' +
         '(<label>' + valores8[1] + '</label>)&nbsp;' +
         '<label>+</label>&nbsp;' +
         '(<label>' + valores8[2] + '</label>)&nbsp;' +
         '<label>=</label>&nbsp;' +
         '<br><br>' +
         '<textarea class="textoA"></textarea><br>';
     contenido10[1] = '(<label>' + valores8[4] + '</label>)&nbsp;' +
         '<label>+</label>&nbsp;' +
         '(<label>' + valores8[5] + '</label>)&nbsp;' +
         '<label>-</label>&nbsp;' +
         '(<label>' + valores8[6] + '</label>)&nbsp;' +
         '<label>-</label>&nbsp;' +
         '(<label>' + valores8[7] + '</label>)&nbsp;' +
         '<label>=</label>&nbsp;' +
         '<br><br>' +
         '<textarea class="textoA"></textarea><br>';

     contenido10[2] = '(<label>' + valores8[8] + '</label>&nbsp;' +
         '<label>+</label>&nbsp;' +
         '<label>' + valores8[9] + '</label>)&nbsp;' +
         '<label>+</label>&nbsp;' +
         '(<label>' + valores8[10] + '</label>&nbsp;' +
         '<label>+</label>&nbsp;' +
         '<label>' + valores8[11] + '</label>)&nbsp;' +
         '<label>=</label>' +
         '<br><br>' +
         '<textarea class="textoA"></textarea><br>';

     contenido10[3] = '-{-[-(<label>' + valores8[8] + '</label>&nbsp;' +
         '<label>-</label>&nbsp;' +
         '(<label>' + valores8[9] + '</label>)]&nbsp;' +
         '<label>+</label>&nbsp;' +
         '<label>' + valores8[10] + '</label>}&nbsp;' +
         '<label>=</label>' +
         '<br><br>' +
         '<textarea class="textoA"></textarea><br>';
     contenido10[4] = '{<label>' + valores8[8] + '</label>&nbsp;' +
         '<label>-</label>&nbsp;' +
         '[(<label>' + valores8[9] + '</label>&nbsp;' +
         '<label>-</label>&nbsp;' +
         '<label>' + valores8[10] + '</label>)&nbsp;' +
         '<label>-</label>&nbsp;' +
         '(<label>' + valores8[9] + '</label>&nbsp;' +
         '<label>+</label>&nbsp;' +
         '<label>' + valores8[10] + '</label>)]}&nbsp;' +
         '<label>=</label>' +
         '<br><br>' +
         '<textarea class="textoA"></textarea><br>';

     contenido10[5] = '-[(<label>' + valores8[8] + '</label>)]&nbsp;' +
         '<label>-</label>&nbsp;' +
         '(<label>' + valores8[9] + '</label>&nbsp;' +
         '<label>-</label>&nbsp;' +
         '<label>' + valores8[10] + '</label>&nbsp;' +
         '<label>+</label>&nbsp;' +
         '<label>' + valores8[9] + '</label>)&nbsp;' +
         '<label>=</label>' +
         '<br><br>' +
         '<textarea class="textoA"></textarea>';
     $("#contenido10").append(contenido10);
 }

 function Pregunta11() {
     var contenido11 = [];
     var valores11 = [];
     for (var i = 0; i <= 20; i++) {
         valores11[i] = Math.round(Math.random() * (100 - 1) + 1);
     }
     contenido11[0] = '{<label>' + valores11[0] * -1 + '</label>&nbsp;' +
         '(<label>-</label>&nbsp;' +
         '<label>' + valores11[1] + '</label>)&nbsp;' +
         '<label>-</label>&nbsp;' +
         '<label>' + valores11[2] + '</label>&nbsp;' +
         '<label>-</label>&nbsp;' +
         '[<label>' + valores11[3] + '</label>&nbsp;' +
         '(<label>' + valores11[4] + '</label>)&nbsp;' +
         '<label>' + valores11[5] + '</label>&nbsp;' +
         '<label>-</label>&nbsp;' +
         '<label>' + valores11[6] + '</label>&nbsp;' +
         '(<label>' + valores11[7] + '</label>&nbsp;' +
         '<label>-</label>&nbsp;' +
         '<label>' + valores11[8] + '</label>)]}&nbsp;' +
         '<br><br>' +
         '<textarea class="textoA"></textarea><br>';
     contenido11[1] = '(<label>' + valores11[9] * -1 + '</label>&nbsp;' +
         '(<label>-</label>&nbsp;' +
         '<label>' + valores11[10] + '</label>)&nbsp;' +
         '<label>÷</label>&nbsp;' +
         '(<label>' + valores11[11] + '</label>&nbsp;' +
         '<label>-</label>&nbsp;' +
         '<label>' + valores11[12] + '</label>)&nbsp;' +
         '<label>-</label>&nbsp;' +
         '<label>{</label>' +
         '<label>' + valores11[13] + '</label>' +
         '<label>/</label>' +
         '<label>' + valores11[14] + '</label>' +
         '<label>}</label>' +
         '<label>+</label>&nbsp;' +
         '(-<label>' + valores11[15] + '</label>&nbsp;' +
         '<label>-</label>&nbsp;' +
         '<label>' + valores11[16] + '</label>)&nbsp;' +
         '(<label>' + valores11[17] + '</label>&nbsp;' +
         '<label>-</label>&nbsp;' +
         '<label>' + valores11[18] + '</label>)&nbsp;' +
         '<br><br>' +
         '<textarea class="textoA"></textarea><br>';
     contenido11[2] = '-<label>' + valores11[19] + '</labe>' +
         '<label>(</label>' +
         '-<label>' + valores11[5] + '</label>' +
         '<label>+</label>' +
         '<label>' + valores11[8] + '</label>' +
         '<label>)</label>' +
         '<label>-</label>' +
         '<sup style="position: relative;left: 8px; top: -10px;">3</sup>' +
         '&#8730;<span class="raices">' + valores11[2] + '-' +
         '' + valores11[6] + '</span>' +
         '<label>÷</label>' +
         '(-<label>' + valores11[5] + '</label>)' +
         '(<label>' + valores11[10] + '</label>' +
         '<label>-</label>' +
         '<label>' + valores11[11] + '</label>' +
         '<label>+</label>' +
         '<label>' + valores11[16] + '</label>)<br>' +
         '<textarea class="textoA"></textarea><br>';;
     $("#contenido11").append(contenido11);
 }

 function Pregunta12() {
     var contenido12 = [];
     contenido12[0] = '<label>El Sol es una estrella.</label><br><textarea class="textoA"></textarea><br>';
     contenido12[1] = '<label>La capital de Ecuador es Quito.</label><br><textarea class="textoA"></textarea><br>'
     contenido12[2] = '<label>20 + 5 – 10 = 30</label><br><textarea class="textoA"></textarea><br>'
     contenido12[3] = '<label>Un triángulo escaleno tiene todos sus lados desiguales.</label><br><textarea class="textoA"></textarea>'
     $("#contenido12").append(contenido12);
 }

 function Pregunta13() {
     var i = 1;
     var valoresA = 0;
     var valoresB = 0;
     var respuestasA = [];
     var respuestasB = [];
     var i = 0;
     var nuevo = [];
     var valoresA = ["", "⇒", "⇔", "∧", "∨", "∼", '<u>' + "∨" + '</u>']
     var valoresB = ["", '<u>' + "∨" + '</u>', "∼", "∨", "∧", "⇔", "⇒"]
     respuestasA[0] = '<td style="width: 150px;" class="tabla13"><div draggable="true" ondragstart="drag(event)" id="drag1" style="font-size:20px; text-align:center; background-color: white; padding-right: 10px;padding-left: 10px;">si...,entonces</label></div></td>';
     respuestasA[1] = '<td style="width: 175px;" class="tabla13"><div draggable="true" ondragstart="drag(event)" id="drag2" style="font-size:20px; text-align:center; background-color: white;padding-right: 10px;padding-left: 10px; ">...si, y solo si...</label></div></td>';
     respuestasA[2] = '<td style="width: 150px;" class="tabla13"><div draggable="true" ondragstart="drag(event)" id="drag3" style="font-size:20px; text-align:center; background-color: white;padding-right: 10px;padding-left: 10px;">y</label></div></td>';
     respuestasA[3] = '<td style="width: 150px;" class="tabla13"><div draggable="true" ondragstart="drag(event)" id="drag4" style="font-size:20px; text-align:center; background-color: white;padding-right: 10px;padding-left: 10px;">o</label></div></td>';
     respuestasA[4] = '<td style="width: 150px;" class="tabla13"><div draggable="true" ondragstart="drag(event)" id="drag5" style="font-size:20px; text-align:center; background-color: white;padding-right: 10px;padding-left: 10px;">no</label></div></td>';
     respuestasA[5] = '<td style="width: 150px;" class="tabla13"><div draggable="true" ondragstart="drag(event)" id="drag6" style="font-size:20px; text-align:center; background-color: white;padding-right: 10px;padding-left: 10px;">0...o</label></div></td>';

     respuestasB[5] = '<td style="width: 150px;" class="tabla13"><div draggable="true" ondragstart="drag(event)" id="drag6" style="font-size:20px; text-align:center; background-color: white; padding-right: 10px;padding-left: 10px;">si...,entonces</label></div></td>';
     respuestasB[4] = '<td style="width: 175px;" class="tabla13"><div draggable="true" ondragstart="drag(event)" id="drag5" style="font-size:20px; text-align:center; background-color: white;padding-right: 10px;padding-left: 10px; ">...si, y solo si...</label></div></td>';
     respuestasB[3] = '<td style="width: 150px;" class="tabla13"><div draggable="true" ondragstart="drag(event)" id="drag4" style="font-size:20px; text-align:center; background-color: white;padding-right: 10px;padding-left: 10px;">y</label></div></td>';
     respuestasB[2] = '<td style="width: 150px;" class="tabla13"><div draggable="true" ondragstart="drag(event)" id="drag3" style="font-size:20px; text-align:center; background-color: white;padding-right: 10px;padding-left: 10px;">o</label></div></td>';
     respuestasB[1] = '<td style="width: 150px;" class="tabla13"><div draggable="true" ondragstart="drag(event)" id="drag2" style="font-size:20px; text-align:center; background-color: white;padding-right: 10px;padding-left: 10px;">no</label></div></td>';
     respuestasB[0] = '<td style="width: 150px;" class="tabla13"><div draggable="true" ondragstart="drag(event)" id="drag1" style="font-size:20px; text-align:center; background-color: white;padding-right: 10px;padding-left: 10px;">O...o</label></div></td>';



     var ale = Math.round(Math.random() * (3 - 1) + 1);
     debugger;
     if (ale == 1) {
         for (var i = 1; i <= 6; i++) {
             $("#contenido").append('<tr><td width=50px style="text-align:center" class="tabla13"><label id="a' + i + '">' + valoresA[i] + '</td><td width=150px style="width:100px;height:20px; font-size: 12px" class="tabla13" id="div' + i + 'a" ondrop="drop(event)" ondragover="allowDrop(event)"></td></tr>');
         }
         $("#Respuestas").append('<tr>' + respuestasA[0] + respuestasA[1] + respuestasA[2] + '</tr><tr>' + respuestasA[3] + respuestasA[4] + respuestasA[5] + '</tr>');

     } else {
         for (var i = 1; i <= 6; i++) {
             $("#contenido").append('<tr><td width=50px style="text-align:center" class="tabla13"><label id="a' + i + '">' + valoresB[i] + '</td><td class="tabla13" style="width:200px; text-align:center; width:100px;height:20px; font-size: 12px" id="div' + i + 'a" ondrop="drop(event)" ondragover="allowDrop(event)"></td></tr>');
         }
         $("#Respuestas").append('<tr>' + respuestasB[1] + respuestasB[3] + respuestasB[5] + '</tr><tr>' + respuestasB[2] + respuestasB[4] + respuestasB[0] + '</tr>');

     }

 };
 var divs = [];
 var contenidos = [];
 var k = 0;
 var z = 0;

 function allowDrop(ev) {
     ev.preventDefault();

 }

 function drag(ev) {

     ev.dataTransfer.setData("text", ev.target.id);
     console.log(ev.target.id);
     divs[k] = ev.target.id;
     z = z + 1;
     console.log(divs);
 }

 function drop(ev) {

     ev.preventDefault();
     var data = ev.dataTransfer.getData("text");
     ev.target.appendChild(document.getElementById(data));
     var n = '#' + ev.target.id;
     contenidos[k] = ev.target.id;
     console.log(contenidos);
     k = k + 1;
 }

 function calPre13() {
     var nota13 = 0;
     //Variables Respuestas Txt
     debugger;
     for (var i = 0; i <= 6; i++) {
         //console.log(res3[i]);
         if (contenidos.length == 0) {
             $('#div1a').css("border", "4px solid red");
             $('#div1b').css("border", "4px solid red");
             $('#div1c').css("border", "4px solid red");
             $('#div2a').css("border", "4px solid red");
             $('#div2b').css("border", "4px solid red");
             $('#div2c').css("border", "4px solid red");
         }
         switch (contenidos[i]) {
             case "div1a":
                 if ((divs[i]) == "drag1") {
                     nota13 = nota13 + 1;
                     $('#div1a').css("border", "4px solid green");

                 } else {
                     $('#div1a').css("border", "4px solid red");
                 }
                 break;
             case "div2a":
                 if ((divs[i]) == "drag2") {
                     nota13 = nota13 + 1;
                     $('#div2a').css("border", "4px solid green");
                 } else {
                     $('#div2a').css("border", "4px solid red");
                 }
                 break;
             case "div3a":
                 if ((divs[i]) == "drag3") {
                     nota13 = nota13 + 1;
                     $('#div3a').css("border", "4px solid green");
                 } else {
                     $('#div3a').css("border", "4px solid red");
                 }
                 break;
             case "div4a":
                 if ((divs[i]) == "drag4") {
                     nota13 = nota13 + 1;
                     $('#div4a').css("border", "4px solid green");

                 } else {
                     $('#div4a').css("border", "4px solid red");
                 }
                 break;
             case "div5a":
                 if ((divs[i]) == "drag5") {
                     nota13 = nota13 + 1;
                     $('#div5a').css("border", "4px solid green");
                 } else {
                     $('#div5a').css("border", "4px solid red");
                 }
                 break;
             case "div6a":
                 if ((divs[i]) == "drag6") {
                     nota13 = nota13 + 1;
                     $('#div6a').css("border", "4px solid green");
                 } else {
                     $('#div6a').css("border", "4px solid red");

                 }
                 break;
         }
     }

     var notaFinal = (nota13 * 1) / 6;
     notaFinal = notaFinal.toFixed(2)
     $("#txtNota").text(notaFinal + "/10");
     $('#Calificar').attr('disabled', true);
     $('#Refrescar').attr('disabled', false);
 }


 $(document).ready(function() {
     var titulos = 0;
     Pregunta1();
     Pregunta2();
     Pregunta3();
     Pregunta4();
     Pregunta5();
     Pregunta6();
     Pregunta7();
     Pregunta8();
     Pregunta9();
     Pregunta10();
     Pregunta11();
     Pregunta12();
     Pregunta13();

     function datos(i) {
         var nota8 = $("#nota8").text();
         var nota9 = $("#nota9").text();
         var nota10= $("#nota10").text();
         var nota11 = $("#nota11").text();
         var nota12 = $("#nota12").text();
         var pre = ["6", "12", "15"];
         if ($("#nota8").text() == "0.00") {
             alertify.prompt("Introducir notas para la pregunta 8 sobre 1:", function(e, str) {
                 if (e) {
                     alertify.success("Has pulsado has introducido nota: " + str);
                     str = parseFloat(str).toFixed(2);
                     $("#nota8").text(str);
                     console.log("nota8" + str);
                     datos(4);
                 } else {
                     alertify.error("No has ingresado la nota");
                     datos(4);
                 }
             });
             return false;
         }
         if ($("#nota9").text() == "0.00") {
             alertify.prompt("Introducir notas para la pregunta 9 sobre 1:", function(e, str1) {
                 if (e) {
                     alertify.success("Has pulsado has introducido nota: " + str1);
                     str1 = parseFloat(str1).toFixed(2);
                     $("#nota9").text(str1);
                     console.log("nota9" + str1);
                     datos(4)
                 } else {
                     alertify.error("No has ingresado la nota");
                     datos(4);
                 }
             });
             return false;
         }
         if ($("#nota10").text() == "0.00") {
             alertify.prompt("Introducir notas para la pregunta 10 sobre 1:", function(e, str2) {
                 if (e) {
                     alertify.success("Has pulsado has introducido nota: " + str2);
                     str2 = parseFloat(str2).toFixed(2);

                     $("#nota10").text(str2);
                     console.log("nota10" + str2);
                     datos(4)
                 } else {
                     alertify.error("No has ingresado la nota");
                     datos(4);
                 }
             });
             return false;
         }
         if ($("#nota11").text() == "0.00") {
             alertify.prompt("Introducir notas para la pregunta 11 sobre 1:", function(e, str3) {
                 if (e) {
                     alertify.success("Has pulsado has introducido nota: " + str3);
                     str3 = parseFloat(str3).toFixed(2);
                     $("#nota11").text(str3);
                     console.log("nota11" + str3);
                     datos(4)
                 } else {
                     alertify.error("No has ingresado la nota");
                     datos(4);
                 }
             });
             return false;
         }
         if ($("#nota12").text() == "0.00") {
             alertify.prompt("Introducir notas para la pregunta 12 sobre 1:", function(e, str4) {
                 if (e) {
                     alertify.success("Has pulsado has introducido nota: " + str4);
                     str4 = parseFloat(str4).toFixed(2);
                     $("#nota12").text(str4);
                     console.log("nota12" + str4);
                     datos(4)
                 } else {
                     alertify.error("No has ingresado la nota");
                     datos(4);
                 }
             });
             return false;
         }
         if (i == 4) {
             confirmar();
         }
     }

     function confirmar() {
         if ($("#nota8").text() == "0.00" || $("#nota9").text() == "0.00" || $("#nota10").text() == "0.00" || $("#nota11").text() == "0.00" || $("#nota12").text() == "0.00" ) {
             datos(1);
         } else {
             alertify.confirm("<h3>Desea calificar la evaluación?</h3>", function(e) {
                 if (e) {
                     calPre1();
                     calPre2();
                     calPre4();
                     calPre5();
                     calPre6();
                     calPre7();
                     calPre13();
                     var notaFinal = 0;
                     for (var i = 1; i <= 13; i++)
                         notaFinal = notaFinal + parseFloat($("#nota" + i).text());
                     notaFinal = (notaFinal * 10) / 13
                     notaFinal = notaFinal.toFixed(2);
                     $("#txtNota").text(+notaFinal + "/10");
                     $('#Calificar').attr('disabled', true);
                     $('#Refrescar').attr('disabled', false);
                     alertify.success("La evaluacion ha sido calificada!!!");
                 } else {
                     alertify.error("Has pulsado '" + +"'");
                 }
             });
             return false
         }
     }



     $("#Calificar").click(function() {
         if ($("#nota8").text() == "0.00" || $("#nota9").text() == "0.00" || $("#nota10").text() == "0.00" || $("#nota11").text() == "0.00" || $("#nota12").text() == "0.00" ) {
             datos(1);
         } else {
             datos(4);
         }

     });
 });