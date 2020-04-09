var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 12,
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
    bt_comprobar.addEventListener("click", f_comprobar);
    var p1vec1 = [parseInt((Math.random() * 700) + 100), parseInt((Math.random() * 700) + 100), parseInt((Math.random() * 700) + 100), parseInt((Math.random() * 700) + 100), parseInt((Math.random() * 700) + 100), parseInt((Math.random() * 700) + 100)];
    var p1vec2 = [parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2)];
    $('#p1im6').text(p1vec2[0]);
    var p1aux1 = p1vec1[0].toString().split('');
    $('#p1im1').text(p1aux1[0]);
    $('#p1im2').text(p1aux1[1]);
    $('#p1im3').text(p1aux1[2]);
    var p1res1 = [(p1vec1[0] * p1vec2[0]), (p1vec1[1] * p1vec2[1]), (p1vec1[2] * p1vec2[2]), (p1vec1[3] * p1vec2[3]), (p1vec1[4] * p1vec2[4]), (p1vec1[5] * p1vec2[5])];
    var p1vec3 = [];
    var p1vec4 = p1res1[0].toString().split('');
    for (var i = 0; i < p1vec4.length; i++) {
        $('#p1cim' + (i + 1)).html('<input type="text" style="border: 2px solid #D68500; border-radius: 5px; text-align:center; width: 40px;" onkeypress="return soloNumeros(event)" maxlength="1" id="p1dcon'+(i+1)+'">');
    }

    $('#p11im6').text(p1vec2[1]);
    var p1aux2 = p1vec1[1].toString().split('');
    $('#p11im1').text(p1aux2[0]);
    $('#p11im2').text(p1aux2[1]);
    $('#p11im3').text(p1aux2[2]);
    var p1vec5 = p1res1[1].toString().split('');
    for (var i = 0; i < p1vec5.length; i++) {
        $('#p11cim' + (i + 1)).html('<input type="text" style="border: 2px solid #D68500; border-radius: 5px; text-align:center; width: 40px;" onkeypress="return soloNumeros(event)" maxlength="1" id="p11dcon'+(i+1)+'">');
    }
    $('#p12im6').text(p1vec2[2]);
    var p1aux2 = p1vec1[2].toString().split('');
    $('#p12im1').text(p1aux2[0]);
    $('#p12im2').text(p1aux2[1]);
    $('#p12im3').text(p1aux2[2]);
    var p1vec6 = p1res1[2].toString().split('');
    for (var i = 0; i < p1vec6.length; i++) {
        $('#p12cim' + (i + 1)).html('<input type="text" style="border: 2px solid #D68500; border-radius: 5px; text-align:center; width: 40px;" onkeypress="return soloNumeros(event)" maxlength="1" id="p12dcon'+(i+1)+'">');
    }
    $('#p13im6').text(p1vec2[3]);
    var p1aux2 = p1vec1[3].toString().split('');
    $('#p13im1').text(p1aux2[0]);
    $('#p13im2').text(p1aux2[1]);
    $('#p13im3').text(p1aux2[2]);
    var p1vec7 = p1res1[3].toString().split('');
    for (var i = 0; i < p1vec7.length; i++) {
        $('#p13cim' + (i + 1)).html('<input type="text" style="border: 2px solid #D68500; border-radius: 5px; text-align:center; width: 40px;" onkeypress="return soloNumeros(event)" maxlength="1" id="p13dcon'+(i+1)+'">');
    }
    $('#p14im6').text(p1vec2[4]);
    var p1aux2 = p1vec1[4].toString().split('');
    $('#p14im1').text(p1aux2[0]);
    $('#p14im2').text(p1aux2[1]);
    $('#p14im3').text(p1aux2[2]);
    var p1vec8 = p1res1[4].toString().split('');
    for (var i = 0; i < p1vec8.length; i++) {
        $('#p14cim' + (i + 1)).html('<input type="text" style="border: 2px solid #D68500; border-radius: 5px; text-align:center; width: 40px;" onkeypress="return soloNumeros(event)" maxlength="1" id="p14dcon'+(i+1)+'">');
    }
    $('#p15im6').text(p1vec2[5]);
    var p1aux2 = p1vec1[5].toString().split('');
    $('#p15im1').text(p1aux2[0]);
    $('#p15im2').text(p1aux2[1]);
    $('#p15im3').text(p1aux2[2]);
    var p1vec9 = p1res1[5].toString().split('');
    for (var i = 0; i < p1vec9.length; i++) {
        $('#p15cim' + (i + 1)).html('<input type="text" style="border: 2px solid #D68500; border-radius: 5px; text-align:center; width: 40px;" onkeypress="return soloNumeros(event)" maxlength="1" id="p15dcon'+(i+1)+'">');
    }

    var p2vec1=[parseInt((Math.random() * 700) + 100),parseInt((Math.random() * 700) + 100)];
    var p2vec2=[parseInt((Math.random() * 8) + 2),parseInt((Math.random() * 8) + 2)];
    var p2vec3=[];
    for (var i = 0; i < p2vec2[0]; i++) {
        if (i==(p2vec2[0]-1)) {
            p2vec3.push(p2vec1[0]);    
        }else{
            p2vec3.push(p2vec1[0]+' + ');    
        }
    }
    $('#p2im1').html(p2vec3);
    var p2res1=[(p2vec1[0]*p2vec2[0]),(p2vec1[1]*p2vec2[1])];
    var p2vec4 = p2res1[0].toString().split('');
    for (var i = 0; i < p2vec4.length; i++) {
        $('#p2cim' + (i + 1)).html('<input type="text" style="border: 2px solid #D68500; border-radius: 5px; text-align:center; width: 40px;" onkeypress="return soloNumeros(event)" maxlength="1" id="p23dcon'+(i+1)+'">');
    }
    var p2vec5=[];
    for (var i = 0; i < p2vec2[1]; i++) {
        if (i==(p2vec2[1]-1)) {
            p2vec5.push(p2vec1[1]);    
        }else{
            p2vec5.push(p2vec1[1]+' + ');    
        }
    }
    $('#p2im2').html(p2vec5);
    var p2vec6 = p2res1[1].toString().split('');
    for (var i = 0; i < p2vec6.length; i++) {
        $('#p21cim' + (i + 1)).html('<input type="text" style="border: 2px solid #D68500; border-radius: 5px; text-align:center; width: 40px;" onkeypress="return soloNumeros(event)" maxlength="1" id="p24dcon'+(i+1)+'">');
    }
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1dcon1=[];
        for (var i = (p1vec4.length - 1); i >= 0; i--) {
            p1dcon1.push($('#p1dcon'+(i+1)).val());
        }
        p1dcon1=p1dcon1.join('');
        if (p1dcon1==p1res1[0]) {
            cor++;
            for (var i = (p1vec4.length - 1); i >= 0; i--) {
                f_ok($('#p1dcon'+(i+1)));    
            }
        }else{
            inc++;
            for (var i = (p1vec4.length - 1); i >= 0; i--) {
                f_no($('#p1dcon'+(i+1)));
            }
        }
        var p1dcon2=[];
        for (var i = (p1vec5.length - 1); i >= 0; i--) {
            p1dcon2.push($('#p11dcon'+(i+1)).val());
        }
        p1dcon2=p1dcon2.join('');
        if (p1dcon2==p1res1[1]) {
            cor++;
            for (var i = (p1vec5.length - 1); i >= 0; i--) {
                f_ok($('#p11dcon'+(i+1)));    
            }
        }else{
            inc++;
            for (var i = (p1vec5.length - 1); i >= 0; i--) {
                f_no($('#p11dcon'+(i+1)));
            }
        }
        var p1dcon3=[];
        for (var i = (p1vec6.length - 1); i >= 0; i--) {
            p1dcon3.push($('#p12dcon'+(i+1)).val());
        }
        p1dcon3=p1dcon3.join('');
        if (p1dcon3==p1res1[2]) {
            cor++;
            for (var i = (p1vec6.length - 1); i >= 0; i--) {
                f_ok($('#p12dcon'+(i+1)));    
            }
        }else{
            inc++;
            for (var i = (p1vec6.length - 1); i >= 0; i--) {
                f_no($('#p12dcon'+(i+1)));
            }
        }
        var p1dcon4=[];
        for (var i = (p1vec7.length - 1); i >= 0; i--) {
            p1dcon4.push($('#p13dcon'+(i+1)).val());
        }
        p1dcon4=p1dcon4.join('');
        if (p1dcon4==p1res1[3]) {
            cor++;
            for (var i = (p1vec7.length - 1); i >= 0; i--) {
                f_ok($('#p13dcon'+(i+1)));    
            }
        }else{
            inc++;
            for (var i = (p1vec7.length - 1); i >= 0; i--) {
                f_no($('#p13dcon'+(i+1)));
            }
        }
        var p1dcon5=[];
        for (var i = (p1vec8.length - 1); i >= 0; i--) {
            p1dcon5.push($('#p14dcon'+(i+1)).val());
        }
        p1dcon5=p1dcon5.join('');
        if (p1dcon5==p1res1[4]) {
            cor++;
            for (var i = (p1vec8.length - 1); i >= 0; i--) {
                f_ok($('#p14dcon'+(i+1)));    
            }
        }else{
            inc++;
            for (var i = (p1vec8.length - 1); i >= 0; i--) {
                f_no($('#p14dcon'+(i+1)));
            }
        }
        var p1dcon6=[];
        for (var i = (p1vec9.length - 1); i >= 0; i--) {
            p1dcon6.push($('#p15dcon'+(i+1)).val());
        }
        p1dcon6=p1dcon6.join('');
        if (p1dcon6==p1res1[5]) {
            cor++;
            for (var i = (p1vec9.length - 1); i >= 0; i--) {
                f_ok($('#p15dcon'+(i+1)));    
            }
        }else{
            inc++;
            for (var i = (p1vec9.length - 1); i >= 0; i--) {
                f_no($('#p15dcon'+(i+1)));
            }
        }


        var p2dcon1=[];
        for (var i = 0; i < 3; i++) {
            p2dcon1.push($('#p2dcon'+(i+1)).val());
        }
        p2dcon1=p2dcon1.join('');
        if (p2dcon1==p2vec1[0]) {
            cor++;
            for (var i = 0; i < 3; i++) {
                f_ok($('#p2dcon'+(i+1)));    
            }
        }else{
            inc++;
            for (var i = 0; i < 3; i++) {
                f_no($('#p2dcon'+(i+1)));
            }
        }
        var p2dcon2=$('#p2dcon4').val();
        
        if (p2dcon2==p2vec2[0]) {
            cor++;
            f_ok($('#p2dcon4'));
        }else{
            inc++;
            f_no($('#p2dcon4'));
        }

        var p2dcon3=[];
        for (var i = (p2vec4.length - 1); i >= 0; i--) {
            p2dcon3.push($('#p23dcon'+(i+1)).val());
        }
        p2dcon3=p2dcon3.join('');
        if (p2dcon3==p2res1[0]) {
            cor++;
            for (var i = (p2vec4.length - 1); i >= 0; i--) {
                f_ok($('#p23dcon'+(i+1)));    
            }
        }else{
            inc++;
            for (var i = (p2vec4.length - 1); i >= 0; i--) {
                f_no($('#p23dcon'+(i+1)));
            }
        }


        var p2dcon5=[];
        for (var i = 0; i < 3; i++) {
            p2dcon5.push($('#p21dcon'+(i+1)).val());
        }
        p2dcon5=p2dcon5.join('');
        if (p2dcon5==p2vec1[1]) {
            cor++;
            for (var i = 0; i < 3; i++) {
                f_ok($('#p21dcon'+(i+1)));    
            }
        }else{
            inc++;
            for (var i = 0; i < 3; i++) {
                f_no($('#p21dcon'+(i+1)));
            }
        }
        var p2dcon6=$('#p21dcon4').val();
        
        if (p2dcon6==p2vec2[1]) {
            cor++;
            f_ok($('#p21dcon4'));
        }else{
            inc++;
            f_no($('#p21dcon4'));
        }
        var p2dcon4=[];
        for (var i = (p2vec6.length - 1); i >= 0; i--) {
            p2dcon4.push($('#p24dcon'+(i+1)).val());
        }
        p2dcon4=p2dcon4.join('');
        if (p2dcon4==p2res1[1]) {
            cor++;
            for (var i = (p2vec6.length - 1); i >= 0; i--) {
                f_ok($('#p24dcon'+(i+1)));    
            }
        }else{
            inc++;
            for (var i = (p2vec6.length - 1); i >= 0; i--) {
                f_no($('#p24dcon'+(i+1)));
            }
        }
        Calculo_nota();
    }
}