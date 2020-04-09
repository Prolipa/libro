    var calificacion = 10,
        cor = 0,
        inc = 0,
        cont = 0,
        ejer = 1,
        itemsT = 16;
    f_iniciar();
    var claseAnimada = 'animate bounceIn';

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    
    function f_iniciar() {
        var p1vec1=[];
        for (var i = 40; i < 100; i++) {
            p1vec1.push(i*4);
        }
        p1vec1.sort(f_randomico);
        $('#p1im1').text(p1vec1[0]);
        var p1vec2=[];
        for (var i = 7; i < 40; i++) {
            p1vec2.push(i*9);
        }
        p1vec2.sort(f_randomico);
        $('#p1im4').text(p1vec2[0]);
        var p1vec3=[];
        for (var i = 4; i < 15; i++) {
            p1vec3.push(i*7);
        }
        p1vec3.sort(f_randomico);
        $('#p1im5').text(p1vec3[0]);
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
            if (p1dcon1==p1vec1[0]) {
                cor++;
                f_ok($('#p1dcon1'));
            }else{
                inc++;
                f_no($('#p1dcon1'));
            }
            if (p1dcon2=='4') {
                cor++;
                f_ok($('#p1dcon2'));
            }else{
                inc++;
                f_no($('#p1dcon2'));
            }
            if (p1dcon3==(p1vec1[0]/4)) {
                cor++;
                f_ok($('#p1dcon3'));
            }else{
                inc++;
                f_no($('#p1dcon3'));
            }
            if (p1dcon4==(p1vec1[0]/4)) {
                cor++;
                f_ok($('#p1dcon4'));
            }else{
                inc++;
                f_no($('#p1dcon4'));
            }
            var p1dcon11=$('#p1dcon11').val();
            var p1dcon12=$('#p1dcon12').val();
            var p1dcon13=$('#p1dcon13').val();
            var p1dcon14=$('#p1dcon14').val();
            if (p1dcon11=='206') {
                cor++;
                f_ok($('#p1dcon11'));
            }else{
                inc++;
                f_no($('#p1dcon11'));
            }
            if (p1dcon12=='2') {
                cor++;
                f_ok($('#p1dcon12'));
            }else{
                inc++;
                f_no($('#p1dcon12'));
            }
            if (p1dcon13=='103') {
                cor++;
                f_ok($('#p1dcon13'));
            }else{
                inc++;
                f_no($('#p1dcon13'));
            }
            if (p1dcon14=='103') {
                cor++;
                f_ok($('#p1dcon14'));
            }else{
                inc++;
                f_no($('#p1dcon14'));
            }
            var p1dcon21=$('#p1dcon21').val();
            var p1dcon22=$('#p1dcon22').val();
            var p1dcon23=$('#p1dcon23').val();
            var p1dcon24=$('#p1dcon24').val();
            if (p1dcon21==p1vec2[0]) {
                cor++;
                f_ok($('#p1dcon21'));
            }else{
                inc++;
                f_no($('#p1dcon21'));
            }
            if (p1dcon22=='9') {
                cor++;
                f_ok($('#p1dcon22'));
            }else{
                inc++;
                f_no($('#p1dcon22'));
            }
            if (p1dcon23==(p1vec2[0]/9)) {
                cor++;
                f_ok($('#p1dcon23'));
            }else{
                inc++;
                f_no($('#p1dcon23'));
            }
            if (p1dcon24==(p1vec2[0]/9)) {
                cor++;
                f_ok($('#p1dcon24'));
            }else{
                inc++;
                f_no($('#p1dcon24'));
            }
            var p1dcon31=$('#p1dcon31').val();
            var p1dcon32=$('#p1dcon32').val();
            var p1dcon33=$('#p1dcon33').val();
            var p1dcon34=$('#p1dcon34').val();
            if (p1dcon31==p1vec3[0]) {
                cor++;
                f_ok($('#p1dcon31'));
            }else{
                inc++;
                f_no($('#p1dcon31'));
            }
            if (p1dcon32=='7') {
                cor++;
                f_ok($('#p1dcon32'));
            }else{
                inc++;
                f_no($('#p1dcon32'));
            }
            if (p1dcon33==(p1vec3[0]/7)) {
                cor++;
                f_ok($('#p1dcon33'));
            }else{
                inc++;
                f_no($('#p1dcon33'));
            }
            if (p1dcon34==(p1vec3[0]/7)) {
                cor++;
                f_ok($('#p1dcon34'));
            }else{
                inc++;
                f_no($('#p1dcon34'));
            }
            Calculo_nota()
        }

    }