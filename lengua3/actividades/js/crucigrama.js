var correctas = {
    0: ['M', 'A', 'N', 'Z', 'A', 'N', 'A', 'S'],
    1: ['S', 'A', 'N', 'D', 'I', 'A', 'S'],
    2: ['B', 'A', 'N', 'A', 'N', 'A', 'S'],
    3: ['A', 'R', 'N', 'J', 'S'],
    

}
var rescorrec2 = 0,
    rescorrec3 = 0,
    rescorrec4 = 0,
    rescorrec5 = 0,
    rescorrec6 = 0,
    totales = 0;

function resolverLetras() {


    for (var i = 0; i <= 7; i++) {

        if ((correctas[0][i]) == ($('#M' + [i] + '').val())) {
            rescorrec2 = rescorrec2 + 1;
            $('#M' + [i] + '').css("backgroundColor", "#74C75D");
            $('#M' + [i] + '').prop( "disabled", true );
        }else{
             $('#M' + [i] + '').css("backgroundColor", "#F97591");
             $('#M' + [i] + '').prop( "disabled", true );
        }

    }
    for (var i = 0; i <= 6; i++) {

        if ((correctas[1][i]) == ($('#S' + [i] + '').val())) {
            rescorrec3 = rescorrec3 + 1;
         $('#S' + [i] + '').css("backgroundColor", "#74C75D");
         $('#S' + [i] + '').prop( "disabled", true );
        }else{
             $('#S' + [i] + '').css("backgroundColor", "#F97591");
             $('#S' + [i] + '').prop( "disabled", true );
        }

    }
    for (var i = 0; i <= 6; i++) {

        if ((correctas[2][i]) == ($('#B' + [i] + '').val())) {
            rescorrec4 = rescorrec4 + 1;
        $('#B' + [i] + '').css("backgroundColor", "#74C75D");
        $('#B' + [i] + '').prop( "disabled", true );
        }else{
             $('#B' + [i] + '').css("backgroundColor", "#F97591");
             $('#B' + [i] + '').prop( "disabled", true );
        }
    }
    for (var i = 0; i <= 4; i++) {

        if ((correctas[3][i]) == ($('#N' + [i] + '').val())) {
            rescorrec5 = rescorrec5 + 1;
         $('#N' + [i] + '').css("backgroundColor", "#74C75D");
          $('#N' + [i] + '').prop( "disabled", true );
        }else{
             $('#N' + [i] + '').css("backgroundColor", "#F97591");
             $('#N' + [i] + '').prop( "disabled", true );
        }

    }
   
    var subtotales = rescorrec2 +rescorrec3+ rescorrec4 +rescorrec5 +    rescorrec6;
    var totales = (subtotales*10)/27;
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