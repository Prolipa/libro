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
    var p1vec1 = ['<img src="img/i5_p157_act74.jpg" class="img-responsive drag1" alt="1" style="mix-blend-mode: multiply; display:inline-block; width:90px;">', '<img src="img/i6_p157_act74.jpg" class="img-responsive drag1" alt="2" style="mix-blend-mode: multiply; display:inline-block; width:90px;">', '<img src="img/i7_p157_act74.jpg" class="img-responsive drag1" alt="3" style="mix-blend-mode: multiply; display:inline-block; width:90px;">', '<img src="img/i8_p157_act74.jpg" class="img-responsive drag1" alt="4" style="mix-blend-mode: multiply; display:inline-block; width:90px;">'];
    p1vec1.sort(f_randomico);
    var p1vec2 = [
        '<div class="col-sm-3"></div>' +
        '<div class="col-sm-6">' +
        '<br>' +
        '<div class="col-sm-6">' +
        '<div class="c_destino1 drop1 p1cim1"></div>' +
        '</div>' +
        '<div class="col-sm-6" align="center">' +
        '<img src="img/i1_p157_act74.jpg" class="img-responsive" alt="" style="mix-blend-mode: multiply; width:110px;">' +
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
        '<img src="img/i2_p157_act74.jpg" class="img-responsive" alt="" style="mix-blend-mode: multiply; width:110px;">' +
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
        '<img src="img/i3_p157_act74.jpg" class="img-responsive" alt="" style="mix-blend-mode: multiply; width:130px;">' +
        '</div>' +
        '</div>' +
        '<div class="col-sm-3"></div>' +
        '<div class="row"></div>',
        '<div class="col-sm-3"></div>' +
        '<div class="col-sm-6">' +
        '<br>' +
        '<div class="col-sm-6">' +
        '<div class="c_destino1 drop1 p1cim4"></div>' +
        '</div>' +
        '<div class="col-sm-6" align="center">' +
        '<img src="img/i4_p157_act74.jpg" class="img-responsive" alt="" style="mix-blend-mode: multiply; width:110px;">' +
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
        containment: ".actividad741",
        scroll: false,
    });
    $(".drop1").droppable({
        accept: ".drag1",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag1");
            ui.draggable.attr("style", "mix-blend-mode: multiply; width:70px;");
            $(this).append(ui.draggable);
        }
    });

    var p2vec1 = [
        '<div class="table-responsive" style="display: inline-block;">' +
        '<table class="table-responsive">' +
        '<tr align="center">' +
        '<td>' +
        '<img src="img/i9_p157_act74.jpg" alt="" class="img-responsive">' +
        '<span style="font-size: 50px;">pato</span>' +
        '</td>' +
        '<td>' +
        '<img src="img/i13_p157_act74.jpg" alt="" class="img-responsive">' +
        '<input type="text" class="form-control" onkeyup="mayus(this)" style="font-size: 40px; text-align: center; min-width: 60px; max-width: 190px; height: 50px;" id="p2dcon1">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block;">' +
        '<table class="table-responsive">' +
        '<tr align="center">' +
        '<td>' +
        '<img src="img/i10_p157_act74.jpg" alt="" class="img-responsive">' +
        '<span style="font-size: 50px;">burro</span>' +
        '</td>' +
        '<td>' +
        '<img src="img/i12_p157_act74.jpg" alt="" class="img-responsive">' +
        '<input type="text" class="form-control" onkeyup="mayus(this)" style="font-size: 40px; text-align: center; min-width: 60px; max-width: 190px; height: 50px;" id="p2dcon2">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block;">' +
        '<table class="table-responsive">' +
        '<tr align="center">' +
        '<td>' +
        '<img src="img/i11_p157_act74.jpg" alt="" class="img-responsive">' +
        '<span style="font-size: 50px;">mono</span>' +
        '</td>' +
        '<td>' +
        '<img src="img/i14_p157_act74.jpg" alt="" class="img-responsive">' +
        '<input type="text" class="form-control" onkeyup="mayus(this)" style="font-size: 40px; text-align: center; min-width: 60px; max-width: 190px; height: 50px;" id="p2dcon3">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
    ];
    p2vec1.sort(f_randomico);
    $('#p2im1').html(p2vec1);

    var p3vec1 = ['<img src="img/i5_p157_act74.jpg" class="img-responsive drag2" alt="1" style="mix-blend-mode: multiply; display:inline-block; width:90px;">', '<img src="img/i19_p157_act74.jpg" class="img-responsive drag2" alt="2" style="mix-blend-mode: multiply; display:inline-block; width:90px;">', '<img src="img/i6_p157_act74.jpg" class="img-responsive drag2" alt="3" style="mix-blend-mode: multiply; display:inline-block; width:90px;">'];
    p3vec1.sort(f_randomico);
    $('.textos1').html(p3vec1);
    $(".drag2").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: ".actividad743",
        scroll: false,
    });
    $(".drop2").droppable({
        accept: ".drag2",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag2");
            ui.draggable.attr("style", "mix-blend-mode: multiply; width:70px;");
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
        if (p1cim4 == '4') {
            cor++;
            f_ok($('.p1cim4'));
        } else {
            inc++;
            f_no($('.p1cim4'));
        }
        var p2dcon1 = $('#p2dcon1').val();
        var p2dcon2 = $('#p2dcon2').val();
        var p2dcon3 = $('#p2dcon3').val();
        if (p2dcon1 == 'patito') {
            cor++;
            f_ok($('#p2dcon1'));
        } else {
            inc++;
            f_no($('#p2dcon1'));
        }
        if (p2dcon2 == 'burrito') {
            cor++;
            f_ok($('#p2dcon2'));
        } else {
            inc++;
            f_no($('#p2dcon2'));
        }
        if (p2dcon3 == 'monito') {
            cor++;
            f_ok($('#p2dcon3'));
        } else {
            inc++;
            f_no($('#p2dcon3'));
        }
        var p3cim1=$('.p3cim1 img').attr('alt');
        var p3cim2=$('.p3cim2 img').attr('alt');
        var p3cim3=$('.p3cim3 img').attr('alt');
        if (p3cim1=='1') {
            cor++;
            f_ok($('.p3cim1'));
        }else{
            inc++;
            f_no($('.p3cim1'));
        }
        if (p3cim2=='2') {
            cor++;
            f_ok($('.p3cim2'));
        }else{
            inc++;
            f_no($('.p3cim2'));
        }
        if (p3cim3=='3') {
            cor++;
            f_ok($('.p3cim3'));
        }else{
            inc++;
            f_no($('.p3cim3'));
        }
        Calculo_nota();
    }
}