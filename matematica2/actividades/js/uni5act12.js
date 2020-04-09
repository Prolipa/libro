var n1 = 0,
    n2 = 0,
    sum_total = 0,
    sum_total2 = 0,
    sum_total3 = 0,
    sum_total4 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 14,
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
    var p1vec1=[];
    var myArray1 = [];
    for (var i = 40; i < 98; i++) {
        p1vec1.push(i);
        myArray1.push(i-40);
    }
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    
    var p1vec2=[];
    var myArray2 = [];
    for (var i = 10; i < 39; i++) {
        p1vec2.push(i);
        myArray2.push(i-10);
    }
    var i, j, k;
    for (i = myArray2.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray2[i - 1];
        myArray2[i - 1] = myArray2[j];
        myArray2[j] = k;
    }

    var p1vc1=[];
    //aleatorio literal 1
    for (var i = 1; i <= 1; i++) {
        var c = myArray1[i - 1];
        p1vc1.push(p1vec1[c]);
        var c1 = myArray2[i - 1];
        p1vc1.push(p1vec2[c1]);

    };
    var p1d1=p1vc1[0].toString().split('');
    var p1d2=p1vc1[1].toString().split('');
    if (p1d1[1]<p1d2[1]) {
        var p1c1=p1d1[1];
        var p1c2=p1d2[1];
        p1d1[1]=p1c2;
        p1d2[1]=p1c1;
        p1vc1[0]=p1d1.join('');
        p1vc1[1]=p1d2.join('');
    }
    for (var i = 0; i < p1vc1.length; i++) {
        $('#p1im'+(i+1)).html(p1vc1[i]);
    }
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
            if (str == 'c1') {
                sum_total += 10;
            }else if (str == 'c2') {
                sum_total += 1;
            }else if (str == 'c3') {
                sum_total2 += 10;
            }else if (str == 'c4') {
                sum_total2 += 1;
            }
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
            if (str3 == 'c1') {
                sum_total3 += 10;
            }else if (str3 == 'c2') {
                sum_total3 += 1;
            }else if (str3 == 'c3') {
                sum_total3 -= 10;
            }else if (str3 == 'c4') {
                sum_total3 -= 1;
            }
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
        if (p1dcon1==p1vc1[0]) {
            cor++;
            f_ok($('#p1dcon1'));
        }else{
            inc++;
            f_no($('#p1dcon1'));
        }
        if (p1dcon2==p1vc1[1]) {
            cor++;
            f_ok($('#p1dcon2'));
        }else{
            inc++;
            f_no($('#p1dcon2'));
        }
        var p1dcon4=$('#p1dcon4').val();
        var p1dcon5=$('#p1dcon5').val();
        if (p1dcon4==p1vc1[0]) {
            cor++;
            f_ok($('#p1dcon4'));
        }else{
            inc++;
            f_no($('#p1dcon4'));
        }
        if (p1dcon5==p1vc1[1]) {
            cor++;
            f_ok($('#p1dcon5'));
        }else{
            inc++;
            f_no($('#p1dcon5'));
        }
        var p1dcon6=$('#p1dcon6').val();
        if (p1dcon6==(p1vc1[0]-p1vc1[1])) {
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
        if (nlrd1==p1vc1[0]) {
            cor++;
            f_ok($('#nlrd1'));
            f_ok($('#nlrd2'));
        }else{
            inc++;
            f_no($('#nlrd1'));
            f_no($('#nlrd2'));
        }
        if (nlrd2==p1vc1[1]) {
            cor++;
            f_ok($('#nlrd3'));
            f_ok($('#nlrd4'));
        }else{
            inc++;
            f_no($('#nlrd3'));
            f_no($('#nlrd4'));
        }
        if (nlrd3==(p1vc1[0]-p1vc1[1])) {
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
        if (p1dcon7==p1vc1[0]) {
            cor++;
            f_ok($('#p1dcon7'));
        }else{
            inc++;
            f_no($('#p1dcon7'));
        }
        if (p1dcon8==p1vc1[1]) {
            cor++;
            f_ok($('#p1dcon8'));
        }else{
            inc++;
            f_no($('#p1dcon8'));
        }
        if (p1dcon9==(p1vc1[0]-p1vc1[1])) {
            cor++;
            f_ok($('#p1dcon9'));
        }else{
            inc++;
            f_no($('#p1dcon9'));
        }
        if ((sum_total+sum_total2)+'-'+ sum_total2 == p1vc1[0]+'-'+ p1vc1[1]) {
            cor++;
            f_ok($('#p3a1'));
        } else {
            inc++;
            f_no($('#p3a1'));
        }
        if (sum_total3 == (p1vc1[0]-p1vc1[1])) {
            cor++;
            f_ok($('#p3a2'));
        } else {
            inc++;
            f_no($('#p3a2'));
        }
        var p1dcon3=$('#p1dcon3').val().toLowerCase();
        if (p1dcon3=='resta' || p1dcon3=='sustracción') {
            cor++;
            f_ok($('#p1dcon3'));
        }else{
            inc++;
            f_no($('#p1dcon3'));
        }
        Calculo_nota();
    }
}