var n1=0,sum_total=0,cont=0,ejer=1,itemsT=4,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}

 function f_iniciar() {
    var a82cim1=['<img src="img/i1_p81_act82.jpg" class="img-responsive"><input  onkeypress="return soloNumeros1(event)"  type="text" id="a82dcon1" maxlength="1"  style="border-radius: 20px; text-align:center; width:  40px; height: 40px; border: 2px dotted #0098C4;">','<img src="img/i2_p81_act82.jpg" class="img-responsive"><input  onkeypress="return soloNumeros1(event)"  type="text" id="a82dcon2" maxlength="1"  style="border-radius: 20px; text-align:center; width:  40px; height: 40px; border: 2px dotted #0098C4;">'];
    var a82cim2=['<img src="img/i3_p81_act82.jpg" class="img-responsive"><input  onkeypress="return soloNumeros1(event)"  type="text" id="a82dcon3" maxlength="1"  style="border-radius: 20px; text-align:center; width:  40px; height: 40px; border: 2px dotted #0098C4;">','<img src="img/i4_p81_act82.jpg" class="img-responsive"><input  onkeypress="return soloNumeros1(event)"  type="text" id="a82dcon4" maxlength="1"  style="border-radius: 20px; text-align:center; width:  40px; height: 40px; border: 2px dotted #0098C4;">'];
   	var myArray1 = ['0','1'];
    var i,j,k;
    for (i = myArray1.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray1[i - 1];
      myArray1[i - 1] = myArray1[j];
      myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 2 ; i++) {
      var c=myArray1[i-1];
      $("#a82im"+i).html(a82cim1[c]);
      
    };
    var myArray2 = ['0','1'];
    var i,j,k;
    for (i = myArray2.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray2[i - 1];
      myArray2[i - 1] = myArray2[j];
      myArray2[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 2 ; i++) {
      var c=myArray2[i-1];
      $("#a82im1"+i).html(a82cim2[c]);
      
    };
    bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var a82dcon1=$('#a82dcon1').val();
      var a82dcon2=$('#a82dcon2').val();
      var a82dcon3=$('#a82dcon3').val();
      var a82dcon4=$('#a82dcon4').val();
      
      if (a82dcon1=='1') {
        cor++;
        f_ok($('#a82dcon1'));
      }else {
        inc++;
        f_no($('#a82dcon1'));
      }
      if (a82dcon2=='2') {
        cor++;
        f_ok($('#a82dcon2'));
      }else {
        inc++;
        f_no($('#a82dcon2'));
      }
      if (a82dcon3=='2') {
        cor++;
        f_ok($('#a82dcon3'));
      }else {
        inc++;
        f_no($('#a82dcon3'));
      }
      if (a82dcon4=='1') {
        cor++;
        f_ok($('#a82dcon4'));
      }else {
        inc++;
        f_no($('#a82dcon4'));
      }
      
      Calculo_nota();
   }
}