var n1=0,sum_total1=0,sum_total2=0,sum_total3=0,sum_total4=0,sum_total5=0,sum_total6=0,sum_total7=0,sum_total8=0,cont=0,ejer=1,itemsT=12,cor=0,inc=0,str1='',str2='',str3='',str4='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
 function f_iniciar() {

    var p1vec1=['3','6','9','12'];
    var p1vec2=[];
    var p1vec3=[];
    var p1vec4=[];
    var myArray1 = ['0','1','2','3'];
        var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
        var c=p1vec1[myArray1[0]];
        for (var i =0; i < c; i++) {
          p1vec2.push('<img src="img/i1_p169_uni4a11.png" class="img-responsive" style="display: inline-block;" alt="" >')
        }
        var c1=p1vec1[myArray1[1]];
        for (var i =0; i < c1; i++) {
          p1vec2.push('<img src="img/i2_p169_uni4a11.png" class="img-responsive" style="display: inline-block;" alt="" >')
        }
        var c2=p1vec1[myArray1[2]];
        for (var i =0; i < c2; i++) {
          p1vec2.push('<img src="img/i3_p169_uni4a11.png" class="img-responsive" style="display: inline-block;" alt="" >')
        }
        var c3=p1vec1[myArray1[3]];
        for (var i =0; i < c3; i++) {
          p1vec2.push('<img src="img/i4_p169_uni4a11.png" class="img-responsive" style="display: inline-block;" alt="" >')
        }
        if (c=='12') {
          p1vec3.push('piña');
          p1vec3.push('la piña');
          p1vec3.push('las piñas');
          p1vec3.push('piñas');
        }else if (c=='3') {
          p1vec4.push('piña');
          p1vec4.push('la piña');
          p1vec4.push('las piñas');
          p1vec4.push('piñas');
        }
        if (c1=='12') {
          p1vec3.push('manzana');
          p1vec3.push('la manzana');
          p1vec3.push('las manzanas');
          p1vec3.push('manzanas');
        }else if (c1=='3') {
          p1vec4.push('manzana');
          p1vec4.push('la manzana');
          p1vec4.push('manzanas');
          p1vec4.push('las manzanas');
        }
        if (c2=='12') {
          p1vec3.push('naranja');
          p1vec3.push('la naranja');
          p1vec3.push('las naranjas');
          p1vec3.push('naranjas');
        }else if (c2=='3') {
          p1vec4.push('naranja');
          p1vec4.push('la naranja');
          p1vec4.push('naranjas');
          p1vec4.push('las naranjas');
        }
        if (c3=='12') {
          p1vec3.push('sandía');
          p1vec3.push('la sandía');
          p1vec3.push('las sandías');
          p1vec3.push('sandías');
        }else if (c3=='3') {
          p1vec4.push('sandía');
          p1vec4.push('la sandía');
          p1vec4.push('sandías');
          p1vec4.push('las sandías');
        }
        $("#p1im1").html(p1vec2);
        
    $(".drag1").draggable({
        rever:"invalid",
        helper:"clone"
    });
    sum_total1=0;
   $(".drop1").droppable({
        accept: '.drag1',
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function (index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })
            $(this).find(".drop1").draggable({disabled:true});
            str1= (ui.draggable.attr("id"));//capturamos los IDS
            if (str1=='b1') {
                sum_total1+=3;
            }
        }
   });
   sum_total2=0;
   $(".drop2").droppable({
        accept: '.drag1',
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function (index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })
            $(this).find(".drop2").draggable({disabled:true});
            str2= (ui.draggable.attr("id"));//capturamos los IDS
            if (str2=='b1') {
                sum_total2+=3;
            }
        }
   });
   sum_total3=0;
   $(".drop3").droppable({
        accept: '.drag1',
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function (index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })
            $(this).find(".drop3").draggable({disabled:true});
            str3= (ui.draggable.attr("id"));//capturamos los IDS
            if (str3=='b1') {
                sum_total3+=3;
            }
        }
   });  
   sum_total4=0;
   $(".drop4").droppable({
        accept: '.drag1',
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function (index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })
            $(this).find(".drop4").draggable({disabled:true});
            str4= (ui.draggable.attr("id"));//capturamos los IDS
            if (str4=='b1') {
                sum_total4+=3;
            }
        }
   });   

   $(".drag2").draggable({
        rever:"invalid",
        helper:"clone"
    });
    sum_total5=0;
   $(".drop5").droppable({
        accept: '.drag2',
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function (index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })
            $(this).find(".drop5").draggable({disabled:true});
            str1= (ui.draggable.attr("id"));//capturamos los IDS
            if (str1=='b2') {
                sum_total5+=5;
            }
        }
   });
   sum_total6=0;
   $(".drop6").droppable({
        accept: '.drag2',
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function (index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })
            $(this).find(".drop6").draggable({disabled:true});
            str2= (ui.draggable.attr("id"));//capturamos los IDS
            if (str2=='b2') {
                sum_total6+=5;
            }
        }
   });
   sum_total7=0;
   $(".drop7").droppable({
        accept: '.drag2',
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function (index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })
            $(this).find(".drop7").draggable({disabled:true});
            str3= (ui.draggable.attr("id"));//capturamos los IDS
            if (str3=='b2') {
                sum_total7+=5;
            }
        }
   });  
   sum_total8=0;
   $(".drop8").droppable({
        accept: '.drag2',
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function (index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })
            $(this).find(".drop8").draggable({disabled:true});
            str4= (ui.draggable.attr("id"));//capturamos los IDS
            if (str4=='b2') {
                sum_total8+=5;
            }
        }
   });   
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        
        if (sum_total1==c2) {
          cor++;
          f_ok($('.p5res1'));
        }else{
          inc++;
          f_no($('.p5res1'));
        }
        if (sum_total2==c3) {
          cor++;
          f_ok($('.p5res2'));
        }else{
          inc++;
          f_no($('.p5res2'));
        }
        if (sum_total3==c) {
          cor++;
          f_ok($('.p5res3'));
        }else{
          inc++;
          f_no($('.p5res3'));
        }
        if (sum_total4==c1) {
          cor++;
          f_ok($('.p5res4'));
        }else{
          inc++;
          f_no($('.p5res4'));
        }

        if (sum_total5=='10') {
          cor++;
          f_ok($('.p6res1'));
        }else{
          inc++;
          f_no($('.p6res1'));
        }
        if (sum_total6=='15') {
          cor++;
          f_ok($('.p6res2'));
        }else{
          inc++;
          f_no($('.p6res2'));
        }
        if (sum_total7=='5') {
          cor++;
          f_ok($('.p6res3'));
        }else{
          inc++;
          f_no($('.p6res3'));
        }
        if (sum_total8=='20') {
          cor++;
          f_ok($('.p6res4'));
        }else{
          inc++;
          f_no($('.p6res4'));
        }
        
        var p1dcon1=$('#p1dcon1').val();
        var p1dcon2=$('#p1dcon2').val().toLowerCase();
        var p1dcon3=$('#p1dcon3').val();
        var p1dcon4=$('#p1dcon4').val().toLowerCase();
        if (p1dcon1==c) {
          cor++;
          f_ok($('#p1dcon1'));
        }else{
          inc++;
          f_no($('#p1dcon1'));
        }
        var p1cont2=0;
        for (var i =0; i < p1vec3.length; i++) {
          if (p1dcon2==p1vec3[i]) {
            p1cont2++;
          }
        }
        if (p1cont2=='1') {
          cor++;
          f_ok($('#p1dcon2'));
        }else{
          inc++;
          f_no($('#p1dcon2'));
        }

        if (p1dcon3==c1) {
          cor++;
          f_ok($('#p1dcon3'));
        }else{
          inc++;
          f_no($('#p1dcon3'));
        }
        var p1cont3=0;
        for (var i =0; i < p1vec4.length; i++) {
          if (p1dcon4==p1vec4[i]) {
            p1cont3++;
          }
        }
        if (p1cont3=='1') {
          cor++;
          f_ok($('#p1dcon4'));
        }else{
          inc++;
          f_no($('#p1dcon4'));
        }
        Calculo_nota();
   }
}