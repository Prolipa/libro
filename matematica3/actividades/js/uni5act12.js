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
    var p1vec1=[(Math.floor(Math.random() * 99) + 2),(Math.floor(Math.random() * 99) + 2),(Math.floor(Math.random() * 99) + 2),(Math.floor(Math.random() * 99) + 2),(Math.floor(Math.random() * 99) + 2)];
    for (var i = 0; i < p1vec1.length; i++) {
        $('#p1im'+(i+1)).html(p1vec1[i]);
    }
    var p2n1=(Math.floor(Math.random() * 60) + 10);
    $('#p2im1').text(p2n1);
    $('#p2im2').text('$ '+p2n1);
    bt_comprobar.addEventListener("click", f_comprobar);
    
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1dcon1=$('#p1dcon1').val();
        var p1dcon2=$('#p1dcon2').val();
        var p1dcon3=$('#p1dcon3').val();
        var p1dcon4=$('#p1dcon4').val();
        var p1dcon5=$('#p1dcon5').val();
        var p1dcon6=$('#p1dcon6').val();
        var p1dcon7=$('#p1dcon7').val();
        var p1cont1=0;
        if (p1dcon1==p1vec1[0]) {
            p1cont1++;
            f_ok($('#p1dcon1'));
        }else{
            p1cont1;
            f_no($('#p1dcon1'));
        }
        if (p1dcon2==p1vec1[0]) {
            p1cont1++;
            f_ok($('#p1dcon2'));
        }else{
            p1cont1;
            f_no($('#p1dcon2'));
        }
        if (p1dcon3==(p1vec1[0]*2)) {
            p1cont1++;
            f_ok($('#p1dcon3'));
        }else{
            p1cont1;
            f_no($('#p1dcon3'));
        }
        if (p1dcon4==p1vec1[0]) {
            p1cont1++;
            f_ok($('#p1dcon4'));
        }else{
            p1cont1;
            f_no($('#p1dcon4'));
        }
        if (p1dcon5==p1vec1[0]) {
            p1cont1++;
            f_ok($('#p1dcon5'));
        }else{
            p1cont1;
            f_no($('#p1dcon5'));
        }
        if (p1dcon6==p1vec1[0]) {
            p1cont1++;
            f_ok($('#p1dcon6'));
        }else{
            p1cont1;
            f_no($('#p1dcon6'));
        }
        if (p1dcon7==(p1vec1[0]*3)) {
            p1cont1++;
            f_ok($('#p1dcon7'));
        }else{
            p1cont1;
            f_no($('#p1dcon7'));
        }
        var p1dcon11=$('#p1dcon11').val();
        var p1dcon12=$('#p1dcon12').val();
        var p1dcon13=$('#p1dcon13').val();
        var p1dcon14=$('#p1dcon14').val();
        var p1dcon15=$('#p1dcon15').val();
        var p1dcon16=$('#p1dcon16').val();
        var p1dcon17=$('#p1dcon17').val();
        if (p1dcon11==p1vec1[1]) {
            p1cont1++;
            f_ok($('#p1dcon11'));
        }else{
            p1cont1;
            f_no($('#p1dcon11'));
        }
        if (p1dcon12==p1vec1[1]) {
            p1cont1++;
            f_ok($('#p1dcon12'));
        }else{
            p1cont1;
            f_no($('#p1dcon12'));
        }
        if (p1dcon13==(p1vec1[1]*2)) {
            p1cont1++;
            f_ok($('#p1dcon13'));
        }else{
            p1cont1;
            f_no($('#p1dcon13'));
        }
        if (p1dcon14==p1vec1[1]) {
            p1cont1++;
            f_ok($('#p1dcon14'));
        }else{
            p1cont1;
            f_no($('#p1dcon14'));
        }
        if (p1dcon15==p1vec1[1]) {
            p1cont1++;
            f_ok($('#p1dcon15'));
        }else{
            p1cont1;
            f_no($('#p1dcon15'));
        }
        if (p1dcon16==p1vec1[1]) {
            p1cont1++;
            f_ok($('#p1dcon16'));
        }else{
            p1cont1;
            f_no($('#p1dcon16'));
        }
        if (p1dcon17==(p1vec1[1]*3)) {
            p1cont1++;
            f_ok($('#p1dcon17'));
        }else{
            p1cont1;
            f_no($('#p1dcon17'));
        }
        var p1dcon21=$('#p1dcon21').val();
        var p1dcon22=$('#p1dcon22').val();
        var p1dcon23=$('#p1dcon23').val();
        var p1dcon24=$('#p1dcon24').val();
        var p1dcon25=$('#p1dcon25').val();
        var p1dcon26=$('#p1dcon26').val();
        var p1dcon27=$('#p1dcon27').val();
        if (p1dcon21==p1vec1[2]) {
            p1cont1++;
            f_ok($('#p1dcon21'));
        }else{
            p1cont1;
            f_no($('#p1dcon21'));
        }
        if (p1dcon22==p1vec1[2]) {
            p1cont1++;
            f_ok($('#p1dcon22'));
        }else{
            p1cont1;
            f_no($('#p1dcon22'));
        }
        if (p1dcon23==(p1vec1[2]*2)) {
            p1cont1++;
            f_ok($('#p1dcon23'));
        }else{
            p1cont1;
            f_no($('#p1dcon23'));
        }
        if (p1dcon24==p1vec1[2]) {
            p1cont1++;
            f_ok($('#p1dcon24'));
        }else{
            p1cont1;
            f_no($('#p1dcon24'));
        }
        if (p1dcon25==p1vec1[2]) {
            p1cont1++;
            f_ok($('#p1dcon25'));
        }else{
            p1cont1;
            f_no($('#p1dcon25'));
        }
        if (p1dcon26==p1vec1[2]) {
            p1cont1++;
            f_ok($('#p1dcon26'));
        }else{
            p1cont1;
            f_no($('#p1dcon26'));
        }
        if (p1dcon27==(p1vec1[2]*3)) {
            p1cont1++;
            f_ok($('#p1dcon27'));
        }else{
            p1cont1;
            f_no($('#p1dcon27'));
        }
        var p1dcon31=$('#p1dcon31').val();
        var p1dcon32=$('#p1dcon32').val();
        var p1dcon33=$('#p1dcon33').val();
        var p1dcon34=$('#p1dcon34').val();
        var p1dcon35=$('#p1dcon35').val();
        var p1dcon36=$('#p1dcon36').val();
        var p1dcon37=$('#p1dcon37').val();
        if (p1dcon31==p1vec1[3]) {
            p1cont1++;
            f_ok($('#p1dcon31'));
        }else{
            p1cont1;
            f_no($('#p1dcon31'));
        }
        if (p1dcon32==p1vec1[3]) {
            p1cont1++;
            f_ok($('#p1dcon32'));
        }else{
            p1cont1;
            f_no($('#p1dcon32'));
        }
        if (p1dcon33==(p1vec1[3]*2)) {
            p1cont1++;
            f_ok($('#p1dcon33'));
        }else{
            p1cont1;
            f_no($('#p1dcon33'));
        }
        if (p1dcon34==p1vec1[3]) {
            p1cont1++;
            f_ok($('#p1dcon34'));
        }else{
            p1cont1;
            f_no($('#p1dcon34'));
        }
        if (p1dcon35==p1vec1[3]) {
            p1cont1++;
            f_ok($('#p1dcon35'));
        }else{
            p1cont1;
            f_no($('#p1dcon35'));
        }
        if (p1dcon36==p1vec1[3]) {
            p1cont1++;
            f_ok($('#p1dcon36'));
        }else{
            p1cont1;
            f_no($('#p1dcon36'));
        }
        if (p1dcon37==(p1vec1[3]*3)) {
            p1cont1++;
            f_ok($('#p1dcon37'));
        }else{
            p1cont1;
            f_no($('#p1dcon37'));
        }
        var p1dcon41=$('#p1dcon41').val();
        var p1dcon42=$('#p1dcon42').val();
        var p1dcon43=$('#p1dcon43').val();
        var p1dcon44=$('#p1dcon44').val();
        var p1dcon45=$('#p1dcon45').val();
        var p1dcon46=$('#p1dcon46').val();
        var p1dcon47=$('#p1dcon47').val();
        if (p1dcon41==p1vec1[4]) {
            p1cont1++;
            f_ok($('#p1dcon41'));
        }else{
            p1cont1;
            f_no($('#p1dcon41'));
        }
        if (p1dcon42==p1vec1[4]) {
            p1cont1++;
            f_ok($('#p1dcon42'));
        }else{
            p1cont1;
            f_no($('#p1dcon42'));
        }
        if (p1dcon43==(p1vec1[4]*2)) {
            p1cont1++;
            f_ok($('#p1dcon43'));
        }else{
            p1cont1;
            f_no($('#p1dcon43'));
        }
        if (p1dcon44==p1vec1[4]) {
            p1cont1++;
            f_ok($('#p1dcon44'));
        }else{
            p1cont1;
            f_no($('#p1dcon44'));
        }
        if (p1dcon45==p1vec1[4]) {
            p1cont1++;
            f_ok($('#p1dcon45'));
        }else{
            p1cont1;
            f_no($('#p1dcon45'));
        }
        if (p1dcon46==p1vec1[4]) {
            p1cont1++;
            f_ok($('#p1dcon46'));
        }else{
            p1cont1;
            f_no($('#p1dcon46'));
        }
        if (p1dcon47==(p1vec1[4]*3)) {
            p1cont1++;
            f_ok($('#p1dcon47'));
        }else{
            p1cont1;
            f_no($('#p1dcon47'));
        }
        var result1 = (p1cont1 * 7) / 35;
        cor = cor + result1;
        inc = inc + (7 - result1);
        $('#pre1a').val(result1.toFixed(2));
        $('#pre1a').css('display', '');

        var p2dcon1=$('#p2dcon1').val();
        var p2dcon2=$('#p2dcon2').val();
        var p2dcon3=$('#p2dcon3').val();
        var p2dcon4=$('#p2dcon4').val();
        var p2dcon5=$('#p2dcon5').val();
        var p2dcon6=$('#p2dcon6').val();
        var p2dcon7=$('#p2dcon7').val();
        var p2dcon8=$('#p2dcon8').val();
        var p2dcon9=$('#p2dcon9').val();
        var p2cont1=0;
        if (p2dcon1==p2n1) {
            p2cont1++;
            f_ok($('#p2dcon1'));
        }else{
            p2cont1;
            f_no($('#p2dcon1'));
        }
        if (p2dcon2==p2n1) {
            p2cont1++;
            f_ok($('#p2dcon2'));
        }else{
            p2cont1;
            f_no($('#p2dcon2'));
        }
        if (p2dcon3==(p2n1*2)) {
            p2cont1++;
            f_ok($('#p2dcon3'));
        }else{
            p2cont1;
            f_no($('#p2dcon3'));
        }
        if (p2dcon4==p2n1) {
            p2cont1++;
            f_ok($('#p2dcon4'));
        }else{
            p2cont1;
            f_no($('#p2dcon4'));
        }
        if (p2dcon5==p2n1) {
            p2cont1++;
            f_ok($('#p2dcon5'));
        }else{
            p2cont1;
            f_no($('#p2dcon5'));
        }
        if (p2dcon6==p2n1) {
            p2cont1++;
            f_ok($('#p2dcon6'));
        }else{
            p2cont1;
            f_no($('#p2dcon6'));
        }
        if (p2dcon7==(p2n1*3)) {
            p2cont1++;
            f_ok($('#p2dcon7'));
        }else{
            p2cont1;
            f_no($('#p2dcon7'));
        }
        if (p2dcon8==(p2n1*2)) {
            p2cont1++;
            f_ok($('#p2dcon8'));
        }else{
            p2cont1;
            f_no($('#p2dcon8'));
        }
        if (p2dcon9==(p2n1*3)) {
            p2cont1++;
            f_ok($('#p2dcon9'));
        }else{
            p2cont1;
            f_no($('#p2dcon9'));
        }
        var result2 = (p2cont1 * 3) / 9;
        cor = cor + result2;
        inc = inc + (3 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');
        Calculo_nota();
    }
}