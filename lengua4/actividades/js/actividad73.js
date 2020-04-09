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

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 2)
});
document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 2)
});

function f_iniciar() {
    var p4vc1 = ['<td>' +
        '<img src="img/i5_p130_act73.jpg" alt="" style="mix-blend-mode: multiply;">' +
        '</td>' +
        '<td>' +
        'que las estrellas brillaban' +
        '</td>',
        '<td>' +
        '<img src="img/i6_p130_act73.jpg" style="mix-blend-mode: multiply;">' +
        '</td>' +
        '<td>' +
        'que alegres me miraban.' +
        '</td>',
        '<td>' +
        '<img src="img/i7_p130_act73.jpg" style="mix-blend-mode: multiply;">' +
        '</td>' +
        '<td>' +
        'y eran tus hermosos ojos' +
        '</td>',
        '<td>' +
        '<img src="img/i8_p130_act73.jpg" style="mix-blend-mode: multiply;">' +
        '</td>' +
        '<td>' +
        'Anoche soñando estaba' +
        '</td>'
    ]
    p4vc1.sort(f_randomico);
    for (var i = 0; i < p4vc1.length; i++) {
        $('#p4im' + (i + 1)).html(p4vc1[i]);
    }

    var p4vc2 = ['<td>' +
        '<img src="img/i6_p130_act73.jpg" style="mix-blend-mode: multiply;">' +
        '</td>' +
        '<td>' +
        'a mi querido tormento.' +
        '</td>',
        '<td>' +
        '<img src="img/i7_p130_act73.jpg" style="mix-blend-mode: multiply;">' +
        '</td>' +
        '<td>' +
        'para besarle en la frente' +
        '</td>',
        '<td>' +
        '<img src="img/i5_p130_act73.jpg" style="mix-blend-mode: multiply;">' +
        '</td>' +
        '<td>' +
        'que brilla en el firmamento,' +
        '</td>',
        '<td>' +
        '<img src="img/i8_p130_act73.jpg" style="mix-blend-mode: multiply;">' +
        '</td>' +
        '<td>' +
        'Quisiera ser como el sol' +
        '</td>'
    ];
    p4vc2.sort(f_randomico);
    for (var i = 0; i < p4vc2.length; i++) {
        $('#p41im' + (i + 1)).html(p4vc2[i]);
    }
    var p4vc3 = ['<td>' +
        '<img src="img/i7_p130_act73.jpg" style="mix-blend-mode: multiply;">' +
        '</td>' +
        '<td>' +
        "mire usté' cuando baila" +
        '</td>',
        '<td>' +
        '<img src="img/i8_p130_act73.jpg" style="mix-blend-mode: multiply;">' +
        '</td>' +
        '<td>' +
        'Santígüese señor mío' +
        '</td>',
        '<td>' +
        '<img src="img/i6_p130_act73.jpg" style="mix-blend-mode: multiply;">' +
        '</td>' +
        '<td>' +
        'es demoñito que mata.' +
        '</td>',
        '<td>' +
        '<img src="img/i5_p130_act73.jpg" style="mix-blend-mode: multiply;">' +
        '</td>' +
        '<td>' +
        'al bailar con esta gata,' +
        '</td>'
    ];
    p4vc3.sort(f_randomico);
    for (var i = 0; i < p4vc3.length; i++) {
        $('#p42im' + (i + 1)).html(p4vc3[i]);
    }
    var p4vc4 = ['<td>' +
        '<img src="img/i8_p130_act73.jpg" style="mix-blend-mode: multiply;">' +
        '</td>' +
        '<td>' +
        'Quisiera ser una flor' +
        '</td>',
        '<td>' +
        '<img src="img/i7_p130_act73.jpg" style="mix-blend-mode: multiply;">' +
        '</td>' +
        '<td>' +
        'quisiera pintar con color' +
        '</td>',
        '<td>' +
        '<img src="img/i6_p130_act73.jpg" style="mix-blend-mode: multiply;">' +
        '</td>' +
        '<td>' +
        'tu rostro tan bello.' +
        '</td>',
        '<td>' +
        '<img src="img/i5_p130_act73.jpg" style="mix-blend-mode: multiply;">' +
        '</td>' +
        '<td>' +
        'y adornar tu cabello' +
        '</td>'
    ];
    p4vc4.sort(f_randomico);
    for (var i = 0; i < p4vc4.length; i++) {
        $('#p43im' + (i + 1)).html(p4vc4[i]);
    }
    bt_comprobar.addEventListener("click", f_preg1);

    function f_preg1() {
        var nota1_1 = $('#nota1_1').val();
        cor = 0;
        inc = 0;
        if (!nota1_1) {
            alert('Ingrese la calificación en la pregunta 1')
        } else {
            cor = cor + parseFloat(nota1_1);
            inc = inc + (2 - parseFloat(nota1_1));
            $('#nota1_1').val(parseFloat(nota1_1).toFixed(2));
            $('#nota1_1').attr('disabled', 'true');
            f_preg2();
        }
    }

    function f_preg2() {
        var nota1_2 = $('#nota1_2').val();
        if (!nota1_2) {
            alert('Ingrese la calificación en la pregunta 3')
        } else {
            cor = cor + parseFloat(nota1_2);
            inc = inc + (2 - parseFloat(nota1_2));
            $('#nota1_2').val(parseFloat(nota1_2).toFixed(2));
            $('#nota1_2').attr('disabled', 'true');
            f_comprobar();
        }
    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_preg1);
        var p2vec1 = ['capital', 'real', 'volar', 'pasar'];
        var p2cont1 = 0;
        for (var i = 0; i < p2vec1.length; i++) {
            var resp1 = $('#p2dcon' + (i + 1)).val();
            if (resp1 == p2vec1[i]) {
                p2cont1++;
                f_ok($('#p2dcon' + (i + 1)));
            } else {
                p2cont1;
                f_no($('#p2dcon' + (i + 1)));
            }
        }
        var result2 = (p2cont1 * 2) / 4;
        cor = cor + result2;
        inc = inc + (2 - result2);


        var p2vec2=['anoche soñando estaba','que las estrellas brillaban','y eran tus hermosos ojos','que alegres me miraban.'];
        var p4cont1=0;
        for (var i = 0; i < p2vec2.length; i++) {
            var resp2= $('#p4dcon' + (i + 1)).val().toLowerCase();
            if (resp2 == p2vec2[i]) {
                p4cont1++;
                f_ok($('#p4dcon' + (i + 1)));
            } else {
                p4cont1;
                f_no($('#p4dcon' + (i + 1)));
            }
        }

        var p2vec3=['quisiera ser como el sol','que brilla en el firmamento,','para besarle en la frente','a mi querido tormento.'];
        for (var i = 0; i < p2vec3.length; i++) {
            var resp2= $('#p41dcon' + (i + 1)).val().toLowerCase();
            if (resp2 == p2vec3[i]) {
                p4cont1++;
                f_ok($('#p41dcon' + (i + 1)));
            } else {
                p4cont1;
                f_no($('#p41dcon' + (i + 1)));
            }
        }

        var p2vec4=["santígüese señor mío","al bailar con esta gata,","mire usté' cuando baila","es demoñito que mata."];
        for (var i = 0; i < p2vec4.length; i++) {
            var resp2= $('#p42dcon' + (i + 1)).val().toLowerCase();
            if (resp2 == p2vec4[i]) {
                p4cont1++;
                f_ok($('#p42dcon' + (i + 1)));
            } else {
                p4cont1;
                f_no($('#p42dcon' + (i + 1)));
            }
        }

        var p2vec5=["quisiera ser una flor","y adornar tu cabello","quisiera pintar con color","tu rostro tan bello."];
        for (var i = 0; i < p2vec5.length; i++) {
            var resp2= $('#p43dcon' + (i + 1)).val().toLowerCase();
            if (resp2 == p2vec5[i]) {
                p4cont1++;
                f_ok($('#p43dcon' + (i + 1)));
            } else {
                p4cont1;
                f_no($('#p43dcon' + (i + 1)));
            }
        }
        var result4 = (p4cont1 * 4) / 16;
        cor = cor + result4;
        inc = inc + (2 - result4);
        Calculo_nota();
    }
}