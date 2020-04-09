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
            var p1cont1=0;
            var p1vec1=['18','24','36','42','48','54','60'];
            for (var i = 0; i < 7; i++) {
                var p1res1=$('#p1dcon'+(i+1)).val();
                if (p1res1==p1vec1[i]) {
                    p1cont1++;
                    f_ok($('#p1dcon'+(i+1)));
                }else{
                    p1cont1;
                    f_no($('#p1dcon'+(i+1)));
                }
            }
            var result1 = (p1cont1 * 4) / 7;
            cor = cor + result1;
            inc = inc + (4 - result1);
            $('#pre1a').val(result1.toFixed(2));
            $('#pre1a').css('display', '');

            var p2cont1=0;
            var p2vec1=['24','32','48','56','64','72','80'];
            for (var i = 0; i < 7; i++) {
                var p2res1=$('#p2dcon'+(i+1)).val();
                if (p2res1==p2vec1[i]) {
                    p2cont1++;
                    f_ok($('#p2dcon'+(i+1)));
                }else{
                    p2cont1;
                    f_no($('#p2dcon'+(i+1)));
                }
            }
            var p2vec2=['12','16','20','24','32','36','40'];
            for (var i = 0; i < 7; i++) {
                var p2res2=$('#p21dcon'+(i+1)).val();
                if (p2res2==p2vec2[i]) {
                    p2cont1++;
                    f_ok($('#p21dcon'+(i+1)));
                }else{
                    p2cont1;
                    f_no($('#p21dcon'+(i+1)));
                }
            }
            var result2 = (p2cont1 * 4) / 14;
            cor = cor + result2;
            inc = inc + (4 - result2);
            $('#pre2a').val(result2.toFixed(2));
            $('#pre2a').css('display', '');
            var p3dcon1=$('#p3dcon1').val();
            var p3dcon2=$('#p3dcon2').val();
            var p3dcon3=$('#p3dcon3').val();
            var p3cont1=0;
            if (p3dcon1==14) {
                p3cont1++;
                f_ok($('#p3dcon1'));
            }else{
                p3cont1;
                f_no($('#p3dcon1'));
            }
            if (p3dcon2==21) {
                p3cont1++;
                f_ok($('#p3dcon2'));
            }else{
                p3cont1;
                f_no($('#p3dcon2'));
            }
            if (p3dcon3==28) {
                p3cont1++;
                f_ok($('#p3dcon3'));
            }else{
                p3cont1;
                f_no($('#p3dcon3'));
            }
            var result3 = (p3cont1 * 2) / 3;
            cor = cor + result3;
            inc = inc + (4 - result3);
            $('#pre3a').val(result3.toFixed(2));
            $('#pre3a').css('display', '');
            Calculo_nota()
        }

    }