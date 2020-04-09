var titulos = "prueba";

function Inicio() {
    $('#nota-informativa').slideUp('slow');
    $("#Calificar").removeAttr("disabled");
    $('#Refrescar').attr('disabled', true);
}


$('.btn_mostrar').on('click', function() { //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
});


function Preg2() {

    var nSC0 = Math.round(Math.random() * (9 - 2) + 2); //patron1
    var rSC0 = Math.round(Math.random() * (9 - 2) + 2) + nSC0;
    var rSC1 = rSC0 + nSC0;
    var rSC2 = rSC1 + nSC0;

    $('#nSC0').val(nSC0);
    $('#nSC1').val(nSC0);
    $('#nSC2').val(nSC0);
    $('#nSC3').val(nSC0);
    $('#nSC4').val(nSC0);

    $('#rSC0').val(rSC0);
    $('#rSC1').val(rSC1);
    $('#rSC2').val(rSC2);


    var nSC00 = Math.round(Math.random() * (9 - 2) + 2); //patron2
    var rSC00 = Math.round(Math.random() * (9 - 2) + 2) + nSC00;
    var rSC11 = rSC00 + nSC00;
    var rSC22 = rSC11 + nSC00;

    $('#nSC00').val(nSC00);
    $('#nSC11').val(nSC00);
    $('#nSC22').val(nSC00);
    $('#nSC33').val(nSC00);
    $('#nSC44').val(nSC00);

    $('#rSC00').val(rSC00);
    $('#rSC11').val(rSC11);
    $('#rSC22').val(rSC22);

}






function Preg4() {

    var parejas;
    var con = 0;
    for (var i = 1; i < 19; i = i + 6) {

        parejas = '<table class="table"> <tbody align="center"> <tr> <td class="n0"><span id="nPN' + (i) + '"></span><span id="nPN' + (i + 1) + '"></span><span id="nPN' + (i + 2) + '"></span></td> <td> <select class="form-control respuestas"  id="rPN' + (i) + '"> <option></option> <option>></option> <option><</option> <option>=</option> </select> </td> <td class="n1"><span id="nPN' + (i + 3) + '"></span><span id="nPN' + (i + 4) + '"></span><span id="nPN' + (i + 5) + '"></span></td> </tr> <tr> <td id="nPN' + (i) + '_' + (i) + '"></td> <td> <select class="form-control respuestas"  id="rPN' + (i + 1) + '"> <option></option> <option>></option> <option><</option> <option>=</option> </select> </td> <td id="nPN' + (i + 3) + '_' + (i + 3) + '"></td> </tr> <tr> <td id="nPN' + (i + 1) + '_' + (i + 1) + '"></td> <td> <select class="form-control respuestas"  id="rPN' + (i + 2) + '"> <option></option> <option>></option> <option><</option> <option>=</option> </select> </td> <td id="nPN' + (i + 4) + '_' + (i + 4) + '"></td> </tr> <tr> <td id="nPN' + (i + 2) + '_' + (i + 2) + '"></td> <td> <select class="form-control respuestas"  id="rPN' + (i + 3) + '"> <option></option> <option>></option> <option><</option> <option>=</option> </select> </td> <td id="nPN' + (i + 5) + '_' + (i + 5) + '"></td></tr></tbody></table>';
        $('#parejas' + con).append(parejas);
        con++;
    }

    var nPN;
    for (var j = 1; j < 19; j++) {
        nPN = Math.round(Math.random() * (9 - 1) + 1);
        $('#nPN' + j).append(nPN);
        $('#nPN' + j + '_' + j).append(nPN);
    }

}





function Preg5() {
    var nRA;
    for (var i = 1; i < 17; i++) {
        nRA = Math.round(Math.random() * (9 - 2) + 2);
        $('#nRA' + i).append(nRA);
    }


}




function Preg8() {
    var conteo;
    for (var i = 0; i < 4; i++) {
        conteo = Math.round(Math.random() * (9 - 4) + 4);
        if (i == 1) { conteo = 2; }
        if (i == 2) { conteo = 12; }
        $('#conte' + i).append(conteo);

        for (var j = 0; j < conteo; j++) {
            $('#conteo' + i).append('| ');
        }
    }

}



var notaFinalP2 = 0;

