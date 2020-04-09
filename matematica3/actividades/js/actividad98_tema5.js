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
        nRA = Math.round(Math.random() * (9 - 2) + 2);
        $('#nRA' + i).append(nRA);
    }

}




function Preg2() {
    var nCRv;
    for (var i = 1; i < 7; i++) {
        nCRv = Math.round(Math.random() * (9 - 2) + 2);
        $('#nCRv' + i).append(nCRv);
    }

}






var notaFinalP1 = 0;

function Resp1() {

    var resp;
    var val1;
    var val2;
    var c = 1;
    var resul;


    var resp1;
    var val11;
    var val22;
    var c1 = 1;
    var resul1;

    for (var i = 1; i < 19; i = i + 6) {

        val1 = parseInt($('#nRA' + i).text() + '' + $('#nRA' + (i + 1)).text() + '' + $('#nRA' + (i + 2)).text());
        val2 = parseInt($('#nRA' + (i + 3)).text() + '' + $('#nRA' + (i + 4)).text() + '' + $('#nRA' + (i + 5)).text());

        resp = val1 + val2;
        //alert(val1 +'-----'+ val2);
        if (i == 7) {
            resp = val1 - val2;
        }
        if (i == 13) {
            resp = val1 + val2;
        }

        resul = parseInt((($('#rRA' + c).val())) + '' + (($('#rRA' + (c + 1)).val())) + '' + (($('#rRA' + (c + 2)).val())));
        if (resul == resp) {
            notaFinalP1++;
            $('#rRA' + c).css("background-color", "#5ED188");
            $('#rRA' + (c + 1)).css("background-color", "#5ED188");
            $('#rRA' + (c + 2)).css("background-color", "#5ED188");
        } else {
            $('#rRA' + c).css("background-color", "#EF87A7");
            $('#rRA' + (c + 1)).css("background-color", "#EF87A7");
            $('#rRA' + (c + 2)).css("background-color", "#EF87A7");
        }

        c = c + 3;
    }



    for (var j = 1; j < 19; j = j + 6) {

        val11 = parseInt($('#nRA' + j).text() + '' + $('#nRA' + (j + 1)).text() + '' + $('#nRA' + (j + 2)).text());
        val22 = parseInt($('#nRA' + (j + 3)).text() + '' + $('#nRA' + (j + 4)).text() + '' + $('#nRA' + (j + 5)).text());

        resp1 = val11 + val22;
        //alert(val1 +'-----'+ val2);
        if (j == 7) {
            resp1 = val11 - val22;
        }
        if (j == 13) {
            resp1 = val11 + val22;
        }

        resul1 = parseInt((($('#rPCm' + c1).val())) + '' + (($('#rPCm' + (c1 + 1)).val())) + '' + (($('#rPCm' + (c1 + 2)).val())));
        //alert( resul1+' == '+resp1);
        if (resul1 == resp1) {
            notaFinalP1++;
            $('#rPCm' + c1).css("background-color", "#5ED188");
            $('#rPCm' + (c1 + 1)).css("background-color", "#5ED188");
            $('#rPCm' + (c1 + 2)).css("background-color", "#5ED188");
        } else {
            $('#rPCm' + c1).css("background-color", "#EF87A7");
            $('#rPCm' + (c1 + 1)).css("background-color", "#EF87A7");
            $('#rPCm' + (c1 + 2)).css("background-color", "#EF87A7");
        }

        c1 = c1 + 3;
    }

}





var notaFinalP2 = 0;

function Resp2() {

    var resp;
    var val1;
    var val2;
    var c = 1;
    var resul;

    var v1;
    var v2;


    for (var i = 1; i < 13; i = i + 6) {

        val1 = parseInt($('#nCRv1').text() + '' + $('#nCRv2').text() + '' + $('#nCRv3').text());
        val2 = parseInt($('#nCRv4').text() + '' + $('#nCRv5').text() + '' + $('#nCRv6').text());

        v1 = ((($('#nCR' + c).val())) + '' + (($('#nCR' + (c + 1)).val())) + '' + (($('#nCR' + (c + 2)).val())));
        v1 = ((($('#nCR' + (c + 3)).val())) + '' + (($('#nCR' + (c + 4)).val())) + '' + (($('#nCR' + (c + 5)).val())));

        resp = val1 + val2;
        //alert(val1 +'-----'+ val2);

        resul = parseInt((($('#rCR' + c).val())) + '' + (($('#rCR' + (c + 1)).val())) + '' + (($('#rCR' + (c + 2)).val())));
        //alert( resul+' == '+resp);

        if (resul == resp) {
            notaFinalP2++;
            $('#rCR' + c).css("background-color", "#5ED188");
            $('#rCR' + (c + 1)).css("background-color", "#5ED188");
            $('#rCR' + (c + 2)).css("background-color", "#5ED188");
        } else {
            $('#rCR' + c).css("background-color", "#EF87A7");
            $('#rCR' + (c + 1)).css("background-color", "#EF87A7");
            $('#rCR' + (c + 2)).css("background-color", "#EF87A7");
        }

        c = c + 3;
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



        var nota1 = parseFloat($('#calificacion0').val());


        var notaFinal = (nota1).toFixed(2);

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