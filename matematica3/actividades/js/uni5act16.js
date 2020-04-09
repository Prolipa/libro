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

function f_iniciar() {
    var pal1 = ['<img src="img/i1_p195_u5a16.jpg" class="drag1 img-responsive" style="mix-blend-mode:multiply; display:inline-block;" alt="1" />',
        '<img src="img/i2_p195_u5a16.jpg" class="drag1 img-responsive" style="mix-blend-mode:multiply; display:inline-block;" alt="2" />',
        '<img src="img/i3_p195_u5a16.jpg" class="drag1 img-responsive" style="mix-blend-mode:multiply; display:inline-block;" alt="3" />',
        '<img src="img/i4_p195_u5a16.jpg" class="drag1 img-responsive" style="mix-blend-mode:multiply; display:inline-block;" alt="4" />'
    ];
    var pal2 = ['<img src="img/i5_p195_u5a16.jpg" class="img-responsive" style="mix-blend-mode:multiply;" alt="" />',
        '<img src="img/i6_p195_u5a16.jpg" class="img-responsive" style="mix-blend-mode:multiply;" alt="" />',
        '<img src="img/i7_p195_u5a16.jpg" class="img-responsive" style="mix-blend-mode:multiply;" alt="" />',
        '<img src="img/i8_p195_u5a16.jpg" class="img-responsive" style="mix-blend-mode:multiply;" alt="" />'
    ];
    pal1.sort(f_randomico);
    var p1vec1 = ['2', '1', '4', '3'];
    var p1aux1 = [];
    $(".textos").append(pal1);
    var myArray1 = ['0', '1', '2', '3'];
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
        $(".p1cim1" + i).html(pal2[c1]);
        p1aux1.push(p1vec1[c1]);

    };
    $(".drag1").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: ".p1res1",
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

    var p2vec1 = [(Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 8) + 2)];
    var p2t1 = [];
    for (var i = 0; i < p2vec1[0]; i++) {
        p2t1.push('<tr id="p2c'+i+'"></tr>');
    }
    $('#p1im1').html(p2t1);
    var p2v1=[];
    for (var i = 0; i < p2vec1[1]; i++) {
        p2v1.push('<td><img src="img/i9_p195_u5a16.jpg" class="img-responsive" alt=""/></td>');
    }
    for (var i = 0; i < p2vec1[0]; i++) {
        $('#p2c' + i).html(p2v1);
    }
    var p2ta1 = [];
    for (var i = 0; i < p2vec1[0]; i++) {
        if ((i + 1) == p2vec1[0]) {
            p2ta1.push('<input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p2dco'+i+'"> = <input type="text" style="border-radius: 10px; width: 50px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="3" id="p2dc1">');
        } else {
            p2ta1.push('<input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p2dco'+i+'"> + ');
        }

    }
    $('#p2cim1').html(p2ta1);
    var p2ta2 = [];
    for (var i = 0; i < p2vec1[1]; i++) {
        if ((i + 1) == p2vec1[1]) {
            p2ta2.push('<input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p21dco'+i+'"> = <input type="text" style="border-radius: 10px; width: 50px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="3" id="p2dc2">');
        } else {
            p2ta2.push('<input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p21dco'+i+'"> + ');
        }

    }
    $('#p2cim2').html(p2ta2);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1cont1=0;
        for (var i = 0; i < p1aux1.length; i++) {
            var p1res1=$('.p1im'+(i+1)+' img').attr('alt');
            if (p1res1==p1aux1[i]) {
                p1cont1++;
                f_ok($('.p1im'+(i+1)));
            }else{
                p1cont1;
                f_no($('.p1im'+(i+1)));
            }
        }
        var result1 = (p1cont1 * 5) / 4;
        cor = cor + result1;
        inc = inc + (5 - result1);
        $('#pre1a').val(result1.toFixed(2));
        $('#pre1a').css('display', '');

        var p2cont1=0;
        for (var i = 0; i < p2vec1[0]; i++) {
            var p2res1=$('#p2dco'+i).val();
            if (p2res1==p2vec1[1]) {
                p2cont1++;
                f_ok($('#p2dco'+i));
            }else{
                p2cont1;
                f_no($('#p2dco'+i));
            }
        }
        var p2dc1=$('#p2dc1').val();
        if (p2dc1==(p2vec1[0]*p2vec1[1])) {
            p2cont1++;
            f_ok($('#p2dc1'));
        }else{
            p2cont1;
            f_no($('#p2dc1'));
        }
        var p2dcon1=$('#p2dcon1').val();
        var p2dcon2=$('#p2dcon2').val();
        var p2dcon3=$('#p2dcon3').val();
        if (p2dcon1==p2vec1[0]) {
            p2cont1++;
            f_ok($('#p2dcon1'));
        }else{
            p2cont1;
            f_no($('#p2dcon1'));
        }
        if (p2dcon2==p2vec1[1]) {
            p2cont1++;
            f_ok($('#p2dcon2'));
        }else{
            p2cont1;
            f_no($('#p2dcon2'));
        }
        if (p2dcon3==(p2vec1[0]*p2vec1[1])) {
            p2cont1++;
            f_ok($('#p2dcon3'));
        }else{
            p2cont1;
            f_no($('#p2dcon3'));
        }
        for (var i = 0; i < p2vec1[1]; i++) {
            var p2res2=$('#p21dco'+i).val();
            if (p2res2==p2vec1[0]) {
                p2cont1++;
                f_ok($('#p21dco'+i));
            }else{
                p2cont1;
                f_no($('#p21dco'+i));
            }
        }
        var p2dc2=$('#p2dc2').val();
        if (p2dc2==(p2vec1[0]*p2vec1[1])) {
            p2cont1++;
            f_ok($('#p2dc2'));
        }else{
            p2cont1;
            f_no($('#p2dc2'));
        }
        var p2dcon11=$('#p2dcon11').val();
        var p2dcon12=$('#p2dcon12').val();
        var p2dcon13=$('#p2dcon13').val();
        if (p2dcon11==p2vec1[1]) {
            p2cont1++;
            f_ok($('#p2dcon11'));
        }else{
            p2cont1;
            f_no($('#p2dcon11'));
        }
        if (p2dcon12==p2vec1[0]) {
            p2cont1++;
            f_ok($('#p2dcon12'));
        }else{
            p2cont1;
            f_no($('#p2dcon12'));
        }
        if (p2dcon13==(p2vec1[0]*p2vec1[1])) {
            p2cont1++;
            f_ok($('#p2dcon13'));
        }else{
            p2cont1;
            f_no($('#p2dcon13'));
        }
        var result2 = (p2cont1 * 5) / (p2vec1[0]+p2vec1[1]+8);
        cor = cor + result2;
        inc = inc + (5 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');
        Calculo_nota();
    }
}