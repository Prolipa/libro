var n1=0,sum_total=0,cont=0,ejer=1,itemsT=5,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
 function f_iniciar() {
    var numero = parseInt((Math.random() * 20) + 10);
    var numero1 = parseInt((Math.random() * 9) + 1);
    var numero2= numero - numero1;
    var numero3 = parseInt((Math.random() * 20) + 10);
    var numero4 = parseInt((Math.random() * 9) + 1);
    var numero5= numero3 - numero4;
    $('#a112im1').html(numero);
    $('#a112im2').html(numero1);
    $('#a112im3').html(numero3);
    $('#a112im4').html(numero4);

    var a112vec1=[];
    var a112vec2=[];
    for (var i = 0; i < numero2; i++) {
      a112vec1.push('<img class="img-responsive" src="img/i1_p111_act112.jpg" style="display:inline-block;" alt="">')
    }
    for (var i = 0; i < numero1; i++) {
      a112vec1.push('<img class="img-responsive" src="img/i2_p111_act112.jpg" style="display:inline-block;" alt="">')
    }
    $('#a112im5').html(a112vec1);
    for (var i = 0; i < numero5; i++) {
      a112vec2.push('<img class="img-responsive" src="img/i1_p111_act112.jpg" style="display:inline-block;" alt="">')
    }
    for (var i = 0; i < numero4; i++) {
      a112vec2.push('<img class="img-responsive" src="img/i2_p111_act112.jpg" style="display:inline-block;" alt="">')
    }
    $('#a112im6').html(a112vec2);


    var aux1=numero.toString().split('');
    var aux2=numero2.toString().split('');
    $('#a112dcon3').val(aux1[0]);
    $('#a112dcon4').val(aux1[1]);
    $('#a112dcon5').val(numero1);
    if (aux2.length=='1') {
      $('#a112dcon6').val('0');
      $('#a112dcon7').val(aux2[0]);
    }else{
      $('#a112dcon6').val(aux2[0]);
      $('#a112dcon7').val(aux2[1]);
    }
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a112dcon1=$('#a112dcon1').val();
        var a112dcon2=$('#a112dcon2').val();
        
        if (a112dcon1==numero2) {
          cor++
          f_ok($('#a112dcon1'));
        }else{
          inc++;
          f_no($('#a112dcon1'));
        }
        if (a112dcon2==numero5) {
          cor++
          f_ok($('#a112dcon2'));
        }else{
          inc++;
          f_no($('#a112dcon2'));
        }

        var a112dcon8=[$('#a112dcon8').val(),$('#a112dcon9').val()];
        var a112dcon10=$('#a112dcon10').val();
        var a112dcon9=[$('#a112dcon11').val(),$('#a112dcon12').val()];
        a112dcon8=a112dcon8.join('');
        a112dcon9=a112dcon9.join('');
        if (a112dcon8==numero3) {
          cor++
          f_ok($('#a112dcon8'));
          f_ok($('#a112dcon9'));
        }else{
          inc++;
          f_no($('#a112dcon8'));
          f_no($('#a112dcon9'));
        }
        if (a112dcon10==numero4) {
          cor++
          f_ok($('#a112dcon10'));
        }else{
          inc++;
          f_no($('#a112dcon10'));
        }
        if (a112dcon9==numero5) {
          cor++
          f_ok($('#a112dcon11'));
          f_ok($('#a112dcon12'));
        }else{
          inc++;
          f_no($('#a112dcon11'));
          f_no($('#a112dcon12'));
        }
        Calculo_nota();
   }
}