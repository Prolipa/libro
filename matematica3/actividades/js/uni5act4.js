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
    var pal1 = ['<div class="drag3 bg_palabra" style="border-radius: 10px 0px 10px 0px; background: #E4EDBC; display: inline-block; padding: 10px;">947</div>',
        '<div class="drag3 bg_palabra" style="border-radius: 10px 0px 10px 0px; background: #E4EDBC; display: inline-block; padding: 10px;">199</div>',
        '<div class="drag3 bg_palabra" style="border-radius: 10px 0px 10px 0px; background: #E4EDBC; display: inline-block; padding: 10px;">643</div>',
        '<div class="drag3 bg_palabra" style="border-radius: 10px 0px 10px 0px; background: #E4EDBC; display: inline-block; padding: 10px;">313</div>'
    ];
    var pal2 = ['<div><b>515 + 128</b></div>',
        '<div><b>416 – 103</b></div>',
        '<div><b>842 + 105</b></div>',
        '<div><b>785 – 586</b></div>'
    ];
    pal1.sort(f_randomico);
    var p2vec1 = ['643', '313', '947', '199'];
    var p2aux2 = [];
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
        p2aux2.push(p2vec1[c1]);

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
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);

        }
    });

    var p2n1=(Math.floor(Math.random() * 300) + 100);
    var p2n2=(Math.floor(Math.random() * 300) + 100);
    if (p2n1>p2n2) {
        p2n1;
        p2n2;
    }else{
        var p2c1=p2n1;
        var p2c2=p2n2;
        p2n1=p2c2;
        p2n2=p2c1;
    }
    $('#p2im1').text(p2n1);
    $('#p2im2').text(p2n2);
    var p2vec1=p2n1.toString().split('');
    var p2vec2=p2n2.toString().split('');
    for (var i = 0; i < p2vec1.length; i++) {
        $('#nlrd'+i).val(p2vec1[i]);
        $('#nlrd'+i).attr('disabled','none');
        $('#nlrd1'+i).val(p2vec1[i]);
        $('#nlrd1'+i).attr('disabled','none');
    }
    for (var i = 0; i < p2vec1.length; i++) {
        $('#nlrd'+(i+3)).val(p2vec2[i]);
        $('#nlrd'+(i+3)).attr('disabled','none');
        $('#nlrd1'+(i+3)).val(p2vec2[i]);
        $('#nlrd1'+(i+3)).attr('disabled','none');
    }
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1cont1=0;
        for (var i = 0; i < p2aux2.length; i++) {
            var p1res1=$('.p1im'+(i+1)+' div').html();
            if (p1res1==p2aux2[i]) {
                p1cont1++;
                f_ok($('.p1im'+(i+1)));
            }else{
                p1cont1;
                f_no($('.p1im'+(i+1)));
            }
        }
        var result1 = (p1cont1 * 6) / 4;
        cor = cor + result1;
        inc = inc + (6 - result1);
        $('#pre1a').val(result1.toFixed(2));
        $('#pre1a').css('display', '');

        var p2dcon1=$('#p2dcon1').val();
        var p2dcon2=$('#p2dcon2').val();
        var p2cont1=0;
        if (p2dcon1==(p2n1+p2n2)) {
            p2cont1++;
            f_ok($('#p2dcon1'));
        }else{
            p2cont1;
            f_no($('#p2dcon1'));
        }
        if (p2dcon2==(p2n1-p2n2)) {
            p2cont1++;
            f_ok($('#p2dcon2'));
        }else{
            p2cont1;
            f_no($('#p2dcon2'));
        }
        var nlrd1=$('#nlrd6').val()+$('#nlrd7').val()+$('#nlrd8').val();
        var nlrd2=$('#nlrd16').val()+$('#nlrd17').val()+$('#nlrd18').val();
        if (nlrd1==(p2n1+p2n2)) {
            p2cont1++;
            f_ok($('#nlrd6'));
            f_ok($('#nlrd7'));
            f_ok($('#nlrd8'));
        }else{
            p2cont1;
            f_no($('#nlrd6'));
            f_no($('#nlrd7'));
            f_no($('#nlrd8'));
        }
        if (nlrd2==(p2n1-p2n2)) {
            p2cont1++;
            f_ok($('#nlrd16'));
            f_ok($('#nlrd17'));
            f_ok($('#nlrd18'));
        }else{
            p2cont1;
            f_no($('#nlrd16'));
            f_no($('#nlrd17'));
            f_no($('#nlrd18'));
        }
        var result2 = (p2cont1 * 4) / 4;
        cor = cor + result2;
        inc = inc + (4 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');
        Calculo_nota();
    }
}