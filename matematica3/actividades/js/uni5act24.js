var n1 = 0,
    n2 = 0,
    sum_total = 0,
    sum_total2 = 0,
    sum_total3 = 0,
    sum_total4 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    str = '',
    str2 = '',
    str3 = '',
    str4 = '',
    calificacion = 10;

var t1 = 0;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
document.getElementById('pre6a').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('pre6a').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('pre6a'), 1)
});

function f_iniciar() {
    $(".drag").draggable({
        rever: "invalid",
        helper: "clone",
        containment: "#p1act1"
    });
    $(".drop").droppable({
        accept: ".drag",
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode: multiply;");
            })
        }
    });

    var p2vec1 = [(Math.floor(Math.random() * 400) + 100), (Math.floor(Math.random() * 400) + 100), (Math.floor(Math.random() * 400) + 100), (Math.floor(Math.random() * 400) + 100)];
    var p2s1 = p2vec1[0].toString().split('');
    $('#nlrd0').val(p2s1[0]);
    $('#nlrd0').attr('disabled', 'true');
    $('#nlrd1').val(p2s1[1]);
    $('#nlrd1').attr('disabled', 'true');
    $('#nlrd2').val(p2s1[2]);
    $('#nlrd2').attr('disabled', 'true');
    var p2s2 = p2vec1[1].toString().split('');
    $('#nlrd3').val(p2s2[0]);
    $('#nlrd3').attr('disabled', 'true');
    $('#nlrd4').val(p2s2[1]);
    $('#nlrd4').attr('disabled', 'true');
    $('#nlrd5').val(p2s2[2]);
    $('#nlrd5').attr('disabled', 'true');
    $('#nlrd13').val(p2s2[0]);
    $('#nlrd13').attr('disabled', 'true');
    $('#nlrd14').val(p2s2[1]);
    $('#nlrd14').attr('disabled', 'true');
    $('#nlrd15').val(p2s2[2]);
    $('#nlrd15').attr('disabled', 'true');
    var p2s3 = p2vec1[2].toString().split('');
    $('#nlrd20').val(p2s3[0]);
    $('#nlrd20').attr('disabled', 'true');
    $('#nlrd21').val(p2s3[1]);
    $('#nlrd21').attr('disabled', 'true');
    $('#nlrd22').val(p2s3[2]);
    $('#nlrd22').attr('disabled', 'true');
    var p2s4 = p2vec1[3].toString().split('');
    $('#nlrd23').val(p2s4[0]);
    $('#nlrd23').attr('disabled', 'true');
    $('#nlrd24').val(p2s4[1]);
    $('#nlrd24').attr('disabled', 'true');
    $('#nlrd25').val(p2s4[2]);
    $('#nlrd25').attr('disabled', 'true');
    $('#nlrd33').val(p2s4[0]);
    $('#nlrd33').attr('disabled', 'true');
    $('#nlrd34').val(p2s4[1]);
    $('#nlrd34').attr('disabled', 'true');
    $('#nlrd35').val(p2s4[2]);
    $('#nlrd35').attr('disabled', 'true');

    var p3vec2 = [(Math.floor(Math.random() * 40) + 10)];
    for (var i = 0; i < 1; i++) {
        var p3n1 = (Math.floor(Math.random() * 40) + 10);
        if (p3n1 == p3vec2[0]) {
            i--;
        } else {
            p3vec2.push(p3n1);
        }
    }
    p3vec2.sort((a, b) => a - b);
    p3vec2.push(p3vec2[0] + p3vec2[1]);
    p3vec1 = [
        p3vec2[2] + '-' + p3vec2[1] + '' + p3vec2[0],
        p3vec2[0] + '+' + p3vec2[1] + '' + p3vec2[2],
        p3vec2[2] + '-' + p3vec2[0] + '' + p3vec2[1],
        p3vec2[1] + '+' + p3vec2[0] + '' + p3vec2[2]
    ];
    $('#p3im1').text(p3vec2[1]);
    $('#p3im2').text(p3vec2[0]);
    $('#p3im3').text(p3vec2[2]);

    var p4vec1 = [];
    for (var i = 2; i < 50; i++) {
        p4vec1.push(i);
    }
    p4vec1.sort(f_randomico);

    for (var i = 0; i < 4; i++) {
        $('#p4im' + (i + 1)).html(p4vec1[i]);
    }

    var p5vec1 = [];
    for (var i = 20; i < 90; i++) {
        if (i % 10 == 0) {
            p5vec1;
        } else {
            p5vec1.push(i);
        }
    }
    p5vec1.sort(f_randomico);
    var p5vec2 = [Math.round(p5vec1[0] / 10.0) * 10, Math.round(p5vec1[1] / 10.0) * 10, Math.round(p5vec1[2] / 10.0) * 10, Math.round(p5vec1[3] / 10.0) * 10, Math.round(p5vec1[4] / 10.0) * 10, Math.round(p5vec1[5] / 10.0) * 10];
    $('#p5im1').html(p5vec1[0]);
    $('#p5im2').html(p5vec1[1]);
    $('#p5im3').html(p5vec1[2]);
    $('#p5im4').html(p5vec1[3]);
    $('#p5im5').html(p5vec1[4]);
    $('#p5im6').html(p5vec1[5]);


    var p6vec1 = [(Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2)];
    var p6ta1 = [];
    for (var i = 0; i < p6vec1[0]; i++) {
        if ((i + 1) == p6vec1[0]) {
            p6ta1.push('<span id="p6cim' + i + '"></span>');
        } else {
            p6ta1.push('<span id="p6cim' + i + '"></span> + ');
        }

    }
    $('#p6im1').html(p6ta1);
    for (var i = 0; i < p6vec1[0]; i++) {
        $('#p6cim' + i).text(p6vec1[1]);
    }
    var p6ta2 = [];
    for (var i = 0; i < p6vec1[2]; i++) {
        if ((i + 1) == p6vec1[2]) {
            p6ta2.push('<span id="p6cim1' + i + '"></span>');
        } else {
            p6ta2.push('<span id="p6cim1' + i + '"></span> + ');
        }

    }
    $('#p6im2').html(p6ta2);
    for (var i = 0; i < p6vec1[2]; i++) {
        $('#p6cim1' + i).text(p6vec1[3]);
    }
    var p6ta3 = [];
    for (var i = 0; i < p6vec1[4]; i++) {
        if ((i + 1) == p6vec1[4]) {
            p6ta3.push('<span id="p6cim2' + i + '"></span>');
        } else {
            p6ta3.push('<span id="p6cim2' + i + '"></span> + ');
        }

    }
    $('#p6im3').html(p6ta3);
    for (var i = 0; i < p6vec1[4]; i++) {
        $('#p6cim2' + i).text(p6vec1[5]);
    }

    var p7vec1 = [(Math.floor(Math.random() * 6) + 2), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 6) + 2), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 6) + 2), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 6) + 2), (Math.floor(Math.random() * 8) + 2)];
    var p7t1 = [];
    for (var i = 0; i < p7vec1[0]; i++) {
        p7t1.push('<tr id="p7c' + i + '"></tr>');
    }
    $('#p7im1').html(p7t1);
    var p7v1 = [];
    for (var i = 0; i < p7vec1[1]; i++) {
        p7v1.push('<td><img src="img/i10_p212_u5a24.jpg" alt=""/></td>');
    }
    for (var i = 0; i < p7vec1[0]; i++) {
        $('#p7c' + i).html(p7v1);
    }
    $('#p7dcon1').val(p7vec1[0]);
    $('#p7dcon1').attr('disabled', 'true');
    $('#p7dcon2').val(p7vec1[1]);
    $('#p7dcon2').attr('disabled', 'true');
    var p7t2 = [];
    for (var i = 0; i < p7vec1[2]; i++) {
        p7t2.push('<tr id="p71c' + i + '"></tr>');
    }
    $('#p7im2').html(p7t2);
    var p7v2 = [];
    for (var i = 0; i < p7vec1[3]; i++) {
        p7v2.push('<td><img src="img/i11_p212_u5a24.jpg" alt=""/></td>');
    }
    for (var i = 0; i < p7vec1[2]; i++) {
        $('#p71c' + i).html(p7v2);
    }
    $('#p7dcon11').val(p7vec1[2]);
    $('#p7dcon11').attr('disabled', 'true');
    $('#p7dcon12').val(p7vec1[3]);
    $('#p7dcon12').attr('disabled', 'true');
    var p7t3 = [];
    for (var i = 0; i < p7vec1[4]; i++) {
        p7t3.push('<tr id="p72c' + i + '"></tr>');
    }
    $('#p7im3').html(p7t3);
    var p7v3 = [];
    for (var i = 0; i < p7vec1[5]; i++) {
        p7v3.push('<td><img src="img/i12_p212_u5a24.jpg" alt=""/></td>');
    }
    for (var i = 0; i < p7vec1[4]; i++) {
        $('#p72c' + i).html(p7v3);
    }
    $('#p7dcon21').val(p7vec1[4]);
    $('#p7dcon21').attr('disabled', 'true');
    $('#p7dcon22').val(p7vec1[5]);
    $('#p7dcon22').attr('disabled', 'true');

    var pal1 = ['<img class="drag1 img-responsive" src="img/i13_p212_u5a24.jpg" style="mix-blend-mode:multiply; display:inline-block" alt="1">',
        '<img class="drag1 img-responsive" src="img/i14_p212_u5a24.jpg" style="mix-blend-mode:multiply; display:inline-block" alt="2">',
        '<img class="drag1 img-responsive" src="img/i15_p212_u5a24.jpg" style="mix-blend-mode:multiply; display:inline-block" alt="3">'
    ];
    pal1.sort(f_randomico);
    $(".textos").append(pal1);
    var pal2 = [
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p8im1"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p8cim11" ><h4>ángulo</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p8im2"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p8cim12"><h4>semirrecta</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p8im3"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p8cim13"><h4>segmento</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ];
    pal2.sort(f_randomico);
    $("#datos").html(pal2);
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
            ui.draggable.attr("style", "mix-blend-mode:multiply");
            $(this).append(ui.draggable);

        }
    });

    var pal3 = ['<span class="bg_palabra drag2">300 minutos</span>',
        '<span class="bg_palabra drag2">24 meses</span>',
        '<span class="bg_palabra drag2">48 horas</span>',
        '<span class="bg_palabra drag2">180 segundos</span>',
        '<span class="bg_palabra drag2">730 días</span>'
    ];
    pal3.sort(f_randomico);

    $(".textos1").append(pal3);
    var pal4 = [
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop2 p81im1"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p81cim11" ><h4>2 días</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop2 p81im2"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p81cim12"><h4>5 horas</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop2 p81im3"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p81cim13"><h4>2 años</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop2 p81im4"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p81cim14"><h4>2 años</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop2 p81im5"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p81cim15"><h4>3 minutos</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ];
    pal4.sort(f_randomico);
    $("#datos1").html(pal4);
    $(".drag2").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: "#p8act2",
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

    var p9vec1 = [
        'Es posible que se contamine el río. <select id="p9sel1">' +
        '<option value="" disabled selected>Seleccione</option>' +
        '<option value="V">V</option>' +
        '<option value="F">F</option>' +
        '</select>',
        'Es posible que se pueda utilizar el agua de este río para beberla. <select id="p9sel2">' +
        '<option value="" disabled selected>Seleccione</option>' +
        '<option value="V">V</option>' +
        '<option value="F">F</option>' +
        '</select>',
        'Es muy probable que el río se contamine. <select id="p9sel3">' +
        '<option value="" disabled selected>Seleccione</option>' +
        '<option value="V">V</option>' +
        '<option value="F">F</option>' +
        '</select>',
        'Es totalmente probable que los peces de ese río mueran. <select id="p9sel4">' +
        '<option value="" disabled selected>Seleccione</option>' +
        '<option value="V">V</option>' +
        '<option value="F">F</option>' +
        '</select>'
    ];
    p9vec1.sort(f_randomico);
    var p9vec2=['<b style="color: #005CA4;">a)</b>','<b style="color: #005CA4;">b)</b>','<b style="color: #005CA4;">c)</b>','<b style="color: #005CA4;">d)</b>'];
    for (var i = 0; i < p9vec1.length; i++) {
        $('#p9im'+(i+1)).html(p9vec2[i]+p9vec1[i]);
    }
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1vec1 = ['1', '2', '3', '4', '5', '6', '7', '8'];
        var p1cont1 = 0;
        for (var i = 0; i < 8; i++) {
            var p1cont2 = 0;
            for (var j = 0; j < p1vec1.length; j++) {
                var p1res3 = $('#p1a' + (i + 1) + ' img').attr('alt');
                if ($('#p1a' + (i + 1) + ' img').length == '1') {
                    if (p1res3 == p1vec1[j]) {
                        p1cont2++;
                        p1vec1[j] = 'aaa';
                    }
                } else {
                    p1cont2;
                }

            }
            if (p1cont2 == '1') {
                p1cont1++;
                f_ok($('#p1a' + (i + 1)));
            } else {
                p1cont1;
                f_no($('#p1a' + (i + 1)));
            }
        }
        var result1 = (p1cont1 * 1) / 8;
        cor = cor + result1;
        inc = inc + (1 - result1);
        $('#pre1a').val(result1.toFixed(2));
        $('#pre1a').css('display', '');

        var nlrd1 = $('#nlrd6').val() + $('#nlrd7').val() + $('#nlrd8').val();
        var nlrd2 = $('#nlrd10').val() + $('#nlrd11').val() + $('#nlrd12').val();
        var nlrd3 = $('#nlrd16').val() + $('#nlrd17').val() + $('#nlrd18').val();
        var nlrd4 = $('#nlrd26').val() + $('#nlrd27').val() + $('#nlrd28').val();
        var nlrd5 = $('#nlrd30').val() + $('#nlrd31').val() + $('#nlrd32').val();
        var nlrd6 = $('#nlrd36').val() + $('#nlrd37').val() + $('#nlrd38').val();
        var p2cont1 = 0;
        if (nlrd1 == (p2vec1[1] + p2vec1[0])) {
            p2cont1++;
            f_ok($('#nlrd6'));
            f_ok($('#nlrd7'));
            f_ok($('#nlrd8'));
        } else {
            p2cont1;
            f_no($('#nlrd6'));
            f_no($('#nlrd7'));
            f_no($('#nlrd8'));
        }
        if (nlrd2 == (p2vec1[1] + p2vec1[0])) {
            p2cont1++;
            f_ok($('#nlrd10'));
            f_ok($('#nlrd11'));
            f_ok($('#nlrd12'));
        } else {
            p2cont1;
            f_no($('#nlrd10'));
            f_no($('#nlrd11'));
            f_no($('#nlrd12'));
        }
        if (nlrd3 == (p2vec1[0])) {
            p2cont1++;
            f_ok($('#nlrd16'));
            f_ok($('#nlrd17'));
            f_ok($('#nlrd18'));
        } else {
            p2cont1;
            f_no($('#nlrd16'));
            f_no($('#nlrd17'));
            f_no($('#nlrd18'));
        }
        if (nlrd4 == (p2vec1[2] + p2vec1[3])) {
            p2cont1++;
            f_ok($('#nlrd26'));
            f_ok($('#nlrd27'));
            f_ok($('#nlrd28'));
        } else {
            p2cont1;
            f_no($('#nlrd26'));
            f_no($('#nlrd27'));
            f_no($('#nlrd28'));
        }
        if (nlrd5 == (p2vec1[2] + p2vec1[3])) {
            p2cont1++;
            f_ok($('#nlrd30'));
            f_ok($('#nlrd31'));
            f_ok($('#nlrd32'));
        } else {
            p2cont1;
            f_no($('#nlrd30'));
            f_no($('#nlrd31'));
            f_no($('#nlrd32'));
        }
        if (nlrd6 == (p2vec1[2])) {
            p2cont1++;
            f_ok($('#nlrd36'));
            f_ok($('#nlrd37'));
            f_ok($('#nlrd38'));
        } else {
            p2cont1;
            f_no($('#nlrd36'));
            f_no($('#nlrd37'));
            f_no($('#nlrd38'));
        }
        var result2 = (p2cont1 * 2) / 6;
        cor = cor + result2;
        inc = inc + (2 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');

        var p3res1 = [];
        var p3res2 = [];
        var p3res3 = [];
        var p3res4 = [];

        for (var i = 1; i < 5; i++) {
            var n = $("#resa" + [i] + "").val();
            p3res1.push(n);
        }

        for (var i = 1; i < 5; i++) {
            var n = $("#resb" + [i] + "").val();
            p3res2.push(n);
        }

        for (var i = 1; i < 5; i++) {
            var n = $("#resc" + [i] + "").val();
            p3res3.push(n);
        }

        for (var i = 1; i < 5; i++) {
            var n = $("#resd" + [i] + "").val();
            p3res4.push(n);
        }
        var p3vec4 = [];
        p3vec4.push(p3res1[0] + p3res1[1] + p3res1[2] + p3res1[3]);
        p3vec4.push(p3res2[0] + p3res2[1] + p3res2[2] + p3res2[3]);
        p3vec4.push(p3res3[0] + p3res3[1] + p3res3[2] + p3res3[3]);
        p3vec4.push(p3res4[0] + p3res4[1] + p3res4[2] + p3res4[3]);
        p3vec3 = ['a', 'b', 'c', 'd'];
        var corr = 0;
        for (var i = 0; i < 4; i++) {
            var cont1 = 0;
            for (var j = 0; j < 4; j++) {
                if (p3vec4[i] == p3vec1[j]) {
                    cont1++;
                    p3vec1[j] = 'aa';
                } else {
                    cont1;
                }
            }
            if (cont1 == 1) {

                corr++;
                f_ok($("#res" + p3vec3[i] + "1"));
                f_ok($("#res" + p3vec3[i] + "2"));
                f_ok($("#res" + p3vec3[i] + "3"));
                f_ok($("#res" + p3vec3[i] + "4"));
            } else {
                corr;

                f_no($("#res" + p3vec3[i] + "1"));
                f_no($("#res" + p3vec3[i] + "2"));
                f_no($("#res" + p3vec3[i] + "3"));
                f_no($("#res" + p3vec3[i] + "4"));
            }
        }
        var result3 = (corr * 1) / 4;
        cor = cor + result3;
        inc = inc + (1 - result3);
        $('#pre3a').val(result3.toFixed(2));
        $('#pre3a').css('display', '');

        var p4dcon1 = $('#p4dcon1').val();
        var p4dcon2 = $('#p4dcon2').val();
        var p4dcon3 = $('#p4dcon3').val();
        var p4cont1 = 0;
        if (p4dcon1 == p4vec1[0]) {
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
        if (p4dcon3 == (p4vec1[0] * 2)) {
            p4cont1++;
            f_ok($('#p4dcon3'));
        } else {
            p4cont1;
            f_no($('#p4dcon3'));
        }
        var p4dcon11 = $('#p4dcon11').val();
        var p4dcon12 = $('#p4dcon12').val();
        var p4dcon13 = $('#p4dcon13').val();
        if (p4dcon11 == p4vec1[1]) {
            p4cont1++;
            f_ok($('#p4dcon11'));
        } else {
            p4cont1;
            f_no($('#p4dcon11'));
        }
        if (p4dcon12 == p4vec1[1]) {
            p4cont1++;
            f_ok($('#p4dcon12'));
        } else {
            p4cont1;
            f_no($('#p4dcon12'));
        }
        if (p4dcon13 == (p4vec1[1] * 2)) {
            p4cont1++;
            f_ok($('#p4dcon13'));
        } else {
            p4cont1;
            f_no($('#p4dcon13'));
        }
        var p4dcon21 = $('#p4dcon21').val();
        var p4dcon22 = $('#p4dcon22').val();
        var p4dcon23 = $('#p4dcon23').val();
        var p4dcon24 = $('#p4dcon24').val();
        if (p4dcon21 == p4vec1[2]) {
            p4cont1++;
            f_ok($('#p4dcon21'));
        } else {
            p4cont1;
            f_no($('#p4dcon21'));
        }
        if (p4dcon22 == p4vec1[2]) {
            p4cont1++;
            f_ok($('#p4dcon22'));
        } else {
            p4cont1;
            f_no($('#p4dcon22'));
        }
        if (p4dcon23 == p4vec1[2]) {
            p4cont1++;
            f_ok($('#p4dcon23'));
        } else {
            p4cont1;
            f_no($('#p4dcon23'));
        }
        if (p4dcon24 == (p4vec1[2] * 3)) {
            p4cont1++;
            f_ok($('#p4dcon24'));
        } else {
            p4cont1;
            f_no($('#p4dcon24'));
        }
        var p4dcon31 = $('#p4dcon31').val();
        var p4dcon32 = $('#p4dcon32').val();
        var p4dcon33 = $('#p4dcon33').val();
        var p4dcon34 = $('#p4dcon34').val();
        if (p4dcon31 == p4vec1[3]) {
            p4cont1++;
            f_ok($('#p4dcon31'));
        } else {
            p4cont1;
            f_no($('#p4dcon31'));
        }
        if (p4dcon32 == p4vec1[3]) {
            p4cont1++;
            f_ok($('#p4dcon32'));
        } else {
            p4cont1;
            f_no($('#p4dcon32'));
        }
        if (p4dcon33 == p4vec1[3]) {
            p4cont1++;
            f_ok($('#p4dcon33'));
        } else {
            p4cont1;
            f_no($('#p4dcon33'));
        }
        if (p4dcon34 == (p4vec1[3] * 3)) {
            p4cont1++;
            f_ok($('#p4dcon34'));
        } else {
            p4cont1;
            f_no($('#p4dcon34'));
        }
        var result4 = (p4cont1 * 1) / 14;
        cor = cor + result4;
        inc = inc + (1 - result4);
        $('#pre4a').val(result4.toFixed(2));
        $('#pre4a').css('display', '');

        var p5cont1 = 0;
        for (var i = 0; i < p5vec2.length; i++) {
            var p5res1 = $('#p5dcon' + (i + 1)).val();
            if (p5res1 == p5vec2[i]) {
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
        $('#pre5a').val(result5.toFixed(2));
        $('#pre5a').css('display', '');

        var p6cont1 = 0;
        var p6dcon4 = $('#p6dcon4').val();
        var p6dcon5 = $('#p6dcon5').val();
        var p6dcon6 = $('#p6dcon6').val();
        if (p6dcon4 == (p6vec1[0])) {
            p6cont1++;
            f_ok($('#p6dcon4'));
        } else {
            p6cont1;
            f_no($('#p6dcon4'));
        }
        if (p6dcon5 == (p6vec1[1])) {
            p6cont1++;
            f_ok($('#p6dcon5'));
        } else {
            p6cont1;
            f_no($('#p6dcon5'));
        }
        if (p6dcon6 == (p6vec1[0] * p6vec1[1])) {
            p6cont1++;
            f_ok($('#p6dcon6'));
        } else {
            p6cont1;
            f_no($('#p6dcon6'));
        }
        var p6dcon14 = $('#p6dcon14').val();
        var p6dcon15 = $('#p6dcon15').val();
        var p6dcon16 = $('#p6dcon16').val();
        if (p6dcon14 == (p6vec1[2])) {
            p6cont1++;
            f_ok($('#p6dcon14'));
        } else {
            p6cont1;
            f_no($('#p6dcon14'));
        }
        if (p6dcon15 == (p6vec1[3])) {
            p6cont1++;
            f_ok($('#p6dcon15'));
        } else {
            p6cont1;
            f_no($('#p6dcon15'));
        }
        if (p6dcon16 == (p6vec1[2] * p6vec1[3])) {
            p6cont1++;
            f_ok($('#p6dcon16'));
        } else {
            p6cont1;
            f_no($('#p6dcon16'));
        }
        var p6dcon24 = $('#p6dcon24').val();
        var p6dcon25 = $('#p6dcon25').val();
        var p6dcon26 = $('#p6dcon26').val();
        if (p6dcon24 == (p6vec1[4])) {
            p6cont1++;
            f_ok($('#p6dcon24'));
        } else {
            p6cont1;
            f_no($('#p6dcon24'));
        }
        if (p6dcon25 == (p6vec1[5])) {
            p6cont1++;
            f_ok($('#p6dcon25'));
        } else {
            p6cont1;
            f_no($('#p6dcon25'));
        }
        if (p6dcon26 == (p6vec1[4] * p6vec1[5])) {
            p6cont1++;
            f_ok($('#p6dcon26'));
        } else {
            p6cont1;
            f_no($('#p6dcon26'));
        }
        var result6 = (p6cont1 * 1) / 9;
        cor = cor + result6;
        inc = inc + (1 - result6);
        $('#pre6a').val(result6.toFixed(2));
        $('#pre6a').css('display', '');

        var p7cont1 = 0;
        var p7dcon3 = $('#p7dcon3').val();
        var p7dcon4 = $('#p7dcon4').val();
        var p7dcon5 = $('#p7dcon5').val();
        var p7dcon6 = $('#p7dcon6').val();
        if (p7dcon3 == (p7vec1[0] * p7vec1[1])) {
            p7cont1++;
            f_ok($('#p7dcon3'));
        } else {
            p7cont1;
            f_no($('#p7dcon3'));
        }
        if (p7dcon4 == (p7vec1[0])) {
            p7cont1++;
            f_ok($('#p7dcon4'));
        } else {
            p7cont1;
            f_no($('#p7dcon4'));
        }
        if (p7dcon5 == (p7vec1[1])) {
            p7cont1++;
            f_ok($('#p7dcon5'));
        } else {
            p7cont1;
            f_no($('#p7dcon5'));
        }
        if (p7dcon6 == (p7vec1[0] * p7vec1[1])) {
            p7cont1++;
            f_ok($('#p7dcon6'));
        } else {
            p7cont1;
            f_no($('#p7dcon6'));
        }
        var p7dcon13 = $('#p7dcon13').val();
        var p7dcon14 = $('#p7dcon14').val();
        var p7dcon15 = $('#p7dcon15').val();
        var p7dcon16 = $('#p7dcon16').val();
        if (p7dcon13 == (p7vec1[2] * p7vec1[3])) {
            p7cont1++;
            f_ok($('#p7dcon13'));
        } else {
            p7cont1;
            f_no($('#p7dcon13'));
        }
        if (p7dcon14 == (p7vec1[2])) {
            p7cont1++;
            f_ok($('#p7dcon14'));
        } else {
            p7cont1;
            f_no($('#p7dcon14'));
        }
        if (p7dcon15 == (p7vec1[3])) {
            p7cont1++;
            f_ok($('#p7dcon15'));
        } else {
            p7cont1;
            f_no($('#p7dcon15'));
        }
        if (p7dcon16 == (p7vec1[2] * p7vec1[3])) {
            p7cont1++;
            f_ok($('#p7dcon16'));
        } else {
            p7cont1;
            f_no($('#p7dcon16'));
        }
        var p7dcon23 = $('#p7dcon23').val();
        var p7dcon24 = $('#p7dcon24').val();
        var p7dcon25 = $('#p7dcon25').val();
        var p7dcon26 = $('#p7dcon26').val();
        if (p7dcon23 == (p7vec1[4] * p7vec1[5])) {
            p7cont1++;
            f_ok($('#p7dcon23'));
        } else {
            p7cont1;
            f_no($('#p7dcon23'));
        }
        if (p7dcon24 == (p7vec1[4])) {
            p7cont1++;
            f_ok($('#p7dcon24'));
        } else {
            p7cont1;
            f_no($('#p7dcon24'));
        }
        if (p7dcon25 == (p7vec1[5])) {
            p7cont1++;
            f_ok($('#p7dcon25'));
        } else {
            p7cont1;
            f_no($('#p7dcon25'));
        }
        if (p7dcon26 == (p7vec1[4] * p7vec1[5])) {
            p7cont1++;
            f_ok($('#p7dcon26'));
        } else {
            p7cont1;
            f_no($('#p7dcon26'));
        }
        var result7 = (p7cont1 * 1) / 12;
        cor = cor + result7;
        inc = inc + (1 - result7);
        $('#pre7a').val(result7.toFixed(2));
        $('#pre7a').css('display', '');

        var p8im1 = $('.p8im1 img').attr('alt');
        var p8im2 = $('.p8im2 img').attr('alt');
        var p8im3 = $('.p8im3 img').attr('alt');
        var p8cont1 = 0;
        if (p8im1 == '2') {
            p8cont1++;
            f_ok($('.p8im1'));
        } else {
            p8cont1;
            f_no($('.p8im1'));
        }
        if (p8im2 == '3') {
            p8cont1++;
            f_ok($('.p8im2'));
        } else {
            p8cont1;
            f_no($('.p8im2'));
        }
        if (p8im3 == '1') {
            p8cont1++;
            f_ok($('.p8im3'));
        } else {
            p8cont1;
            f_no($('.p8im3'));
        }
        var p81im1 = $('.p81im1 span').text();
        var p81im2 = $('.p81im2 span').text();
        var p81im3 = $('.p81im3 span').text();
        var p81im4 = $('.p81im4 span').text();
        var p81im5 = $('.p81im5 span').text();
        if (p81im1 == '48 horas') {
            p8cont1++;
            f_ok($('.p81im1'));
        } else {
            p8cont1;
            f_no($('.p81im1'));
        }
        if (p81im2 == '300 minutos') {
            p8cont1++;
            f_ok($('.p81im2'));
        } else {
            p8cont1;
            f_no($('.p81im2'));
        }
        if ((p81im3 == '24 meses' || p81im3 == '730 días')) {
            p8cont1++;
            f_ok($('.p81im3'));
        } else {
            p8cont1;
            f_no($('.p81im3'));
        }
        if ((p81im4 == '24 meses' || p81im4 == '730 días')) {
            p8cont1++;
            f_ok($('.p81im4'));
        } else {
            p8cont1;
            f_no($('.p81im4'));
        }
        if (p81im5 == '180 segundos') {
            p8cont1++;
            f_ok($('.p81im5'));
        } else {
            p8cont1;
            f_no($('.p81im5'));
        }
        var result8 = (p8cont1 * 1) / 8;
        cor = cor + result8;
        inc = inc + (1 - result8);
        $('#pre8a').val(result8.toFixed(2));
        $('#pre8a').css('display', '');

        var p9sel1=$('#p9sel1').val();
        var p9sel2=$('#p9sel2').val();
        var p9sel3=$('#p9sel3').val();
        var p9sel4=$('#p9sel4').val();
        var p9cont1=0;
        if (p9sel1 == 'V') {
            p9cont1++;
            f_ok($('#p9sel1'));
        } else {
            p9cont1;
            f_no($('#p9sel1'));
        }
        if (p9sel2 == 'F') {
            p9cont1++;
            f_ok($('#p9sel2'));
        } else {
            p9cont1;
            f_no($('#p9sel2'));
        }
        if (p9sel3 == 'V') {
            p9cont1++;
            f_ok($('#p9sel3'));
        } else {
            p9cont1;
            f_no($('#p9sel3'));
        }
        if (p9sel4 == 'V') {
            p9cont1++;
            f_ok($('#p9sel4'));
        } else {
            p9cont1;
            f_no($('#p9sel4'));
        }
        var result9 = (p9cont1 * 1) / 4;
        cor = cor + result9;
        inc = inc + (1 - result9);
        $('#pre9a').val(result9.toFixed(2));
        $('#pre9a').css('display', '');
        Calculo_nota();
    }
}