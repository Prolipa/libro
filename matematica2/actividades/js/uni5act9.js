var n1 = 0,
    n2 = 0,
    sum_total = 0,
    sum_total2 = 0,
    sum_total3 = 0,
    sum_total4 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 8,
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
    var p1vec1=[];
    var myArray1 = [];
    for (var i = 40; i < 98; i++) {
        p1vec1.push(i);
        myArray1.push(i-40);
    }
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    
    var p1vec2=[];
    var myArray2 = [];
    for (var i = 10; i < 39; i++) {
        p1vec2.push(i);
        myArray2.push(i-10);
    }
    var i, j, k;
    for (i = myArray2.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray2[i - 1];
        myArray2[i - 1] = myArray2[j];
        myArray2[j] = k;
    }
    var c = myArray1[5];
    var p1n1=p1vec1[c];
    var c1 = myArray2[6];
    var p1n2=p1vec2[c1];
    var p1d1=p1n1.toString().split('');
    var p1d2=p1n2.toString().split('');
    if (p1d1[1]<p1d2[1]) {
        var p1c1=p1d1[1];
        var p1c2=p1d2[1];
        p1d1[1]=p1c2;
        p1d2[1]=p1c1;
        p1n1=p1d1.join('');
        p1n2=p1d2.join('');
    }
    var p1n3=parseInt(p1n1)-parseInt(p1n2);
    var p1sp1=p1n3.toString().split('');
    var p1sp2=p1n2.toString().split('');

    var p1vc1=[];
    for (var i = 0; i < parseInt(p1sp1[0]); i++) {
        p1vc1.push('<img src="img/i2_p189_u5a9.jpg">');
    }
    for (var i = 0; i < parseInt(p1sp2[0]); i++) {
        p1vc1.push('<img src="img/i3_p189_u5a9.jpg">');
    }
    for (var i = 0; i < parseInt(p1sp1[1]); i++) {
        p1vc1.push('<img src="img/i5_p189_u5a9.jpg">');
    }
    for (var i = 0; i < parseInt(p1sp2[1]); i++) {
        p1vc1.push('<img src="img/i4_p189_u5a9.jpg">');
    }
    $('#p1im1').html(p1vc1);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var nlrd0=[$('#nlrd0').val(),$('#nlrd1').val()];
        nlrd0=nlrd0.join('');
        var nlrd1=[$('#nlrd2').val(),$('#nlrd3').val()];
        nlrd1=nlrd1.join('');
        if (nlrd0==p1n1) {
            cor++;
            f_ok($('#nlrd0'));
            f_ok($('#nlrd1'));
        }else{
            inc++;
            f_no($('#nlrd0'));
            f_no($('#nlrd1'));
        }
        if (nlrd1==p1n2) {
            cor++;
            f_ok($('#nlrd2'));
            f_ok($('#nlrd3'));
        }else{
            inc++;
            f_no($('#nlrd2'));
            f_no($('#nlrd3'));
        }

        var nlrd2=[$('#nlrd4').val(),$('#nlrd5').val()];
        nlrd2=nlrd2.join('');
        var nlrd3=[$('#nlrd6').val(),$('#nlrd7').val()];
        nlrd3=nlrd3.join('');
        var nlrd4=$('#nlrd8').val();
        if (nlrd2==p1n1) {
            cor++;
            f_ok($('#nlrd4'));
            f_ok($('#nlrd5'));
        }else{
            inc++;
            f_no($('#nlrd4'));
            f_no($('#nlrd5'));
        }
        if (nlrd3==p1n2) {
            cor++;
            f_ok($('#nlrd6'));
            f_ok($('#nlrd7'));
        }else{
            inc++;
            f_no($('#nlrd6'));
            f_no($('#nlrd7'));
        }
        if (nlrd4==p1sp1[1]) {
            cor++;
            f_ok($('#nlrd8'));
        }else{
            inc++;
            f_no($('#nlrd8'));
        }
        var nlrd5=[$('#nlrd9').val(),$('#nlrd10').val()];
        nlrd5=nlrd5.join('');
        var nlrd6=[$('#nlrd11').val(),$('#nlrd12').val()];
        nlrd6=nlrd6.join('');
        var nlrd7=[$('#nlrd13').val(),$('#nlrd14').val()];
        nlrd7=nlrd7.join('');
        if (nlrd5==p1n1) {
            cor++;
            f_ok($('#nlrd9'));
            f_ok($('#nlrd10'));
        }else{
            inc++;
            f_no($('#nlrd9'));
            f_no($('#nlrd10'));
        }
        if (nlrd6==p1n2) {
            cor++;
            f_ok($('#nlrd11'));
            f_ok($('#nlrd12'));
        }else{
            inc++;
            f_no($('#nlrd11'));
            f_no($('#nlrd12'));
        }
        if (nlrd7==p1n3) {
            cor++;
            f_ok($('#nlrd13'));
            f_ok($('#nlrd14'));
        }else{
            inc++;
            f_no($('#nlrd13'));
            f_no($('#nlrd14'));
        }
        Calculo_nota();
    }
}