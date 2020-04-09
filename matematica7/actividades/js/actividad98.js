function Inicio() {
    $(".panel-collapse").removeClass('in');
    $('#nota-informativa').slideUp('slow');
    $("#Calificar").removeAttr("disabled");
    $('#Refrescar').attr('disabled', true);

}

$('.btn_mostrar').on('click', function() { //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
});




function Preg1() {

    var val0 = Math.round(Math.random() * (1000 - 100) + 100);
    var sig = Math.round(Math.random() * (4 - 1) + 1);
    var patron0 = Math.round(Math.random() * (20 - 10) + 10);
    var patron1 = Math.round(Math.random() * (20 - 10) + 10);

    var contenidos = [];
    contenidos[0] = '<span>a) &nbsp;Patrón:&nbsp;&nbsp;' +
        '<select class="form-control" id="sel00" style="width: 60px; font-size: 17px;" display: inline-block;><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
        '<input type="number" id="p00Patron0" class="form-control" style="width: 70px; display: inline-block;">,&nbsp;&nbsp;&nbsp;&nbsp; ' +
        '<select class="form-control" id="selMul00" style="width: 60px; font-size: 17px; display: inline-block;"><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
        '<input type="number" id="p00PatronMul0" class="form-control" style="width: 70px; display: inline-block;"><br><br> ' +
        'Sucesión: &nbsp;&nbsp;<span class="n0" id="p00T0">' + (val0 + (patron0)) + '</span>, &nbsp;&nbsp; ' +
        '<span class="n0" id="p00T0_0">' + (val0 + (patron0 * 2)) + '</span>, &nbsp;&nbsp; ' +
        '<span class="n0" id="p00T0_1">' + ((val0 + (patron0 * 2)) * (patron1)) +
        ', &nbsp;&nbsp;' + (((val0 + (patron0 * 2)) * (patron1)) + (patron0)) +
        ', &nbsp;&nbsp;' + ((((val0 + (patron0 * 2)) * (patron1)) + (patron0)) * (patron1)) +
        ', &nbsp;&nbsp;<span class="n0" id="p00T0_fin">' + (((((val0 + (patron0 * 2)) * (patron1)) + (patron0)) * (patron1)) + (patron0)) + '</span>, </span>' +
        '<input type="number" id="suc0MulP1" class="form-control" style="width: 120px; display: inline-block;">, ' +
        '<input type="number" id="suc0SumP1" class="form-control" style="width: 120px; display: inline-block;"><br>';


    $('#sucesion0').append(contenidos[0]);

}



function Preg2() {

    var nAVC1 = Math.round(Math.random() * (50 - 30) + 30);
    $('#nAVC0').append(nAVC1);
    $('#nAVC1').append(nAVC1);

    var nAVC2 = [];

    nAVC2[0] = nAVC1 * 3;
    nAVC2[1] = nAVC2[0] * 3;
    nAVC2[2] = nAVC2[1] * 3;
    nAVC2[3] = nAVC2[2] * 3;

    $('#nAVC2').append(nAVC2[0]);
    $('#nAVC3').append(nAVC2[1]);
    $('#nAVC4').append(nAVC2[2]);
    $('#nAVC5').append(nAVC2[3]);

}


function Preg3() {


    var RGP = [
        '<li>¿En qué punto se encuentra el venado?<br> En el punto &nbsp;&nbsp; <select id="rOGRP1" class="form-control respuestas" style="display: inline-block; width: 150px;"> <option></option> <option>(6; 13/2)</option> <option value="1">(6; 6 1/2)</option> <option>de la tortuga</option> </select><br><br></li>',
        '<li>¿Qué imagen se encuentra en el punto?<br> La imagen&nbsp;&nbsp; <select id="rOGRP2" class="form-control respuestas" style="display: inline-block; width: 150px;"> <option></option> <option value="2">de dos niños</option> <option>(6; 6 1/2)</option> <option>de la tortuga</option> </select><br><br></li>',
        '<li>¿En qué punto se encuentra el cactus?<br> El cactus se encuentra en el punto&nbsp;&nbsp; <select id="rOGRP3" class="form-control respuestas" style="display: inline-block; width: 150px;"> <option></option> <option>(6; 13/2)</option> <option>(1 1/4; 3)</option> <option value="3">(2 1/2; 3)</option> </select><br><br></li>',
        '<li>¿No es una tuna?&nbsp;&nbsp; <select id="rOGRP4" class="form-control respuestas" style="display: inline-block; width: 165px;"> <option></option> <option>venado (1 1/2; 5)</option> <option>niños (1 1/2; 3)</option> <option value="4">Cactus (1 1/2; 5)</option> </select><br><br></li>',
    ];


    RGP.sort(f_randomico);
    $.each(RGP, function(i, item) {
        $("#observa1").append(item);
    });


}




