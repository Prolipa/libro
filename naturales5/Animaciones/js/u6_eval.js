var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    str = '',
    str1 = '',
    str2 = '',
    calificacion = 10;
var claseAnimada = 'animate bounceIn';
f_iniciar();

document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 1.5, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 1.5)
});
document.getElementById('nota1_3').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_3'), 2)
});
document.getElementById('nota1_4').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_4'), 1)
});
document.getElementById('nota1_7').addEventListener('keypress', () => {
    validNumero(0, 0.75, 1);
});
document.getElementById('nota1_7').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_7'), 0.75)
});

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}

function f_iniciar() {
    var p5vec1 = [
        '<p><input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 20px;" maxlength="1" id="p5dcon1" onkeyup="mayus(this)">Me puedes decir qué hora es<input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 20px;" maxlength="1" id="p5dcon2" onkeyup="mayus(this)"></p>',
        '<p><input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 20px;" maxlength="1" id="p5dcon3" onkeyup="mayus(this)">Bienvenidos a nuestra biblioteca<input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 20px;" maxlength="1" id="p5dcon4" onkeyup="mayus(this)"></p>',
        '<p><input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 20px;" maxlength="1" id="p5dcon5" onkeyup="mayus(this)">Qué debe hacer un ciclista al ver un semáforo en verde<input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 20px;" maxlength="1" id="p5dcon6" onkeyup="mayus(this)"></p>'
    ];
    p5vec1.sort(f_randomico);
    $('#p5im1').html(p5vec1);
    var p6vec1 = [
        '<tr align="center">' +
        '<td style="border: 3px solid #8e4a9d; padding: 10px;">Los niños cruzan <span style="border: none; border-bottom: 2px solid #d3222a;">la calle por el paso cebra.</span></td>' +
        '<td style="border: 3px solid #8e4a9d; padding: 10px;"><input type="checkbox" class="p1sel1" name="check" onclick="onlyOne(this)" style="zoom: 2;"></td>' +
        '<td style="border: 3px solid #8e4a9d; padding: 10px;"><input type="checkbox" class="p1sel2" name="check" onclick="onlyOne(this)" style="zoom: 2;"></td>' +
        '</tr>',
        '<tr align="center">' +
        '<td style="border: 3px solid #8e4a9d; padding: 10px;"><span style="border: none; border-bottom: 2px solid #d3222a;">La rayuela</span> es un juego tradicional.</td>' +
        '<td style="border: 3px solid #8e4a9d; padding: 10px;"><input type="checkbox" class="p1sel3" name="check1" onclick="onlyOne1(this)" style="zoom: 2;"></td>' +
        '<td style="border: 3px solid #8e4a9d; padding: 10px;"><input type="checkbox" class="p1sel4" name="check1" onclick="onlyOne1(this)" style="zoom: 2;"></td>' +
        '</tr>',
        '<tr align="center">' +
        '<td style="border: 3px solid #8e4a9d; padding: 10px;"><span style="border: none; border-bottom: 2px solid #d3222a;">El color rojo del semáforo</span> prohíbe el paso al peatón.</td>' +
        '<td style="border: 3px solid #8e4a9d; padding: 10px;"><input type="checkbox" class="p1sel5" name="check2" onclick="onlyOne2(this)" style="zoom: 2;"></td>' +
        '<td style="border: 3px solid #8e4a9d; padding: 10px;"><input type="checkbox" class="p1sel6" name="check2" onclick="onlyOne2(this)" style="zoom: 2;"></td>' +
        '</tr>',
    ];
    p6vec1.sort(f_randomico);
    $('#p6im1').html('<tr align="center"><td></td><td style="border: 3px solid #8e4a9d; background: #ffe293; padding: 10px;"><b>Es el sujeto de la oración</b></td><td style="border: 3px solid #8e4a9d; background: #d1e8bf; padding: 10px;"><b>Es el predicado de la oración</b></td></tr>' + p6vec1);
    
    var pal1 = ['<img class="drag1 img-responsive" src="img/i1_p226_u6t13a10.jpg" alt="1" style="display:inline-block; mix-blend-mode:multiply;">',
        '<img class="drag1 img-responsive" src="img/i2_p226_u6t13a10.jpg" alt="2" style="display:inline-block; mix-blend-mode:multiply;">',
        '<img class="drag1 img-responsive" src="img/i3_p226_u6t13a10.jpg" alt="3" style="display:inline-block; mix-blend-mode:multiply;">'
    ];

    pal1.sort(f_randomico);

    $(".textos").append(pal1);
    var pal3 = [
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_origen p8cim11" ><h4>Iniciar la marcha</h4></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_destino1 drop1 p8im1" align="center"></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_origen p8cim12"><h4>Detenerse</h4></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_destino1 drop1 p8im2" align="center"></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_origen p8cim13"><h4>Prevención</h4></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_destino1 drop1 p8im3" align="center"></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ];
    pal3.sort(f_randomico);
    $("#datos").html(pal3);
    $(".drag1").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: "#p8act1",
        scroll: false,
    });

    $(".drop1").droppable({
        accept: ".drag1",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag1");
            ui.draggable.attr("style", "mix-blend-mode:multiply;");
            $(this).append(ui.draggable);

        }
    });
    var pal4 = ['<span class="drag2 bg_palabra">Kayakaman</span>',
        '<span class="drag2 bg_palabra">Alli chishi</span>',
        '<span class="drag2 bg_palabra">Imanalla</span>',
        '<span class="drag2 bg_palabra">Alli puncha</span>'
    ];
    pal4.sort(f_randomico);
    $(".textos1").append(pal4);
    var pal5 = [
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_origen p9cim11" ><h4>Buenas tardes</h4></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_destino1 drop2 p9im1" align="center"></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_origen p9cim12"><h4>Buenos días</h4></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_destino1 drop2 p9im2" align="center"></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_origen p9cim13"><h4>¿Cómo estás?</h4></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_destino1 drop2 p9im3" align="center"></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_origen p9cim14"><h4>Hasta mañana</h4></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_destino1 drop2 p9im4" align="center"></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ];
    pal5.sort(f_randomico);
    $("#datos1").html(pal5);
    $(".drag2").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: "#p9act1",
        scroll: false,
    });

    $(".drop2").droppable({
        accept: ".drag2",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag2");
            $(ui.draggable).removeClass("bg_palabra");
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);

        }
    });
    bt_comprobar.addEventListener("click", f_preg2);

    function f_preg2() {
        var nota1_2 = $('#nota1_2').val();
        cor = 0;
        inc = 0;
        if (!nota1_2) {
            alert('Ingrese la calificación en la pregunta 2.')
        } else {
            cor = cor + parseFloat(nota1_2);
            inc = inc + (1.5 - parseFloat(nota1_2));
            $('#nota1_2').val(parseFloat(nota1_2).toFixed(2));
            $('#nota1_2').attr('disabled', 'true');
            f_preg3();
        }
    }

    function f_preg3() {
        var nota1_3 = $('#nota1_3').val();
        if (!nota1_3) {
            alert('Ingrese la calificación en la pregunta 3.')
        } else {
            cor = cor + parseFloat(nota1_3);
            inc = inc + (2 - parseFloat(nota1_3));
            $('#nota1_3').val(parseFloat(nota1_3).toFixed(2));
            $('#nota1_3').attr('disabled', 'true');
            f_preg4();
        }
    }

    function f_preg4() {
        var nota1_4 = $('#nota1_4').val();
        if (!nota1_4) {
            alert('Ingrese la calificación en la pregunta 4.')
        } else {
            cor = cor + parseFloat(nota1_4);
            inc = inc + (1 - parseFloat(nota1_4));
            $('#nota1_4').val(parseFloat(nota1_4).toFixed(2));
            $('#nota1_4').attr('disabled', 'true');
            f_preg7();
        }
    }
    function f_preg7() {
        var nota1_7 = $('#nota1_7').val();
        if (!nota1_7) {
            alert('Ingrese la calificación en la pregunta 7.')
        } else {
            cor = cor + parseFloat(nota1_7);
            inc = inc + (0.75 - parseFloat(nota1_7));
            $('#nota1_7').val(parseFloat(nota1_7).toFixed(2));
            $('#nota1_7').attr('disabled', 'true');
            f_comprobar();
        }
    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_preg2);
        var p1cont1 = 0;
        var p1vec1 = ['castillo', 'bruja', 'castillo', 'escoba', 'bruja', 'castillo', 'gato', 'escoba', 'bruja', 'castillo', 'fantasma', 'gato', 'escoba', 'bruja', 'castillo'];
        for (var i = 0; i < p1vec1.length; i++) {
            var p1res1 = $('#p1dcon' + (i + 1)).val();
            if (p1res1 == p1vec1[i]) {
                p1cont1++;
                f_ok($('#p1dcon' + (i + 1)));
            } else {
                p1cont1;
                f_no($('#p1dcon' + (i + 1)));
            }
        }
        var result1 = (p1cont1 * 1.25) / 15;
        cor = cor + result1;
        inc = inc + (1.25 - result1);
        $('#nota1_1').val(result1.toFixed(2));
        $('#nota1_1').css('display', '');

        var p5cont1 = 0;
        var p5vec1 = ['¿', '?', '¡', '!', '¿', '?'];
        for (var i = 0; i < p5vec1.length; i++) {
            var p5res1 = $('#p5dcon' + (i + 1)).val();
            if (p5res1 == p5vec1[i]) {
                p5cont1++;
                f_ok($('#p5dcon' + (i + 1)));
            } else {
                p5cont1;
                f_no($('#p5dcon' + (i + 1)));
            }
        }
        var result5 = (p5cont1 * 1) / 6;
        cor = cor + result5;
        inc = inc + (1 - result5);
        $('#nota1_5').val(result5.toFixed(2));
        $('#nota1_5').css('display', '');

        var p6cont1 = 0;
        if ($('.p1sel2').is(':checked')) {
            p6cont1++;
            $('.p1sel2').addClass('valid');
        } else {
            p6cont1;
            if ($('.p1sel1').is(':checked')) {
                $('.p1sel1').addClass('no-valid');
            } else {
                $('.p1sel2').addClass('no-valid');
                $('.p1sel1').addClass('no-valid');
            }
        }
        if ($('.p1sel3').is(':checked')) {
            p6cont1++;
            $('.p1sel3').addClass('valid');
        } else {
            p6cont1;
            if ($('.p1sel4').is(':checked')) {
                $('.p1sel4').addClass('no-valid');
            } else {
                $('.p1sel3').addClass('no-valid');
                $('.p1sel4').addClass('no-valid');
            }
        }
        if ($('.p1sel5').is(':checked')) {
            p6cont1++;
            $('.p1sel5').addClass('valid');
        } else {
            p6cont1;
            if ($('.p1sel6').is(':checked')) {
                $('.p1sel6').addClass('no-valid');
            } else {
                $('.p1sel5').addClass('no-valid');
                $('.p1sel6').addClass('no-valid');
            }
        }
        var result6 = (p6cont1 * 0.75) / 3;
        cor = cor + result6;
        inc = inc + (0.75 - result6);
        $('#nota1_6').val(result6.toFixed(2));
        $('#nota1_6').css('display', '');

        var p8im1 = $('.p8im1 img').attr('alt');
        var p8im2 = $('.p8im2 img').attr('alt');
        var p8im3 = $('.p8im3 img').attr('alt');
        var p8cont1 = 0;
        if (!p8im1) {
            p8cont1;
            f_no($('.p8im1'));
        } else {
            if (p8im1 == '3') {
                p8cont1++;
                f_ok($('.p8im1'));
            } else {
                p8cont1;
                f_no($('.p8im1'));
            }
        }
        if (!p8im2) {
            p8cont1;
            f_no($('.p8im2'));
        } else {
            if (p8im2 == '1') {
                p8cont1++;
                f_ok($('.p8im2'));
            } else {
                p8cont1;
                f_no($('.p8im2'));
            }
        }
        if (!p8im3) {
            p8cont1;
            f_no($('.p8im3'));
        } else {
            if (p8im3 == '2') {
                p8cont1++;
                f_ok($('.p8im3'));
            } else {
                p8cont1;
                f_no($('.p8im3'));
            }
        }
        var result8 = (p8cont1 * 0.75) / 3;
        cor = cor + result8;
        inc = inc + (0.75 - result8);
        $('#nota1_8').val(result8.toFixed(2));
        $('#nota1_8').css('display', '');

        var p9im1 = $('.p9im1 span').text();
        var p9im2 = $('.p9im2 span').text();
        var p9im3 = $('.p9im3 span').text();
        var p9im4 = $('.p9im4 span').text();
        var p9cont1 = 0;
        if (!p9im1) {
            p9cont1;
            f_no($('.p9im1'));
        } else {
            if (p9im1 == 'Alli chishi') {
                p9cont1++;
                f_ok($('.p9im1'));
            } else {
                p9cont1;
                f_no($('.p9im1'));
            }
        }
        if (!p9im2) {
            p9cont1;
            f_no($('.p9im2'));
        } else {
            if (p9im2 == 'Alli puncha') {
                p9cont1++;
                f_ok($('.p9im2'));
            } else {
                p9cont1;
                f_no($('.p9im2'));
            }
        }
        if (!p9im3) {
            p9cont1;
            f_no($('.p9im3'));
        } else {
            if (p9im3 == 'Imanalla') {
                p9cont1++;
                f_ok($('.p9im3'));
            } else {
                p9cont1;
                f_no($('.p9im3'));
            }
        }
        if (!p9im4) {
            p9cont1;
            f_no($('.p9im4'));
        } else {
            if (p9im4 == 'Kayakaman') {
                p9cont1++;
                f_ok($('.p9im4'));
            } else {
                p9cont1;
                f_no($('.p9im4'));
            }
        }
        var result9 = (p9cont1 * 1) / 4;
        cor = cor + result9;
        inc = inc + (1 - result9);
        $('#nota1_9').val(result9.toFixed(2));
        $('#nota1_9').css('display', '');
        Calculo_nota();
    }
}