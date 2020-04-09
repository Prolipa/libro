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
    var p1vec1=[(Math.floor(Math.random() * 40) + 10),(Math.floor(Math.random() * 40) + 10),(Math.floor(Math.random() * 40) + 10),(Math.floor(Math.random() * 40) + 10)];
    var p1vec2=[(Math.floor(Math.random() * 40) + 10),(Math.floor(Math.random() * 40) + 10),(Math.floor(Math.random() * 40) + 10),(Math.floor(Math.random() * 40) + 10)];
    var p1c1=1;
    var p1c2=2;
    for (var i = 0; i < p1vec1.length; i++) {
        $('#p1im'+(p1c1)).html(p1vec1[i]);
        $('#p1im'+(p1c2)).html(p1vec2[i]);
        p1c1=p1c1+2;
        p1c2=p1c2+2;
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
        if (nlrd1==p1vec1[0]) {
            p1cont1++;
            f_ok($('#nlrd0'));
            f_ok($('#nlrd1'));
        }else{
            p1cont1;
            f_no($('#nlrd0'));
            f_no($('#nlrd1'));
        }
        if (nlrd2==p1vec2[0]) {
            p1cont1++;
            f_ok($('#nlrd2'));
            f_ok($('#nlrd3'));
        }else{
            p1cont1;
            f_no($('#nlrd2'));
            f_no($('#nlrd3'));
        }
        if (nlrd3==(p1vec1[0]+p1vec2[0])) {
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
        if (nlrd4==p1vec1[1]) {
            p1cont1++;
            f_ok($('#nlrd10'));
            f_ok($('#nlrd11'));
        }else{
            p1cont1;
            f_no($('#nlrd10'));
            f_no($('#nlrd11'));
        }
        if (nlrd5==p1vec2[1]) {
            p1cont1++;
            f_ok($('#nlrd12'));
            f_ok($('#nlrd13'));
        }else{
            p1cont1;
            f_no($('#nlrd12'));
            f_no($('#nlrd13'));
        }
        if (nlrd6==(p1vec1[1]+p1vec2[1])) {
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
        if (nlrd7==p1vec1[2]) {
            p1cont1++;
            f_ok($('#nlrd20'));
            f_ok($('#nlrd21'));
        }else{
            p1cont1;
            f_no($('#nlrd20'));
            f_no($('#nlrd21'));
        }
        if (nlrd8==p1vec2[2]) {
            p1cont1++;
            f_ok($('#nlrd22'));
            f_ok($('#nlrd23'));
        }else{
            p1cont1;
            f_no($('#nlrd22'));
            f_no($('#nlrd23'));
        }
        if (nlrd9==(p1vec1[2]+p1vec2[2])) {
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
        if (nlrd10==p1vec1[3]) {
            p1cont1++;
            f_ok($('#nlrd30'));
            f_ok($('#nlrd31'));
        }else{
            p1cont1;
            f_no($('#nlrd30'));
            f_no($('#nlrd31'));
        }
        if (nlrd11==p1vec2[3]) {
            p1cont1++;
            f_ok($('#nlrd32'));
            f_ok($('#nlrd33'));
        }else{
            p1cont1;
            f_no($('#nlrd32'));
            f_no($('#nlrd33'));
        }
        if (nlrd12==(p1vec1[3]+p1vec2[3])) {
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
        var p1cont2=0;
        if (nlrd13=='87') {
            p1cont2++;
            f_ok($('#nlrd41'));
            f_ok($('#nlrd42'));
        }else{
            p1cont2;
            f_no($('#nlrd41'));
            f_no($('#nlrd42'));
        }
        var p2dcon1=$('#p2dcon1').val();
        if (p2dcon1=='87') {
            p1cont2++;
            f_ok($('#p2dcon1'));
        }else{
            p1cont2;
            f_no($('#p2dcon1'));
        }
        var result2 = (p1cont2 * 5) / 2;
        cor = cor + result2;
        inc = inc + (5 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');
        Calculo_nota();
    }
}