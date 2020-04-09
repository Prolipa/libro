$('.btn_mostrar').on('click', function() { //mostrar todas las preguntas
    if ($(".panel-collapse").hasClass('in')) {
        $(".panel-collapse").removeClass('in');
    } else {
        $(".panel-collapse").addClass('in');
    }
});

function pregunta1() {

    var respact2 = ['radio', 'diámetro', 'tangente', 'secante', 'cuerda', 'arco', 'sagita', ];
    var cont = 0;
    for (var i = 0; i < 7; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 5) / 7;
    $('#nota1').val(parseFloat(total).toFixed(2));

}
var act2 = [];
for (var i = 0; i < 2; i++) {
    var num = Math.floor((Math.random() * 8) + 2);
    act2[i] = num;
}
$('#num1act2').html('' + act2[0] + ' cm');
$('#num2act2').html('' + act2[1] + ' cm')
var Anum1act2 = (Math.PI * act2[0]) * act2[0];
var Pnum1act2 = 2 * Math.PI * act2[0];
var Anum2act2 = (Math.PI * act2[1]) * act2[1];
var Pnum2act2 = 2 * Math.PI * act2[1];
var respact2_1 = [(Anum1act2).toFixed(2), (Pnum1act2).toFixed(2), (Anum2act2).toFixed(2), (Pnum2act2).toFixed(2), ];

function pregunta2() {


    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2_1[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 5) / 4;
    $('#nota2').val(parseFloat(total).toFixed(2));

}


function NotaFinal() {

    /*var nota10 = document.getElementById('nota10').value;
    if ((nota8 == "") || (nota9 == "") || (nota10 == "")) {
        alert("Debe ingresar la nota de la pregunta 8, 9 o 10.")
    } else {*/
    /*if ($('.1').hasClass('pintar1') == false) {
        alert("Debe seleccionar la respuesta en la pregunta 3")
    } else {*/
    pregunta1();
    pregunta2();


    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;


    var total = parseFloat(nota1) + parseFloat(nota2);
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
    ///}
}
