var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;


document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 3, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 3);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 2, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 2);
});

var random10 = ['<p class="fuente">¿Cuál es el órgano reproductor de la planta? </p> <textarea class="form-control text-question no-redimensionar hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset;" cols="60" rows="2" placeholder="Texto"></textarea>', '<p class="fuente">¿En qué se diferencia la polinización y la fecundación? </p> <textarea class="form-control text-question no-redimensionar hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset;" cols="60" rows="2" placeholder="Texto"></textarea>', '<p class="fuente">¿Cuál de estos alimentos crees que es fruta? <b>Explica</b>. </p> <div alert="center"> <img src="img/i1_p17_act6.jpg" style="max-width: 100%"> </div> <textarea class="form-control text-question no-redimensionar hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset;" cols="60" rows="4" placeholder="Texto"></textarea>']
var act010Txt = document.getElementsByClassName('act10class');

random10.sort(f_randomico);
for (i = 0; i < act010Txt.length; i++) {
    $('#' + act010Txt[i].id).html(random10[i]);
}

var random11 = ['<p class="fuente2">estilo</p>', '<p class="fuente2">ovario</p>', '<p class="fuente2">óvulo</p>', '<p class="fuente2">semilla</p>']
var act011Txt = document.getElementsByClassName('act11class');

random11.sort(f_randomico);
for (i = 0; i < act011Txt.length; i++) {
    $('#' + act011Txt[i].id).html(random11[i]);
}

var random12 = ['En la fecundación el polen se une al &emsp;<input id="a0" class="form-control hvr-grow-shadow" style="width: 120px; font-size: 15px; display: inline; max-width: 100%" type="text" placeholder="Texto">.', 'La célula fecundada se desarrolla en el &emsp;<input id="a1" class="form-control hvr-grow-shadow" style="width: 120px; font-size: 15px; display: inline; max-width: 100%" type="text" placeholder="Texto">.', 'La &emsp;<input id="a2" class="form-control hvr-grow-shadow" style="width: 120px; font-size: 15px; display: inline; max-width: 100%" type="text" placeholder="Texto">&emsp;es el óvulo fecundado y maduro.', 'El polen desciende por el &emsp;<input id="a3" class="form-control hvr-grow-shadow" style="width: 120px; font-size: 15px; display: inline; max-width: 100%" type="text" placeholder="Texto">&emsp;y se une al óvulo.']
var act012Txt = document.getElementsByClassName('act12class');

random12.sort(f_randomico);
for (i = 0; i < act012Txt.length; i++) {
    $('#' + act012Txt[i].id).html(random12[i]);
}

var random13 = ['<div align="center"><img src="img/i2_p17_act6.jpg" style="max-width: 100%"><br> <select class="hvr-bounce-in random1 imaf2" id="sel0" style="font-size: 15px;"></select><br><br></div>', '<div align="center"><img src="img/i3_p17_act6.jpg" style="max-width: 100%"><br> <select class="hvr-bounce-in random1 imaf2" id="sel1" style="font-size: 15px;"></select><br><br></div>', '<div align="center"><img src="img/i4_p17_act6.jpg" style="max-width: 100%"><br> <select class="hvr-bounce-in random1 imaf2" id="sel2" style="font-size: 15px;"></select><br><br></div>']
var act013Txt = document.getElementsByClassName('act13class');

random13.sort(f_randomico);
for (i = 0; i < act013Txt.length; i++) {
    $('#' + act013Txt[i].id).html(random13[i]);
}




var tpre3 = 0;

var correctas3 = {
    0: ['óvulo', 'ovario', 'semilla', 'estilo'],

};


var corr3 = 0;
var veclet3 = ['a'];
var limite3 = [3];


function pregunta2() {

    for (var i = 0; i <= veclet3.length; i++) {
        for (var j = 0; j <= limite3[i]; j++) {

            if ((correctas3[i][j]) == ($('#' + veclet3[i] + [j] + '').val())) {
                corr3++;
                f_ok($('#' + veclet3[i] + [j] + '').css("background", "#00e600"));
            } else {
                f_no($('#' + veclet3[i] + [j] + '').css("background", "#ff6666"));
                corr3;
            }
        }
    }
    tpre3 = ((corr3 * 2) / 4).toFixed(2);
    $("#pre2a").val(parseFloat(tpre3).toFixed(2));
    // body...
}


var random1 = [
    '<option>Insecto</option>',
    '<option>Viento</option>',
    '<option>Ave</option>',
];
random1.sort(f_randomico);
$('.random1').html('<option>-Seleccione-</option>' + random1 + '');

function pregunta3() {

    var respact2 = ['Insecto', 'Viento', 'Ave'];
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
    var total = (cont * 3) / respact2.length;
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

    if (pre1a == "") {
        alert("Calificar Pregunta 1");
        document.getElementById('pre1a').focus();
        $('#pre1a').addClass("alertaabierta");
    } else {
        if (pre4a == "") {
            alert("Calificar Pregunta de Evalúo mi proceso");
            document.getElementById('pre4a').focus();
            $('#pre4a').addClass("alertaabierta");
        } else {

            pregunta2();
            pregunta3();
            var pre1a = document.getElementById('pre1a').value;
            var pre2a = document.getElementById('pre2a').value;
            var pre3a = document.getElementById('pre3a').value;
            var pre4a = document.getElementById('pre4a').value;

            cor = parseFloat(pre1a) + parseFloat(pre2a) + parseFloat(pre3a) + parseFloat(pre4a);
            Calculo_nota();
            document.getElementById('bt_comprobar').disabled = true;
            $('input').attr("disabled", true);
            $('textarea').attr("disabled", true);
            $('#txtAlumno').attr("disabled", false);
            $('div').attr("disabled", true);
            $('.nota-abierta').css("background", "#00e600");
            $('.enc2a').off('click');
            $('select').attr("disabled", true);
            $('.desaparece').filter(function() {
                return $.trim($(this).text()) === ''
            }).hide()
        }
    }
}