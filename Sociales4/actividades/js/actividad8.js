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

document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 3, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 3);
});

document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 2, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 2);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 2, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 2);
});

var random10 = ['<img src="img/i1_p17_act8.jpg" style="max-width: 100%"> <textarea class="form-control text-question no-redimensionar hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset;" cols="60" rows="4" placeholder="Texto"></textarea>', '<img src="img/i2_p17_act8.jpg" style="max-width: 100%"> <textarea class="form-control text-question no-redimensionar hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset;" cols="60" rows="4" placeholder="Texto"></textarea>', '<img src="img/i3_p17_act8.jpg" style="max-width: 100%"> <textarea class="form-control text-question no-redimensionar hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset;" cols="60" rows="4" placeholder="Texto"></textarea>']
var act010Txt = document.getElementsByClassName('act10class');

random10.sort(f_randomico);
for (i = 0; i < act010Txt.length; i++) {
    $('#' + act010Txt[i].id).html(random10[i]);
}

var random11 = ['<div style="background-color: #DAECD4; border-radius: 15px"> <p class="fuente2"><b>Provincia más extensa del país</b></p> </div> <p class="fuente" style="display: inline-flex; width: 100%"><input class="form-control bord1 hvr-grow-shadow text-question" style="display: inline-flex; max-width: 100%; border: 2px solid #6BC067" placeholder="Texto"></p>', '<div style="background-color: #E6E1EF; border-radius: 15px"> <p class="fuente2"><b>Provincia donde estudian</b></p> </div> <p class="fuente" style="display: inline-flex; width: 100%"><input class="form-control bord1 hvr-grow-shadow text-question" style="display: inline-flex; max-width: 100%; border: 2px solid #F58220" placeholder="Texto"></p>', '<div style="background-color: #FEE6D5; border-radius: 15px"> <p class="fuente2"><b>Provincia de la Costa que limita con Perú</b></p> </div> <p class="fuente" style="display: inline-flex; width: 100%"><input class="form-control bord1 hvr-grow-shadow text-question" style="display: inline-flex; max-width: 100%; border: 2px solid #8E499B" placeholder="Texto"></p>', '<div style="background-color: #D5EEF5; border-radius: 15px"> <p class="fuente2"><b>Provincia de la Sierra que limita con Colombia</b></p> </div> <p class="fuente" style="display: inline-flex; width: 100%"><input class="form-control bord1 hvr-grow-shadow text-question" style="display: inline-flex; max-width: 100%; border: 2px solid #03BBD7" placeholder="Texto"></p>']
var act011Txt = document.getElementsByClassName('act11class');

random11.sort(f_randomico);
for (i = 0; i < act011Txt.length; i++) {
    $('#' + act011Txt[i].id).html(random11[i]);
}



function total() {
    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;
    var pre3a = document.getElementById('pre3a').value;
    var pre4a = document.getElementById('pre4a').value;

    if (pre1a == "") {
        alert("Calificar Pregunta 1 de Aplico");
        document.getElementById('pre1a').focus();
        $('#pre1a').addClass("alertaabierta");
    } else {
        if (pre2a == "") {
            alert("Calificar Pregunta 2 de Aplico");
            document.getElementById('pre2a').focus();
            $('#pre2a').addClass("alertaabierta");
        } else {
            if (pre3a == "") {
                alert("Calificar Pregunta 3 de Aplico");
                document.getElementById('pre3a').focus();
                $('#pre3a').addClass("alertaabierta");
            } else {
                if (pre4a == "") {
                    alert("Calificar Pregunta 1 de Evalúo mi proceso");
                    document.getElementById('pre4a').focus();
                    $('#pre4a').addClass("alertaabierta");
                } else {
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
                    $('.desaparece').filter(function() {
                        return $.trim($(this).text()) === ''
                    }).hide()
                }
            }
        }
    }
}