function Preg4() {

    var nRSE;
    for (var i = 1; i < 31; i++) {
        nRSE = Math.round(Math.random() * (15 - 2) + 2);
        $('#nRSE' + i).append(nRSE);
    }

}



function Preg5() {


    nMCL1 = Math.round(Math.random() * (400 - 350) + 350);
    $('#nMCL1').append(nMCL1);

    nMCL2 = Math.round(Math.random() * (9 - 2) + 2);
    $('#nMCL2').append(nMCL2);

    nMCL3 = Math.round(Math.random() * (9 - 2) + 2);
    $('#nMCL3').append(nMCL3);

    nMCL4 = Math.round(Math.random() * (9 - 2) + 2);
    $('#nMCL4').append(nMCL4);

    nMCL5 = Math.round(Math.random() * (9 - 2) + 2);
    $('#nMCL5').append(nMCL5);


}




function Preg6() {

    var num = [
        '<div class="col-sm-4" align="" style="display: inline-block;"><br><br> <li> <span class="num1">Siglo dieciocho</span><br> <select id="rNRC1" class="form-control respuestas"> <option></option> <option>Siglo XIIX</option> <option value="1">Siglo XVIII</option> <option>Siglo XVIIV</option> <option>Siglo VIIIX</option> <option>Siglo XIIIV</option> </select> </li> </div>',
        '<div class="col-sm-4" align="" style="display: inline-block;"><br><br> <li> <span class="num2">Capítulo cincuenta y dos</span><br> <select id="rNRC2" class="form-control respuestas"> <option></option> <option>Cap. XXXXII</option> <option>Cap. CLII</option> <option>Cap. II</option> <option>Cap. DII</option> <option value="2">Cap. LII</option> </select> </li> </div>',
        '<div class="col-sm-4" align="" style="display: inline-block;"><br><br> <li> <span class="num3">Doce en punto</span><br> <select id="rNRC3" class="form-control respuestas"> <option></option> <option>XIII</option> <option value="3">XII</option> <option>IIX</option> <option>VIVI</option> <option>VVII</option> </select> </li> </div>',
        '<div class="col-sm-4" align="" style="display: inline-block;"><br><br> <li> <span class="num1">115</span><br> <select id="rNRC4" class="form-control respuestas"> <option></option> <option>CCV</option> <option>CVV</option> <option value="4">CXV</option> <option>CXX</option> <option>CX</option> </select> </li> </div>',
        '<div class="col-sm-4" align="" style="display: inline-block;"><br><br> <li> <span class="num2">95</span><br> <select id="rNRC5" class="form-control respuestas"> <option></option> <option value="5">XCV</option> <option>XIV</option> <option>XV</option> <option>DV</option> <option>XXV</option> </select> </li> </div>',
        '<div class="col-sm-4" align="" style="display: inline-block;"><br><br> <li> <span class="num3">555</span><br> <select id="rNRC6" class="form-control respuestas"> <option></option> <option>E</option> <option>XXXXXV</option> <option>VVV</option> <option value="6">DLV</option> <option>DV</option> </select> </li> </div>',
    ];


    num.sort(f_randomico);
    $.each(num, function(i, item) {
        $("#numeros1").append(item);
    });

}




