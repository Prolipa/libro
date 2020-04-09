var correctas = {
    0: ['R', 'E', 'F', 'E', 'R', 'E', 'N', 'T', 'E'],
    1: ['C', 'Ó', 'D', 'G', 'O'],
    2: ['C', 'N', 'A', 'L'],
    3: ['R', 'C', 'E', 'P', 'T', 'O', 'R'],
    4: ['M', 'E', 'N', 'S', 'A', 'J', 'E'],
    5: ['E', 'M', 'I', 'S', 'O', 'R'],

}
var rescorrec2 = 0,
    rescorrec3 = 0,
    rescorrec4 = 0,
    rescorrec5 = 0,
    rescorrec6 = 0,
    totales = 0;

function resolverLetras() {


    for (var i = 0; i <= 5; i++) {

        if ((correctas[5][i]) == ($('#E' + [i] + '').val())) {
            rescorrec2 = rescorrec2 + 1;
            $('#E' + [i] + '').css("backgroundColor", "#58FA58");
            $('#E' + [i] + '').prop( "disabled", true );
        }else{
             $('#E' + [i] + '').css("backgroundColor", "#FA5858");
             $('#E' + [i] + '').prop( "disabled", true );
        }

    }
    for (var i = 0; i <= 4; i++) {

        if ((correctas[1][i]) == ($('#C' + [i] + '').val())) {
            rescorrec3 = rescorrec3 + 1;
         $('#C' + [i] + '').css("backgroundColor", "#58FA58");
         $('#C' + [i] + '').prop( "disabled", true );
        }else{
             $('#C' + [i] + '').css("backgroundColor", "#FA5858");
             $('#C' + [i] + '').prop( "disabled", true );
        }

    }
    for (var i = 0; i <= 6; i++) {

        if ((correctas[4][i]) == ($('#M' + [i] + '').val())) {
            rescorrec4 = rescorrec4 + 1;
        $('#M' + [i] + '').css("backgroundColor", "#58FA58");
        $('#M' + [i] + '').prop( "disabled", true );
        }else{
             $('#M' + [i] + '').css("backgroundColor", "#FA5858");
             $('#M' + [i] + '').prop( "disabled", true );
        }
    }
    for (var i = 0; i <= 3; i++) {

        if ((correctas[2][i]) == ($('#L' + [i] + '').val())) {
            rescorrec5 = rescorrec5 + 1;
         $('#L' + [i] + '').css("backgroundColor", "#58FA58");
          $('#L' + [i] + '').prop( "disabled", true );
        }else{
             $('#L' + [i] + '').css("backgroundColor", "#FA5858");
             $('#L' + [i] + '').prop( "disabled", true );
        }

    }
    for (var i = 0; i <= 6; i++) {

        if ((correctas[3][i]) == ($('#R' + [i] + '').val())) {
            rescorrec6 = rescorrec6 + 1;
        $('#R' + [i] + '').css("backgroundColor", "#58FA58");
        $('#R' + [i] + '').prop( "disabled", true );
        }else{
             $('#R' + [i] + '').css("backgroundColor", "#FA5858");
             $('#R' + [i] + '').prop( "disabled", true );
        }

    }
    var subtotales = rescorrec2 +rescorrec3+ rescorrec4 +rescorrec5 +    rescorrec6;
    var totales = (subtotales*10)/29;
       $('#txtNota').html(totales.toFixed(2) + ' ');
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