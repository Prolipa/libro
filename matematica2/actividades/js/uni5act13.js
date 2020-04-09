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
var p4color1 = 0;
$('#color1').click(function() {
    p4color1 = $('#color1').css("background-color");
    $('#cols1').css("background-color", p4color1);

});
$('#color2').click(function() {
    p4color1 = $('#color2').css("background-color");
    $('#cols1').css("background-color", p4color1);

});
$('#color3').click(function() {
    p4color1 = $('#color3').css("background-color");
    $('#cols1').css("background-color", p4color1);

});
$('#color4').click(function() {
    p4color1 = $('#color4').css("background-color");
    $('#cols1').css("background-color", p4color1);

});
$('.pint1').click(function() {
    if (p4color1 != 0) {
        $('.pint1').css("background-color", p4color1);
        $('.pint1').css("color", 'white');
    }
});
$('.pint2').click(function() {
    if (p4color1 != 0) {
        $('.pint2').css("background-color", p4color1);
        $('.pint2').css("color", 'white');
    }
});
$('.pint3').click(function() {
    if (p4color1 != 0) {
        $('.pint3').css("background-color", p4color1);
        $('.pint3').css("color", 'white');
    }
});
$('.pint4').click(function() {
    if (p4color1 != 0) {
        $('.pint4').css("background-color", p4color1);
        $('.pint4').css("color", 'white');
    }
});
$('.pint5').click(function() {
    if (p4color1 != 0) {
        $('.pint5').css("background-color", p4color1);
        $('.pint5').css("color", 'white');
    }
});
$('.pint6').click(function() {
    if (p4color1 != 0) {
        $('.pint6').css("background-color", p4color1);
        $('.pint6').css("color", 'white');
    }
});
$('.pint7').click(function() {
    if (p4color1 != 0) {
        $('.pint7').css("background-color", p4color1);
        $('.pint7').css("color", 'white');
    }
});
$('.pint8').click(function() {
    if (p4color1 != 0) {
        $('.pint8').css("background-color", p4color1);
        $('.pint8').css("color", 'white');
    }
});
$('.pint9').click(function() {
    if (p4color1 != 0) {
        $('.pint9').css("background-color", p4color1);
        $('.pint9').css("color", 'white');
    }
});
$('.pint10').click(function() {
    if (p4color1 != 0) {
        $('.pint10').css("background-color", p4color1);
        $('.pint10').css("color", 'white');
    }
});
$('.pint11').click(function() {
    if (p4color1 != 0) {
        $('.pint11').css("background-color", p4color1);
        $('.pint11').css("color", 'white');
    }
});
$('.pint12').click(function() {
    if (p4color1 != 0) {
        $('.pint12').css("background-color", p4color1);
        $('.pint12').css("color", 'white');
    }
});
$('.pint13').click(function() {
    if (p4color1 != 0) {
        $('.pint13').css("background-color", p4color1);
        $('.pint13').css("color", 'white');
    }
});
$('.pint14').click(function() {
    if (p4color1 != 0) {
        $('.pint14').css("background-color", p4color1);
        $('.pint14').css("color", 'white');
    }
});
$('.pint15').click(function() {
    if (p4color1 != 0) {
        $('.pint15').css("background-color", p4color1);
        $('.pint15').css("color", 'white');
    }
});
$('.pint16').click(function() {
    if (p4color1 != 0) {
        $('.pint16').css("background-color", p4color1);
        $('.pint16').css("color", 'white');
    }
});
$('.pint17').click(function() {
    if (p4color1 != 0) {
        $('.pint17').css("background-color", p4color1);
        $('.pint17').css("color", 'white');
    }
});
$('.pint18').click(function() {
    if (p4color1 != 0) {
        $('.pint18').css("background-color", p4color1);
        $('.pint18').css("color", 'white');
    }
});
$('.pint19').click(function() {
    if (p4color1 != 0) {
        $('.pint19').css("background-color", p4color1);
        $('.pint19').css("color", 'white');
    }
});
$('.pint20').click(function() {
    if (p4color1 != 0) {
        $('.pint20').css("background-color", p4color1);
        $('.pint20').css("color", 'white');
    }
});
$('.pint21').click(function() {
    if (p4color1 != 0) {
        $('.pint21').css("background-color", p4color1);
        $('.pint21').css("color", 'white');
    }
});
$('.pint22').click(function() {
    if (p4color1 != 0) {
        $('.pint22').css("background-color", p4color1);
        $('.pint22').css("color", 'white');
    }
});
$('.pint23').click(function() {
    if (p4color1 != 0) {
        $('.pint23').css("background-color", p4color1);
        $('.pint23').css("color", 'white');
    }
});
$('.pint24').click(function() {
    if (p4color1 != 0) {
        $('.pint24').css("background-color", p4color1);
        $('.pint24').css("color", 'white');
    }
});
$('.pint25').click(function() {
    if (p4color1 != 0) {
        $('.pint25').css("background-color", p4color1);
        $('.pint25').css("color", 'white');
    }
});
$('.pint26').click(function() {
    if (p4color1 != 0) {
        $('.pint26').css("background-color", p4color1);
        $('.pint26').css("color", 'white');
    }
});
$('.pint27').click(function() {
    if (p4color1 != 0) {
        $('.pint27').css("background-color", p4color1);
        $('.pint27').css("color", 'white');
    }
});
$('.pint28').click(function() {
    if (p4color1 != 0) {
        $('.pint28').css("background-color", p4color1);
        $('.pint28').css("color", 'white');
    }
});
$('.pint29').click(function() {
    if (p4color1 != 0) {
        $('.pint29').css("background-color", p4color1);
        $('.pint29').css("color", 'white');
    }
});
$('.pint30').click(function() {
    if (p4color1 != 0) {
        $('.pint30').css("background-color", p4color1);
        $('.pint30').css("color", 'white');
    }
});
$('.pint31').click(function() {
    if (p4color1 != 0) {
        $('.pint31').css("background-color", p4color1);
        $('.pint31').css("color", 'white');
    }
});
$('.pint32').click(function() {
    if (p4color1 != 0) {
        $('.pint32').css("background-color", p4color1);
        $('.pint32').css("color", 'white');
    }
});
$('.pint33').click(function() {
    if (p4color1 != 0) {
        $('.pint33').css("background-color", p4color1);
        $('.pint33').css("color", 'white');
    }
});
$('.pint34').click(function() {
    if (p4color1 != 0) {
        $('.pint34').css("background-color", p4color1);
        $('.pint34').css("color", 'white');
    }
});
$('.pint35').click(function() {
    if (p4color1 != 0) {
        $('.pint35').css("background-color", p4color1);
        $('.pint35').css("color", 'white');
    }
});
$('.pint36').click(function() {
    if (p4color1 != 0) {
        $('.pint36').css("background-color", p4color1);
        $('.pint36').css("color", 'white');
    }
});
$('.pint37').click(function() {
    if (p4color1 != 0) {
        $('.pint37').css("background-color", p4color1);
        $('.pint37').css("color", 'white');
    }
});
$('.pint38').click(function() {
    if (p4color1 != 0) {
        $('.pint38').css("background-color", p4color1);
        $('.pint38').css("color", 'white');
    }
});
$('.pint39').click(function() {
    if (p4color1 != 0) {
        $('.pint39').css("background-color", p4color1);
        $('.pint39').css("color", 'white');
    }
});
$('.pint40').click(function() {
    if (p4color1 != 0) {
        $('.pint40').css("background-color", p4color1);
        $('.pint40').css("color", 'white');
    }
});
$('.pint41').click(function() {
    if (p4color1 != 0) {
        $('.pint41').css("background-color", p4color1);
        $('.pint41').css("color", 'white');
    }
});
$('.pint42').click(function() {
    if (p4color1 != 0) {
        $('.pint42').css("background-color", p4color1);
        $('.pint42').css("color", 'white');
    }
});
$('.pint43').click(function() {
    if (p4color1 != 0) {
        $('.pint43').css("background-color", p4color1);
        $('.pint43').css("color", 'white');
    }
});
$('.pint44').click(function() {
    if (p4color1 != 0) {
        $('.pint44').css("background-color", p4color1);
        $('.pint44').css("color", 'white');
    }
});
$('.pint45').click(function() {
    if (p4color1 != 0) {
        $('.pint45').css("background-color", p4color1);
        $('.pint45').css("color", 'white');
    }
});
$('.pint46').click(function() {
    if (p4color1 != 0) {
        $('.pint46').css("background-color", p4color1);
        $('.pint46').css("color", 'white');
    }
});
$('.pint47').click(function() {
    if (p4color1 != 0) {
        $('.pint47').css("background-color", p4color1);
        $('.pint47').css("color", 'white');
    }
});
$('.pint48').click(function() {
    if (p4color1 != 0) {
        $('.pint48').css("background-color", p4color1);
        $('.pint48').css("color", 'white');
    }
});
$('.pint49').click(function() {
    if (p4color1 != 0) {
        $('.pint49').css("background-color", p4color1);
        $('.pint49').css("color", 'white');
    }
});
$('.pint50').click(function() {
    if (p4color1 != 0) {
        $('.pint50').css("background-color", p4color1);
        $('.pint50').css("color", 'white');
    }
});
$('.pint51').click(function() {
    if (p4color1 != 0) {
        $('.pint51').css("background-color", p4color1);
        $('.pint51').css("color", 'white');
    }
});
$('.pint52').click(function() {
    if (p4color1 != 0) {
        $('.pint52').css("background-color", p4color1);
        $('.pint52').css("color", 'white');
    }
});
$('.pint53').click(function() {
    if (p4color1 != 0) {
        $('.pint53').css("background-color", p4color1);
        $('.pint53').css("color", 'white');
    }
});
$('.pint54').click(function() {
    if (p4color1 != 0) {
        $('.pint54').css("background-color", p4color1);
        $('.pint54').css("color", 'white');
    }
});
$('.pint55').click(function() {
    if (p4color1 != 0) {
        $('.pint55').css("background-color", p4color1);
        $('.pint55').css("color", 'white');
    }
});
$('.pint56').click(function() {
    if (p4color1 != 0) {
        $('.pint56').css("background-color", p4color1);
        $('.pint56').css("color", 'white');
    }
});
$('.pint57').click(function() {
    if (p4color1 != 0) {
        $('.pint57').css("background-color", p4color1);
        $('.pint57').css("color", 'white');
    }
});
$('.pint58').click(function() {
    if (p4color1 != 0) {
        $('.pint58').css("background-color", p4color1);
        $('.pint58').css("color", 'white');
    }
});
$('.pint59').click(function() {
    if (p4color1 != 0) {
        $('.pint59').css("background-color", p4color1);
        $('.pint59').css("color", 'white');
    }
});
$('.pint60').click(function() {
    if (p4color1 != 0) {
        $('.pint60').css("background-color", p4color1);
        $('.pint60').css("color", 'white');
    }
});
$('.pint61').click(function() {
    if (p4color1 != 0) {
        $('.pint61').css("background-color", p4color1);
        $('.pint61').css("color", 'white');
    }
});
$('.pint62').click(function() {
    if (p4color1 != 0) {
        $('.pint62').css("background-color", p4color1);
        $('.pint62').css("color", 'white');
    }
});
$('.pint63').click(function() {
    if (p4color1 != 0) {
        $('.pint63').css("background-color", p4color1);
        $('.pint63').css("color", 'white');
    }
});
$('.pint64').click(function() {
    if (p4color1 != 0) {
        $('.pint64').css("background-color", p4color1);
        $('.pint64').css("color", 'white');
    }
});
$('.pint65').click(function() {
    if (p4color1 != 0) {
        $('.pint65').css("background-color", p4color1);
        $('.pint65').css("color", 'white');
    }
});
$('.pint66').click(function() {
    if (p4color1 != 0) {
        $('.pint66').css("background-color", p4color1);
        $('.pint66').css("color", 'white');
    }
});
$('.pint67').click(function() {
    if (p4color1 != 0) {
        $('.pint67').css("background-color", p4color1);
        $('.pint67').css("color", 'white');
    }
});
$('.pint68').click(function() {
    if (p4color1 != 0) {
        $('.pint68').css("background-color", p4color1);
        $('.pint68').css("color", 'white');
    }
});
$('.pint69').click(function() {
    if (p4color1 != 0) {
        $('.pint69').css("background-color", p4color1);
        $('.pint69').css("color", 'white');
    }
});
$('.pint70').click(function() {
    if (p4color1 != 0) {
        $('.pint70').css("background-color", p4color1);
        $('.pint70').css("color", 'white');
    }
});
$('.pint71').click(function() {
    if (p4color1 != 0) {
        $('.pint71').css("background-color", p4color1);
        $('.pint71').css("color", 'white');
    }
});
$('.pint72').click(function() {
    if (p4color1 != 0) {
        $('.pint72').css("background-color", p4color1);
        $('.pint72').css("color", 'white');
    }
});
$('.pint73').click(function() {
    if (p4color1 != 0) {
        $('.pint73').css("background-color", p4color1);
        $('.pint73').css("color", 'white');
    }
});
$('.pint74').click(function() {
    if (p4color1 != 0) {
        $('.pint74').css("background-color", p4color1);
        $('.pint74').css("color", 'white');
    }
});
$('.pint75').click(function() {
    if (p4color1 != 0) {
        $('.pint75').css("background-color", p4color1);
        $('.pint75').css("color", 'white');
    }
});
$('.pint76').click(function() {
    if (p4color1 != 0) {
        $('.pint76').css("background-color", p4color1);
        $('.pint76').css("color", 'white');
    }
});
$('.pint77').click(function() {
    if (p4color1 != 0) {
        $('.pint77').css("background-color", p4color1);
        $('.pint77').css("color", 'white');
    }
});
$('.pint78').click(function() {
    if (p4color1 != 0) {
        $('.pint78').css("background-color", p4color1);
        $('.pint78').css("color", 'white');
    }
});
$('.pint79').click(function() {
    if (p4color1 != 0) {
        $('.pint79').css("background-color", p4color1);
        $('.pint79').css("color", 'white');
    }
});
$('.pint80').click(function() {
    if (p4color1 != 0) {
        $('.pint80').css("background-color", p4color1);
        $('.pint80').css("color", 'white');
    }
});
$('.pint81').click(function() {
    if (p4color1 != 0) {
        $('.pint81').css("background-color", p4color1);
        $('.pint81').css("color", 'white');
    }
});
$('.pint82').click(function() {
    if (p4color1 != 0) {
        $('.pint82').css("background-color", p4color1);
        $('.pint82').css("color", 'white');
    }
});
$('.pint83').click(function() {
    if (p4color1 != 0) {
        $('.pint83').css("background-color", p4color1);
        $('.pint83').css("color", 'white');
    }
});
$('.pint84').click(function() {
    if (p4color1 != 0) {
        $('.pint84').css("background-color", p4color1);
        $('.pint84').css("color", 'white');
    }
});
$('.pint85').click(function() {
    if (p4color1 != 0) {
        $('.pint85').css("background-color", p4color1);
        $('.pint85').css("color", 'white');
    }
});
$('.pint86').click(function() {
    if (p4color1 != 0) {
        $('.pint86').css("background-color", p4color1);
        $('.pint86').css("color", 'white');
    }
});
$('.pint87').click(function() {
    if (p4color1 != 0) {
        $('.pint87').css("background-color", p4color1);
        $('.pint87').css("color", 'white');
    }
});
$('.pint88').click(function() {
    if (p4color1 != 0) {
        $('.pint88').css("background-color", p4color1);
        $('.pint88').css("color", 'white');
    }
});
$('.pint89').click(function() {
    if (p4color1 != 0) {
        $('.pint89').css("background-color", p4color1);
        $('.pint89').css("color", 'white');
    }
});
$('.pint90').click(function() {
    if (p4color1 != 0) {
        $('.pint90').css("background-color", p4color1);
        $('.pint90').css("color", 'white');
    }
});
$('.pint91').click(function() {
    if (p4color1 != 0) {
        $('.pint91').css("background-color", p4color1);
        $('.pint91').css("color", 'white');
    }
});
$('.pint92').click(function() {
    if (p4color1 != 0) {
        $('.pint92').css("background-color", p4color1);
        $('.pint92').css("color", 'white');
    }
});
$('.pint93').click(function() {
    if (p4color1 != 0) {
        $('.pint93').css("background-color", p4color1);
        $('.pint93').css("color", 'white');
    }
});
$('.pint94').click(function() {
    if (p4color1 != 0) {
        $('.pint94').css("background-color", p4color1);
        $('.pint94').css("color", 'white');
    }
});
$('.pint95').click(function() {
    if (p4color1 != 0) {
        $('.pint95').css("background-color", p4color1);
        $('.pint95').css("color", 'white');
    }
});
$('.pint96').click(function() {
    if (p4color1 != 0) {
        $('.pint96').css("background-color", p4color1);
        $('.pint96').css("color", 'white');
    }
});
$('.pint97').click(function() {
    if (p4color1 != 0) {
        $('.pint97').css("background-color", p4color1);
        $('.pint97').css("color", 'white');
    }
});
$('.pint98').click(function() {
    if (p4color1 != 0) {
        $('.pint98').css("background-color", p4color1);
        $('.pint98').css("color", 'white');
    }
});
$('.pint99').click(function() {
    if (p4color1 != 0) {
        $('.pint99').css("background-color", p4color1);
        $('.pint99').css("color", 'white');
    }
});
$('.pint100').click(function() {
    if (p4color1 != 0) {
        $('.pint100').css("background-color", p4color1);
        $('.pint100').css("color", 'white');
    }
});

