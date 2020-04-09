var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 9,
    cor = 0,
    inc = 0,
    str = '',
    str1 = '',
    str2 = '',
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
    var p7vec1 = [
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i2_p215_u5a15.jpg" class="img-responsive">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p7cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="2" onkeyup="mayus(this)" id="p7dcon1">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p7dcon2">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p7dcon3">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p7dcon4">'+
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' ,
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i3_p215_u5a15.jpg" class="img-responsive">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p7cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p71dcon1">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p71dcon2">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p71dcon3">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="2" onkeyup="mayus(this)" id="p71dcon4">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p71dcon5">'+
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i4_p215_u5a15.jpg" class="img-responsive">' +
        '<div style="display: inline-block;" class="table-responsive">' +
        '<table>' +
        '<tr id="p7cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p72dcon1">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p72dcon2">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p72dcon3">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p72dcon4">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p72dcon5">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p72dcon6">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="2" onkeyup="mayus(this)" id="p72dcon7">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p72dcon8">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p72dcon9">'+
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i5_p215_u5a15.jpg" class="img-responsive">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p7cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p73dcon1">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p73dcon2">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="2" onkeyup="mayus(this)" id="p73dcon3">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p73dcon4">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p73dcon5">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p73dcon6">'+
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i6_p215_u5a15.jpg" class="img-responsive">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p7cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="2" onkeyup="mayus(this)" id="p74dcon1">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p74dcon2">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p74dcon3">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p74dcon4">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p74dcon5">'+
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i7_p215_u5a15.jpg" class="img-responsive">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p7cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p75dcon1">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p75dcon2">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p75dcon3">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p75dcon4">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="2" onkeyup="mayus(this)" id="p75dcon5">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p75dcon6">'+
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i8_p215_u5a15.jpg" class="img-responsive">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p7cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p76dcon1">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p76dcon2">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="2" onkeyup="mayus(this)" id="p76dcon3">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p76dcon4">'+
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i9_p215_u5a15.jpg" class="img-responsive">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p7cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="2" onkeyup="mayus(this)" id="p77dcon1">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p77dcon2">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p77dcon3">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p77dcon4">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p77dcon5">'+
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i10_p215_u5a15.jpg" class="img-responsive">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p7cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p78dcon1">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p78dcon2">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="2" onkeyup="mayus(this)" id="p78dcon3">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p78dcon4">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p78dcon5">'+
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p78dcon6">'+
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>'
    ];
    p7vec1.sort(f_randomico);
    $('#p7im1').html(p7vec1);
    bt_comprobar.addEventListener("click", f_comprobar);
    
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p7dcon1=$('#p7dcon1').val()+$('#p7dcon2').val()+$('#p7dcon3').val()+$('#p7dcon4').val();
        var p71dcon1=$('#p71dcon1').val()+$('#p71dcon2').val()+$('#p71dcon3').val()+$('#p71dcon4').val()+$('#p71dcon5').val();
        var p72dcon1=$('#p72dcon1').val()+$('#p72dcon2').val()+$('#p72dcon3').val()+$('#p72dcon4').val()+$('#p72dcon5').val()+$('#p72dcon6').val()+$('#p72dcon7').val()+$('#p72dcon8').val()+$('#p72dcon9').val();
        var p73dcon1=$('#p73dcon1').val()+$('#p73dcon2').val()+$('#p73dcon3').val()+$('#p73dcon4').val()+$('#p73dcon5').val()+$('#p73dcon6').val();
        var p74dcon1=$('#p74dcon1').val()+$('#p74dcon2').val()+$('#p74dcon3').val()+$('#p74dcon4').val()+$('#p74dcon5').val();
        var p75dcon1=$('#p75dcon1').val()+$('#p75dcon2').val()+$('#p75dcon3').val()+$('#p75dcon4').val()+$('#p75dcon5').val()+$('#p75dcon6').val();
        var p76dcon1=$('#p76dcon1').val()+$('#p76dcon2').val()+$('#p76dcon3').val()+$('#p76dcon4').val();
        var p77dcon1=$('#p77dcon1').val()+$('#p77dcon2').val()+$('#p77dcon3').val()+$('#p77dcon4').val()+$('#p77dcon5').val();
        var p78dcon1=$('#p78dcon1').val()+$('#p78dcon2').val()+$('#p78dcon3').val()+$('#p78dcon4').val()+$('#p78dcon5').val()+$('#p78dcon6').val();
        if (p7dcon1=='llave') {
            cor++;
            f_ok($('#p7dcon1'));
            f_ok($('#p7dcon2'));
            f_ok($('#p7dcon3'));
            f_ok($('#p7dcon4'));
        }else{
            inc++;
            f_no($('#p7dcon1'));
            f_no($('#p7dcon2'));
            f_no($('#p7dcon3'));
            f_no($('#p7dcon4'));
        }
        if (p71dcon1=='toalla') {
            cor++;
            f_ok($('#p71dcon1'));
            f_ok($('#p71dcon2'));
            f_ok($('#p71dcon3'));
            f_ok($('#p71dcon4'));
            f_ok($('#p71dcon5'));
        }else{
            inc++;
            f_no($('#p71dcon1'));
            f_no($('#p71dcon2'));
            f_no($('#p71dcon3'));
            f_no($('#p71dcon4'));
            f_no($('#p71dcon5'));
        }
        if (p72dcon1=='rosquillas') {
            cor++;
            f_ok($('#p72dcon1'));
            f_ok($('#p72dcon2'));
            f_ok($('#p72dcon3'));
            f_ok($('#p72dcon4'));
            f_ok($('#p72dcon5'));
            f_ok($('#p72dcon6'));
            f_ok($('#p72dcon7'));
            f_ok($('#p72dcon8'));
            f_ok($('#p72dcon9'));
        }else{
            inc++;
            f_no($('#p72dcon1'));
            f_no($('#p72dcon2'));
            f_no($('#p72dcon3'));
            f_no($('#p72dcon4'));
            f_no($('#p72dcon5'));
            f_no($('#p72dcon6'));
            f_no($('#p72dcon7'));
            f_no($('#p72dcon8'));
            f_no($('#p72dcon9'));
        }
        if (p73dcon1=='galleta') {
            cor++;
            f_ok($('#p73dcon1'));
            f_ok($('#p73dcon2'));
            f_ok($('#p73dcon3'));
            f_ok($('#p73dcon4'));
            f_ok($('#p73dcon5'));
            f_ok($('#p73dcon6'));
        }else{
            inc++;
            f_no($('#p73dcon1'));
            f_no($('#p73dcon2'));
            f_no($('#p73dcon3'));
            f_no($('#p73dcon4'));
            f_no($('#p73dcon5'));
            f_no($('#p73dcon6'));
        }
        if (p74dcon1=='lluvia') {
            cor++;
            f_ok($('#p74dcon1'));
            f_ok($('#p74dcon2'));
            f_ok($('#p74dcon3'));
            f_ok($('#p74dcon4'));
            f_ok($('#p74dcon5'));
        }else{
            inc++;
            f_no($('#p74dcon1'));
            f_no($('#p74dcon2'));
            f_no($('#p74dcon3'));
            f_no($('#p74dcon4'));
            f_no($('#p74dcon5'));
        }
        if (p75dcon1=='caballo') {
            cor++;
            f_ok($('#p75dcon1'));
            f_ok($('#p75dcon2'));
            f_ok($('#p75dcon3'));
            f_ok($('#p75dcon4'));
            f_ok($('#p75dcon5'));
            f_ok($('#p75dcon6'));
        }else{
            inc++;
            f_no($('#p75dcon1'));
            f_no($('#p75dcon2'));
            f_no($('#p75dcon3'));
            f_no($('#p75dcon4'));
            f_no($('#p75dcon5'));
            f_no($('#p75dcon6'));
        }
        if (p76dcon1=='silla') {
            cor++;
            f_ok($('#p76dcon1'));
            f_ok($('#p76dcon2'));
            f_ok($('#p76dcon3'));
            f_ok($('#p76dcon4'));
        }else{
            inc++;
            f_no($('#p76dcon1'));
            f_no($('#p76dcon2'));
            f_no($('#p76dcon3'));
            f_no($('#p76dcon4'));
        }
        if (p77dcon1=='llanta') {
            cor++;
            f_ok($('#p77dcon1'));
            f_ok($('#p77dcon2'));
            f_ok($('#p77dcon3'));
            f_ok($('#p77dcon4'));
            f_ok($('#p77dcon5'));
        }else{
            inc++;
            f_no($('#p77dcon1'));
            f_no($('#p77dcon2'));
            f_no($('#p77dcon3'));
            f_no($('#p77dcon4'));
            f_no($('#p77dcon5'));
        }
        if (p78dcon1=='gallina') {
            cor++;
            f_ok($('#p78dcon1'));
            f_ok($('#p78dcon2'));
            f_ok($('#p78dcon3'));
            f_ok($('#p78dcon4'));
            f_ok($('#p78dcon5'));
            f_ok($('#p78dcon6'));
        }else{
            inc++;
            f_no($('#p78dcon1'));
            f_no($('#p78dcon2'));
            f_no($('#p78dcon3'));
            f_no($('#p78dcon4'));
            f_no($('#p78dcon5'));
            f_no($('#p78dcon6'));
        }
        Calculo_nota();
    }
}