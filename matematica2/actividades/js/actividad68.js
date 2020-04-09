var n1=0,sum_total=0,cont=0,ejer=1,itemsT=15,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';

f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}

function f_iniciar() {
    var numero = parseInt((Math.random() * 21) + 10);
    var numero1=numero.toString().split('');
    var a68cim1=[];
    for (var i =0; i < numero; i++) {
      a68cim1.push('<img src="img/i1_p71_act68.jpg" alt="">');
    }
    $('#a68im1').html(a68cim1);
   	bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var a68dcon1=$('#a68dcon1').val();
      var a68dcon2=$('#a68dcon2').val();
      var a68dcon3=$('#a68dcon3').val();
      var a68dcon4=$('#a68dcon4').val();
      var a68dcon5=$('#a68dcon5').val();
      var a68dcon6=$('#a68dcon6').val();
      var a68dcon7=$('#a68dcon7').val();
      var a68dcon21=$('#a68dcon21').val();
      var a68dcon22=$('#a68dcon22').val();
      var a68dcon11=$('#a68dcon11').val();
      var a68dcon12=$('#a68dcon12').val();
      var a68dcon13=$('#a68dcon13').val();
      var a68dcon14=$('#a68dcon14').val();
      var a68dcon15=$('#a68dcon15').val();
      var a68dcon16=$('#a68dcon16').val();

      if (a68dcon1==numero1[0]) {
        cor++;
        f_ok($('#a68dcon1'));
      }else {
        inc++;
        f_no($('#a68dcon1'));
      }
      if (a68dcon2==numero1[1]) {
        cor++;
        f_ok($('#a68dcon2'));
      }else {
        inc++;
        f_no($('#a68dcon2'));
      }
      if (a68dcon3==numero) {
        cor++;
        f_ok($('#a68dcon3'));
      }else {
        inc++;
        f_no($('#a68dcon3'));
      }
      if (a68dcon4==(parseInt(numero1[0])*10)) {
        cor++;
        f_ok($('#a68dcon4'));
      }else {
        inc++;
        f_no($('#a68dcon4'));
      }
      if (a68dcon5==numero1[1]) {
        cor++;
        f_ok($('#a68dcon5'));
      }else {
        inc++;
        f_no($('#a68dcon5'));
      }
      if (a68dcon6==numero) {
        cor++;
        f_ok($('#a68dcon6'));
      }else {
        inc++;
        f_no($('#a68dcon6'));
      }
      if (a68dcon7==numero) {
        cor++;
        f_ok($('#a68dcon7'));
      }else {
        inc++;
        f_no($('#a68dcon7'));
      }
      if (a68dcon21==numero1[0]) {
        cor++;
        f_ok($('#a68dcon21'));
      }else {
        inc++;
        f_no($('#a68dcon21'));
      }
      if (a68dcon22==numero1[1]) {
        cor++;
        f_ok($('#a68dcon22'));
      }else {
        inc++;
        f_no($('#a68dcon22'));
      }
      if (a68dcon11==numero1[0]) {
        cor++;
        f_ok($('#a68dcon11'));
      }else {
        inc++;
        f_no($('#a68dcon11'));
      }
      if (a68dcon12==numero1[1]) {
        cor++;
        f_ok($('#a68dcon12'));
      }else {
        inc++;
        f_no($('#a68dcon12'));
      }
      if (a68dcon13==numero) {
        cor++;
        f_ok($('#a68dcon13'));
      }else {
        inc++;
        f_no($('#a68dcon13'));
      }
      if (a68dcon14==(parseInt(numero1[0])*10)) {
        cor++;
        f_ok($('#a68dcon14'));
      }else {
        inc++;
        f_no($('#a68dcon14'));
      }
      if (a68dcon15==numero1[1]) {
        cor++;
        f_ok($('#a68dcon15'));
      }else {
        inc++;
        f_no($('#a68dcon15'));
      }
      if (a68dcon16==numero) {
        cor++;
        f_ok($('#a68dcon16'));
      }else {
        inc++;
        f_no($('#a68dcon16'));
      }
      Calculo_nota();
   }
}