var titulos = "evaluacion"

function Inicio() {
    $('#nota-informativa').slideUp('slow');
    $("#Calificar").removeAttr("disabled");
    $('#Refrescar').attr('disabled', true);
    $("#sucesion1A").html('');
    $("#contenido1A").html('');
    $("#sucesion1B").html('');
    $("#contenido1B").html('');
    $("#contenido2").html('');
}

function Preg2() {
    var tabla1 = [];
    var numeros = [];
    var valores = [];
    for (var i = 0; i <= 20; i++) {
        numeros[i] = Math.round(Math.random() * (10 - 1) + 1);
        valores[i] = Math.round(Math.random() * (9 - 0) + 1);

    }
    tabla1[0] = '<tr>' +
        '<td ><label class="numerador">' + numeros[0] + ',' + numeros[1] + '</label><label class="periodo numerador">' + valores[0] + '</label></td>' +
        '<td rowspan="2"><label class="signo">+</label></td>' +
        '<td ><label class="numerador">' + numeros[2] + '/' + numeros[4] + '</label></td>' +
        '<td rowspan="2"><label class="signo">=</label></td>' +
        '</tr>';
    tabla1[1] = '<tr>' +
        '<td><label class="denominador">' + numeros[5] + ',' + valores[8] + '' + valores[2] + '</label><label class="periodo denominador">' + valores[5] + '</label></td>' +
        '<td><label class="denominador">' + numeros[6] + ',' + valores[8] + '' + valores[2] + '</label><label class="periodo denominador">' + valores[9] + '</label></td>' +
        '<td class="respuestaD"><input type="number" class="respuesta"></td>' +
        '</tr>';
    $("#contenido2").append(tabla1);
}


function Preg3() {
    var tablaA = [];
    var tablaB = [];
    var tablaC = [];
    var tablaD = [];
    var valores = [];
    for (var i = 0; i <= 10; i++)
        valores[i] = Math.round(Math.random() * (10 - 1) + 1);

    tablaA[0] = '<tr>' +
        '<td rowspan="2"><label class="parentesis">( -</label></td>' +
        '<td ><label class="numerador">' + valores[0] + '</label></td>' +
        '<td rowspan="2"><label class="parentesis">)<sup class="exp">4</sup></label></td>' +
        '<td rowspan="2"><label class="parentesis">=</label></td>' +
        '</tr>';
    tablaA[1] = '<tr>' +
        '<td style="text-align:center"><label class="denominador">' + valores[1] + '</label></td>' +
        '</tr>'

    tablaB[0] = '<tr>' +
        '<td rowspan="2"><label class="parentesis">(</label></td>' +
        '<td ><label class="denominador">m <sup>0</sup></label></td>' +
        '<td rowspan="2"><label class="parentesis">)<sup class="exp">-5</sup></label></td>' +
        '<td rowspan="2"><label class="parentesis">=</label></td>' +
        '</tr>';
    tablaB[1] = '<tr>' +
        '<td style="text-align:center"><label class="denominador"></label></td>' +
        '</tr>'

    tablaC[0] = '<tr>' +
        '<td rowspan="2"><label class="parentesis">( -</label></td>' +
        '<td ><label class="numerador">' + -valores[4] + '</label></td>' +
        '<td rowspan="2"><label class="parentesis">)<sup class="exp">-3</sup></label></td>' +
        '<td rowspan="2"><label class="parentesis">=</label></td>' +
        '</tr>';
    tablaC[1] = '<tr>' +
        '<td style="text-align:center"><label class="denominador">' + valores[5] + '</label></td>' +
        '</tr>'

    tablaD[0] = '<tr>' +
        '<td rowspan="2"><label class="parentesis">(</label></td>' +
        '<td ><label class="numerador">a<sup>5</sup> b<sup>-3</sup> c<sup>4</sup></label></td>' +
        '<td rowspan="2"><label class="parentesis">)<sup class="exp">-4</sup></label></td>' +
        '<td rowspan="2"><label class="parentesis">=</label></td>' +
        '</tr>';
    tablaD[1] = '<tr>' +
        '<td style="text-align:center"><label class="denominador">(a b<sup>2</sup> c<sup>-1</sup>)<sup>2</sup></label></td>' +
        '</tr>'

    $("#contenido3A").append(tablaA);
    $("#contenido3B").append(tablaB);
    $("#contenido3C").append(tablaC);
    $("#contenido3D").append(tablaD);
};

