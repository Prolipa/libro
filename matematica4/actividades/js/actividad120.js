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
var p2color1 = 0;
$('#color1').click(function() {
    p2color1 = $('#color1').css("background-color");
    $('#cols1').css("background-color", p2color1);

});
$('#color2').click(function() {
    p2color1 = $('#color2').css("background-color");
    $('#cols1').css("background-color", p2color1);

});
$('#color3').click(function() {
    p2color1 = $('#color3').css("background-color");
    $('#cols1').css("background-color", p2color1);

});
$('#color4').click(function() {
    p2color1 = $('#color4').css("background-color");
    $('#cols1').css("background-color", p2color1);

});
$('#color5').click(function() {
    p2color1 = $('#color5').css("background-color");
    $('#cols1').css("background-color", p2color1);

});

$('.pint1').click(function() {
    if (p2color1 != 0) {
        $('.pint1').css("background-color", p2color1);
        $('.pint1').css("color", 'black');
    }

});
$('.pint2').click(function() {
    if (p2color1 != 0) {
        $('.pint2').css("background-color", p2color1);
        $('.pint2').css("color", 'black');
    }

});
$('.pint3').click(function() {
    if (p2color1 != 0) {
        $('.pint3').css("color", 'black');
        $('.pint3').css("background-color", p2color1);
    }

});
$('.pint4').click(function() {
    if (p2color1 != 0) {
        $('.pint4').css("color", 'black');
        $('.pint4').css("background-color", p2color1);
    }

});
$('.pint11').click(function() {
    if (p2color1 != 0) {
        $('.pint11').css("color", 'black');
        $('.pint11').css("background-color", p2color1);
    }

});
$('.pint12').click(function() {
    if (p2color1 != 0) {
        $('.pint12').css("color", 'black');
        $('.pint12').css("background-color", p2color1);
    }

});

$('.pint13').click(function() {
    if (p2color1 != 0) {
        $('.pint13').css("color", 'black');
        $('.pint13').css("background-color", p2color1);
    }

});
$('.pint14').click(function() {
    if (p2color1 != 0) {
        $('.pint14').css("color", 'black');
        $('.pint14').css("background-color", p2color1);
    }

});

