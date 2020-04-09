var titulos = "refuerzo";

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


    var contenido = ['<tr>' +
        '<td class="n2">N</td>' +
        '<td><select id="rCNC0" class="form-control respuestas">' +
        '<option></option>' +
        '<option>⊂</option>' +
        '<option>⊄</option>' +
        '</select></td>' +
        '<td class="n2">V</td>' +
        '</tr>',
        '<tr>' +
        '<td class="n2">a</td>' +
        '<td><select id="rCNC1" class="form-control respuestas">' +
        '<option></option>' +
        '<option>⊂</option>' +
        '<option>⊄</option>' +
        '</select></td>' +
        '<td class="n2">V</td>' +
        '</tr>',
        '<tr>' +
        '<td class="n2">i</td>' +
        '<td><select id="rCNC2" class="form-control respuestas">' +
        '<option></option>' +
        '<option>⊂</option>' +
        '<option>⊄</option>' +
        '</select></td>' +
        '<td class="n2">N</td>' +
        '</tr>',

    ];


    var contenidos1 = contenido;

    contenidos1.sort(f_randomico);

    $.each(contenidos1, function(i, item) {
        $("#completar0").append(item);
    });




    var contenido1 = ['<tr>' +
        '<td class="n2">5</td>' +
        '<td><select id="rCNC3" class="form-control respuestas">' +
        '<option></option>' +
        '<option>⊂</option>' +
        '<option>⊄</option>' +
        '</select></td>' +
        '<td class="n2">N</td>' +
        '</tr>',
        '<tr>' +
        '<td class="n2">2</td>' +
        '<td><select id="rCNC4" class="form-control respuestas">' +
        '<option></option>' +
        '<option>⊂</option>' +
        '<option>⊄</option>' +
        '</select></td>' +
        '<td class="n2">V</td>' +
        '</tr>',
        '<tr>' +
        '<td class="n2">1</td>' +
        '<td><select id="rCNC5" class="form-control respuestas">' +
        '<option></option>' +
        '<option>⊂</option>' +
        '<option>⊄</option>' +
        '</select></td>' +
        '<td class="n2">N</td>' +
        '</tr>',

    ];


    var contenidos2 = contenido1;

    contenidos2.sort(f_randomico);

    $.each(contenidos2, function(i, item) {
        $("#completar1").append(item);
    });

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



function Preg3() {
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

    var num;
    var nNEP;
    var acum = '';


    for (var i = 0; i < 7; i++) {

        nNEP = Math.round(Math.random() * (100 - 1) + 1);
        num = '<td class="np1">' +
            '<p class="np1" id="rNEP' + i + '" style="border-radius: 15px;">' +
            nNEP + '<input type="checkbox" class="checkmark" id="nNEP' + i + '" value="' + nNEP + '" style="top: 4px; position: relative;">' +
            '</p>' +
            '</td>';

        $('#numeros0').append(num);
    }


    for (var i = 7; i < 14; i++) {

        nNEP = Math.round(Math.random() * (100 - 1) + 1);
        num = '<td class="np1">' +
            '<p class="np1" id="rNEP' + i + '" style="border-radius: 15px;">' +
            nNEP + '<input type="checkbox" class="checkmark" id="nNEP' + i + '" value="' + nNEP + '" style="top: 4px; position: relative;">' +
            '</p>' +
            '</td>';

        $('#numeros1').append(num);
    }

    for (var i = 14; i < 20; i++) {

        nNEP = Math.round(Math.random() * (100 - 1) + 1);
        num = '<td class="np1">' +
            '<p class="np1" id="rNEP' + i + '" style="border-radius: 15px;">' +
            nNEP + '<input type="checkbox" class="checkmark" id="nNEP' + i + '" value="' + nNEP + '" style="top: 4px; position: relative;">' +
            '</p>' +
            '</td>';

        $('#numeros2').append(num);
    }

}



function Preg6() {
    var nRA;
    for (var i = 1; i < 19; i++) {
        nRA = Math.round(Math.random() * (9 - 2) + 2);
        $('#nRA' + i).append(nRA);
    }

}


var notaFinalP1 = 0;

function Resp1() {

    var resp = [];
    for (var i = 0; i < 6; i++) {
        resp = ['⊄', '⊂', '⊄', '⊂', '⊄', '⊂'];

        if ($('#rCNC' + i).val() == resp[i]) {
            notaFinalP1++;
            $('#rCNC' + i).css("background-color", "#5ED188");
        } else {
            if ($('#rCNC' + i).val() != '') {
                notaFinalP1--;
            }
            $('#rCNC' + i).css("background-color", "#EF87A7");
        }

    }

}






var notaFinalP2 = 0;

