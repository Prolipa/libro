var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;



// #region Pregunta1
var pal1=[
'<img class="img-responsive drag3 c1" alt="1" src="img/i10_p229_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 c2" alt="2" src="img/i11_p229_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 c2" alt="3" src="img/i12_p229_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 c2" alt="4" src="img/i13_p229_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 c2" alt="5" src="img/i14_p229_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 c3" alt="6" src="img/i15_p229_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">'];
var pal2=[
'<div><b>8 × 6</b></div>',
'<div><b>3 × 3</b></div>',
'<div><b>3 × 6</b></div>',
'<div><b>10 × 6</b></div>',
'<div><b>7 × 3</b></div>',
'<div><b>5 × 3</b></div>'
];

pal1.sort(f_randomico);
var p2vec1=['4','5','2','6','3','1'];
var p2aux2=[];
$(".textos").append(pal1);
var myArray2 = ['0','1','2','3','4','5'];
var i,j,k;
for (i = myArray2.length; i; i--) {
j = Math.floor(Math.random() * i);
k = myArray2[i - 1];
myArray2[i - 1] = myArray2[j];
myArray2[j] = k;
}
//aleatorio literal 1
for (var i = 1; i <= 6 ; i++) {
var c1=myArray2[i-1];
$(".p2cim1"+i).html(pal2[c1]);
p2aux2.push(p2vec1[c1]);

};
$(".drag3").draggable({
revert:"invalid",
zIndex:5,
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
    var p2im1=$('.p2im1 > img').attr('alt');
    var p2cont1=0;
    if(p2im1==p2aux2[0]){
        p2cont1++;
        f_ok($('.p2im1'));
    }else{
        f_no($('.p2im1'));
    }
    var p2im2=$('.p2im2 > img').attr('alt');
    if(p2im2==p2aux2[1]){
        p2cont1++;
        f_ok($('.p2im2'));
    }else{
        f_no($('.p2im2'));
    }
    var p2im3=$('.p2im3 > img').attr('alt');
    if(p2im3==p2aux2[2]){
        p2cont1++;
        f_ok($('.p2im3'));
    }else{
        f_no($('.p2im3'));
    }
    var p2im4=$('.p2im4 > img').attr('alt');
    if(p2im4==p2aux2[3]){
        p2cont1++;
        f_ok($('.p2im4'));
    }else{
        f_no($('.p2im4'));
    }
    var p2im5=$('.p2im5 > img').attr('alt');
    if(p2im5==p2aux2[4]){
        p2cont1++;
        f_ok($('.p2im5'));
    }else{
        f_no($('.p2im5'));
    }
    var p2im6=$('.p2im6 > img').attr('alt');
    if(p2im6==p2aux2[5]){
        p2cont1++;
        f_ok($('.p2im6'));
    }else{
        f_no($('.p2im6'));
    }

    var total= ((p2cont1*4)/6)
    tpre1 = total;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
var p20vec1=[];
for (var i = 0; i < 5; i++) {
    n1 = parseInt(Math.random() * 30 + 10);
    p20vec1.push(n1);
    $('#p2n' + [i] + '').html(n1);
}
function pregunta2() {
  p20vec2=['a','b','c','d','e']
    var cor = 0;
    for (var i = 0; i < 5; i++) {
        var num = parseInt($('#p2res'+p20vec2[i]+''+ [i] + '').val());
        var num1 = parseInt($('#p2res'+p20vec2[i]+''+ [i+1] + '').val());
        var res=num*num1;
        if (p20vec1[i] == res) {
            f_ok($('#p2res'+p20vec2[i]+''+ [i] + ''));
            f_ok($('#p2res'+p20vec2[i]+''+ [i+1] + ''));
            cor++;
        } else {
            f_no($('#p2res'+p20vec2[i]+''+ [i] + ''));
            f_no($('#p2res'+p20vec2[i]+''+ [i+1] + ''));
            cor;
        }
    }

    for (var i = 0; i < 5; i++) {
        var num = parseInt($('#p2res'+p20vec2[i]+'1'+ [i] + '').val());
        var num1 = parseInt($('#p2res'+p20vec2[i]+'1'+ [i+1] + '').val());
        var res=num*num1;
        if (p20vec1[i] == res) {
            f_ok($('#p2res'+p20vec2[i]+'1'+ [i] + ''));
            f_ok($('#p2res'+p20vec2[i]+'1'+ [i+1] + ''));
            cor++;
        } else {
            f_no($('#p2res'+p20vec2[i]+'1'+ [i] + ''));
            f_no($('#p2res'+p20vec2[i]+'1'+ [i+1] + ''));
            cor;
        }
    }
    var result2 = (cor * 2.5) / 10;
    tpre2 = parseFloat(result2);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3
p3vec1=
[
'<li class="col-sm-6">9 <span style="color:#E23399">×</span>3 = 27                                    <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas3" ><input type="hidden" style="color:blue" class="solucion3" value="si"><br><br></li>',
'<li class="col-sm-6">6 <span style="color:#E23399">×</span>6 = 12<input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas3" ><input type="hidden" style="color:blue" class="solucion3" value="36"><br><br></li>',
'<li class="col-sm-6">7 <span style="color:#E23399">×</span>3 = 21<input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas3" ><input type="hidden" style="color:blue" class="solucion3" value="si"><br><br></li>',
'<li class="col-sm-6">6 <span style="color:#E23399">×</span>9 = 54<input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas3" ><input type="hidden" style="color:blue" class="solucion3" value="si"><br><br></li>',
'<li class="col-sm-6">3 <span style="color:#E23399">×</span>3 = 6<input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas3" ><input type="hidden" style="color:blue" class="solucion3" value="9"><br><br></li>',
'<li class="col-sm-6">10 <span style="color:#E23399">×</span>6 = 16<input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas3" ><input type="hidden" style="color:blue" class="solucion3" value="60"><br><br></li>',
'<li class="col-sm-6">6 <span style="color:#E23399">×</span>8 = 48<input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas3" ><input type="hidden" style="color:blue" class="solucion3" value="si"><br><br></li>',
'<li class="col-sm-6">6 <span style="color:#E23399">×</span>3 = 18<input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas3" ><input type="hidden" style="color:blue" class="solucion3" value="si"><br><br></li>'
];
p3vec1.sort(f_randomico);
$('#li3').html(p3vec1);
function pregunta3() {
    var respuestas = document.getElementsByClassName("respuestas3");
    var soluciones = document.getElementsByClassName("solucion3");
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (
            verificar_contenido(
                respuestas[i].value.toLowerCase(),
                soluciones[i].value.toLowerCase().split("*")
            )
        ) {
            respuestas[i].classList.add("valid");
            respuestas[i].classList.remove("no-valid");
            nota += valor;
        } else {
            respuestas[i].classList.add("no-valid");
            respuestas[i].classList.remove("valid");
        }
    }
    tpre3 = ((nota / 10) * 2.5);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4

function pregunta4() {
    var respuestas = document.getElementsByClassName("respuestas4");
    var soluciones = document.getElementsByClassName("solucion4");
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (
            verificar_contenido(
                respuestas[i].value.toLowerCase(),
                soluciones[i].value.toLowerCase().split("*")
            )
        ) {
            respuestas[i].classList.add("valid");
            respuestas[i].classList.remove("no-valid");
            nota += valor;
        } else {
            respuestas[i].classList.add("no-valid");
            respuestas[i].classList.remove("valid");
        }
    }
    tpre4 = ((nota / 10) * 2.5);
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion


// #region Calculo Nota Final
function NotaFinal() {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    var Nf = parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3) + parseFloat(tpre4);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
}