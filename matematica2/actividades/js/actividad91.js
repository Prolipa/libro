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
    validNumero(0, 5, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 5)
});
 function f_iniciar() {
    var numero5 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
    var myArray1 = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19'];
    var a91vec1=[];
    var i,j,k;
    for (i = myArray1.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray1[i - 1];
      myArray1[i - 1] = myArray1[j];
      myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 5 ; i++) {
      var c=myArray1[i-1];
      $("#a91im"+(i)).html(numero5[c]);
      a91vec1.push(numero5[c]);
    };
    var numero = a91vec1[0];
    var numero1 = a91vec1[1];
    var numero2 = a91vec1[2];
    var numero3 = a91vec1[3];
    var numero4 = a91vec1[4];
    $("#a91im6").html(numero3);
    a91vec1=a91vec1.sort((a,b)=>a-b);
    var a91vec2=[];
    for (var i = 0; i < a91vec1.length; i++) {
      if (a91vec1[i]==numero) {
        a91vec2.push('cuentos');
      }else if (a91vec1[i]==numero1) {
        a91vec2.push('novelas');
      }else if (a91vec1[i]==numero2) {
        a91vec2.push('leyendas');
      }else if (a91vec1[i]==numero3) {
        a91vec2.push('noticias');
      }else if (a91vec1[i]==numero4) {
        a91vec2.push('mitos');
      }
    }
    
   	bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var a91dcon1=$('#a91dcon1').val();
      var a91dcon2=$('#a91dcon2').val();
      var a91dcon3=$('#a91dcon3').val();
      var a91dcon4=$('#a91dcon4').val();
      var a91dcon5=$('#a91dcon5').val();
      
      if (a91dcon1==numero) {
        cor++;
        f_ok($('#a91dcon1'));
      }else {
        inc++;
        f_no($('#a91dcon1'));
      }
      if (a91dcon2==numero1) {
        cor++;
        f_ok($('#a91dcon2'));
      }else {
        inc++;
        f_no($('#a91dcon2'));
      }
      if (a91dcon3==numero2) {
        cor++;
        f_ok($('#a91dcon3'));
      }else {
        inc++;
        f_no($('#a91dcon3'));
      }
      if (a91dcon4==numero3) {
        cor++;
        f_ok($('#a91dcon4'));
      }else {
        inc++;
        f_no($('#a91dcon4'));
      }
      if (a91dcon5==numero4) {
        cor++;
        f_ok($('#a91dcon5'));
      }else {
        inc++;
        f_no($('#a91dcon5'));
      }
      var a91tc1=$('#a91tc1').val().split('');
      var a91tc2=$('#a91tc2').val().split('');
      var a91tc3=$('#a91tc3').val().split('');
      var a91tc4=$('#a91tc4').val().split('');
      var a91tc5=$('#a91tc5').val().split('');
      if (a91tc1.length==numero) {
        cor++;
        f_ok($('#a91tc1'));
      }else {
        inc++;
        f_no($('#a91tc1'));
      }
      if (a91tc2.length==numero1) {
        cor++;
        f_ok($('#a91tc2'));
      }else {
        inc++;
        f_no($('#a91tc2'));
      }
      if (a91tc3.length==numero2) {
        cor++;
        f_ok($('#a91tc3'));
      }else {
        inc++;
        f_no($('#a91tc3'));
      }
      if (a91tc4.length==numero3) {
        cor++;
        f_ok($('#a91tc4'));
      }else {
        inc++;
        f_no($('#a91tc4'));
      }
      if (a91tc5.length==numero4) {
        cor++;
        f_ok($('#a91tc5'));
      }else {
        inc++;
        f_no($('#a91tc5'));
      }
      var a91dcon6=$('#a91dcon6').val().toLowerCase().split(' ');
      var a91dcon7=$('#a91dcon7').val();
      var a91dcon8=$('#a91dcon8').val().toLowerCase().split(' ');
      var a91dcon9=$('#a91dcon9').val().toLowerCase().split(' ');
      var a91dcon10=$('#a91dcon10').val().toLowerCase().split(' ');
      var a91aux1=0;
      var a91aux2=0;
      var a91aux3=0;
      var a91aux4=0;
      for (var i =0; i < a91dcon6.length; i++) {
        if (a91dcon6[i]== (a91vec2[4]+'.') || a91dcon6[i]== (a91vec2[4])) {
          a91aux1++;
        }
      }
      if (a91aux1=='1') {
        cor++;
         f_ok($('#a91dcon6'));
      }else {
        inc++;
        f_no($('#a91dcon6'));
      }
      for (var i =0; i < a91dcon8.length; i++) {
        if (a91dcon8[i]== (a91vec2[0]+'.') || a91dcon8[i]== (a91vec2[0])) {
          a91aux2++;
        }
      }
      if (a91aux2=='1') {
        cor++;
         f_ok($('#a91dcon8'));
      }else {
        inc++;
        f_no($('#a91dcon8'));
      }
      for (var i =0; i < a91dcon9.length; i++) {
        if (a91dcon9[i]== ('noticias.') || a91dcon9[i]== ('noticias')) {
          a91aux3++;
        }
      }
      if (a91aux3=='1') {
        cor++;
         f_ok($('#a91dcon9'));
      }else {
        inc++;
        f_no($('#a91dcon9'));
      }
      for (var i =0; i < a91dcon10.length; i++) {
        if (a91dcon10[i]== (a91vec2[0]+'.') || a91dcon10[i]== (a91vec2[0]) || a91dcon10[i]== (a91vec2[1]+'.') || a91dcon10[i]== (a91vec2[1])) {
          a91aux4++;
        }
      }
      if (a91aux4=='2') {
        cor++;
         f_ok($('#a91dcon10'));
      }else {
        inc++;
        f_no($('#a91dcon10'));
      }
      if (a91dcon7==numero) {
        cor++;
        f_ok($('#a91dcon7'));
      }else {
        inc++;
        f_no($('#a91dcon7'));
      }
      var result1= (cor*5)/15;
      cor=result1;
      inc=5-result1;

      var nota1_1=$('#nota1_1').val();
      if (!nota1_1) {
        inc=inc+5;
        f_no($('#nota1_1'));
      }else{
        cor=cor+parseFloat(nota1_1);
        inc=inc+(5-parseFloat(nota1_1));
        f_ok($('#nota1_1'));
      }
      Calculo_nota();
   }
}