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
document.getElementById('pre3a').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('pre3a').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('pre3a'), 2)
});
function f_iniciar() {
    var pal1 = ['<span class="bg_palabra drag1">7 días</span>',
        '<span class="bg_palabra drag1">12 meses</span>',
        '<span class="bg_palabra drag1">24 horas</span>',
        '<span class="bg_palabra drag1">30 días</span>'
    ];
    pal1.sort(f_randomico);

    $(".textos").append(pal1);
    var pal2 = [
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p1im1"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p1cim11" ><h4>año</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p1im2"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p1cim12"><h4>mes</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p1im3"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p1cim13"><h4>semana</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p1im4"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p1cim14"><h4>día</h4></div>' +
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
        containment: "#p1act1",
        scroll: false,
    });
    $(".drop1").droppable({
        accept: ".drag1",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag1");
            $(ui.draggable).removeClass("bg_palabra");
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);

        }
    });

    var pal3 = ['<span class="bg_palabra drag2">1.º</span>',
        '<span class="bg_palabra drag2">2.º</span>',
        '<span class="bg_palabra drag2">3.º</span>',
        '<span class="bg_palabra drag2">4.º</span>',
        '<span class="bg_palabra drag2">5.º</span>',
        '<span class="bg_palabra drag2">6.º</span>',
        '<span class="bg_palabra drag2">7.º</span>',
        '<span class="bg_palabra drag2">8.º</span>',
        '<span class="bg_palabra drag2">9.º</span>',
        '<span class="bg_palabra drag2">10.º</span>',
        '<span class="bg_palabra drag2">11.º</span>',
        '<span class="bg_palabra drag2">12.º</span>'
    ];
    pal3.sort(f_randomico);

    $(".textos1").append(pal3);
    var pal4 = [
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop2 p2im1"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim11" ><h4>enero</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop2 p2im2"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim12"><h4>febrero</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop2 p2im3"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim13"><h4>marzo</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop2 p2im4"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim14"><h4>abril</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop2 p2im5"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim15"><h4>mayo</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop2 p2im6"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim16"><h4>junio</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop2 p2im7"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim17"><h4>julio</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop2 p2im8"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim18"><h4>agosto</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop2 p2im9"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim19"><h4>septiembre</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop2 p2im10"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim110"><h4>octubre</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop2 p2im11"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim111"><h4>noviembre</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop2 p2im12"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim112"><h4>diciembre</h4></div>' +
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
        containment: "#p2act1",
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
    bt_comprobar.addEventListener("click", preg3);
    function preg3() {
        cor = 0;
        var pre3a = $('#pre3a').val();
        if (!pre3a) {
            alert('Ingrese la calificación en la Pregunta 3.')
        } else {
            cor = cor + parseFloat(pre3a);
            inc = inc + (2 - parseFloat(pre3a));
            $('#pre3a').val(parseFloat(pre3a).toFixed(2));
            $('#pre3a').attr('disabled', 'true');
            f_comprobar();
        }

    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg3);
        var p1im1=$('.p1im1 span').text();
        var p1im2=$('.p1im2 span').text();
        var p1im3=$('.p1im3 span').text();
        var p1im4=$('.p1im4 span').text();
        var p1cont1=0;
        if (p1im1=='12 meses') {
            p1cont1++;
            f_ok($('.p1im1'));
        }else{
            p1cont1;
            f_no($('.p1im1'));
        }
        if (p1im2=='30 días') {
            p1cont1++;
            f_ok($('.p1im2'));
        }else{
            p1cont1;
            f_no($('.p1im2'));
        }
        if (p1im3=='7 días') {
            p1cont1++;
            f_ok($('.p1im3'));
        }else{
            p1cont1;
            f_no($('.p1im3'));
        }
        if (p1im4=='24 horas') {
            p1cont1++;
            f_ok($('.p1im4'));
        }else{
            p1cont1;
            f_no($('.p1im4'));
        }
        var result1 = (p1cont1 * 4) / 4;
        cor = cor + result1;
        inc = inc + (4 - result1);
        $('#pre1a').val(result1.toFixed(2));
        $('#pre1a').css('display', '');

        var p2im1=$('.p2im1 span').text();
        var p2im2=$('.p2im2 span').text();
        var p2im3=$('.p2im3 span').text();
        var p2im4=$('.p2im4 span').text();
        var p2im5=$('.p2im5 span').text();
        var p2im6=$('.p2im6 span').text();
        var p2im7=$('.p2im7 span').text();
        var p2im8=$('.p2im8 span').text();
        var p2im9=$('.p2im9 span').text();
        var p2im10=$('.p2im10 span').text();
        var p2im11=$('.p2im11 span').text();
        var p2im12=$('.p2im12 span').text();
        var p2cont1=0;
        if (p2im1=='1.º') {
            p2cont1++;
            f_ok($('.p2im1'));
        }else{
            p2cont1;
            f_no($('.p2im1'));
        }
        if (p2im2=='2.º') {
            p2cont1++;
            f_ok($('.p2im2'));
        }else{
            p2cont1;
            f_no($('.p2im2'));
        }
        if (p2im3=='3.º') {
            p2cont1++;
            f_ok($('.p2im3'));
        }else{
            p2cont1;
            f_no($('.p2im3'));
        }
        if (p2im4=='4.º') {
            p2cont1++;
            f_ok($('.p2im4'));
        }else{
            p2cont1;
            f_no($('.p2im4'));
        }
        if (p2im5=='5.º') {
            p2cont1++;
            f_ok($('.p2im5'));
        }else{
            p2cont1;
            f_no($('.p2im5'));
        }
        if (p2im6=='6.º') {
            p2cont1++;
            f_ok($('.p2im6'));
        }else{
            p2cont1;
            f_no($('.p2im6'));
        }
        if (p2im7=='7.º') {
            p2cont1++;
            f_ok($('.p2im7'));
        }else{
            p2cont1;
            f_no($('.p2im7'));
        }
        if (p2im8=='8.º') {
            p2cont1++;
            f_ok($('.p2im8'));
        }else{
            p2cont1;
            f_no($('.p2im8'));
        }
        if (p2im9=='9.º') {
            p2cont1++;
            f_ok($('.p2im9'));
        }else{
            p2cont1;
            f_no($('.p2im9'));
        }
        if (p2im10=='10.º') {
            p2cont1++;
            f_ok($('.p2im10'));
        }else{
            p2cont1;
            f_no($('.p2im10'));
        }
        if (p2im11=='11.º') {
            p2cont1++;
            f_ok($('.p2im11'));
        }else{
            p2cont1;
            f_no($('.p2im11'));
        }
        if (p2im12=='12.º') {
            p2cont1++;
            f_ok($('.p2im12'));
        }else{
            p2cont1;
            f_no($('.p2im12'));
        }
        var result2 = (p2cont1 * 4) / 12;
        cor = cor + result2;
        inc = inc + (4 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');
        Calculo_nota();
    }
}