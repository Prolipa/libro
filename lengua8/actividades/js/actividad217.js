var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 5, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 5);
});

document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 5, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 5);
});

var random1 = ['<td style="background-color: #e6dded;  border: 3px solid #61ccf5"> <p class="fuente2">De lugar</p> </td> <td class="fuente" style="border: 3px solid #61ccf5;"> <input class="form-control" style="display:inline; max-width: 100%;" type="text" placeholder="Texto  "></td> <td class="fuente" style="border: 3px solid #61ccf5;"> <input class="form-control" style="display:inline; max-width: 100%;" type="text" placeholder="Texto  "></td>', ' <td style="background-color: #e6dded;  border: 3px solid #61ccf5"> <p class="fuente2">De tiempo</p> </td> <td class="fuente" style="border: 3px solid #61ccf5;"> <input class="form-control" style="display:inline; max-width: 100%;" type="text" placeholder="Texto  "></td> <td class="fuente" style="border: 3px solid #61ccf5;"> <input class="form-control" style="display:inline; max-width: 100%;" type="text" placeholder="Texto  "></td>', '<td style="background-color: #e6dded;  border: 3px solid #61ccf5"> <p class="fuente2">De modo</p> </td> <td class="fuente" style="border: 3px solid #61ccf5;"> <input class="form-control" style="display:inline; max-width: 100%;" type="text" placeholder="Texto  "></td> <td class="fuente" style="border: 3px solid #61ccf5;"> <input class="form-control" style="display:inline; max-width: 100%;" type="text" placeholder="Texto  "></td>', '<td style="background-color: #e6dded;  border: 3px solid #61ccf5"> <p class="fuente2">De cantidad</p> </td> <td class="fuente" style="border: 3px solid #61ccf5;"> <input class="form-control" style="display:inline; max-width: 100%;" type="text" placeholder="Texto  "></td> <td class="fuente" style="border: 3px solid #61ccf5;"> <input class="form-control" style="display:inline; max-width: 100%;" type="text" placeholder="Texto  "></td>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

var random2 = ['<td style="background-color: #f58220;"> <p class="titulo s" style="text-align: center;"><b>De afirmación </b></p> </td> <td> <div style="width: 55vw"> <textarea class="form-control text-question no-redimensionar" rows="3" placeholder="Texto" style="border: 2px solid #f58220;"></textarea> </div> </td>', '<td style="background-color: #00acdd;"> <p class="titulo s" style="text-align: center;"><b>De negación</b></p> </td> <td> <div style="width: 55vw"> <textarea class="form-control text-question no-redimensionar" rows="3" placeholder="Texto" style="border: 2px solid #f58220;"></textarea> </div> </td>', '<td style="background-color: #91509f;"> <p class="titulo s" style="text-align: center;"><b>De duda</b></p> </td> <td> <div style="width: 55vw"> <textarea class="form-control text-question no-redimensionar" rows="3" placeholder="Texto" style="border: 2px solid #f58220;"></textarea> </div> </td>']
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

function total() {
    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;

    if (pre1a == "" || pre2a == "") {
        alert("Calificar Pregunta 1 ó 2");
    } else {

        var pre1a = document.getElementById('pre1a').value;
        var pre2a = document.getElementById('pre2a').value;

        cor = parseFloat(pre1a) + parseFloat(pre2a);
        Calculo_nota();
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('textarea').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
        $('div').attr("disabled", true);
        $('.nota-abierta').css("background", "#00e600");
    }
}