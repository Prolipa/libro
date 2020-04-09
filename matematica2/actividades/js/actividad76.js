var n1=0,sum_total=0,cont=0,ejer=1,itemsT=22,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
var a76arr=[];
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
for (var i = 0; i < 30; i++) {
  $('.enc'+(i+1)).click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                
            }

        })  
}
for (var i = 0; i < 30; i++) {
  $('.enc4'+(i+1)).click(function(){

            if ($(this).hasClass('encierra1')) {
                $(this).removeClass('encierra1')
                

            }else{
                $(this).addClass('encierra1')
                
            }

        })  
}
 function f_iniciar() {
    
   	bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var veres=[] , veres1=[];
      var l1resp1=['2','4','6','8','10','12','14','16','18','20','22','24','26','28','30'];
      var l1resp2=['5','10','15','20','25','30'];
      for (var i =0; i < 30; i++) {
        if ( $('.enc'+(i+1)).hasClass('encierra')) {
          veres.push($('.enc'+(i+1)).html());
        }
          
      }
      if (veres.length==0) {
        inc=inc+15;
        for (var i = 0; i < 30; i++) {
          f_no($('.enc'+(i+1)));  
        }
        
      }else {
        for (var i =0; i < veres.length; i++) {
        if (veres[i]==l1resp1[i]) {
          cor++;
          f_ok($('.enc'+(veres[i])));
        }else {
          if (i<15) {
            inc++;  
          }else {
            inc;
          }
          
          f_no($('.enc'+(veres[i])));
        }
      }  
      }
      
      for (var i =0; i < 30; i++) {
        if ( $('.enc4'+(i+1)).hasClass('encierra1')) {
          veres1.push($('.enc4'+(i+1)).html());
        }
          
      }
      if (veres1.length==0) {
        inc=inc+6;
        for (var i = 0; i < 30; i++) {
          f_no($('.enc4'+(i+1)));  
        }
      }else {
        for (var i =0; i < veres1.length; i++) {
        if (veres1[i]==l1resp2[i]) {
          cor++;
          f_ok($('.enc4'+(veres1[i])));
        }else {
          if (i<6) {
            inc++;  
          }else {
            inc;
          }
          
          f_no($('.enc4'+(veres1[i])));
        }
      }  
      }
      
      var a76dcon1=$('#a76dcon1').val().toLowerCase();
      if (a76dcon1=='juana') {
        cor++;
        f_ok($('#a76dcon1'));
      }else {
        inc++;
        f_no($('#a76dcon1'));
      }
      Calculo_nota();
   }
}