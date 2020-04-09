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
    var p1vc1=[];
    //aleatorio literal 1
    for (var i = 1; i <= 5; i++) {
        var c = myArray1[i - 1];
        p1vc1.push(p1vec1[c]);
        var c1 = myArray2[i - 1];
        p1vc1.push(p1vec2[c1]);
    };
    for (var i = 0; i < p1vc1.length; i++) {
        $('#p1im'+(i+1)).html(p1vc1[i]);
    }
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var nlrd1=[$('#nlrd0').val(),$('#nlrd1').val()];
        nlrd1=nlrd1.join('');
        var nlrd2=[$('#nlrd2').val(),$('#nlrd3').val()];
        nlrd2=nlrd2.join('');
        var nlrd3=[$('#nlrd4').val(),$('#nlrd5').val()];
        nlrd3=nlrd3.join('');
        var p1cont1=0;
        if (nlrd1==p1vc1[0]) {
            p1cont1++;
            f_ok($('#nlrd0'));
            f_ok($('#nlrd1'));
        }else{
            p1cont1;
            f_no($('#nlrd0'));
            f_no($('#nlrd1'));
        }
        if (nlrd2==p1vc1[1]) {
            p1cont1++;
            f_ok($('#nlrd2'));
            f_ok($('#nlrd3'));
        }else{
            p1cont1;
            f_no($('#nlrd2'));
            f_no($('#nlrd3'));
        }
        if (nlrd3==(p1vc1[0]-p1vc1[1])) {
            p1cont1++;
            f_ok($('#nlrd4'));
            f_ok($('#nlrd5'));
        }else{
            p1cont1;
            f_no($('#nlrd4'));
            f_no($('#nlrd5'));
        }

        var nlrd4=[$('#nlrd10').val(),$('#nlrd11').val()];
        nlrd4=nlrd4.join('');
        var nlrd5=[$('#nlrd12').val(),$('#nlrd13').val()];
        nlrd5=nlrd5.join('');
        var nlrd6=[$('#nlrd14').val(),$('#nlrd15').val()];
        nlrd6=nlrd6.join('');
        if (nlrd4==p1vc1[2]) {
            p1cont1++;
            f_ok($('#nlrd10'));
            f_ok($('#nlrd11'));
        }else{
            p1cont1;
            f_no($('#nlrd10'));
            f_no($('#nlrd11'));
        }
        if (nlrd5==p1vc1[3]) {
            p1cont1++;
            f_ok($('#nlrd12'));
            f_ok($('#nlrd13'));
        }else{
            p1cont1;
            f_no($('#nlrd12'));
            f_no($('#nlrd13'));
        }
        if (nlrd6==(p1vc1[2]-p1vc1[3])) {
            p1cont1++;
            f_ok($('#nlrd14'));
            f_ok($('#nlrd15'));
        }else{
            p1cont1;
            f_no($('#nlrd14'));
            f_no($('#nlrd15'));
        }

        var nlrd7=[$('#nlrd20').val(),$('#nlrd21').val()];
        nlrd7=nlrd7.join('');
        var nlrd8=[$('#nlrd22').val(),$('#nlrd23').val()];
        nlrd8=nlrd8.join('');
        var nlrd9=[$('#nlrd24').val(),$('#nlrd25').val()];
        nlrd9=nlrd9.join('');
        if (nlrd7==p1vc1[4]) {
            p1cont1++;
            f_ok($('#nlrd20'));
            f_ok($('#nlrd21'));
        }else{
            p1cont1;
            f_no($('#nlrd20'));
            f_no($('#nlrd21'));
        }
        if (nlrd8==p1vc1[5]) {
            p1cont1++;
            f_ok($('#nlrd22'));
            f_ok($('#nlrd23'));
        }else{
            p1cont1;
            f_no($('#nlrd22'));
            f_no($('#nlrd23'));
        }
        if (nlrd9==(p1vc1[4]-p1vc1[5])) {
            p1cont1++;
            f_ok($('#nlrd24'));
            f_ok($('#nlrd25'));
        }else{
            p1cont1;
            f_no($('#nlrd24'));
            f_no($('#nlrd25'));
        }
        var nlrd10=[$('#nlrd30').val(),$('#nlrd31').val()];
        nlrd10=nlrd10.join('');
        var nlrd11=[$('#nlrd32').val(),$('#nlrd33').val()];
        nlrd11=nlrd11.join('');
        var nlrd12=[$('#nlrd34').val(),$('#nlrd35').val()];
        nlrd12=nlrd12.join('');
        if (nlrd10==p1vc1[6]) {
            p1cont1++;
            f_ok($('#nlrd30'));
            f_ok($('#nlrd31'));
        }else{
            p1cont1;
            f_no($('#nlrd30'));
            f_no($('#nlrd31'));
        }
        if (nlrd11==p1vc1[7]) {
            p1cont1++;
            f_ok($('#nlrd32'));
            f_ok($('#nlrd33'));
        }else{
            p1cont1;
            f_no($('#nlrd32'));
            f_no($('#nlrd33'));
        }
        if (nlrd12==(p1vc1[6]-p1vc1[7])) {
            p1cont1++;
            f_ok($('#nlrd34'));
            f_ok($('#nlrd35'));
        }else{
            p1cont1;
            f_no($('#nlrd34'));
            f_no($('#nlrd35'));
        }
        var result1 = (p1cont1 * 5) / 12;
        cor = cor + result1;
        inc = inc + (5 - result1);
        $('#pre1a').val(result1.toFixed(2));
        $('#pre1a').css('display', '');

        var nlrd13=[$('#nlrd41').val(),$('#nlrd42').val()];
        nlrd13=nlrd13.join('');
        var nlrd14=[$('#nlrd43').val(),$('#nlrd44').val()];
        nlrd14=nlrd14.join('');
        var nlrd15=[$('#nlrd45').val(),$('#nlrd46').val()];
        nlrd15=nlrd15.join('');
        var p2cont1=0;
        if (nlrd13==p1vc1[8]) {
            p2cont1++;
            f_ok($('#nlrd41'));
            f_ok($('#nlrd42'));
        }else{
            p2cont1;
            f_no($('#nlrd41'));
            f_no($('#nlrd42'));
        }
        if (nlrd14==p1vc1[9]) {
            p2cont1++;
            f_ok($('#nlrd43'));
            f_ok($('#nlrd44'));
        }else{
            p2cont1;
            f_no($('#nlrd43'));
            f_no($('#nlrd44'));
        }
        if (nlrd15==(p1vc1[8]-p1vc1[9])) {
            p2cont1++;
            f_ok($('#nlrd45'));
            f_ok($('#nlrd46'));
        }else{
            p2cont1;
            f_no($('#nlrd45'));
            f_no($('#nlrd46'));
        }

        var p2dcon1=$('#p2dcon1').val();
        if (p2dcon1==(p1vc1[8]-p1vc1[9])) {
            p2cont1++;
            f_ok($('#p2dcon1'));
        }else{
            p2cont1;
            f_no($('#p2dcon1'));
        }
        var result2 = (p2cont1 * 5) / 4;
        cor = cor + result2;
        inc = inc + (5 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');
        Calculo_nota();
    }
}