var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 4, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 4)
});
 function f_iniciar() {
    var a81cim1=['<img src="img/i1_p80_act81.jpg" class="img-responsive"><input  onkeypress="return soloNumeros1(event)"  type="text" id="a81dcon4" maxlength="1"  style=" text-align:center; width:  40px; border-radius:50%; border: 2px solid #7BB963;"><br>','<img src="img/i2_p80_act81.jpg" class="img-responsive"><input  onkeypress="return soloNumeros1(event)"  type="text" id="a81dcon5" maxlength="1"  style=" text-align:center; width:  40px; border-radius:50%; border: 2px solid #7BB963;"><br>', '<img src="img/i3_p80_act81.jpg" class="img-responsive"><input  onkeypress="return soloNumeros1(event)"  type="text" id="a81dcon6" maxlength="1"  style=" text-align:center; width:  40px; border-radius:50%; border: 2px solid #7BB963;"><br>'];
   	var myArray1 = ['0','1','2'];
    var i,j,k;
    for (i = myArray1.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray1[i - 1];
      myArray1[i - 1] = myArray1[j];
      myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 3 ; i++) {
      var c=myArray1[i-1];
      $("#a81im"+i).html(a81cim1[c]);
      
    };
    bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var a81dcon1=$('#a81dcon1').val();
      var a81dcon2=$('#a81dcon2').val();
      var a81dcon3=$('#a81dcon3').val();
      var a81dcon4=$('#a81dcon4').val();
      var a81dcon5=$('#a81dcon5').val();
      var a81dcon6=$('#a81dcon6').val();
      if (a81dcon1=='estudia') {
        cor++;
        f_ok($('#a81dcon1'));
      }else {
        inc++;
        f_no($('#a81dcon1'));
      }
      if (a81dcon2=='fútbol') {
        cor++;
        f_ok($('#a81dcon2'));
      }else {
        inc++;
        f_no($('#a81dcon2'));
      }
      if (a81dcon3=='duerme') {
        cor++;
        f_ok($('#a81dcon3'));
      }else {
        inc++;
        f_no($('#a81dcon3'));
      }
      if (a81dcon4=='2') {
        cor++;
        f_ok($('#a81dcon4'));
      }else {
        inc++;
        f_no($('#a81dcon4'));
      }
      if (a81dcon5=='3') {
        cor++;
        f_ok($('#a81dcon5'));
      }else {
        inc++;
        f_no($('#a81dcon5'));
      }
      if (a81dcon6=='1') {
        cor++;
        f_ok($('#a81dcon6'));
      }else {
        inc++;
        f_no($('#a81dcon6'));
      }
      var nota1_1=$('#nota1_1').val();
      if (!nota1_1) {
        inc=inc+4;
        f_no($('#nota1_1'));
      }else{
        cor=cor+parseFloat(nota1_1);
        inc=inc+(4-parseFloat(nota1_1));
        f_ok($('#nota1_1'));
      }
      Calculo_nota();
   }
}