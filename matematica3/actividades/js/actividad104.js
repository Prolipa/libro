var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 3,
    cor = 0,
    inc = 0,
    str = '',
    calificacion = 10;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}

function f_iniciar() {
    var pal1 = ['<img class="drag3 c1 img-responsive" src="img/i1_p95_act104.jpg" style="display: inline-block;mix-blend-mode:multiply;">',
        '<img class="drag3 c2 img-responsive" src="img/i2_p95_act104.jpg" style="display: inline-block; mix-blend-mode:multiply;">',
        '<img class="drag3 c3 img-responsive" src="img/i3_p95_act104.jpg" style="display: inline-block; mix-blend-mode:multiply;">',
        '<img class="drag3 c1 img-responsive" src="img/i4_p95_act104.jpg" style="display: inline-block; mix-blend-mode:multiply;">',
        '<img class="drag3 c2 img-responsive" src="img/i5_p95_act104.jpg" style="display: inline-block; mix-blend-mode:multiply;">',
        '<img class="drag3 c3 img-responsive" src="img/i6_p95_act104.jpg" style="display: inline-block; mix-blend-mode:multiply;">'
    ];
    var pal2 = ['<div><b>Aire</b></div>',
        '<div><b>Agua</b></div>',
        '<div><b>Tierra</b></div>',
    ];
    var pal3 = ['c1',
        'c2',
        'c3',
    ];
    var p5aux1 = [];
    pal1.sort(f_randomico);
    $(".textos").append(pal1);
    var myArray1 = ['0', '1', '2'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 5; i++) {
        var c = myArray1[i - 1];
        $(".p5cim1" + i).html(pal2[c]);
        p5aux1.push(pal3[c]);

    };
    $(".drag3").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: ".actividad17",
        scroll: false,
    });

    $(".drop3").droppable({
        accept: ".drag3",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag3");
            $(ui.draggable).removeClass("bg_palabra");
            ui.draggable.attr("style", "mix-blend-mode:multiply;");
            $(this).append(ui.draggable);

        }
    });
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);

        var p5im1 = $('.p5im1 > .' + p5aux1[0]);
        var p5im2 = $('.p5im2 > .' + p5aux1[1]);
        var p5im3 = $('.p5im3 > .' + p5aux1[2]);


        if (p5im1.length == '2') {
            cor++;
            f_ok($('.p5im1'));
        } else {
            inc++;
            f_no($('.p5im1'));
        }
        if (p5im2.length == '2') {
            cor++;
            f_ok($('.p5im2'));
        } else {
            inc++;
            f_no($('.p5im2'));
        }
        if (p5im3.length == '2') {
            cor++;
            f_ok($('.p5im3'));
        } else {
            inc++;
            f_no($('.p5im3'));
        }

        Calculo_nota();
    }
}