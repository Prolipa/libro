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
    var p1vec1=['<p>espiona <input type="text" id="p1dcon1" maxlength="1" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 30px;" name=""> e</p>',
    '<p>ma <input type="text" maxlength="1" id="p1dcon2" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 30px;" name=""> isterio</p>',
    '<p>pere <input type="text" maxlength="1" id="p1dcon3" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 30px;" name=""> il</p>',
    '<p>exi <input type="text" maxlength="1" id="p1dcon4" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 30px;" name=""> encia</p>',
    '<p>jil <input type="text" maxlength="1" id="p1dcon5" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 30px;" name=""> uero</p>',
    '<p>diri <input type="text" maxlength="1" id="p1dcon6" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 30px;" name=""> ible</p>',
    '<p>paisa <input type="text" maxlength="1" id="p1dcon7" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 30px;" name=""> ístico</p>',
    '<p>má <input type="text" maxlength="1" id="p1dcon8" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 30px;" name=""> ico</p>',
    '<p><input type="text" maxlength="1" id="p1dcon9" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 30px;" name=""> inete</p>',
    '<p><input type="text" maxlength="1" id="p1dcon10" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 30px;" name=""> entío</p>',
    '<p>persona <input type="text" maxlength="1" id="p1dcon11" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 30px;" name=""> e</p>',
    '<p>mensa <input type="text" maxlength="1" id="p1dcon12" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 30px;" name=""> e</p>'];
    var myArray1 = ['0','1','2','3','4','5','6','7','8','9','10','11'];
       var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
    //aleatorio literal 1
        for (var i = 1; i <= 12 ; i++) {
            var c=myArray1[i-1];
            $("#p1im"+i).html(p1vec1[c]);
            
        };

    bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      
      var p1dcon1=$('#p1dcon1').val().toLowerCase();
      var p1dcon2=$('#p1dcon2').val().toLowerCase();
      var p1dcon3=$('#p1dcon3').val().toLowerCase();
      var p1dcon4=$('#p1dcon4').val().toLowerCase();
      var p1dcon5=$('#p1dcon5').val().toLowerCase();
      var p1dcon6=$('#p1dcon6').val().toLowerCase();
      var p1dcon7=$('#p1dcon7').val().toLowerCase();
      var p1dcon8=$('#p1dcon8').val().toLowerCase();
      var p1dcon9=$('#p1dcon9').val().toLowerCase();
      var p1dcon10=$('#p1dcon10').val().toLowerCase();
      var p1dcon11=$('#p1dcon11').val().toLowerCase();
      var p1dcon12=$('#p1dcon12').val().toLowerCase();
      if (p1dcon1=='j') {
        cor++;
        f_ok($('#p1dcon1'));
      }else{
        inc++;
        f_no($('#p1dcon1'));
      }
      if (p1dcon2=='g') {
        cor++;
        f_ok($('#p1dcon2'));
      }else{
        inc++;
        f_no($('#p1dcon2'));
      }

      if (p1dcon3=='j') {
        cor++;
        f_ok($('#p1dcon3'));
      }else{
        inc++;
        f_no($('#p1dcon3'));
      }
      if (p1dcon4=='g') {
        cor++;
        f_ok($('#p1dcon4'));
      }else{
        inc++;
        f_no($('#p1dcon4'));
      }
      if (p1dcon5=='g') {
        cor++;
        f_ok($('#p1dcon5'));
      }else{
        inc++;
        f_no($('#p1dcon5'));
      }
      if (p1dcon6=='g') {
        cor++;
        f_ok($('#p1dcon6'));
      }else{
        inc++;
        f_no($('#p1dcon6'));
      }
      if (p1dcon7=='j') {
        cor++;
        f_ok($('#p1dcon7'));
      }else{
        inc++;
        f_no($('#p1dcon7'));
      }
      if (p1dcon8=='g') {
        cor++;
        f_ok($('#p1dcon8'));
      }else{
        inc++;
        f_no($('#p1dcon8'));
      }
      if (p1dcon9=='j') {
        cor++;
        f_ok($('#p1dcon9'));
      }else{
        inc++;
        f_no($('#p1dcon9'));
      }
      if (p1dcon10=='g') {
        cor++;
        f_ok($('#p1dcon10'));
      }else{
        inc++;
        f_no($('#p1dcon10'));
      }
      if (p1dcon11=='j') {
        cor++;
        f_ok($('#p1dcon11'));
      }else{
        inc++;
        f_no($('#p1dcon11'));
      }
      if (p1dcon12=='j') {
        cor++;
        f_ok($('#p1dcon12'));
      }else{
        inc++;
        f_no($('#p1dcon12'));
      }
      Calculo_nota();
   }
}
