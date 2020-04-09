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
            var p1dcon8=$('#p1dcon8').val();
            var p1dcon9=$('#p1dcon9').val();
            var p1dcon10=$('#p1dcon10').val();
            var p1cont1=0;
            if (p1dcon1=='5') {
                p1cont1++;
                f_ok($('#p1dcon1'));
            }else{
                p1cont1;
                f_no($('#p1dcon1'));
            }
            if (p1dcon2=='10') {
                p1cont1++;
                f_ok($('#p1dcon2'));
            }else{
                p1cont1;
                f_no($('#p1dcon2'));
            }
            if (p1dcon3=='5') {
                p1cont1++;
                f_ok($('#p1dcon3'));
            }else{
                p1cont1;
                f_no($('#p1dcon3'));
            }
            if (p1dcon4=='5') {
                p1cont1++;
                f_ok($('#p1dcon4'));
            }else{
                p1cont1;
                f_no($('#p1dcon4'));
            }
            if (p1dcon5=='15') {
                p1cont1++;
                f_ok($('#p1dcon5'));
            }else{
                p1cont1;
                f_no($('#p1dcon5'));
            }
            if (p1dcon6=='5') {
                p1cont1++;
                f_ok($('#p1dcon6'));
            }else{
                p1cont1;
                f_no($('#p1dcon6'));
            }
            if (p1dcon7=='3') {
                p1cont1++;
                f_ok($('#p1dcon7'));
            }else{
                p1cont1;
                f_no($('#p1dcon7'));
            }
            if (p1dcon8=='5') {
                p1cont1++;
                f_ok($('#p1dcon8'));
            }else{
                p1cont1;
                f_no($('#p1dcon8'));
            }
            if (p1dcon9=='5') {
                p1cont1++;
                f_ok($('#p1dcon9'));
            }else{
                p1cont1;
                f_no($('#p1dcon9'));
            }
            if (p1dcon10=='0') {
                p1cont1++;
                f_ok($('#p1dcon10'));
            }else{
                p1cont1;
                f_no($('#p1dcon10'));
            }
            var result1 = (p1cont1 * 5) / 10;
            cor = cor + result1;
            inc = inc + (5 - result1);
            $('#pre1a').val(result1.toFixed(2));
            $('#pre1a').css('display', '');
            var p2dcon1=$('#p2dcon1').val();
            var p2dcon2=$('#p2dcon2').val();
            var p2dcon3=$('#p2dcon3').val();
            var p2dcon4=$('#p2dcon4').val();
            var p2cont1=0;
            if (p2dcon1=='24') {
                p2cont1++;
                f_ok($('#p2dcon1'));
            }else{
                p2cont1;
                f_no($('#p2dcon1'));
            }
            if (p2dcon2=='6') {
                p2cont1++;
                f_ok($('#p2dcon2'));
            }else{
                p2cont1;
                f_no($('#p2dcon2'));
            }
            if (p2dcon3=='4') {
                p2cont1++;
                f_ok($('#p2dcon3'));
            }else{
                p2cont1;
                f_no($('#p2dcon3'));
            }
            if (p2dcon4=='4') {
                p2cont1++;
                f_ok($('#p2dcon4'));
            }else{
                p2cont1;
                f_no($('#p2dcon4'));
            }
            var result2 = (p2cont1 * 5) / 4;
            cor = cor + result2;
            inc = inc + (5 - result2);
            $('#pre2a').val(result2.toFixed(2));
            $('#pre2a').css('display', '');
            Calculo_nota()
        }

    }