function Preg8A() {
    var i = 0;
    var valoresA = ["V", "V", "F", "F"];
    var valoresC = ["V", "F", "V", "F"];
    var opcionesA = [];
    var opcionesB = [];
    var opcionesC = [];
    var opcionesD = [];
    var opcionesE = [];

    for (var i = 0; i <= 7; i++) {
        opcionesA[i] = '<select required="required" class="form-control" name="servicio" id="1a' + i + '">' +
            '<option value="0" selected="selected">Seleccione una opción</option>' +
            '<option value="F">F</option>' +
            '<option value="V">V</option>' +
            '</select>';
        opcionesB[i] = '<select required="required" class="form-control" name="servicio" id="1b' + i + '">' +
            '<option value="0" selected="selected">Seleccione una opción</option>' +
            '<option value="F">F</option>' +
            '<option value="V">V</option>' +
            '</select>';
        opcionesC[i] = '<select required="required" class="form-control" name="servicio" id="1c' + i + '">' +
            '<option value="0" selected="selected">Seleccione una opción</option>' +
            '<option value="F">F</option>' +
            '<option value="V">V</option>' +
            '</select>';
        opcionesD[i] = '<select required="required" class="form-control" name="servicio" id="1d' + i + '">' +
            '<option value="0" selected="selected">Seleccione una opción</option>' +
            '<option value="F">F</option>' +
            '<option value="V">V</option>' +
            '</select>';
        opcionesE[i] = '<select required="required" class="form-control" name="servicio" id="1e' + i + '">' +
            '<option value="0" selected="selected">Seleccione una opción</option>' +
            '<option value="F">F</option>' +
            '<option value="V">V</option>' +
            '</select>';
    }
    for (var i = 0; i <= 3; i++) {
        $("#contenido8A").append('<tr>' +
            '<td><label>' + valoresA[i] + '</label></td>' +
            '<td><label>' + valoresC[i] + '</label></td>' +
            '<td>' + opcionesA[i] + '</td>' +
            '<td>' + opcionesB[i] + '</td>' +
            '<td>' + opcionesC[i] + '</td>' +
            '<td>' + opcionesD[i] + '</td>' +
            '<td>' + opcionesE[i] + '</td></tr>');
    }
};

function Preg8B() {
    var i = 0;
    var valoresA = ["V", "V", "F", "F"];
    var valoresC = ["V", "F", "V", "F"];
    var opcionesA = [];
    var opcionesB = [];
    var opcionesC = [];
    var opcionesD = [];
    var opcionesE = [];

    for (var i = 0; i <= 7; i++) {
        opcionesA[i] = '<select required="required" class="form-control" name="servicio" id="2a' + i + '">' +
            '<option value="0" selected="selected">Seleccione una opción</option>' +
            '<option value="F">F</option>' +
            '<option value="V">V</option>' +
            '</select>';
        opcionesB[i] = '<select required="required" class="form-control" name="servicio" id="2b' + i + '">' +
            '<option value="0" selected="selected">Seleccione una opción</option>' +
            '<option value="F">F</option>' +
            '<option value="V">V</option>' +
            '</select>';
        opcionesC[i] = '<select required="required" class="form-control" name="servicio" id="2c' + i + '">' +
            '<option value="0" selected="selected">Seleccione una opción</option>' +
            '<option value="F">F</option>' +
            '<option value="V">V</option>' +
            '</select>';
        opcionesD[i] = '<select required="required" class="form-control" name="servicio" id="2d' + i + '">' +
            '<option value="0" selected="selected">Seleccione una opción</option>' +
            '<option value="F">F</option>' +
            '<option value="V">V</option>' +
            '</select>';
        opcionesE[i] = '<select required="required" class="form-control" name="servicio" id="2e' + i + '">' +
            '<option value="0" selected="selected">Seleccione una opción</option>' +
            '<option value="F">F</option>' +
            '<option value="V">V</option>' +
            '</select>';
    }
    for (var i = 0; i <= 3; i++) {
        $("#contenido8B").append('<tr>' +
            '<td><label>' + valoresA[i] + '</label></td>' +
            '<td><label>' + valoresC[i] + '</label></td>' +
            '<td>' + opcionesA[i] + '</td>' +
            '<td>' + opcionesB[i] + '</td>' +
            '<td>' + opcionesC[i] + '</td>' +
            '<td>' + opcionesD[i] + '</td>' +
            '<td>' + opcionesE[i] + '</td></tr>');
    }
};