function Resp2() {

    var resp = [];
    for (var i = 0; i < 4; i++) {
        resp = ['pájaro,nido', 'abeja,panal', 'perro,casadeperro', 'hormiga,hormiguero'];

        if (($('#rRL' + i).val()).toLowerCase().replace(/ /g, "") == resp[i]) {
            notaFinalP2++;
            $('#rRL' + i).css("background-color", "#5ED188");
        } else {
            $('#rRL' + i).css("background-color", "#EF87A7");
        }

    }

}



var notaFinalP3 = 0;

function Resp3() {

    var resp;
    var resp1;
    var con = 1;
    for (var i = 3; i < 6; i++) {
        resp = parseInt($('#rSC2').val()) + (parseInt($('#nSC0').val()) * con);
        if ((($('#rSC' + i).val())) == resp) {
            notaFinalP3++;
            $('#rSC' + i).css("background-color", "#5ED188");
        } else {
            $('#rSC' + i).css("background-color", "#EF87A7");
        }

        resp1 = parseInt($('#rSC22').val()) + (parseInt($('#nSC00').val()) * con);
        if ((($('#rSC' + i + '' + i).val())) == resp1) {
            notaFinalP3++;
            $('#rSC' + i + '' + i).css("background-color", "#5ED188");
        } else {
            $('#rSC' + i + '' + i).css("background-color", "#EF87A7");
        }

        con++;
    }

}




var notaFinalP4 = 0;
var NP4 = 0;

function Resp4() {
    var con = 0;
    for (var i = 0; i < 20; i++) {
        if ((($('#nNEP' + i).val()) % 2) == 0) {
            con++;
        }
        if ($('#nNEP' + i).is(':checked')) {
            if ((($('#nNEP' + i).val()) % 2) == 0) {
                notaFinalP4++;
                $('#rNEP' + i).css("background-color", "#5ED188");
            } else {
                notaFinalP4--;
                $('#rNEP' + i).css("background-color", "#EF87A7");
            }
        } else {
            if ((($('#nNEP' + i).val()) % 2) == 0) {
                $('#rNEP' + i).css("background-color", "#EF87A7");
            }
        }

    }

    NP4 = (notaFinalP4 * 1.5) / con;

}





var notaFinalP5 = 0;

function Resp5() {

    var resp = [4, 5, 2, 4, 3, 6, 8, 8, 8, 3, 7, 1, 5, 1, 4, 8, 8, 5, 8, 6, 7, 3, 2, 5, 5, 4, 2, 7, 5, 9, 5, 5, 7, 2, 0, 2];

    for (var i = 1; i < 37; i++) {
        //alert( $('#nTP'+i).val()+' =='+ resp[i-1] );
        if ($('#nTP' + i).val() == resp[i - 1] && $('#nTP' + i).val() != '') {
            notaFinalP5++;
            $('#nTP' + i).css("background-color", "#5ED188");
        } else {
            $('#nTP' + i).css("background-color", "#EF87A7");
        }
    }
}






var notaFinalP6 = 0;

function Resp6() {

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
            notaFinalP6++;
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
            notaFinalP6++;
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




function Cargar() {
    location.reload(true);
}


$(document).ready(function() {
    $(".panel-collapse").removeClass('in');
    Inicio();

    Preg1();
    Preg3();
    Preg4();
    Preg6();

    function confirmar() {

        Resp1();
        Resp2();
        Resp3();
        Resp4();
        Resp5();
        Resp6();

        var nota1 = 0;
        if (notaFinalP1 < 0) { nota1 = 0; } else { nota1 = (notaFinalP1) / 6; }
        var nota2 = (notaFinalP2 * 1.5) / 4;
        var nota3 = (notaFinalP3 * 1.5) / 6;
        var nota4 = 0;
        if (NP4 < 0) { NP4 = 0; } else { nota4 = NP4; }
        var nota5 = (notaFinalP5 * 3) / 36;
        var nota6 = (notaFinalP6 * 1.5) / 6;

        alert((nota1 + '---' + nota2 + '---' + nota3 + '---' + nota4 + '---' + nota5 + '---' + nota6));

        var notaFinal = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6).toFixed(2);

        $("#txtNota").text(notaFinal);
        $('#Calificar').attr('disabled', true);
        $('#Refrescar').attr('disabled', false);
        return false
    }


    $("#Calificar").click(function() {
        confirmar();
        /*if($('#calificacion0').val() !='' && $('#calificacion1').val() !='' ){
           confirmar();
           $('#calificacion0').css("background-color", "#05D576");
           $('#calificacion1').css("background-color", "#05D576");
         }else{
           $('#calificacion0').focus();
           $('#calificacion0').css("background-color", "#D50545");
           $('#calificacion1').focus();
           $('#calificacion1').css("background-color", "#D50545");
         }*/

    });

});