function f_iniciar() {
    var p1vec1 = [parseInt((Math.random() * 8) + 2)];
    for (var i = 0; i < 1; i++) {
        var p1r1 = parseInt((Math.random() * 8) + 2);
        if (p1r1 != p1vec1[i]) {
            p1vec1.push(p1r1);
        } else {
            i--;
        }
    }
    var p1aux1 = [p1vec1[0], p1vec1[1]];
    var p1aux2 = [p1vec1[0], p1vec1[1]];
    var p1vec2 = [];
    var p1vec3 = [];
    for (var i = 0; i < p1vec1[0]; i++) {
        p1vec2.push('<tr id="p1cim' + (i + 1) + '"></tr>');
    }
    for (var i = 0; i < p1vec1[1]; i++) {
        p1vec3.push('<td><img src="img/i1_p152_act120.jpg" class="img-responsive" style="display: inline-block;"><td>');
    }
    $('#p1im1').html(p1vec2);
    for (var i = 0; i < p1vec1[0]; i++) {
        $('#p1cim' + (i + 1)).html(p1vec3);
    }
    var p2vec1 = [parseInt((Math.random() * 8) + 2)];
    for (var i = 0; i < 1; i++) {
        var p1r2 = parseInt((Math.random() * 8) + 2);
        if (p1r2 != p2vec1[i]) {
            p2vec1.push(p1r2);
        } else {
            i--;
        }
    }
    var p2aux1 = [p2vec1[0], p2vec1[1]];
    var p2aux2 = [p2vec1[0], p2vec1[1]];
    var p2vec2 = [];
    var p2vec3 = [];
    for (var i = 0; i < p2vec1[0]; i++) {
        p2vec2.push('<tr id="p2cim' + (i + 1) + '"></tr>');
    }
    for (var i = 0; i < p2vec1[1]; i++) {
        p2vec3.push('<td><img src="img/i2_p152_act120.jpg" class="img-responsive" style="display: inline-block;"><td>');
    }
    $('#p1im2').html(p2vec2);
    for (var i = 0; i < p2vec1[0]; i++) {
        $('#p2cim' + (i + 1)).html(p2vec3);
    }


    var p2vc1 = [parseInt((Math.random() * 20) + 10), parseInt((Math.random() * 9) + 2), parseInt((Math.random() * 59) + 21), parseInt((Math.random() * 400) + 100), parseInt((Math.random() * 30) + 10), parseInt((Math.random() * 60) + 10)];
    var p2vc2 = [parseInt((Math.random() * 8) + 2), parseInt((Math.random() * 39) + 11), parseInt((Math.random() * 19) + 2), parseInt((Math.random() * 8) + 2), parseInt((Math.random() * 8) + 2), parseInt((Math.random() * 9) + 70)];
    for (var i = 0; i < 6; i++) {
        $('#p1' + (i) + 'i1').html(p2vc1[i]);
        $('#p1' + (i) + 'ci1').html(p2vc2[i]);
    }
    $('#p1i2').html(p2vc2[0]);
    $('#p1ci2').html(p2vc1[0]);

    var p3vec1 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var myArray1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    var p3vec2 = [];
    //aleatorio literal 1
    for (var i = 1; i <= 3; i++) {
        var c = myArray1[i - 1];
        p3vec2.push(p3vec1[c]);
        $('#p3im' + (i)).html(p3vec1[c]);
        $('#p3im' + (i + 3)).html(p3vec1[c]);
    };
    var myArray2 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
    var i, j, k;
    for (i = myArray2.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray2[i - 1];
        myArray2[i - 1] = myArray2[j];
        myArray2[j] = k;
    }
    var p31vec2 = [];
    //aleatorio literal 1
    for (var i = 1; i <= 3; i++) {
        var c1 = myArray2[i - 1];
        p31vec2.push(p3vec1[c1]);
        $('#p31im' + (i)).html(p3vec1[c1]);
        $('#p31im' + (i + 3)).html(p3vec1[c1]);
    };
    var myArray2 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
    var i, j, k;
    for (i = myArray2.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray2[i - 1];
        myArray2[i - 1] = myArray2[j];
        myArray2[j] = k;
    }
    var p32vec2 = [];
    //aleatorio literal 1
    for (var i = 1; i <= 3; i++) {
        var c2 = myArray2[i - 1];
        p32vec2.push(p3vec1[c2]);
        $('#p32im' + (i)).html(p3vec1[c2]);
        $('#p32im' + (i + 3)).html(p3vec1[c2]);
    };


    var p4vec1 = ['<table class="table">' +
        '<tr align="center">' +
        '<td><b style="color: #005CA4;" id="p40im6"></b></td>' +
        '<td><span id="p4im1"></span></td>' +
        '<td><b>x</b></td>' +
        '<td><span id="p4im2"></span></td>' +
        '<td><b>x</b></td>' +
        '<td><input type="text" style="text-align:center; width: 40px; border: 2px solid #8DB5E0; border-radius: 5px;" onkeypress="return soloNumeros(event)" id="p4dcon1"></td>' +
        '<td><b>=</b></td>' +
        '<td><input type="text" style="text-align:center; width: 40px; border: 2px solid #8DB5E0; border-radius: 5px;" onkeypress="return soloNumeros(event)" id="p4dcon2"></td>' +
        '<td><b>x</b></td>' +
        '<td><span id="p4im3"></span></td>' +
        '<td><b>x</b></td>' +
        '<td><span id="p4im4"></span></td>' +
        '<td><b>=</b></td>' +
        '<td><span id="p4im5"></span></td>' +
        '</tr>' +
        '</table>',
        '<table class="table">' +
        '<tr align="center">' +
        '<td><b style="color: #005CA4;" id="p41im6"></b></td>' +
        '<td><b>(</b></td>' +
        '<td><input type="text" style="text-align:center; width: 40px; border: 2px solid #8DB5E0; border-radius: 5px;" onkeypress="return soloNumeros(event)" id="p41dcon1"></td>' +
        '<td><b>x</b></td>' +
        '<td><span id="p41im1"></span></td>' +
        '<td><b>)</b></td>' +
        '<td><b>x</b></td>' +
        '<td><span id="p41im2"></span></td>' +
        '<td><b>=</b></td>' +
        '<td><span id="p41im3"></span></td>' +
        '<td><b>x</b></td>' +
        '<td><b>(</b></td>' +
        '<td><span id="p41im4"></span></td>' +
        '<td><b>x</b></td>' +
        '<td><input type="text" style="text-align:center; width: 40px; border: 2px solid #8DB5E0; border-radius: 5px;" onkeypress="return soloNumeros(event)" id="p41dcon2"></td>' +
        '<td><b>)</b></td>' +
        '<td><b>=</b></td>' +
        '<td><span id="p41im5"></span></td>' +
        '</tr>' +
        '</table>',
        '<table class="table">' +
        '<tr align="center">' +
        '<td><b style="color: #005CA4;" id="p42im6"></b></td>' +
        '<td><b>(</b></td>' +
        '<td><span id="p42im1"></span></td>' +
        '<td><b>x</b></td>' +
        '<td><span id="p42im2"></span></td>' +
        '<td><b>)</b></td>' +
        '<td><b>x</b></td>' +
        '<td><input type="text" style="text-align:center; width: 40px; border: 2px solid #8DB5E0; border-radius: 5px;" onkeypress="return soloNumeros(event)" id="p42dcon1"></td>' +
        '<td><b>=</b></td>' +
        '<td><span id="p42im3"></span></td>' +
        '<td><b>x</b></td>' +
        '<td><b>(</b></td>' +
        '<td><input type="text" style="text-align:center; width: 40px; border: 2px solid #8DB5E0; border-radius: 5px;" onkeypress="return soloNumeros(event)" id="p42dcon2"></td>' +
        '<td><b>x</b></td>' +
        '<td><span id="p42im4"></span></td>' +
        '<td><b>)</b></td>' +
        '<td><b>=</b></td>' +
        '<td><span id="p42im5"></span></td>' +
        '</tr>' +
        '</table>',
        '<table class="table">' +
        '<tr align="center">' +
        '<td><b style="color: #005CA4;" id="p43im6"></b></td>' +
        '<td><span id="p43im1"></span></td>' +
        '<td><b>x</b></td>' +
        '<td><span id="p43im2"></span></td>' +
        '<td><b>x</b></td>' +
        '<td><input type="text" style="text-align:center; width: 40px; border: 2px solid #8DB5E0; border-radius: 5px;" onkeypress="return soloNumeros(event)" id="p43dcon1"></td>' +
        '<td><b>=</b></td>' +
        '<td><span id="p43im3"></span></td>' +
        '<td><b>x</b></td>' +
        '<td><input type="text" style="text-align:center; width: 40px; border: 2px solid #8DB5E0; border-radius: 5px;" onkeypress="return soloNumeros(event)" id="p43dcon2"></td>' +
        '<td><b>x</b></td>' +
        '<td><span id="p43im4"></span></td>' +
        '<td><b>=</b></td>' +
        '<td><span id="p43im5"></span></td>' +
        '</tr>' +
        '</table>'
    ]
    var p4vec2 = ['Propiedad conmutativa', 'Propiedad asociativa', 'Propiedad asociativa', 'Propiedad conmutativa'];
    var p4vec4 = ['a)', 'b)', 'c)', 'd)'];
    var myArray3 = ['0', '1', '2', '3'];
    var i, j, k;
    for (i = myArray3.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray3[i - 1];
        myArray3[i - 1] = myArray3[j];
        myArray3[j] = k;
    }
    var p4vec3 = [];
    //aleatorio literal 1
    for (var i = 1; i <= 4; i++) {
        var c3 = myArray3[i - 1];
        $('#p4cim' + (i)).html(p4vec1[c3]);
        p4vec3.push(p4vec2[c3]);
        $('#p4' + c3 + 'im6').html('<span style="color: #005CA4">' + p4vec4[(i - 1)] + '</span>');
    };
    var p4vec5 = [];
    for (var i = 0; i < 12; i++) {
        p4vec5.push(parseInt((Math.random() * 9) + 2));
    }
    $('#p4im1').html(p4vec5[0]);
    $('#p4im2').html(p4vec5[1]);
    $('#p4im3').html(p4vec5[0]);
    $('#p4im4').html(p4vec5[1]);
    $('#p4im5').html((p4vec5[1] * p4vec5[0] * p4vec5[2]));

    $('#p41im1').html(p4vec5[4]);
    $('#p41im2').html(p4vec5[5]);
    $('#p41im3').html(p4vec5[3]);
    $('#p41im4').html(p4vec5[4]);
    $('#p41im5').html((p4vec5[3] * p4vec5[4] * p4vec5[5]));

    $('#p42im1').html(p4vec5[6]);
    $('#p42im2').html(p4vec5[7]);
    $('#p42im3').html(p4vec5[6]);
    $('#p42im4').html(p4vec5[8]);
    $('#p42im5').html((p4vec5[6] * p4vec5[7] * p4vec5[8]));

    $('#p43im1').html(p4vec5[9]);
    $('#p43im2').html(p4vec5[10]);
    $('#p43im3').html(p4vec5[11]);
    $('#p43im4').html(p4vec5[10]);
    $('#p43im5').html((p4vec5[9] * p4vec5[10] * p4vec5[11]));

    $(".drag1").draggable({
        rever: "invalid",
        helper: "clone",
        containment: "#p4c1",
    });
    $(".drop1").droppable({
        accept: '.drag1',
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "");
                $(this).removeClass("drag1");
                $(this).removeClass("bg_palabra");
            })
        }
    });


    var p5vec1 = ['<div class="pint1" align="center" style="border: 2px solid #8EC3DC; border-radius: 10px; padding: 10px; margin: 8px; max-width: 200px; font-size: 20px;"> <table class="table-responsive" id="1">' +
        '<tr align="center">' +
        '<td>4</td>' +
        '<td>x</td>' +
        '<td>3</td>' +
        '<td>x</td>' +
        '<td>5</td>' +
        '</tr>' +
        '</table></div>',
        '<div class="pint2" align="center" style="border: 2px solid #8EC3DC; border-radius: 10px; padding: 10px; margin: 8px; max-width: 200px; font-size: 20px;"><table class="table-responsive" id="2">' +
        '<tr align="center">' +
        '<td>8</td>' +
        '<td>x</td>' +
        '<td>9</td>' +
        '<td>x</td>' +
        '<td>10</td>' +
        '</tr>' +
        '</table></div>',
        '<div class="pint3" align="center" style="border: 2px solid #8EC3DC; border-radius: 10px; padding: 10px; margin: 8px; max-width: 200px; font-size: 20px;"><table class="table-responsive" id="3">' +
        '<tr align="center">' +
        '<td>2</td>' +
        '<td>x</td>' +
        '<td>20</td>' +
        '<td>x</td>' +
        '<td>3</td>' +
        '</tr>' +
        '</table></div>',
        '<div class="pint4" align="center" style="border: 2px solid #8EC3DC; border-radius: 10px; padding: 10px; margin: 8px; max-width: 200px; font-size: 20px;"><table class="table-responsive" id="4">' +
        '<tr align="center">' +
        '<td>6</td>' +
        '<td>x</td>' +
        '<td>1</td>' +
        '<td>x</td>' +
        '<td>50</td>' +
        '</tr>' +
        '</table></div>'
    ];
    var p5vec2 = ['<div class="pint11" align="center" style="border: 2px solid #91007E; border-radius: 10px; padding: 10px; margin: 8px; max-width: 200px; font-size: 20px;"><table class="table-responsive" id="3">' +
        '<tr align="center">' +
        '<td>3</td>' +
        '<td>x</td>' +
        '<td>2</td>' +
        '<td>x</td>' +
        '<td>20</td>' +
        '</tr>' +
        '</table></div>',
        '<div class="pint12" align="center" style="border: 2px solid #91007E; border-radius: 10px; padding: 10px; margin: 8px; max-width: 200px; font-size: 20px;"><table class="table-responsive" id="4">' +
        '<tr align="center">' +
        '<td>50</td>' +
        '<td>x</td>' +
        '<td>6</td>' +
        '<td>x</td>' +
        '<td>1</td>' +
        '</tr>' +
        '</table></div>',
        '<div class="pint13" align="center" style="border: 2px solid #91007E; border-radius: 10px; padding: 10px; margin: 8px; max-width: 200px; font-size: 20px;"><table class="table-responsive" id="1">' +
        '<tr align="center">' +
        '<td>5</td>' +
        '<td>x</td>' +
        '<td>4</td>' +
        '<td>x</td>' +
        '<td>3</td>' +
        '</tr>' +
        '</table></div>',
        '<div class="pint14" align="center" style="border: 2px solid #91007E; border-radius: 10px; padding: 10px; margin: 8px; max-width: 200px; font-size: 20px;"><table class="table-responsive" id="2">' +
        '<tr align="center">' +
        '<td>9</td>' +
        '<td>x</td>' +
        '<td>8</td>' +
        '<td>x</td>' +
        '<td>10</td>' +
        '</tr>' +
        '</table></div>'
    ];
    p5vec1.sort(f_randomico);
    p5vec2.sort(f_randomico);
    $('#p5im1').html(p5vec1);
    $('#p5im2').html(p5vec2);


    var p6vec1 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var myArray4 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
    var i, j, k;
    for (i = myArray4.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray4[i - 1];
        myArray4[i - 1] = myArray4[j];
        myArray4[j] = k;
    }
    var p6vec2 = [];
    //aleatorio literal 1
    for (var i = 1; i <= 3; i++) {
        var c4 = myArray4[i - 1];
        p6vec2.push(p6vec1[c4]);
        $('#p6im' + i).html(p6vec2[i - 1]);
    };
    $('#p6im4').html((p6vec2[0] * p6vec2[1] * p6vec2[2]));
    var i, j, k;
    for (i = myArray4.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray4[i - 1];
        myArray4[i - 1] = myArray4[j];
        myArray4[j] = k;
    }
    var p6vec3 = [];
    //aleatorio literal 1
    for (var i = 1; i <= 3; i++) {
        var c5 = myArray4[i - 1];
        p6vec3.push(p6vec1[c5]);
        $('#p61im' + i).html(p6vec3[i - 1]);
    };
    $('#p61im4').html((p6vec3[0] * p6vec3[1] * p6vec3[2]));
    var i, j, k;
    for (i = myArray4.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray4[i - 1];
        myArray4[i - 1] = myArray4[j];
        myArray4[j] = k;
    }
    var p6vec4 = [];
    //aleatorio literal 1
    for (var i = 1; i <= 3; i++) {
        var c6 = myArray4[i - 1];
        p6vec4.push(p6vec1[c6]);
        $('#p62im' + i).html(p6vec4[i - 1]);
    };
    $('#p62im4').html((p6vec4[0] * p6vec4[1] * p6vec4[2]));
    var i, j, k;
    for (i = myArray4.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray4[i - 1];
        myArray4[i - 1] = myArray4[j];
        myArray4[j] = k;
    }
    var p6vec5 = [];
    //aleatorio literal 1
    for (var i = 1; i <= 3; i++) {
        var c5 = myArray4[i - 1];
        p6vec5.push(p6vec1[c5]);
        $('#p63im' + i).html(p6vec5[i - 1]);
    };
    $('#p63im4').html((p6vec5[0] * p6vec5[1] * p6vec5[2]));

    var p6aux1 = [];
    p6aux1.push((p6vec2[0].toString()) + (p6vec2[1].toString()) + (p6vec2[2].toString()) + (p6vec2[0] * p6vec2[1] * p6vec2[2]).toString());
    p6aux1.push((p6vec2[0].toString()) + (p6vec2[2].toString()) + (p6vec2[1].toString()) + (p6vec2[0] * p6vec2[1] * p6vec2[2]).toString());
    p6aux1.push((p6vec2[1].toString()) + (p6vec2[0].toString()) + (p6vec2[2].toString()) + (p6vec2[0] * p6vec2[1] * p6vec2[2]).toString());
    p6aux1.push((p6vec2[1].toString()) + (p6vec2[2].toString()) + (p6vec2[0].toString()) + (p6vec2[0] * p6vec2[1] * p6vec2[2]).toString());
    p6aux1.push((p6vec2[2].toString()) + (p6vec2[1].toString()) + (p6vec2[0].toString()) + (p6vec2[0] * p6vec2[1] * p6vec2[2]).toString());
    p6aux1.push((p6vec2[2].toString()) + (p6vec2[0].toString()) + (p6vec2[1].toString()) + (p6vec2[0] * p6vec2[1] * p6vec2[2]).toString());


    var p6aux2 = [];
    p6aux2.push((p6vec3[0].toString()) + (p6vec3[1].toString()) + (p6vec3[2].toString()) + (p6vec3[0] * p6vec3[1] * p6vec3[2]).toString());
    p6aux2.push((p6vec3[0].toString()) + (p6vec3[2].toString()) + (p6vec3[1].toString()) + (p6vec3[0] * p6vec3[1] * p6vec3[2]).toString());
    p6aux2.push((p6vec3[1].toString()) + (p6vec3[0].toString()) + (p6vec3[2].toString()) + (p6vec3[0] * p6vec3[1] * p6vec3[2]).toString());
    p6aux2.push((p6vec3[1].toString()) + (p6vec3[2].toString()) + (p6vec3[0].toString()) + (p6vec3[0] * p6vec3[1] * p6vec3[2]).toString());
    p6aux2.push((p6vec3[2].toString()) + (p6vec3[1].toString()) + (p6vec3[0].toString()) + (p6vec3[0] * p6vec3[1] * p6vec3[2]).toString());
    p6aux2.push((p6vec3[2].toString()) + (p6vec3[0].toString()) + (p6vec3[1].toString()) + (p6vec3[0] * p6vec3[1] * p6vec3[2]).toString());

    var p6aux3 = [];
    p6aux3.push((p6vec4[0].toString()) + (p6vec4[1].toString()) + (p6vec4[2].toString()) + (p6vec4[0] * p6vec4[1] * p6vec4[2]).toString());
    p6aux3.push((p6vec4[0].toString()) + (p6vec4[2].toString()) + (p6vec4[1].toString()) + (p6vec4[0] * p6vec4[1] * p6vec4[2]).toString());
    p6aux3.push((p6vec4[1].toString()) + (p6vec4[0].toString()) + (p6vec4[2].toString()) + (p6vec4[0] * p6vec4[1] * p6vec4[2]).toString());
    p6aux3.push((p6vec4[1].toString()) + (p6vec4[2].toString()) + (p6vec4[0].toString()) + (p6vec4[0] * p6vec4[1] * p6vec4[2]).toString());
    p6aux3.push((p6vec4[2].toString()) + (p6vec4[1].toString()) + (p6vec4[0].toString()) + (p6vec4[0] * p6vec4[1] * p6vec4[2]).toString());
    p6aux3.push((p6vec4[2].toString()) + (p6vec4[0].toString()) + (p6vec4[1].toString()) + (p6vec4[0] * p6vec4[1] * p6vec4[2]).toString());

    var p6aux4 = [];
    p6aux4.push((p6vec5[0].toString()) + (p6vec5[1].toString()) + (p6vec5[2].toString()) + (p6vec5[0] * p6vec5[1] * p6vec5[2]).toString());
    p6aux4.push((p6vec5[0].toString()) + (p6vec5[2].toString()) + (p6vec5[1].toString()) + (p6vec5[0] * p6vec5[1] * p6vec5[2]).toString());
    p6aux4.push((p6vec5[1].toString()) + (p6vec5[0].toString()) + (p6vec5[2].toString()) + (p6vec5[0] * p6vec5[1] * p6vec5[2]).toString());
    p6aux4.push((p6vec5[1].toString()) + (p6vec5[2].toString()) + (p6vec5[0].toString()) + (p6vec5[0] * p6vec5[1] * p6vec5[2]).toString());
    p6aux4.push((p6vec5[2].toString()) + (p6vec5[1].toString()) + (p6vec5[0].toString()) + (p6vec5[0] * p6vec5[1] * p6vec5[2]).toString());
    p6aux4.push((p6vec5[2].toString()) + (p6vec5[0].toString()) + (p6vec5[1].toString()) + (p6vec5[0] * p6vec5[1] * p6vec5[2]).toString());
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1cont1 = [0, 0, 0];
        var p1dcon1 = $('#p1dcon1').val();
        var p1dcon2 = $('#p1dcon2').val();
        var p1dcon3 = $('#p1dcon3').val();
        var p1dcon4 = $('#p1dcon4').val();
        var p1dcon5 = $('#p1dcon5').val();
        var p1dcon6 = $('#p1dcon6').val();
        for (var i = 0; i < p1aux1.length; i++) {
            if (p1dcon1 == p1aux1[i]) {
                p1cont1[0] = '1';
                p1aux1[i] = 'aa';
            }
        }
        for (var i = 0; i < p1aux1.length; i++) {
            if (p1dcon2 == p1aux1[i]) {
                p1cont1[1] = '1';
                p1aux1[i] = 'aa';
            }
        }
        if (p1dcon3 == (p1vec1[0] * p1vec1[1])) {
            p1cont1[2] = '1';
        }
        var p1cont2 = 0;
        if (p1cont1[0] == '1' && p1cont1[1] == '1' && p1cont1[2] == '1') {
            p1cont2++;
            f_ok($('#p1dcon1'));
            f_ok($('#p1dcon2'));
            f_ok($('#p1dcon3'));
        } else {
            p1cont2;
            f_no($('#p1dcon1'));
            f_no($('#p1dcon2'));
            f_no($('#p1dcon3'));
        }
        var p1cont3 = [0, 0, 0];

        for (var i = 0; i < p1aux2.length; i++) {
            if (p1dcon4 == p1aux2[i] && p1dcon4 != p1dcon1) {
                p1cont3[0] = '1';
                p1aux2[i] = 'aa';
            }
        }
        for (var i = 0; i < p1aux2.length; i++) {
            if (p1dcon5 == p1aux2[i] && p1dcon2 != p1dcon5) {
                p1cont3[1] = '1';
                p1aux2[i] = 'aa';
            }
        }
        if (p1dcon6 == (p1vec1[0] * p1vec1[1])) {
            p1cont3[2] = '1';
        }
        if (p1cont3[0] == '1' && p1cont3[1] == '1' && p1cont3[2] == '1') {
            p1cont2++;
            f_ok($('#p1dcon4'));
            f_ok($('#p1dcon5'));
            f_ok($('#p1dcon6'));
        } else {
            p1cont2;
            f_no($('#p1dcon4'));
            f_no($('#p1dcon5'));
            f_no($('#p1dcon6'));
        }

        var p2cont1 = [0, 0, 0];
        var p2dcon1 = $('#p2dcon1').val();
        var p2dcon2 = $('#p2dcon2').val();
        var p2dcon3 = $('#p2dcon3').val();
        for (var i = 0; i < p2aux1.length; i++) {
            if (p2dcon1 == p2aux1[i]) {
                p2cont1[0] = '1';
                p2aux1[i] = 'aa';
            }
        }
        for (var i = 0; i < p2aux1.length; i++) {
            if (p2dcon2 == p2aux1[i]) {
                p2cont1[1] = '1';
                p2aux1[i] = 'aa';
            }
        }
        if (p2dcon3 == (p2vec1[0] * p2vec1[1])) {
            p2cont1[2] = '1';
        }
        if (p2cont1[0] == '1' && p2cont1[1] == '1' && p2cont1[2] == '1') {
            p1cont2++;
            f_ok($('#p2dcon1'));
            f_ok($('#p2dcon2'));
            f_ok($('#p2dcon3'));
        } else {
            p1cont2;
            f_no($('#p2dcon1'));
            f_no($('#p2dcon2'));
            f_no($('#p2dcon3'));
        }
        var p2cont3 = [];
        var p2dcon4 = $('#p2dcon4').val();
        var p2dcon5 = $('#p2dcon5').val();
        var p2dcon6 = $('#p2dcon6').val();
        for (var i = 0; i < p2aux2.length; i++) {
            if (p2dcon4 == p2aux2[i] && p2dcon4 != p2dcon1) {
                p2cont3[0] = '1';
                p2aux2[i] = 'aa';
            }
        }
        for (var i = 0; i < p2aux2.length; i++) {
            if (p2dcon5 == p2aux2[i] && p2dcon2 != p2dcon5) {
                p2cont3[1] = '1';
                p2aux2[i] = 'aa';
            }
        }
        if (p2dcon6 == (p2vec1[0] * p2vec1[1])) {
            p2cont3[2] = '1';
        }
        if (p2cont3[0] == '1' && p2cont3[1] == '1' && p2cont3[2] == '1') {
            p1cont2++;
            f_ok($('#p2dcon4'));
            f_ok($('#p2dcon5'));
            f_ok($('#p2dcon6'));
        } else {
            p1cont2;
            f_no($('#p2dcon4'));
            f_no($('#p2dcon5'));
            f_no($('#p2dcon6'));
        }
        var result1 = (p1cont2 * 1) / 4;
        cor = cor + result1;
        inc = inc + (1 - result1);

        var pd2con1 = $('#pd2con1').val();
        var pd2con2 = $('#pd2con2').val();
        var p2con1 = 0;
        if (pd2con1 == (p2vc1[0] * p2vc2[0])) {
            p2con1++;
            f_ok($('#pd2con1'));
        } else {
            p2con1;
            f_no($('#pd2con1'));
        }
        if (pd2con2 == (p2vc1[0] * p2vc2[0])) {
            p2con1++;
            f_ok($('#pd2con2'));
        } else {
            p2con1;
            f_no($('#pd2con2'));
        }
        var pd21con1 = $('#pd21con1').val();
        var pd21con2 = $('#pd21con2').val();
        var pd21con3 = $('#pd21con3').val();
        var pd21con4 = $('#pd21con4').val();
        if (pd21con1 == (p2vc1[1] * p2vc2[1])) {
            p2con1++;
            f_ok($('#pd21con1'));
        } else {
            p2con1;
            f_no($('#pd21con1'));
        }
        if (pd21con2 == (p2vc2[1])) {
            p2con1++;
            f_ok($('#pd21con2'));
        } else {
            p2con1;
            f_no($('#pd21con2'));
        }
        if (pd21con3 == (p2vc1[1])) {
            p2con1++;
            f_ok($('#pd21con3'));
        } else {
            p2con1;
            f_no($('#pd21con3'));
        }
        if (pd21con4 == (p2vc1[1] * p2vc2[1])) {
            p2con1++;
            f_ok($('#pd21con4'));
        } else {
            p2con1;
            f_no($('#pd21con4'));
        }
        var pd22con1 = $('#pd22con1').val();
        var pd22con2 = $('#pd22con2').val();
        var pd22con3 = $('#pd22con3').val();
        var pd22con4 = $('#pd22con4').val();
        if (pd22con1 == (p2vc1[2] * p2vc2[2])) {
            p2con1++;
            f_ok($('#pd22con1'));
        } else {
            p2con1;
            f_no($('#pd22con1'));
        }
        if (pd22con2 == (p2vc2[2])) {
            p2con1++;
            f_ok($('#pd22con2'));
        } else {
            p2con1;
            f_no($('#pd22con2'));
        }
        if (pd22con3 == (p2vc1[2])) {
            p2con1++;
            f_ok($('#pd22con3'));
        } else {
            p2con1;
            f_no($('#pd22con3'));
        }
        if (pd22con4 == (p2vc1[2] * p2vc2[2])) {
            p2con1++;
            f_ok($('#pd22con4'));
        } else {
            p2con1;
            f_no($('#pd22con4'));
        }
        var pd23con1 = $('#pd23con1').val();
        var pd23con2 = $('#pd23con2').val();
        var pd23con3 = $('#pd23con3').val();
        var pd23con4 = $('#pd23con4').val();
        if (pd23con1 == (p2vc1[3] * p2vc2[3])) {
            p2con1++;
            f_ok($('#pd23con1'));
        } else {
            p2con1;
            f_no($('#pd23con1'));
        }
        if (pd23con2 == (p2vc2[3])) {
            p2con1++;
            f_ok($('#pd23con2'));
        } else {
            p2con1;
            f_no($('#pd23con2'));
        }
        if (pd23con3 == (p2vc1[3])) {
            p2con1++;
            f_ok($('#pd23con3'));
        } else {
            p2con1;
            f_no($('#pd23con3'));
        }
        if (pd23con4 == (p2vc1[3] * p2vc2[3])) {
            p2con1++;
            f_ok($('#pd23con4'));
        } else {
            p2con1;
            f_no($('#pd23con4'));
        }
        var pd24con1 = $('#pd24con1').val();
        var pd24con2 = $('#pd24con2').val();
        var pd24con3 = $('#pd24con3').val();
        var pd24con4 = $('#pd24con4').val();
        if (pd24con1 == (p2vc1[4] * p2vc2[4])) {
            p2con1++;
            f_ok($('#pd24con1'));
        } else {
            p2con1;
            f_no($('#pd24con1'));
        }
        if (pd24con2 == (p2vc2[4])) {
            p2con1++;
            f_ok($('#pd24con2'));
        } else {
            p2con1;
            f_no($('#pd24con2'));
        }
        if (pd24con3 == (p2vc1[4])) {
            p2con1++;
            f_ok($('#pd24con3'));
        } else {
            p2con1;
            f_no($('#pd24con3'));
        }
        if (pd24con4 == (p2vc1[4] * p2vc2[4])) {
            p2con1++;
            f_ok($('#pd24con4'));
        } else {
            p2con1;
            f_no($('#pd24con4'));
        }
        var pd25con1 = $('#pd25con1').val();
        var pd25con2 = $('#pd25con2').val();
        var pd25con3 = $('#pd25con3').val();
        var pd25con4 = $('#pd25con4').val();
        if (pd25con1 == (p2vc1[5] * p2vc2[5])) {
            p2con1++;
            f_ok($('#pd25con1'));
        } else {
            p2con1;
            f_no($('#pd25con1'));
        }
        if (pd25con2 == (p2vc2[5])) {
            p2con1++;
            f_ok($('#pd25con2'));
        } else {
            p2con1;
            f_no($('#pd25con2'));
        }
        if (pd25con3 == (p2vc1[5])) {
            p2con1++;
            f_ok($('#pd25con3'));
        } else {
            p2con1;
            f_no($('#pd25con3'));
        }
        if (pd25con4 == (p2vc1[5] * p2vc2[5])) {
            p2con1++;
            f_ok($('#pd25con4'));
        } else {
            p2con1;
            f_no($('#pd25con4'));
        }
        var result2 = (p2con1 * 2) / 22;
        cor = cor + result2;
        inc = inc + (2 - result2);

        var p3dcon1 = $('#p3dcon1').val();
        var p3dcon2 = $('#p3dcon2').val();
        var p3dcon3 = $('#p3dcon3').val();
        var p3cont1 = 0;
        if (p3dcon1 == p3vec2[0] && p3dcon2 == (p3vec2[2] * p3vec2[1]) && p3dcon3 == (p3vec2[0] * p3vec2[1] * p3vec2[2])) {
            p3cont1++;
            f_ok($('#p3dcon1'));
            f_ok($('#p3dcon2'));
            f_ok($('#p3dcon3'));
        } else {
            p3cont1;
            f_no($('#p3dcon1'));
            f_no($('#p3dcon2'));
            f_no($('#p3dcon3'));
        }
        var p3dcon4 = $('#p3dcon4').val();
        var p3dcon5 = $('#p3dcon5').val();
        var p3dcon6 = $('#p3dcon6').val();
        if (p3dcon4 == (p3vec2[0] * p3vec2[1]) && p3dcon5 == (p3vec2[2]) && p3dcon6 == (p3vec2[0] * p3vec2[1] * p3vec2[2])) {
            p3cont1++;
            f_ok($('#p3dcon4'));
            f_ok($('#p3dcon5'));
            f_ok($('#p3dcon6'));
        } else {
            p3cont1;
            f_no($('#p3dcon4'));
            f_no($('#p3dcon5'));
            f_no($('#p3dcon6'));
        }

        var p31dcon1 = $('#p31dcon1').val();
        var p31dcon2 = $('#p31dcon2').val();
        var p31dcon3 = $('#p31dcon3').val();
        if (p31dcon1 == (p31vec2[0] * p31vec2[1]) && p31dcon2 == (p31vec2[2]) && p31dcon3 == (p31vec2[0] * p31vec2[1] * p31vec2[2])) {
            p3cont1++;
            f_ok($('#p31dcon1'));
            f_ok($('#p31dcon2'));
            f_ok($('#p31dcon3'));
        } else {
            p3cont1;
            f_no($('#p31dcon1'));
            f_no($('#p31dcon2'));
            f_no($('#p31dcon3'));
        }
        var p31dcon4 = $('#p31dcon4').val();
        var p31dcon5 = $('#p31dcon5').val();
        var p31dcon6 = $('#p31dcon6').val();
        if (p31dcon4 == p31vec2[0] && p31dcon5 == (p31vec2[2] * p31vec2[1]) && p31dcon6 == (p31vec2[0] * p31vec2[1] * p31vec2[2])) {
            p3cont1++;
            f_ok($('#p31dcon4'));
            f_ok($('#p31dcon5'));
            f_ok($('#p31dcon6'));
        } else {
            p3cont1;
            f_no($('#p31dcon4'));
            f_no($('#p31dcon5'));
            f_no($('#p31dcon6'));
        }

        var p32dcon1 = $('#p32dcon1').val();
        var p32dcon2 = $('#p32dcon2').val();
        var p32dcon3 = $('#p32dcon3').val();
        if (p32dcon1 == p32vec2[0] && p32dcon2 == (p32vec2[2] * p32vec2[1]) && p32dcon3 == (p32vec2[0] * p32vec2[1] * p32vec2[2])) {
            p3cont1++;
            f_ok($('#p32dcon1'));
            f_ok($('#p32dcon2'));
            f_ok($('#p32dcon3'));
        } else {
            p3cont1;
            f_no($('#p32dcon1'));
            f_no($('#p32dcon2'));
            f_no($('#p32dcon3'));
        }
        var p32dcon4 = $('#p32dcon4').val();
        var p32dcon5 = $('#p32dcon5').val();
        var p32dcon6 = $('#p32dcon6').val();
        if (p32dcon4 == (p32vec2[0] * p32vec2[1]) && p32dcon5 == (p32vec2[2]) && p32dcon6 == (p32vec2[0] * p32vec2[1] * p32vec2[2])) {
            p3cont1++;
            f_ok($('#p32dcon4'));
            f_ok($('#p32dcon5'));
            f_ok($('#p32dcon6'));
        } else {
            p3cont1;
            f_no($('#p32dcon4'));
            f_no($('#p32dcon5'));
            f_no($('#p32dcon6'));
        }
        var result3 = (p3cont1 * 2) / 6;
        cor = cor + result3;
        inc = inc + (2 - result3);

        var p4dcon1 = $('#p4dcon1').val();
        var p4dcon2 = $('#p4dcon2').val();
        var p41dcon1 = $('#p41dcon1').val();
        var p41dcon2 = $('#p41dcon2').val();
        var p42dcon1 = $('#p42dcon1').val();
        var p42dcon2 = $('#p42dcon2').val();
        var p43dcon1 = $('#p43dcon1').val();
        var p43dcon2 = $('#p43dcon2').val();
        var p4cont1 = 0;
        if (p4dcon1 == p4vec5[2]) {
            p4cont1++;
            f_ok($('#p4dcon1'));
        } else {
            p4cont1;
            f_no($('#p4dcon1'));
        }
        if (p4dcon2 == p4vec5[2]) {
            p4cont1++;
            f_ok($('#p4dcon2'));
        } else {
            p4cont1;
            f_no($('#p4dcon2'));
        }

        if (p41dcon1 == p4vec5[3]) {
            p4cont1++;
            f_ok($('#p41dcon1'));
        } else {
            p4cont1;
            f_no($('#p41dcon1'));
        }
        if (p41dcon2 == p4vec5[5]) {
            p4cont1++;
            f_ok($('#p41dcon2'));
        } else {
            p4cont1;
            f_no($('#p41dcon2'));
        }

        if (p42dcon1 == p4vec5[8]) {
            p4cont1++;
            f_ok($('#p42dcon1'));
        } else {
            p4cont1;
            f_no($('#p42dcon1'));
        }
        if (p42dcon2 == p4vec5[7]) {
            p4cont1++;
            f_ok($('#p42dcon2'));
        } else {
            p4cont1;
            f_no($('#p42dcon2'));
        }

        if (p43dcon1 == p4vec5[11]) {
            p4cont1++;
            f_ok($('#p43dcon1'));
        } else {
            p4cont1;
            f_no($('#p43dcon1'));
        }
        if (p43dcon2 == p4vec5[9]) {
            p4cont1++;
            f_ok($('#p43dcon2'));
        } else {
            p4cont1;
            f_no($('#p43dcon2'));
        }
        var p4res1 = $('.p4res1 span').text();
        var p4res2 = $('.p4res2 span').text();
        var p4res3 = $('.p4res3 span').text();
        var p4res4 = $('.p4res4 span').text();
        if (p4res1 == p4vec3[0]) {
            p4cont1++;
            f_ok($('.p4res1'));
        } else {
            p4cont1;
            f_no($('.p4res1'));
        }
        if (p4res2 == p4vec3[1]) {
            p4cont1++;
            f_ok($('.p4res2'));
        } else {
            p4cont1;
            f_no($('.p4res2'));
        }
        if (p4res3 == p4vec3[2]) {
            p4cont1++;
            f_ok($('.p4res3'));
        } else {
            p4cont1;
            f_no($('.p4res3'));
        }
        if (p4res4 == p4vec3[3]) {
            p4cont1++;
            f_ok($('.p4res4'));
        } else {
            p4cont1;
            f_no($('.p4res4'));
        }
        var result4 = (p4cont1 * 2) / 12;
        cor = cor + result4;
        inc = inc + (2 - result4);

        var p5col1 = ['rgb(140, 192, 242)', 'rgb(213, 139, 151)', 'rgb(230, 236, 189)', 'rgb(215, 221, 239)', 'rgb(244, 225, 200)'];
        var p5cont1 = 0;
        if ($('.pint1').css('background-color') == p5col1[3] && $('.pint13').css('background-color') == p5col1[3]) {
            p5cont1++;
            $('.pint1').addClass('valid');
            $('.pint13').addClass('valid');
        } else {
            p5cont1;
            $('.pint1').addClass('no-valid');
            $('.pint13').addClass('no-valid');
        }
        if ($('.pint2').css('background-color') == p5col1[2] && $('.pint14').css('background-color') == p5col1[2]) {
            p5cont1++;
            $('.pint2').addClass('valid');
            $('.pint14').addClass('valid');
        } else {
            p5cont1;
            $('.pint2').addClass('no-valid');
            $('.pint14').addClass('no-valid');
        }
        if ($('.pint3').css('background-color') == p5col1[0] && $('.pint11').css('background-color') == p5col1[0]) {
            p5cont1++;
            $('.pint3').addClass('valid');
            $('.pint11').addClass('valid');
        } else {
            p5cont1;
            $('.pint3').addClass('no-valid');
            $('.pint11').addClass('no-valid');
        }
        if ($('.pint4').css('background-color') == p5col1[4] && $('.pint12').css('background-color') == p5col1[4]) {
            p5cont1++;
            $('.pint4').addClass('valid');
            $('.pint12').addClass('valid');
        } else {
            p5cont1;
            $('.pint4').addClass('no-valid');
            $('.pint12').addClass('no-valid');
        }
        var result5 = (p5cont1 * 1) / 4;
        cor = cor + result5;
        inc = inc + (1 - result5);

        var vec7resp1 = [];
        var vec7resp2 = [];
        var vec7resp3 = [];
        var vec7resp4 = [];
        var vec7resp5 = [];
        var vec7resp6 = [];
        var vec7resp7 = [];
        var vec7resp8 = [];
        var corr = 0;

        for (var i = 0; i < 4; i++) {
            var res1 = $("#p6dcon" + [i + 1] + "").val();
            vec7resp1.push(res1);
        }

        for (var i = 0; i < 4; i++) {
            var res1 = $("#p6dcon" + [i + 5] + "").val();
            vec7resp2.push(res1);
        }

        for (var i = 0; i < 4; i++) {
            var res1 = $("#p61dcon" + [i + 1] + "").val();
            vec7resp3.push(res1);
        }

        for (var i = 0; i < 4; i++) {
            var res1 = $("#p61dcon" + [i + 5] + "").val();
            vec7resp4.push(res1);
        }

        for (var i = 0; i < 4; i++) {
            var res1 = $("#p62dcon" + [i + 1] + "").val();
            vec7resp5.push(res1);
        }

        for (var i = 0; i < 4; i++) {
            var res1 = $("#p62dcon" + [i + 5] + "").val();
            vec7resp6.push(res1);
        }

        for (var i = 0; i < 4; i++) {
            var res1 = $("#p63dcon" + [i + 1] + "").val();
            vec7resp7.push(res1);
        }

        for (var i = 0; i < 4; i++) {
            var res1 = $("#p63dcon" + [i + 5] + "").val();
            vec7resp8.push(res1);
        }

        vec7resp1 = vec7resp1.join('');
        vec7resp2 = vec7resp2.join('');
        vec7resp3 = vec7resp3.join('');
        vec7resp4 = vec7resp4.join('');
        vec7resp5 = vec7resp5.join('');
        vec7resp6 = vec7resp6.join('');
        vec7resp7 = vec7resp7.join('');
        vec7resp8 = vec7resp8.join('');

        var ace1 = 0;
        var ace2 = 0;
        var ace3 = 0;
        var ace4 = 0;
        var ace5 = 0;
        var ace6 = 0;
        var ace7 = 0;
        var ace8 = 0;

        for (var i = 0; i < 6; i++) {
            if (vec7resp1 == p6aux1[i]) {
                ace1 = 1;
            } else {
                ace1;
            }
        }
        var p6cont1 = 0;
        if (ace1 == 1) {
            p6cont1++;
            f_ok($("#p6dcon1"));
            f_ok($("#p6dcon2"));
            f_ok($("#p6dcon3"));
            f_ok($("#p6dcon4"));
        } else {
            p6cont1;
            f_no($("#p6dcon1"));
            f_no($("#p6dcon2"));
            f_no($("#p6dcon3"));
            f_no($("#p6dcon4"));
        }
        for (var i = 0; i < 6; i++) {
            if (vec7resp1 != vec7resp2) {
                if (vec7resp2 == p6aux1[i]) {
                    ace2 = 1;
                } else {
                    ace2;
                }
            } else {
                ace2;
            }
        }

        if (ace2 == 1) {
            p6cont1++;
            f_ok($("#p6dcon5"));
            f_ok($("#p6dcon6"));
            f_ok($("#p6dcon7"));
            f_ok($("#p6dcon8"));
        } else {
            p6cont1;
            f_no($("#p6dcon5"));
            f_no($("#p6dcon6"));
            f_no($("#p6dcon7"));
            f_no($("#p6dcon8"));
        }

        for (var i = 0; i < 6; i++) {
            if (vec7resp3 == p6aux2[i]) {
                ace3 = 1;
            } else {
                ace3;
            }
        }

        if (ace3 == 1) {
            p6cont1++;
            f_ok($("#p61dcon1"));
            f_ok($("#p61dcon2"));
            f_ok($("#p61dcon3"));
            f_ok($("#p61dcon4"));
        } else {
            p6cont1;
            f_no($("#p61dcon1"));
            f_no($("#p61dcon2"));
            f_no($("#p61dcon3"));
            f_no($("#p61dcon4"));
        }
        for (var i = 0; i < 6; i++) {
            if (vec7resp3 != vec7resp4) {
                if (vec7resp4 == p6aux1[i]) {
                    ace4 = 1;
                } else {
                    ace4;
                }
            } else {
                ace4;
            }
        }

        if (ace4 == 1) {
            p6cont1++;
            f_ok($("#p61dcon5"));
            f_ok($("#p61dcon6"));
            f_ok($("#p61dcon7"));
            f_ok($("#p61dcon8"));
        } else {
            p6cont1;
            f_no($("#p61dcon5"));
            f_no($("#p61dcon6"));
            f_no($("#p61dcon7"));
            f_no($("#p61dcon8"));
        }

        for (var i = 0; i < 6; i++) {
            if (vec7resp5 == p6aux3[i]) {
                ace5 = 1;
            } else {
                ace5;
            }
        }

        if (ace5 == 1) {
            p6cont1++;
            f_ok($("#p62dcon1"));
            f_ok($("#p62dcon2"));
            f_ok($("#p62dcon3"));
            f_ok($("#p62dcon4"));
        } else {
            p6cont1;
            f_no($("#p62dcon1"));
            f_no($("#p62dcon2"));
            f_no($("#p62dcon3"));
            f_no($("#p62dcon4"));
        }

        for (var i = 0; i < 6; i++) {
            if (vec7resp5 != vec7resp6) {
                if (vec7resp6 == p6aux3[i]) {
                    ace6 = 1;
                } else {
                    ace6;
                }
            } else {
                ace6;
            }
        }

        if (ace6 == 1) {
            p6cont1++;
            f_ok($("#p62dcon5"));
            f_ok($("#p62dcon6"));
            f_ok($("#p62dcon7"));
            f_ok($("#p62dcon8"));
        } else {
            p6cont1;
            f_no($("#p62dcon5"));
            f_no($("#p62dcon6"));
            f_no($("#p62dcon7"));
            f_no($("#p62dcon8"));
        }

        for (var i = 0; i < 6; i++) {
            if (vec7resp7 == p6aux4[i]) {
                ace7 = 1;
            } else {
                ace7;
            }
        }

        if (ace7 == 1) {
            p6cont1++;
            f_ok($("#p63dcon1"));
            f_ok($("#p63dcon2"));
            f_ok($("#p63dcon3"));
            f_ok($("#p63dcon4"));
        } else {
            p6cont1;
            f_no($("#p63dcon1"));
            f_no($("#p63dcon2"));
            f_no($("#p63dcon3"));
            f_no($("#p63dcon4"));
        }
        for (var i = 0; i < 6; i++) {
            if (vec7resp7 != vec7resp8) {
                if (vec7resp6 == p6aux4[i]) {
                    ace8 = 1;
                } else {
                    ace8;
                }
            } else {
                ace8;
            }
        }

        if (ace8 == 1) {
            p6cont1++;
            f_ok($("#p63dcon5"));
            f_ok($("#p63dcon6"));
            f_ok($("#p63dcon7"));
            f_ok($("#p63dcon8"));
        } else {
            p6cont1;
            f_no($("#p63dcon5"));
            f_no($("#p63dcon6"));
            f_no($("#p63dcon7"));
            f_no($("#p63dcon8"));
        }

        var result6 = (p6cont1 * 2) / 8;
        cor = cor + result6;
        inc = inc + (2 - result6);
        Calculo_nota();
    }
}