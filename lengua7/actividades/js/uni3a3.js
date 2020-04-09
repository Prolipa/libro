var n1=0,sum_total=0,cont=0,ejer=1,itemsT=16,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}

function f_iniciar() {
    var pal1=['<span class="bg_palabra drag3 c2" id="1">Los amigos condujeron</span>',
        '<span class="bg_palabra drag3 c2" id="2">Ayer pedimos</span>',
        '<span class="bg_palabra drag3 c3" id="3">El enfermo tomó</span>',
        '<span class="bg_palabra drag3 c4" id="4">Mi hermano traerá</span>',
        '<span class="bg_palabra drag3 c5" id="5">La vaca lamió</span>'];
    var pal2=['<div><b>sus bicicletas.</b></div>',
        '<div><b>unas pizzas para comer.</b></div>',
        '<div><b>todas sus medicinas.</b></div>',
        '<div><b>un cachorrito.</b></div>',
        '<div><b>mi mano.</b></div>'];
    
    pal1.sort(f_randomico);
    var p2vec1=['1','2','3','4','5'];
    var p2aux2=[];
    $(".textos").append(pal1);
    var myArray2 = ['0','1','2','3','4'];
       var i,j,k;
        for (i = myArray2.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray2[i - 1];
            myArray2[i - 1] = myArray2[j];
            myArray2[j] = k;
        }
    //aleatorio literal 1
        for (var i = 1; i <= 5 ; i++) {
            var c1=myArray2[i-1];
            $(".p2cim1"+i).html(pal2[c1]);
            p2aux2.push(p2vec1[c1]);
            
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

   var p1vec1=['img/i1_p107_uni3a3.jpg','img/i2_p107_uni3a3.jpg','img/i3_p107_uni3a3.jpg','img/i4_p107_uni3a3.jpg','img/i5_p107_uni3a3.jpg'];
   var p1vec2=['1','2','3','4','5'];
    var p1aux2=[];
    var myArray1 = ['0','1','2','3','4'];
       var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
    //aleatorio literal 1
        for (var i = 1; i <= 5 ; i++) {
            var c2=myArray1[i-1];
            $("#p1im"+i).attr('src',p1vec1[c2]);
            $('.p1dcon'+i).attr('id','c'+p1vec2[c2]);
            
        };
    bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var p2im1=$('.p2im1 span').attr('id');
      var p2im2=$('.p2im2 span').attr('id');
      var p2im3=$('.p2im3 span').attr('id');
      var p2im4=$('.p2im4 span').attr('id');
      var p2im5=$('.p2im5 span').attr('id');
      if (p2im1==p2aux2[0]) {
        cor++;
        f_ok($('.p2im1'));
      }else{
        inc++;
        f_no($('.p2im1'));
      }
      if (p2im2==p2aux2[1]) {
        cor++;
        f_ok($('.p2im2'));
      }else{
        inc++;
        f_no($('.p2im2'));
      }
      if (p2im3==p2aux2[2]) {
        cor++;
        f_ok($('.p2im3'));
      }else{
        inc++;
        f_no($('.p2im3'));
      }
      if (p2im4==p2aux2[3]) {
        cor++;
        f_ok($('.p2im4'));
      }else{
        inc++;
        f_no($('.p2im4'));
      }
      if (p2im5==p2aux2[4]) {
        cor++;
        f_ok($('.p2im5'));
      }else{
        inc++;
        f_no($('.p2im5'));
      }

      var p1dcon1=$('#c1').val().toLowerCase();
      var p1dcon2=$('#c2').val().toLowerCase();
      var p1dcon3=$('#c3').val().toLowerCase();
      var p1dcon4=$('#c4').val().toLowerCase();
      var p1dcon5=$('#c5').val().toLowerCase();
      if (p1dcon1=='afeitarse') {
        cor++;
        f_ok($('#c1'));
      }else{
        inc++;
        f_no($('#c1'));
      }
      if (p1dcon2=='ducharse' || p1dcon2=='bañarse' || p1dcon2=='ducharse/bañarse') {
        cor++;
        f_ok($('#c2'));
      }else{
        inc++;
        f_no($('#c2'));
      }
      if (p1dcon3=='maquillarse') {
        cor++;
        f_ok($('#c3'));
      }else{
        inc++;
        f_no($('#c3'));
      }
      if (p1dcon4=='vestirse' || p1dcon4=='cambiarse') {
        cor++;
        f_ok($('#c4'));
      }else{
        inc++;
        f_no($('#c4'));
      }
      if (p1dcon5=='lavarse') {
        cor++;
        f_ok($('#c5'));
      }else{
        inc++;
        f_no($('#c5'));
      }
      var respal1=[$('#C0').val(),$('#C1').val(),$('#C2').val(),$('#C3').val(),$('#C5').val(),$('#C12').val()];
      var respal2=[$('#C4').val(),$('#C10').val(),$('#C14').val(),$('#C16').val(),$('#C26').val()];
      var respal3=[$('#C7').val(),$('#C13').val(),$('#C15').val(),$('#C24').val(),$('#C27').val(),$('#C28').val(),$('#C35').val(),$('#C37').val()];
      var respal4=[$('#C6').val(),$('#C7').val(),$('#C8').val(),$('#C9').val(),$('#C10').val(),$('#C11').val(),$('#C12').val()];
      var respal5=[$('#C17').val(),$('#C18').val(),$('#C19').val(),$('#C20').val(),$('#C21').val(),$('#C22').val(),$('#C23').val(),$('#C24').val(),$('#C25').val()];
      var respal6=[$('#C29').val(),$('#C30').val(),$('#C31').val(),$('#C32').val(),$('#C33').val(),$('#C34').val(),$('#C35').val(),$('#C36').val()];
      $('#p3res1').val(respal1.join(''));
      $('#p3res1').css('display','');
      $('#p3res2').val(respal2.join(''));
      $('#p3res2').css('display','');
      $('#p3res3').val(respal3.join(''));
      $('#p3res3').css('display','');
      $('#p3res4').val(respal4.join(''));
      $('#p3res4').css('display','');
      $('#p3res5').val(respal5.join(''));
      $('#p3res5').css('display','');
      $('#p3res6').val(respal6.join(''));
      $('#p3res6').css('display','');
      if (respal1.join('')=='LLOVER') {
        cor++;
        f_ok($('#C0'));
        f_ok($('#C1'));
        f_ok($('#C2'));
        f_ok($('#C3'));
        f_ok($('#C5'));
        f_ok($('#C12'));
      }else{
        inc++;
        f_no($('#C0'));
        f_no($('#C1'));
        f_no($('#C2'));
        f_no($('#C3'));
        f_no($('#C5'));
        f_no($('#C12'));
      }
      if (respal2.join('')=='NEVAR') {
        cor++;
        f_ok($('#C4'));
        f_ok($('#C10'));
        f_ok($('#C14'));
        f_ok($('#C16'));
        f_ok($('#C26'));
        
      }else{
        inc++;
        f_no($('#C4'));
        f_no($('#C10'));
        f_no($('#C14'));
        f_no($('#C16'));
        f_no($('#C26'));
        
      }
      if (respal3.join('')=='ESCAMPAR') {
        cor++;
        f_ok($('#C7'));
        f_ok($('#C13'));
        f_ok($('#C15'));
        f_ok($('#C24'));
        f_ok($('#C27'));
        f_ok($('#C28'));
        f_ok($('#C35'));
        f_ok($('#C37'));
      }else{
        inc++;
        f_no($('#C7'));
        f_no($('#C13'));
        f_no($('#C15'));
        f_no($('#C24'));
        f_no($('#C27'));
        f_no($('#C28'));
        f_no($('#C37'));
        f_no($('#C35'));
      }
      if (respal4.join('')=='VENTEAR') {
        cor++;
        f_ok($('#C6'));
        f_ok($('#C7'));
        f_ok($('#C8'));
        f_ok($('#C9'));
        f_ok($('#C10'));
        f_ok($('#C11'));
        f_ok($('#C12'));
      }else{
        inc++;
        f_no($('#C6'));
        f_no($('#C7'));
        f_no($('#C8'));
        f_no($('#C9'));
        f_no($('#C10'));
        f_no($('#C11'));
        f_no($('#C12'));
      }
      if (respal5.join('')=='LLOVIZNAR') {
        cor++;
        f_ok($('#C17'));
        f_ok($('#C18'));
        f_ok($('#C19'));
        f_ok($('#C20'));
        f_ok($('#C21'));
        f_ok($('#C22'));
        f_ok($('#C23'));
        f_ok($('#C24'));
        f_ok($('#C25'));
        
      }else{
        inc++;
        f_no($('#C17'));
        f_no($('#C18'));
        f_no($('#C19'));
        f_no($('#C20'));
        f_no($('#C21'));
        f_no($('#C22'));
        f_no($('#C23'));
        f_no($('#C24'));
        f_no($('#C25'));
        
      }
      if (respal6.join('')=='GRANIZAR') {
        cor++;
        f_ok($('#C29'));
        f_ok($('#C30'));
        f_ok($('#C31'));
        f_ok($('#C32'));
        f_ok($('#C33'));
        f_ok($('#C34'));
        f_ok($('#C35'));
        f_ok($('#C36'));
        
      }else{
        inc++;
        f_no($('#C29'));
        f_no($('#C30'));
        f_no($('#C31'));
        f_no($('#C32'));
        f_no($('#C33'));
        f_no($('#C34'));
        f_no($('#C35'));
        f_no($('#C36'));
        
      }
      Calculo_nota();
   }
}