function f_iniciar() {
    var p2vec1 = [(Math.floor(Math.random() * 40) + 10), (Math.floor(Math.random() * 40) + 10), (Math.floor(Math.random() * 40) + 10), (Math.floor(Math.random() * 40) + 10)];
    var p2vec2 = [(Math.floor(Math.random() * 40) + 10), (Math.floor(Math.random() * 40) + 10), (Math.floor(Math.random() * 40) + 10), (Math.floor(Math.random() * 40) + 10)];
    var p2v1 = p2vec1[0].toString().split('');
    var p2vc1 = [];
    for (var i = 0; i < p2v1[0]; i++) {
        p2vc1.push('<img src="img/i4_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">');
    }
    for (var i = 0; i < p2v1[1]; i++) {
        p2vc1.push('<img src="img/i5_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">');
    }
    $('#p2im1').html(p2vc1);
    var p2v2 = p2vec2[0].toString().split('');
    var p2vc2 = [];
    for (var i = 0; i < p2v2[0]; i++) {
        p2vc2.push('<img src="img/i4_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">');
    }
    for (var i = 0; i < p2v2[1]; i++) {
        p2vc2.push('<img src="img/i5_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">');
    }
    $('#p2im2').html(p2vc2);
    var p2v3 = p2vec1[1].toString().split('');
    var p2vc3 = [];
    for (var i = 0; i < p2v3[0]; i++) {
        p2vc3.push('<img src="img/i4_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">');
    }
    for (var i = 0; i < p2v3[1]; i++) {
        p2vc3.push('<img src="img/i5_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">');
    }
    $('#p2im3').html(p2vc3);
    var p2v4 = p2vec2[1].toString().split('');
    var p2vc4 = [];
    for (var i = 0; i < p2v4[0]; i++) {
        p2vc4.push('<img src="img/i4_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">');
    }
    for (var i = 0; i < p2v4[1]; i++) {
        p2vc4.push('<img src="img/i5_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">');
    }
    $('#p2im4').html(p2vc4);
    var p2v5 = p2vec1[2].toString().split('');
    var p2vc5 = [];
    for (var i = 0; i < p2v5[0]; i++) {
        p2vc5.push('<img src="img/i4_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">');
    }
    for (var i = 0; i < p2v5[1]; i++) {
        p2vc5.push('<img src="img/i5_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">');
    }
    $('#p2im5').html(p2vc5);
    var p2v6 = p2vec2[2].toString().split('');
    var p2vc6 = [];
    for (var i = 0; i < p2v6[0]; i++) {
        p2vc6.push('<img src="img/i4_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">');
    }
    for (var i = 0; i < p2v6[1]; i++) {
        p2vc6.push('<img src="img/i5_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">');
    }
    $('#p2im6').html(p2vc6);
    var p2v7 = p2vec1[3].toString().split('');
    var p2vc7 = [];
    for (var i = 0; i < p2v7[0]; i++) {
        p2vc7.push('<img src="img/i4_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">');
    }
    for (var i = 0; i < p2v7[1]; i++) {
        p2vc7.push('<img src="img/i5_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">');
    }
    $('#p2im7').html(p2vc7);
    var p2v8 = p2vec2[3].toString().split('');
    var p2vc8 = [];
    for (var i = 0; i < p2v8[0]; i++) {
        p2vc8.push('<img src="img/i4_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">');
    }
    for (var i = 0; i < p2v8[1]; i++) {
        p2vc8.push('<img src="img/i5_p178_u5a1.jpg" style="display: inline-block; mix-blend-mode: multiply;">');
    }
    $('#p2im8').html(p2vc8);

    var p3vec1 = [];
    var myArray1 = [];
    for (var i = 40; i < 98; i++) {
        p3vec1.push(i);
        myArray1.push(i - 40);
    }
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }

    var p3vec2 = [];
    var myArray2 = [];
    for (var i = 10; i < 39; i++) {
        p3vec2.push(i);
        myArray2.push(i - 10);
    }
    var i, j, k;
    for (i = myArray2.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray2[i - 1];
        myArray2[i - 1] = myArray2[j];
        myArray2[j] = k;
    }
    var c = myArray1[5];
    var p3n1 = p3vec1[c];
    var c1 = myArray2[6];
    var p3n2 = p3vec2[c1];
    var p3d1 = p3n1.toString().split('');
    var p3d2 = p3n2.toString().split('');
    if (p3d1[1] < p3d2[1]) {
        var p3c1 = p3d1[1];
        var p3c2 = p3d2[1];
        p3d1[1] = p3c2;
        p3d2[1] = p3c1;
        p3n1 = p3d1.join('');
        p3n2 = p3d2.join('');
    }

    var p3n3 = parseInt(p3n1) - parseInt(p3n2);
    var p3sp1 = p3n3.toString().split('');
    var p3sp2 = p3n2.toString().split('');

    var p3vc1 = [];
    for (var i = 0; i < parseInt(p3sp1[0]); i++) {
        p3vc1.push('<img src="img/i2_p189_u5a9.jpg">');
    }
    for (var i = 0; i < parseInt(p3sp2[0]); i++) {
        p3vc1.push('<img src="img/i3_p189_u5a9.jpg">');
    }
    for (var i = 0; i < parseInt(p3sp1[1]); i++) {
        p3vc1.push('<img src="img/i5_p189_u5a9.jpg">');
    }
    for (var i = 0; i < parseInt(p3sp2[1]); i++) {
        p3vc1.push('<img src="img/i4_p189_u5a9.jpg">');
    }
    $('#p3im1').html(p3vc1);

    var c2 = myArray1[7];
    var p3n4 = p3vec1[c2];
    var c3 = myArray2[8];
    var p3n5 = p3vec2[c3];
    var p3d3 = p3n4.toString().split('');
    var p3d4 = p3n5.toString().split('');
    if (p3d3[1] < p3d4[1]) {
        var p3c1 = p3d3[1];
        var p3c2 = p3d4[1];
        p3d3[1] = p3c2;
        p3d4[1] = p3c1;
        p3n4 = p3d3.join('');
        p3n5 = p3d4.join('');
    }
    var p3n6 = parseInt(p3n4) - parseInt(p3n5);
    var p3sp3 = p3n6.toString().split('');
    var p3sp4 = p3n5.toString().split('');
    var p3vc2 = [];
    for (var i = 0; i < parseInt(p3sp3[0]); i++) {
        p3vc2.push('<img src="img/i2_p189_u5a9.jpg">');
    }
    for (var i = 0; i < parseInt(p3sp4[0]); i++) {
        p3vc2.push('<img src="img/i3_p189_u5a9.jpg">');
    }
    for (var i = 0; i < parseInt(p3sp3[1]); i++) {
        p3vc2.push('<img src="img/i5_p189_u5a9.jpg">');
    }
    for (var i = 0; i < parseInt(p3sp4[1]); i++) {
        p3vc2.push('<img src="img/i4_p189_u5a9.jpg">');
    }
    $('#p3im2').html(p3vc2);

    var c4 = myArray1[0];
    var p3n7 = p3vec1[c4];
    var c5 = myArray2[1];
    var p3n8 = p3vec2[c5];
    var p3d5 = p3n7.toString().split('');
    var p3d6 = p3n8.toString().split('');
    if (p3d5[1] < p3d6[1]) {
        var p3c1 = p3d5[1];
        var p3c2 = p3d6[1];
        p3d5[1] = p3c2;
        p3d6[1] = p3c1;
        p3n7 = p3d5.join('');
        p3n8 = p3d6.join('');
    }
    var p3n9 = parseInt(p3n7) - parseInt(p3n8);
    var p3sp5 = p3n9.toString().split('');
    var p3sp6 = p3n8.toString().split('');
    var p3vc3 = [];
    for (var i = 0; i < parseInt(p3sp5[0]); i++) {
        p3vc3.push('<img src="img/i2_p189_u5a9.jpg">');
    }
    for (var i = 0; i < parseInt(p3sp6[0]); i++) {
        p3vc3.push('<img src="img/i3_p189_u5a9.jpg">');
    }
    for (var i = 0; i < parseInt(p3sp5[1]); i++) {
        p3vc3.push('<img src="img/i5_p189_u5a9.jpg">');
    }
    for (var i = 0; i < parseInt(p3sp6[1]); i++) {
        p3vc3.push('<img src="img/i4_p189_u5a9.jpg">');
    }
    $('#p3im3').html(p3vc3);

    var c6 = myArray1[2];
    var p3n10 = p3vec1[c6];
    var c7 = myArray2[3];
    var p3n11 = p3vec2[c7];
    var p3d7 = p3n10.toString().split('');
    var p3d8 = p3n11.toString().split('');
    if (p3d7[1] < p3d8[1]) {
        var p3c1 = p3d7[1];
        var p3c2 = p3d8[1];
        p3d7[1] = p3c2;
        p3d8[1] = p3c1;
        p3n10 = p3d7.join('');
        p3n11 = p3d8.join('');
    }
    var p3n12 = parseInt(p3n10) - parseInt(p3n11);
    var p3sp7 = p3n12.toString().split('');
    var p3sp8 = p3n11.toString().split('');
    var p3vc4 = [];
    for (var i = 0; i < parseInt(p3sp7[0]); i++) {
        p3vc4.push('<img src="img/i2_p189_u5a9.jpg">');
    }
    for (var i = 0; i < parseInt(p3sp8[0]); i++) {
        p3vc4.push('<img src="img/i3_p189_u5a9.jpg">');
    }
    for (var i = 0; i < parseInt(p3sp7[1]); i++) {
        p3vc4.push('<img src="img/i5_p189_u5a9.jpg">');
    }
    for (var i = 0; i < parseInt(p3sp8[1]); i++) {
        p3vc4.push('<img src="img/i4_p189_u5a9.jpg">');
    }
    $('#p3im4').html(p3vc4);


    var p41vec1 = (Math.floor(Math.random() * 40) + 10);
    var p41vec2 = (Math.floor(Math.random() * 40) + 10);
    $('#p4im1').html(p41vec1);
    $('#p4im2').html(p41vec2);
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

    var p4vec1 = [];
    var myArray3 = [];
    for (var i = 40; i < 98; i++) {
        p4vec1.push(i);
        myArray3.push(i - 40);
    }
    var i, j, k;
    for (i = myArray3.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray3[i - 1];
        myArray3[i - 1] = myArray3[j];
        myArray3[j] = k;
    }

    var p4vec2 = [];
    var myArray4 = [];
    for (var i = 10; i < 39; i++) {
        p4vec2.push(i);
        myArray4.push(i - 10);
    }
    var i, j, k;
    for (i = myArray4.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray4[i - 1];
        myArray4[i - 1] = myArray4[j];
        myArray4[j] = k;
    }

    var p4vc1 = [];
    //aleatorio literal 1
    for (var i = 1; i <= 1; i++) {
        var c = myArray3[i - 1];
        p4vc1.push(p4vec1[c]);
        var c1 = myArray4[i - 1];
        p4vc1.push(p4vec2[c1]);

    };
    var p4d1 = p4vc1[0].toString().split('');
    var p4d2 = p4vc1[1].toString().split('');
    if (p4d1[1] < p4d2[1]) {
        var p4c1 = p4d1[1];
        var p4c2 = p4d2[1];
        p4d1[1] = p4c2;
        p4d2[1] = p4c1;
        p4vc1[0] = p4d1.join('');
        p4vc1[1] = p4d2.join('');
    }
    for (var i = 0; i < p4vc1.length; i++) {
        $('#p4im' + (i + 3)).html(p4vc1[i]);
    }
    $(".drag2").draggable({
        rever: "invalid",
        helper: "clone",
        containment: "#p3act2"
    });
    $(".drop2").droppable({
        accept: ".drag2",
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode: multiply;");
            })
            $(this).find(".drop2").draggable({ disabled: true });
            str2 = (ui.draggable.attr("id")); //capturamos los IDS
            if (str2 == 'c1') {
                sum_total2 += 10;
            } else if (str2 == 'c2') {
                sum_total2 += 1;
            } else if (str2 == 'c3') {
                sum_total3 += 10;
            } else if (str2 == 'c4') {
                sum_total3 += 1;
            }
        }
    });
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var nlrd1 = [$('#nlrd0').val(), $('#nlrd1').val()];
        nlrd1 = nlrd1.join('');
        var nlrd2 = [$('#nlrd2').val(), $('#nlrd3').val()];
        nlrd2 = nlrd2.join('');
        var nlrd3 = [$('#nlrd4').val(), $('#nlrd5').val()];
        nlrd3 = nlrd3.join('');
        var p2cont1 = 0;
        if (nlrd1 == p2vec1[0]) {
            p2cont1++;
            f_ok($('#nlrd0'));
            f_ok($('#nlrd1'));
        } else {
            p2cont1;
            f_no($('#nlrd0'));
            f_no($('#nlrd1'));
        }
        if (nlrd2 == p2vec2[0]) {
            p2cont1++;
            f_ok($('#nlrd2'));
            f_ok($('#nlrd3'));
        } else {
            p2cont1;
            f_no($('#nlrd2'));
            f_no($('#nlrd3'));
        }
        if (nlrd3 == (p2vec1[0] + p2vec2[0])) {
            p2cont1++;
            f_ok($('#nlrd4'));
            f_ok($('#nlrd5'));
        } else {
            p2cont1;
            f_no($('#nlrd4'));
            f_no($('#nlrd5'));
        }
        var nlrd4 = [$('#nlrd10').val(), $('#nlrd11').val()];
        nlrd4 = nlrd4.join('');
        var nlrd5 = [$('#nlrd12').val(), $('#nlrd13').val()];
        nlrd5 = nlrd5.join('');
        var nlrd6 = [$('#nlrd14').val(), $('#nlrd15').val()];
        nlrd6 = nlrd6.join('');
        if (nlrd4 == p2vec1[1]) {
            p2cont1++;
            f_ok($('#nlrd10'));
            f_ok($('#nlrd11'));
        } else {
            p2cont1;
            f_no($('#nlrd10'));
            f_no($('#nlrd11'));
        }
        if (nlrd5 == p2vec2[1]) {
            p2cont1++;
            f_ok($('#nlrd12'));
            f_ok($('#nlrd13'));
        } else {
            p2cont1;
            f_no($('#nlrd12'));
            f_no($('#nlrd13'));
        }
        if (nlrd6 == (p2vec1[1] + p2vec2[1])) {
            p2cont1++;
            f_ok($('#nlrd14'));
            f_ok($('#nlrd15'));
        } else {
            p2cont1;
            f_no($('#nlrd14'));
            f_no($('#nlrd15'));
        }
        var nlrd7 = [$('#nlrd20').val(), $('#nlrd21').val()];
        nlrd7 = nlrd7.join('');
        var nlrd8 = [$('#nlrd22').val(), $('#nlrd23').val()];
        nlrd8 = nlrd8.join('');
        var nlrd9 = [$('#nlrd24').val(), $('#nlrd25').val()];
        nlrd9 = nlrd9.join('');
        if (nlrd7 == p2vec1[2]) {
            p2cont1++;
            f_ok($('#nlrd20'));
            f_ok($('#nlrd21'));
        } else {
            p2cont1;
            f_no($('#nlrd20'));
            f_no($('#nlrd21'));
        }
        if (nlrd8 == p2vec2[2]) {
            p2cont1++;
            f_ok($('#nlrd22'));
            f_ok($('#nlrd23'));
        } else {
            p2cont1;
            f_no($('#nlrd22'));
            f_no($('#nlrd23'));
        }
        if (nlrd9 == (p2vec1[2] + p2vec2[2])) {
            p2cont1++;
            f_ok($('#nlrd24'));
            f_ok($('#nlrd25'));
        } else {
            p2cont1;
            f_no($('#nlrd24'));
            f_no($('#nlrd25'));
        }
        var nlrd10 = [$('#nlrd30').val(), $('#nlrd31').val()];
        nlrd10 = nlrd10.join('');
        var nlrd11 = [$('#nlrd32').val(), $('#nlrd33').val()];
        nlrd11 = nlrd11.join('');
        var nlrd12 = [$('#nlrd34').val(), $('#nlrd35').val()];
        nlrd12 = nlrd12.join('');
        if (nlrd10 == p2vec1[3]) {
            p2cont1++;
            f_ok($('#nlrd30'));
            f_ok($('#nlrd31'));
        } else {
            p2cont1;
            f_no($('#nlrd30'));
            f_no($('#nlrd31'));
        }
        if (nlrd11 == p2vec2[3]) {
            p2cont1++;
            f_ok($('#nlrd32'));
            f_ok($('#nlrd33'));
        } else {
            p2cont1;
            f_no($('#nlrd32'));
            f_no($('#nlrd33'));
        }
        if (nlrd12 == (p2vec1[3] + p2vec2[3])) {
            p2cont1++;
            f_ok($('#nlrd34'));
            f_ok($('#nlrd35'));
        } else {
            p2cont1;
            f_no($('#nlrd34'));
            f_no($('#nlrd35'));
        }
        var result2 = (p2cont1 * 2) / 12;
        cor = cor + result2;
        inc = inc + (2 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');

        var nlrd13 = [$('#nlrd40').val(), $('#nlrd41').val()];
        nlrd13 = nlrd13.join('');
        var nlrd14 = [$('#nlrd42').val(), $('#nlrd43').val()];
        nlrd14 = nlrd14.join('');
        var nlrd15 = [$('#nlrd44').val(), $('#nlrd45').val()];
        nlrd15 = nlrd15.join('');
        var p3cont1 = 0;
        if (nlrd13 == p3n1) {
            p3cont1++;
            f_ok($('#nlrd40'));
            f_ok($('#nlrd41'));
        } else {
            p3cont1;
            f_no($('#nlrd40'));
            f_no($('#nlrd41'));
        }
        if (nlrd14 == p3n2) {
            p3cont1++;
            f_ok($('#nlrd42'));
            f_ok($('#nlrd43'));
        } else {
            p3cont1;
            f_no($('#nlrd42'));
            f_no($('#nlrd43'));
        }
        if (nlrd15 == (p3n1 - p3n2)) {
            p3cont1++;
            f_ok($('#nlrd44'));
            f_ok($('#nlrd45'));
        } else {
            p3cont1;
            f_no($('#nlrd44'));
            f_no($('#nlrd45'));
        }
        var nlrd16 = [$('#nlrd50').val(), $('#nlrd51').val()];
        nlrd16 = nlrd16.join('');
        var nlrd17 = [$('#nlrd52').val(), $('#nlrd53').val()];
        nlrd17 = nlrd17.join('');
        var nlrd18 = [$('#nlrd54').val(), $('#nlrd55').val()];
        nlrd18 = nlrd18.join('');
        if (nlrd16 == p3n4) {
            p3cont1++;
            f_ok($('#nlrd50'));
            f_ok($('#nlrd51'));
        } else {
            p3cont1;
            f_no($('#nlrd50'));
            f_no($('#nlrd51'));
        }
        if (nlrd17 == p3n5) {
            p3cont1++;
            f_ok($('#nlrd52'));
            f_ok($('#nlrd53'));
        } else {
            p3cont1;
            f_no($('#nlrd52'));
            f_no($('#nlrd53'));
        }
        if (nlrd18 == (p3n4 - p3n5)) {
            p3cont1++;
            f_ok($('#nlrd54'));
            f_ok($('#nlrd55'));
        } else {
            p3cont1;
            f_no($('#nlrd54'));
            f_no($('#nlrd55'));
        }
        var nlrd19 = [$('#nlrd60').val(), $('#nlrd61').val()];
        nlrd19 = nlrd19.join('');
        var nlrd20 = [$('#nlrd62').val(), $('#nlrd63').val()];
        nlrd20 = nlrd20.join('');
        var nlrd21 = [$('#nlrd64').val(), $('#nlrd65').val()];
        nlrd21 = nlrd21.join('');
        if (nlrd19 == p3n7) {
            p3cont1++;
            f_ok($('#nlrd60'));
            f_ok($('#nlrd61'));
        } else {
            p3cont1;
            f_no($('#nlrd60'));
            f_no($('#nlrd61'));
        }
        if (nlrd20 == p3n8) {
            p3cont1++;
            f_ok($('#nlrd62'));
            f_ok($('#nlrd63'));
        } else {
            p3cont1;
            f_no($('#nlrd62'));
            f_no($('#nlrd63'));
        }
        if (nlrd21 == (p3n7 - p3n8)) {
            p3cont1++;
            f_ok($('#nlrd64'));
            f_ok($('#nlrd65'));
        } else {
            p3cont1;
            f_no($('#nlrd64'));
            f_no($('#nlrd65'));
        }
        var nlrd22 = [$('#nlrd70').val(), $('#nlrd71').val()];
        nlrd22 = nlrd22.join('');
        var nlrd23 = [$('#nlrd72').val(), $('#nlrd73').val()];
        nlrd23 = nlrd23.join('');
        var nlrd24 = [$('#nlrd74').val(), $('#nlrd75').val()];
        nlrd24 = nlrd24.join('');
        if (nlrd22 == p3n10) {
            p3cont1++;
            f_ok($('#nlrd70'));
            f_ok($('#nlrd71'));
        } else {
            p3cont1;
            f_no($('#nlrd70'));
            f_no($('#nlrd71'));
        }
        if (nlrd23 == p3n11) {
            p3cont1++;
            f_ok($('#nlrd72'));
            f_ok($('#nlrd73'));
        } else {
            p3cont1;
            f_no($('#nlrd72'));
            f_no($('#nlrd73'));
        }
        if (nlrd24 == (p3n10 - p3n11)) {
            p3cont1++;
            f_ok($('#nlrd74'));
            f_ok($('#nlrd75'));
        } else {
            p3cont1;
            f_no($('#nlrd74'));
            f_no($('#nlrd75'));
        }
        var result3 = (p3cont1 * 2) / 12;
        cor = cor + result3;
        inc = inc + (2 - result3);
        $('#pre3a').val(result3.toFixed(2));
        $('#pre3a').css('display', '');


        var p4cont1 = 0;
        var p4dcon1 = $('#p4dcon1').val();
        var p4dcon2 = $('#p4dcon2').val();
        if (p4dcon1 == p41vec1) {
            p4cont1++;
            f_ok($('#p4dcon1'));
        } else {
            p4cont1;
            f_no($('#p4dcon1'));
        }
        if (p4dcon2 == p41vec2) {
            p4cont1++;
            f_ok($('#p4dcon2'));
        } else {
            p4cont1;
            f_no($('#p4dcon2'));
        }
        var p4dcon4 = $('#p4dcon4').val();
        var p4dcon5 = $('#p4dcon5').val();
        if (p4dcon4 == p41vec1) {
            p4cont1++;
            f_ok($('#p4dcon4'));
        } else {
            p4cont1;
            f_no($('#p4dcon4'));
        }
        if (p4dcon5 == p41vec2) {
            p4cont1++;
            f_ok($('#p4dcon5'));
        } else {
            p4cont1;
            f_no($('#p4dcon5'));
        }
        var p4dcon6 = $('#p4dcon6').val();
        if (p4dcon6 == (p41vec1 + p41vec2)) {
            p4cont1++;
            f_ok($('#p4dcon6'));
        } else {
            p4cont1;
            f_no($('#p4dcon6'));
        }
        var nlrd25 = [$('#nlrd81').val(), $('#nlrd82').val()];
        nlrd25 = nlrd25.join('');
        var nlrd26 = [$('#nlrd83').val(), $('#nlrd84').val()];
        nlrd26 = nlrd26.join('');
        var nlrd27 = [$('#nlrd85').val(), $('#nlrd86').val()];
        nlrd27 = nlrd27.join('');
        if (nlrd25 == p41vec1) {
            p4cont1++;
            f_ok($('#nlrd81'));
            f_ok($('#nlrd82'));
        } else {
            p4cont1;
            f_no($('#nlrd81'));
            f_no($('#nlrd82'));
        }
        if (nlrd26 == p41vec2) {
            p4cont1++;
            f_ok($('#nlrd83'));
            f_ok($('#nlrd84'));
        } else {
            p4cont1;
            f_no($('#nlrd83'));
            f_no($('#nlrd84'));
        }
        if (nlrd27 == (p41vec1 + p41vec2)) {
            p4cont1++;
            f_ok($('#nlrd85'));
            f_ok($('#nlrd86'));
        } else {
            p4cont1;
            f_no($('#nlrd85'));
            f_no($('#nlrd86'));
        }
        var p4dcon7 = $('#p4dcon7').val();
        var p4dcon8 = $('#p4dcon8').val();
        var p4dcon9 = $('#p4dcon9').val();
        if (p4dcon7 == p41vec1) {
            p4cont1++;
            f_ok($('#p4dcon7'));
        } else {
            p4cont1;
            f_no($('#p4dcon7'));
        }
        if (p4dcon8 == p41vec2) {
            p4cont1++;
            f_ok($('#p4dcon8'));
        } else {
            p4cont1;
            f_no($('#p4dcon8'));
        }
        if (p4dcon9 == (p41vec1 + p41vec2)) {
            p4cont1++;
            f_ok($('#p4dcon9'));
        } else {
            p4cont1;
            f_no($('#p4dcon9'));
        }
        if (sum_total == (p41vec1 + p41vec2)) {
            p4cont1++;
            f_ok($('#p4a1'));
        } else {
            p4cont1;
            f_no($('#p4a1'));
        }
        var p4dcon3 = $('#p4dcon3').val().toLowerCase();
        if (p4dcon3 == 'suma' || p4dcon3 == 'adición') {
            p4cont1++;
            f_ok($('#p4dcon3'));
        } else {
            p4cont1;
            f_no($('#p4dcon3'));
        }

        var p4dcon11 = $('#p4dcon11').val();
        var p4dcon12 = $('#p4dcon12').val();
        if (p4dcon11 == p4vc1[0]) {
            p4cont1++;
            f_ok($('#p4dcon11'));
        } else {
            p4cont1;
            f_no($('#p4dcon11'));
        }
        if (p4dcon12 == p4vc1[1]) {
            p4cont1++;
            f_ok($('#p4dcon12'));
        } else {
            p4cont1;
            f_no($('#p4dcon12'));
        }
        var p4dcon14 = $('#p4dcon14').val();
        var p4dcon15 = $('#p4dcon15').val();
        if (p4dcon14 == p4vc1[0]) {
            p4cont1++;
            f_ok($('#p4dcon14'));
        } else {
            p4cont1;
            f_no($('#p4dcon14'));
        }
        if (p4dcon15 == p4vc1[1]) {
            p4cont1++;
            f_ok($('#p4dcon15'));
        } else {
            p4cont1;
            f_no($('#p4dcon15'));
        }
        var p4dcon16 = $('#p4dcon16').val();
        if (p4dcon16 == (p4vc1[0] - p4vc1[1])) {
            p4cont1++;
            f_ok($('#p4dcon16'));
        } else {
            p4cont1;
            f_no($('#p4dcon16'));
        }
        var nlrd1 = [$('#nlrd91').val(), $('#nlrd92').val()];
        nlrd1 = nlrd1.join('');
        var nlrd2 = [$('#nlrd93').val(), $('#nlrd94').val()];
        nlrd2 = nlrd2.join('');
        var nlrd3 = [$('#nlrd95').val(), $('#nlrd96').val()];
        nlrd3 = nlrd3.join('');
        if (nlrd1 == p4vc1[0]) {
            p4cont1++;
            f_ok($('#nlrd91'));
            f_ok($('#nlrd92'));
        } else {
            p4cont1;
            f_no($('#nlrd91'));
            f_no($('#nlrd92'));
        }
        if (nlrd2 == p4vc1[1]) {
            p4cont1++;
            f_ok($('#nlrd93'));
            f_ok($('#nlrd94'));
        } else {
            p4cont1;
            f_no($('#nlrd93'));
            f_no($('#nlrd94'));
        }
        if (nlrd3 == (p4vc1[0] - p4vc1[1])) {
            p4cont1++;
            f_ok($('#nlrd95'));
            f_ok($('#nlrd96'));
        } else {
            p4cont1;
            f_no($('#nlrd95'));
            f_no($('#nlrd96'));
        }
        var p4dcon17 = $('#p4dcon17').val();
        var p4dcon18 = $('#p4dcon18').val();
        var p4dcon19 = $('#p4dcon19').val();
        if (p4dcon17 == p4vc1[0]) {
            p4cont1++;
            f_ok($('#p4dcon17'));
        } else {
            p4cont1;
            f_no($('#p4dcon17'));
        }
        if (p4dcon18 == p4vc1[1]) {
            p4cont1++;
            f_ok($('#p4dcon18'));
        } else {
            p4cont1;
            f_no($('#p4dcon18'));
        }
        if (p4dcon19 == (p4vc1[0] - p4vc1[1])) {
            p4cont1++;
            f_ok($('#p4dcon19'));
        } else {
            p4cont1;
            f_no($('#p4dcon19'));
        }
        if ((sum_total2 + sum_total3) + '-' + sum_total3 == p4vc1[0] + '-' + p4vc1[1]) {
            p4cont1++;
            f_ok($('#p4a2'));
        } else {
            p4cont1;
            f_no($('#p4a2'));
        }
        var p4dcon13 = $('#p4dcon13').val().toLowerCase();
        if (p4dcon13 == 'resta' || p4dcon13 == 'sustracción') {
            p4cont1++;
            f_ok($('#p4dcon13'));
        } else {
            p4cont1;
            f_no($('#p4dcon13'));
        }
        var result4 = (p4cont1 * 3) / 18;
        cor = cor + result4;
        inc = inc + (3 - result4);
        $('#pre4a').val(result4.toFixed(2));
        $('#pre4a').css('display', '');

        var p1cont1 = 0;
        var p1v1 = [1,2,3,4,5,6,21,22,23,24,26,27,28,29,31,33,37,39,41,43,45,47,49,51,53,55,57,59,61,62,64,65,67,68,70,71,73,74,76,77,79,80,82,83,85,86,88,89,91,92,94,95,97,98,100];
        var p1cont2=0;
        for (var i = 0; i < p1v1.length; i++) {
            if ($('.pint' + p1v1[i]).css('background-color') == 'rgb(85, 146, 78)' || $('.pint' + p1v1[i]).css('background-color') == 'rgb(249, 206, 56)' || $('.pint' + p1v1[i]).css('background-color') == 'rgb(50, 40, 250)' || $('.pint' + p1v1[i]).css('background-color') == 'rgb(241, 24, 44)') {
                p1cont2++;
                f_no($('#p1im' + p1v1[i]));
            }
        }
        if (p1cont2>0) {
            for (var i = 0; i < 100; i++) {
                p1cont1;
                f_no($('#p1im'+(i+1)));
            }
        }else{
            for (var i = 0; i < 13; i++) {
                if ($('.pint' + (i + 7)).css('background-color') == 'rgb(85, 146, 78)') {
                    p1cont1++;
                    f_ok($('#p1im' + (i + 7)));
                } else {
                    p1cont1;
                    f_no($('#p1im' + (i + 7)));
                }
            }

            var p1t1 = 20;
            for (var i = 0; i < 4; i++) {
                if ($('.pint' + (p1t1)).css('background-color') == 'rgb(249, 206, 56)') {
                    p1cont1++;
                    f_ok($('#p1im' + (p1t1)));
                } else {
                    p1cont1;
                    f_no($('#p1im' + (p1t1)));
                }
                p1t1 = p1t1 + 5;
            }
            var p1t2 = 60;
            for (var i = 0; i < 14; i++) {
                if ($('.pint' + (p1t2)).css('background-color') == 'rgb(50, 40, 250)') {
                    p1cont1++;
                    f_ok($('#p1im' + (p1t2)));
                } else {
                    p1cont1;
                    f_no($('#p1im' + (p1t2)));
                }
                p1t2 = p1t2 + 3;
            }

            var p1t3 = 32;
            for (var i = 0; i < 14; i++) {
                if ($('.pint' + (p1t3)).css('background-color') == 'rgb(241, 24, 44)') {
                    p1cont1++;
                    f_ok($('#p1im' + (p1t3)));
                } else {
                    p1cont1;
                    f_no($('#p1im' + (p1t3)));
                }
                p1t3 = p1t3 + 2;
            }

        }
        
        var result1 = (p1cont1 * 3) / 45;
        cor = cor + result1;
        inc = inc + (3 - result1);
        $('#pre1a').val(result1.toFixed(2));
        $('#pre1a').css('display', '');
        Calculo_nota();
    }
}