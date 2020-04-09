var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 26,
    cor = 0,
    inc = 0,
    str = '',
    calificacion = 10;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}

function f_iniciar() {
    var p1vec1 = [];
    for (var i = 0; i < 16; i++) {
        p1vec1.push(parseInt((Math.random() * 400) + 100));
    }
    var p1aux1 = p1vec1[0].toString().split('');
    $('#p1im1').html(p1aux1[0]);
    $('#p1im2').html(p1aux1[1]);
    $('#p1im3').html(p1aux1[2]);
    var p1aux2 = p1vec1[1].toString().split('');
    $('#p1im4').html(p1aux2[0]);
    $('#p1im5').html(p1aux2[1]);
    $('#p1im6').html(p1aux2[2]);
    var p1aux3 = p1vec1[2].toString().split('');
    for (var i = 0; i < 3; i++) {
        $('#p1im1' + (i + 1)).html(p1aux3[i]);
    }
    var p1aux4 = p1vec1[3].toString().split('');
    for (var i = 0; i < 3; i++) {
        $('#p1im1' + (i + 4)).html(p1aux4[i]);
    }
    var p1aux5 = p1vec1[4].toString().split('');
    for (var i = 0; i < 3; i++) {
        $('#p1im2' + (i + 1)).html(p1aux5[i]);
    }
    var p1aux6 = p1vec1[5].toString().split('');
    for (var i = 0; i < 3; i++) {
        $('#p1im2' + (i + 4)).html(p1aux6[i]);
    }
    var p1aux7 = p1vec1[6].toString().split('');
    for (var i = 0; i < 3; i++) {
        $('#p1im3' + (i + 1)).html(p1aux7[i]);
    }
    var p1aux8 = p1vec1[7].toString().split('');
    for (var i = 0; i < 3; i++) {
        $('#p1im3' + (i + 4)).html(p1aux8[i]);
    }
    var p1aux9 = p1vec1[8].toString().split('');
    for (var i = 0; i < 3; i++) {
        $('#p1im4' + (i + 1)).html(p1aux9[i]);
    }
    var p1aux10 = p1vec1[9].toString().split('');
    for (var i = 0; i < 3; i++) {
        $('#p1im4' + (i + 4)).html(p1aux10[i]);
    }
    var p1aux11 = p1vec1[10].toString().split('');
    for (var i = 0; i < 3; i++) {
        $('#p1im5' + (i + 1)).html(p1aux11[i]);
    }
    var p1aux12 = p1vec1[11].toString().split('');
    for (var i = 0; i < 3; i++) {
        $('#p1im5' + (i + 4)).html(p1aux12[i]);
    }
    var p1aux13 = p1vec1[12].toString().split('');
    for (var i = 0; i < 3; i++) {
        $('#p1im6' + (i + 1)).html(p1aux13[i]);
    }
    var p1aux14 = p1vec1[13].toString().split('');
    for (var i = 0; i < 3; i++) {
        $('#p1im6' + (i + 4)).html(p1aux14[i]);
    }
    var p1aux15 = p1vec1[14].toString().split('');
    for (var i = 0; i < 3; i++) {
        $('#p1im7' + (i + 1)).html(p1aux15[i]);
    }
    var p1aux16 = p1vec1[15].toString().split('');
    for (var i = 0; i < 3; i++) {
        $('#p1im7' + (i + 4)).html(p1aux16[i]);
    }
    var p2vec1 = [];
    for (var i = 0; i < 12; i++) {
        p2vec1.push(parseInt((Math.random() * 400) + 100));
    }
    for (var i = 0; i < 12; i++) {
        $('#p2im' + (i + 1)).html(p2vec1[i]);
    }
    var pal1 = ['<div class="drag2" style="display: inline-block;" id="1">' +
        '<table class="table">' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #7EB61F;">C</b>' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #DB0080;">D</b>' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #009CDE;">U</b>' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '4' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '5' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '9' +
        '</td>' +
        '</tr>' +
        '<tr align="center" >' +
        '<td>' +
        '<b>+</b>' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '2' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '8' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '6' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #7EB61F; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p3dcon1">' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #DB0080; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p3dcon2">' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #009CDE; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p3dcon3">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="drag2" style="display: inline-block;" id="2">' +
        '<table class="table">' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #7EB61F;">C</b>' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #DB0080;">D</b>' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #009CDE;">U</b>' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '5' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '9' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '4' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '<b>+</b>' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '2' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '6' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '6' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #7EB61F; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p3dcon4">' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #DB0080; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p3dcon5">' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #009CDE; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p3dcon6">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="drag2" style="display: inline-block;" id="3">' +
        '<table class="table">' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #7EB61F;">C</b>' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #DB0080;">D</b>' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #009CDE;">U</b>' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '1' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '4' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '7' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '<b>+</b>' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '2' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '9' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '3' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #7EB61F; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p3dcon7">' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #DB0080; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p3dcon8">' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #009CDE; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p3dcon9">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="drag2" style="display: inline-block;" id="4">' +
        '<table class="table">' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #7EB61F;">C</b>' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #DB0080;">D</b>' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #009CDE;">U</b>' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '5' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '2' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '9' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '<b>+</b>' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '2' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '8' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '6' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #7EB61F; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p3dcon10">' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #DB0080; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p3dcon11">' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #009CDE; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p3dcon12">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ];
    var pal2 = ['<tr>' +
        '<td>' +
        '<div class="col-lg-10 col-sm-10 col-md-10 col-xs-10 c_destino1 drop2 p3im1"></div>' +
        '</td>' +
        '<td>' +
        '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 c_origen p3cim11" ><div class="table-responsive">' +
        '<table class="table">' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #7EB61F;">C</b>' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #DB0080;">D</b>' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #009CDE;">U</b>' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '1' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '7' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '6' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '<b>+</b>' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '2' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '6' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '4' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #7EB61F; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p31dcon11">' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #DB0080; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p31dcon12">' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #009CDE; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p31dcon13">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div></div>' +
        '</td>' +
        '</tr>',
        '<tr>' +
        '<td>' +
        '<div class="col-lg-10 col-sm-10 col-md-10 col-xs-10 c_destino1 drop2 p3im2"></div>' +
        '</td>' +
        '<td>' +
        '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 c_origen p3cim12" ><div class="table-responsive">' +
        '<table class="table">' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #7EB61F;">C</b>' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #DB0080;">D</b>' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #009CDE;">U</b>' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '4' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '5' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '7' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '<b>+</b>' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '3' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '5' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '8' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #7EB61F; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p3dcon14">' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #DB0080; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p3dcon15">' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #009CDE; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p3dcon16">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div></div>' +
        '</td>' +
        '</tr>',
        '<tr>' +
        '<td>' +
        '<div class="col-lg-10 col-sm-10 col-md-10 col-xs-10 c_destino1 drop2 p3im3"></div>' +
        '</td>' +
        '<td>' +
        '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 c_origen p3cim13" ><div class="table-responsive">' +
        '<table class="table">' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #7EB61F;">C</b>' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #DB0080;">D</b>' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #009CDE;">U</b>' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '3' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '8' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '8' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '<b>+</b>' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '3' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '5' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '7' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #7EB61F; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p3dcon17">' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #DB0080; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p3dcon18">' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #009CDE; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p3dcon19">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div></div>' +
        '</td>' +
        '</tr>',
        '<tr>' +
        '<td>' +
        '<div class="col-lg-10 col-sm-10 col-md-10 col-xs-10 c_destino1 drop2 p3im4"></div>' +
        '</td>' +
        '<td>' +
        '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 c_origen p3cim14" ><div class="table-responsive">' +
        '<table class="table">' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #7EB61F;">C</b>' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #DB0080;">D</b>' +
        '</td>' +
        '<td style="background: #FDEFDF; border: 2px solid #EE8600;">' +
        '<b style="color: #009CDE;">U</b>' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '3' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '7' +
        '</td>' +
        '<td style="border: 2px solid #EE8600;">' +
        '2' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '<b>+</b>' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '4' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '8' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid #EE8600;">' +
        '8' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #7EB61F; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p3dcon110">' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #DB0080; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p3dcon111">' +
        '</td>' +
        '<td style="border-left: 2px solid #EE8600; border-right: 2px solid #EE8600; border-top: 2px solid black; border-bottom: 2px solid #EE8600;">' +
        '<input type="text" style="width: 30px; border: 2px solid #009CDE; text-align: center; border-radius: 5px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="p3dcon112">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div></div>' +
        '</td>' +
        '</tr>'
    ];
    pal1.sort(f_randomico);
    $(".textos1").append(pal1);
    pal2.sort(f_randomico);
    $("#datos1").append(pal2);
    $(".drag2").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: "#p3res1",
        scroll: false,
    });

    $(".drop2").droppable({
        accept: ".drag2",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag2");

            ui.draggable.attr("style", "color:black;");
            $(this).append(ui.draggable);

        }
    });

    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1dcon1 = [$('#p1dcon1').val(), $('#p1dcon2').val(), $('#p1dcon3').val()];
        p1dcon1 = p1dcon1.join('');
        var p1dcon2 = [$('#p1dcon4').val(), $('#p1dcon5').val(), $('#p1dcon6').val()];
        p1dcon2 = p1dcon2.join('');
        var p1dcon3 = [$('#p1dcon7').val(), $('#p1dcon8').val(), $('#p1dcon9').val()];
        p1dcon3 = p1dcon3.join('');
        var p1dcon4 = [$('#p1dcon10').val(), $('#p1dcon11').val(), $('#p1dcon12').val()];
        p1dcon4 = p1dcon4.join('');
        var p1dcon5 = [$('#p1dcon13').val(), $('#p1dcon14').val(), $('#p1dcon15').val()];
        p1dcon5 = p1dcon5.join('');
        var p1dcon6 = [$('#p1dcon16').val(), $('#p1dcon17').val(), $('#p1dcon18').val()];
        p1dcon6 = p1dcon6.join('');
        var p1dcon7 = [$('#p1dcon19').val(), $('#p1dcon20').val(), $('#p1dcon21').val()];
        p1dcon7 = p1dcon7.join('');
        var p1dcon8 = [$('#p1dcon22').val(), $('#p1dcon23').val(), $('#p1dcon24').val()];
        p1dcon8 = p1dcon8.join('');
        if (p1dcon1 == (p1vec1[0] + p1vec1[1])) {
            cor++;
            f_ok($('#p1dcon1'));
            f_ok($('#p1dcon2'));
            f_ok($('#p1dcon3'));
        } else {
            inc++;
            f_no($('#p1dcon1'));
            f_no($('#p1dcon2'));
            f_no($('#p1dcon3'));
        }
        if (p1dcon2 == (p1vec1[2] + p1vec1[3])) {
            cor++;
            f_ok($('#p1dcon4'));
            f_ok($('#p1dcon5'));
            f_ok($('#p1dcon6'));
        } else {
            inc++;
            f_no($('#p1dcon4'));
            f_no($('#p1dcon5'));
            f_no($('#p1dcon6'));
        }
        if (p1dcon3 == (p1vec1[4] + p1vec1[5])) {
            cor++;
            f_ok($('#p1dcon7'));
            f_ok($('#p1dcon8'));
            f_ok($('#p1dcon9'));
        } else {
            inc++;
            f_no($('#p1dcon7'));
            f_no($('#p1dcon8'));
            f_no($('#p1dcon9'));
        }
        if (p1dcon4 == (p1vec1[6] + p1vec1[7])) {
            cor++;
            f_ok($('#p1dcon10'));
            f_ok($('#p1dcon11'));
            f_ok($('#p1dcon12'));
        } else {
            inc++;
            f_no($('#p1dcon10'));
            f_no($('#p1dcon11'));
            f_no($('#p1dcon12'));
        }
        if (p1dcon5 == (p1vec1[8] + p1vec1[9])) {
            cor++;
            f_ok($('#p1dcon13'));
            f_ok($('#p1dcon14'));
            f_ok($('#p1dcon15'));
        } else {
            inc++;
            f_no($('#p1dcon13'));
            f_no($('#p1dcon14'));
            f_no($('#p1dcon15'));
        }
        if (p1dcon6 == (p1vec1[10] + p1vec1[11])) {
            cor++;
            f_ok($('#p1dcon16'));
            f_ok($('#p1dcon17'));
            f_ok($('#p1dcon18'));
        } else {
            inc++;
            f_no($('#p1dcon16'));
            f_no($('#p1dcon17'));
            f_no($('#p1dcon18'));
        }
        if (p1dcon7 == (p1vec1[12] + p1vec1[13])) {
            cor++;
            f_ok($('#p1dcon19'));
            f_ok($('#p1dcon20'));
            f_ok($('#p1dcon21'));
        } else {
            inc++;
            f_no($('#p1dcon19'));
            f_no($('#p1dcon20'));
            f_no($('#p1dcon21'));
        }
        if (p1dcon8 == (p1vec1[14] + p1vec1[15])) {
            cor++;
            f_ok($('#p1dcon22'));
            f_ok($('#p1dcon23'));
            f_ok($('#p1dcon24'));
        } else {
            inc++;
            f_no($('#p1dcon22'));
            f_no($('#p1dcon23'));
            f_no($('#p1dcon24'));
        }

        var p2dcon1 = [$('#p2dcon1').val(), $('#p2dcon2').val(), $('#p2dcon3').val()];
        p2dcon1 = p2dcon1.join('');
        var p2dcon2 = [$('#p2dcon4').val(), $('#p2dcon5').val(), $('#p2dcon6').val()];
        p2dcon2 = p2dcon2.join('');
        var p2dcon3 = [$('#p2dcon7').val(), $('#p2dcon8').val(), $('#p2dcon9').val()];
        p2dcon3 = p2dcon3.join('');
        var p2cont1 = 0;
        if (p2dcon1 == (p2vec1[0])) {
            p2cont1++;
            f_ok($('#p2dcon1'));
            f_ok($('#p2dcon2'));
            f_ok($('#p2dcon3'));
        } else {
            p2cont1;
            f_no($('#p2dcon1'));
            f_no($('#p2dcon2'));
            f_no($('#p2dcon3'));
        }
        if (p2dcon2 == (p2vec1[1])) {
            p2cont1++;
            f_ok($('#p2dcon4'));
            f_ok($('#p2dcon5'));
            f_ok($('#p2dcon6'));
        } else {
            p2cont1;
            f_no($('#p2dcon4'));
            f_no($('#p2dcon5'));
            f_no($('#p2dcon6'));
        }
        if (p2dcon3 == (p2vec1[0] + p2vec1[1])) {
            p2cont1++;
            f_ok($('#p2dcon7'));
            f_ok($('#p2dcon8'));
            f_ok($('#p2dcon9'));
        } else {
            p2cont1;
            f_no($('#p2dcon7'));
            f_no($('#p2dcon8'));
            f_no($('#p2dcon9'));
        }
        var result1 = (p2cont1 * 1) / 3;
        cor = cor + result1;
        inc = inc + (1 - result1);

        var p2dcon4 = [$('#p2dcon11').val(), $('#p2dcon12').val(), $('#p2dcon13').val()];
        p2dcon4 = p2dcon4.join('');
        var p2dcon5 = [$('#p2dcon14').val(), $('#p2dcon15').val(), $('#p2dcon16').val()];
        p2dcon5 = p2dcon5.join('');
        var p2dcon6 = [$('#p2dcon17').val(), $('#p2dcon18').val(), $('#p2dcon19').val()];
        p2dcon6 = p2dcon6.join('');
        var p2cont2 = 0;
        if (p2dcon4 == (p2vec1[2])) {
            p2cont2++;
            f_ok($('#p2dcon11'));
            f_ok($('#p2dcon12'));
            f_ok($('#p2dcon13'));
        } else {
            p2cont2;
            f_no($('#p2dcon11'));
            f_no($('#p2dcon12'));
            f_no($('#p2dcon13'));
        }
        if (p2dcon5 == (p2vec1[3])) {
            p2cont2++;
            f_ok($('#p2dcon14'));
            f_ok($('#p2dcon15'));
            f_ok($('#p2dcon16'));
        } else {
            p2cont2;
            f_no($('#p2dcon14'));
            f_no($('#p2dcon15'));
            f_no($('#p2dcon16'));
        }
        if (p2dcon6 == (p2vec1[2] + p2vec1[3])) {
            p2cont2++;
            f_ok($('#p2dcon17'));
            f_ok($('#p2dcon18'));
            f_ok($('#p2dcon19'));
        } else {
            p2cont2;
            f_no($('#p2dcon17'));
            f_no($('#p2dcon18'));
            f_no($('#p2dcon19'));
        }
        var result2 = (p2cont2 * 1) / 3;
        cor = cor + result2;
        inc = inc + (1 - result2);

        var p2dcon7 = [$('#p2dcon21').val(), $('#p2dcon22').val(), $('#p2dcon23').val()];
        p2dcon7 = p2dcon7.join('');
        var p2dcon8 = [$('#p2dcon24').val(), $('#p2dcon25').val(), $('#p2dcon26').val()];
        p2dcon8 = p2dcon8.join('');
        var p2dcon9 = [$('#p2dcon27').val(), $('#p2dcon28').val(), $('#p2dcon29').val()];
        p2dcon9 = p2dcon9.join('');
        var p2cont3 = 0;
        if (p2dcon7 == (p2vec1[4])) {
            p2cont3++;
            f_ok($('#p2dcon21'));
            f_ok($('#p2dcon22'));
            f_ok($('#p2dcon23'));
        } else {
            p2cont3;
            f_no($('#p2dcon21'));
            f_no($('#p2dcon22'));
            f_no($('#p2dcon23'));
        }
        if (p2dcon8 == (p2vec1[5])) {
            p2cont3++;
            f_ok($('#p2dcon24'));
            f_ok($('#p2dcon25'));
            f_ok($('#p2dcon26'));
        } else {
            p2cont3;
            f_no($('#p2dcon24'));
            f_no($('#p2dcon25'));
            f_no($('#p2dcon26'));
        }
        if (p2dcon9 == (p2vec1[4] + p2vec1[5])) {
            p2cont3++;
            f_ok($('#p2dcon27'));
            f_ok($('#p2dcon28'));
            f_ok($('#p2dcon29'));
        } else {
            p2cont3;
            f_no($('#p2dcon27'));
            f_no($('#p2dcon28'));
            f_no($('#p2dcon29'));
        }
        var result3 = (p2cont3 * 1) / 3;
        cor = cor + result3;
        inc = inc + (1 - result3);

        var p2dcon10 = [$('#p2dcon31').val(), $('#p2dcon32').val(), $('#p2dcon33').val()];
        p2dcon10 = p2dcon10.join('');
        var p2dcon11 = [$('#p2dcon34').val(), $('#p2dcon35').val(), $('#p2dcon36').val()];
        p2dcon11 = p2dcon11.join('');
        var p2dcon12 = [$('#p2dcon37').val(), $('#p2dcon38').val(), $('#p2dcon39').val()];
        p2dcon12 = p2dcon12.join('');
        var p2cont4 = 0;
        if (p2dcon10 == (p2vec1[6])) {
            p2cont4++;
            f_ok($('#p2dcon31'));
            f_ok($('#p2dcon32'));
            f_ok($('#p2dcon33'));
        } else {
            p2cont4;
            f_no($('#p2dcon31'));
            f_no($('#p2dcon32'));
            f_no($('#p2dcon33'));
        }
        if (p2dcon11 == (p2vec1[7])) {
            p2cont4++;
            f_ok($('#p2dcon34'));
            f_ok($('#p2dcon35'));
            f_ok($('#p2dcon36'));
        } else {
            p2cont4;
            f_no($('#p2dcon34'));
            f_no($('#p2dcon35'));
            f_no($('#p2dcon36'));
        }
        if (p2dcon12 == (p2vec1[6] + p2vec1[7])) {
            p2cont4++;
            f_ok($('#p2dcon37'));
            f_ok($('#p2dcon38'));
            f_ok($('#p2dcon39'));
        } else {
            p2cont4;
            f_no($('#p2dcon37'));
            f_no($('#p2dcon38'));
            f_no($('#p2dcon39'));
        }
        result4 = (p2cont4 * 1) / 3;
        cor = cor + result4;
        inc = inc + (1 - result4);

        var p2dcon13 = [$('#p2dcon41').val(), $('#p2dcon42').val(), $('#p2dcon43').val()];
        p2dcon13 = p2dcon13.join('');
        var p2dcon14 = [$('#p2dcon44').val(), $('#p2dcon45').val(), $('#p2dcon46').val()];
        p2dcon14 = p2dcon14.join('');
        var p2dcon15 = [$('#p2dcon47').val(), $('#p2dcon48').val(), $('#p2dcon49').val()];
        p2dcon15 = p2dcon15.join('');
        var p2cont5 = 0;
        if (p2dcon13 == (p2vec1[8])) {
            p2cont5++;
            f_ok($('#p2dcon41'));
            f_ok($('#p2dcon42'));
            f_ok($('#p2dcon43'));
        } else {
            p2cont5;
            f_no($('#p2dcon41'));
            f_no($('#p2dcon42'));
            f_no($('#p2dcon43'));
        }
        if (p2dcon14 == (p2vec1[9])) {
            p2cont5++;
            f_ok($('#p2dcon44'));
            f_ok($('#p2dcon45'));
            f_ok($('#p2dcon46'));
        } else {
            p2cont5;
            f_no($('#p2dcon44'));
            f_no($('#p2dcon45'));
            f_no($('#p2dcon46'));
        }
        if (p2dcon15 == (p2vec1[8] + p2vec1[9])) {
            p2cont5++;
            f_ok($('#p2dcon47'));
            f_ok($('#p2dcon48'));
            f_ok($('#p2dcon49'));
        } else {
            p2cont5;
            f_no($('#p2dcon47'));
            f_no($('#p2dcon48'));
            f_no($('#p2dcon49'));
        }
        result5 = (p2cont5 * 1) / 3;
        cor = cor + result5;
        inc = inc + (1 - result5);

        var p2dcon16 = [$('#p2dcon51').val(), $('#p2dcon52').val(), $('#p2dcon53').val()];
        p2dcon16 = p2dcon16.join('');
        var p2dcon17 = [$('#p2dcon54').val(), $('#p2dcon55').val(), $('#p2dcon56').val()];
        p2dcon17 = p2dcon17.join('');
        var p2dcon18 = [$('#p2dcon57').val(), $('#p2dcon58').val(), $('#p2dcon59').val()];
        p2dcon18 = p2dcon18.join('');
        var p2cont6 = 0;
        if (p2dcon16 == (p2vec1[10])) {
            p2cont6++;
            f_ok($('#p2dcon51'));
            f_ok($('#p2dcon52'));
            f_ok($('#p2dcon53'));
        } else {
            p2cont6;
            f_no($('#p2dcon51'));
            f_no($('#p2dcon52'));
            f_no($('#p2dcon53'));
        }
        if (p2dcon17 == (p2vec1[11])) {
            p2cont6++;
            f_ok($('#p2dcon54'));
            f_ok($('#p2dcon55'));
            f_ok($('#p2dcon56'));
        } else {
            p2cont6;
            f_no($('#p2dcon54'));
            f_no($('#p2dcon55'));
            f_no($('#p2dcon56'));
        }
        if (p2dcon18 == (p2vec1[10] + p2vec1[11])) {
            p2cont6++;
            f_ok($('#p2dcon57'));
            f_ok($('#p2dcon58'));
            f_ok($('#p2dcon59'));
        } else {
            p2cont6;
            f_no($('#p2dcon57'));
            f_no($('#p2dcon58'));
            f_no($('#p2dcon59'));
        }
        result6 = (p2cont6 * 1) / 3;
        cor = cor + result6;
        inc = inc + (1 - result6);


        var p3im1 = $('.p3im1 > div').attr('id');
        var p3im2 = $('.p3im2 > div').attr('id');
        var p3im3 = $('.p3im3 > div').attr('id');
        var p3im4 = $('.p3im4 > div').attr('id');
        if (p3im1 == '3') {
            cor++;
            f_ok($('.p3im1'));
        } else {
            inc++;
            f_no($('.p3im1'));
        }
        if (p3im2 == '4') {
            cor++;
            f_ok($('.p3im2'));
        } else {
            inc++;
            f_no($('.p3im2'));
        }
        if (p3im3 == '1') {
            cor++;
            f_ok($('.p3im3'));
        } else {
            inc++;
            f_no($('.p3im3'));
        }
        if (p3im4 == '2') {
            cor++;
            f_ok($('.p3im4'));
        } else {
            inc++;
            f_no($('.p3im4'));
        }


        var p3dcon11 = [$('#p31dcon11').val(), $('#p31dcon12').val(), $('#p31dcon13').val()];
        p3dcon11 = p3dcon11.join('');
        var p3dcon12 = [$('#p3dcon14').val(), $('#p3dcon15').val(), $('#p3dcon16').val()];
        p3dcon12 = p3dcon12.join('');
        var p3dcon13 = [$('#p3dcon17').val(), $('#p3dcon18').val(), $('#p3dcon19').val()];
        p3dcon13 = p3dcon13.join('');
        var p3dcon14 = [$('#p3dcon110').val(), $('#p3dcon111').val(), $('#p3dcon112').val()];
        p3dcon14 = p3dcon14.join('');
        if (p3dcon11 == '440') {
            cor++;
            f_ok($('#p31dcon11'));
            f_ok($('#p31dcon12'));
            f_ok($('#p31dcon13'));
        } else {
            inc++;
            f_no($('#p31dcon11'));
            f_no($('#p31dcon12'));
            f_no($('#p31dcon13'));
        }
        if (p3dcon12 == '815') {
            cor++;
            f_ok($('#p3dcon14'));
            f_ok($('#p3dcon15'));
            f_ok($('#p3dcon16'));
        } else {
            inc++;
            f_no($('#p3dcon14'));
            f_no($('#p3dcon15'));
            f_no($('#p3dcon16'));
        }
        if (p3dcon13 == '745') {
            cor++;
            f_ok($('#p3dcon17'));
            f_ok($('#p3dcon18'));
            f_ok($('#p3dcon19'));
        } else {
            inc++;
            f_no($('#p3dcon17'));
            f_no($('#p3dcon18'));
            f_no($('#p3dcon19'));
        }
        if (p3dcon14 == '860') {
            cor++;
            f_ok($('#p3dcon110'));
            f_ok($('#p3dcon111'));
            f_ok($('#p3dcon112'));
        } else {
            inc++;
            f_no($('#p3dcon110'));
            f_no($('#p3dcon111'));
            f_no($('#p3dcon112'));
        }

        var p3dcon1 = [$('#p3dcon1').val(), $('#p3dcon2').val(), $('#p3dcon3').val()];
        p3dcon1 = p3dcon1.join('');
        var p3dcon2 = [$('#p3dcon4').val(), $('#p3dcon5').val(), $('#p3dcon6').val()];
        p3dcon2 = p3dcon2.join('');
        var p3dcon3 = [$('#p3dcon7').val(), $('#p3dcon8').val(), $('#p3dcon9').val()];
        p3dcon3 = p3dcon3.join('');
        var p3dcon4 = [$('#p3dcon10').val(), $('#p3dcon11').val(), $('#p3dcon12').val()];
        p3dcon4 = p3dcon4.join('');
        if (p3dcon1 == '745') {
            cor++;
            f_ok($('#p3dcon1'));
            f_ok($('#p3dcon2'));
            f_ok($('#p3dcon3'));
        } else {
            inc++;
            f_no($('#p3dcon1'));
            f_no($('#p3dcon2'));
            f_no($('#p3dcon3'));
        }
        if (p3dcon2 == '860') {
            cor++;
            f_ok($('#p3dcon4'));
            f_ok($('#p3dcon5'));
            f_ok($('#p3dcon6'));
        } else {
            inc++;
            f_no($('#p3dcon4'));
            f_no($('#p3dcon5'));
            f_no($('#p3dcon6'));
        }
        if (p3dcon3 == '440') {
            cor++;
            f_ok($('#p3dcon7'));
            f_ok($('#p3dcon8'));
            f_ok($('#p3dcon9'));
        } else {
            inc++;
            f_no($('#p3dcon7'));
            f_no($('#p3dcon8'));
            f_no($('#p3dcon9'));
        }
        if (p3dcon4 == '815') {
            cor++;
            f_ok($('#p3dcon10'));
            f_ok($('#p3dcon11'));
            f_ok($('#p3dcon12'));
        } else {
            inc++;
            f_no($('#p3dcon10'));
            f_no($('#p3dcon11'));
            f_no($('#p3dcon12'));
        }
        Calculo_nota();
    }
}