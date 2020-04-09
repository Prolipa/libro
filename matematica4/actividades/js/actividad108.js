var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    str = '',
    calificacion = 10;
var claseAnimada = 'animate bounceIn';
$('.btn_mostrar').on('click', function() { //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
});
$(".panel-collapse").addClass('out');
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 1)
});
document.getElementById('nota1_9').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_9').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_9'), 1)
});

function f_iniciar() {
    var p3vec1 = [];
    var p3vec2 = [];
    var p3vec3 = [];
    var p3num1 = parseInt((Math.random() * 3) + 2);
    var p3num2 = parseInt((Math.random() * 9) + 1);
    for (var i = 0; i < p3num1; i++) {
        if (i == (p3num1 - 1)) {
            p3vec1.push('<td>' +
                '<div id="p1cim' + (i + 1) + '">' +
                '</div>' +
                '</td>');
            p3vec3.push('<td>' +
                '<input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 40px;" onkeypress="return soloNumeros1(event)" id="p1dcon' + (i + 1) + '">' +
                '</td>');
        } else {
            p3vec1.push('<td>' +
                '<div id="p1cim' + (i + 1) + '">' +
                '</div>' +
                '</td>' +
                '<td></td>');
            p3vec3.push('<td>' +
                '<input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 40px;" onkeypress="return soloNumeros1(event)" id="p1dcon' + (i + 1) + '">' +
                '</td> <td><b>+</b></td>');
        }
    }
    $('#p1im1').html(p3vec1);
    $('#p1im2').html(p3vec3);
    for (var i = 0; i < p3num2; i++) {
        p3vec2.push('<img src="img/i3_p134_act108.jpg" style="mix-blend-mode: multiply; display: inline-block;">');
    }
    for (var i = 0; i < p3num1; i++) {
        $('#p1cim' + (i + 1)).html(p3vec2);
    }

    p4vec1 = [];
    p4vec2 = [];
    var p4num1 = parseInt((Math.random() * 8) + 2);
    var p4num2 = parseInt((Math.random() * 7) + 2);
    for (var i = 0; i < p4num1; i++) {
        p4vec1.push('<tr align="center" id="p4cim' + (i + 1) + '">' +
            '</tr>');
    }
    $('#p4im1').html(p4vec1);
    for (var i = 0; i < p4num2; i++) {
        p4vec2.push('<td><img src="img/i4_p134_act108.jpg" style="mix-blend-mode: multiply; display: inline-block;"></td>');
    }
    for (var i = 0; i < p4num1; i++) {
        $('#p4cim' + (i + 1)).html(p4vec2);
    }
    $('#p4dcon1').val(p4num1);
    $('#p4dcon1').attr('disabled', 'true');
    $('#p4dcon2').val(p4num2);
    $('#p4dcon2').attr('disabled', 'true');

    p4vec3 = [];
    p4vec4 = [];
    var p4num3 = parseInt((Math.random() * 8) + 2);
    var p4num4 = parseInt((Math.random() * 7) + 2);
    for (var i = 0; i < p4num3; i++) {
        p4vec3.push('<tr align="center" id="p41cim' + (i + 1) + '">' +
            '</tr>');
    }
    $('#p4im2').html(p4vec3);
    for (var i = 0; i < p4num4; i++) {
        p4vec4.push('<td><img src="img/i5_p134_act108.jpg" style="mix-blend-mode: multiply; display: inline-block;"></td>');
    }
    for (var i = 0; i < p4num3; i++) {
        $('#p41cim' + (i + 1)).html(p4vec4);
    }

    p4vec5 = [];
    p4vec6 = [];
    var p4num5 = parseInt((Math.random() * 8) + 2);
    var p4num6 = parseInt((Math.random() * 7) + 2);
    for (var i = 0; i < p4num5; i++) {
        p4vec5.push('<tr align="center" id="p42cim' + (i + 1) + '">' +
            '</tr>');
    }
    $('#p4im3').html(p4vec5);
    for (var i = 0; i < p4num6; i++) {
        p4vec6.push('<td><img src="img/i6_p134_act108.jpg" style="mix-blend-mode: multiply; display: inline-block;"></td>');
    }
    for (var i = 0; i < p4num5; i++) {
        $('#p42cim' + (i + 1)).html(p4vec6);
    }


    var p5num1 = [parseInt((Math.random() * 8) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 8) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 8) + 2), parseInt((Math.random() * 7) + 2)];
    $('#p5dcon1').val(p5num1[0]);
    $('#p5dcon2').val(p5num1[1]);
    $('#p5dcon4').val(p5num1[2]);
    $('#p5dcon5').val(p5num1[3]);
    $('#p5dcon7').val(p5num1[4]);
    $('#p5dcon8').val(p5num1[5]);
    var p5vec1 = [];
    for (var i = 0; i < p5num1[0]; i++) {
        p5vec1.push('<div class="col-sm-6">' +
            '<br>' +
            '<div class="col-sm-12 c_destino1 drop" id="p5im' + (i + 1) + '">' +
            '</div>' +
            '</div>');
    }
    $('#p5cim1').html(p5vec1);
    var p5vec2 = [];
    for (var i = 0; i < p5num1[2]; i++) {
        p5vec2.push('<div class="col-sm-6">' +
            '<br>' +
            '<div class="col-sm-12 c_destino1 drop1" id="p51im' + (i + 1) + '">' +
            '</div>' +
            '</div>');
    }
    $('#p5cim2').html(p5vec2);
    var p5vec3 = [];
    for (var i = 0; i < p5num1[4]; i++) {
        p5vec3.push('<div class="col-sm-6">' +
            '<br>' +
            '<div class="col-sm-12 c_destino1 drop2" id="p52im' + (i + 1) + '">' +
            '</div>' +
            '</div>');
    }
    $('#p5cim3').html(p5vec3);
    $(".drag").draggable({
        rever: "invalid",
        helper: "clone",
        containment: "#pre51"
    });

    $(".drop").droppable({
        accept: '.drag',
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })

        }
    });
    $(".drag1").draggable({
        rever: "invalid",
        helper: "clone",
        containment: "#pre52"
    });

    $(".drop1").droppable({
        accept: '.drag1',
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })

        }
    });
    $(".drag2").draggable({
        rever: "invalid",
        helper: "clone",
        containment: "#pre53"
    });

    $(".drop2").droppable({
        accept: '.drag2',
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })

        }
    });

    var p6vec1=['6','12','18','24','30','36','42','48','54','60'];
    var myArray1 = ['0','1','2','3','4','5','6','7','8','9'];
       var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
        //aleatorio literal 1
        for (var i = 1; i <= 6 ; i++) {
            var c=myArray1[i-1];
            $("#p6dcon"+(parseInt(c)+1)).val(p6vec1[c]);
            $("#p6dcon"+(parseInt(c)+1)).attr('disabled','true');
        };

    var p6vec2=['0','6','12','18','24','30','36','42','48','54','60'];
    var myArray2 = ['0','1','2','3','4','5','6','7','8','9','10'];
       var i,j,k;
        for (i = myArray2.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray2[i - 1];
            myArray2[i - 1] = myArray2[j];
            myArray2[j] = k;
        }
        //aleatorio literal 1
        for (var i = 1; i <= 4 ; i++) {
            var c2=myArray2[i-1];
            $("#p6dco"+(parseInt(c2)+1)).val(p6vec2[c2]);
            $("#p6dco"+(parseInt(c2)+1)).attr('disabled','true');
        };

    var p7num1 = [];
    for (var i = 0; i < 24; i++) {
        p7num1.push(parseInt((Math.random() * 8) + 2));
    }
    $('#p7im1').html(p7num1[0]);
    $('#p7im2').html(p7num1[1]);
    $('#p7im3').html(p7num1[2]);
    $('#p7im4').html((p7num1[2] * p7num1[3]));
    $('#p7im5').html(p7num1[5]);
    $('#p7im6').html((p7num1[4] * p7num1[5]));

    $('#p7im7').html(p7num1[6]);
    $('#p7im8').html(p7num1[7]);
    $('#p7im9').html(p7num1[8]);
    $('#p7im10').html((p7num1[8] * p7num1[9]));
    $('#p7im11').html(p7num1[11]);
    $('#p7im12').html((p7num1[10] * p7num1[11]));

    $('#p7im13').html(p7num1[12]);
    $('#p7im14').html(p7num1[13]);
    $('#p7im15').html(p7num1[14]);
    $('#p7im16').html((p7num1[14] * p7num1[15]));
    $('#p7im17').html(p7num1[17]);
    $('#p7im18').html((p7num1[16] * p7num1[17]));

    $('#p7im19').html(p7num1[18]);
    $('#p7im20').html(p7num1[19]);
    $('#p7im21').html(p7num1[20]);
    $('#p7im22').html((p7num1[20] * p7num1[21]));
    $('#p7im23').html(p7num1[23]);
    $('#p7im24').html((p7num1[22] * p7num1[23]));

    var p8num1=[parseInt((Math.random() * 15) + 1),parseInt((Math.random() * 15) + 1),parseInt((Math.random() * 15) + 1)];
    var p8vec1=[p8num1[0]+'0',p8num1[1]+'00',p8num1[2]+'000']
    $('#p8im1').html(p8num1[0]);
    $('#p8im2').html(p8num1[1]);
    $('#p8im3').html(p8num1[2]);


    var p10num1=[];
    for (var i = 0; i < 3; i++) {
        var aux1=parseInt((Math.random() * 60) + 1);
        if (aux1%5==0) {
            p10num1.push(aux1);    
        }else{
            i--;
        }
        
    }
    $('#p10im1').html(p10num1[0]);
    $('#p10im2').html(p10num1[1]);
    $('#p10im3').html(p10num1[2]);
    $(".drag3").draggable({
        rever: "invalid",
        helper: "clone",
        containment: "#pre10"
    });

    $(".drop3").droppable({
        accept: '.drag3',
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })

        }
    });
    bt_comprobar.addEventListener("click", f_preg1);

    function f_preg1() {
        var nota1_1 = $('#nota1_1').val();
        cor=0;
        inc=0;
        if (!nota1_1) {
            alert('Ingrese la calificación en la pregunta 1')
        } else {
            cor = cor + parseFloat(nota1_1);
            inc = inc + (1 - parseFloat(nota1_1));
            $('#nota1_1').val(parseFloat(nota1_1).toFixed(2));
            $('#nota1_1').attr('disabled', 'true');
            f_preg9();
        }
    }
    function f_preg9() {
        var nota1_9 = $('#nota1_9').val();

        if (!nota1_9) {
            alert('Ingrese la calificación en la pregunta 9')
        } else {
            cor = cor + parseFloat(nota1_9);
            inc = inc + (1 - parseFloat(nota1_9));
            $('#nota1_9').val(parseFloat(nota1_9).toFixed(2));
            $('#nota1_9').attr('disabled', 'true');
            f_comprobar();
        }
    }


    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_preg1);
        var p2dcon1 = [$('#p2dcon1').val(), $('#p2dcon2').val()];
        p2dcon1 = p2dcon1.join(', ');
        var p2dcon2 = [$('#p2dcon3').val(), $('#p2dcon4').val()];
        p2dcon2 = p2dcon2.join(', ');
        var p2dcon3 = [$('#p2dcon5').val(), $('#p2dcon6').val()];
        p2dcon3 = p2dcon3.join(', ');
        var p2dcon4 = [$('#p2dcon7').val(), $('#p2dcon8').val()];
        p2dcon4 = p2dcon4.join(', ');
        var p2dcon5 = [$('#p2dcon9').val(), $('#p2dcon10').val()];
        p2dcon5 = p2dcon5.join(', ');
        var p2cont1 = 0;
        if (p2dcon1 == '20, 50') {
            p2cont1++;
            f_ok($('#p2dcon1'));
            f_ok($('#p2dcon2'));
        } else {
            p2cont1;
            f_no($('#p2dcon1'));
            f_no($('#p2dcon2'));
        }
        if (p2dcon2 == '30, 20') {
            p2cont1++;
            f_ok($('#p2dcon3'));
            f_ok($('#p2dcon4'));
        } else {
            p2cont1;
            f_no($('#p2dcon3'));
            f_no($('#p2dcon4'));
        }
        if (p2dcon3 == '40, 70') {
            p2cont1++;
            f_ok($('#p2dcon5'));
            f_ok($('#p2dcon6'));
        } else {
            p2cont1;
            f_no($('#p2dcon5'));
            f_no($('#p2dcon6'));
        }
        if (p2dcon4 == '60, 40') {
            p2cont1++;
            f_ok($('#p2dcon7'));
            f_ok($('#p2dcon8'));
        } else {
            p2cont1;
            f_no($('#p2dcon7'));
            f_no($('#p2dcon8'));
        }
        if (p2dcon5 == '80, 10') {
            p2cont1++;
            f_ok($('#p2dcon9'));
            f_ok($('#p2dcon10'));
        } else {
            p2cont1;
            f_no($('#p2dcon9'));
            f_no($('#p2dcon10'));
        }
        result2 = (p2cont1 * 1) / 5;
        cor = cor + result2;
        inc = inc + (1 - result2);
        $('#nota1_2').val(result2.toFixed(2));
        $('#nota1_2').css('display', '');


        var p3cont1 = 0;
        for (var i = 0; i < p3num1; i++) {
            var resp = $('#p1dcon' + (i + 1)).val();
            if (resp == p3num2) {
                p3cont1++;
                f_ok($('#p1dcon' + (i + 1)));
            } else {
                p3cont1;
                f_no($('#p1dcon' + (i + 1)));
            }
        }

        var p3dco1 = $('#p3dco1').val();
        var p3dco2 = $('#p3dco2').val();
        var p3dco3 = $('#p3dco3').val();
        if (p3dco1 == p3num1) {
            p3cont1++;
            f_ok($('#p3dco1'));
        } else {
            p3cont1;
            f_no($('#p3dco1'));
        }
        if (p3dco2 == p3num2) {
            p3cont1++;
            f_ok($('#p3dco2'));
        } else {
            p3cont1;
            f_no($('#p3dco2'));
        }
        if (p3dco3 == (p3num1 * p3num2)) {
            p3cont1++;
            f_ok($('#p3dco3'));
        } else {
            p3cont1;
            f_no($('#p3dco3'));
        }
        var p3dco4 = $('#p3dco4').val();
        var p3dco5 = $('#p3dco5').val();
        var p3dco6 = $('#p3dco6').val();
        if (p3dco4 == p3num1) {
            p3cont1++;
            f_ok($('#p3dco4'));
        } else {
            p3cont1;
            f_no($('#p3dco4'));
        }
        if (p3dco5 == p3num2) {
            p3cont1++;
            f_ok($('#p3dco5'));
        } else {
            p3cont1;
            f_no($('#p3dco5'));
        }
        if (p3dco6 == (p3num1 * p3num2)) {
            p3cont1++;
            f_ok($('#p3dco6'));
        } else {
            p3cont1;
            f_no($('#p3dco6'));
        }

        result3 = (p3cont1 * 1) / (6 + p3num1);
        cor = cor + result3;
        inc = inc + (1 - result3);
        $('#nota1_3').val(result3.toFixed(2));
        $('#nota1_3').css('display', '');


        var p4dcon3 = $('#p4dcon3').val();
        var p4dcon4 = $('#p4dcon4').val();
        var p4dcon5 = $('#p4dcon5').val();
        var p4dcon6 = $('#p4dcon6').val();
        var p4dcon7 = $('#p4dcon7').val();
        var p4dcon8 = $('#p4dcon8').val();
        var p4dcon9 = $('#p4dcon9').val();
        var p4cont1 = 0;
        if (p4dcon3 == (p4num1 * p4num2)) {
            p4cont1++;
            f_ok($('#p4dcon3'));
        } else {
            p4cont1;
            f_no($('#p4dcon3'));
        }
        if (p4dcon4 == p4num3) {
            p4cont1++;
            f_ok($('#p4dcon4'));
        } else {
            p4cont1;
            f_no($('#p4dcon4'));
        }
        if (p4dcon5 == p4num4) {
            p4cont1++;
            f_ok($('#p4dcon5'));
        } else {
            p4cont1;
            f_no($('#p4dcon5'));
        }
        if (p4dcon6 == (p4num3 * p4num4)) {
            p4cont1++;
            f_ok($('#p4dcon6'));
        } else {
            p4cont1;
            f_no($('#p4dcon6'));
        }
        if (p4dcon7 == p4num5) {
            p4cont1++;
            f_ok($('#p4dcon7'));
        } else {
            p4cont1;
            f_no($('#p4dcon7'));
        }
        if (p4dcon8 == p4num6) {
            p4cont1++;
            f_ok($('#p4dcon8'));
        } else {
            p4cont1;
            f_no($('#p4dcon8'));
        }
        if (p4dcon9 == (p4num5 * p4num6)) {
            p4cont1++;
            f_ok($('#p4dcon9'));
        } else {
            p4cont1;
            f_no($('#p4dcon9'));
        }
        result4 = (p4cont1 * 1) / 7;
        cor = cor + result4;
        inc = inc + (1 - result4);
        $('#nota1_4').val(result4.toFixed(2));
        $('#nota1_4').css('display', '');

        var p5dcon3 = $('#p5dcon3').val();
        var p5dcon6 = $('#p5dcon6').val();
        var p5dcon9 = $('#p5dcon9').val();
        var p5cont1 = 0;
        if (p5dcon3 == (p5num1[0] * p5num1[1])) {
            p5cont1++;
            f_ok($('#p5dcon3'));
        } else {
            p5cont1;
            f_no($('#p5dcon3'));
        }
        if (p5dcon6 == (p5num1[2] * p5num1[3])) {
            p5cont1++;
            f_ok($('#p5dcon6'));
        } else {
            p5cont1;
            f_no($('#p5dcon6'));
        }
        if (p5dcon9 == (p5num1[4] * p5num1[5])) {
            p5cont1++;
            f_ok($('#p5dcon9'));
        } else {
            p5cont1;
            f_no($('#p5dcon9'));
        }
        for (var i = 0; i < p5num1[0]; i++) {
            var resp = $('#p5im' + (i + 1) + ' img').length;
            if (resp == p5num1[1]) {
                p5cont1++;
                f_ok($('#p5im' + (i + 1)));
            } else {
                p5cont1;
                f_no($('#p5im' + (i + 1)));
            }
        }
        for (var i = 0; i < p5num1[2]; i++) {
            var resp = $('#p51im' + (i + 1) + ' img').length;
            if (resp == p5num1[3]) {
                p5cont1++;
                f_ok($('#p51im' + (i + 1)));
            } else {
                p5cont1;
                f_no($('#p51im' + (i + 1)));
            }
        }
        for (var i = 0; i < p5num1[4]; i++) {
            var resp = $('#p52im' + (i + 1) + ' img').length;
            if (resp == p5num1[5]) {
                p5cont1++;
                f_ok($('#p52im' + (i + 1)));
            } else {
                p5cont1;
                f_no($('#p52im' + (i + 1)));
            }
        }
        result5 = (p5cont1 * 1) / (3 + p5num1[0] + p5num1[2] + p5num1[4]);
        cor = cor + result5;
        inc = inc + (1 - result5);
        $('#nota1_5').val(result5.toFixed(2));
        $('#nota1_5').css('display', '');


        var p6cont1=0;
        for (var i = 1; i <= 4 ; i++) {
            var c1=myArray1[i+5];
            var resp6=$("#p6dcon"+(parseInt(c1)+1)).val();
            if (resp6 == p6vec1[c1]) {
                p6cont1++;
                f_ok($("#p6dcon"+(parseInt(c1)+1)));
            } else {
                p6cont1;
                f_no($("#p6dcon"+(parseInt(c1)+1)));
            }
        }
        for (var i = 1; i <= 7 ; i++) {
            var c3=myArray2[i+3];
            var resp61=$("#p6dco"+(parseInt(c3)+1)).val();
            if (resp61 == p6vec2[c3]) {
                p6cont1++;
                f_ok($("#p6dco"+(parseInt(c3)+1)));
            } else {
                p6cont1;
                f_no($("#p6dco"+(parseInt(c3)+1)));
            }
        }
        result6 = (p6cont1 * 1) / 11;
        cor = cor + result6;
        inc = inc + (1 - result6);
        $('#nota1_6').val(result6.toFixed(2));
        $('#nota1_6').css('display', '');


        var p7vec2=[(p7num1[0]*p7num1[1]),
        p7num1[3],
        p7num1[4],
        (p7num1[6]*p7num1[7]),
        p7num1[9],
        p7num1[10],
        (p7num1[12]*p7num1[13]),
        p7num1[15],
        p7num1[16],
        (p7num1[18]*p7num1[19]),
        p7num1[21],
        p7num1[22]];
        var p7cont1=0;
        for (var i = 0; i < p7vec2.length; i++) {
            resp7=$('#p7dcon'+(i+1)).val();
            if (resp7 == p7vec2[i]) {
                p7cont1++;
                f_ok($("#p7dcon"+(parseInt(i)+1)));
            } else {
                p7cont1;
                f_no($("#p7dcon"+(parseInt(i)+1)));
            }
        }
        result7 = (p7cont1 * 1) / p7vec2.length;
        cor = cor + result7;
        inc = inc + (1 - result7);
        $('#nota1_7').val(result7.toFixed(2));
        $('#nota1_7').css('display', '');

        
        var p8cont1=0;
        for (var i = 0; i < p8vec1.length; i++) {
            resp7=$('#p8dcon'+(i+1)).val();
            if (resp7 == p8vec1[i]) {
                p8cont1++;
                f_ok($("#p8dcon"+(parseInt(i)+1)));
            } else {
                p8cont1;
                f_no($("#p8dcon"+(parseInt(i)+1)));
            }
        }
        result8 = (p8cont1 * 1) / p8vec1.length;
        cor = cor + result8;
        inc = inc + (1 - result8);
        $('#nota1_8').val(result8.toFixed(2));
        $('#nota1_8').css('display', '');

        var p10cim1=$('#p10cim1 img').length;
        var p10cim2=$('#p10cim2 img').length;
        var p10cim3=$('#p10cim3 img').length;
        var p10cont1=0;
        if ((p10cim1*5)==p10num1[0]) {
            p10cont1++;
            f_ok($('#p10cim1'));
        }else{
            p10cont1;
            f_no($('#p10cim1'));
        }
        if ((p10cim2*5)==p10num1[1]) {
            p10cont1++;
            f_ok($('#p10cim2'));
        }else{
            p10cont1;
            f_no($('#p10cim2'));
        }
        if ((p10cim3*5)==p10num1[2]) {
            p10cont1++;
            f_ok($('#p10cim3'));
        }else{
            p10cont1;
            f_no($('#p10cim3'));
        }
        var p10dcon1=$('#p10dcon1').val();
        if (p10dcon1==(p10num1[0] + p10num1[1] + p10num1[2])) {
            p10cont1++;
            f_ok($('#p10dcon1'));
        }else{
            p10cont1;
            f_no($('#p10dcon1'));
        }
        result10 = (p10cont1 * 1) / 4;
        cor = cor + result10;
        inc = inc + (1 - result10);
        $('#nota1_10').val(result10.toFixed(2));
        $('#nota1_10').css('display', '');
        Calculo_nota();
    }
}