function Resp2() {

    var resp;
    var resp1;
    var con = 1;
    for (var i = 3; i < 6; i++) {
        resp = parseInt($('#rSC2').val()) + (parseInt($('#nSC0').val()) * con);
        if ((($('#rSC' + i).val())) == resp) {
            notaFinalP2++;
            $('#rSC' + i).css("background-color", "#5ED188");
        } else {
            $('#rSC' + i).css("background-color", "#EF87A7");
        }

        resp1 = parseInt($('#rSC22').val()) + (parseInt($('#nSC00').val()) * con);
        if ((($('#rSC' + i + '' + i).val())) == resp1) {
            notaFinalP2++;
            $('#rSC' + i + '' + i).css("background-color", "#5ED188");
        } else {
            $('#rSC' + i + '' + i).css("background-color", "#EF87A7");
        }

        con++;
    }

}




var notaFinalP3 = 0;

function Resp3() {

    var resp = [900, 70, 8, 9, 7, 8, 500, 0, 4, 5, 0, 4, 100, 30, 6, 1, 3, 6, 200, 20, 7, 2, 2, 7, 600, 10, 2, 6, 1, 2, 700, 90, 1, 7, 9, 1];

    for (var i = 0; i < 36; i++) {
        if ((($('#rDs' + i).val())) == resp[i] && (($('#rDs' + i).val())) != '') {
            notaFinalP3++;
            $('#rDs' + i).css("background-color", "#5ED188");
        } else {
            $('#rDs' + i).css("background-color", "#EF87A7");
        }
    }

}






var notaFinalP4 = 0;

function Resp4() {

    for (var i = 1; i < 19; i = i + 6) {

        var v1 = parseInt($('#nPN' + (i)).text() + '' + $('#nPN' + (i + 1)).text() + '' + $('#nPN' + (i + 2)).text());
        var v2 = parseInt($('#nPN' + (i + 3)).text() + '' + $('#nPN' + (i + 4)).text() + '' + $('#nPN' + (i + 5)).text());


        switch ($('#rPN' + i).val()) {
            case '<':
                if (v1 < v2) {
                    notaFinalP4++;
                    $('#rPN' + i).css("background-color", "#5ED188");
                } else {
                    $('#rPN' + i).css("background-color", "#EF87A7");
                }
                break;
            case '>':
                if (v1 > v2) {
                    notaFinalP4++;
                    $('#rPN' + i).css("background-color", "#5ED188");
                } else {
                    $('#rPN' + i).css("background-color", "#EF87A7");
                }
                break;
            case '=':
                if (v1 == v2) {
                    notaFinalP4++;
                    $('#rPN' + i).css("background-color", "#5ED188");
                } else {
                    $('#rPN' + i).css("background-color", "#EF87A7");
                }
            case '':
                $('#rPN' + i).css("background-color", "#EF87A7");

        }



    }


    var c = 2;
    for (var j = 1; j < 17; j = j + 1) {

        if (j == 4) { j == 7 }
        if (j == 10) { j == 13 }
        var val1 = parseInt($('#nPN' + j + '_' + j).text());
        var val2 = parseInt($('#nPN' + (j + 3) + '_' + (j + 3)).text());



        if (c == 5) { c == 8 }
        if (c == 11) { c == 14 }

        //  alert(( val1+' < '+ val2 ));
        switch ($('#rPN' + (c)).val()) {
            case '<':
                if (val1 < val2) {
                    notaFinalP4++;
                    $('#rPN' + (c)).css("background-color", "#5ED188");
                } else {
                    $('#rPN' + (c)).css("background-color", "#EF87A7");
                }
                break;
            case '>':
                if (val1 > val2) {
                    notaFinalP4++;
                    $('#rPN' + (c)).css("background-color", "#5ED188");
                } else {
                    $('#rPN' + (c)).css("background-color", "#EF87A7");
                }
                break;
            case '=':
                if (val1 == val2) {
                    notaFinalP4++;
                    $('#rPN' + (c)).css("background-color", "#5ED188");
                } else {
                    $('#rPN' + (c)).css("background-color", "#EF87A7");
                }
                break;
            case '':
                $('#rPN' + (c)).css("background-color", "#EF87A7");

        }

        c++;
    }

}



var notaFinalP5 = 0;

