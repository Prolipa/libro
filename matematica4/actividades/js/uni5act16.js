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
    document.getElementById('pre7a').addEventListener('keypress', () => {
        validNumero(0, 1, 1);
    });
    document.getElementById('pre7a').addEventListener('keyup', () => {
        validMaxIngreso(document.getElementById('pre7a'), 1)
    });
    document.getElementById('pre8a').addEventListener('keypress', () => {
        validNumero(0, 1, 1);
    });
    document.getElementById('pre8a').addEventListener('keyup', () => {
        validMaxIngreso(document.getElementById('pre8a'), 1)
    });
    $('.1').click(function() {
        switch ($(this).attr('class')) {
            case '1 enc1':
                $('.enc1').addClass('encierra');
                $('.enc2').removeClass('encierra');
                $('.enc3').removeClass('encierra');
                $('.enc4').removeClass('encierra');

                break;
            case '1 enc2':
                $('.enc2').addClass('encierra');
                $('.enc1').removeClass('encierra');
                $('.enc3').removeClass('encierra');
                $('.enc4').removeClass('encierra');
                break;
            case '1 enc3':
                $('.enc3').addClass('encierra');
                $('.enc1').removeClass('encierra');
                $('.enc2').removeClass('encierra');
                $('.enc4').removeClass('encierra');

                break;
            case '1 enc4':
                $('.enc4').addClass('encierra');
                $('.enc1').removeClass('encierra');
                $('.enc2').removeClass('encierra');
                $('.enc3').removeClass('encierra');

                break;


        }
    });

    function f_iniciar() {
        var p1vec1=[];
        for (var i = 50; i < 95; i++) {
            p1vec1.push(i);
        }
        p1vec1.sort(f_randomico);
        $('#p1im1').html(p1vec1[0]);
        $('#p1im2').html(p1vec1[0]*2);
        var p2vec1 = ['12 ÷ 3 = 4', '12 ÷ 4 = 3', '15 ÷ 3 = 5', '15 ÷ 5 = 3'];
        p2vec1.sort(f_randomico);
        for (var i = 0; i < p2vec1.length; i++) {
            $('#p2im' + (i + 1)).text(p2vec1[i]);
        }

        var p3vec1 = [
            '<p><b style="color: #005CA4;" id="p3l1"></b> 45 ÷ 9 = <input type="text" style="border: none; border-bottom: 2px dotted black; width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)" id="p3dcon1"></p>' +
            '<div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black">4</td>' +
            '<td style="border: 1px solid black">5</td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black">9</td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dcon2"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dcon3"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dco1">' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dcon4"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dcon5"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dcon6"></td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dcon7"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dcon8"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dco2">' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dcon9"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dcon10"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dcon11"></td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dcon12"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dcon13"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dco3">' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dcon14"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dcon15"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dcon16"></td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dcon17"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dco4">' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dcon18"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dcon19"></td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dcon20"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dco5">' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '</div>',
            '<p><b style="color: #005CA4;" id="p3l2"></b> 32 ÷ 8 = <input type="text" style="border: none; border-bottom: 2px dotted black; width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)" id="p31dcon1"></p>' +
            '<div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black">3</td>' +
            '<td style="border: 1px solid black">2</td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black">8</td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p31dcon2"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p31dcon3"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p31dco1">' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p31dcon4"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p31dcon5"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p31dcon6"></td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p31dcon7"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p31dcon8"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p31dco2">' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p31dcon9"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p31dcon10"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p31dcon11"></td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p31dcon12"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p31dco3">' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p31dcon13"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p31dcon14"></td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p31dcon15"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p31dco4">' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '</div>'
        ];
        var p3aux1 = [];
        var myArray2 = ["0", "1"];
        var i, j, k;
        for (i = myArray2.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray2[i - 1];
            myArray2[i - 1] = myArray2[j];
            myArray2[j] = k;
        }
        //aleatorio literal 1
        for (var i = 1; i <= 3; i++) {
            var c2 = myArray2[i - 1];
            $("#p3im" + i).html(p3vec1[c2]);
            p3aux1.push(c2);
        }
        var p3vec2 = ['a)', 'b)'];
        for (var i = 1; i <= 3; i++) {
            $('#p3l' + (parseInt(p3aux1[i - 1]) + 1)).text(p3vec2[i - 1]);
        }

        var p4vec1=[(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2)];
        var p4vec2=[p4vec1[0]*p4vec1[1],p4vec1[2]*p4vec1[3],p4vec1[4]*p4vec1[5]];
        $('#p4im1').html(p4vec2[0]);
        $('#p4im2').html(p4vec1[0]);
        $('#p4im3').html(p4vec2[1]);
        $('#p4im4').html(p4vec1[2]);
        $('#p4im5').html(p4vec2[2]);
        $('#p4im6').html(p4vec1[4]);
        var p4aux1=p4vec2[0].toString().split('');
        if (p4aux1.length=='2') {
            $('#p4i1').html(p4aux1[0]);
            $('#p4i2').html(p4aux1[1]);
        }else if (p4aux1.length=='1') {
            $('#p4i2').html(p4aux1[0]);
            $('#act4num1').hide();
        }
        $('#p4i3').html(p4vec1[0]);
        var p4aux2=p4vec2[1].toString().split('');
        if (p4aux2.length=='2') {
            $('#p4i4').html(p4aux2[0]);
            $('#p4i5').html(p4aux2[1]);
        }else if (p4aux2.length=='1') {
            $('#p4i5').html(p4aux2[0]);
            $('#act41num1').hide();
        }
        $('#p4i6').html(p4vec1[2]);
        var p4aux3=p4vec2[2].toString().split('');
        if (p4aux3.length=='2') {
            $('#p4i7').html(p4aux3[0]);
            $('#p4i8').html(p4aux3[1]);
        }else{
            $('#p4i8').html(p4aux3[0]);
            $('#act42num1').hide();
        }
        $('#p4i9').html(p4vec1[4]);

        var p5vec1=[(Math.floor(Math.random() * 5) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2)];
        var p5vc1 = [];
        for (var i = 0; i < p5vec1[0]; i++) {
            p5vc1.push('<tr id="p5cim' + i + '"></tr>');
        }
        $('#p5im1').html(p5vc1);
        var p5v1 = [];
        for (var i = 0; i < p5vec1[1]; i++) {
            p5v1.push('<td><img src="img/i2_p214_u5a16.jpg" alt="" width="18px;" /></td>')
        }
        for (var i = 0; i < p5vec1[0]; i++) {
            $('#p5cim' + i).html(p5v1);
        }
        var p5vc2 = [];
        for (var i = 0; i < p5vec1[2]; i++) {
            p5vc2.push('<tr id="p51cim' + i + '"></tr>');
        }
        $('#p5im2').html(p5vc2);
        var p5v2 = [];
        for (var i = 0; i < p5vec1[3]; i++) {
            p5v2.push('<td><img src="img/i3_p214_u5a16.jpg" alt="" width="30px;" /></td>')
        }
        for (var i = 0; i < p5vec1[2]; i++) {
            $('#p51cim' + i).html(p5v2);
        }
        var p5vc3 = [];
        for (var i = 0; i < p5vec1[4]; i++) {
            p5vc3.push('<tr id="p52cim' + i + '"></tr>');
        }
        $('#p5im3').html(p5vc3);
        var p5v3 = [];
        for (var i = 0; i < p5vec1[5]; i++) {
            p5v3.push('<td><img src="img/i4_p214_u5a16.jpg" alt="" width="30px;" /></td>')
        }
        for (var i = 0; i < p5vec1[4]; i++) {
            $('#p52cim' + i).html(p5v3);
        }

        var p6n1=(Math.floor(Math.random() * 5) + 2);
        $('#p6im1').html(p6n1);
        $('#p6im2').html(p6n1);
        bt_comprobar.addEventListener("click", preg7);

        function preg7() {
            cor = 0;
            var pre7a = $('#pre7a').val();
            if (!pre7a) {
                alert('Ingrese la calificación en la pregunta 7.')
            } else {
                cor = cor + parseFloat(pre7a);
                inc = inc + (1 - parseFloat(pre7a));
                $('#pre7a').val(parseFloat(pre7a).toFixed(2));
                $('#pre7a').attr('disabled', 'true');
                preg8();
            }

        }
        function preg8() {
            var pre8a = $('#pre8a').val();
            if (!pre8a) {
                alert('Ingrese la calificación en la pregunta 8.')
            } else {
                cor = cor + parseFloat(pre8a);
                inc = inc + (1 - parseFloat(pre8a));
                $('#pre8a').val(parseFloat(pre8a).toFixed(2));
                $('#pre8a').attr('disabled', 'true');
                f_comprobar();
            }

        }

        function f_comprobar() {
            cont++;
            AgregaClase(".nota", claseAnimada);
            QuitaClase(".actividad", claseAnimada);
            bt_comprobar.removeEventListener("click", preg7);
            
            var p1cont1=0;
            for (var i = 3; i <= 7; i++) {
                var p1res1=$('#p1dcon'+(i-2)).val();
                if (p1res1==(p1vec1[0]*i)) {
                    p1cont1++;
                    f_ok($('#p1dcon'+(i-2)));
                }else{
                    p1cont1;
                    f_no($('#p1dcon'+(i-2)));
                }
            }
            var result1 = (p1cont1 * 1) / 5;
            cor = cor + result1;
            inc = inc + (1 - result1);
            $('#pre1a').val(result1.toFixed(2));
            $('#pre1a').css('display', '');

            var p2res1 = $('#p2rs1 .encierra span').text();
            var p2cont1 = 0;
            if (!p2res1) {
                p2cont1;
                f_no($('.1'));
            } else {
                if (p2res1 == '15 ÷ 3 = 5') {
                    p2cont1++;
                    f_ok($('#p2rs1 .encierra'));
                } else {
                    p2cont1;
                    f_no($('#p2rs1 .encierra'));
                }
            }
            var result2 = (p2cont1 * 1) / 1;
            cor = cor + result2;
            inc = inc + (1 - result2);
            $('#pre2a').val(result2.toFixed(2));
            $('#pre2a').css('display', '');

            var p3cont1 = 0;
            var p3dcon1 = $('#p3dcon1').val();
            var p31dcon1 = $('#p31dcon1').val();
            if (p3dcon1 == '5') {
                p3cont1++;
                f_ok($('#p3dcon1'));
            } else {
                p3cont1;
                f_no($('#p3dcon1'));
            }
            if (p31dcon1 == '4') {
                p3cont1++;
                f_ok($('#p31dcon1'));
            } else {
                p3cont1;
                f_no($('#p31dcon1'));
            }
            var p3dcon2 = $('#p3dcon2').val() + $('#p3dcon3').val();
            var p3dcon4 = $('#p3dcon4').val() + $('#p3dcon5').val();
            var p3dcon6 = $('#p3dcon6').val();
            var p3dcon7 = $('#p3dcon7').val() + $('#p3dcon8').val();
            var p3dcon9 = $('#p3dcon9').val() + $('#p3dcon10').val();
            var p3dcon11 = $('#p3dcon11').val();
            var p3dcon12 = $('#p3dcon12').val() + $('#p3dcon13').val();
            var p3dcon14 = $('#p3dcon14').val() + $('#p3dcon15').val();
            var p3dcon16 = $('#p3dcon16').val();
            var p3dcon17 = $('#p3dcon17').val();
            var p3dcon18 = $('#p3dcon18').val();
            var p3dcon19 = $('#p3dcon19').val();
            var p3dcon20 = $('#p3dcon20').val();
            if (p3dcon2 == '36') {
                p3cont1++;
                f_ok($('#p3dcon2'));
                f_ok($('#p3dcon3'));
            } else {
                p3cont1;
                f_no($('#p3dcon2'));
                f_no($('#p3dcon3'));
            }
            if (p3dcon4 == '36') {
                p3cont1++;
                f_ok($('#p3dcon4'));
                f_ok($('#p3dcon5'));
            } else {
                p3cont1;
                f_no($('#p3dcon4'));
                f_no($('#p3dcon5'));
            }
            if (p3dcon6 == '9') {
                p3cont1++;
                f_ok($('#p3dcon6'));
            } else {
                p3cont1;
                f_no($('#p3dcon6'));
            }
            if (p3dcon7 == '27') {
                p3cont1++;
                f_ok($('#p3dcon7'));
                f_ok($('#p3dcon8'));
            } else {
                p3cont1;
                f_no($('#p3dcon7'));
                f_no($('#p3dcon8'));
            }
            if (p3dcon9 == '27') {
                p3cont1++;
                f_ok($('#p3dcon9'));
                f_ok($('#p3dcon10'));
            } else {
                p3cont1;
                f_no($('#p3dcon9'));
                f_no($('#p3dcon10'));
            }
            if (p3dcon11 == '9') {
                p3cont1++;
                f_ok($('#p3dcon11'));
            } else {
                p3cont1;
                f_no($('#p3dcon11'));
            }
            if (p3dcon12 == '18') {
                p3cont1++;
                f_ok($('#p3dcon12'));
                f_ok($('#p3dcon13'));
            } else {
                p3cont1;
                f_no($('#p3dcon12'));
                f_no($('#p3dcon13'));
            }
            if (p3dcon14 == '18') {
                p3cont1++;
                f_ok($('#p3dcon14'));
                f_ok($('#p3dcon15'));
            } else {
                p3cont1;
                f_no($('#p3dcon14'));
                f_no($('#p3dcon15'));
            }
            if (p3dcon16 == '9') {
                p3cont1++;
                f_ok($('#p3dcon16'));
            } else {
                p3cont1;
                f_no($('#p3dcon16'));
            }
            if (p3dcon17 == '9') {
                p3cont1++;
                f_ok($('#p3dcon17'));
            } else {
                p3cont1;
                f_no($('#p3dcon17'));
            }
            if (p3dcon18 == '9') {
                p3cont1++;
                f_ok($('#p3dcon18'));
            } else {
                p3cont1;
                f_no($('#p3dcon18'));
            }
            if (p3dcon19 == '9') {
                p3cont1++;
                f_ok($('#p3dcon19'));
            } else {
                p3cont1;
                f_no($('#p3dcon19'));
            }
            if (p3dcon20 == '0') {
                p3cont1++;
                f_ok($('#p3dcon20'));
            } else {
                p3cont1;
                f_no($('#p3dcon20'));
            }

            var p31dcon2 = $('#p31dcon2').val() + $('#p31dcon3').val();
            var p31dcon4 = $('#p31dcon4').val() + $('#p31dcon5').val();
            var p31dcon6 = $('#p31dcon6').val();
            var p31dcon7 = $('#p31dcon7').val() + $('#p31dcon8').val();
            var p31dcon9 = $('#p31dcon9').val() + $('#p31dcon10').val();
            var p31dcon11 = $('#p31dcon11').val();
            var p31dcon12 = $('#p31dcon12').val();
            var p31dcon13 = $('#p31dcon13').val();
            var p31dcon14 = $('#p31dcon14').val();
            var p31dcon15 = $('#p31dcon15').val();
            if (p31dcon2 == '24') {
                p3cont1++;
                f_ok($('#p31dcon2'));
                f_ok($('#p31dcon3'));
            } else {
                p3cont1;
                f_no($('#p31dcon2'));
                f_no($('#p31dcon3'));
            }
            if (p31dcon4 == '24') {
                p3cont1++;
                f_ok($('#p31dcon4'));
                f_ok($('#p31dcon5'));
            } else {
                p3cont1;
                f_no($('#p31dcon4'));
                f_no($('#p31dcon5'));
            }
            if (p31dcon6 == '8') {
                p3cont1++;
                f_ok($('#p31dcon6'));
            } else {
                p3cont1;
                f_no($('#p31dcon6'));
            }
            if (p31dcon7 == '16') {
                p3cont1++;
                f_ok($('#p31dcon7'));
                f_ok($('#p31dcon8'));
            } else {
                p3cont1;
                f_no($('#p31dcon7'));
                f_no($('#p31dcon8'));
            }
            if (p31dcon9 == '16') {
                p3cont1++;
                f_ok($('#p31dcon9'));
                f_ok($('#p31dcon10'));
            } else {
                p3cont1;
                f_no($('#p31dcon9'));
                f_no($('#p31dcon10'));
            }
            if (p31dcon11 == '8') {
                p3cont1++;
                f_ok($('#p31dcon11'));
            } else {
                p3cont1;
                f_no($('#p31dcon11'));
            }
            if (p31dcon12 == '8') {
                p3cont1++;
                f_ok($('#p31dcon12'));
            } else {
                p3cont1;
                f_no($('#p31dcon12'));
            }
            if (p31dcon13 == '8') {
                p3cont1++;
                f_ok($('#p31dcon13'));
            } else {
                p3cont1;
                f_no($('#p31dcon13'));
            }
            if (p31dcon14 == '8') {
                p3cont1++;
                f_ok($('#p31dcon14'));
            } else {
                p3cont1;
                f_no($('#p31dcon14'));
            }
            if (p31dcon15 == '0') {
                p3cont1++;
                f_ok($('#p31dcon15'));
            } else {
                p3cont1;
                f_no($('#p31dcon15'));
            }
            var p3dco1 = $('#p3dco1').val();
            var p3dco2 = $('#p3dco2').val();
            var p3dco3 = $('#p3dco3').val();
            var p3dco4 = $('#p3dco4').val();
            var p3dco5 = $('#p3dco5').val();
            if (p3dco1 == '1') {
                p3cont1++;
                f_ok($('#p3dco1'));
            } else {
                p3cont1;
                f_no($('#p3dco1'));
            }
            if (p3dco2 == '2') {
                p3cont1++;
                f_ok($('#p3dco2'));
            } else {
                p3cont1;
                f_no($('#p3dco2'));
            }
            if (p3dco3 == '3') {
                p3cont1++;
                f_ok($('#p3dco3'));
            } else {
                p3cont1;
                f_no($('#p3dco3'));
            }
            if (p3dco4 == '4') {
                p3cont1++;
                f_ok($('#p3dco4'));
            } else {
                p3cont1;
                f_no($('#p3dco4'));
            }
            if (p3dco5 == '5') {
                p3cont1++;
                f_ok($('#p3dco5'));
            } else {
                p3cont1;
                f_no($('#p3dco5'));
            }
            var p31dco1 = $('#p31dco1').val();
            var p31dco2 = $('#p31dco2').val();
            var p31dco3 = $('#p31dco3').val();
            var p31dco4 = $('#p31dco4').val();
            if (p31dco1 == '1') {
                p3cont1++;
                f_ok($('#p31dco1'));
            } else {
                p3cont1;
                f_no($('#p31dco1'));
            }
            if (p31dco2 == '2') {
                p3cont1++;
                f_ok($('#p31dco2'));
            } else {
                p3cont1;
                f_no($('#p31dco2'));
            }
            if (p31dco3 == '3') {
                p3cont1++;
                f_ok($('#p31dco3'));
            } else {
                p3cont1;
                f_no($('#p31dco3'));
            }
            if (p31dco4 == '4') {
                p3cont1++;
                f_ok($('#p31dco4'));
            } else {
                p3cont1;
                f_no($('#p31dco4'));
            }
            var result3 = (p3cont1 * 1) / 34;
            cor = cor + result3;
            inc = inc + (1 - result3);
            $('#pre3a').val(result3.toFixed(2));
            $('#pre3a').css('display', '');

            var act4num1=$('#act4num1').val()+$('#act4num2').val();
            var act4num3=$('#act4num3').val();
            var act4num4=$('#act4num4').val();
            var act4num5=$('#act4num5').val();
            var p4cont1=0;
            if (act4num1 == p4vec2[0]) {
                p4cont1++;
                f_ok($('#act4num1'));
                f_ok($('#act4num2'));
            } else {
                p4cont1;
                f_no($('#act4num1'));
                f_no($('#act4num2'));
            }
            if (act4num3 == p4vec1[1]) {
                p4cont1++;
                f_ok($('#act4num3'));
            } else {
                p4cont1;
                f_no($('#act4num3'));
            }
            if (act4num4 == '0') {
                p4cont1++;
                f_ok($('#act4num4'));
            } else {
                p4cont1;
                f_no($('#act4num4'));
            }
            if (act4num5 == p4vec1[1]) {
                p4cont1++;
                f_ok($('#act4num5'));
            } else {
                p4cont1;
                f_no($('#act4num5'));
            }
            var p4dcon1=$('#p4dcon1').val();
            var p4dcon2=$('#p4dcon2').val();
            var p4dcon3=$('#p4dcon3').val();
            var p4dcon4=$('#p4dcon4').val();
            if (p4dcon1 == p4vec2[0]) {
                p4cont1++;
                f_ok($('#p4dcon1'));
            } else {
                p4cont1;
                f_no($('#p4dcon1'));
            }
            if (p4dcon2 == p4vec1[0]) {
                p4cont1++;
                f_ok($('#p4dcon2'));
            } else {
                p4cont1;
                f_no($('#p4dcon2'));
            }
            if (p4dcon3 == p4vec1[1]) {
                p4cont1++;
                f_ok($('#p4dcon3'));
            } else {
                p4cont1;
                f_no($('#p4dcon3'));
            }
            if (p4dcon4 == '0') {
                p4cont1++;
                f_ok($('#p4dcon4'));
            } else {
                p4cont1;
                f_no($('#p4dcon4'));
            }
            var act41num1=$('#act41num1').val()+$('#act41num2').val();
            var act41num3=$('#act41num3').val();
            var act41num4=$('#act41num4').val();
            var act41num5=$('#act41num5').val();
            if (act41num1 == p4vec2[1]) {
                p4cont1++;
                f_ok($('#act41num1'));
                f_ok($('#act41num2'));
            } else {
                p4cont1;
                f_no($('#act41num1'));
                f_no($('#act41num2'));
            }
            if (act41num3 == p4vec1[3]) {
                p4cont1++;
                f_ok($('#act41num3'));
            } else {
                p4cont1;
                f_no($('#act41num3'));
            }
            if (act41num4 == '0') {
                p4cont1++;
                f_ok($('#act41num4'));
            } else {
                p4cont1;
                f_no($('#act41num4'));
            }
            if (act41num5 == p4vec1[3]) {
                p4cont1++;
                f_ok($('#act41num5'));
            } else {
                p4cont1;
                f_no($('#act41num5'));
            }
            var p41dcon1=$('#p41dcon1').val();
            var p41dcon2=$('#p41dcon2').val();
            var p41dcon3=$('#p41dcon3').val();
            var p41dcon4=$('#p41dcon4').val();
            if (p41dcon1 == p4vec2[1]) {
                p4cont1++;
                f_ok($('#p41dcon1'));
            } else {
                p4cont1;
                f_no($('#p41dcon1'));
            }
            if (p41dcon2 == p4vec1[2]) {
                p4cont1++;
                f_ok($('#p41dcon2'));
            } else {
                p4cont1;
                f_no($('#p41dcon2'));
            }
            if (p41dcon3 == p4vec1[3]) {
                p4cont1++;
                f_ok($('#p41dcon3'));
            } else {
                p4cont1;
                f_no($('#p41dcon3'));
            }
            if (p41dcon4 == '0') {
                p4cont1++;
                f_ok($('#p41dcon4'));
            } else {
                p4cont1;
                f_no($('#p41dcon4'));
            }
            var act42num1=$('#act42num1').val()+$('#act42num2').val();
            var act42num3=$('#act42num3').val();
            var act42num4=$('#act42num4').val();
            var act42num5=$('#act42num5').val();
            if (act42num1 == p4vec2[2]) {
                p4cont1++;
                f_ok($('#act42num1'));
                f_ok($('#act42num2'));
            } else {
                p4cont1;
                f_no($('#act42num1'));
                f_no($('#act42num2'));
            }
            if (act42num3 == p4vec1[5]) {
                p4cont1++;
                f_ok($('#act42num3'));
            } else {
                p4cont1;
                f_no($('#act42num3'));
            }
            if (act42num4 == '0') {
                p4cont1++;
                f_ok($('#act42num4'));
            } else {
                p4cont1;
                f_no($('#act42num4'));
            }
            if (act42num5 == p4vec1[5]) {
                p4cont1++;
                f_ok($('#act42num5'));
            } else {
                p4cont1;
                f_no($('#act42num5'));
            }
            var p42dcon1=$('#p42dcon1').val();
            var p42dcon2=$('#p42dcon2').val();
            var p42dcon3=$('#p42dcon3').val();
            var p42dcon4=$('#p42dcon4').val();
            if (p42dcon1 == p4vec2[2]) {
                p4cont1++;
                f_ok($('#p42dcon1'));
            } else {
                p4cont1;
                f_no($('#p42dcon1'));
            }
            if (p42dcon2 == p4vec1[4]) {
                p4cont1++;
                f_ok($('#p42dcon2'));
            } else {
                p4cont1;
                f_no($('#p42dcon2'));
            }
            if (p42dcon3 == p4vec1[5]) {
                p4cont1++;
                f_ok($('#p42dcon3'));
            } else {
                p4cont1;
                f_no($('#p42dcon3'));
            }
            if (p42dcon4 == '0') {
                p4cont1++;
                f_ok($('#p42dcon4'));
            } else {
                p4cont1;
                f_no($('#p42dcon4'));
            }
            var result4 = (p4cont1 * 3) / 24;
            cor = cor + result4;
            inc = inc + (3 - result4);
            $('#pre4a').val(result4.toFixed(2));
            $('#pre4a').css('display', '');

            var p5dcon1=$('#p5dcon1').val()+$('#p5dcon2').val()+$('#p5dcon3').val();
            var p5dcon4=$('#p5dcon4').val()+$('#p5dcon5').val()+$('#p5dcon6').val();
            var p5cont1=0;
            if (p5dcon1==(p5vec1[0]*p5vec1[1])+''+p5vec1[0]+''+p5vec1[1] || p5dcon1==(p5vec1[0]*p5vec1[1])+''+p5vec1[1]+''+p5vec1[0]) {
                p5cont1++;
                f_ok($('#p5dcon1'));
                f_ok($('#p5dcon2'));
                f_ok($('#p5dcon3'));
            }else{
                f_no($('#p5dcon1'));
                f_no($('#p5dcon2'));
                f_no($('#p5dcon3'));
            }
            if ((p5dcon4==(p5vec1[0]*p5vec1[1])+''+p5vec1[0]+''+p5vec1[1] || p5dcon4==(p5vec1[0]*p5vec1[1])+''+p5vec1[1]+''+p5vec1[0])&& p5dcon4!=p5dcon1) {
                p5cont1++;
                f_ok($('#p5dcon4'));
                f_ok($('#p5dcon5'));
                f_ok($('#p5dcon6'));
            }else{
                f_no($('#p5dcon4'));
                f_no($('#p5dcon5'));
                f_no($('#p5dcon6'));
            }
            var p51dcon1=$('#p51dcon1').val()+$('#p51dcon2').val()+$('#p51dcon3').val();
            var p51dcon4=$('#p51dcon4').val()+$('#p51dcon5').val()+$('#p51dcon6').val();
            if (p51dcon1==(p5vec1[2]*p5vec1[3])+''+p5vec1[2]+''+p5vec1[3] || p51dcon1==(p5vec1[2]*p5vec1[3])+''+p5vec1[3]+''+p5vec1[2]) {
                p5cont1++;
                f_ok($('#p51dcon1'));
                f_ok($('#p51dcon2'));
                f_ok($('#p51dcon3'));
            }else{
                f_no($('#p51dcon1'));
                f_no($('#p51dcon2'));
                f_no($('#p51dcon3'));
            }
            if ((p51dcon4==(p5vec1[2]*p5vec1[3])+''+p5vec1[2]+''+p5vec1[3] || p51dcon4==(p5vec1[2]*p5vec1[3])+''+p5vec1[3]+''+p5vec1[2])&& p51dcon4!=p51dcon1) {
                p5cont1++;
                f_ok($('#p51dcon4'));
                f_ok($('#p51dcon5'));
                f_ok($('#p51dcon6'));
            }else{
                f_no($('#p51dcon4'));
                f_no($('#p51dcon5'));
                f_no($('#p51dcon6'));
            }
            var p52dcon1=$('#p52dcon1').val()+$('#p52dcon2').val()+$('#p52dcon3').val();
            var p52dcon4=$('#p52dcon4').val()+$('#p52dcon5').val()+$('#p52dcon6').val();
            if (p52dcon1==(p5vec1[4]*p5vec1[5])+''+p5vec1[4]+''+p5vec1[5] || p52dcon1==(p5vec1[4]*p5vec1[5])+''+p5vec1[5]+''+p5vec1[4]) {
                p5cont1++;
                f_ok($('#p52dcon1'));
                f_ok($('#p52dcon2'));
                f_ok($('#p52dcon3'));
            }else{
                f_no($('#p52dcon1'));
                f_no($('#p52dcon2'));
                f_no($('#p52dcon3'));
            }
            if ((p52dcon4==(p5vec1[4]*p5vec1[5])+''+p5vec1[4]+''+p5vec1[5] || p52dcon4==(p5vec1[4]*p5vec1[5])+''+p5vec1[5]+''+p5vec1[4])&& p52dcon4!=p52dcon1) {
                p5cont1++;
                f_ok($('#p52dcon4'));
                f_ok($('#p52dcon5'));
                f_ok($('#p52dcon6'));
            }else{
                f_no($('#p52dcon4'));
                f_no($('#p52dcon5'));
                f_no($('#p52dcon6'));
            }
            var result5 = (p5cont1 * 1) / 6;
            cor = cor + result5;
            inc = inc + (1 - result5);
            $('#pre5a').val(result5.toFixed(2));
            $('#pre5a').css('display', '');
            var p6dcon1=$('#p6dcon1').val();
            var p6dcon2=$('#p6dcon2').val();
            var p6dcon3=$('#p6dcon3').val();
            var p6dcon4=$('#p6dcon4').val();
            var p6dcon5=$('#p6dcon5').val();
            var p6cont1=0;
            if (p6dcon1==p6n1+'000') {
                p6cont1++;
                f_ok($('#p6dcon1'));
            }else{
                p6cont1;
                f_no($('#p6dcon1'));
            }
            if (p6dcon2==p6n1+'000') {
                p6cont1++;
                f_ok($('#p6dcon2'));
            }else{
                p6cont1;
                f_no($('#p6dcon2'));
            }
            if (p6dcon3=='1250') {
                p6cont1++;
                f_ok($('#p6dcon3'));
            }else{
                p6cont1;
                f_no($('#p6dcon3'));
            }
            if (p6dcon4==(p6n1*1000)-1250) {
                p6cont1++;
                f_ok($('#p6dcon4'));
            }else{
                p6cont1;
                f_no($('#p6dcon4'));
            }
            if (p6dcon5==(p6n1*1000)-1250) {
                p6cont1++;
                f_ok($('#p6dcon5'));
            }else{
                p6cont1;
                f_no($('#p6dcon5'));
            }
            var result6 = (p6cont1 * 1) / 5;
            cor = cor + result6;
            inc = inc + (1 - result6);
            $('#pre6a').val(result6.toFixed(2));
            $('#pre6a').css('display', '');
            Calculo_nota()
        }

    }