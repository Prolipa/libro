var titulos = "aplico";

function Inicio() {
    $('#nota-informativa').slideUp('slow');
    $("#Calificar").removeAttr("disabled");
    $('#Refrescar').attr('disabled', true);
}


$('.btn_mostrar').on('click', function() { //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
});






function Preg1() {
    var nDU;
    for (var i = 0; i < 18; i++) {
        nDU = Math.round(Math.random() * (9 - 1) + 1);
        $('#nDU' + i).append(nDU);
    }

}




function Preg2() {
    var nCRK;
    for (var i = 1; i < 4; i++) {
        nCRK = Math.round(Math.random() * (150 - 30) + 30);
        $('#nCRK' + i).append(nCRK);
        $('#nCRK' + i + '_1').append(nCRK);
        $('#nCRK' + i + '_2').append(nCRK);
    }

}






var notaFinalP1 = 0;

function Resp1() {

    for (var i = 0; i < 18; i++) {

        if (i < 9) {
            if ((parseInt($('#nDU' + i).text() + '' + $('#rDU' + i).val()) % 2) == 0 && $('#rDU' + i).val() != '') {
                notaFinalP1++;
                $('#rDU' + i).css("background-color", "#5ED188");
            } else {
                $('#rDU' + i).css("background-color", "#EF87A7");
            }
        }


        if (i >= 9) {
            if ((parseInt($('#nDU' + i).text() + '' + $('#rDU' + i).val()) % 2) != 0 && $('#rDU' + i).val() != '') {
                notaFinalP1++;
                $('#rDU' + i).css("background-color", "#5ED188");
            } else {
                $('#rDU' + i).css("background-color", "#EF87A7");
            }
        }


    }

}









function Cargar() {
    location.reload(true);
}


$(document).ready(function() {
    $(".panel-collapse").removeClass('in');
    Inicio();

    Preg1();

    function confirmar() {

        Resp1();


        var nota1 = (notaFinalP1 * 4) / 18;
        var nota2 = parseFloat($('#calificacion0').val());
        var nota3 = parseFloat($('#calificacion1').val());


        var notaFinal = (nota1 + nota2 + nota3).toFixed(2);

        $("#txtNota").text(notaFinal);
        $('#Calificar').attr('disabled', true);
        $('#Refrescar').attr('disabled', false);
        return false
    }


    $("#Calificar").click(function() {
        if ($('#calificacion0').val() != '' && $('#calificacion1').val() != '') {
            confirmar();
            $('#calificacion0').css("background-color", "#05D576");
            $('#calificacion1').css("background-color", "#05D576");
        } else {
            $('#calificacion0').focus();
            $('#calificacion0').css("background-color", "#D50545");
            $('#calificacion1').focus();
            $('#calificacion1').css("background-color", "#D50545");
        }

    });

});