var n1 = 0,
    n2 = 0,
    sum_total = 0,
    sum_total2 = 0,
    sum_total3 = 0,
    sum_total4 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 4,
    cor = 0,
    inc = 0,
    str = '',
    str2 = '',
    str3 = '',
    str4 = '',
    calificacion = 10;

var t1 = 0;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 enc1':
            $('.enc1').addClass('pinta');
            $('.enc2').removeClass('pinta');
            $('.enc3').removeClass('pinta');

            break;
        case '1 enc2':
            $('.enc2').addClass('pinta');
            $('.enc1').removeClass('pinta');
            $('.enc3').removeClass('pinta');
            break;
        case '1 enc3':
            $('.enc3').addClass('pinta');
            $('.enc1').removeClass('pinta');
            $('.enc2').removeClass('pinta');

            break;
    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 enc4':
            $('.enc4').addClass('pinta1');
            $('.enc5').removeClass('pinta1');
            $('.enc6').removeClass('pinta1');

            break;
        case '2 enc5':
            $('.enc5').addClass('pinta1');
            $('.enc4').removeClass('pinta1');
            $('.enc6').removeClass('pinta1');
            break;
        case '2 enc6':
            $('.enc6').addClass('pinta1');
            $('.enc4').removeClass('pinta1');
            $('.enc5').removeClass('pinta1');

            break;
    }
});
$('.3').click(function() {
    switch ($(this).attr('class')) {
        case '3 enc7':
            $('.enc7').addClass('pinta2');
            $('.enc8').removeClass('pinta2');
            $('.enc9').removeClass('pinta2');

            break;
        case '3 enc8':
            $('.enc8').addClass('pinta2');
            $('.enc7').removeClass('pinta2');
            $('.enc9').removeClass('pinta2');
            break;
        case '3 enc9':
            $('.enc9').addClass('pinta2');
            $('.enc7').removeClass('pinta2');
            $('.enc8').removeClass('pinta2');

            break;
    }
});
$('.4').click(function() {
    switch ($(this).attr('class')) {
        case '4 enc10':
            $('.enc10').addClass('pinta3');
            $('.enc11').removeClass('pinta3');
            $('.enc12').removeClass('pinta3');

            break;
        case '4 enc11':
            $('.enc11').addClass('pinta3');
            $('.enc10').removeClass('pinta3');
            $('.enc12').removeClass('pinta3');
            break;
        case '4 enc12':
            $('.enc12').addClass('pinta3');
            $('.enc10').removeClass('pinta3');
            $('.enc11').removeClass('pinta3');

            break;
    }
});
function f_iniciar() {
    var p1vec1 = [];
    for (var i = 20; i < 90; i++) {
        if (i%10==0) {
            p1vec1;
        }else{
            p1vec1.push(i);
        }
    }
    p1vec1.sort(f_randomico);
    var p1vec2=[p1vec1[0],p1vec1[1],p1vec1[2],p1vec1[3]];
    var p1vec3=[Math.round(p1vec2[0]/10.0) * 10, Math.round(p1vec2[1]/10.0) * 10, Math.round(p1vec2[2]/10.0) * 10,Math.round(p1vec2[3]/10.0) * 10];
    $('#p1im1').html(p1vec2[0]);
    $('#p1im2').html(p1vec2[1]);
    $('#p1im3').html(p1vec2[2]);
    $('#p1im4').html(p1vec2[3]);
    var p1r1=['1','2','3'];
    p1r1.sort(f_randomico);
    var p1v1=[];
    if (p1r1[0]=='1') {
        p1v1=[p1vec3[0],(p1vec3[0]+10),(p1vec3[0]+20)];
    }else if (p1r1[0]=='2') {
        p1v1=[(p1vec3[0]-10),p1vec3[0],(p1vec3[0]+10)];
    }
    else if (p1r1[0]=='3') {
        p1v1=[(p1vec3[0]-20),(p1vec3[0]-10),p1vec3[0]];
    }
    for (var i = 0; i < p1v1.length; i++) {
        $('#p1i'+(i+1)).html(p1v1[i]);
    }
    var p1r2=['1','2','3'];
    p1r2.sort(f_randomico);
    var p1v2=[];
    if (p1r2[0]=='1') {
        p1v2=[p1vec3[1],(p1vec3[1]+10),(p1vec3[1]+20)];
    }else if (p1r2[0]=='2') {
        p1v2=[(p1vec3[1]-10),p1vec3[1],(p1vec3[1]+10)];
    }
    else if (p1r2[0]=='3') {
        p1v2=[(p1vec3[1]-20),(p1vec3[1]-10),p1vec3[1]];
    }
    for (var i = 0; i < p1v2.length; i++) {
        $('#p1i1'+(i+1)).html(p1v2[i]);
    }
    var p1r3=['1','2','3'];
    p1r3.sort(f_randomico);
    var p1v3=[];
    if (p1r3[0]=='1') {
        p1v3=[p1vec3[2],(p1vec3[2]+10),(p1vec3[2]+20)];
    }else if (p1r3[0]=='2') {
        p1v3=[(p1vec3[2]-10),p1vec3[2],(p1vec3[2]+10)];
    }
    else if (p1r3[0]=='3') {
        p1v3=[(p1vec3[2]-20),(p1vec3[2]-10),p1vec3[2]];
    }
    for (var i = 0; i < p1v3.length; i++) {
        $('#p1i2'+(i+1)).html(p1v3[i]);
    }
    var p1r4=['1','2','3'];
    p1r4.sort(f_randomico);
    var p1v4=[];
    if (p1r4[0]=='1') {
        p1v4=[p1vec3[3],(p1vec3[3]+10),(p1vec3[3]+20)];
    }else if (p1r4[0]=='2') {
        p1v4=[(p1vec3[3]-10),p1vec3[3],(p1vec3[3]+10)];
    }
    else if (p1r4[0]=='3') {
        p1v4=[(p1vec3[3]-20),(p1vec3[3]-10),p1vec3[3]];
    }
    for (var i = 0; i < p1v4.length; i++) {
        $('#p1i3'+(i+1)).html(p1v4[i]);
    }
    bt_comprobar.addEventListener("click", f_comprobar);
    
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1res1=$('.pinta').html();
        var p1res2=$('.pinta1').html();
        var p1res3=$('.pinta2').html();
        var p1res4=$('.pinta3').html();
        if (!p1res1) {
            inc++;
            f_no($('.1'));
        }else{
            if (p1res1==p1vec3[0]) {
                cor++;
                f_ok($('.pinta'));
                $('.pinta').removeClass('pinta');
            }else{
                inc++;
                f_no($('.pinta'));
                $('.pinta').removeClass('pinta');
            }
        }
        if (!p1res2) {
            inc++;
            f_no($('.2'));
        }else{
            if (p1res2==p1vec3[1]) {
                cor++;
                f_ok($('.pinta1'));
                $('.pinta1').removeClass('pinta1');
            }else{
                inc++;
                f_no($('.pinta1'));
                $('.pinta1').removeClass('pinta1');
            }
        }
        if (!p1res3) {
            inc++;
            f_no($('.3'));
        }else{
            if (p1res3==p1vec3[2]) {
                cor++;
                f_ok($('.pinta2'));
                $('.pinta2').removeClass('pinta2');
            }else{
                inc++;
                f_no($('.pinta2'));
                $('.pinta2').removeClass('pinta2');
            }
        }
        if (!p1res4) {
            inc++;
            f_no($('.4'));
        }else{
            if (p1res4==p1vec3[3]) {
                cor++;
                f_ok($('.pinta3'));
                $('.pinta3').removeClass('pinta3');
            }else{
                inc++;
                f_no($('.pinta3'));
                $('.pinta3').removeClass('pinta3');
            }
        }
        Calculo_nota();
    }
}