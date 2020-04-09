var n1 = 0,
    n2 = 0,
    sum_total = 0,
    sum_total2 = 0,
    sum_total3 = 0,
    sum_total4 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 10,
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

function f_iniciar() {
    var p1vec1 = [];
    var myArray1 = [];
    var myArray2 = [];
    for (var i = 10; i <= 80; i++) {
        p1vec1.push(i);
        
    }
    var p1vec3=[];
    var p1vec4=[];
    var p1ct1=0;
    var p1ct2=0;
    for (var i = 0; i < p1vec1.length; i++) {
        if (p1vec1[i]%2==0) {
            p1vec3.push(p1vec1[i]);
            myArray1.push(p1ct1++);
        }else{
            p1vec4.push(p1vec1[i]);
            myArray2.push(p1ct2++);
        }
    }
    
    var p1vec2 = [];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    var p1rp1=[];
    var p1rp2=[];
    //aleatorio literal 1
    for (var i = 1; i <= 5; i++) {
        var c = myArray1[i - 1];
        p1vec2.push(p1vec3[c]);
        p1rp1.push(p1vec3[c]);
    };
    var i, j, k;
    for (i = myArray2.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray2[i - 1];
        myArray2[i - 1] = myArray2[j];
        myArray2[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 5; i++) {
        var c1 = myArray2[i - 1];
        p1vec2.push(p1vec4[c1]);
        p1rp2.push(p1vec4[c1]);
    };
    p1vec2.sort(f_randomico);
    for (var i = 0; i < p1vec2.length; i++) {
        $('#p1im'+(i+1)).html(p1vec2[i]);
    }
    
    var p1cv1=p1vec2[0].toString().split('');
    p1cv1[1]='<span style="background:#C5D264;">'+p1cv1[1]+'</span>';
    $('#p11im1').html(p1cv1);
    var p1cv2=p1vec2[1].toString().split('');
    p1cv2[1]='<span style="background:#C5D264;">'+p1cv2[1]+'</span>';
    $('#p11im2').html(p1cv2);
    var p1cv3=p1vec2[2].toString().split('');
    p1cv3[1]='<span style="background:#C5D264;">'+p1cv3[1]+'</span>';
    $('#p11im3').html(p1cv3);
    var p1cv4=p1vec2[3].toString().split('');
    p1cv4[1]='<span style="background:#C5D264;">'+p1cv4[1]+'</span>';
    $('#p11im4').html(p1cv4);
    var p1cv5=p1vec2[4].toString().split('');
    p1cv5[1]='<span style="background:#C5D264;">'+p1cv5[1]+'</span>';
    $('#p11im5').html(p1cv5);
    var p1cv6=p1vec2[5].toString().split('');
    p1cv6[1]='<span style="background:#C5D264;">'+p1cv6[1]+'</span>';
    $('#p11im6').html(p1cv6);
    var p1cv7=p1vec2[6].toString().split('');
    p1cv7[1]='<span style="background:#C5D264;">'+p1cv7[1]+'</span>';
    $('#p11im7').html(p1cv7);
    var p1cv8=p1vec2[7].toString().split('');
    p1cv8[1]='<span style="background:#C5D264;">'+p1cv8[1]+'</span>';
    $('#p11im8').html(p1cv8);
    var p1cv9=p1vec2[8].toString().split('');
    p1cv9[1]='<span style="background:#C5D264;">'+p1cv9[1]+'</span>';
    $('#p11im9').html(p1cv9);
    var p1cv10=p1vec2[9].toString().split('');
    p1cv10[1]='<span style="background:#C5D264;">'+p1cv10[1]+'</span>';
    $('#p11im10').html(p1cv10);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        for (var i = 0; i < 5; i++) {
            var p1res1=$('#p1dcon'+(i+1)).val();
            var p1cont1=0;
            for (var j = 0; j < p1rp1.length; j++) {
                if (p1res1==p1rp1[j]) {
                    p1cont1++;
                    p1rp1[j]=5;
                }else{
                    p1cont1;
                }
            }
            if (p1cont1=='1') {
                cor++;
                f_ok($('#p1dcon'+(i+1)));
            }else{
                inc++;
                f_no($('#p1dcon'+(i+1)));
            }
        }
        for (var i = 0; i < 5; i++) {
            var p1res2=$('#p1dcon1'+(i+1)).val();
            var p1cont2=0;
            for (var j = 0; j < p1rp2.length; j++) {
                if (p1res2==p1rp2[j]) {
                    p1cont2++;
                    p1rp2[j]=5;
                }else{
                    p1cont2;
                }
            }
            if (p1cont2=='1') {
                cor++;
                f_ok($('#p1dcon1'+(i+1)));
            }else{
                inc++;
                f_no($('#p1dcon1'+(i+1)));
            }
        }
        Calculo_nota();
    }
}