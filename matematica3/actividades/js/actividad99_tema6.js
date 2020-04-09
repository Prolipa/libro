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
    var nRA;
    for (var i = 1; i < 19; i++) {
        nRA = Math.round(Math.random() * (500 - 60) + 60);
        $('#nRA' + i).append(nRA);
        $('#nRA' + i + '_1').append(nRA);
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

    var resp;
    var val1;
    var val2;
    var c = 1;
    var resul;



    for (var i = 1; i < 2; i++) {

        resp = ((parseInt($('#nRA' + i).text())) + (parseInt($('#nRA' + (i + 1)).text())) + (parseInt($('#nRA' + (i + 2)).text())) + (parseInt($('#nRA' + (i + 3)).text())));

        //alert( resul+' == '+resp);
        if ($('#rPA0').val() == resp) {
            notaFinalP1++;
            $('#rPA0').css("background-color", "#5ED188");
        } else {
            $('#rPA0').css("background-color", "#EF87A7");
        }


        if (parseInt($('#rRA1').val()) + parseInt($('#rRA2').val()) == resp) {
            notaFinalP1++;
            $('#rRA1').css("background-color", "#5ED188");
            $('#rRA2').css("background-color", "#5ED188");

            if ($('#rRA3').val() == resp) {
                notaFinalP1++;
                $('#rRA3').css("background-color", "#5ED188");
            } else {
                $('#rRA3').css("background-color", "#EF87A7");
            }

        } else {
            $('#rRA1').css("background-color", "#EF87A7");
            $('#rRA2').css("background-color", "#EF87A7");
            $('#rRA3').css("background-color", "#EF87A7");
        }


        if (parseInt($('#rRA3_1').val()) + parseInt($('#rRA4_1').val()) == resp) {
            notaFinalP1++;
            $('#rRA3_1').css("background-color", "#5ED188");
            $('#rRA4_1').css("background-color", "#5ED188");

            if ($('#rRA5_1').val() == resp) {
                notaFinalP1++;
                $('#rRA5_1').css("background-color", "#5ED188");
            } else {
                $('#rRA5_1').css("background-color", "#EF87A7");
            }
        } else {
            $('#rRA3_1').css("background-color", "#EF87A7");
            $('#rRA4_1').css("background-color", "#EF87A7");
            $('#rRA5_1').css("background-color", "#EF87A7");
        }

    }


}







var notaFinalP2 = 0;

function Resp2() {

    var resp;
    var val1;
    var val2;
    var c = 1;
    var resul;



    for (var i = 1; i < 2; i++) {

        resp = ((parseInt($('#nCRK' + i).text())) + (parseInt($('#nCRK' + (i + 1)).text())) + (parseInt($('#nCRK' + (i + 2)).text())));

        //alert( resul+' == '+resp);
        if ($('#rCRK0').val() == resp) {
            notaFinalP2++;
            $('#rCRK0').css("background-color", "#5ED188");
        } else {
            $('#rCRK0').css("background-color", "#EF87A7");
        }


        if (parseInt($('#rCRK1').val()) + parseInt($('#rCRK2').val()) == resp) {
            notaFinalP2++;
            $('#rCRK1').css("background-color", "#5ED188");
            $('#rCRK2').css("background-color", "#5ED188");

            if ($('#rCRK3').val() == resp) {
                notaFinalP2++;
                $('#rCRK3').css("background-color", "#5ED188");
            } else {
                $('#rCRK3').css("background-color", "#EF87A7");
            }

        } else {
            $('#rCRK1').css("background-color", "#EF87A7");
            $('#rCRK2').css("background-color", "#EF87A7");
            $('#rCRK3').css("background-color", "#EF87A7");
        }


        if (parseInt($('#rCRK1_1').val()) + parseInt($('#rCRK2_1').val()) == resp) {
            notaFinalP2++;
            $('#rCRK1_1').css("background-color", "#5ED188");
            $('#rCRK2_1').css("background-color", "#5ED188");

            if ($('#rCRK3_1').val() == resp) {
                notaFinalP2++;
                $('#rCRK3_1').css("background-color", "#5ED188");
            } else {
                $('#rCRK3_1').css("background-color", "#EF87A7");
            }
        } else {
            $('#rCRK1_1').css("background-color", "#EF87A7");
            $('#rCRK2_1').css("background-color", "#EF87A7");
            $('#rCRK3_1').css("background-color", "#EF87A7");
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
    Preg2();

    function confirmar() {

        Resp1();
        Resp2();



        var nota1 = (notaFinalP1);
        var nota2 = (notaFinalP2);


        var notaFinal = (nota1 + nota2).toFixed(2);

        $("#txtNota").text(notaFinal);
        $('#Calificar').attr('disabled', true);
        $('#Refrescar').attr('disabled', false);
        return false
    }


    $("#Calificar").click(function() {
        confirmar();
        /*if($('#calificacion0').val() !='' && $('#calificacion1').val() !='' && $('#calificacion2').val() !='' ){
           confirmar();
           $('#calificacion0').css("background-color", "#05D576");
           $('#calificacion1').css("background-color", "#05D576");
           $('#calificacion2').css("background-color", "#05D576");
         }else{
           $('#calificacion0').focus();
           $('#calificacion0').css("background-color", "#D50545");
           $('#calificacion1').focus();
           $('#calificacion1').css("background-color", "#D50545");
           $('#calificacion2').focus();
           $('#calificacion2').css("background-color", "#D50545");
         }*/

    });

});