function Preg8C() {
    var i = 0;
    var valoresA = ["V", "V", "V", "V", "F", "F", "F", "F"];
    var valoresB = ["V", "V", "F", "F", "V", "V", "F", "F"];
    var valoresC = ["V", "F", "V", "F", "V", "F", "V", "F"];
    var opcionesA = [];
    var opcionesB = [];
    var opcionesC = [];
    var opcionesD = [];
    var opcionesE = [];

    for (var i = 0; i <= 7; i++) {
        opcionesA[i] = '<select required="required" class="form-control" name="servicio" id="3a' + i + '">' +
            '<option value="0" selected="selected">Seleccione una opción</option>' +
            '<option value="F">F</option>' +
            '<option value="V">V</option>' +
            '</select>';
        opcionesB[i] = '<select required="required" class="form-control" name="servicio" id="3b' + i + '">' +
            '<option value="0" selected="selected">Seleccione una opción</option>' +
            '<option value="F">F</option>' +
            '<option value="V">V</option>' +
            '</select>';
        opcionesC[i] = '<select required="required" class="form-control" name="servicio" id="3c' + i + '">' +
            '<option value="0" selected="selected">Seleccione una opción</option>' +
            '<option value="F">F</option>' +
            '<option value="V">V</option>' +
            '</select>';
        opcionesD[i] = '<select required="required" class="form-control" name="servicio" id="3d' + i + '">' +
            '<option value="0" selected="selected">Seleccione una opción</option>' +
            '<option value="F">F</option>' +
            '<option value="V">V</option>' +
            '</select>';
    }
    for (var i = 0; i <= 7; i++) {
        $("#contenido8C").append('<tr>' +
            '<td><label>' + valoresA[i] + '</label></td>' +
            '<td><label>' + valoresB[i] + '</label></td>' +
            '<td><label>' + valoresC[i] + '</label></td>' +
            '<td>' + opcionesA[i] + '</td>' +
            '<td>' + opcionesB[i] + '</td>' +
            '<td>' + opcionesC[i] + '</td>' +
            '<td>' + opcionesD[i] + '</td></tr>');
    }
};

var notas8 = [];

