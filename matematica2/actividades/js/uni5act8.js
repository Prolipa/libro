var n1 = 0,
    n2 = 0,
    sum_total = 0,
    sum_total2 = 0,
    sum_total3 = 0,
    sum_total4 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 15,
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
    var p1vec1=(Math.floor(Math.random() * 40) + 10);
    var p1vec2=(Math.floor(Math.random() * 40) + 10);
    $('#p1im1').html(p1vec1);
    $('#p1im2').html(p1vec2);
    $(".drag1").draggable({
        rever: "invalid",
        helper: "clone",
        containment: "#p3act1"
    });
    $(".drop1").droppable({
        accept: ".drag1",
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode: multiply;");
            })
            $(this).find(".drop1").draggable({ disabled: true });
            str = (ui.draggable.attr("id")); //capturamos los IDS
            str == 'c1' ? sum_total += 10 : sum_total += 1;
        }
    });
    $(".drop2").droppable({
        accept: ".drag1",
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode: multiply;");
            })
            $(this).find(".drop2").draggable({ disabled: true });
            str2 = (ui.draggable.attr("id")); //capturamos los IDS
            str2 == 'c1' ? sum_total2 += 10 : sum_total2 += 1;
        }
    });
    $(".drop3").droppable({
        accept: ".drag1",
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode: multiply;");
            })
            $(this).find(".drop3").draggable({ disabled: true });
            str3 = (ui.draggable.attr("id")); //capturamos los IDS
            str3 == 'c1' ? sum_total3 += 10 : sum_total3 += 1;
        }
    });
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1dcon1=$('#p1dcon1').val();
        var p1dcon2=$('#p1dcon2').val();
        if (p1dcon1==p1vec1) {
            cor++;
            f_ok($('#p1dcon1'));
        }else{
            inc++;
            f_no($('#p1dcon1'));
        }
        if (p1dcon2==p1vec2) {
            cor++;
            f_ok($('#p1dcon2'));
        }else{
            inc++;
            f_no($('#p1dcon2'));
        }
        var p1dcon4=$('#p1dcon4').val();
        var p1dcon5=$('#p1dcon5').val();
        if (p1dcon4==p1vec1) {
            cor++;
            f_ok($('#p1dcon4'));
        }else{
            inc++;
            f_no($('#p1dcon4'));
        }
        if (p1dcon5==p1vec2) {
            cor++;
            f_ok($('#p1dcon5'));
        }else{
            inc++;
            f_no($('#p1dcon5'));
        }
        var p1dcon6=$('#p1dcon6').val();
        if (p1dcon6==(p1vec2+p1vec1)) {
            cor++;
            f_ok($('#p1dcon6'));
        }else{
            inc++;
            f_no($('#p1dcon6'));
        }
        var nlrd1=[$('#nlrd1').val(),$('#nlrd2').val()];
        nlrd1=nlrd1.join('');
        var nlrd2=[$('#nlrd3').val(),$('#nlrd4').val()];
        nlrd2=nlrd2.join('');
        var nlrd3=[$('#nlrd5').val(),$('#nlrd6').val()];
        nlrd3=nlrd3.join('');
        if (nlrd1==p1vec1) {
            cor++;
            f_ok($('#nlrd1'));
            f_ok($('#nlrd2'));
        }else{
            inc++;
            f_no($('#nlrd1'));
            f_no($('#nlrd2'));
        }
        if (nlrd2==p1vec2) {
            cor++;
            f_ok($('#nlrd3'));
            f_ok($('#nlrd4'));
        }else{
            inc++;
            f_no($('#nlrd3'));
            f_no($('#nlrd4'));
        }
        if (nlrd3==(p1vec1+p1vec2)) {
            cor++;
            f_ok($('#nlrd5'));
            f_ok($('#nlrd6'));
        }else{
            inc++;
            f_no($('#nlrd5'));
            f_no($('#nlrd6'));
        }
        var p1dcon7=$('#p1dcon7').val();
        var p1dcon8=$('#p1dcon8').val();
        var p1dcon9=$('#p1dcon9').val();
        if (p1dcon7==p1vec1) {
            cor++;
            f_ok($('#p1dcon7'));
        }else{
            inc++;
            f_no($('#p1dcon7'));
        }
        if (p1dcon8==p1vec2) {
            cor++;
            f_ok($('#p1dcon8'));
        }else{
            inc++;
            f_no($('#p1dcon8'));
        }
        if (p1dcon9==(p1vec2+p1vec1)) {
            cor++;
            f_ok($('#p1dcon9'));
        }else{
            inc++;
            f_no($('#p1dcon9'));
        }
        if (sum_total == p1vec1) {
            cor++;
            f_ok($('#p3a1'));
        } else {
            inc++;
            f_no($('#p3a1'));
        }
        if (sum_total2 == p1vec2) {
            cor++;
            f_ok($('#p3a2'));
        } else {
            inc++;
            f_no($('#p3a2'));
        }
        if (sum_total3 == (p1vec1+p1vec2)) {
            cor++;
            f_ok($('#p3a3'));
        } else {
            inc++;
            f_no($('#p3a3'));
        }
        var p1dcon3=$('#p1dcon3').val().toLowerCase();
        if (p1dcon3=='suma' || p1dcon3=='adición') {
            cor++;
            f_ok($('#p1dcon3'));
        }else{
            inc++;
            f_no($('#p1dcon3'));
        }
        Calculo_nota();
    }
}