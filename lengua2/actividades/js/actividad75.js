var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 5,
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
    var p1vec1 = ['<img src="img/i1_p158_act75.jpg" class="img-responsive drag1" alt="1" style="mix-blend-mode: multiply; display:inline-block; width:70px;">', '<img src="img/i2_p158_act75.jpg" class="img-responsive drag1" alt="2" style="mix-blend-mode: multiply; display:inline-block; width:70px;">', '<img src="img/i3_p158_act75.jpg" class="img-responsive drag1" alt="3" style="mix-blend-mode: multiply; display:inline-block; width:70px;">', '<img src="img/i4_p158_act75.jpg" class="img-responsive drag1" alt="4" style="mix-blend-mode: multiply; display:inline-block; width:70px;">', '<img src="img/i5_p158_act75.jpg" class="img-responsive drag1" alt="5" style="mix-blend-mode: multiply; display:inline-block; width:50px;">'];
    p1vec1.sort(f_randomico);
    var p1vec2 = [
        '<div class="" style="display: inline-block; padding:10px;">' +
        '<br>' +
        '<table class="table-responsive">' +
        '<tr align="center">' +
        '<td>' +
        '<div class="c_destino1 drop1 p1cim1"></div>' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '<span style="font-size: 30px;"><b>hora</b></span>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="" style="display: inline-block; padding:10px;">' +
        '<br>' +
        '<table class="table-responsive">' +
        '<tr align="center">' +
        '<td>' +
        '<div class="c_destino1 drop1 p1cim2"></div>' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '<span style="font-size: 30px;"><b>búho</b></span>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="" style="display: inline-block; padding:10px;">' +
        '<br>' +
        '<table class="table-responsive">' +
        '<tr align="center">' +
        '<td>' +
        '<div class="c_destino1 drop1 p1cim3"></div>' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '<span style="font-size: 30px;"><b>hielo</b></span>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="" style="display: inline-block; padding:10px;">' +
        '<br>' +
        '<table class="table-responsive">' +
        '<tr align="center">' +
        '<td>' +
        '<div class="c_destino1 drop1 p1cim4"></div>' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '<span style="font-size: 30px;"><b>huevo</b></span>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="" style="display: inline-block; padding:10px;">' +
        '<br>' +
        '<table class="table-responsive">' +
        '<tr align="center">' +
        '<td>' +
        '<div class="c_destino1 drop1 p1cim5"></div>' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '<span style="font-size: 30px;"><b>hilo</b></span>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ];
    p1vec2.sort(f_randomico);
    $('.textos').html(p1vec1);
    $('#p1im1').html(p1vec2);
    $(".drag1").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: ".actividad751",
        scroll: false,
    });
    $(".drop1").droppable({
        accept: ".drag1",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag1");
            ui.draggable.attr("style", "mix-blend-mode: multiply; width:60px;");
            $(this).append(ui.draggable);
        }
    });
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1cim1 = $('.p1cim1 img').attr('alt');
        var p1cim2 = $('.p1cim2 img').attr('alt');
        var p1cim3 = $('.p1cim3 img').attr('alt');
        var p1cim4 = $('.p1cim4 img').attr('alt');
        var p1cim5 = $('.p1cim5 img').attr('alt');
        if (p1cim1 == '3') {
            cor++;
            f_ok($('.p1cim1'));
        } else {
            inc++;
            f_no($('.p1cim1'));
        }
        if (p1cim2 == '1') {
            cor++;
            f_ok($('.p1cim2'));
        } else {
            inc++;
            f_no($('.p1cim2'));
        }
        if (p1cim3 == '2') {
            cor++;
            f_ok($('.p1cim3'));
        } else {
            inc++;
            f_no($('.p1cim3'));
        }
        if (p1cim4 == '5') {
            cor++;
            f_ok($('.p1cim4'));
        } else {
            inc++;
            f_no($('.p1cim4'));
        }
        if (p1cim5 == '4') {
            cor++;
            f_ok($('.p1cim5'));
        } else {
            inc++;
            f_no($('.p1cim5'));
        }
        Calculo_nota();
    }
}