function CalificarP8A() {
    var nota = 0;
    //Variables Fila 1
    //Variables Fila Respuesta
    var res1 = [];
    var res2 = [];
    var res3 = [];
    var res4 = [];
    var res5 = [];
    res1[0] = $("#1a0 option:selected").text();
    res1[1] = $("#1a1 option:selected").text();
    res1[2] = $("#1a2 option:selected").text();
    res1[3] = $("#1a3 option:selected").text();
    res1[4] = $("#1a4 option:selected").text();
    res1[5] = $("#1a5 option:selected").text();
    res1[6] = $("#1a6 option:selected").text();
    res1[7] = $("#1a7 option:selected").text();

    res2[0] = $("#1b0 option:selected").text();
    res2[1] = $("#1b1 option:selected").text();
    res2[2] = $("#1b2 option:selected").text();
    res2[3] = $("#1b3 option:selected").text();
    res2[4] = $("#1b4 option:selected").text();
    res2[5] = $("#1b5 option:selected").text();
    res2[6] = $("#1b6 option:selected").text();
    res2[7] = $("#1b7 option:selected").text();

    res3[0] = $("#1c0 option:selected").text();
    res3[1] = $("#1c1 option:selected").text();
    res3[2] = $("#1c2 option:selected").text();
    res3[3] = $("#1c3 option:selected").text();
    res3[4] = $("#1c4 option:selected").text();
    res3[5] = $("#1c5 option:selected").text();
    res3[6] = $("#1c6 option:selected").text();
    res3[7] = $("#1c7 option:selected").text();

    res4[0] = $("#1d0 option:selected").text();
    res4[1] = $("#1d1 option:selected").text();
    res4[2] = $("#1d2 option:selected").text();
    res4[3] = $("#1d3 option:selected").text();
    res4[4] = $("#1d4 option:selected").text();
    res4[5] = $("#1d5 option:selected").text();
    res4[6] = $("#1d6 option:selected").text();
    res4[7] = $("#1d7 option:selected").text();

    res5[0] = $("#1e0 option:selected").text();
    res5[1] = $("#1e1 option:selected").text();
    res5[2] = $("#1e2 option:selected").text();
    res5[3] = $("#1e3 option:selected").text();
    res5[4] = $("#1e4 option:selected").text();
    res5[5] = $("#1e5 option:selected").text();
    res5[6] = $("#1e6 option:selected").text();
    res5[7] = $("#1e7 option:selected").text();

    conta = 0;
    for (var i = 0; i <= 7; i++) {
        if (res1[i] == "Seleccione una opción")
            $('#1a' + i).css("background-color", "red");
        if (res2[i] == "Seleccione una opción")
            $('#1b' + i).css("background-color", "red");
        if (res3[i] == "Seleccione una opción")
            $('#1c' + i).css("background-color", "red");
        if (res3[i] == "Seleccione una opción")
            $('#1c' + i).css("background-color", "red");

        if (i == 0) {
            if (res5[i] == "V") {
                if (res1[i] == "F" && res2[i] == "F" && res4[i] == "V" && res5[i] == "V") {
                    nota = nota + 1;
                    $('#1a' + i).css("background-color", "green");
                    $('#1b' + i).css("background-color", "green");
                    $('#1c' + i).css("background-color", "green");
                    $('#1d' + i).css("background-color", "green");
                    $('#1e' + i).css("background-color", "green");
                    $('#1f' + i).css("background-color", "green");


                } else {
                    $('#1a' + i).css("background-color", "red");
                    $('#1b' + i).css("background-color", "red");
                    $('#1c' + i).css("background-color", "red");
                    $('#1d' + i).css("background-color", "red");
                    $('#1e' + i).css("background-color", "red");
                    $('#1f' + i).css("background-color", "red");


                }
            } else {
                $('#1a' + i).css("background-color", "red");
                $('#1b' + i).css("background-color", "red");
                $('#1c' + i).css("background-color", "red");
                $('#1d' + i).css("background-color", "red");
                $('#1e' + i).css("background-color", "red");
                $('#1f' + i).css("background-color", "red");
            }
        }
        if (i == 1) {
            if (res5[i] == "F") {
                if (res1[i] == "F" && res2[i] == "F" && res3[i] == "F" && res4[i] == "V") {
                    nota = nota + 1;
                    $('#1a' + i).css("background-color", "green");
                    $('#1b' + i).css("background-color", "green");
                    $('#1c' + i).css("background-color", "green");
                    $('#1d' + i).css("background-color", "green");
                    $('#1e' + i).css("background-color", "green");
                    $('#1f' + i).css("background-color", "green");
                } else {
                    $('#1a' + i).css("background-color", "red");
                    $('#1b' + i).css("background-color", "red");
                    $('#1c' + i).css("background-color", "red");
                    $('#1d' + i).css("background-color", "red");
                    $('#1e' + i).css("background-color", "red");
                    $('#1f' + i).css("background-color", "red");

                }
            } else {
                $('#1a' + i).css("background-color", "red");
                $('#1b' + i).css("background-color", "red");
                $('#1c' + i).css("background-color", "red");
                $('#1d' + i).css("background-color", "red");
                $('#1e' + i).css("background-color", "red");
                $('#1f' + i).css("background-color", "red");

            }
        }
        if (i == 2) {
            if (res3[i] == "F") {
                if (res1[i] == "V" && res2[i] == "F" && res4[i] == "F" && res5[i] == "F") {
                    nota = nota + 1;
                    $('#1a' + i).css("background-color", "green");
                    $('#1b' + i).css("background-color", "green");
                    $('#1c' + i).css("background-color", "green");
                    $('#1d' + i).css("background-color", "green");
                    $('#1e' + i).css("background-color", "green");
                    $('#1f' + i).css("background-color", "green");

                } else {
                    $('#1a' + i).css("background-color", "red");
                    $('#1b' + i).css("background-color", "red");
                    $('#1c' + i).css("background-color", "red");
                    $('#1d' + i).css("background-color", "red");
                    $('#1e' + i).css("background-color", "red");
                    $('#1f' + i).css("background-color", "red");

                }
            } else {
                $('#1a' + i).css("background-color", "red");
                $('#1b' + i).css("background-color", "red");
                $('#1c' + i).css("background-color", "red");
                $('#1d' + i).css("background-color", "red");
                $('#1e' + i).css("background-color", "red");
                $('#1f' + i).css("background-color", "red");

            }
        }
        if (i == 3) {
            if (res3[i] == "V") {
                if (res1[i] == "V" && res2[i] == "V" && res4[i] == "V" && res5[i] == "V") {
                    nota = nota + 1;
                    $('#1a' + i).css("background-color", "green");
                    $('#1b' + i).css("background-color", "green");
                    $('#1c' + i).css("background-color", "green");
                    $('#1d' + i).css("background-color", "green");
                    $('#1e' + i).css("background-color", "green");
                    $('#1f' + i).css("background-color", "green");
                } else {
                    $('#1a' + i).css("background-color", "red");
                    $('#1b' + i).css("background-color", "red");
                    $('#1c' + i).css("background-color", "red");
                    $('#1d' + i).css("background-color", "red");
                    $('#1e' + i).css("background-color", "red");
                    $('#1f' + i).css("background-color", "red");

                }
            } else {
                $('#1a' + i).css("background-color", "red");
                $('#1b' + i).css("background-color", "red");
                $('#1c' + i).css("background-color", "red");
                $('#1d' + i).css("background-color", "red");
                $('#1e' + i).css("background-color", "red");
                $('#1f' + i).css("background-color", "red");

            }
        }
    }

    notas8[0] = (nota) / 4;
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
};

