var n1=0,sum_total=0,cont=0,ejer=1,itemsT=7,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
 function f_iniciar() {
    var numero = parseInt((Math.random() * 5) + 1);
    var numero1 = parseInt((Math.random() * 4) + 1);
    var numero2= numero + numero1;
    var a108vec1=['<img src="img/i1_p107_act108.jpg" class="img-responsive" style="display: inline-block;">'];
    for (var i =0; i < numero; i++) {
      a108vec1.push('<img src="img/i2_p107_act108.jpg" class="img-responsive" style="display: inline-block;">');
    }
    var a108vec2=[];
    for (var i =0; i < numero1; i++) {
      a108vec2.push('<img src="img/i2_p107_act108.jpg" class="img-responsive" style="display: inline-block;">');
    }
    $('#a108im1').html(a108vec1);
    $('#a108im11').html(a108vec2);

    var numero3 = parseInt((Math.random() * 5) + 1);
    var numero4 = parseInt((Math.random() * 4) + 1);
    var numero5= numero3 + numero4;
    var a108vec3=['<img src="img/i1_p107_act108.jpg" class="img-responsive" style="display: inline-block;">','<img src="img/i1_p107_act108.jpg" class="img-responsive" style="display: inline-block;">'];
    for (var i =0; i < numero3; i++) {
      a108vec3.push('<img src="img/i2_p107_act108.jpg" class="img-responsive" style="display: inline-block;">');
    }
    var a108vec4=[];
    for (var i =0; i < numero4; i++) {
      a108vec4.push('<img src="img/i2_p107_act108.jpg" class="img-responsive" style="display: inline-block;">');
    }
    $('#a108im2').html(a108vec3);
    $('#a108im12').html(a108vec4);

    var numero6 = parseInt((Math.random() * 5) + 1);
    var numero7 = parseInt((Math.random() * 4) + 1);
    var numero8= numero6 + numero7;
    var a108vec5=['<img src="img/i1_p107_act108.jpg" class="img-responsive" style="display: inline-block;">'];
    for (var i =0; i < numero6; i++) {
      a108vec5.push('<img src="img/i2_p107_act108.jpg" class="img-responsive" style="display: inline-block;">');
    }
    var a108vec6=[];
    for (var i =0; i < numero7; i++) {
      a108vec6.push('<img src="img/i2_p107_act108.jpg" class="img-responsive" style="display: inline-block;">');
    }
    $('#a108im3').html(a108vec5);
    $('#a108im13').html(a108vec6);

    $('#a108dcon1').val('1');
    $('#a108dcon2').val(numero);
    $('#a108dcon3').val(numero1);
    $('#a108dcon4').val('1');
    $('#a108dcon5').val(numero2);

    $('#a108dcon6').val('2');
    $('#a108dcon7').val(numero3);
    $('#a108dcon8').val(numero4);

    
    
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a108dcon9=$('#a108dcon9').val();
        var a108dcon10=$('#a108dcon10').val();
        var a108dcon14=$('#a108dcon14').val();
        var a108dcon15=$('#a108dcon15').val();
        var a108dcon11= $('#a108dcon11').val();
        var a108dcon12= $('#a108dcon12').val();
        var a108dcon13= $('#a108dcon13').val();
        
        if (a108dcon9=='2') {
          cor++
          f_ok($('#a108dcon9'));
        }else{
          inc++;
          f_no($('#a108dcon9'));
        }
        if (a108dcon10==numero5) {
          cor++
          f_ok($('#a108dcon10'));
        }else{
          inc++;
          f_no($('#a108dcon10'));
        }
        if (a108dcon14=='1') {
          cor++
          f_ok($('#a108dcon14'));
        }else{
          inc++;
          f_no($('#a108dcon14'));
        }
        if (a108dcon15==numero8) {
          cor++
          f_ok($('#a108dcon15'));
        }else{
          inc++;
          f_no($('#a108dcon15'));
        }
        if (a108dcon11=='1') {
          cor++
          f_ok($('#a108dcon11'));
        }else{
          inc++;
          f_no($('#a108dcon11'));
        }
        if (a108dcon12==numero6) {
          cor++
          f_ok($('#a108dcon12'));
        }else{
          inc++;
          f_no($('#a108dcon12'));
        }
        if (a108dcon13==numero7) {
          cor++
          f_ok($('#a108dcon13'));
        }else{
          inc++;
          f_no($('#a108dcon13'));
        }
        Calculo_nota();
   }
}