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
    document.getElementById('pre8a').addEventListener('keypress', () => {
        validNumero(0, 1, 1);
    });
    document.getElementById('pre8a').addEventListener('keyup', () => {
        validMaxIngreso(document.getElementById('pre8a'), 1)
    });
    function f_iniciar() {
        var p1vec1 = [(Math.floor(Math.random() * 15) + 1)];
        var p1pt1 = (Math.floor(Math.random() * 8) + 2);
        var p1pt2 = (Math.floor(Math.random() * 8) + 2);
        for (var i = 0; i < 5; i++) {
            if (i % 2 == 0) {
                p1vec1.push(p1vec1[i] * p1pt1);
            } else {
                p1vec1.push(p1vec1[i] * p1pt2);
            }
        }
        $('#p1im1').html('x' + p1pt1);
        $('#p1im2').html('x' + p1pt2);
        $('#p1im3').html('x' + p1pt1);
        $('#p1im4').html('x' + p1pt2);
        $('#p1im5').html('x' + p1pt1);
        $('#p1im6').html(p1vec1[0]);

        var p1vec2 = [(Math.floor(Math.random() * 15) + 1)];
        var p1pt3 = (Math.floor(Math.random() * 8) + 2);
        var p1pt4 = (Math.floor(Math.random() * 8) + 2);
        for (var i = 0; i < 5; i++) {
            if (i % 2 == 0) {
                p1vec2.push(p1vec2[i] * p1pt3);
            } else {
                p1vec2.push(p1vec2[i] * p1pt4);
            }
        }
        $('#p11im1').html('x' + p1pt3);
        $('#p11im2').html('x' + p1pt4);
        $('#p11im3').html('x' + p1pt3);
        $('#p11im4').html('x' + p1pt4);
        $('#p11im5').html('x' + p1pt3);
        $('#p11im6').html(p1vec2[0]);

        var pal1 = [
            '<img class="drag1" src="img/i4_p198_u5a9.jpg" style="mix-blend-mode:multiply">',
            '<img class="drag1" src="img/i4_p198_u5a9.jpg" style="mix-blend-mode:multiply"> ',
            '<img class="drag1" src="img/i4_p198_u5a9.jpg" style="mix-blend-mode:multiply">',
            '<img class="drag1" src="img/i4_p198_u5a9.jpg" style="mix-blend-mode:multiply">',
            '<img class="drag1" src="img/i4_p198_u5a9.jpg" style="mix-blend-mode:multiply">',
            '<img class="drag1" src="img/i4_p198_u5a9.jpg" style="mix-blend-mode:multiply">',
            '<img class="drag1" src="img/i4_p198_u5a9.jpg" style="mix-blend-mode:multiply">',
            '<img class="drag1" src="img/i4_p198_u5a9.jpg" style="mix-blend-mode:multiply">',
            '<img class="drag1" src="img/i4_p198_u5a9.jpg" style="mix-blend-mode:multiply">',
            '<img class="drag1" src="img/i4_p198_u5a9.jpg" style="mix-blend-mode:multiply">',
            '<img class="drag1" src="img/i4_p198_u5a9.jpg" style="mix-blend-mode:multiply">',
            '<img class="drag1" src="img/i4_p198_u5a9.jpg" style="mix-blend-mode:multiply">',
        ];
        $('.textos').html(pal1);
        $(".drag1").draggable({
            revert: "invalid",
            zIndex: 5,
            containment: ".actividad1",
            scroll: false
        });
        $(".drop1").droppable({
            accept: ".drag1",
            drop: function(e, ui) {
                $(ui.draggable).removeClass("drag1");
                ui.draggable.attr("style", "mix-blend-mode:multiply;");
                $(this).append(ui.draggable);
            }
        });
        var pal2 = [
            '<img class="drag2" src="img/i5_p198_u5a9.jpg" style="mix-blend-mode:multiply">',
            '<img class="drag2" src="img/i5_p198_u5a9.jpg" style="mix-blend-mode:multiply"> ',
            '<img class="drag2" src="img/i5_p198_u5a9.jpg" style="mix-blend-mode:multiply">',
            '<img class="drag2" src="img/i5_p198_u5a9.jpg" style="mix-blend-mode:multiply">',
            '<img class="drag2" src="img/i5_p198_u5a9.jpg" style="mix-blend-mode:multiply">',
            '<img class="drag2" src="img/i5_p198_u5a9.jpg" style="mix-blend-mode:multiply">',
            '<img class="drag2" src="img/i5_p198_u5a9.jpg" style="mix-blend-mode:multiply">',
            '<img class="drag2" src="img/i5_p198_u5a9.jpg" style="mix-blend-mode:multiply">',
            '<img class="drag2" src="img/i5_p198_u5a9.jpg" style="mix-blend-mode:multiply">',
            '<img class="drag2" src="img/i5_p198_u5a9.jpg" style="mix-blend-mode:multiply">',
        ];
        $('.textos1').html(pal2);
        $(".drag2").draggable({
            revert: "invalid",
            zIndex: 5,
            containment: ".actividad2",
            scroll: false
        });
        $(".drop2").droppable({
            accept: ".drag2",
            drop: function(e, ui) {
                $(ui.draggable).removeClass("drag2");
                ui.draggable.attr("style", "mix-blend-mode:multiply;");
                $(this).append(ui.draggable);
            }
        });

        var pal3 = [
            '<b>20 ÷ 4 =</b><input type="text" style="border: none; border-bottom: 2px dotted black; width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)" id="p3dcon1">',
            '<b>24 ÷ 4 =</b><input type="text" style="border: none; border-bottom: 2px dotted black; width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)" id="p3dcon2">',
            '<b>12 ÷ 2 =</b> <input type="text" style="border: none; border-bottom: 2px dotted black; width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)" id="p3dcon3">',
            '<b>15 ÷ 5 =</b> <input type="text" style="border: none; border-bottom: 2px dotted black; width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)" id="p3dcon4">',
        ];
        var pal4 = [
            '<img class="drag3 img-responsive" src="img/i6_p198_u5a9.jpg" style="display:inline-block; mix-blend-mode:multiply" alt="1">',
            '<img class="drag3 img-responsive" src="img/i7_p198_u5a9.jpg" style="display:inline-block; mix-blend-mode:multiply" alt="2">',
            '<img class="drag3 img-responsive" src="img/i8_p198_u5a9.jpg" style="display:inline-block; mix-blend-mode:multiply" alt="3">',
            '<img class="drag3 img-responsive" src="img/i9_p198_u5a9.jpg" style="display:inline-block; mix-blend-mode:multiply" alt="4">'
        ];
        pal4.sort(f_randomico);
        $('.textos2').html(pal4);
        var p3vec1 = ['2', '3', '1', '4'];
        var p3aux1 = [];
        var myArray1 = ["0", "1", "2", "3"];
        var i, j, k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
        //aleatorio literal 1
        for (var i = 1; i <= 4; i++) {
            var c1 = myArray1[i - 1];
            $(".p3cim" + i).html(pal3[c1]);
            p3aux1.push(p3vec1[c1]);
        }
        $(".drag3").draggable({
            revert: "invalid",
            zIndex: 5,
            containment: ".actividad3",
            scroll: false
        });
        $(".drop3").droppable({
            accept: ".drag3",
            drop: function(e, ui) {
                $(ui.draggable).removeClass("drag3");
                ui.draggable.attr("style", "mix-blend-mode:multiply;");
                $(this).append(ui.draggable);
            }
        });

        var p4vec1 = [
            '<p><b style="color: #005CA4;" id="p4l1"></b> 27 ÷ 9 = <input type="text" style="border: none; border-bottom: 2px dotted black; width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)" id="p4dcon1"></p>' +
            '<div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black">2</td>' +
            '<td style="border: 1px solid black">7</td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black">9</td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p4dcon2"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p4dcon3"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p4dco1">' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p4dcon4"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p4dcon5"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p4dcon6"></td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p4dcon7"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p4dco2">' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p4dcon8"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p4dcon9"></td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p4dcon10"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p4dco3">' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '</div>',
            '<p><b style="color: #005CA4;" id="p4l2"></b> 16 ÷ 4 = <input type="text" style="border: none; border-bottom: 2px dotted black; width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)" id="p41dcon1"></p>' +
            '<div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black">1</td>' +
            '<td style="border: 1px solid black">6</td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black">4</td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p41dcon2"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p41dcon3"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p41dco1">' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p41dcon4"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p41dcon5"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p41dcon6"></td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p41dcon7"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p41dco2">' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p41dcon8"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p41dcon9"></td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p41dcon10"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p41dco3">' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p41dcon11"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p41dcon12"></td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p41dcon13"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p41dco4">' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '</div>',
            '<p><b style="color: #005CA4;" id="p4l3"></b> 20 ÷ 10 = <input type="text" style="border: none; border-bottom: 2px dotted black; width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)" id="p42dcon1"></p>' +
            '<div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black">2</td>' +
            '<td style="border: 1px solid black">0</td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black">1</td>' +
            '<td style="border: 1px solid black">0</td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p42dcon2"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p42dcon3"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p42dco1">' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '<div class="table-responsive" style="display: inline-block; padding: 10px;">' +
            '<table >' +
            '<tr align="center">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p42dcon4"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p42dcon5"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td style="border: 1px solid black">-</td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p42dcon6"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p42dcon7"></td>' +
            '</tr>' +
            '<tr align="center" style="border-top: 4px solid black;">' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"></td>' +
            '<td style="border: 1px solid black"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p42dcon8"></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3">' +
            '<input type="text" style="border: 3px solid #638DC9; border-radius: 40%; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros1(event)" id="p42dco2">' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '</div>'
        ];
        var p4aux1 = [];
        var myArray2 = ["0", "1", "2"];
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
            $("#p4im" + i).html(p4vec1[c2]);
            p4aux1.push(c2);
        }
        var p4vec2 = ['a)', 'b)', 'c)'];
        for (var i = 1; i <= 3; i++) {
            $('#p4l' + (parseInt(p4aux1[i - 1]) + 1)).text(p4vec2[i - 1]);
        }

        var p5vec1 = [
            ['<b style="color: #005ca4"><li></li></b><br>' +
                '<table class="table-bordered">' +
                '<tr align="center">' +
                '<td></td>' +
                '<td></td>' +
                '<td>5</td>' +
                '<td>4</td>' +
                '<td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;">9</td>' +
                '<td></td>' +
                '</tr>' +
                '<tr align="center">' +
                '<td></td>' +
                '<td>' +
                '<div></div>' +
                '</td>' +
                '<td>' +
                '</td>' +
                '<td>' +
                '<input class="inputDiv sinEspacios" onkeypress="return soloNumeros1(event)" maxlength="1" id="act5num1"></input>' +
                '</td>' +
                '<td style="border-left: 2px solid #000000;">' +
                '<input class="inputDiv sinEspacios" onkeypress="return soloNumeros1(event)" maxlength="1" id="act5num2"></input>' +
                '</td>' +
                '<td></td>' +
                '</tr>' +
                '</table>' +
                '<br><div class="table-responsive">' +
                '<p>54 ÷ 9 = <input type="text" style="border: none; border-bottom: 2px dotted black; width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)" id="p5dcon1"></p>' +
                '<p>Porque <input type="text" style="border: none; border-bottom: 2px dotted black; width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)" id="p5dcon2"> × 9 = 54</p>' +
                '</div>'
            ],
            ['<b style="color: #005ca4"><li></li></b><br>' +
                '<table class="table-bordered">' +
                '<tr align="center">' +
                '<td></td>' +
                '<td></td>' +
                '<td>4</td>' +
                '<td>0</td>' +
                '<td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;">5</td>' +
                '<td></td>' +
                '</tr>' +
                '<tr align="center">' +
                '<td></td>' +
                '<td>' +
                '<div></div>' +
                '</td>' +
                '<td>' +
                '</td>' +
                '<td>' +
                '<input class="inputDiv sinEspacios" onkeypress="return soloNumeros1(event)" maxlength="1" id="act5num11"></input>' +
                '</td>' +
                '<td style="border-left: 2px solid #000000;">' +
                '<input class="inputDiv sinEspacios" onkeypress="return soloNumeros1(event)" maxlength="1" id="act5num12"></input>' +
                '</td>' +
                '<td></td>' +
                '</tr>' +
                '</table>' +
                '<br><div class="table-responsive">' +
                '<p>40 ÷ 5 = <input type="text" style="border: none; border-bottom: 2px dotted black; width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)" id="p51dcon1"></p>' +
                '<p>Porque <input type="text" style="border: none; border-bottom: 2px dotted black; width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)" id="p51dcon2"> × 5 = 40</p>' +
                '</div>'
            ],
            ['<b style="color: #005ca4"><li></li></b><br>' +
                '<table class="table-bordered">' +
                '<tr align="center">' +
                '<td></td>' +
                '<td></td>' +
                '<td>2</td>' +
                '<td>8</td>' +
                '<td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;">7</td>' +
                '<td></td>' +
                '</tr>' +
                '<tr align="center">' +
                '<td></td>' +
                '<td>' +
                '<div></div>' +
                '</td>' +
                '<td>' +
                '</td>' +
                '<td>' +
                '<input class="inputDiv sinEspacios" onkeypress="return soloNumeros1(event)" maxlength="1" id="act5num21"></input>' +
                '</td>' +
                '<td style="border-left: 2px solid #000000;">' +
                '<input class="inputDiv sinEspacios" onkeypress="return soloNumeros1(event)" maxlength="1" id="act5num22"></input>' +
                '</td>' +
                '<td></td>' +
                '</tr>' +
                '</table>' +
                '<br><div class="table-responsive">' +
                '<p>28 ÷ 7 = <input type="text" style="border: none; border-bottom: 2px dotted black; width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)" id="p52dcon1"></p>' +
                '<p>Porque <input type="text" style="border: none; border-bottom: 2px dotted black; width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)" id="p52dcon2"> × 7 = 28</p>' +
                '</div>'
            ],
            ['<b style="color: #005ca4"><li></li></b><br>' +
                '<table class="table-bordered">' +
                '<tr align="center">' +
                '<td></td>' +
                '<td></td>' +
                '<td>2</td>' +
                '<td>7</td>' +
                '<td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;">3</td>' +
                '<td></td>' +
                '</tr>' +
                '<tr align="center">' +
                '<td></td>' +
                '<td>' +
                '<div></div>' +
                '</td>' +
                '<td>' +
                '</td>' +
                '<td>' +
                '<input class="inputDiv sinEspacios" onkeypress="return soloNumeros1(event)" maxlength="1" id="act5num31"></input>' +
                '</td>' +
                '<td style="border-left: 2px solid #000000;">' +
                '<input class="inputDiv sinEspacios" onkeypress="return soloNumeros1(event)" maxlength="1" id="act5num32"></input>' +
                '</td>' +
                '<td></td>' +
                '</tr>' +
                '</table>' +
                '<br><div class="table-responsive">' +
                '<p>27 ÷ 3 = <input type="text" style="border: none; border-bottom: 2px dotted black; width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)" id="p53dcon1"></p>' +
                '<p>Porque <input type="text" style="border: none; border-bottom: 2px dotted black; width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)" id="p53dcon2"> × 3 = 27</p>' +
                '</div>'
            ],
        ];
        p5vec1.sort(f_randomico);
        $('#act05Txt0').html(p5vec1[0]);
        $('#act05Txt1').html(p5vec1[1]);
        $('#act05Txt2').html(p5vec1[2]);
        $('#act05Txt3').html(p5vec1[3]);

        var p6vec1 = [(Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 8) + 2)];
        if (p6vec1[0] == p6vec1[1]) {
            p6vec1[1] = p6vec1[1] + 1;
        }
        p6vec1.push(p6vec1[0] * p6vec1[1]);
        $('#p6im1').html(p6vec1[0]);
        $('#p6im2').html(p6vec1[1]);
        $('#p6im3').html(p6vec1[2]);
        var p6a2 = p6vec1[2] + '÷' + p6vec1[0] + '=' + p6vec1[1];
        var p6a3 = p6vec1[2] + '÷' + p6vec1[1] + '=' + p6vec1[0];

        var p6vec2 = [(Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 8) + 2)];
        if (p6vec2[0] == p6vec2[1]) {
            p6vec2[1] = p6vec2[1] + 1;
        }
        p6vec2.push(p6vec2[0] * p6vec2[1]);
        $('#p61im1').html(p6vec2[0]);
        $('#p61im2').html(p6vec2[1]);
        $('#p61im3').html(p6vec2[2]);
        var p6a4 = p6vec2[2] + '÷' + p6vec2[0] + '=' + p6vec2[1];
        var p6a5 = p6vec2[2] + '÷' + p6vec2[1] + '=' + p6vec2[0];

        var p7vec1 = [
            '<p><b style="color: #005CA4;" id="p7im1"></b></p>' +
            '<div class="table-responsive" align="center">' +
            '<table>' +
            '<tr align="center">' +
            '<td>(</td>' +
            '<td>24</td>' +
            '<td>÷</td>' +
            '<td>2</td>' +
            '<td>)</td>' +
            '<td>-</td>' +
            '<td>3</td>' +
            '<td>x</td>' +
            '<td>3</td>' +
            '<td>=</td>' +
            '<td></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="5"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="3" onkeypress="return soloNumeros1(event)" id="p7dcon1"></td>' +
            '<td>-</td>' +
            '<td colspan="3"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="3" onkeypress="return soloNumeros1(event)" id="p7dcon2"></td>' +
            '<td>=</td>' +
            '<td></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="5"></td>' +
            '<td></td>' +
            '<td colspan="3"></td>' +
            '<td>=</td>' +
            '<td><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="3" onkeypress="return soloNumeros1(event)" id="p7dcon3"></td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '<p><b style="color: #005CA4;" id="p7im2"></b></p>' +
            '<div class="table-responsive" align="center">' +
            '<table>' +
            '<tr align="center">' +
            '<td>(</td>' +
            '<td>24</td>' +
            '<td>+</td>' +
            '<td>6</td>' +
            '<td>)</td>' +
            '<td>-</td>' +
            '<td>(</td>' +
            '<td>7</td>' +
            '<td>x</td>' +
            '<td>3</td>' +
            '<td>)</td>' +
            '<td>=</td>' +
            '<td></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="5"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="3" onkeypress="return soloNumeros1(event)" id="p71dcon1"></td>' +
            '<td>-</td>' +
            '<td colspan="5"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="3" onkeypress="return soloNumeros1(event)" id="p71dcon2"></td>' +
            '<td>=</td>' +
            '<td></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="5"></td>' +
            '<td></td>' +
            '<td colspan="5"></td>' +
            '<td>=</td>' +
            '<td><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="3" onkeypress="return soloNumeros1(event)" id="p71dcon3"></td>' +
            '</tr>' +
            '</table>' +
            '</div>',
            '<p><b style="color: #005CA4;" id="p7im3"></b></p>' +
            '<div class="table-responsive" align="center">' +
            '<table>' +
            '<tr align="center">' +
            '<td>(</td>' +
            '<td>3</td>' +
            '<td>x</td>' +
            '<td>8</td>' +
            '<td>)</td>' +
            '<td>-</td>' +
            '<td>5</td>' +
            '<td>x</td>' +
            '<td>2</td>' +
            '<td>=</td>' +
            '<td></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="5"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="3" onkeypress="return soloNumeros1(event)" id="p72dcon1"></td>' +
            '<td>-</td>' +
            '<td colspan="3"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="3" onkeypress="return soloNumeros1(event)" id="p72dcon2"></td>' +
            '<td>=</td>' +
            '<td></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="5"></td>' +
            '<td></td>' +
            '<td colspan="3"></td>' +
            '<td>=</td>' +
            '<td><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="3" onkeypress="return soloNumeros1(event)" id="p72dcon3"></td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '<p><b style="color: #005CA4;" id="p7im4"></b></p>' +
            '<div class="table-responsive" align="center">' +
            '<table>' +
            '<tr align="center">' +
            '<td>6</td>' +
            '<td>x</td>' +
            '<td>6</td>' +
            '<td>+</td>' +
            '<td>16</td>' +
            '<td>÷</td>' +
            '<td>8</td>' +
            '<td>=</td>' +
            '<td></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="3" onkeypress="return soloNumeros1(event)" id="p73dcon1"></td>' +
            '<td>+</td>' +
            '<td colspan="3"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="3" onkeypress="return soloNumeros1(event)" id="p73dcon2"></td>' +
            '<td>=</td>' +
            '<td></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3"></td>' +
            '<td></td>' +
            '<td colspan="3"></td>' +
            '<td>=</td>' +
            '<td><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="3" onkeypress="return soloNumeros1(event)" id="p73dcon3"></td>' +
            '</tr>' +
            '</table>' +
            '</div>',
            '<p><b style="color: #005CA4;" id="p7im5"></b></p>' +
            '<div class="table-responsive" align="center">' +
            '<table>' +
            '<tr align="center">' +
            '<td>(</td>' +
            '<td>54</td>' +
            '<td>-</td>' +
            '<td>9</td>' +
            '<td>)</td>' +
            '<td>+</td>' +
            '<td>25</td>' +
            '<td>÷</td>' +
            '<td>5</td>' +
            '<td>=</td>' +
            '<td></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="5"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="3" onkeypress="return soloNumeros1(event)" id="p74dcon1"></td>' +
            '<td>+</td>' +
            '<td colspan="3"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="3" onkeypress="return soloNumeros1(event)" id="p74dcon2"></td>' +
            '<td>=</td>' +
            '<td></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="5"></td>' +
            '<td></td>' +
            '<td colspan="3"></td>' +
            '<td>=</td>' +
            '<td><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="3" onkeypress="return soloNumeros1(event)" id="p74dcon3"></td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '<p><b style="color: #005CA4;" id="p7im6"></b></p>' +
            '<div class="table-responsive" align="center">' +
            '<table>' +
            '<tr align="center">' +
            '<td>33</td>' +
            '<td>-</td>' +
            '<td>8</td>' +
            '<td>+</td>' +
            '<td>(</td>' +
            '<td>28</td>' +
            '<td>÷</td>' +
            '<td>7</td>' +
            '<td>)</td>' +
            '<td>=</td>' +
            '<td></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="3" onkeypress="return soloNumeros1(event)" id="p75dcon1"></td>' +
            '<td>+</td>' +
            '<td colspan="5"><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="3" onkeypress="return soloNumeros1(event)" id="p75dcon2"></td>' +
            '<td>=</td>' +
            '<td></td>' +
            '</tr>' +
            '<tr align="center">' +
            '<td colspan="3"></td>' +
            '<td></td>' +
            '<td colspan="5"></td>' +
            '<td>=</td>' +
            '<td><input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="3" onkeypress="return soloNumeros1(event)" id="p75dcon3"></td>' +
            '</tr>' +
            '</table>' +
            '</div>' ,
        ];
        var p7aux1 = [];
        var p7vec3=['12','34','56'];
        var myArray3 = ["0", "1", "2"];
        var i, j, k;
        for (i = myArray3.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray3[i - 1];
            myArray3[i - 1] = myArray3[j];
            myArray3[j] = k;
        }
        //aleatorio literal 1
        for (var i = 1; i <= 3; i++) {
            var c3 = myArray3[i - 1];
            $("#p7l" + i).html(p7vec1[c3]);
            p7aux1.push(c3);
        }

        var p7vec2 = ['a)', 'b)', 'c)', 'd)', 'e)', 'f)'];
        var p7l1=p7vec3[parseInt(p7aux1[0])].toString().split('');
        $('#p7im'+p7l1[0]).html(p7vec2[0]);
        $('#p7im'+p7l1[1]).html(p7vec2[1]);
        var p7l2=p7vec3[parseInt(p7aux1[1])].toString().split('');
        $('#p7im'+p7l2[0]).html(p7vec2[2]);
        $('#p7im'+p7l2[1]).html(p7vec2[3]);
        var p7l3=p7vec3[parseInt(p7aux1[2])].toString().split('');
        $('#p7im'+p7l3[0]).html(p7vec2[4]);
        $('#p7im'+p7l3[1]).html(p7vec2[5]);
        bt_comprobar.addEventListener("click", preg8);
        function preg8() {
            cor = 0;
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
            bt_comprobar.removeEventListener("click", preg8);
            var p1cont1 = 0;
            for (var i = 1; i < p1vec1.length; i++) {
                var p1res1 = $('#p1dcon' + (i)).val();
                if (p1res1 == p1vec1[i]) {
                    p1cont1++;
                    f_ok($('#p1dcon' + (i)));
                } else {
                    p1cont1;
                    f_no($('#p1dcon' + (i)));
                }
            }
            for (var i = 1; i < p1vec2.length; i++) {
                var p1res2 = $('#p11dcon' + (i)).val();
                if (p1res2 == p1vec2[i]) {
                    p1cont1++;
                    f_ok($('#p11dcon' + (i)));
                } else {
                    p1cont1;
                    f_no($('#p11dcon' + (i)));
                }
            }
            var result1 = (p1cont1 * 1) / 10;
            cor = cor + result1;
            inc = inc + (1 - result1);
            $('#pre1a').val(result1.toFixed(2));
            $('#pre1a').css('display', '');

            var p2dcon1 = $('#p2dcon1').val();
            var p2dcon2 = $('#p2dcon2').val();
            var p2cont1 = 0;
            if (p2dcon1 == '4') {
                p2cont1++;
                f_ok($('#p2dcon1'));
            } else {
                p2cont1;
                f_no($('#p2dcon1'));
            }
            if (p2dcon2 == '5') {
                p2cont1++;
                f_ok($('#p2dcon2'));
            } else {
                p2cont1;
                f_no($('#p2dcon2'));
            }
            var p1im1 = $('.p1im1 img').length;
            var p1im2 = $('.p1im2 img').length;
            var p1im3 = $('.p1im3 img').length;
            var p11im1 = $('.p11im1 img').length;
            var p11im2 = $('.p11im2 img').length;
            if (p1im1 == '4') {
                p2cont1++;
                f_ok($('.p1im1'));
            } else {
                p2cont1;
                f_no($('.p1im1'));
            }
            if (p1im2 == '4') {
                p2cont1++;
                f_ok($('.p1im2'));
            } else {
                p2cont1;
                f_no($('.p1im2'));
            }
            if (p1im3 == '4') {
                p2cont1++;
                f_ok($('.p1im3'));
            } else {
                p2cont1;
                f_no($('.p1im3'));
            }
            if (p11im1 == '5') {
                p2cont1++;
                f_ok($('.p11im1'));
            } else {
                p2cont1;
                f_no($('.p11im1'));
            }
            if (p11im2 == '5') {
                p2cont1++;
                f_ok($('.p11im2'));
            } else {
                p2cont1;
                f_no($('.p11im2'));
            }
            var result2 = (p2cont1 * 1) / 7;
            cor = cor + result2;
            inc = inc + (1 - result2);
            $('#pre2a').val(result2.toFixed(2));
            $('#pre2a').css('display', '');
            var p3dcon1 = $('#p3dcon1').val();
            var p3dcon2 = $('#p3dcon2').val();
            var p3dcon3 = $('#p3dcon3').val();
            var p3dcon4 = $('#p3dcon4').val();
            var p3cont1 = 0;
            if (p3dcon1 == '5') {
                p3cont1++;
                f_ok($('#p3dcon1'));
            } else {
                p3cont1;
                f_no($('#p3dcon1'));
            }
            if (p3dcon2 == '6') {
                p3cont1++;
                f_ok($('#p3dcon2'));
            } else {
                p3cont1;
                f_no($('#p3dcon2'));
            }
            if (p3dcon3 == '6') {
                p3cont1++;
                f_ok($('#p3dcon3'));
            } else {
                p3cont1;
                f_no($('#p3dcon3'));
            }
            if (p3dcon4 == '3') {
                p3cont1++;
                f_ok($('#p3dcon4'));
            } else {
                p3cont1;
                f_no($('#p3dcon4'));
            }
            var p3im1 = $('.p3im1 img').attr('alt');
            var p3im2 = $('.p3im2 img').attr('alt');
            var p3im3 = $('.p3im3 img').attr('alt');
            var p3im4 = $('.p3im4 img').attr('alt');
            if (p3im1 == p3aux1[0]) {
                p3cont1++;
                f_ok($('.p3im1'));
            } else {
                p3cont1;
                f_no($('.p3im1'));
            }
            if (p3im2 == p3aux1[1]) {
                p3cont1++;
                f_ok($('.p3im2'));
            } else {
                p3cont1;
                f_no($('.p3im2'));
            }
            if (p3im3 == p3aux1[2]) {
                p3cont1++;
                f_ok($('.p3im3'));
            } else {
                p3cont1;
                f_no($('.p3im3'));
            }
            if (p3im4 == p3aux1[3]) {
                p3cont1++;
                f_ok($('.p3im4'));
            } else {
                p3cont1;
                f_no($('.p3im4'));
            }
            var result3 = (p3cont1 * 1) / 8;
            cor = cor + result3;
            inc = inc + (1 - result3);
            $('#pre3a').val(result3.toFixed(2));
            $('#pre3a').css('display', '');

            var p4cont1 = 0;
            var p4dcon1 = $('#p4dcon1').val();
            var p41dcon1 = $('#p41dcon1').val();
            var p42dcon1 = $('#p42dcon1').val();
            if (p4dcon1 == '3') {
                p4cont1++;
                f_ok($('#p4dcon1'));
            } else {
                p4cont1;
                f_no($('#p4dcon1'));
            }
            if (p41dcon1 == '4') {
                p4cont1++;
                f_ok($('#p41dcon1'));
            } else {
                p4cont1;
                f_no($('#p41dcon1'));
            }
            if (p42dcon1 == '2') {
                p4cont1++;
                f_ok($('#p42dcon1'));
            } else {
                p4cont1;
                f_no($('#p42dcon1'));
            }
            var p4dcon2 = $('#p4dcon2').val() + $('#p4dcon3').val();
            var p4dcon4 = $('#p4dcon4').val() + $('#p4dcon5').val();
            var p4dcon6 = $('#p4dcon6').val();
            var p4dcon7 = $('#p4dcon7').val();
            var p4dcon8 = $('#p4dcon8').val();
            var p4dcon9 = $('#p4dcon9').val();
            var p4dcon10 = $('#p4dcon10').val();
            if (p4dcon2 == '18') {
                p4cont1++;
                f_ok($('#p4dcon2'));
                f_ok($('#p4dcon3'));
            } else {
                p4cont1;
                f_no($('#p4dcon2'));
                f_no($('#p4dcon3'));
            }
            if (p4dcon4 == '18') {
                p4cont1++;
                f_ok($('#p4dcon4'));
                f_ok($('#p4dcon5'));
            } else {
                p4cont1;
                f_no($('#p4dcon4'));
                f_no($('#p4dcon5'));
            }
            if (p4dcon6 == '9') {
                p4cont1++;
                f_ok($('#p4dcon6'));
            } else {
                p4cont1;
                f_no($('#p4dcon6'));
            }
            if (p4dcon7 == '9') {
                p4cont1++;
                f_ok($('#p4dcon7'));
            } else {
                p4cont1;
                f_no($('#p4dcon7'));
            }
            if (p4dcon8 == '9') {
                p4cont1++;
                f_ok($('#p4dcon8'));
            } else {
                p4cont1;
                f_no($('#p4dcon8'));
            }
            if (p4dcon9 == '9') {
                p4cont1++;
                f_ok($('#p4dcon9'));
            } else {
                p4cont1;
                f_no($('#p4dcon9'));
            }
            if (p4dcon10 == '0') {
                p4cont1++;
                f_ok($('#p4dcon10'));
            } else {
                p4cont1;
                f_no($('#p4dcon10'));
            }
            var p4dco1 = $('#p4dco1').val();
            var p4dco2 = $('#p4dco2').val();
            var p4dco3 = $('#p4dco3').val();
            if (p4dco1 == '1') {
                p4cont1++;
                f_ok($('#p4dco1'));
            } else {
                p4cont1;
                f_no($('#p4dco1'));
            }
            if (p4dco2 == '2') {
                p4cont1++;
                f_ok($('#p4dco2'));
            } else {
                p4cont1;
                f_no($('#p4dco2'));
            }
            if (p4dco3 == '3') {
                p4cont1++;
                f_ok($('#p4dco3'));
            } else {
                p4cont1;
                f_no($('#p4dco3'));
            }

            var p41dcon2 = $('#p41dcon2').val() + $('#p41dcon3').val();
            var p41dcon4 = $('#p41dcon4').val() + $('#p41dcon5').val();
            var p41dcon6 = $('#p41dcon6').val();
            var p41dcon7 = $('#p41dcon7').val();
            var p41dcon8 = $('#p41dcon8').val();
            var p41dcon9 = $('#p41dcon9').val();
            var p41dcon10 = $('#p41dcon10').val();
            var p41dcon11 = $('#p41dcon11').val();
            var p41dcon12 = $('#p41dcon12').val();
            var p41dcon13 = $('#p41dcon13').val();
            if (p41dcon2 == '12') {
                p4cont1++;
                f_ok($('#p41dcon2'));
                f_ok($('#p41dcon3'));
            } else {
                p4cont1;
                f_no($('#p41dcon2'));
                f_no($('#p41dcon3'));
            }
            if (p41dcon4 == '12') {
                p4cont1++;
                f_ok($('#p41dcon4'));
                f_ok($('#p41dcon5'));
            } else {
                p4cont1;
                f_no($('#p41dcon4'));
                f_no($('#p41dcon5'));
            }
            if (p41dcon6 == '4') {
                p4cont1++;
                f_ok($('#p41dcon6'));
            } else {
                p4cont1;
                f_no($('#p41dcon6'));
            }
            if (p41dcon7 == '8') {
                p4cont1++;
                f_ok($('#p41dcon7'));
            } else {
                p4cont1;
                f_no($('#p41dcon7'));
            }
            if (p41dcon8 == '8') {
                p4cont1++;
                f_ok($('#p41dcon8'));
            } else {
                p4cont1;
                f_no($('#p41dcon8'));
            }
            if (p41dcon9 == '4') {
                p4cont1++;
                f_ok($('#p41dcon9'));
            } else {
                p4cont1;
                f_no($('#p41dcon9'));
            }
            if (p41dcon10 == '4') {
                p4cont1++;
                f_ok($('#p41dcon10'));
            } else {
                p4cont1;
                f_no($('#p41dcon10'));
            }
            if (p41dcon11 == '4') {
                p4cont1++;
                f_ok($('#p41dcon11'));
            } else {
                p4cont1;
                f_no($('#p41dcon11'));
            }
            if (p41dcon12 == '4') {
                p4cont1++;
                f_ok($('#p41dcon12'));
            } else {
                p4cont1;
                f_no($('#p41dcon12'));
            }
            if (p41dcon13 == '0') {
                p4cont1++;
                f_ok($('#p41dcon13'));
            } else {
                p4cont1;
                f_no($('#p41dcon13'));
            }
            var p41dco1 = $('#p41dco1').val();
            var p41dco2 = $('#p41dco2').val();
            var p41dco3 = $('#p41dco3').val();
            var p41dco4 = $('#p41dco4').val();
            if (p41dco1 == '1') {
                p4cont1++;
                f_ok($('#p41dco1'));
            } else {
                p4cont1;
                f_no($('#p41dco1'));
            }
            if (p41dco2 == '2') {
                p4cont1++;
                f_ok($('#p41dco2'));
            } else {
                p4cont1;
                f_no($('#p41dco2'));
            }
            if (p41dco3 == '3') {
                p4cont1++;
                f_ok($('#p41dco3'));
            } else {
                p4cont1;
                f_no($('#p41dco3'));
            }
            if (p41dco4 == '4') {
                p4cont1++;
                f_ok($('#p41dco4'));
            } else {
                p4cont1;
                f_no($('#p41dco4'));
            }
            var p42dcon2 = $('#p42dcon2').val() + $('#p42dcon3').val();
            var p42dcon4 = $('#p42dcon4').val() + $('#p42dcon5').val();
            var p42dcon6 = $('#p42dcon6').val() + $('#p42dcon7').val();
            var p42dcon8 = $('#p42dcon8').val();
            if (p42dcon2 == '10') {
                p4cont1++;
                f_ok($('#p42dcon2'));
                f_ok($('#p42dcon3'));
            } else {
                p4cont1;
                f_no($('#p42dcon2'));
                f_no($('#p42dcon3'));
            }
            if (p42dcon4 == '10') {
                p4cont1++;
                f_ok($('#p42dcon4'));
                f_ok($('#p42dcon5'));
            } else {
                p4cont1;
                f_no($('#p42dcon4'));
                f_no($('#p42dcon5'));
            }
            if (p42dcon6 == '10') {
                p4cont1++;
                f_ok($('#p42dcon6'));
                f_ok($('#p42dcon7'));
            } else {
                p4cont1;
                f_no($('#p42dcon6'));
                f_no($('#p42dcon7'));
            }
            if (p42dcon8 == '0') {
                p4cont1++;
                f_ok($('#p42dcon8'));
            } else {
                p4cont1;
                f_no($('#p42dcon8'));
            }
            var p42dco1 = $('#p42dco1').val();
            var p42dco2 = $('#p42dco2').val();
            if (p42dco1 == '1') {
                p4cont1++;
                f_ok($('#p42dco1'));
            } else {
                p4cont1;
                f_no($('#p42dco1'));
            }
            if (p42dco2 == '2') {
                p4cont1++;
                f_ok($('#p42dco2'));
            } else {
                p4cont1;
                f_no($('#p42dco2'));
            }
            var result4 = (p4cont1 * 1) / 33;
            cor = cor + result4;
            inc = inc + (1 - result4);
            $('#pre4a').val(result4.toFixed(2));
            $('#pre4a').css('display', '');

            var p5cont1 = 0;
            var act5num1 = $('#act5num1').val();
            var act5num2 = $('#act5num2').val();
            if (act5num1 == '0') {
                p5cont1++;
                f_ok($('#act5num1'));
            } else {
                p5cont1;
                f_no($('#act5num1'));
            }
            if (act5num2 == '6') {
                p5cont1++;
                f_ok($('#act5num2'));
            } else {
                p5cont1;
                f_no($('#act5num2'));
            }
            var p5dcon1 = $('#p5dcon1').val();
            var p5dcon2 = $('#p5dcon2').val();
            if (p5dcon1 == '6') {
                p5cont1++;
                f_ok($('#p5dcon1'));
            } else {
                p5cont1;
                f_no($('#p5dcon1'));
            }
            if (p5dcon2 == '6') {
                p5cont1++;
                f_ok($('#p5dcon2'));
            } else {
                p5cont1;
                f_no($('#p5dcon2'));
            }

            var act5num11 = $('#act5num11').val();
            var act5num12 = $('#act5num12').val();
            if (act5num11 == '0') {
                p5cont1++;
                f_ok($('#act5num11'));
            } else {
                p5cont1;
                f_no($('#act5num11'));
            }
            if (act5num12 == '8') {
                p5cont1++;
                f_ok($('#act5num12'));
            } else {
                p5cont1;
                f_no($('#act5num12'));
            }
            var p51dcon1 = $('#p51dcon1').val();
            var p51dcon2 = $('#p51dcon2').val();
            if (p51dcon1 == '8') {
                p5cont1++;
                f_ok($('#p51dcon1'));
            } else {
                p5cont1;
                f_no($('#p51dcon1'));
            }
            if (p51dcon2 == '8') {
                p5cont1++;
                f_ok($('#p51dcon2'));
            } else {
                p5cont1;
                f_no($('#p51dcon2'));
            }
            var act5num21 = $('#act5num21').val();
            var act5num22 = $('#act5num22').val();
            if (act5num21 == '0') {
                p5cont1++;
                f_ok($('#act5num21'));
            } else {
                p5cont1;
                f_no($('#act5num21'));
            }
            if (act5num22 == '4') {
                p5cont1++;
                f_ok($('#act5num22'));
            } else {
                p5cont1;
                f_no($('#act5num22'));
            }
            var p52dcon1 = $('#p52dcon1').val();
            var p52dcon2 = $('#p52dcon2').val();
            if (p52dcon1 == '4') {
                p5cont1++;
                f_ok($('#p52dcon1'));
            } else {
                p5cont1;
                f_no($('#p52dcon1'));
            }
            if (p52dcon2 == '4') {
                p5cont1++;
                f_ok($('#p52dcon2'));
            } else {
                p5cont1;
                f_no($('#p52dcon2'));
            }
            var act5num31 = $('#act5num31').val();
            var act5num32 = $('#act5num32').val();
            if (act5num31 == '0') {
                p5cont1++;
                f_ok($('#act5num31'));
            } else {
                p5cont1;
                f_no($('#act5num31'));
            }
            if (act5num32 == '9') {
                p5cont1++;
                f_ok($('#act5num32'));
            } else {
                p5cont1;
                f_no($('#act5num32'));
            }
            var p53dcon1 = $('#p53dcon1').val();
            var p53dcon2 = $('#p53dcon2').val();
            if (p53dcon1 == '9') {
                p5cont1++;
                f_ok($('#p53dcon1'));
            } else {
                p5cont1;
                f_no($('#p53dcon1'));
            }
            if (p53dcon2 == '9') {
                p5cont1++;
                f_ok($('#p53dcon2'));
            } else {
                p5cont1;
                f_no($('#p53dcon2'));
            }
            var result5 = (p5cont1 * 1) / 16;
            cor = cor + result5;
            inc = inc + (1 - result5);
            $('#pre5a').val(result5.toFixed(2));
            $('#pre5a').css('display', '');

            var p6cont1 = 0;
            var p6dcon1 = $('#p6dcon1').val() + '÷' + $('#p6dcon2').val() + '=' + $('#p6dcon3').val();
            var p6dcon4 = $('#p6dcon4').val() + '÷' + $('#p6dcon5').val() + '=' + $('#p6dcon6').val();
            if (p6dcon1 == p6a2 || p6dcon1 == p6a3) {
                p6cont1++;
                f_ok($('#p6dcon1'));
                f_ok($('#p6dcon2'));
                f_ok($('#p6dcon3'));
            } else {
                p6cont1;
                f_no($('#p6dcon1'));
                f_no($('#p6dcon2'));
                f_no($('#p6dcon3'));
            }
            if ((p6dcon4 == p6a3 || p6dcon4 == p6a2) && p6dcon4 != p6dcon1) {
                p6cont1++;
                f_ok($('#p6dcon4'));
                f_ok($('#p6dcon5'));
                f_ok($('#p6dcon6'));
            } else {
                p6cont1;
                f_no($('#p6dcon4'));
                f_no($('#p6dcon5'));
                f_no($('#p6dcon6'));
            }
            var p61dcon1 = $('#p61dcon1').val() + '÷' + $('#p61dcon2').val() + '=' + $('#p61dcon3').val();
            var p61dcon4 = $('#p61dcon4').val() + '÷' + $('#p61dcon5').val() + '=' + $('#p61dcon6').val();
            if (p61dcon1 == p6a4 || p61dcon1 == p6a5) {
                p6cont1++;
                f_ok($('#p61dcon1'));
                f_ok($('#p61dcon2'));
                f_ok($('#p61dcon3'));
            } else {
                p6cont1;
                f_no($('#p61dcon1'));
                f_no($('#p61dcon2'));
                f_no($('#p61dcon3'));
            }
            if ((p61dcon4 == p6a5 || p61dcon4 == p6a4) && p61dcon4 != p61dcon1) {
                p6cont1++;
                f_ok($('#p61dcon4'));
                f_ok($('#p61dcon5'));
                f_ok($('#p61dcon6'));
            } else {
                p6cont1;
                f_no($('#p61dcon4'));
                f_no($('#p61dcon5'));
                f_no($('#p61dcon6'));
            }
            var result6 = (p6cont1 * 1) / 4;
            cor = cor + result6;
            inc = inc + (1 - result6);
            $('#pre6a').val(result6.toFixed(2));
            $('#pre6a').css('display', '');

            var p7cont1=0;
            var p7dcon1=$('#p7dcon1').val();
            var p7dcon2=$('#p7dcon2').val();
            var p7dcon3=$('#p7dcon3').val();
            if (p7dcon1=='12') {
                p7cont1++;
                f_ok($('#p7dcon1'));
            }else{
                p7cont1;
                f_no($('#p7dcon1'));
            }
            if (p7dcon2=='9') {
                p7cont1++;
                f_ok($('#p7dcon2'));
            }else{
                p7cont1;
                f_no($('#p7dcon2'));
            }
            if (p7dcon3=='3') {
                p7cont1++;
                f_ok($('#p7dcon3'));
            }else{
                p7cont1;
                f_no($('#p7dcon3'));
            }
            var p71dcon1=$('#p71dcon1').val();
            var p71dcon2=$('#p71dcon2').val();
            var p71dcon3=$('#p71dcon3').val();
            if (p71dcon1=='30') {
                p7cont1++;
                f_ok($('#p71dcon1'));
            }else{
                p7cont1;
                f_no($('#p71dcon1'));
            }
            if (p71dcon2=='21') {
                p7cont1++;
                f_ok($('#p71dcon2'));
            }else{
                p7cont1;
                f_no($('#p71dcon2'));
            }
            if (p71dcon3=='9') {
                p7cont1++;
                f_ok($('#p71dcon3'));
            }else{
                p7cont1;
                f_no($('#p71dcon3'));
            }
            var p72dcon1=$('#p72dcon1').val();
            var p72dcon2=$('#p72dcon2').val();
            var p72dcon3=$('#p72dcon3').val();
            if (p72dcon1=='24') {
                p7cont1++;
                f_ok($('#p72dcon1'));
            }else{
                p7cont1;
                f_no($('#p72dcon1'));
            }
            if (p72dcon2=='10') {
                p7cont1++;
                f_ok($('#p72dcon2'));
            }else{
                p7cont1;
                f_no($('#p72dcon2'));
            }
            if (p72dcon3=='14') {
                p7cont1++;
                f_ok($('#p72dcon3'));
            }else{
                p7cont1;
                f_no($('#p72dcon3'));
            }
            var p73dcon1=$('#p73dcon1').val();
            var p73dcon2=$('#p73dcon2').val();
            var p73dcon3=$('#p73dcon3').val();
            if (p73dcon1=='36') {
                p7cont1++;
                f_ok($('#p73dcon1'));
            }else{
                p7cont1;
                f_no($('#p73dcon1'));
            }
            if (p73dcon2=='2') {
                p7cont1++;
                f_ok($('#p73dcon2'));
            }else{
                p7cont1;
                f_no($('#p73dcon2'));
            }
            if (p73dcon3=='38') {
                p7cont1++;
                f_ok($('#p73dcon3'));
            }else{
                p7cont1;
                f_no($('#p73dcon3'));
            }
            var p74dcon1=$('#p74dcon1').val();
            var p74dcon2=$('#p74dcon2').val();
            var p74dcon3=$('#p74dcon3').val();
            if (p74dcon1=='45') {
                p7cont1++;
                f_ok($('#p74dcon1'));
            }else{
                p7cont1;
                f_no($('#p74dcon1'));
            }
            if (p74dcon2=='5') {
                p7cont1++;
                f_ok($('#p74dcon2'));
            }else{
                p7cont1;
                f_no($('#p74dcon2'));
            }
            if (p74dcon3=='50') {
                p7cont1++;
                f_ok($('#p74dcon3'));
            }else{
                p7cont1;
                f_no($('#p74dcon3'));
            }
            var p75dcon1=$('#p75dcon1').val();
            var p75dcon2=$('#p75dcon2').val();
            var p75dcon3=$('#p75dcon3').val();
            if (p75dcon1=='25') {
                p7cont1++;
                f_ok($('#p75dcon1'));
            }else{
                p7cont1;
                f_no($('#p75dcon1'));
            }
            if (p75dcon2=='4') {
                p7cont1++;
                f_ok($('#p75dcon2'));
            }else{
                p7cont1;
                f_no($('#p75dcon2'));
            }
            if (p75dcon3=='29') {
                p7cont1++;
                f_ok($('#p75dcon3'));
            }else{
                p7cont1;
                f_no($('#p75dcon3'));
            }
            var result7 = (p7cont1 * 1) / 18;
            cor = cor + result7;
            inc = inc + (1 - result7);
            $('#pre7a').val(result7.toFixed(2));
            $('#pre7a').css('display', '');

            var p9dcon1=$('#p9dcon1').val()+'÷'+$('#p9dcon2').val()+'='+$('#p9dcon3').val();
            var p9dcon4=$('#p9dcon4').val();
            var p9cont1=0;
            if (p9dcon1=='54÷9=6') {
                p9cont1++;
                f_ok($('#p9dcon1'));
                f_ok($('#p9dcon2'));
                f_ok($('#p9dcon3'));
            }else{
                p9cont1;
                f_no($('#p9dcon1'));
                f_no($('#p9dcon2'));
                f_no($('#p9dcon3'));
            }
            if (p9dcon4=='6') {
                p9cont1++;
                f_ok($('#p9dcon4'));
            }else{
                p9cont1;
                f_no($('#p9dcon4'));
            }
            var p91dcon1=$('#p91dcon1').val()+'÷'+$('#p91dcon2').val()+'='+$('#p91dcon3').val();
            if (p91dcon1=='81÷9=9' || p91dcon1=='54÷6=9') {
                p9cont1++;
                f_ok($('#p91dcon1'));
                f_ok($('#p91dcon2'));
                f_ok($('#p91dcon3'));
            }else{
                p9cont1;
                f_no($('#p91dcon1'));
                f_no($('#p91dcon2'));
                f_no($('#p91dcon3'));
            }
            var p92dcon1=$('#p92dcon1').val()+'÷'+$('#p92dcon2').val()+'='+$('#p92dcon3').val();
            if ((p92dcon1=='81÷9=9' || p92dcon1=='54÷6=9') && p92dcon1!=p91dcon1) {
                p9cont1++;
                f_ok($('#p92dcon1'));
                f_ok($('#p92dcon2'));
                f_ok($('#p92dcon3'));
            }else{
                p9cont1;
                f_no($('#p92dcon1'));
                f_no($('#p92dcon2'));
                f_no($('#p92dcon3'));
            }
            var p91dcon4=$('#p91dcon4').val();
            var p91dcon5=$('#p91dcon5').val();
            var p91dcon6=$('#p91dcon6').val();
            var p91dcon7=$('#p91dcon7').val();
            if (p91dcon4=='9') {
                p9cont1++;
                f_ok($('#p91dcon4'));
            }else{
                p9cont1;
                f_no($('#p91dcon4'));
            }
            if (p91dcon5=='9') {
                p9cont1++;
                f_ok($('#p91dcon5'));
            }else{
                p9cont1;
                f_no($('#p91dcon5'));
            }
            if (p91dcon6=='6') {
                p9cont1++;
                f_ok($('#p91dcon6'));
            }else{
                p9cont1;
                f_no($('#p91dcon6'));
            }
            if (p91dcon7=='9') {
                p9cont1++;
                f_ok($('#p91dcon7'));
            }else{
                p9cont1;
                f_no($('#p91dcon7'));
            }
            var result9 = (p9cont1 * 2) / 8;
            cor = cor + result9;
            inc = inc + (2 - result9);
            $('#pre9a').val(result9.toFixed(2));
            $('#pre9a').css('display', '');
            Calculo_nota()
        }

    }