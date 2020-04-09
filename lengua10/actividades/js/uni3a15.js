var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}

function f_iniciar() {
    var pal1=['<p class="bg_palabra drag3 c1">cólera</p>',
        '<p class="bg_palabra drag3 c2" >temor</p>',
        '<p class="bg_palabra drag3 c3" >soberbia y orgullo</p>',
        '<p class="bg_palabra drag3 c4" >enojo</p>'];
    var pal2=['<p>Aquiles</p>',
        '<p>Agamenón</p>',
        '<p>Apolo</p>',
        '<p>el anciano Crises</p>'];
    var p4aux1=['cólera','soberbia y orgullo','enojo','temor'];
    var p4aux2=[];
    
    pal1.sort(f_randomico);
    $(".textos").append(pal1);
    var myArray1 = ['0','1','2','3'];
       var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
    //aleatorio literal 1
        for (var i = 1; i <= 4 ; i++) {
            var c=myArray1[i-1];
            $(".p4cim1"+i).html(pal2[c]);
            p4aux2.push(p4aux1[c]);
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
            $(ui.draggable).removeClass("bg_palabra");
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);
            
        }
   });
   
    bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var p4im1=$('.p4im1 p').text();
      var p4im2=$('.p4im2 p').text();
      var p4im3=$('.p4im3 p').text();
      var p4im4=$('.p4im4 p').text();
      var p4cont1=0;
      if (p4im1==p4aux2[0]) {
        p4cont1++;
        f_ok($('.p4im1'));
      }else{
        p4cont1;
        f_no($('.p4im1'));
      }
      if (p4im2==p4aux2[1]) {
        p4cont1++;
        f_ok($('.p4im2'));
      }else{
        p4cont1;
        f_no($('.p4im2'));
      }
      if (p4im3==p4aux2[2]) {
        p4cont1++;
        f_ok($('.p4im3'));
      }else{
        p4cont1;
        f_no($('.p4im3'));
      }
      if (p4im4==p4aux2[3]) {
        p4cont1++;
        f_ok($('.p4im4'));
      }else{
        p4cont1;
        f_no($('.p4im4'));
      }
      var result4=(p4cont1*1)/4;
      cor=cor + result4;
      inc=inc + (1-result4);
      var nota1_1=$('#nota1_1').val();
      if (!nota1_1) {
        inc=inc+2;
        f_no($('#nota1_1'));
        $('#nota1_1').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_1);
        inc=inc+(2-parseFloat(nota1_1));
        f_ok($('#nota1_1'));
        $('#nota1_1').attr('disabled','true');
      }
      var nota1_2=$('#nota1_2').val();
      if (!nota1_2) {
        inc=inc+1;
        f_no($('#nota1_2'));
        $('#nota1_2').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_2);
        inc=inc+(1-parseFloat(nota1_2));
        f_ok($('#nota1_2'));
        $('#nota1_2').attr('disabled','true');
      }
      var nota1_3=$('#nota1_3').val();
      if (!nota1_3) {
        inc=inc+2;
        f_no($('#nota1_3'));
        $('#nota1_3').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_3);
        inc=inc+(2-parseFloat(nota1_3));
        f_ok($('#nota1_3'));
        $('#nota1_3').attr('disabled','true');
      }
      var nota1_4=$('#nota1_4').val();
      if (!nota1_4) {
        inc=inc+2;
        f_no($('#nota1_4'));
        $('#nota1_4').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_4);
        inc=inc+(2-parseFloat(nota1_4));
        f_ok($('#nota1_4'));
        $('#nota1_4').attr('disabled','true');
      }
      var nota1_5=$('#nota1_5').val();
      if (!nota1_5) {
        inc=inc+2;
        f_no($('#nota1_5'));
        $('#nota1_5').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_5);
        inc=inc+(2-parseFloat(nota1_5));
        f_ok($('#nota1_5'));
        $('#nota1_5').attr('disabled','true');
      }
      Calculo_nota();
   }
}
