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
    document.getElementById('pre10a').addEventListener('keypress', () => {
        validNumero(0, 1, 1);
    });
    document.getElementById('pre10a').addEventListener('keyup', () => {
        validMaxIngreso(document.getElementById('pre10a'), 1)
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
    $('.2').click(function() {
        switch ($(this).attr('class')) {
            case '2 enc11':
                $('.enc11').addClass('encierra');
                $('.enc12').removeClass('encierra');
                $('.enc13').removeClass('encierra');
                $('.enc14').removeClass('encierra');

                break;
            case '2 enc12':
                $('.enc12').addClass('encierra');
                $('.enc11').removeClass('encierra');
                $('.enc13').removeClass('encierra');
                $('.enc14').removeClass('encierra');
                break;
            case '2 enc13':
                $('.enc13').addClass('encierra');
                $('.enc11').removeClass('encierra');
                $('.enc12').removeClass('encierra');
                $('.enc14').removeClass('encierra');

                break;
            case '2 enc14':
                $('.enc14').addClass('encierra');
                $('.enc11').removeClass('encierra');
                $('.enc12').removeClass('encierra');
                $('.enc13').removeClass('encierra');

                break;


        }
    });
    function f_iniciar() {
        var p1vec1 = [(Math.floor(Math.random() * 8) + 2)];
        var p1pt1 = (Math.floor(Math.random() * 8) + 2);
        for (var i = 0; i < 4; i++) {
            p1vec1.push(p1vec1[i] * p1pt1);
        }
        $('#p1im1').html(p1vec1[0]);
        $('#p1im2').html(p1vec1[1]);

        var p3vec1 = [
            '<p><b style="color: #005CA4;" id="p3l1"></b> 21 ÷ 7 = <input type="text" style="border: none; border-bottom: 2px dotted black; width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)" id="p3dcon1"></p>' +
            '<div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black">2</td>' +
            '<td style="border: 1px solid black">1</td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black">7</td>' +
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
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dcon7"></td>' +
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
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dcon8"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dcon9"></td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dcon10"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p3dco3">' +
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
            '</div>',
            '<p><b style="color: #005CA4;" id="p3l3"></b> 15 ÷ 3 = <input type="text" style="border: none; border-bottom: 2px dotted black; width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)" id="p32dcon1"></p>' +
            '<div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black">1</td>' +
            '<td style="border: 1px solid black">5</td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black">3</td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p32dcon2"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p32dcon3"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p32dco1">' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p32dcon4"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p32dcon5"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p32dcon6"></td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p32dcon7"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p32dco2">' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p32dcon8"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p32dcon9"></td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p32dcon10"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p32dco3">' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p32dcon11"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p32dcon12"></td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p32dcon13"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p32dco4">' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p32dcon14"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p32dcon15"></td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p32dcon16"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p32dco5">' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '</div>'
        ];
        var p3aux1 = [];
        var myArray1 = ["0", "1", "2"];
        var i, j, k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
        //aleatorio literal 1
        for (var i = 1; i <= 3; i++) {
            var c2 = myArray1[i - 1];
            $("#p3im" + i).html(p3vec1[c2]);
            p3aux1.push(c2);
        }
        var p3vec2 = ['a)', 'b)', 'c)'];
        for (var i = 1; i <= 3; i++) {
            $('#p3l' + (parseInt(p3aux1[i - 1]) + 1)).text(p3vec2[i - 1]);
        }

        var p4vec1=[(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2)];
        $('#p4im1').html(p4vec1[0]*p4vec1[1]);
        $('#p41im1').html(p4vec1[2]*p4vec1[3]);
        $('#p42im1').html(p4vec1[4]*p4vec1[5]);
        $('#p43im1').html(p4vec1[6]*p4vec1[7]);
        $('#p44im1').html(p4vec1[8]*p4vec1[9]);
        $('#p45im1').html(p4vec1[10]*p4vec1[11]);
        $('#p4im2').html(p4vec1[0]);
        $('#p41im2').html(p4vec1[2]);
        $('#p42im2').html(p4vec1[4]);
        $('#p43im2').html(p4vec1[6]);
        $('#p44im2').html(p4vec1[8]);
        $('#p45im2').html(p4vec1[10]);

        $('#p4im4').html(p4vec1[0]*p4vec1[1]);
        $('#p41im4').html(p4vec1[2]*p4vec1[3]);
        $('#p42im4').html(p4vec1[4]*p4vec1[5]);
        $('#p43im4').html(p4vec1[6]*p4vec1[7]);
        $('#p44im4').html(p4vec1[8]*p4vec1[9]);
        $('#p45im4').html(p4vec1[10]*p4vec1[11]);

        $('#p4im3').html(p4vec1[0]);
        $('#p41im3').html(p4vec1[2]);
        $('#p42im3').html(p4vec1[4]);
        $('#p43im3').html(p4vec1[6]);
        $('#p44im3').html(p4vec1[8]);
        $('#p45im3').html(p4vec1[10]);

        var p5vec1=[(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2)];
        var p5vec2=[p5vec1[0]*p5vec1[1],p5vec1[2]*p5vec1[3],p5vec1[4]*p5vec1[5]];
        $('#p5im1').html(p5vec2[0]);
        $('#p5im2').html(p5vec1[0]);
        $('#p5im3').html(p5vec2[1]);
        $('#p5im4').html(p5vec1[2]);
        $('#p5im5').html(p5vec2[2]);
        $('#p5im6').html(p5vec1[4]);
        var p5aux1=p5vec2[0].toString().split('');
        if (p5aux1.length=='2') {
            $('#p5i1').html(p5aux1[0]);
            $('#p5i2').html(p5aux1[1]);
        }else if (p5aux1.length=='1') {
            $('#p5i2').html(p5aux1[0]);
            $('#act5num1').hide();
        }
        $('#p5i3').html(p5vec1[0]);
        var p5aux2=p5vec2[1].toString().split('');
        if (p5aux2.length=='2') {
            $('#p5i4').html(p5aux2[0]);
            $('#p5i5').html(p5aux2[1]);
        }else if (p5aux2.length=='1') {
            $('#p5i5').html(p5aux2[0]);
            $('#act51num1').hide();
        }
        $('#p5i6').html(p5vec1[2]);
        var p5aux3=p5vec2[2].toString().split('');
        if (p5aux3.length=='2') {
            $('#p5i7').html(p5aux3[0]);
            $('#p5i8').html(p5aux3[1]);
        }else{
            $('#p5i8').html(p5aux3[0]);
            $('#act52num1').hide();
        }
        $('#p5i9').html(p5vec1[4]);

        var p6vec1 = ['3', '4', '5', '6'];
        p6vec1.sort(f_randomico);
        for (var i = 0; i < p6vec1.length; i++) {
            $('#p6im' + (i + 1)).text(p6vec1[i]);
        }
        var p6vec2 = ['2', '4', '8', '12'];
        p6vec2.sort(f_randomico);
        for (var i = 0; i < p6vec2.length; i++) {
            $('#p6im1' + (i + 1)).text(p6vec2[i]);
        }

        var p8n1=(Math.floor(Math.random() * 8) + 2);
        $('#p8im1').html(p8n1);
        $('#p8im2').html(p8n1);
        var p8vec1=[(Math.floor(Math.random() * 800) + 100)];
        for (var i = 0; i < 1; i++) {
            var p8n2=(Math.floor(Math.random() * 800) + 100);
            if (p8vec1[0]> p8n2) {
                p8vec1.push(p8n2);
            }else if (p8vec1[0]<= p8n2) {
                i--;
            }
        }
        $('#p8im3').html(p8vec1[0]);
        $('#p8im4').html(p8vec1[1]);
        bt_comprobar.addEventListener("click", preg10);

        function preg10() {
            cor = 0;
            var pre10a = $('#pre10a').val();
            if (!pre10a) {
                alert('Ingrese la calificación en la pregunta 10.')
            } else {
                cor = cor + parseFloat(pre10a);
                inc = inc + (1 - parseFloat(pre10a));
                $('#pre10a').val(parseFloat(pre10a).toFixed(2));
                $('#pre10a').attr('disabled', 'true');
                f_comprobar();
            }

        }

        function f_comprobar() {
            cont++;
            AgregaClase(".nota", claseAnimada);
            QuitaClase(".actividad", claseAnimada);
            bt_comprobar.removeEventListener("click", preg10);
            var p1cont1 = 0;
            for (var i = 0; i < 3; i++) {
                var p1res1 = $('#p1dco' + (i + 1)).val();
                if (p1res1 == p1vec1[i + 2]) {
                    p1cont1++;
                    f_ok($('#p1dco' + (i + 1)));
                } else {
                    p1cont1;
                    f_no($('#p1dco' + (i + 1)));
                }
            }
            for (var i = 0; i < 4; i++) {
                var p1res2 = $('#p1dcon' + (i + 1)).val();
                if (p1res2 == p1pt1) {
                    p1cont1++;
                    f_ok($('#p1dcon' + (i + 1)));
                } else {
                    p1cont1;
                    f_no($('#p1dcon' + (i + 1)));
                }
            }
            var result1 = (p1cont1 * 1) / 7;
            cor = cor + result1;
            inc = inc + (1 - result1);
            $('#pre1a').val(result1.toFixed(2));
            $('#pre1a').css('display', '');

            var p2cont1 = 0;
            var p2dcon1 = $('#p2dcon1').val() + $('#p2dcon2').val() + $('#p2dcon3').val();
            if (p2dcon1 == '1226') {
                p2cont1++;
                f_ok($('#p2dcon1'));
                f_ok($('#p2dcon2'));
                f_ok($('#p2dcon3'));
            } else {
                p2cont1;
                f_no($('#p2dcon1'));
                f_no($('#p2dcon2'));
                f_no($('#p2dcon3'));
            }
            var act2num1 = $('#act2num1').val() + $('#act2num2').val();
            var act2num3 = $('#act2num3').val();
            var act2num4 = $('#act2num4').val() + $('#act2num5').val();
            var act2num6 = $('#act2num6').val();
            var act2num7 = $('#act2num7').val();
            if (act2num1 == '12') {
                p2cont1++;
                f_ok($('#act2num1'));
                f_ok($('#act2num2'));
            } else {
                p2cont1;
                f_no($('#act2num1'));
                f_no($('#act2num2'));
            }
            if (act2num3 == '2') {
                p2cont1++;
                f_ok($('#act2num3'));
            } else {
                p2cont1;
                f_no($('#act2num3'));
            }
            if (act2num4 == '12') {
                p2cont1++;
                f_ok($('#act2num4'));
                f_ok($('#act2num5'));
            } else {
                p2cont1;
                f_no($('#act2num4'));
                f_no($('#act2num5'));
            }
            if (act2num6 == '6') {
                p2cont1++;
                f_ok($('#act2num6'));
            } else {
                p2cont1;
                f_no($('#act2num6'));
            }
            if (act2num7 == '0') {
                p2cont1++;
                f_ok($('#act2num7'));
            } else {
                p2cont1;
                f_no($('#act2num7'));
            }
            var p21dcon1 = $('#p21dcon1').val() + $('#p21dcon2').val() + $('#p21dcon3').val();
            if (p21dcon1 == '3065') {
                p2cont1++;
                f_ok($('#p21dcon1'));
                f_ok($('#p21dcon2'));
                f_ok($('#p21dcon3'));
            } else {
                p2cont1;
                f_no($('#p21dcon1'));
                f_no($('#p21dcon2'));
                f_no($('#p21dcon3'));
            }
            var act21num1 = $('#act21num1').val() + $('#act21num2').val();
            var act21num3 = $('#act21num3').val();
            var act21num4 = $('#act21num4').val() + $('#act21num5').val();
            var act21num6 = $('#act21num6').val();
            var act21num7 = $('#act21num7').val();
            if (act21num1 == '30') {
                p2cont1++;
                f_ok($('#act21num1'));
                f_ok($('#act21num2'));
            } else {
                p2cont1;
                f_no($('#act21num1'));
                f_no($('#act21num2'));
            }
            if (act21num3 == '6') {
                p2cont1++;
                f_ok($('#act21num3'));
            } else {
                p2cont1;
                f_no($('#act21num3'));
            }
            if (act21num4 == '30') {
                p2cont1++;
                f_ok($('#act21num4'));
                f_ok($('#act21num5'));
            } else {
                p2cont1;
                f_no($('#act21num4'));
                f_no($('#act21num5'));
            }
            if (act21num6 == '5') {
                p2cont1++;
                f_ok($('#act21num6'));
            } else {
                p2cont1;
                f_no($('#act21num6'));
            }
            if (act21num7 == '0') {
                p2cont1++;
                f_ok($('#act21num7'));
            } else {
                p2cont1;
                f_no($('#act21num7'));
            }
            var result2 = (p2cont1 * 1) / 12;
            cor = cor + result2;
            inc = inc + (1 - result2);
            $('#pre2a').val(result2.toFixed(2));
            $('#pre2a').css('display', '');

            var p3cont1 = 0;
            var p3dcon1 = $('#p3dcon1').val();
            var p31dcon1 = $('#p31dcon1').val();
            var p32dcon1 = $('#p32dcon1').val();
            if (p3dcon1 == '3') {
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
            if (p32dcon1 == '5') {
                p3cont1++;
                f_ok($('#p32dcon1'));
            } else {
                p3cont1;
                f_no($('#p32dcon1'));
            }

            var p3dcon2 = $('#p3dcon2').val() + $('#p3dcon3').val();
            var p3dcon4 = $('#p3dcon4').val() + $('#p3dcon5').val();
            var p3dcon6 = $('#p3dcon6').val();
            var p3dcon7 = $('#p3dcon7').val();
            var p3dcon8 = $('#p3dcon8').val();
            var p3dcon9 = $('#p3dcon9').val();
            var p3dcon10 = $('#p3dcon10').val();
            if (p3dcon2 == '14') {
                p3cont1++;
                f_ok($('#p3dcon2'));
                f_ok($('#p3dcon3'));
            } else {
                p3cont1;
                f_no($('#p3dcon2'));
                f_no($('#p3dcon3'));
            }
            if (p3dcon4 == '14') {
                p3cont1++;
                f_ok($('#p3dcon4'));
                f_ok($('#p3dcon5'));
            } else {
                p3cont1;
                f_no($('#p3dcon4'));
                f_no($('#p3dcon5'));
            }
            if (p3dcon6 == '7') {
                p3cont1++;
                f_ok($('#p3dcon6'));
            } else {
                p3cont1;
                f_no($('#p3dcon6'));
            }
            if (p3dcon7 == '7') {
                p3cont1++;
                f_ok($('#p3dcon7'));
            } else {
                p3cont1;
                f_no($('#p3dcon7'));
            }
            if (p3dcon8 == '7') {
                p3cont1++;
                f_ok($('#p3dcon8'));
            } else {
                p3cont1;
                f_no($('#p3dcon8'));
            }
            if (p3dcon9 == '7') {
                p3cont1++;
                f_ok($('#p3dcon9'));
            } else {
                p3cont1;
                f_no($('#p3dcon9'));
            }
            if (p3dcon10 == '0') {
                p3cont1++;
                f_ok($('#p3dcon10'));
            } else {
                p3cont1;
                f_no($('#p3dcon10'));
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

            var p32dcon2 = $('#p32dcon2').val() + $('#p32dcon3').val();
            var p32dcon4 = $('#p32dcon4').val() + $('#p32dcon5').val();
            var p32dcon6 = $('#p32dcon6').val();
            var p32dcon7 = $('#p32dcon7').val();
            var p32dcon8 = $('#p32dcon8').val();
            var p32dcon9 = $('#p32dcon9').val();
            var p32dcon10 = $('#p32dcon10').val();
            var p32dcon11 = $('#p32dcon11').val();
            var p32dcon12 = $('#p32dcon12').val();
            var p32dcon13 = $('#p32dcon13').val();
            var p32dcon14 = $('#p32dcon14').val();
            var p32dcon15 = $('#p32dcon15').val();
            var p32dcon16 = $('#p32dcon16').val();
            if (p32dcon2 == '12') {
                p3cont1++;
                f_ok($('#p32dcon2'));
                f_ok($('#p32dcon3'));
            } else {
                p3cont1;
                f_no($('#p32dcon2'));
                f_no($('#p32dcon3'));
            }
            if (p32dcon4 == '12') {
                p3cont1++;
                f_ok($('#p32dcon4'));
                f_ok($('#p32dcon5'));
            } else {
                p3cont1;
                f_no($('#p32dcon4'));
                f_no($('#p32dcon5'));
            }
            if (p32dcon6 == '3') {
                p3cont1++;
                f_ok($('#p32dcon6'));
            } else {
                p3cont1;
                f_no($('#p32dcon6'));
            }
            if (p32dcon7 == '9') {
                p3cont1++;
                f_ok($('#p32dcon7'));
            } else {
                p3cont1;
                f_no($('#p32dcon7'));
            }
            if (p32dcon8 == '9') {
                p3cont1++;
                f_ok($('#p32dcon8'));
            } else {
                p3cont1;
                f_no($('#p32dcon8'));
            }
            if (p32dcon9 == '3') {
                p3cont1++;
                f_ok($('#p32dcon9'));
            } else {
                p3cont1;
                f_no($('#p32dcon9'));
            }
            if (p32dcon10 == '6') {
                p3cont1++;
                f_ok($('#p32dcon10'));
            } else {
                p3cont1;
                f_no($('#p32dcon10'));
            }
            if (p32dcon11 == '6') {
                p3cont1++;
                f_ok($('#p32dcon11'));
            } else {
                p3cont1;
                f_no($('#p32dcon11'));
            }
            if (p32dcon12 == '3') {
                p3cont1++;
                f_ok($('#p32dcon12'));
            } else {
                p3cont1;
                f_no($('#p32dcon12'));
            }
            if (p32dcon13 == '3') {
                p3cont1++;
                f_ok($('#p32dcon13'));
            } else {
                p3cont1;
                f_no($('#p32dcon13'));
            }
            if (p32dcon14 == '3') {
                p3cont1++;
                f_ok($('#p32dcon14'));
            } else {
                p3cont1;
                f_no($('#p32dcon14'));
            }
            if (p32dcon15 == '3') {
                p3cont1++;
                f_ok($('#p32dcon15'));
            } else {
                p3cont1;
                f_no($('#p32dcon15'));
            }
            if (p32dcon16 == '0') {
                p3cont1++;
                f_ok($('#p32dcon16'));
            } else {
                p3cont1;
                f_no($('#p32dcon16'));
            }
            for (var i = 0; i < 3; i++) {
                var p3res1 = $('#p3dco' + (i + 1)).val();
                if (p3res1 == (i+1)) {
                    p3cont1++;
                    f_ok($('#p3dco' + (i + 1)));
                } else {
                    p3cont1;
                    f_no($('#p3dco' + (i + 1)));
                }
            }
            for (var i = 0; i < 4; i++) {
                var p3res2 = $('#p31dco' + (i + 1)).val();
                if (p3res2 == (i+1)) {
                    p3cont1++;
                    f_ok($('#p31dco' + (i + 1)));
                } else {
                    p3cont1;
                    f_no($('#p31dco' + (i + 1)));
                }
            }
            for (var i = 0; i < 5; i++) {
                var p3res3 = $('#p32dco' + (i + 1)).val();
                if (p3res3 == (i+1)) {
                    p3cont1++;
                    f_ok($('#p32dco' + (i + 1)));
                } else {
                    p3cont1;
                    f_no($('#p32dco' + (i + 1)));
                }
            }
            var result3 = (p3cont1 * 1) / 45;
            cor = cor + result3;
            inc = inc + (1 - result3);
            $('#pre3a').val(result3.toFixed(2));
            $('#pre3a').css('display', '');

            var p4=1;
            var p4cont1=0;
            for (var i = 0; i < 6; i++) {
                var p4res1=$('#p4'+i+'dcon1').val();
                if (p4res1==p4vec1[p4]) {
                    p4cont1++;
                    f_ok($('#p4'+i+'dcon1'));
                }else{
                    p4cont1;
                    f_no($('#p4'+i+'dcon1'));
                }
                var p4res2=$('#p4'+i+'dcon2').val();
                if (p4res2==p4vec1[p4]) {
                    p4cont1++;
                    f_ok($('#p4'+i+'dcon2'));
                }else{
                    p4cont1;
                    f_no($('#p4'+i+'dcon2'));
                }
                p4=p4+2;
            }
            var result4 = (p4cont1 * 1) / 12;
            cor = cor + result4;
            inc = inc + (1 - result4);
            $('#pre4a').val(result4.toFixed(2));
            $('#pre4a').css('display', '');

            var act5num1=$('#act5num1').val()+$('#act5num2').val();
            var act5num3=$('#act5num3').val();
            var act5num4=$('#act5num4').val();
            var act5num5=$('#act5num5').val();
            var p5cont1=0;
            if (act5num1 == p5vec2[0]) {
                p5cont1++;
                f_ok($('#act5num1'));
                f_ok($('#act5num2'));
            } else {
                p5cont1;
                f_no($('#act5num1'));
                f_no($('#act5num2'));
            }
            if (act5num3 == p5vec1[1]) {
                p5cont1++;
                f_ok($('#act5num3'));
            } else {
                p5cont1;
                f_no($('#act5num3'));
            }
            if (act5num4 == '0') {
                p5cont1++;
                f_ok($('#act5num4'));
            } else {
                p5cont1;
                f_no($('#act5num4'));
            }
            if (act5num5 == p5vec1[1]) {
                p5cont1++;
                f_ok($('#act5num5'));
            } else {
                p5cont1;
                f_no($('#act5num5'));
            }
            var act51num1=$('#act51num1').val()+$('#act51num2').val();
            var act51num3=$('#act51num3').val();
            var act51num4=$('#act51num4').val();
            var act51num5=$('#act51num5').val();
            if (act51num1 == p5vec2[1]) {
                p5cont1++;
                f_ok($('#act51num1'));
                f_ok($('#act51num2'));
            } else {
                p5cont1;
                f_no($('#act51num1'));
                f_no($('#act51num2'));
            }
            if (act51num3 == p5vec1[3]) {
                p5cont1++;
                f_ok($('#act51num3'));
            } else {
                p5cont1;
                f_no($('#act51num3'));
            }
            if (act51num4 == '0') {
                p5cont1++;
                f_ok($('#act51num4'));
            } else {
                p5cont1;
                f_no($('#act51num4'));
            }
            if (act51num5 == p5vec1[3]) {
                p5cont1++;
                f_ok($('#act51num5'));
            } else {
                p5cont1;
                f_no($('#act51num5'));
            }
            var act52num1=$('#act52num1').val()+$('#act52num2').val();
            var act52num3=$('#act52num3').val();
            var act52num4=$('#act52num4').val();
            var act52num5=$('#act52num5').val();
            if (act52num1 == p5vec2[2]) {
                p5cont1++;
                f_ok($('#act52num1'));
                f_ok($('#act52num2'));
            } else {
                p5cont1;
                f_no($('#act52num1'));
                f_no($('#act52num2'));
            }
            if (act52num3 == p5vec1[5]) {
                p5cont1++;
                f_ok($('#act52num3'));
            } else {
                p5cont1;
                f_no($('#act52num3'));
            }
            if (act52num4 == '0') {
                p5cont1++;
                f_ok($('#act52num4'));
            } else {
                p5cont1;
                f_no($('#act52num4'));
            }
            if (act52num5 == p5vec1[5]) {
                p5cont1++;
                f_ok($('#act52num5'));
            } else {
                p5cont1;
                f_no($('#act52num5'));
            }
            var result5 = (p5cont1 * 1) / 12;
            cor = cor + result5;
            inc = inc + (1 - result5);
            $('#pre5a').val(result5.toFixed(2));
            $('#pre5a').css('display', '');

            var p6res1 = $('#p6rs1 .encierra span').text();
            var p6cont1 = 0;
            if (!p6res1) {
                p6cont1;
                f_no($('.1'));
            } else {
                if (p6res1 == '4') {
                    p6cont1++;
                    f_ok($('#p6rs1 .encierra'));
                } else {
                    p6cont1;
                    f_no($('#p6rs1 .encierra'));
                }
            }
            var p6res2 = $('#p6rs2 .encierra span').text();
            if (!p6res2) {
                p6cont1;
                f_no($('.2'));
            } else {
                if (p6res2 == '8') {
                    p6cont1++;
                    f_ok($('#p6rs2 .encierra'));
                } else {
                    p6cont1;
                    f_no($('#p6rs2 .encierra'));
                }
            }
            var result6 = (p6cont1 * 1) / 2;
            cor = cor + result6;
            inc = inc + (1 - result6);
            $('#pre6a').val(result6.toFixed(2));
            $('#pre6a').css('display', '');

            var p7dcon1=$('#p7dcon1').val();
            var p7dcon2=$('#p7dcon2').val()+$('#p7dcon3').val()+$('#p7dcon4').val();
            var p7dcon5=$('#p7dcon5').val()+$('#p7dcon6').val()+$('#p7dcon7').val();
            var p7dcon8=$('#p7dcon8').val()+$('#p7dcon9').val()+$('#p7dcon10').val();
            var p7dcon11=$('#p7dcon11').val();
            var p7dcon12=$('#p7dcon12').val();
            var p7dcon13=$('#p7dcon13').val();
            var p7cont1=0;
            if (p7dcon1=='84') {
                p7cont1++;
                f_ok($('#p7dcon1'));
            }else{
                p7cont1;
                f_no($('#p7dcon1'));
            }
            if (p7dcon2=='84242') {
                p7cont1++;
                f_ok($('#p7dcon2'));
                f_ok($('#p7dcon3'));
                f_ok($('#p7dcon4'));
            }else{
                p7cont1;
                f_no($('#p7dcon2'));
                f_no($('#p7dcon3'));
                f_no($('#p7dcon4'));
            }
            if (p7dcon5=='42314') {
                p7cont1++;
                f_ok($('#p7dcon5'));
                f_ok($('#p7dcon6'));
                f_ok($('#p7dcon7'));
            }else{
                p7cont1;
                f_no($('#p7dcon5'));
                f_no($('#p7dcon6'));
                f_no($('#p7dcon7'));
            }
            if (p7dcon8=='84421') {
                p7cont1++;
                f_ok($('#p7dcon8'));
                f_ok($('#p7dcon9'));
                f_ok($('#p7dcon10'));
            }else{
                p7cont1;
                f_no($('#p7dcon8'));
                f_no($('#p7dcon9'));
                f_no($('#p7dcon10'));
            }
            if (p7dcon11=='42') {
                p7cont1++;
                f_ok($('#p7dcon11'));
            }else{
                p7cont1;
                f_no($('#p7dcon11'));
            }
            if (p7dcon12=='14') {
                p7cont1++;
                f_ok($('#p7dcon12'));
            }else{
                p7cont1;
                f_no($('#p7dcon12'));
            }
            if (p7dcon13=='21') {
                p7cont1++;
                f_ok($('#p7dcon13'));
            }else{
                p7cont1;
                f_no($('#p7dcon13'));
            }
            var result7 = (p7cont1 * 1) / 7;
            cor = cor + result7;
            inc = inc + (1 - result7);
            $('#pre7a').val(result7.toFixed(2));
            $('#pre7a').css('display', '');

            var p8dcon1=$('#p8dcon1').val();
            var p8dcon2=$('#p8dcon2').val();
            var p8dcon3=$('#p8dcon3').val();
            var p8dcon4=$('#p8dcon4').val();
            var p8dcon5=$('#p8dcon5').val();
            var p8cont1=0;
            if (p8dcon1==p8n1+'000') {
                p8cont1++;
                f_ok($('#p8dcon1'));
            }else{
                p8cont1;
                f_no($('#p8dcon1'));
            }
            if (p8dcon2==p8n1+'000') {
                p8cont1++;
                f_ok($('#p8dcon2'));
            }else{
                p8cont1;
                f_no($('#p8dcon2'));
            }
            if (p8dcon3=='450') {
                p8cont1++;
                f_ok($('#p8dcon3'));
            }else{
                p8cont1;
                f_no($('#p8dcon3'));
            }
            if (p8dcon4==(p8n1*1000)-450) {
                p8cont1++;
                f_ok($('#p8dcon4'));
            }else{
                p8cont1;
                f_no($('#p8dcon4'));
            }
            if (p8dcon5==(p8n1*1000)-450) {
                p8cont1++;
                f_ok($('#p8dcon5'));
            }else{
                p8cont1;
                f_no($('#p8dcon5'));
            }
            var p81dcon1=$('#p81dcon1').val()+$('#p81dcon2').val()+$('#p81dcon3').val();
            var p81dcon4=$('#p81dcon4').val()+$('#p81dcon5').val()+$('#p81dcon6').val();
            var p81dcon7=$('#p81dcon7').val()+$('#p81dcon8').val()+$('#p81dcon9').val();
            var p81dcon10=$('#p81dcon10').val();
            if (p81dcon1==p8vec1[0]) {
                p8cont1++;
                f_ok($('#p81dcon1'));
                f_ok($('#p81dcon2'));
                f_ok($('#p81dcon3'));
            }else{
                p8cont1;
                f_no($('#p81dcon1'));
                f_no($('#p81dcon2'));
                f_no($('#p81dcon3'));
            }
            if (p81dcon4==p8vec1[1]) {
                p8cont1++;
                f_ok($('#p81dcon4'));
                f_ok($('#p81dcon5'));
                f_ok($('#p81dcon6'));
            }else{
                p8cont1;
                f_no($('#p81dcon4'));
                f_no($('#p81dcon5'));
                f_no($('#p81dcon6'));
            }
            if (p81dcon7==(p8vec1[0]-p8vec1[1])) {
                p8cont1++;
                f_ok($('#p81dcon7'));
                f_ok($('#p81dcon8'));
                f_ok($('#p81dcon9'));
            }else{
                p8cont1;
                f_no($('#p81dcon7'));
                f_no($('#p81dcon8'));
                f_no($('#p81dcon9'));
            }
            if (p81dcon10==(p8vec1[0]-p8vec1[1])) {
                p8cont1++;
                f_ok($('#p81dcon10'));
            }else{
                p8cont1;
                f_no($('#p81dcon10'));
            }
            var result8 = (p8cont1 * 1) / 9;
            cor = cor + result8;
            inc = inc + (1 - result8);
            $('#pre8a').val(result8.toFixed(2));
            $('#pre8a').css('display', '');

            var p9dcon1=$('#p9dcon1').val();
            var p9dcon2=$('#p9dcon2').val();
            var p9dcon3=$('#p9dcon3').val();
            var p9cont1=0;
            if (p9dcon1=='litoral' || p9dcon1=='amazonia') {
                p9cont1++;
                f_ok($('#p9dcon1'));
            }else{
                p9cont1;
                f_no($('#p9dcon1'));
            }
            if ((p9dcon2=='litoral' || p9dcon2=='amazonia') && p9dcon2!=p9dcon1) {
                p9cont1++;
                f_ok($('#p9dcon2'));
            }else{
                p9cont1;
                f_no($('#p9dcon2'));
            }
            if (p9dcon3=='12') {
                p9cont1++;
                f_ok($('#p9dcon3'));
            }else{
                p9cont1;
                f_no($('#p9dcon3'));
            }
            var result9 = (p9cont1 * 1) / 3;
            cor = cor + result9;
            inc = inc + (1 - result9);
            $('#pre9a').val(result9.toFixed(2));
            $('#pre9a').css('display', '');
            Calculo_nota()
        }

    }