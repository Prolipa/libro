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
    document.getElementById('pre1a').addEventListener('keypress', () => {
        validNumero(0, 3, 1);
    });
    document.getElementById('pre1a').addEventListener('keyup', () => {
        validMaxIngreso(document.getElementById('pre1a'), 3)
    });
    document.getElementById('pre3a').addEventListener('keypress', () => {
        validNumero(0, 4, 1);
    });
    document.getElementById('pre3a').addEventListener('keyup', () => {
        validMaxIngreso(document.getElementById('pre3a'), 4)
    });
    function f_iniciar() {
        
        bt_comprobar.addEventListener("click", preg1);
        function preg1() {
            cor = 0;
            var pre1a = $('#pre1a').val();
            if (!pre1a) {
                alert('Ingrese la calificación en la pregunta 1.')
            } else {
                cor = cor + parseFloat(pre1a);
                inc = inc + (3 - parseFloat(pre1a));
                $('#pre1a').val(parseFloat(pre1a).toFixed(2));
                $('#pre1a').attr('disabled', 'true');
                preg3();
            }

        }
        function preg3() {
            var pre3a = $('#pre3a').val();
            if (!pre3a) {
                alert('Ingrese la calificación en la pregunta 3.')
            } else {
                cor = cor + parseFloat(pre3a);
                inc = inc + (4 - parseFloat(pre3a));
                $('#pre3a').val(parseFloat(pre3a).toFixed(2));
                $('#pre3a').attr('disabled', 'true');
                f_comprobar();
            }

        }
        function f_comprobar() {
            cont++;
            AgregaClase(".nota", claseAnimada);
            QuitaClase(".actividad", claseAnimada);
            bt_comprobar.removeEventListener("click", preg1);
            var p2dcon1=$('#p2dcon1').val();
            var p2dcon2=$('#p2dcon2').val();
            var p2dcon3=$('#p2dcon3').val();
            var p2dcon4=$('#p2dcon4').val();
            var p2dcon5=$('#p2dcon5').val();
            var p2dcon6=$('#p2dcon6').val();
            var p2dcon7=$('#p2dcon7').val();
            var p2cont1=0;
            if (p2dcon1=='4') {
                p2cont1++;
                f_ok($('#p2dcon1'));
            }else{
                p2cont1;
                f_no($('#p2dcon1'));
            }
            if (p2dcon2=='17') {
                p2cont1++;
                f_ok($('#p2dcon2'));
            }else{
                p2cont1;
                f_no($('#p2dcon2'));
            }
            if (p2dcon3=='13') {
                p2cont1++;
                f_ok($('#p2dcon3'));
            }else{
                p2cont1;
                f_no($('#p2dcon3'));
            }
            if (p2dcon4=='6') {
                p2cont1++;
                f_ok($('#p2dcon4'));
            }else{
                p2cont1;
                f_no($('#p2dcon4'));
            }
            if (p2dcon5=='4') {
                p2cont1++;
                f_ok($('#p2dcon5'));
            }else{
                p2cont1;
                f_no($('#p2dcon5'));
            }
            if (p2dcon6=='2') {
                p2cont1++;
                f_ok($('#p2dcon6'));
            }else{
                p2cont1;
                f_no($('#p2dcon6'));
            }
            if (p2dcon7=='46') {
                p2cont1++;
                f_ok($('#p2dcon7'));
            }else{
                p2cont1;
                f_no($('#p2dcon7'));
            }
            var result2 = (p2cont1 * 3) / 7;
            cor = cor + result2;
            inc = inc + (3 - result2);
            $('#pre2a').val(result2.toFixed(2));
            $('#pre2a').css('display', '');
            Calculo_nota()
        }

    }