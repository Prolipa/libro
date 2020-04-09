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
document.getElementById('pre1a').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('pre1a').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('pre1a'), 2)
});
document.getElementById('pre6a').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('pre6a').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('pre6a'), 2)
});
document.getElementById('pre7a').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('pre7a').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('pre7a'), 2)
});
    

function f_iniciar() {
    var pal1 = ['<span class="bg_palabra drag1">2.º</span>',
        '<span class="bg_palabra drag1">7.º</span>',
        '<span class="bg_palabra drag1">4.º</span>',
        '<span class="bg_palabra drag1">10.º</span>',
        '<span class="bg_palabra drag1">8.º</span>',
        '<span class="bg_palabra drag1">1.º</span>',
        '<span class="bg_palabra drag1">9.º</span>',
        '<span class="bg_palabra drag1">3.º</span>',
        '<span class="bg_palabra drag1">5.º</span>',
        '<span class="bg_palabra drag1">6.º</span>'
    ];

    pal1.sort(f_randomico);

    $(".textos").append(pal1);
    var pal3 = [
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p2im1"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim11" ><h4>Primero</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p2im2"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim12"><h4>Segundo</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p2im3"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim13"><h4>Tercero</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p2im4"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim14"><h4>Cuarto</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p2im5"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim15"><h4>Quinto</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p2im6"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim16"><h4>Sexto</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p2im7"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim17"><h4>Séptimo</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p2im8"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim18"><h4>Octavo</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p2im9"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim19"><h4>Noveno</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p2im10"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim110"><h4>Décimo</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ];
    pal3.sort(f_randomico);
    $("#datos").html(pal3);
    $(".drag1").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: "#p2act1",
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

    $(".c_destino2").html('');
    n1 = (Math.floor(Math.random() * 80) + 10);
    $("#numero").html(n1);
    $("#numero").css('z-index', '9');
    n2 = (Math.floor(Math.random() * 80) + 10);
    $("#numero1").html(n2);
    $("#numero1").css('z-index', '9');
    $(".drag2").draggable({
        rever: "invalid",
        helper: "clone",
        containment: "#p3act1"
    });
    $(".drop2").droppable({
        accept: ".drag2",
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode: multiply;");
            })
            $(this).find(".drop2").draggable({ disabled: true });
            str = (ui.draggable.attr("id")); //capturamos los IDS
            str == 'b1' ? sum_total += 10 : sum_total += 1;
        }
    });
    $(".drop3").droppable({
        accept: ".drag2",
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode: multiply;");
            })
            $(this).find(".drop3").draggable({ disabled: true });
            str2 = (ui.draggable.attr("id")); //capturamos los IDS
            str2 == 'b1' ? sum_total2 += 10 : sum_total2 += 1;
        }
    });

    n3 = (Math.floor(Math.random() * 80) + 10);
    $("#numero2").html(n3);
    $("#numero2").css('z-index', '9');
    n4 = (Math.floor(Math.random() * 80) + 10);
    $("#numero3").html(n4);
    $("#numero3").css('z-index', '9');
    $(".drag3").draggable({
        rever: "invalid",
        helper: "clone",
        containment: "#p3act2"
    });
    $(".drop4").droppable({
        accept: ".drag3",
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode: multiply;");
            })
            $(this).find(".drop4").draggable({ disabled: true });
            str3 = (ui.draggable.attr("id")); //capturamos los IDS
            str3 == 'c1' ? sum_total3 += 10 : sum_total3 += 1;
        }
    });
    $(".drop5").droppable({
        accept: ".drag3",
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode: multiply;");
            })
            $(this).find(".drop5").draggable({ disabled: true });
            str4 = (ui.draggable.attr("id")); //capturamos los IDS
            str4 == 'c1' ? sum_total4 += 10 : sum_total4 += 1;
        }
    });

    var p4vec1=[(Math.floor(Math.random() * 80) + 10),(Math.floor(Math.random() * 80) + 10),(Math.floor(Math.random() * 80) + 10),(Math.floor(Math.random() * 80) + 10),(Math.floor(Math.random() * 80) + 10),(Math.floor(Math.random() * 80) + 10)];
    for (var i = 0; i < p4vec1.length; i++) {
      $('#p4im'+(i+1)).text(p4vec1[i]);
    }
    var p5vec1=[];
    var p5n1=(Math.floor(Math.random() * 50) + 10);
    var p5c1=p5n1.toString().split('');
    for (var i = 0; i < parseInt(p5c1[0]); i++) {
      p5vec1.push('<img src="img/i4_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">')
    }
    for (var i = 0; i < parseInt(p5c1[1]); i++) {
      p5vec1.push('<img src="img/i5_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">')
    }
    $('#p5im1').html(p5vec1);
    var p5vec2=[];
    var p5n2=(Math.floor(Math.random() * 50) + 10);
    var p5c2=p5n2.toString().split('');
    for (var i = 0; i < parseInt(p5c2[0]); i++) {
      p5vec2.push('<img src="img/i4_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">')
    }
    for (var i = 0; i < parseInt(p5c2[1]); i++) {
      p5vec2.push('<img src="img/i5_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">')
    }
    $('#p5im2').html(p5vec2);
    var p5vec3=[];
    var p5n3=(Math.floor(Math.random() * 50) + 10);
    var p5c3=p5n3.toString().split('');
    for (var i = 0; i < parseInt(p5c3[0]); i++) {
      p5vec3.push('<img src="img/i4_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">')
    }
    for (var i = 0; i < parseInt(p5c3[1]); i++) {
      p5vec3.push('<img src="img/i5_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">')
    }
    $('#p5im3').html(p5vec3);
    var p5vec4=[];
    var p5n4=(Math.floor(Math.random() * 50) + 10);
    var p5c4=p5n4.toString().split('');
    for (var i = 0; i < parseInt(p5c4[0]); i++) {
      p5vec4.push('<img src="img/i4_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">')
    }
    for (var i = 0; i < parseInt(p5c4[1]); i++) {
      p5vec4.push('<img src="img/i5_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">')
    }
    $('#p5im4').html(p5vec4);
    var p5vec5=[];
    var p5n5=(Math.floor(Math.random() * 50) + 10);
    var p5c5=p5n5.toString().split('');
    for (var i = 0; i < parseInt(p5c5[0]); i++) {
      p5vec5.push('<img src="img/i4_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">')
    }
    for (var i = 0; i < parseInt(p5c5[1]); i++) {
      p5vec5.push('<img src="img/i5_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">')
    }
    $('#p5im5').html(p5vec5);
    var p5vec6=[];
    var p5n6=(Math.floor(Math.random() * 50) + 10);
    var p5c6=p5n6.toString().split('');
    for (var i = 0; i < parseInt(p5c6[0]); i++) {
      p5vec6.push('<img src="img/i4_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">')
    }
    for (var i = 0; i < parseInt(p5c6[1]); i++) {
      p5vec6.push('<img src="img/i5_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">')
    }
    $('#p5im6').html(p5vec6);
    var p5res1=[];
    if (p5n1==p5n2) {
      p5res1.push('=');
    }else if (p5n1>p5n2){
      p5res1.push('>');
    }else if (p5n1<p5n2){
      p5res1.push('<');
    }
    if (p5n3==p5n4) {
      p5res1.push('=');
    }else if (p5n3>p5n4){
      p5res1.push('>');
    }else if (p5n3<p5n4){
      p5res1.push('<');
    }
    if (p5n5==p5n6) {
      p5res1.push('=');
    }else if (p5n5>p5n6){
      p5res1.push('>');
    }else if (p5n5<p5n6){
      p5res1.push('<');
    }
    bt_comprobar.addEventListener("click", preg1);
    function preg1() {
        cor = 0;
        var pre1a = $('#pre1a').val();
        if (!pre1a) {
            alert('Ingrese la calificación en la Pregunta 1.')
        } else {
            cor = cor + parseFloat(pre1a);
            inc = inc + (2 - parseFloat(pre1a));
            $('#pre1a').val(parseFloat(pre1a).toFixed(2));
            $('#pre1a').attr('disabled', 'true');
            preg6();
        }

    }
    function preg6() {
        var pre6a = $('#pre6a').val();
        if (!pre6a) {
            alert('Ingrese la calificación en la Pregunta 6.')
        } else {
            cor = cor + parseFloat(pre6a);
            inc = inc + (2 - parseFloat(pre6a));
            $('#pre6a').val(parseFloat(pre6a).toFixed(2));
            $('#pre6a').attr('disabled', 'true');
            preg7();
        }

    }
    function preg7() {
        var pre7a = $('#pre7a').val();
        if (!pre7a) {
            alert('Ingrese la calificación en la Pregunta 7.')
        } else {
            cor = cor + parseFloat(pre7a);
            inc = inc + (2 - parseFloat(pre7a));
            $('#pre7a').val(parseFloat(pre7a).toFixed(2));
            $('#pre7a').attr('disabled', 'true');
            f_comprobar();
        }

    }
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg1);
        var p2vec1 = ['1.º', '2.º', '3.º', '4.º', '5.º', '6.º', '7.º', '8.º', '9.º', '10.º'];
        var p2cont1 = 0;
        for (var i = 0; i < 10; i++) {
            var p2r1 = $('.p2im' + (i + 1) + ' span').text();
            if (p2r1 == p2vec1[i]) {
                p2cont1++;
                f_ok($('.p2im' + (i + 1)));
            } else {
                p2cont1;
                f_no($('.p2im' + (i + 1)));
            }
        }
        var result2 = (p2cont1 * 1) / 10;
        cor = cor + result2;
        inc = inc + (1 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');

        var p3cont1=0;
        if (sum_total == n1) {
            p3cont1++;
            f_ok($('#p3a1'));
        } else {
            p3cont1;
            f_no($('#p3a1'));
        }
        if (sum_total2 == n2) {
            p3cont1++;
            f_ok($('#p3a2'));
        } else {
            p3cont1;
            f_no($('#p3a2'));
        }
        if (sum_total3 == n3) {
            p3cont1++;
            f_ok($('#p3a3'));
        } else {
            p3cont1;
            f_no($('#p3a3'));
        }
        if (sum_total4 == n4) {
            p3cont1++;
            f_ok($('#p3a4'));
        } else {
            p3cont1;
            f_no($('#p3a4'));
        }
        var result3 = (p3cont1 * 1) / 4;
        cor = cor + result3;
        inc = inc + (1 - result3);
        $('#pre3a').val(result3.toFixed(2));
        $('#pre3a').css('display', '');
        
        var p4dcon1=$('#p4dcon1').val();
        var p4dcon2=$('#p4dcon2').val();
        var p4dcon3=$('#p4dcon3').val();
        var p4dcon4=$('#p4dcon4').val();
        var p4dcon5=$('#p4dcon5').val();
        var p4dcon6=$('#p4dcon6').val();
        var p4dcon7=$('#p4dcon7').val();
        var p4dcon8=$('#p4dcon8').val();
        var p4dcon9=$('#p4dcon9').val();
        var p4dcon10=$('#p4dcon10').val();
        var p4dcon11=$('#p4dcon11').val();
        var p4dcon12=$('#p4dcon12').val();
        var p4cont1=0;
        var p4vc1=p4vec1[0].toString().split('');
        var p4vc2=p4vec1[1].toString().split('');
        var p4vc3=p4vec1[2].toString().split('');
        var p4vc4=p4vec1[3].toString().split('');
        var p4vc5=p4vec1[4].toString().split('');
        var p4vc6=p4vec1[5].toString().split('');
        if (p4dcon1==p4vc1[0]+'0') {
          p4cont1++;
          f_ok($('#p4dcon1'));
        }else{
          p4cont1;
          f_no($('#p4dcon1'));
        }
        if (p4dcon2==p4vc1[1]) {
          p4cont1++;
          f_ok($('#p4dcon2'));
        }else{
          p4cont1;
          f_no($('#p4dcon2'));
        }
        if (p4dcon3==p4vc2[0]+'0') {
          p4cont1++;
          f_ok($('#p4dcon3'));
        }else{
          p4cont1;
          f_no($('#p4dcon3'));
        }
        if (p4dcon4==p4vc2[1]) {
          p4cont1++;
          f_ok($('#p4dcon4'));
        }else{
          p4cont1;
          f_no($('#p4dcon4'));
        }
        if (p4dcon5==p4vc3[0]+'0') {
          p4cont1++;
          f_ok($('#p4dcon5'));
        }else{
          p4cont1;
          f_no($('#p4dcon5'));
        }
        if (p4dcon6==p4vc3[1]) {
          p4cont1++;
          f_ok($('#p4dcon6'));
        }else{
          p4cont1;
          f_no($('#p4dcon6'));
        }
        if (p4dcon7==p4vc4[0]+'0') {
          p4cont1++;
          f_ok($('#p4dcon7'));
        }else{
          p4cont1;
          f_no($('#p4dcon7'));
        }
        if (p4dcon8==p4vc4[1]) {
          p4cont1++;
          f_ok($('#p4dcon8'));
        }else{
          p4cont1;
          f_no($('#p4dcon8'));
        }
        if (p4dcon9==p4vc5[0]+'0') {
          p4cont1++;
          f_ok($('#p4dcon9'));
        }else{
          p4cont1;
          f_no($('#p4dcon9'));
        }
        if (p4dcon10==p4vc5[1]) {
          p4cont1++;
          f_ok($('#p4dcon10'));
        }else{
          p4cont1;
          f_no($('#p4dcon10'));
        }
        if (p4dcon11==p4vc6[0]+'0') {
          p4cont1++;
          f_ok($('#p4dcon11'));
        }else{
          p4cont1;
          f_no($('#p4dcon11'));
        }
        if (p4dcon12==p4vc6[1]) {
          p4cont1++;
          f_ok($('#p4dcon12'));
        }else{
          p4cont1;
          f_no($('#p4dcon12'));
        }
        var result4 = (p4cont1 * 1) / 12;
        cor = cor + result4;
        inc = inc + (1 - result4);
        $('#pre4a').val(result4.toFixed(2));
        $('#pre4a').css('display', '');

        var p5dcon1=$('#p5dcon1').val();
        var p5dcon2=$('#p5dcon2').val();
        var p5dcon3=$('#p5dcon3').val();
        var p5dcon4=$('#p5dcon4').val();
        var p5dcon5=$('#p5dcon5').val();
        var p5dcon6=$('#p5dcon6').val();
        var p5cont1=0;
        if (p5dcon1==p5n1) {
          p5cont1++;
          f_ok($('#p5dcon1'));
        }else{
          p5cont1;
          f_no($('#p5dcon1'));
        }
        if (p5dcon2==p5n2) {
          p5cont1++;
          f_ok($('#p5dcon2'));
        }else{
          p5cont1;
          f_no($('#p5dcon2'));
        }
        if (p5dcon3==p5n3) {
          p5cont1++;
          f_ok($('#p5dcon3'));
        }else{
          p5cont1;
          f_no($('#p5dcon3'));
        }
        if (p5dcon4==p5n4) {
          p5cont1++;
          f_ok($('#p5dcon4'));
        }else{
          p5cont1;
          f_no($('#p5dcon4'));
        }
        if (p5dcon5==p5n5) {
          p5cont1++;
          f_ok($('#p5dcon5'));
        }else{
          p5cont1;
          f_no($('#p5dcon5'));
        }
        if (p5dcon6==p5n6) {
          p5cont1++;
          f_ok($('#p5dcon6'));
        }else{
          p5cont1;
          f_no($('#p5dcon6'));
        }
        for (var i = 0; i < p5res1.length; i++) {
          var p5r1=$('#p5sel'+(i+1)).val();
          if (p5r1==p5res1[i]) {
            p5cont1++;
            f_ok($('#p5sel'+(i+1)));
          }else{
            p5cont1;
            f_no($('#p5sel'+(i+1)));
          }
        }
        var result5 = (p5cont1 * 1) / 9;
        cor = cor + result5;
        inc = inc + (1 - result5);
        $('#pre5a').val(result5.toFixed(2));
        $('#pre5a').css('display', '');
        Calculo_nota();
    }
}