var n1=0,sum_total=0,cont=0,ejer=1,itemsT=12,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}

function f_iniciar() {
    var numero = parseInt((Math.random() * 20) + 11);
    var numero1=numero.toString().split('');
    var a69cim1=[];
    for (var i =0; i < numero; i++) {
      a69cim1.push('<img src="img/i1_p71_act69.jpg" alt="">');

    }

    $('#a69im1').html(a69cim1);
    var numero2 = parseInt((Math.random() * 20) + 11);
    var numero3=numero2.toString().split('');
    var a69cim2=[];
    for (var i =0; i < numero2; i++) {
      a69cim2.push('<img src="img/i2_p71_act69.jpg" alt="">');
    }
    $('#a69im2').html(a69cim2);

   	bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var a69dcon1=$('#a69dcon1').val();
      var a69dcon2=$('#a69dcon2').val();
      var a69dcon3=$('#a69dcon3').val();
      var a69dcon4=$('#a69dcon4').val();
      var a69dcon5=$('#a69dcon5').val();
      var a69dcon6=$('#a69dcon6').val();
      var a69dcon11=$('#a69dcon11').val();
      var a69dcon12=$('#a69dcon12').val();
      var a69dcon13=$('#a69dcon13').val();
      var a69dcon14=$('#a69dcon14').val();
      var a69dcon15=$('#a69dcon15').val();
      var a69dcon16=$('#a69dcon16').val();

      if (a69dcon1==numero1[0]) {
        cor++;
        f_ok($('#a69dcon1'));
      }else {
        inc++;
        f_no($('#a69dcon1'));
      }
      if (a69dcon2==numero1[1]) {
        cor++;
        f_ok($('#a69dcon2'));
      }else {
        inc++;
        f_no($('#a69dcon2'));
      }
      if (a69dcon3==numero) {
        cor++;
        f_ok($('#a69dcon3'));
      }else {
        inc++;
        f_no($('#a69dcon3'));
      }
      if (a69dcon4==(parseInt(numero1[0])*10)) {
        cor++;
        f_ok($('#a69dcon4'));
      }else {
        inc++;
        f_no($('#a69dcon4'));
      }
      if (a69dcon5==numero1[1]) {
        cor++;
        f_ok($('#a69dcon5'));
      }else {
        inc++;
        f_no($('#a69dcon5'));
      }
      if (a69dcon6==numero) {
        cor++;
        f_ok($('#a69dcon6'));
      }else {
        inc++;
        f_no($('#a69dcon6'));
      }
      if (a69dcon11==numero3[0]) {
        cor++;
        f_ok($('#a69dcon11'));
      }else {
        inc++;
        f_no($('#a69dcon11'));
      }
      if (a69dcon12==numero3[1]) {
        cor++;
        f_ok($('#a69dcon12'));
      }else {
        inc++;
        f_no($('#a69dcon12'));
      }
      if (a69dcon13==numero2) {
        cor++;
        f_ok($('#a69dcon13'));
      }else {
        inc++;
        f_no($('#a69dcon13'));
      }
      if (a69dcon14==(parseInt(numero3[0])*10)) {
        cor++;
        f_ok($('#a69dcon14'));
      }else {
        inc++;
        f_no($('#a69dcon14'));
      }
      if (a69dcon15==numero3[1]) {
        cor++;
        f_ok($('#a69dcon15'));
      }else {
        inc++;
        f_no($('#a69dcon15'));
      }
      if (a69dcon16==numero2) {
        cor++;
        f_ok($('#a69dcon16'));
      }else {
        inc++;
        f_no($('#a69dcon16'));
      }
      Calculo_nota();
   }
}