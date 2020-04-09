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

function f_iniciar() {
    var p13vec1=[
        '<img src="img/i1_p217_u5a18.jpg" class="img-responsive">'+
        '<div class="texto-encima"><input type="text" style="border: 2px solid #01996f; border-radius: 10px; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros(event)" id="p13dcon1"></div>',
        '<img src="img/i2_p217_u5a18.jpg" class="img-responsive">'+
        '<div class="texto-encima"><input type="text" style="border: 2px solid #01996f; border-radius: 10px; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros(event)" id="p13dcon2"></div>',
        '<img src="img/i3_p217_u5a18.jpg" class="img-responsive">'+
        '<div class="texto-encima"><input type="text" style="border: 2px solid #01996f; border-radius: 10px; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros(event)" id="p13dcon3"></div>',
        '<img src="img/i4_p217_u5a18.jpg" class="img-responsive">'+
        '<div class="texto-encima"><input type="text" style="border: 2px solid #01996f; border-radius: 10px; width: 40px; text-align: center;" maxlength="1" onkeypress="return soloNumeros(event)" id="p13dcon4"></div>'
    ];
    p13vec1.sort(f_randomico);
    $('#p13im1').html(p13vec1[0]);
    $('#p13im2').html(p13vec1[1]);
    $('#p13im3').html(p13vec1[2]);
    $('#p13im4').html(p13vec1[3]);

    var pal1 = [
        '<span class="bg_palabra drag1">galletas</span>',
        '<span class="bg_palabra drag1">Las</span>',
        '<span class="bg_palabra drag1">relleno</span>',
        '<span class="bg_palabra drag1">tienen</span>',
        '<span class="bg_palabra drag1">vainilla.</span>',
        '<span class="bg_palabra drag1">de</span>'
    ];
    pal1.sort(f_randomico);
    $('.textos').html(pal1);
    $(".drag1").draggable({
            revert: "invalid",
            zIndex: 5,
            containment: "#p1act1",
            scroll: false,
        });
        $(".drop1").droppable({
            accept: ".drag1",
            drop: function(e, ui) {
                $(ui.draggable).removeClass("drag1");
                $(ui.draggable).removeClass("bg_palabra");
                ui.draggable.attr("style", "padding: 5px;");
                $(this).append(ui.draggable);

            }
        });
    var pal2 = [
        '<span class="bg_palabra drag2">Allí</span>',
        '<span class="bg_palabra drag2">llave</span>',
        '<span class="bg_palabra drag2">casillero.</span>',
        '<span class="bg_palabra drag2">está</span>',
        '<span class="bg_palabra drag2">la</span>',
        '<span class="bg_palabra drag2">de</span>',
        '<span class="bg_palabra drag2">mi</span>'
    ];
    pal2.sort(f_randomico);
    $('.textos1').html(pal2);
    $(".drag2").draggable({
            revert: "invalid",
            zIndex: 5,
            containment: "#p1act2",
            scroll: false,
        });
        $(".drop2").droppable({
            accept: ".drag2",
            drop: function(e, ui) {
                $(ui.draggable).removeClass("drag2");
                $(ui.draggable).removeClass("bg_palabra");
                ui.draggable.attr("style", "padding: 5px;");
                $(this).append(ui.draggable);

            }
        });
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p13dcon1=$('#p13dcon1').val();
        var p13dcon2=$('#p13dcon2').val();
        var p13dcon3=$('#p13dcon3').val();
        var p13dcon4=$('#p13dcon4').val();
        var p13cont1=0;
        if (p13dcon1=='4') {
            p13cont1++;
            f_ok($('#p13dcon1'));
        }else {
            p13cont1;
            f_no($('#p13dcon1'));
        }
        if (p13dcon2=='2') {
            p13cont1++;
            f_ok($('#p13dcon2'));
        }else {
            p13cont1;
            f_no($('#p13dcon2'));
        }
        if (p13dcon3=='3') {
            p13cont1++;
            f_ok($('#p13dcon3'));
        }else {
            p13cont1;
            f_no($('#p13dcon3'));
        }
        if (p13dcon4=='1') {
            p13cont1++;
            f_ok($('#p13dcon4'));
        }else {
            p13cont1;
            f_no($('#p13dcon4'));
        }
        var result1 = (p13cont1 * 5) / 4;
        cor = cor + result1;
        inc = inc + (5 - result1);
        $('#nota1_13').val(result1.toFixed(2));
        $('#nota1_13').css('display', '');

        var p1a1=$('#p1a1 span').text();
        var p1a2=$('#p1a2 span').text();
        var p14cont1=0;
        if (p1a1=='Lasgalletastienenrellenodevainilla.') {
            p14cont1++;
            f_ok($('#p1a1'));
        }else {
            p14cont1;
            f_no($('#p1a1'));
        }
        if (p1a2=='Allíestálallavedemicasillero.') {
            p14cont1++;
            f_ok($('#p1a2'));
        }else {
            p14cont1;
            f_no($('#p1a2'));
        }
        var result2 = (p14cont1 * 5) / 2;
        cor = cor + result2;
        inc = inc + (5 - result2);
        $('#nota1_14').val(result2.toFixed(2));
        $('#nota1_14').css('display', '');
        Calculo_nota();
    }
}