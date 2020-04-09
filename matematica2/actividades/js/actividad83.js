var n1=0,sum_total=0,cont=0,ejer=1,itemsT=2,cor=0,inc=0,str='',calificacion=10;
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
$('.enc4').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc5').removeClass('encierra');
                $('.enc6').removeClass('encierra');
                
            }

        })
$('.enc5').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc4').removeClass('encierra');
                $('.enc6').removeClass('encierra');
                
            }

        })
$('.enc6').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc5').removeClass('encierra');
                $('.enc4').removeClass('encierra');
                
            }

        })
 function f_iniciar() {
    
    bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var a82dcon1=$('.a83enc1 .encierra').html();
      var a82dcon2=$('.a83enc2 .encierra').html();
      if (!a82dcon1) {
        inc++;
        f_no($('.enc1'));
        f_no($('.enc2'));
        f_no($('.enc3'));
      }else{
        if (a82dcon1=='Tarde') {
          cor++;
          f_ok($('.a83enc1 .encierra'));
        }else {
          inc++;
          f_no($('.a83enc1 .encierra'));
        }  
      }
      if (!a82dcon2) {
        inc++;
        f_no($('.enc4'));
        f_no($('.enc5'));
        f_no($('.enc6'));
      }else{
        if (a82dcon2=='Mañana') {
          cor++;
          f_ok($('.a83enc2 .encierra'));
        }else {
          inc++;
          f_no($('.a83enc2 .encierra'));
        }  
      }
      
      Calculo_nota();
   }
}