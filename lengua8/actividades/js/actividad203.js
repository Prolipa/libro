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

var random1 = ['<p class="fuente" style="line-height: 40px">incubar.&emsp;<input class="form-control" style="display:inline; max-width: 100%; width: 500px" type="text" placeholder="Texto"></p>', '<p class="fuente" style="line-height: 40px">crisálida.&emsp;<input class="form-control" style="display:inline; max-width: 100%; width: 500px" type="text" placeholder="Texto"></p>', '<p class="fuente" style="line-height: 40px">mezquindad.&emsp;<input class="form-control" style="display:inline; max-width: 100%; width: 500px" type="text" placeholder="Texto"></p>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

var random2 = ['<td style="background-color: #00b7d4;"> <p class="titulo s" style="text-align: center;"><b>Magia y profecías</b></p> </td> <td> <div style="width: 55vw"> <textarea class="form-control text-question no-redimensionar" rows="2" placeholder="Texto" style="border: 2px solid #ac78b4;"></textarea> </div> </td>', '<td style="background-color: #76c266;"> <p class="titulo s" style="text-align: center;"><b>Criaturas fantásticas</b></p> </td> <td> <div style="width: 55vw"> <textarea class="form-control text-question no-redimensionar" rows="2" placeholder="Texto" style="border: 2px solid #ac78b4;"></textarea> </div> </td>', '<td style="background-color: #f79848;"> <p class="titulo s" style="text-align: center;"><b>Viajes</b></p> </td> <td> <div style="width: 55vw"> <textarea class="form-control text-question no-redimensionar" rows="2" placeholder="Texto" style="border: 2px solid #ac78b4;"></textarea> </div> </td>']
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