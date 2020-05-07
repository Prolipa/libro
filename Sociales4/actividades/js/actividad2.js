var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;



document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 2, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 2);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 3, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 3);
});

document.getElementById("pre5a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre5a"), 1);
});

var random10 = ['<p class="fuente" style="display: inline; width: 100%"><br>El norte se encuentra a la espalda de la profesora; esto quiere decir que ella está mirando al&emsp;<select class="hvr-bounce-in random2 imaf2" id="sell0"> </select>.</p>', '<p class="fuente" style="display: inline; width: 100%"><br>El niño del caballo viene del&emsp;<select class="hvr-bounce-in random2 imaf2" id="sell1"> </select>, con relación a la posición de la profesora.</p>', '<p class="fuente" style="display: inline; width: 100%"><br>La camioneta, estacionada cerca de la escuela, llegó en dirección&emsp;<select class="hvr-bounce-in random2 imaf2" id="sell2"> </select>. </p>', '<p class="fuente" style="display: inline; width: 100%"><br>Los niños del bus escolar salen de él en dirección&emsp;<select class="hvr-bounce-in random2 imaf2" id="sell3"> </select>.</p>']
var act010Txt = document.getElementsByClassName('act10class');

random10.sort(f_randomico);
for (i = 0; i < act010Txt.length; i++) {
    $('#' + act010Txt[i].id).html(random10[i]);
}

var random11 = ['<p class="fuente"> ¿Por qué es importante que conozcas cómo orientarte en un espacio territorial? </p> <textarea class="form-control text-question no-redimensionar hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset;" cols="60" rows="4" placeholder="Texto"></textarea>', '<p class="fuente"> ¿Cómo podrías determinar tu ubicación en la ciudad si no contaras con ningún instrumento de orientación digital o manual? </p> <textarea class="form-control text-question no-redimensionar hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset;" cols="60" rows="4" placeholder="Texto"></textarea>']
var act011Txt = document.getElementsByClassName('act11class');

random11.sort(f_randomico);
for (i = 0; i < act011Txt.length; i++) {
    $('#' + act011Txt[i].id).html(random11[i]);
}


var random1 = [
    '<option>Norte</option>',
    '<option>Este</option>',
    '<option>Oeste</option>',
    '<option>Sur</option>',
];
random1.sort(f_randomico);
$('.random1').html('<option>-Seleccione-</option>' + random1 + '');


function pregunta1() {

    var respact2 = ['Norte', 'Este', 'Oeste', 'Sur'];
    var cont = 0;
    for (var i = 0; i < respact2.length; i++) {
        var res = $('#sel' + [i] + ' option:selected').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#sel' + [i] + '').css("background", "#00e600");
        } else {
            $('#sel' + [i] + '').css("background", "#ff6666");
        }
    }
    var total = (cont * 2) / respact2.length;
    //var totin = ((sumtotal * 4) / 9).toFixed(2);

    if (total < 0) {
        total = 0;
        $('#pre1a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre1a').val(parseFloat(total).toFixed(2));
    }
}


var random2 = [
    '<option>sur</option>',
    '<option>este</option>',
    '<option>oeste</option>',
    '<option>norte</option>',
];
random2.sort(f_randomico);
$('.random2').html('<option>-Seleccione-</option>' + random2 + '');

function pregunta3() {

    var respact2 = ['sur', 'este', 'este', 'oeste'];
    var cont = 0;
    for (var i = 0; i < respact2.length; i++) {
        var res = $('#sell' + [i] + ' option:selected').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#sell' + [i] + '').css("background", "#00e600");
        } else {
            $('#sell' + [i] + '').css("background", "#ff6666");
        }
    }
    var total = (cont * 2) / respact2.length;
    //var totin = ((sumtotal * 4) / 9).toFixed(2);

    if (total < 0) {
        total = 0;
        $('#pre3a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre3a').val(parseFloat(total).toFixed(2));
    }
}


function total() {

    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;
    var pre3a = document.getElementById('pre3a').value;
    var pre4a = document.getElementById('pre4a').value;
    var pre5a = document.getElementById('pre5a').value;

    if (pre2a == "") {
        alert("Calificar Pregunta 2");
        document.getElementById('pre2a').focus();
        $('#pre2a').addClass("alertaabierta");
    } else {
        if (pre4a == "") {
            alert("Calificar Pregunta 4");
            document.getElementById('pre4a').focus();
            $('#pre4a').addClass("alertaabierta");
        } else {
            if (pre5a == "") {
                alert("Calificar Pregunta de Evaluo mi proceso");
                document.getElementById('pre5a').focus();
                $('#pre5a').addClass("alertaabierta");
            } else {

                pregunta1();
                pregunta3();
                var pre1a = document.getElementById('pre1a').value;
                var pre2a = document.getElementById('pre2a').value;
                var pre3a = document.getElementById('pre3a').value;
                var pre4a = document.getElementById('pre4a').value;
                var pre5a = document.getElementById('pre5a').value;

                cor = parseFloat(pre1a) + parseFloat(pre2a) + parseFloat(pre3a) + parseFloat(pre4a) + parseFloat(pre5a);
                Calculo_nota();
                document.getElementById('bt_comprobar').disabled = true;
                $('input').attr("disabled", true);
                $('textarea').attr("disabled", true);
                $('#txtAlumno').attr("disabled", false);
                $('div').attr("disabled", true);
                $('.nota-abierta').css("background", "#00e600");
                $('.enc2a').off('click');
                $('select').attr("disabled", true);
            }
        }
    }
}