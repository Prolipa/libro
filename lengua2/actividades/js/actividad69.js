var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 3,
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
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 enc1':
            $('.enc1').addClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            break;
        case '1 enc2':
            $('.enc2').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            break;
        case '1 enc3':
            $('.enc3').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            break;
        case '1 enc4':
            $('.enc4').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            break;
        case '1 enc5':
            $('.enc5').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            break;

    }
});

function f_iniciar() {
    var p1vec1 = ['<img src="img/i4_p145_act69.jpg" class="img-responsive drag1" alt="1" style="mix-blend-mode: multiply; display:inline-block; width:90px;">', '<img src="img/i5_p145_act69.jpg" class="img-responsive drag1" alt="2" style="mix-blend-mode: multiply; display:inline-block; width:90px;">', '<img src="img/i6_p145_act69.jpg" class="img-responsive drag1" alt="3" style="mix-blend-mode: multiply; display:inline-block; width:90px;">'];
    p1vec1.sort(f_randomico);
    var p1vec2 = [
        '<div class="col-sm-3"></div>' +
        '<div class="col-sm-6">' +
        '<br>' +
        '<div class="col-sm-6">' +
        '<div class="c_destino1 drop1 p1cim1"></div>' +
        '</div>' +
        '<div class="col-sm-6" align="center">' +
        '<img src="img/i1_p145_act69.jpg" class="img-responsive" alt="" style="mix-blend-mode: multiply; width:110px;">' +
        '</div>' +
        '</div>' +
        '<div class="col-sm-3"></div>' +
        '<div class="row"></div>',
        '<div class="col-sm-3"></div>' +
        '<div class="col-sm-6">' +
        '<br>' +
        '<div class="col-sm-6">' +
        '<div class="c_destino1 drop1 p1cim2"></div>' +
        '</div>' +
        '<div class="col-sm-6" align="center">' +
        '<img src="img/i2_p145_act69.jpg" class="img-responsive" alt="" style="mix-blend-mode: multiply; width:110px;">' +
        '</div>' +
        '</div>' +
        '<div class="col-sm-3"></div>' +
        '<div class="row"></div>',
        '<div class="col-sm-3"></div>' +
        '<div class="col-sm-6">' +
        '<br>' +
        '<div class="col-sm-6">' +
        '<div class="c_destino1 drop1 p1cim3"></div>' +
        '</div>' +
        '<div class="col-sm-6" align="center">' +
        '<img src="img/i3_p145_act69.jpg" class="img-responsive" alt="" style="mix-blend-mode: multiply; width:110px;">' +
        '</div>' +
        '</div>' +
        '<div class="col-sm-3"></div>' +
        '<div class="row"></div>'
    ];
    p1vec2.sort(f_randomico);
    $('.textos').html(p1vec1);
    $('#p1im1').html(p1vec2);
    $(".drag1").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: ".actividad691",
        scroll: false,
    });
    $(".drop1").droppable({
        accept: ".drag1",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag1");
            ui.draggable.attr("style", "mix-blend-mode: multiply; width:100px;");
            $(this).append(ui.draggable);
        }
    });
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1cim1=$('.p1cim1 img').attr('alt');
        var p1cim2=$('.p1cim2 img').attr('alt');
        var p1cim3=$('.p1cim3 img').attr('alt');
        if (p1cim1=='2') {
            cor++;
            f_ok($('.p1cim1'));
        }else{
            inc++;
            f_no($('.p1cim1'));
        }
        if (p1cim2=='3') {
            cor++;
            f_ok($('.p1cim2'));
        }else{
            inc++;
            f_no($('.p1cim2'));
        }
        if (p1cim3=='1') {
            cor++;
            f_ok($('.p1cim3'));
        }else{
            inc++;
            f_no($('.p1cim3'));
        }
        Calculo_nota();
    }
}