function Preg7() {

    nCHP1 = Math.round(Math.random() * (700 - 600) + 600);
    $('#nCHP1').append(nCHP1);
    nCHP2 = Math.round(Math.random() * (700 - 600) + 600);
    $('#nCHP2').append(nCHP2);
    nCHP3 = Math.round(Math.random() * (9 - 2) + 2);
    $('#nCHP3').append(nCHP3);
}




function Preg8() {

    nDCE1 = Math.round(Math.random() * (25 - 15) + 15);
    $('#nDCE1').append(nDCE1);
    nDCE2 = Math.round(Math.random() * (15 - 10) + 10);
    $('#nDCE2').append(nDCE2);


    /////Preg 9
    nEAE1 = Math.round(Math.random() * (40 - 30) + 30);
    $('#nEAE1').append(nEAE1);

}




function Preg10() {

    var nTGD;
    for (var i = 1; i < 7; i++) {
        nTGD = (Math.random() * (99 - 2) + 2).toFixed(2);
        $('#nTGD' + i).append(nTGD);
    }

}

//////////////////////////////////////////////////////////


var notaFinalP1 = 0;

function Resp1() {

    var operacionSum = 0;
    var operacionMul = 0;

    for (var i = 0; i < 1; i++) {

        operacionSum = (parseInt($('#p00T' + (i) + '_' + (i)).text())) - ((parseInt($('#p00T' + (i)).text()))); //suma

        operacionMul = (parseInt($('#p00T' + (i) + '_1').text())) / ((parseInt($('#p00T' + (i) + '_' + (i)).text()))); //multiplicacion


        if (operacionSum == $('#p00Patron' + i).val()) {
            notaFinalP1++;
            $('#p00Patron' + i).css("background-color", "#5ED188");
            if ($('#sel0' + i).val() == '+') {
                notaFinalP1++;
                $('#sel0' + i).css("background-color", "#5ED188");
            } else {
                $('#sel0' + i).css("background-color", "#EF87A7");
            }
        } else {
            $('#p00Patron' + i).css("background-color", "#EF87A7");
            $('#sel0' + i).css("background-color", "#EF87A7");
        }

        if ($('#suc0SumP1').val() == (operacionSum + ($('#p00T0_fin').text() * operacionMul))) {
            notaFinalP1++;
            $('#suc0SumP1').css("background-color", "#5ED188");
        } else {
            $('#suc0SumP1').css("background-color", "#EF87A7");
        }

        if (operacionMul == $('#p00PatronMul' + i).val()) {
            notaFinalP1++;
            $('#p00PatronMul' + i).css("background-color", "#5ED188");
            if ($('#selMul0' + i).val() == 'x') {
                notaFinalP1++;
                $('#selMul0' + i).css("background-color", "#5ED188");
            } else {
                $('#selMul0' + i).css("background-color", "#EF87A7");
            }
        } else {
            $('#p00PatronMul' + i).css("background-color", "#EF87A7");
            $('#selMul0' + i).css("background-color", "#EF87A7");
        }

        if ($('#suc0MulP1').val() == (operacionMul * ($('#p00T0_fin').text()))) {
            notaFinalP1++;
            $('#suc0MulP1').css("background-color", "#5ED188");
        } else {
            $('#suc0MulP1').css("background-color", "#EF87A7");
        }
    }


}





var notaFinalP2 = 0;

function Resp2() {

    if (($('#rAVC1').val()) == 'x') {
        notaFinalP2++;
        $('#rAVC1').css("background-color", "#5ED188");
    } else {
        $('#rAVC1').css("background-color", "#EF87A7");
    }


    if ((parseInt($('#rAVC2').val())) == 3) {
        notaFinalP2++;
        $('#rAVC2').css("background-color", "#5ED188");
    } else {
        $('#rAVC2').css("background-color", "#EF87A7");
    }


    if ((parseInt($('#rAVC3').val())) == (parseInt($('#nAVC5').text()))) {
        notaFinalP2++;
        $('#rAVC3').css("background-color", "#5ED188");
    } else {
        $('#rAVC3').css("background-color", "#EF87A7");
    }
}