function CalificarP8B() {
    var nota = 0;
    //Variables Fila 1
    //Variables Fila Respuesta
    var res1 = [];
    var res2 = [];
    var res3 = [];
    var res4 = [];
    var res5 = [];
    res1[0] = $("#2a0 option:selected").text();
    res1[1] = $("#2a1 option:selected").text();
    res1[2] = $("#2a2 option:selected").text();
    res1[3] = $("#2a3 option:selected").text();
    res1[4] = $("#2a4 option:selected").text();
    res1[5] = $("#2a5 option:selected").text();
    res1[6] = $("#2a6 option:selected").text();
    res1[7] = $("#2a7 option:selected").text();

    res2[0] = $("#2b0 option:selected").text();
    res2[1] = $("#2b1 option:selected").text();
    res2[2] = $("#2b2 option:selected").text();
    res2[3] = $("#2b3 option:selected").text();
    res2[4] = $("#2b4 option:selected").text();
    res2[5] = $("#2b5 option:selected").text();
    res2[6] = $("#2b6 option:selected").text();
    res2[7] = $("#2b7 option:selected").text();

    res3[0] = $("#2c0 option:selected").text();
    res3[1] = $("#2c1 option:selected").text();
    res3[2] = $("#2c2 option:selected").text();
    res3[3] = $("#2c3 option:selected").text();
    res3[4] = $("#2c4 option:selected").text();
    res3[5] = $("#2c5 option:selected").text();
    res3[6] = $("#2c6 option:selected").text();
    res3[7] = $("#2c7 option:selected").text();

    res4[0] = $("#2d0 option:selected").text();
    res4[1] = $("#2d1 option:selected").text();
    res4[2] = $("#2d2 option:selected").text();
    res4[3] = $("#2d3 option:selected").text();
    res4[4] = $("#2d4 option:selected").text();
    res4[5] = $("#2d5 option:selected").text();
    res4[6] = $("#2d6 option:selected").text();
    res4[7] = $("#2d7 option:selected").text();

    res5[0] = $("#2e0 option:selected").text();
    res5[1] = $("#2e1 option:selected").text();
    res5[2] = $("#2e2 option:selected").text();
    res5[3] = $("#2e3 option:selected").text();
    res5[4] = $("#2e4 option:selected").text();
    res5[5] = $("#2e5 option:selected").text();
    res5[6] = $("#2e6 option:selected").text();
    res5[7] = $("#2e7 option:selected").text();

    debugger;
    conta = 0;
    for (var i = 0; i <= 7; i++) {
        if (res1[i] == "Seleccione una opción")
            $('#2a' + i).css("background-color", "red");
        if (res2[i] == "Seleccione una opción")
            $('#2b' + i).css("background-color", "red");
        if (res3[i] == "Seleccione una opción")
            $('#2c' + i).css("background-color", "red");
        if (res3[i] == "Seleccione una opción")
            $('#2c' + i).css("background-color", "red");

        if (i == 0) {
            if (res5[i] == "F") {
                if (res1[i] == "V" && res2[i] == "F" && res3[i] == "F" && res4[i] == "V") {
                    nota = nota + 1;
                    $('#2a' + i).css("background-color", "green");
                    $('#2b' + i).css("background-color", "green");
                    $('#2c' + i).css("background-color", "green");
                    $('#2d' + i).css("background-color", "green");
                    $('#2e' + i).css("background-color", "green");
                    $('#2f' + i).css("background-color", "green");

                } else {
                    $('#2a' + i).css("background-color", "red");
                    $('#2b' + i).css("background-color", "red");
                    $('#2c' + i).css("background-color", "red");
                    $('#2d' + i).css("background-color", "red");
                    $('#2e' + i).css("background-color", "red");
                    $('#2f' + i).css("background-color", "red");
                }
            } else {
                $('#2a' + i).css("background-color", "red");
                $('#2b' + i).css("background-color", "red");
                $('#2c' + i).css("background-color", "red");
                $('#2d' + i).css("background-color", "red");
                $('#2e' + i).css("background-color", "red");
                $('#2f' + i).css("background-color", "red");
            }
        }
        if (i == 1) {
            if (res3[i] == "F") {
                if (res1[i] == "F" && res2[i] == "V" && res4[i] == "F" && res5[i] == "F") {
                    nota = nota + 1;
                    $('#2a' + i).css("background-color", "green");
                    $('#2b' + i).css("background-color", "green");
                    $('#2c' + i).css("background-color", "green");
                    $('#2d' + i).css("background-color", "green");
                    $('#2e' + i).css("background-color", "green");
                    $('#2f' + i).css("background-color", "green");
                } else {
                    $('#2a' + i).css("background-color", "red");
                    $('#2b' + i).css("background-color", "red");
                    $('#2c' + i).css("background-color", "red");
                    $('#2d' + i).css("background-color", "red");
                    $('#2e' + i).css("background-color", "red");
                    $('#2f' + i).css("background-color", "red");

                }
            } else {
                $('#2a' + i).css("background-color", "red");
                $('#2b' + i).css("background-color", "red");
                $('#2c' + i).css("background-color", "red");
                $('#2d' + i).css("background-color", "red");
                $('#2e' + i).css("background-color", "red");
                $('#2f' + i).css("background-color", "red");

            }
        }
        if (i == 2) {
            if (res5[i] == "F") {
                if (res1[i] == "V" && res2[i] == "F" && res3[i] == "V" && res4[i] == "V") {
                    nota = nota + 1;
                    $('#2a' + i).css("background-color", "green");
                    $('#2b' + i).css("background-color", "green");
                    $('#2c' + i).css("background-color", "green");
                    $('#2d' + i).css("background-color", "green");
                    $('#2e' + i).css("background-color", "green");
                    $('#2f' + i).css("background-color", "green");

                } else {
                    $('#2a' + i).css("background-color", "red");
                    $('#2b' + i).css("background-color", "red");
                    $('#2c' + i).css("background-color", "red");
                    $('#2d' + i).css("background-color", "red");
                    $('#2e' + i).css("background-color", "red");
                    $('#2f' + i).css("background-color", "red");

                }
            } else {
                $('#2a' + i).css("background-color", "red");
                $('#2b' + i).css("background-color", "red");
                $('#2c' + i).css("background-color", "red");
                $('#2d' + i).css("background-color", "red");
                $('#2e' + i).css("background-color", "red");
                $('#2f' + i).css("background-color", "red");

            }
        }
        if (i == 3) {
            if (res5[i] == "F") {
                if (res1[i] == "V" && res2[i] == "F" && res3[i] == "V" && res4[i] == "V") {
                    nota = nota + 1;
                    $('#2a' + i).css("background-color", "green");
                    $('#2b' + i).css("background-color", "green");
                    $('#2c' + i).css("background-color", "green");
                    $('#2d' + i).css("background-color", "green");
                    $('#2e' + i).css("background-color", "green");
                    $('#2f' + i).css("background-color", "green");
                } else {
                    $('#2a' + i).css("background-color", "red");
                    $('#2b' + i).css("background-color", "red");
                    $('#2c' + i).css("background-color", "red");
                    $('#2d' + i).css("background-color", "red");
                    $('#2e' + i).css("background-color", "red");
                    $('#2f' + i).css("background-color", "red");

                }
            } else {
                $('#2a' + i).css("background-color", "red");
                $('#2b' + i).css("background-color", "red");
                $('#2c' + i).css("background-color", "red");
                $('#2d' + i).css("background-color", "red");
                $('#2e' + i).css("background-color", "red");
                $('#2f' + i).css("background-color", "red");

            }
        }
    }
    notas8[1] = (nota/4);
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
};

