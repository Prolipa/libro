var n1=0,sum_total1=0,sum_total2=0,sum_total3=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str1='',str2='',str3='',calificacion=10;

var t1=0;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 1)
});
document.getElementById('nota1_7').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_7').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_7'), 1)
});
var p2color1=0;
$('#color1').click(function() {
    p2color1=$('#color1').css("background-color");
    $('#cols1').css("background-color",p2color1);
    
});
$('#color2').click(function() {
    p2color1=$('#color2').css("background-color");
    $('#cols1').css("background-color",p2color1);
    
});
$('#color3').click(function() {
    p2color1=$('#color3').css("background-color");
    $('#cols1').css("background-color",p2color1);
    
});
$('#color4').click(function() {
    p2color1=$('#color4').css("background-color");
    $('#cols1').css("background-color",p2color1);
    
});
$('#color5').click(function() {
    p2color1=$('#color5').css("background-color");
    $('#cols1').css("background-color",p2color1);
    
});
$('.pint1').click(function() {
    if (p2color1!=0) {
      $('.pint1').css("background-color",p2color1);
      $('.pint1').css("color",'white');  
    }
    
});
$('.pint2').click(function() {
    if (p2color1!=0) {
      $('.pint2').css("background-color",p2color1);
    $('.pint2').css("color",'white');
    }
    
});
$('.pint3').click(function() {
    if (p2color1!=0) {
      $('.pint3').css("color",'white');
    $('.pint3').css("background-color",p2color1);    
    }
    
});
$('.pint4').click(function() {
    if (p2color1!=0) {
      $('.pint4').css("color",'white');
    $('.pint4').css("background-color",p2color1);  
    }
    
});
$('.pint5').click(function() {
    if (p2color1!=0) {
      $('.pint5').css("color",'white');
    $('.pint5').css("background-color",p2color1);  
    }
    
});
$('.pint6').click(function() {
    if (p2color1!=0) {
      $('.pint6').css("color",'white');
    $('.pint6').css("background-color",p2color1);  
    }
    
});

$('.pint7').click(function() {
    if (p2color1!=0) {
      $('.pint7').css("color",'white');
    $('.pint7').css("background-color",p2color1);  
    }
    
});
$('.pint8').click(function() {
    if (p2color1!=0) {
      $('.pint8').css("color",'white');
    $('.pint8').css("background-color",p2color1);  
    }
    
});
$('.pint9').click(function() {
    if (p2color1!=0) {
      $('.pint9').css("color",'white');
    $('.pint9').css("background-color",p2color1);  
    }
    
});
$('.pint10').click(function() {
    if (p2color1!=0) {
      $('.pint10').css("color",'white');
    $('.pint10').css("background-color",p2color1);  
    }

});