var notaFinalP3 = 0;

function Resp3() {


    for (var i = 1; i < 5; i++) {

        if (parseInt($('#rOGRP' + i).val()) == i) {
            notaFinalP3++;
            $('#rOGRP' + i).css("background-color", "#5ED188");
        } else {
            $('#rOGRP' + i).css("background-color", "#EF87A7");
        }

    }


}




var notaFinalP4 = 0;

function Resp4() {

    var resp1 = ((parseInt($('#nRSE1').text()) / parseInt($('#nRSE2').text())) / (parseInt($('#nRSE3').text()) / parseInt($('#nRSE4').text())) - (parseInt($('#nRSE5').text()) / parseInt($('#nRSE6').text())) * (parseInt($('#nRSE7').text())) + (parseInt($('#nRSE8').text()) / parseInt($('#nRSE9').text()))).toFixed(2);
    var res1 = (parseFloat($('#rRSE1').val()) / parseFloat($('#rRSE2').val())).toFixed(2);

    var resp2 = ((parseInt($('#nRSE10').text()) / parseInt($('#nRSE11').text())) - (parseInt($('#nRSE12').text()) / parseInt($('#nRSE13').text())) * (parseInt($('#nRSE14').text()) / parseInt($('#nRSE15').text())) + (parseInt($('#nRSE16').text()) / parseInt($('#nRSE17').text())) / (parseInt($('#nRSE18').text()) / parseInt($('#nRSE19').text()))).toFixed(2);
    var res2 = (parseFloat($('#rRSE3').val()) / parseFloat($('#rRSE4').val())).toFixed(2);

    var resp3 = ((parseInt($('#nRSE20').text()) / parseInt($('#nRSE21').text())) + (parseInt($('#nRSE22').text()) / parseInt($('#nRSE23').text())) - (parseInt($('#nRSE24').text()) / parseInt($('#nRSE25').text())) / (parseInt($('#nRSE26').text()) / parseInt($('#nRSE27').text())) + (parseInt($('#nRSE28').text())) * (parseInt($('#nRSE29').text()) / parseInt($('#nRSE30').text()))).toFixed(2);
    var res3 = (parseFloat($('#rRSE5').val()) / parseFloat($('#rRSE6').val())).toFixed(2);


    var r1 = [resp1, resp2, resp3];
    var r2 = [res1, res2, res3];

    var c = 0;
    for (var i = 1; i < 7; i = i + 2) {
        //alert(r1[c] +'=='+ r2[c]);
        if (r1[c] == r2[c] && $('#rRSE' + i).val() != '' && $('#rRSE' + (i + 1)).val() != '') {
            notaFinalP4++;
            $('#rRSE' + i).css("background-color", "#5ED188");
            $('#rRSE' + (i + 1)).css("background-color", "#5ED188");
        } else {
            $('#rRSE' + i).css("background-color", "#EF87A7");
            $('#rRSE' + (i + 1)).css("background-color", "#EF87A7");
        }
        c++;
    }

}





var notaFinalP5 = 0;

function Resp5() {

    var v1 = ((parseInt($('#nMCL1').text()) * (parseInt($('#nMCL2').text()) / parseInt($('#nMCL3').text()))));
    var v2 = v1 * (parseInt($('#nMCL4').text()) / parseInt($('#nMCL5').text()));
    var resp = parseInt($('#nMCL1').text()) - (v1 + v2);

    if ((parseInt($('#rMCL1').val())) == resp) {
        notaFinalP5++;
        $('#rMCL1').css("background-color", "#5ED188");
    } else {
        $('#rMCL1').css("background-color", "#EF87A7");
    }


}



var notaFinalP6 = 0;

function Resp6() {

    for (var i = 1; i < 7; i++) {

        if (parseInt($('#rNRC' + i).val()) == i) {
            notaFinalP6++;
            $('#rNRC' + i).css("background-color", "#5ED188");
        } else {
            $('#rNRC' + i).css("background-color", "#EF87A7");
        }
    }

}