function Resp5() {

    var resp;
    var val1;
    var val2;
    var c = 1;
    var resul;

    for (var i = 1; i < 18; i = i + 4) {

        val1 = parseInt($('#nRA' + i).text() + '' + $('#nRA' + (i + 1)).text());
        val2 = parseInt($('#nRA' + (i + 2)).text() + '' + $('#nRA' + (i + 3)).text());

        resp = val1 + val2;
        //alert(val1 +'-----'+ val2);
        if (i == 5) {
            resp = val1 - val2;
        }
        if (i == 9) {
            resp = val1 + val2;
        }
        if (i == 13) {
            resp = val1 - val2;
        }

        resul = parseInt((($('#rRA' + c).val())) + '' + (($('#rRA' + (c + 1)).val())));
        //alert( resul+' == '+resp);
        if (resul == resp) {
            notaFinalP5++;
            $('#rRA' + c).css("background-color", "#5ED188");
            $('#rRA' + (c + 1)).css("background-color", "#5ED188");
        } else {
            $('#rRA' + c).css("background-color", "#EF87A7");
            $('#rRA' + (c + 1)).css("background-color", "#EF87A7");
        }

        c = c + 2;
    }

}




var notaFinalP8 = 0;

function Resp8() {

    for (var i = 0; i < 4; i++) {
        if (parseInt($('#rConteo' + i).val()) == parseInt($('#conte' + i).text())) {
            notaFinalP8++;
            $('#rConteo' + i).css("background-color", "#5ED188");
        } else {
            $('#rConteo' + i).css("background-color", "#EF87A7");
        }
    }


    if (($('#rCPf0').val()) == 'Verde') {
        notaFinalP8++;
        $('#rCPf0').css("background-color", "#5ED188");
    } else {
        $('#rCPf0').css("background-color", "#EF87A7");
    }


    if (($('#rCPf1').val()) == 'Azul') {
        notaFinalP8++;
        $('#rCPf1').css("background-color", "#5ED188");
    } else {
        $('#rCPf1').css("background-color", "#EF87A7");
    }



    if (($('#rCPf2').val()) == (parseInt($('#conte0').text()) + parseInt($('#conte2').text()))) {
        notaFinalP8++;
        $('#rCPf2').css("background-color", "#5ED188");
    } else {
        $('#rCPf2').css("background-color", "#EF87A7");
    }


    if (($('#rCPf3').val()) == (parseInt($('#conte0').text()) + parseInt($('#conte1').text()) + parseInt($('#conte2').text()) + parseInt($('#conte3').text()))) {
        notaFinalP8++;
        $('#rCPf3').css("background-color", "#5ED188");
    } else {
        $('#rCPf3').css("background-color", "#EF87A7");
    }


}

function Cargar() {
    location.reload(true);
}


$(document).ready(function() {
    $(".panel-collapse").removeClass('in');
    Inicio();
    Preg2();
    Preg4();
    Preg5();
    Preg8();

    function confirmar() {
        Resp2();
        Resp3();
        Resp4();
        Resp5();
        Resp8();


        var nota1 = parseFloat($('#calificacion0').val());
        var nota2 = (notaFinalP2 * 2) / 6;
        var nota3 = (notaFinalP3 * 2) / 36
        var nota4 = (notaFinalP4) / 12;
        var nota5 = (notaFinalP5) / 4;
        var nota6 = parseFloat($('#calificacion1').val());
        var nota7 = parseFloat($('#calificacion2').val());
        var nota8 = (notaFinalP8) / 8;


        var notaFinal = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8).toFixed(2);

        $("#txtNota").text(notaFinal);
        $('#Calificar').attr('disabled', true);
        $('#Refrescar').attr('disabled', false);
        return false
    }


    $("#Calificar").click(function() {

        if ($('#calificacion0').val() != '' && $('#calificacion1').val() != '' && $('#calificacion2').val() != '') {
            confirmar();
            $('#calificacion0').css("background-color", "#05D576");
            $('#calificacion1').css("background-color", "#05D576");
            $('#calificacion2').css("background-color", "#05D576");
        } else {
            $('#calificacion0').focus();
            $('#calificacion0').css("background-color", "#D50545");
            $('#calificacion1').focus();
            $('#calificacion1').css("background-color", "#D50545");
            $('#calificacion2').focus();
            $('#calificacion2').css("background-color", "#D50545");
        }

    });

});