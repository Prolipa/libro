var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 10, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 10);
});

var random1 = ['<td align="center"> <img src="img/i1_p187_act171.jpg" style="max-width: 100%"> </td> <td> <div style="width: 55vw"> <textarea class="form-control text-question no-redimensionar" rows="2" placeholder="Texto" style="border: 3px solid #b9b7b8;"></textarea> </div> </td>', '<td align="center"> <img src="img/i2_p187_act171.jpg" style="max-width: 100%"> </td> <td> <div style="width: 55vw"> <textarea class="form-control text-question no-redimensionar" rows="2" placeholder="Texto" style="border: 3px solid #b9b7b8;"></textarea> </div> </td>', '<td align="center"> <img src="img/i3_p187_act171.jpg" style="max-width: 100%"> </td> <td> <div style="width: 55vw"> <textarea class="form-control text-question no-redimensionar" rows="3" placeholder="Texto" style="border: 3px solid #b9b7b8;"></textarea> </div> </td>', '<td align="center"> <img src="img/i4_p187_act171.jpg" style="max-width: 100%"> </td> <td> <div style="width: 55vw"> <textarea class="form-control text-question no-redimensionar" rows="2" placeholder="Texto" style="border: 3px solid #b9b7b8;"></textarea> </div> </td>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}


function total() {
    var pre1a = document.getElementById('pre1a').value;

    if (pre1a == "") {
        alert("Calificar Pregunta 1");
    } else {

        var pre1a = document.getElementById('pre1a').value;

        cor = parseFloat(pre1a);
        Calculo_nota();
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('textarea').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
        $('div').attr("disabled", true);
        $('.nota-abierta').addClass('backnota');
    }
}