var notaFinalP7 = 0;

function Resp7() {

    var val = parseInt($('#nCHP3').text()) * 1000000;

    var resp1 = val / (parseInt($('#nCHP1').text()) * 3.14);

    var resp2 = val / (parseInt($('#nCHP2').text()) * 3.14);

    if (Math.round(parseFloat($('#rCHP1').val())) == Math.round(resp1)) {
        notaFinalP7++;
        $('#rCHP1').css("background-color", "#5ED188");
    } else {
        $('#rCHP1').css("background-color", "#EF87A7");
    }


    if (Math.round(parseFloat($('#rCHP2').val())) == Math.round(resp2)) {
        notaFinalP7++;
        $('#rCHP2').css("background-color", "#5ED188");
    } else {
        $('#rCHP2').css("background-color", "#EF87A7");
    }


}





var notaFinalP8 = 0;

function Resp8() {

    var resp = parseInt($('#nDCE1').text()) * parseInt($('#nDCE2').text());

    if ((parseFloat($('#rDCE1').val())) == resp) {
        notaFinalP8++;
        $('#rDCE1').css("background-color", "#5ED188");
    } else {
        $('#rDCE1').css("background-color", "#EF87A7");
    }

}




var notaFinalP9 = 0;

function Resp9() {

    var resp = Math.round(Math.pow(parseInt($('#nEAE1').text()), 2) * 3.14);

    if (Math.round(parseFloat($('#rEAE1').val())) == resp) {
        notaFinalP9++;
        $('#rEAE1').css("background-color", "#5ED188");
    } else {
        $('#rEAE1').css("background-color", "#EF87A7");
    }

}



var notaFinalP10 = 0;

function Resp10() {

    var val = [],
        val2 = [],
        grados, minutos, segundos, resp;
    var a = '';



    for (var i = 1; i < 7; i++) {

        val = ($('#nTGD' + i).text()).split('.');

        grados = val[0];

        a = (val[1] * 0.6).toString();
        val2 = a.split('.');
        minutos = val2[0];

        segundos = (val2[1] * 6);

        resp = grados + '°' + minutos + '´' + segundos + '´´';


        if (($('#rTGD' + i).val()).replace(/ |,| /g, "") == resp) {
            notaFinalP10++;
            $('#rTGD' + i).css('background-color', '#5ED188');
        } else {
            $('#rTGD' + i).css('background-color', '#EF87A7');
        }
        val = [];
        val2 = [];
        a = '';
        resp = '';
    }

}


function Cargar() {
    location.reload(true);
}


$(document).ready(function() {
    Inicio();
    Preg1();
    Preg2();
    Preg3();
    Preg4();
    Preg5();
    Preg6();
    Preg7();
    Preg8();
    Preg10();




    function confirmar() {
        Resp1();
        Resp2();
        Resp3();
        Resp4();
        Resp5();
        Resp6();
        Resp7();
        Resp8();
        Resp9();
        Resp10();

        var nota1 = (notaFinalP1) / 6;
        var nota2 = (notaFinalP2) / 3;
        var nota3 = (notaFinalP3) / 4;
        var nota4 = (notaFinalP4) / 3;
        var nota5 = (notaFinalP5);
        var nota6 = (notaFinalP6) / 6;
        var nota7 = (notaFinalP7) / 2;
        var nota8 = (notaFinalP8);
        var nota9 = (notaFinalP9);
        var nota10 = (notaFinalP10) / 6;

        var notaFinal = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10).toFixed(2);

        $("#txtNota").text(notaFinal);
        $('#Calificar').attr('disabled', true);
        $('#Refrescar').attr('disabled', false);
        return false
    }


    $("#Calificar").click(function() {
        confirmar();
        /* if($('#calificacion0').val() !=''){
             confirmar();
             $('#calificacion0').css("background-color", "#05D576");
           }else{
             $('#calificacion0').focus();
             $('#calificacion0').css("background-color", "#D50545");
           }*/

    });



});
