var n1=0,sum_total=0,cont=0,ejer=1,itemsT=2,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
 function f_iniciar() {
    var pal1=['<img src="img/i1_p159_uni4a1.jpg" alt="1" style="mix-blend-mode: multiply; display:inline-block; min-width:40px;" class="img-responsive drag3 c2 ">',
        '<img src="img/i2_p159_uni4a1.jpg" alt="2" style="mix-blend-mode: multiply; display:inline-block; min-width:40px;" class="img-responsive drag3 c1">',
        '<img src="img/i3_p159_uni4a1.jpg" alt="3" style="mix-blend-mode: multiply; display:inline-block; min-width:40px;" class="img-responsive drag3 c1">',
        '<img src="img/i4_p159_uni4a1.jpg" alt="4" style="mix-blend-mode: multiply; display:inline-block; min-width:40px;" class="img-responsive drag3 c2">',
        '<img src="img/i5_p159_uni4a1.jpg" alt="5" style="mix-blend-mode: multiply; display:inline-block; min-width:10px;" class="img-responsive drag3 c1">'];
    var pal2=['<div><b>Líneas Rectas</b></div>',
        '<div><b>Líneas Curvas</b></div>'];
    pal1.sort(f_randomico);
    $(".textos").append(pal1);
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
            $(".p5cim1"+i).html(pal2[c]);
            
        };
    
    $(".drag3").draggable({
        revert:"invalid",
        zIndex:5,
        containment: ".actividad17",
        scroll: false,
    });
    
   $(".drop3").droppable({
        accept: ".drag3",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag3");
            ui.draggable.attr("style", "mix-blend-mode: multiply; ");
            $(this).append(ui.draggable);
            
        }
   });
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p5cim1 =$('.p5im1 >img').length;
      var p5cim2 =$('.p5im2 >img').length;
      var p5cont1=0;
      var p5im1=0;
      var p5im2=0;
      if (myArray1[0]=='0') {
        p5im1 =$('.p5im1 .c1').length;
        p5im2 =$('.p5im2 .c2').length;
      }else{
        p5im1 =$('.p5im1 .c2').length;
        p5im2 =$('.p5im2 .c1').length;
      }
      if (myArray1[0]=='0') {
        if (p5im1=='3' && p5cim1=='3') {
          cor++;
          f_ok($('.p5im1'));
          
        }else{
          inc++;
          f_no($('.p5im1'));
         
        }
        if (p5im2=='2' && p5cim2=='2') {
          cor++;
          f_ok($('.p5im2'));
          
        }else{
          inc++;
          f_no($('.p5im2'));
         
        }
      }else{
        if (p5im1=='2' && p5cim1=='2') {
          cor++;
          f_ok($('.p5im1'));
          
        }else{
          inc++;
          f_no($('.p5im1'));
         
        }
        if (p5im2=='3' && p5cim2=='3') {
          cor++;
          f_ok($('.p5im2'));
          
        }else{
          inc++;
          f_no($('.p5im2'));
         
        }
      }
        Calculo_nota();
   }
}