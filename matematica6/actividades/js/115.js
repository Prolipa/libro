var tpre1 = 0;
var titulos = "aplico";


var pal1 = ['<img class="img-responsive drag3 c1" src="img/i1_p145_act1.jpg" alt="1" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c2" alt="2" src="img/i2_p145_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c2" alt="3" src="img/i3_p145_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c3" alt="4" src="img/i4_p145_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">'
];


var pal10 = ['<img class="img-responsive drag3 c1" src="img/i5_p145_act1.jpg" alt="1" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c2" alt="2" src="img/i6_p145_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c2" alt="3" src="img/i7_p145_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c3" alt="4" src="img/i8_p145_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">'
];
var pal2 = [
    '<div><img src="img/i9_p145_act1.jpg"></div>',
    '<div><img src="img/i10_p145_act1.jpg"></div>',
    '<div><img src="img/i11_p145_act1.jpg"></div>',
    '<div><img src="img/i12_p145_act1.jpg"></div>'
];

pal1.sort(f_randomico);
pal10.sort(f_randomico);
var p2vec1 = ['3', '1', '4', '2'];
var p2vec10 = ['3', '4', '1', '2'];
var p2aux2 = [];
var p2aux20 = [];
$(".textos").append(pal1);
$(".textos1").append(pal10);
var myArray2 = ['0', '1', '2', '3'];
var i, j, k;
for (i = myArray2.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = myArray2[i - 1];
    myArray2[i - 1] = myArray2[j];
    myArray2[j] = k;
}
//aleatorio literal 1
for (var i = 1; i <= 5; i++) {
    var c1 = myArray2[i - 1];
    $(".p2cim1" + i).html(pal2[c1]);
    p2aux2.push(p2vec1[c1]);
    p2aux20.push(p2vec10[c1]);

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
        ui.draggable.attr("style", "mix-blend-mode:multiply;");
        $(this).append(ui.draggable);

    }
});

function pregunta1() {
    var p2im1 = $('.p2im1 > img').attr('alt');
    var p2cont1 = 0;
    if (p2im1 == p2aux2[0]) {
        p2cont1++;
        f_ok($('.p2im1'));
    } else {
        f_no($('.p2im1'));
    }
    var p2im2 = $('.p2im2 > img').attr('alt');
    if (p2im2 == p2aux2[1]) {
        p2cont1++;
        f_ok($('.p2im2'));
    } else {
        f_no($('.p2im2'));
    }
    var p2im3 = $('.p2im3 > img').attr('alt');
    if (p2im3 == p2aux2[2]) {
        p2cont1++;
        f_ok($('.p2im3'));
    } else {
        f_no($('.p2im3'));
    }

    var p2im4 = $('.p2im4 > img').attr('alt');
    if (p2im4 == p2aux2[3]) {
        p2cont1++;
        f_ok($('.p2im4'));
    } else {
        f_no($('.p2im4'));
    }
    var p2im21 = $('.p2im21 > img').attr('alt');
    if (p2im21 == p2aux20[0]) {
        p2cont1++;
        f_ok($('.p2im21'));
    } else {
        f_no($('.p2im21'));
    }
    var p2im22 = $('.p2im22 > img').attr('alt');
    if (p2im22 == p2aux20[1]) {
        p2cont1++;
        f_ok($('.p2im22'));
    } else {
        f_no($('.p2im22'));
    }

    var p2im23 = $('.p2im23 > img').attr('alt');
    if (p2im23 == p2aux20[2]) {
        p2cont1++;
        f_ok($('.p2im23'));
    } else {
        f_no($('.p2im23'));
    }

    var p2im24 = $('.p2im24 > img').attr('alt');
    if (p2im24 == p2aux20[3]) {
        p2cont1++;
        f_ok($('.p2im24'));
    } else {
        f_no($('.p2im24'));
    }

    var total = ((p2cont1 * 10) / 8)
    tpre1 = total;
}
// #endregion



// #region Calculo Nota Final
function NotaFinal() {

    pregunta1();
    var Nf =
        parseFloat(tpre1);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal + "/10");
    document.getElementById("Calificar").disabled = true;
}

// #endregion