var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 5,
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
    var p1vec1 = [parseInt((Math.random() * 700) + 100), parseInt((Math.random() * 700) + 100), parseInt((Math.random() * 700) + 100), parseInt((Math.random() * 700) + 100), parseInt((Math.random() * 700) + 100), parseInt((Math.random() * 700) + 100)];
    var p1vec2 = [parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2)];
    $('#p1dcon4').val(p1vec2[0]);
    $('#p1dcon4').attr('disabled','true');
    var p1aux1 = p1vec1[0].toString().split('');
    $('#p1dcon1').val(p1aux1[0]);
    $('#p1dcon2').val(p1aux1[1]);
    $('#p1dcon3').val(p1aux1[2]);
    $('#p1dcon1').attr('disabled','true');
    $('#p1dcon2').attr('disabled','true');
    $('#p1dcon3').attr('disabled','true');
    var p1res1 = [(p1vec1[0] * p1vec2[0]), (p1vec1[1] * p1vec2[1]), (p1vec1[2] * p1vec2[2]), (p1vec1[3] * p1vec2[3]), (p1vec1[4] * p1vec2[4]), (p1vec1[5] * p1vec2[5])];
    var p1vec3 = [];
    var p1vec4 = p1res1[0].toString().split('');
    for (var i = 0; i < p1vec4.length; i++) {
        $('#p1cim' + (i + 1)).html('<input type="text" style="border: 2px solid #D68500; border-radius: 5px; text-align:center; width: 40px;" onkeypress="return soloNumeros(event)" maxlength="1" id="p11dcon'+(i+1)+'">');
    }
    $('#p1dcon14').val(p1vec2[1]);
    $('#p1dcon14').attr('disabled','true');
    var p1aux2 = p1vec1[1].toString().split('');
    $('#p1dcon11').val(p1aux2[0]);
    $('#p1dcon12').val(p1aux2[1]);
    $('#p1dcon13').val(p1aux2[2]);
    $('#p1dcon11').attr('disabled','true');
    $('#p1dcon12').attr('disabled','true');
    $('#p1dcon13').attr('disabled','true');
    var p1vec5 = p1res1[1].toString().split('');
    for (var i = 0; i < p1vec5.length; i++) {
        $('#p11cim' + (i + 1)).html('<input type="text" style="border: 2px solid #D68500; border-radius: 5px; text-align:center; width: 40px;" onkeypress="return soloNumeros(event)" maxlength="1" id="p12dcon'+(i+1)+'">');
    }
    $('#p1dcon24').val(p1vec2[2]);
    $('#p1dcon24').attr('disabled','true');
    var p1aux3 = p1vec1[2].toString().split('');
    $('#p1dcon21').val(p1aux3[0]);
    $('#p1dcon22').val(p1aux3[1]);
    $('#p1dcon23').val(p1aux3[2]);
    $('#p1dcon21').attr('disabled','true');
    $('#p1dcon22').attr('disabled','true');
    $('#p1dcon23').attr('disabled','true');
    var p1vec6 = p1res1[2].toString().split('');
    for (var i = 0; i < p1vec6.length; i++) {
        $('#p12cim' + (i + 1)).html('<input type="text" style="border: 2px solid #D68500; border-radius: 5px; text-align:center; width: 40px;" onkeypress="return soloNumeros(event)" maxlength="1" id="p13dcon'+(i+1)+'">');
    }
    $('#p1dcon34').val(p1vec2[3]);
    $('#p1dcon34').attr('disabled','true');
    var p1aux4 = p1vec1[3].toString().split('');
    $('#p1dcon31').val(p1aux4[0]);
    $('#p1dcon32').val(p1aux4[1]);
    $('#p1dcon33').val(p1aux4[2]);
    $('#p1dcon31').attr('disabled','true');
    $('#p1dcon32').attr('disabled','true');
    $('#p1dcon33').attr('disabled','true');
    var p1vec7 = p1res1[3].toString().split('');
    for (var i = 0; i < p1vec7.length; i++) {
        $('#p13cim' + (i + 1)).html('<input type="text" style="border: 2px solid #D68500; border-radius: 5px; text-align:center; width: 40px;" onkeypress="return soloNumeros(event)" maxlength="1" id="p14dcon'+(i+1)+'">');
    }
    $('#p1dcon44').val(p1vec2[4]);
    $('#p1dcon44').attr('disabled','true');
    var p1aux5 = p1vec1[4].toString().split('');
    $('#p1dcon41').val(p1aux5[0]);
    $('#p1dcon42').val(p1aux5[1]);
    $('#p1dcon43').val(p1aux5[2]);
    $('#p1dcon41').attr('disabled','true');
    $('#p1dcon42').attr('disabled','true');
    $('#p1dcon43').attr('disabled','true');
    var p1vec8 = p1res1[4].toString().split('');
    for (var i = 0; i < p1vec8.length; i++) {
        $('#p14cim' + (i + 1)).html('<input type="text" style="border: 2px solid #D68500; border-radius: 5px; text-align:center; width: 40px;" onkeypress="return soloNumeros(event)" maxlength="1" id="p15dcon'+(i+1)+'">');
    }
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1dcon1=[];
        for (var i = (p1vec4.length - 1); i >= 0; i--) {
            p1dcon1.push($('#p11dcon'+(i+1)).val());
        }
        p1dcon1=p1dcon1.join('');
        if (p1dcon1==p1res1[0]) {
            cor++;
            for (var i = (p1vec4.length - 1); i >= 0; i--) {
                f_ok($('#p11dcon'+(i+1)));    
            }
        }else{
            inc++;
            for (var i = (p1vec4.length - 1); i >= 0; i--) {
                f_no($('#p11dcon'+(i+1)));
            }
        }
        var p1dcon2=[];
        for (var i = (p1vec5.length - 1); i >= 0; i--) {
            p1dcon2.push($('#p12dcon'+(i+1)).val());
        }
        p1dcon2=p1dcon2.join('');
        if (p1dcon2==p1res1[1]) {
            cor++;
            for (var i = (p1vec5.length - 1); i >= 0; i--) {
                f_ok($('#p12dcon'+(i+1)));    
            }
        }else{
            inc++;
            for (var i = (p1vec5.length - 1); i >= 0; i--) {
                f_no($('#p12dcon'+(i+1)));
            }
        }
        var p1dcon3=[];
        for (var i = (p1vec6.length - 1); i >= 0; i--) {
            p1dcon3.push($('#p13dcon'+(i+1)).val());
        }
        p1dcon3=p1dcon3.join('');
        if (p1dcon3==p1res1[2]) {
            cor++;
            for (var i = (p1vec6.length - 1); i >= 0; i--) {
                f_ok($('#p13dcon'+(i+1)));    
            }
        }else{
            inc++;
            for (var i = (p1vec6.length - 1); i >= 0; i--) {
                f_no($('#p13dcon'+(i+1)));
            }
        }
        var p1dcon4=[];
        for (var i = (p1vec7.length - 1); i >= 0; i--) {
            p1dcon4.push($('#p14dcon'+(i+1)).val());
        }
        p1dcon4=p1dcon4.join('');
        if (p1dcon4==p1res1[3]) {
            cor++;
            for (var i = (p1vec7.length - 1); i >= 0; i--) {
                f_ok($('#p14dcon'+(i+1)));    
            }
        }else{
            inc++;
            for (var i = (p1vec7.length - 1); i >= 0; i--) {
                f_no($('#p14dcon'+(i+1)));
            }
        }
        var p1dcon5=[];
        for (var i = (p1vec8.length - 1); i >= 0; i--) {
            p1dcon5.push($('#p15dcon'+(i+1)).val());
        }
        p1dcon5=p1dcon5.join('');
        if (p1dcon5==p1res1[4]) {
            cor++;
            for (var i = (p1vec8.length - 1); i >= 0; i--) {
                f_ok($('#p15dcon'+(i+1)));    
            }
        }else{
            inc++;
            for (var i = (p1vec8.length - 1); i >= 0; i--) {
                f_no($('#p15dcon'+(i+1)));
            }
        }
        Calculo_nota();
    }
}