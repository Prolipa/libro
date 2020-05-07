var correctas = {
    0: ['A', 'Y', 'U', 'D', 'A', 'R'],
    1: ['C', 'O', 'L', 'A', 'B', 'O', 'R', 'A', 'R'],
    2: ['C', 'O', 'L', 'B', 'R', 'A', 'R'],
    3: ['C', 'O', 'O', 'P', 'E', 'R', 'A'],

}

var tam = Object.keys(correctas).length;
var tam1 = 0;
for (var i = 0; i < tam; i++) {
    tam1 = tam1 + Object.keys(correctas[i].length);
}



var rescorrec2 = 0,
    rescorrec3 = 0,
    rescorrec4 = 0,
    rescorrec5 = 0,
    totales = 0,
    cor = 0;


function resolverLetras() {


    for (var i = 0; i < 7; i++) {

        if ((correctas[0][i]) == ($('#A' + [i] + '').val())) {
            rescorrec2 = rescorrec2 + 1;
            cor++;
          
            $('#A' + [i] + '').css("backgroundColor", "#74C75D");
            $('#A' + [i] + '').prop("disabled", true);
        } else {
            $('#A' + [i] + '').css("backgroundColor", "#F97591");
            $('#A' + [i] + '').prop("disabled", true);
        }  
    }

    for (var i = 0; i < 10; i++) {

        if ((correctas[1][i]) == ($('#B' + [i] + '').val())) {
            rescorrec3 = rescorrec3 + 1;
            cor++;
            $('#B' + [i] + '').css("backgroundColor", "#74C75D");
            $('#B' + [i] + '').prop("disabled", true);
        } else {
            $('#B' + [i] + '').css("backgroundColor", "#F97591");
            $('#B' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i < 8; i++) {

        if ((correctas[2][i]) == ($('#C' + [i] + '').val())) {
            rescorrec4 = rescorrec4 + 1;
            cor++;
            $('#C' + [i] + '').css("backgroundColor", "#74C75D");
            $('#C' + [i] + '').prop("disabled", true);
        } else {
            $('#C' + [i] + '').css("backgroundColor", "#F97591");
            $('#C' + [i] + '').prop("disabled", true);
        }
    }
    for (var i = 0; i < 8; i++) {

        if ((correctas[3][i]) == ($('#D' + [i] + '').val())) {
            rescorrec5 = rescorrec5 + 1;
            cor++;
            $('#D' + [i] + '').css("backgroundColor", "#74C75D");
            $('#D' + [i] + '').prop("disabled", true);
        } else {
            $('#D' + [i] + '').css("backgroundColor", "#F97591");
            $('#D' + [i] + '').prop("disabled", true);
        }
    }


    // var subtotales = rescorrec2 + rescorrec3 + rescorrec4 + rescorrec5;
    //var totales = (subtotales * 10) / tam1;
    console.log(cor + 'prueba');
    // $('#txtNota').html(totales.toFixed(2) + ' ');





    document.getElementById('bt_comprobar').disabled = true;
    // body...
}

/*function resolverN1() {

    var nota1 = document.getElementById("nt1_1").value;
    var nota2 = document.getElementById("nt1_2").value;


  
    if ((nota1 == "") || (nota2 == "")) {
        alert("Debe ingresar las notas para poder evaluar");
        document.getElementById("nt1_1").focus();
    } else {
        if ((nota1 <= 5) && (nota2 <= 5)) {
            var total = parseInt(nota1) + parseInt(nota2);
            document.getElementById("nt1_1").style.backgroundColor = "#6DFF6F";
            document.getElementById("nt1_2").style.backgroundColor = "#6DFF6F";
            $('#txtNota').html(total.toFixed(2) + ' ');

            document.getElementById('bt_comprobar').disabled = true;
            document.getElementById('nt1_1').disabled = true;
            document.getElementById('nt1_2').disabled = true;
        } else {
            alert('La nota no debe exceder los 5 puntos');
            document.getElementById("nt1_1").style.backgroundColor = "#F95858";
            document.getElementById("nt1_2").style.backgroundColor = "#F95858";
            document.getElementById("nt1_1").focus();
        }
    }


}*/
