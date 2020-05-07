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

var random1 = ['<td class="fuente" style="border: 3px solid #61ccf5;"> <p class="fuente" style="line-height: 40px">El joven Charles conocía los alrededores&emsp;<input class="form-control" style="display:inline; max-width: 100%; width: 50px" type="text">&emsp;coleccionaba toda clase de especímenes. </p> </td> <td class="fuente" style="border: 3px solid #61ccf5;"> <input class="form-control" style="display:inline; max-width: 100%;" type="text" placeholder="Texto  "></td>', '<td class="fuente" style="border: 3px solid #61ccf5;"> <p class="fuente" style="line-height: 40px">Darwin enfermó gravemente de disentería,&emsp;<input class="form-control" style="display:inline; max-width: 100%; width: 70px" type="text">&emsp;nada impidió que el naturalista bajara del Beagle. </p> </td> <td class="fuente" style="border: 3px solid #61ccf5;"> <input class="form-control" style="display:inline; max-width: 100%;" type="text" placeholder="Texto  "></td>', '<td class="fuente" style="border: 3px solid #61ccf5;"> <p class="fuente" style="line-height: 40px">El científico aprendía también sobre las costumbres, ritos y alimentos de esos pueblos,&emsp;<input class="form-control" style="display:inline; max-width: 100%; width: 70px" type="text">&emsp;fueron famosos sus conocimientos de Antropología. </p> </td> <td class="fuente" style="border: 3px solid #61ccf5;"> <input class="form-control" style="display:inline; max-width: 100%;" type="text" placeholder="Texto  "></td>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
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