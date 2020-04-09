var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
$('.enc1').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc2').removeClass('encierra');
                $('.enc3').removeClass('encierra');
                
            }

        })
$('.enc2').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc1').removeClass('encierra');
                $('.enc3').removeClass('encierra');
                
            }

        })
$('.enc3').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc2').removeClass('encierra');
                $('.enc1').removeClass('encierra');
                
            }

        })
function f_iniciar() {
    var p4vec1=['<b>Cuento</b>','<b>Receta</b>','<b>Manual</b>'];
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
      $(".enc"+(i)).html(p4vec1[c]);
      
    };
    bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var p4in1=$('.encierra b').text();
      var p4cont=0;
      if (!p4in1) {
        p4cont;
        f_no($('.enc1'));
        f_no($('.enc2'));
        f_no($('.enc3'));
      }else{
        if (p4in1=='Manual') {
          p4cont++;
          f_ok($('.encierra'));
        }else{
          p4cont;
          f_no($('.encierra'));
        }
      }
      var result1= (p4cont*1)/1;
      $('#nota1_4').val(result1);
      f_ok($('#nota1_4'));
      cor=cor + result1;
      inc=inc +(1 - result1);

      Calculo_nota();
   }
}
