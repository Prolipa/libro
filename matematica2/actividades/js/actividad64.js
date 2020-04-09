var n1=0,sum_total=0,cont=0,ejer=1,itemsT=4,cor=0,inc=0,str='',calificacion=10;
var nump1=0;
var t=0;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
function st()
{
  t=nn(nump1);
  
}
window.onload=st;
 function f_iniciar() {

    var numero = parseInt((Math.random() * 9) + 1);
    var numero1 = parseInt((Math.random() * 9) + 1);
    var a64cim1=[];
    nump1=(numero*10)+numero1;
    for (var i = 0; i < numero; i++) {
      a64cim1.push('<img src="img/i1_p69_act64.jpg" class="img-responsive" alt="">');
    }
    for (var i = 0; i < numero1; i++) {
      a64cim1.push('<img src="img/i2_p69_act64.jpg" alt="">');
    }
    $('#a64im1').html(a64cim1);
   	bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var a64dcon1=$('#a64dcon1').val();
      var a64dcon2=$('#a64dcon2').val();
      var a64dcon3=$('#a64dcon3').val();
      var a64dcon4=$('#a64dcon4').val();
      if (a64dcon1==(numero*10)) {
        cor++;
        f_ok($('#a64dcon1'));
      }else {
        inc++;
        f_no($('#a64dcon1'));
      }
      if (a64dcon2==(numero1)) {
        cor++;
        f_ok($('#a64dcon2'));
      }else {
        inc++;
        f_no($('#a64dcon2'));
      }
      if (a64dcon3==((numero*10)+numero1)) {
        cor++;
        f_ok($('#a64dcon3'));
      }else {
        inc++;
        f_no($('#a64dcon3'));
      }
      if (a64dcon4==t) {
        cor++;
        f_ok($('#a64dcon4'));
      }else {
        inc++;
        f_no($('#a64dcon4'));
      }
      Calculo_nota();
   }
}