function st()
{
  t1=nn(n1);
  
}
window.onload=st;
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 enc1':
            $('.enc1').addClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');

            break;
        case '1 enc2':
            $('.enc2').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            break;
        case '1 enc3':
            $('.enc3').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            break;
        case '1 enc4':
            $('.enc4').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            break;

    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 enc5':
            $('.enc5').addClass('encierra1');
            $('.enc6').removeClass('encierra1');
            $('.enc7').removeClass('encierra1');
            $('.enc8').removeClass('encierra1');

            break;
        case '2 enc6':
            $('.enc6').addClass('encierra1');
            $('.enc5').removeClass('encierra1');
            $('.enc7').removeClass('encierra1');
            $('.enc8').removeClass('encierra1');
            break;
        case '2 enc7':
            $('.enc7').addClass('encierra1');
            $('.enc5').removeClass('encierra1');
            $('.enc6').removeClass('encierra1');
            $('.enc8').removeClass('encierra1');
            break;
        case '2 enc8':
            $('.enc8').addClass('encierra1');
            $('.enc5').removeClass('encierra1');
            $('.enc6').removeClass('encierra1');
            $('.enc7').removeClass('encierra1');
            break;

    }
});
 function f_iniciar() {
    var pal1=['<span class="bg_palabra drag1">1,</span>',
        '<span class="bg_palabra drag1">21,</span>',
        '<span class="bg_palabra drag1">3,</span>',
        '<span class="bg_palabra drag1">34,</span>',
        '<span class="bg_palabra drag1">5,</span>',
        '<span class="bg_palabra drag1">67,</span>',
        '<span class="bg_palabra drag1">7,</span>',
        '<span class="bg_palabra drag1">88,</span>',
        '<span class="bg_palabra drag1">9,</span>',
        '<span class="bg_palabra drag1">95,</span>',
        '<span class="bg_palabra drag1">2,</span>',
        '<span class="bg_palabra drag1">46,</span>'];
    
    pal1.sort(f_randomico);
    $(".textos").append(pal1);
    
    
    $(".drag1").draggable({
        revert:"invalid",
        zIndex:5,
        containment: ".actividad17",
        scroll: false,
    });
    
   $(".drop1").droppable({
        accept: ".drag1",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag1");
            $(ui.draggable).removeClass("bg_palabra");
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);
            
        }
   });


   var p2vec1=['1','2','3','4','5','6','7','8','9','10'];
   var p2vec2=['Primero','Segundo','Tercero','Cuarto','Quinto','Sexto','Séptimo','Octavo','Noveno','Décimo'];
   var myArray1 = ['0','1','2','3','4','5','6','7','8','9'];
   var p1vec3=[];
    var i,j,k;
    for (i = myArray1.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray1[i - 1];
      myArray1[i - 1] = myArray1[j];
      myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 5 ; i++) {
      var c1=myArray1[i-1];
      $("#p2dcon"+(parseInt(c1) + 1 )).val(p2vec1[c1]);
      $("#p2dcon"+(parseInt(c1) + 1 )).attr('disabled','true');
    };
    //aleatorio literal 1
    for (var i = 6; i <= 10 ; i++) {
      var c2=myArray1[i-1];
      $("#p2im"+(i-5)).html(p2vec2[c2]);
      p1vec3.push(p2vec1[c2]);
    };

    var p3vec1=['img/i2_p174_uni4a14.jpg','img/i3_p174_uni4a14.jpg','img/i4_p174_uni4a14.jpg'];
    var p3vec2=['93','82','73'];
    var myArray2 = ['0','1','2'];
    var p3aux1=0;
    var i,j,k;
    for (i = myArray2.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray2[i - 1];
      myArray2[i - 1] = myArray2[j];
      myArray2[j] = k;
    }
      var c2=myArray2[1];
      $("#p3im1").attr("src",p3vec1[c2]);
      p3aux1=p3vec2[c2].split('');
      n1=p3vec2[c2];


    var p4vec1=['45 < 54','54 = 45','54 = 45','45 > 54'];
    var myArray3 = ['0','1','2','3'];
   
    var i,j,k;
    for (i = myArray3.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray3[i - 1];
      myArray3[i - 1] = myArray3[j];
      myArray3[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 5 ; i++) {
      var c3=myArray3[i-1];
      $("#p4cim"+i).html(p4vec1[c3]);
      
    };


    var p5vec1=['<p><input type="radio" name="group1" style="border:2px solid #0098C9; width: 40px; border-radius: 5px; text-align: center;" id="p5dcon1" maxlength="1" onkeypress="return soloNumeros2(event)" value="1"> <span id="p5im1">4 conjuntos de 4 elementos</span></p><br>',
    '<p><input type="radio" style="border:2px solid #0098C9; width: 40px; border-radius: 5px; text-align: center;" id="p5dcon2" maxlength="1" onkeypress="return soloNumeros2(event)" name="group1" value="2"> <span id="p5im2">3 conjuntos de 5 elementos</span></p><br>',
    '<p><input type="radio" style="border:2px solid #0098C9; width: 40px; border-radius: 5px; text-align: center;" id="p5dcon3" maxlength="1" onkeypress="return soloNumeros2(event)" name="group1" value="3"> <span id="p5im3">3 conjuntos de 4 elementos</span></p><br>',
    '<p><input type="radio" name="group1" style="border:2px solid #0098C9; width: 40px; border-radius: 5px; text-align: center;" id="p5dcon4" maxlength="1" onkeypress="return soloNumeros2(event)" value="4"> <span id="p5im4">6 conjuntos de 6 elementos</span></p><br>'];
    p5vec1.sort(f_randomico);
    $('#group1').html(p5vec1);

    var pal2=['<img src="img/i10_p174_uni4a14.jpg" class="drag2 img-responsive c1" style="display:inline-block; mix-blend-mode:multiply;">',
        '<img src="img/i11_p174_uni4a14.jpg" class="drag2 img-responsive c2" style="display:inline-block; mix-blend-mode:multiply;">',
        '<img src="img/i12_p174_uni4a14.jpg"  class="drag2 img-responsive c1" style="display:inline-block; mix-blend-mode:multiply;">',
        '<img src="img/i13_p174_uni4a14.jpg" class="drag2 img-responsive c3" style="display:inline-block; mix-blend-mode:multiply;">',
        '<img src="img/i14_p174_uni4a14.jpg" class="drag2 img-responsive c1" style="display:inline-block; mix-blend-mode:multiply;">',
        '<img src="img/i15_p174_uni4a14.jpg" class="drag2 img-responsive c3" style="display:inline-block; mix-blend-mode:multiply;">',];
    var pal3=['<tr>'+
                                                        '<td>'+
                                                            '<div class="col-lg-10 col-sm-10 col-md-10 col-xs-10 c_destino1 drop2 p6im1"></div>'+
                                                        '</td>'+
                                                        '<td>'+
                                                            '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 c_origen p6cim11" ><h3>Líneas rectas</h3></div>'+
                                                        '</td>'+
                                                    '</tr>',
    '<tr>'+
                                                        '<td>'+
                                                            '<div class="col-lg-10 col-sm-10 col-md-10 col-xs-10 c_destino1 drop2 p6im2"></div>'+
                                                        '</td>'+
                                                        '<td>'+
                                                            '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 c_origen p6cim12"><h3>Líneas curvas</h3></div>'+
                                                        '</td>'+
                                                    '</tr>',
    '<tr>'+
                                                        '<td>'+
                                                            '<div class="col-lg-10 col-sm-10 col-md-10 col-xs-10 c_destino1 drop2 p6im3"></div>'+
                                                        '</td>'+
                                                        '<td>'+
                                                            '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 c_origen p6cim13"><h3>Líneas rectas y curvas</h3></div>'+
                                                        '</td>'+
                                                    '</tr>'];
    pal2.sort(f_randomico);
    $(".textos1").append(pal2);
    pal3.sort(f_randomico);
    $("#datos1").append(pal3);
    
    $(".drag2").draggable({
        revert:"invalid",
        zIndex:5,
        containment: ".actividad17",
        scroll: false,
    });
    
   $(".drop2").droppable({
        accept: ".drag2",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag2");
            $(ui.draggable).removeClass("bg_palabra");
            ui.draggable.attr("style", "mix-blend-mode:multiply;");
            $(this).append(ui.draggable);
            
        }
   });
   var p8vec1=['$ 18','$ 23','$ 25','$ 15'];
    var myArray3 = ['0','1','2','3'];
   
    var i,j,k;
    for (i = myArray3.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray3[i - 1];
      myArray3[i - 1] = myArray3[j];
      myArray3[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 5 ; i++) {
      var c3=myArray3[i-1];
      $("#p8cim"+i).html(p8vec1[c3]);
      
    };
    $(".drag3").draggable({
        rever:"invalid",
        helper:"clone"
    });
    sum_total1=0;
   $(".drop3").droppable({
        accept: '.drag3',
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function (index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })
            $(this).find(".drop1").draggable({disabled:true});
            str1= (ui.draggable.attr("id"));//capturamos los IDS
            if (str1=='b1') {
                sum_total1+=2;
            }
        }
   });
   sum_total2=0;
   $(".drop4").droppable({
        accept: '.drag3',
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function (index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })
            $(this).find(".drop1").draggable({disabled:true});
            str2= (ui.draggable.attr("id"));//capturamos los IDS
            if (str2=='b1') {
                sum_total2+=2;
            }
        }
   });
   sum_total3=0;
   $(".drop5").droppable({
        accept: '.drag3',
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function (index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })
            $(this).find(".drop1").draggable({disabled:true});
            str3= (ui.draggable.attr("id"));//capturamos los IDS
            if (str3=='b1') {
                sum_total3+=2;
            }
        }
   });
   var p9vec1=['2','4','6','8','10'];
   var p9vec3=['ll','llll','llllll','llllllll','llllllll'];
   var p9vec2=[];
   var myArray4 = ['0','1','2','3','4'];
   
    var i,j,k;
    for (i = myArray4.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray4[i - 1];
      myArray4[i - 1] = myArray4[j];
      myArray4[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 3 ; i++) {
      var c4=myArray4[i-1];
      $("#p9cim"+i).val(p9vec1[c4]);
      $("#p9im"+i).val(p9vec3[c4]);
      p9vec2.push(p9vec1[c4]);
    };
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var nota1_1=$('#nota1_1').val();
        if (!nota1_1) {
          inc=inc+1;
          f_no($('#nota1_1'));
          $('#nota1_1').attr('disabled','true');
        }else{
          cor=cor+parseFloat(nota1_1);
          inc=inc+(1-parseFloat(nota1_1));
          f_ok($('#nota1_1'));
          $('#nota1_1').attr('disabled','true');
        }

        var p2cont1=0;
        var p2cont2=0;
        for (var i = 0; i < p1vec3.length ; i++) {
          if ($('#p2dcon'+(p2vec1[myArray1[5]])).val()==p1vec3[i]) {
            p2cont1++;
          }
        }
        if (p2cont1=='1') {
          p2cont2++;
          f_ok($('#p2dcon'+(p2vec1[myArray1[5]])));
          $('#p2dcon'+(p2vec1[myArray1[5]])).removeClass('coltrans');
        }else{
          p2cont2;
          f_no($('#p2dcon'+(p2vec1[myArray1[5]])));
          $('#p2dcon'+(p2vec1[myArray1[5]])).removeClass('coltrans');
        }
        var p2cont3=0;
        for (var i = 0; i < p1vec3.length ; i++) {
          if ($('#p2dcon'+(p2vec1[myArray1[6]])).val()==p1vec3[i]) {
            p2cont3++;
          }
        }
        if (p2cont3=='1') {
          p2cont2++;
          f_ok($('#p2dcon'+(p2vec1[myArray1[6]])));
          $('#p2dcon'+(p2vec1[myArray1[6]])).removeClass('coltrans');
        }else{
          p2cont2;
          f_no($('#p2dcon'+(p2vec1[myArray1[6]])));
          $('#p2dcon'+(p2vec1[myArray1[6]])).removeClass('coltrans');
        }
        var p2cont4=0;
        for (var i = 0; i < p1vec3.length ; i++) {
          if ($('#p2dcon'+(p2vec1[myArray1[7]])).val()==p1vec3[i]) {
            p2cont4++;
          }
        }
        if (p2cont4=='1') {
          p2cont2++;
          f_ok($('#p2dcon'+(p2vec1[myArray1[7]])));
          $('#p2dcon'+(p2vec1[myArray1[7]])).removeClass('coltrans');
        }else{
          p2cont2;
          f_no($('#p2dcon'+(p2vec1[myArray1[7]])));
          $('#p2dcon'+(p2vec1[myArray1[7]])).removeClass('coltrans');
        }
        var p2cont5=0;
        for (var i = 0; i < p1vec3.length ; i++) {
          if ($('#p2dcon'+(p2vec1[myArray1[8]])).val()==p1vec3[i]) {
            p2cont5++;
          }
        }
        if (p2cont5=='1') {
          p2cont2++;
          f_ok($('#p2dcon'+(p2vec1[myArray1[8]])));
          $('#p2dcon'+(p2vec1[myArray1[8]])).removeClass('coltrans');
        }else{
          p2cont2;
          f_no($('#p2dcon'+(p2vec1[myArray1[8]])));
          $('#p2dcon'+(p2vec1[myArray1[8]])).removeClass('coltrans');
        }
        var p2cont6=0;
        for (var i = 0; i < p1vec3.length ; i++) {
          if ($('#p2dcon'+(p2vec1[myArray1[9]])).val()==p1vec3[i]) {
            p2cont6++;
          }
        }
        if (p2cont6=='1') {
          p2cont2++;
          f_ok($('#p2dcon'+(p2vec1[myArray1[9]])));
          $('#p2dcon'+(p2vec1[myArray1[9]])).removeClass('coltrans');
        }else{
          p2cont2;
          f_no($('#p2dcon'+(p2vec1[myArray1[9]])));
          $('#p2dcon'+(p2vec1[myArray1[9]])).removeClass('coltrans');
        }

        var p2col1=['rgb(100, 163, 61)','rgb(187, 0, 107)','rgb(242, 211, 0)','rgb(0, 155, 219)','rgb(139, 81, 122)','rgba(0, 0, 0, 0)'];
        if ($('.pint'+(p2vec1[myArray1[5]])).css('background-color')==p2col1[0]) {
          p2cont2++;
          f_ok($('#p2p'+(p2vec1[myArray1[5]])));
        }else{
          p2cont2;
          f_no($('#p2p'+(p2vec1[myArray1[5]])));
        }
        if ($('.pint'+(p2vec1[myArray1[6]])).css('background-color')==p2col1[1]) {
          p2cont2++;
          f_ok($('#p2p'+(p2vec1[myArray1[6]])));
        }else{
          p2cont2;
          f_no($('#p2p'+(p2vec1[myArray1[6]])));
        }
        if ($('.pint'+(p2vec1[myArray1[7]])).css('background-color')==p2col1[2]) {
          p2cont2++;
          f_ok($('#p2p'+(p2vec1[myArray1[7]])));
        }else{
          p2cont2;
          f_no($('#p2p'+(p2vec1[myArray1[7]])));
        }
        if ($('.pint'+(p2vec1[myArray1[8]])).css('background-color')==p2col1[3]) {
          p2cont2++;
          f_ok($('#p2p'+(p2vec1[myArray1[8]])));
        }else{
          p2cont2;
          f_no($('#p2p'+(p2vec1[myArray1[8]])));
        }
        if ($('.pint'+(p2vec1[myArray1[9]])).css('background-color')==p2col1[4]) {
          p2cont2++;
          f_ok($('#p2p'+(p2vec1[myArray1[9]])));
        }else{
          p2cont2;
          f_no($('#p2p'+(p2vec1[myArray1[9]])));
        }

        var p2cont7=0;
        if ($('.pint'+(p2vec1[myArray1[0]])).css('background-color')!=p2col1[5]) {
          p2cont7++;
          f_no($('#p2p'+(p2vec1[myArray1[0]])));
        }    
        if ($('.pint'+(p2vec1[myArray1[1]])).css('background-color')!=p2col1[5]) {
          p2cont7++;
          f_no($('#p2p'+(p2vec1[myArray1[1]])));
        }    
        if ($('.pint'+(p2vec1[myArray1[2]])).css('background-color')!=p2col1[5]) {
          p2cont7++;
          f_no($('#p2p'+(p2vec1[myArray1[2]])));
        }    
        if ($('.pint'+(p2vec1[myArray1[3]])).css('background-color')!=p2col1[5]) {
          p2cont7++;
          f_no($('#p2p'+(p2vec1[myArray1[3]])));
        }   
        if ($('.pint'+(p2vec1[myArray1[4]])).css('background-color')!=p2col1[5]) {
          p2cont7++;
          f_no($('#p2p'+(p2vec1[myArray1[4]])));
        }
        var p2cont8=0;
        if (p2cont2 >= p2cont7 ) {
          p2cont8= p2cont2 - p2cont7;
        }else{
          p2cont8=0;
        }
        var result2=(p2cont8*1)/10;
        cor=cor + result2;
        inc=inc + (1- result2);
        f_ok($('#nota1_2'));
        $('#nota1_2').val(result2.toFixed(2));
        $('#nota1_2').css('display','');

        var p3dcon1=$('#p3dcon1').val();
        var p3dcon2=$('#p3dcon2').val();
        var p3dcon3=$('#p3dcon3').val();
        var p3dcon4=$('#p3dcon4').val();
        var p3dcon5=$('#p3dcon5').val();
        var p3dcon6=$('#p3dcon6').val();
        var p3dcon7=$('#p3dcon7').val();
        var p3dcon8=$('#p3dcon8').val();
        var p3dcon9=$('#p3dcon9').val();
        var p3cont1=0;
        if (p3dcon1==p3aux1[0]) {
          p3cont1++;
          f_ok($('#p3dcon1'));
        }else{
          p3cont1;
          f_no($('#p3dcon1'));
        }
        if (p3dcon2==p3aux1[1]) {
          p3cont1++;
          f_ok($('#p3dcon2'));
        }else{
          p3cont1;
          f_no($('#p3dcon2'));
        }
        if (p3dcon3==(p3aux1[0]+p3aux1[1])) {
          p3cont1++;
          f_ok($('#p3dcon3'));
        }else{
          p3cont1;
          f_no($('#p3dcon3'));
        }
        if (p3dcon4==(p3aux1[0]+'0')) {
          p3cont1++;
          f_ok($('#p3dcon4'));
        }else{
          p3cont1;
          f_no($('#p3dcon4'));
        }
        if (p3dcon5==p3aux1[1]) {
          p3cont1++;
          f_ok($('#p3dcon5'));
        }else{
          p3cont1;
          f_no($('#p3dcon5'));
        }
        if (p3dcon6==(p3aux1[0]+p3aux1[1])) {
          p3cont1++;
          f_ok($('#p3dcon6'));
        }else{
          p3cont1;
          f_no($('#p3dcon6'));
        }
        if (p3dcon7==p3aux1[0]) {
          p3cont1++;
          f_ok($('#p3dcon7'));
        }else{
          p3cont1;
          f_no($('#p3dcon7'));
        }
        if (p3dcon8==p3aux1[1]) {
          p3cont1++;
          f_ok($('#p3dcon8'));
        }else{
          p3cont1;
          f_no($('#p3dcon8'));
        }
        if (p3dcon9==t1) {
          p3cont1++;
          f_ok($('#p3dcon9'));
        }else{
          p3cont1;
          f_no($('#p3dcon9'));
        }
        var result3=(p3cont1*2)/9;
        cor=cor + result3;
        inc=inc + (2- result3);
        f_ok($('#nota1_3'));
        $('#nota1_3').val(result3.toFixed(2));
        $('#nota1_3').css('display','');

        var p4res1=$('.encierra span').text();
        var p4cont1=0;
        if (!p4res1) {
          p4cont1;
          f_no($('.enc1'));
          f_no($('.enc2'));
          f_no($('.enc3'));
          f_no($('.enc4'));
        }else{
          if (p4res1=='45 < 54') {
            p4cont1++;
            f_ok($('.encierra'));
          }else{
            p4cont1;
            f_no($('.encierra'));
          }  
        }
        var result4=(p4cont1*1)/1;
        cor=cor + result4;
        inc=inc + (1- result4);
        f_ok($('#nota1_4'));
        $('#nota1_4').val(result4.toFixed(2));
        $('#nota1_4').css('display','');

        var group1=$('#group1 input:checked').val();
        var p5cont1=0;
        if (!group1) {
          p5cont1;
          f_no($('#p5im1'));
          f_no($('#p5im2'));
          f_no($('#p5im3'));
          f_no($('#p5im4'));
        }else{
          if (group1=='2') {
            p5cont1++;
            f_ok($('#p5im'+group1));
          }else{
            p5cont1;
            f_no($('#p5im'+group1));
          }    
        }
        var result5=(p5cont1*1)/1;
        cor=cor + result5;
        inc=inc + (1- result5);
        f_ok($('#nota1_5'));
        $('#nota1_5').val(result5.toFixed(2));
        $('#nota1_5').css('display','');

        var p6im1=$('.p6im1 .c1').length;
        var p6im2=$('.p6im2 .c2').length;
        var p6im3=$('.p6im3 .c3').length;
        var p6cm1=$('.p6im1 img').length;
        var p6cm2=$('.p6im2 img').length;
        var p6cm3=$('.p6im3 img').length;
        var p6cont1=0;
        if (p6im1=='3' && p6cm1=='3') {
            p6cont1++;
            f_ok($('.p6im1'));
          }else{
            p6cont1;
            f_no($('.p6im1'));
          } 
        if (p6im2=='1' && p6cm2=='1') {
            p6cont1++;
            f_ok($('.p6im2'));
          }else{
            p6cont1;
            f_no($('.p6im2'));
          } 
        if (p6im3=='2' && p6cm3=='2') {
            p6cont1++;
            f_ok($('.p6im3'));
          }else{
            p6cont1;
            f_no($('.p6im3'));
          } 
        var result6=(p6cont1*1)/3;
        cor=cor + result6;
        inc=inc + (1- result6);
        f_ok($('#nota1_6'));
        $('#nota1_6').val(result6.toFixed(2));
        $('#nota1_6').css('display','');
        var nota1_7=$('#nota1_7').val();
        if (!nota1_7) {
          inc=inc+1;
          f_no($('#nota1_7'));
          $('#nota1_7').attr('disabled','true');
        }else{
          cor=cor+parseFloat(nota1_7);
          inc=inc+(1-parseFloat(nota1_7));
          f_ok($('#nota1_7'));
          $('#nota1_7').attr('disabled','true');
        }

        var p8res1=$('.encierra1 span').text();
        var p8cont1=0;
        if (!p8res1) {
          p8cont1;
          f_no($('.enc5'));
          f_no($('.enc6'));
          f_no($('.enc7'));
          f_no($('.enc8'));
        }else{
          if (p8res1=='$ 23') {
            p8cont1++;
            f_ok($('.encierra1'));
          }else{
            p8cont1;
            f_no($('.encierra1'));
          }  
        }
        var result8=(p8cont1*1)/1;
        cor=cor + result8;
        inc=inc + (1- result8);
        f_ok($('#nota1_8'));
        $('#nota1_8').val(result8.toFixed(2));
        $('#nota1_8').css('display','');

        var p9cont1=0;
        if (sum_total1==p9vec2[0]) {
          p9cont1++;
            f_ok($('.p9im1'));
          }else{
            p9cont1;
            f_no($('.p9im1'));
          }
        if (sum_total2==p9vec2[1]) {
          p9cont1++;
            f_ok($('.p9im2'));
          }else{
            p9cont1;
            f_no($('.p9im2'));
          }
        if (sum_total3==p9vec2[2]) {
          p9cont1++;
            f_ok($('.p9im3'));
          }else{
            p9cont1;
            f_no($('.p9im3'));
          } 
          var result9=(p9cont1*1)/3;
        cor=cor + result9;
        inc=inc + (1- result9);
        f_ok($('#nota1_9'));
        $('#nota1_9').val(result9.toFixed(2));
        $('#nota1_9').css('display','');
        
        Calculo_nota();
   }
}