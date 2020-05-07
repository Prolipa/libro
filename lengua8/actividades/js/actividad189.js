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

var random1 = ['<td><p class="fuente">desmonte</p></td> <td><input class="form-control" style="display:inline;width: 60vw; border: 3px solid #0095d9" type="text" placeholder="Texto"></td>', '<td><p class="fuente">quebracho</p></td> <td><input class="form-control" style="display:inline;width: 60vw; border: 3px solid #0095d9" type="text" placeholder="Texto"></td>', '<td><p class="fuente">plantines</p></td> <td><input class="form-control" style="display:inline;width: 60vw; border: 3px solid #0095d9" type="text" placeholder="Texto"></td>']
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