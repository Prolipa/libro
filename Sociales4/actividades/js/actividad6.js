var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;



document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 2, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 2);
});

document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 3, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 3);
});

document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 4, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 4);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 1);
});

var random10 = ['<td> <div style="background-color: #D6E0F1; border-radius: 15px"> <p class="fuente2"><b>Ecuador</b></p> </div> </td> <td> <p class="fuente" style="display: inline-flex; width: 100%"><input class="form-control bord1 hvr-grow-shadow text-question" style="display: inline-flex; max-width: 100%;" placeholder="Texto"></p> </td> <td> <p class="fuente" style="display: inline-flex; width: 100%"><input class="form-control bord2 hvr-grow-shadow text-question" style="display: inline-flex; max-width: 100%;" placeholder="Texto"></p> </td>', '<td> <div style="background-color: #D5EEF5; border-radius: 15px"> <p class="fuente2"><b>Argentina</b></p> </div> </td> <td> <p class="fuente" style="display: inline-flex; width: 100%"><input class="form-control bord1 hvr-grow-shadow text-question" style="display: inline-flex; max-width: 100%;" placeholder="Texto"></p> </td> <td> <p class="fuente" style="display: inline-flex; width: 100%"><input class="form-control bord2 hvr-grow-shadow text-question" style="display: inline-flex; max-width: 100%;" placeholder="Texto"></p> </td>', '<td> <div style="background-color: #D6E0F1; border-radius: 15px"> <p class="fuente2"><b>India</b></p> </div> </td> <td> <p class="fuente" style="display: inline-flex; width: 100%"><input class="form-control bord1 hvr-grow-shadow text-question" style="display: inline-flex; max-width: 100%;" placeholder="Texto"></p> </td> <td> <p class="fuente" style="display: inline-flex; width: 100%"><input class="form-control bord2 hvr-grow-shadow text-question" style="display: inline-flex; max-width: 100%;" placeholder="Texto"></p> </td>', '<td> <div style="background-color: #D5EEF5; border-radius: 15px"> <p class="fuente2"><b>Japón</b></p> </div> </td> <td> <p class="fuente" style="display: inline-flex; width: 100%"><input class="form-control bord1 hvr-grow-shadow text-question" style="display: inline-flex; max-width: 100%;" placeholder="Texto"></p> </td> <td> <p class="fuente" style="display: inline-flex; width: 100%"><input class="form-control bord2 hvr-grow-shadow text-question" style="display: inline-flex; max-width: 100%;" placeholder="Texto"></p> </td>']
var act010Txt = document.getElementsByClassName('act10class');

random10.sort(f_randomico);
for (i = 0; i < act010Txt.length; i++) {
    $('#' + act010Txt[i].id).html(random10[i]);
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
        if (pre2a == "") {
            alert("Calificar Pregunta 2");
            document.getElementById('pre2a').focus();
            $('#pre2a').addClass("alertaabierta");
        } else {
            if (pre3a == "") {
                alert("Calificar Pregunta 3");
                document.getElementById('pre3a').focus();
                $('#pre3a').addClass("alertaabierta");
            } else {
                if (pre4a == "") {
                    alert("Calificar Pregunta de Evalúo mi proceso");
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
                    $('select').attr("disabled", true);
                }
            }
        }
    }
}