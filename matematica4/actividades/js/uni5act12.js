    var calificacion = 10,
        cor = 0,
        inc = 0,
        cont = 0,
        ejer = 1,
        itemsT = 10;
    f_iniciar();
    var claseAnimada = 'animate bounceIn';

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    
    function f_iniciar() {
        var p1vec1=[(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2)];
        for (var i = 0; i < p1vec1.length; i++) {
            $('#p1im'+(i+1)).html(p1vec1[i]);
        }
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar() {
            cont++;
            AgregaClase(".nota", claseAnimada);
            QuitaClase(".actividad", claseAnimada);
            bt_comprobar.removeEventListener("click", f_comprobar);
            var p1dcon1=$('#p1dcon1').val();
            var p1dcon2=$('#p1dcon2').val();
            var p1dcon3=$('#p1dcon3').val();
            var p1cont1=0;
            if (p1dcon1==p1vec1[0]*4) {
                p1cont1++;
                f_ok($('#p1dcon1'));
            }else{
                p1cont1;
                f_no($('#p1dcon1'));
            }
            if (p1dcon2==p1vec1[1]*4) {
                p1cont1++;
                f_ok($('#p1dcon2'));
            }else{
                p1cont1;
                f_no($('#p1dcon2'));
            }
            if (p1dcon3==p1vec1[2]*4) {
                p1cont1++;
                f_ok($('#p1dcon3'));
            }else{
                p1cont1;
                f_no($('#p1dcon3'));
            }
            var p11dcon1=$('#p11dcon1').val();
            var p11dcon2=$('#p11dcon2').val();
            var p11dcon3=$('#p11dcon3').val();
            if (p11dcon1==p1vec1[3]*100) {
                p1cont1++;
                f_ok($('#p11dcon1'));
            }else{
                p1cont1;
                f_no($('#p11dcon1'));
            }
            if (p11dcon2==p1vec1[4]*100) {
                p1cont1++;
                f_ok($('#p11dcon2'));
            }else{
                p1cont1;
                f_no($('#p11dcon2'));
            }
            if (p11dcon3==p1vec1[5]*100) {
                p1cont1++;
                f_ok($('#p11dcon3'));
            }else{
                p1cont1;
                f_no($('#p11dcon3'));
            }
            var p12dcon1=$('#p12dcon1').val();
            var p12dcon2=$('#p12dcon2').val();
            var p12dcon3=$('#p12dcon3').val();
            if (p12dcon1==p1vec1[6]*25) {
                p1cont1++;
                f_ok($('#p12dcon1'));
            }else{
                p1cont1;
                f_no($('#p12dcon1'));
            }
            if (p12dcon2==p1vec1[7]*25) {
                p1cont1++;
                f_ok($('#p12dcon2'));
            }else{
                p1cont1;
                f_no($('#p12dcon2'));
            }
            if (p12dcon3==p1vec1[8]*25) {
                p1cont1++;
                f_ok($('#p12dcon3'));
            }else{
                p1cont1;
                f_no($('#p12dcon3'));
            }
            var p13dcon1=$('#p13dcon1').val();
            var p13dcon2=$('#p13dcon2').val();
            var p13dcon3=$('#p13dcon3').val();
            if (p13dcon1==(p1vec1[9]*2.2).toFixed(1)) {
                p1cont1++;
                f_ok($('#p13dcon1'));
            }else{
                p1cont1;
                f_no($('#p13dcon1'));
            }
            if (p13dcon2==(p1vec1[10]*2.2).toFixed(1)) {
                p1cont1++;
                f_ok($('#p13dcon2'));
            }else{
                p1cont1;
                f_no($('#p13dcon2'));
            }
            if (p13dcon3==(p1vec1[11]*2.2).toFixed(1)) {
                p1cont1++;
                f_ok($('#p13dcon3'));
            }else{
                p1cont1;
                f_no($('#p13dcon3'));
            }
            var result1 = (p1cont1 * 4) / 12;
            cor = cor + result1;
            inc = inc + (4 - result1);
            $('#pre1a').val(result1.toFixed(2));
            $('#pre1a').css('display', '');

            var p2dcon3=$('#p2dcon3').val();
            var p21dcon3=$('#p21dcon3').val();
            var p2cont1=0;
            if (p2dcon3=='6') {
                p2cont1++;
                f_ok($('#p2dcon3'));
            }else{
                p2cont1;
                f_no($('#p2dcon3'));
            }
            if (p21dcon3=='75') {
                p2cont1++;
                f_ok($('#p21dcon3'));
            }else{
                p2cont1;
                f_no($('#p21dcon3'));
            }
            var result2 = (p2cont1 * 3) / 2;
            cor = cor + result2;
            inc = inc + (3 - result2);
            $('#pre2a').val(result2.toFixed(2));
            $('#pre2a').css('display', '');

            var p3dcon1=$('#p3dcon1').val();
            var p3dcon2=$('#p3dcon2').val();
            var p3dcon3=$('#p3dcon3').val();
            var p3dcon4=$('#p3dcon4').val();
            var p3dcon5=$('#p3dcon5').val();
            var p3dcon6=$('#p3dcon6').val();
            var p3dcon7=$('#p3dcon7').val();
            var p3dcon8=$('#p3dcon8').val();
            var p3dcon9=$('#p3dcon9').val();
            var p3dcon10=$('#p3dcon10').val();
            var p3dcon11=$('#p3dcon11').val();
            var p3dcon12=$('#p3dcon12').val();
            var p3cont1=0;
            if (p3dcon1=='2') {
                p3cont1++;
                f_ok($('#p3dcon1'));
            }else{
                p3cont1;
                f_no($('#p3dcon1'));
            }
            if (p3dcon2=='50') {
                p3cont1++;
                f_ok($('#p3dcon2'));
            }else{
                p3cont1;
                f_no($('#p3dcon2'));
            }
            if (p3dcon3=='1') {
                p3cont1++;
                f_ok($('#p3dcon3'));
            }else{
                p3cont1;
                f_no($('#p3dcon3'));
            }
            if (p3dcon4=='100') {
                p3cont1++;
                f_ok($('#p3dcon4'));
            }else{
                p3cont1;
                f_no($('#p3dcon4'));
            }
            if (p3dcon5=='2') {
                p3cont1++;
                f_ok($('#p3dcon5'));
            }else{
                p3cont1;
                f_no($('#p3dcon5'));
            }
            if (p3dcon6=='2') {
                p3cont1++;
                f_ok($('#p3dcon6'));
            }else{
                p3cont1;
                f_no($('#p3dcon6'));
            }
            if (p3dcon7=='2') {
                p3cont1++;
                f_ok($('#p3dcon7'));
            }else{
                p3cont1;
                f_no($('#p3dcon7'));
            }
            if (p3dcon8=='2') {
                p3cont1++;
                f_ok($('#p3dcon8'));
            }else{
                p3cont1;
                f_no($('#p3dcon8'));
            }
            if (p3dcon9=='7') {
                p3cont1++;
                f_ok($('#p3dcon9'));
            }else{
                p3cont1;
                f_no($('#p3dcon9'));
            }
            if (p3dcon10=='7') {
                p3cont1++;
                f_ok($('#p3dcon10'));
            }else{
                p3cont1;
                f_no($('#p3dcon10'));
            }
            if (p3dcon11=='161') {
                p3cont1++;
                f_ok($('#p3dcon11'));
            }else{
                p3cont1;
                f_no($('#p3dcon11'));
            }
            if (p3dcon12=='161') {
                p3cont1++;
                f_ok($('#p3dcon12'));
            }else{
                p3cont1;
                f_no($('#p3dcon12'));
            }
            var result3 = (p3cont1 * 3) / 12;
            cor = cor + result3;
            inc = inc + (3 - result3);
            $('#pre3a').val(result3.toFixed(2));
            $('#pre3a').css('display', '');
            Calculo_nota()
        }

    }