function CalificarP8C() {
    var nota = 0;
    //Variables Fila 1
    //Variables Fila Respuesta
    var res1 = [];
    var res2 = [];
    var res3 = [];
    var res4 = [];
    var res5 = [];
    res1[0] = $("#3a0 option:selected").text();
    res1[1] = $("#3a1 option:selected").text();
    res1[2] = $("#3a2 option:selected").text();
    res1[3] = $("#3a3 option:selected").text();
    res1[4] = $("#3a4 option:selected").text();
    res1[5] = $("#3a5 option:selected").text();
    res1[6] = $("#3a6 option:selected").text();
    res1[7] = $("#3a7 option:selected").text();

    res2[0] = $("#3b0 option:selected").text();
    res2[1] = $("#3b1 option:selected").text();
    res2[2] = $("#3b2 option:selected").text();
    res2[3] = $("#3b3 option:selected").text();
    res2[4] = $("#3b4 option:selected").text();
    res2[5] = $("#3b5 option:selected").text();
    res2[6] = $("#3b6 option:selected").text();
    res2[7] = $("#3b7 option:selected").text();

    res3[0] = $("#3c0 option:selected").text();
    res3[1] = $("#3c1 option:selected").text();
    res3[2] = $("#3c2 option:selected").text();
    res3[3] = $("#3c3 option:selected").text();
    res3[4] = $("#3c4 option:selected").text();
    res3[5] = $("#3c5 option:selected").text();
    res3[6] = $("#3c6 option:selected").text();
    res3[7] = $("#3c7 option:selected").text();

    res4[0] = $("#3d0 option:selected").text();
    res4[1] = $("#3d1 option:selected").text();
    res4[2] = $("#3d2 option:selected").text();
    res4[3] = $("#3d3 option:selected").text();
    res4[4] = $("#3d4 option:selected").text();
    res4[5] = $("#3d5 option:selected").text();
    res4[6] = $("#3d6 option:selected").text();
    res4[7] = $("#3d7 option:selected").text();

    debugger;
    conta = 0;
    for (var i = 0; i <= 7; i++) {
        if (res1[i] == "Seleccione una opción")
            $('#2a' + i).css("background-color", "red");
        if (res2[i] == "Seleccione una opción")
            $('#2b' + i).css("background-color", "red");
        if (res3[i] == "Seleccione una opción")
            $('#2c' + i).css("background-color", "red");
        if (res3[i] == "Seleccione una opción")
            $('#2c' + i).css("background-color", "red");

        if (i == 0) {
            if (res4[i] == "V") {
                if (res1[i] == "V" && res2[i] == "V" && res3[i] == "V") {
                    nota = nota + 1;
                    $('#3a' + i).css("background-color", "green");
                    $('#3b' + i).css("background-color", "green");
                    $('#3c' + i).css("background-color", "green");
                    $('#3d' + i).css("background-color", "green");
                    $('#3e' + i).css("background-color", "green");
                    $('#3f' + i).css("background-color", "green");

                } else {
                    $('#3a' + i).css("background-color", "red");
                    $('#3b' + i).css("background-color", "red");
                    $('#3c' + i).css("background-color", "red");
                    $('#3d' + i).css("background-color", "red");
                    $('#3e' + i).css("background-color", "red");
                    $('#3f' + i).css("background-color", "red");
                }
            } else {
                $('#3a' + i).css("background-color", "red");
                $('#3b' + i).css("background-color", "red");
                $('#3c' + i).css("background-color", "red");
                $('#3d' + i).css("background-color", "red");
                $('#3e' + i).css("background-color", "red");
                $('#3f' + i).css("background-color", "red");
            }
        }
        if (i == 1) {
            if (res4[i] == "V") {
                if (res1[i] == "V" && res2[i] == "F" && res3[i] == "F") {
                    nota = nota + 1;
                    $('#3a' + i).css("background-color", "green");
                    $('#3b' + i).css("background-color", "green");
                    $('#3c' + i).css("background-color", "green");
                    $('#3d' + i).css("background-color", "green");
                    $('#3e' + i).css("background-color", "green");
                    $('#3f' + i).css("background-color", "green");
                } else {
                    $('#3a' + i).css("background-color", "red");
                    $('#3b' + i).css("background-color", "red");
                    $('#3c' + i).css("background-color", "red");
                    $('#3d' + i).css("background-color", "red");
                    $('#3e' + i).css("background-color", "red");
                    $('#3f' + i).css("background-color", "red");

                }
            } else {
                $('#3a' + i).css("background-color", "red");
                $('#3b' + i).css("background-color", "red");
                $('#3c' + i).css("background-color", "red");
                $('#3d' + i).css("background-color", "red");
                $('#3e' + i).css("background-color", "red");
                $('#3f' + i).css("background-color", "red");

            }
        }
        if (i == 2) {
            if (res4[i] == "F") {
                if (res1[i] == "F" && res2[i] == "V" && res3[i] == "F") {
                    nota = nota + 1;
                    $('#3a' + i).css("background-color", "green");
                    $('#3b' + i).css("background-color", "green");
                    $('#3c' + i).css("background-color", "green");
                    $('#3d' + i).css("background-color", "green");
                    $('#3e' + i).css("background-color", "green");
                    $('#3f' + i).css("background-color", "green");

                } else {
                    $('#3a' + i).css("background-color", "red");
                    $('#3b' + i).css("background-color", "red");
                    $('#3c' + i).css("background-color", "red");
                    $('#3d' + i).css("background-color", "red");
                    $('#3e' + i).css("background-color", "red");
                    $('#3f' + i).css("background-color", "red");

                }
            } else {
                $('#3a' + i).css("background-color", "red");
                $('#3b' + i).css("background-color", "red");
                $('#3c' + i).css("background-color", "red");
                $('#3d' + i).css("background-color", "red");
                $('#3e' + i).css("background-color", "red");
                $('#3f' + i).css("background-color", "red");

            }
        }
        if (i == 3) {
            if (res4[i] == "V") {
                if (res1[i] == "F" && res2[i] == "F" && res3[i] == "F") {
                    nota = nota + 1;
                    $('#3a' + i).css("background-color", "green");
                    $('#3b' + i).css("background-color", "green");
                    $('#3c' + i).css("background-color", "green");
                    $('#3d' + i).css("background-color", "green");
                    $('#3e' + i).css("background-color", "green");
                    $('#3f' + i).css("background-color", "green");
                } else {
                    $('#3a' + i).css("background-color", "red");
                    $('#3b' + i).css("background-color", "red");
                    $('#3c' + i).css("background-color", "red");
                    $('#3d' + i).css("background-color", "red");
                    $('#3e' + i).css("background-color", "red");
                    $('#3f' + i).css("background-color", "red");

                }
            } else {
                $('#3a' + i).css("background-color", "red");
                $('#3b' + i).css("background-color", "red");
                $('#3c' + i).css("background-color", "red");
                $('#3d' + i).css("background-color", "red");
                $('#3e' + i).css("background-color", "red");
                $('#3f' + i).css("background-color", "red");
            }
        }
        if (i == 4 || i == 5 || i == 6 || i == 7) {
            if (res4[i] == "V") {
                if (res1[i] == "V" && res2[i] == "V" && res3[i] == "V") {
                    nota = nota + 1;
                    $('#3a' + i).css("background-color", "green");
                    $('#3b' + i).css("background-color", "green");
                    $('#3c' + i).css("background-color", "green");
                    $('#3d' + i).css("background-color", "green");
                    $('#3e' + i).css("background-color", "green");
                    $('#3f' + i).css("background-color", "green");
                } else {
                    $('#3a' + i).css("background-color", "red");
                    $('#3b' + i).css("background-color", "red");
                    $('#3c' + i).css("background-color", "red");
                    $('#3d' + i).css("background-color", "red");
                    $('#3e' + i).css("background-color", "red");
                    $('#3f' + i).css("background-color", "red");

                }
            } else {
                $('#3a' + i).css("background-color", "red");
                $('#3b' + i).css("background-color", "red");
                $('#3c' + i).css("background-color", "red");
                $('#3d' + i).css("background-color", "red");
                $('#3e' + i).css("background-color", "red");
                $('#3f' + i).css("background-color", "red");

            }
        }
    }
    notas8[2] = nota / 8;
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
};

function Cargar() {
    $('#contenido1').html('');
    $('#contenido').html('');
    $("#txtNota").text("/" + 10);
    $("#nota1").html('');
    $("#nota2").html('');
    $("#nota3").html('');
    $("#nota4").html('');
    $("#nota5").html('');
    $("#nota6").html('');
    $("#nota7").html('');
    $("#nota8").html('');
    $("#nota9").html('');
    $("#nota10").html('');
    location.reload();
    Inicio();
}
$(document).ready(function() {
    Inicio();
    Preg2();
    Preg3();
    Preg8A();
    Preg8B();
    Preg8C();


    function datos(i) {
        var nota6 = $("#nota7").text();
        var nota12 = $("#nota8").text();
        var nota15 = $("#nota9").text();
        var pre = ["6", "12", "15"];
        if ($("#nota1").text() == "0.00") {
            alertify.prompt("Introducir notas para la pregunta 1 sobre 1:", function(e, str) {
                if (e) {
                    if (str == "1") {
                        str = "1.00";
                    }
                    alertify.success("Has pulsado has introducido nota: " + str);
                    $("#nota1").text(str);
                    console.log("nota1" + str);
                    datos(4);
                } else {
                    alertify.error("No has ingresado la nota");
                    datos(4);
                }
            });
            return false;
        }
        if ($("#nota2").text() == "0.00") {
            alertify.prompt("Introducir notas para la pregunta 2 sobre 1:", function(e, str2) {
                if (e) {
                    if (str2 == "1") {
                        str2 = "1.00";
                    }
                    alertify.success("Has pulsado has introducido nota: " + str2);
                    $("#nota2").text(str2);
                    console.log("nota2" + str2);
                    datos(4);
                } else {
                    alertify.error("No has ingresado la nota");
                    datos(4);
                }
            });
            return false;
        }
        if ($("#nota3").text() == "0.00") {
            alertify.prompt("Introducir notas para la pregunta 3 sobre 3:", function(e, str3) {
                if (e) {
                    if (str3 == "3") {
                        str3 = "3.00";
                    }
                    alertify.success("Has pulsado has introducido nota: " + str3);
                    $("#nota3").text(str3);
                    console.log("nota3" + str3);
                    datos(4);
                } else {
                    alertify.error("No has ingresado la nota");
                    datos(4);
                }
            });
            return false;
        }
        if ($("#nota4").text() == "0.00") {
            alertify.prompt("Introducir notas para la pregunta 4 sobre 3:", function(e, str4) {
                if (e) {
                    if (str4 == "3") {
                        str4 = "3.00";
                    }
                    alertify.success("Has pulsado has introducido nota: " + str4);
                    $("#nota4").text(str4);
                    console.log("nota4" + str4);
                    datos(4);
                } else {
                    alertify.error("No has ingresado la nota");
                    datos(4);
                }
            });
            return false;
        }
        if ($("#nota5").text() == "0.00") {
            alertify.prompt("Introducir notas para la pregunta 5 sobre 2:", function(e, str5) {
                if (e) {
                    if (str5 == "2") {
                        str5 = "2.00";
                    }
                    alertify.success("Has pulsado has introducido nota: " + str5);
                    $("#nota5").text(str5);
                    console.log("nota5" + str5);
                    datos(4);
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
        if ($("#nota1").val() == "0.00" || $("#nota2").val() == "0.00" || $("#nota3").val() == "0.00"
            || $("#nota4").val() == "0.00" || $("#nota5").val() == "0.00") {
            datos(1);
        } else {
            alertify.confirm("<h3>Desea calificar la evaluación?</h3>", function(e) {
                if (e) {
                    CalificarP8A();
                    CalificarP8B();
                    CalificarP8C();
                    debugger;
                    var notas = [];
                    var notaFinal = 0;
                    for (var i = 1; i <= 5; i++) {
                        notas[i] = parseFloat($("#nota" + i).text());
                        notaFinal = notaFinal + notas[i];
                    }
                    notaFinal = notaFinal.toFixed(2);
                    $("#txtNota").text(notaFinal + "/10");
                    $('#Calificar').attr('disabled', true);
                    $('#Refrescar').attr('disabled', false);
                    alertify.success("La evaluacion ha sido calificada:'" + notaFinal + "'");
                } else {
                    alertify.error("Has pulsado '" + +"'");
                }
            });
            return false
        }
    }

    $("#Calificar").click(function() {
        datos(1)
        
    });
});