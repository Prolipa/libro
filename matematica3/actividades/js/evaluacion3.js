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
    var a108num1 = ['<td>Sandía</td>'+
                        '<td>⊂</td>'+
                        '<td><span style="color: #003486;">F</span></td>'+
                        '<td>'+
                            '<select name="" id="p1sel1" style="min-width: 70px;" class="form-control">'+
                                '<option value="" disabled selected>Seleccione</option>'+
                                '<option value="V">V</option>'+
                                '<option value="F">F</option>'+
                            '</select>'+
                        '</td>',
    '<td>Pato</td>'+
        '<td>⊂</td>'+
        '<td><span style="color: #003486;">F</span></td>'+
        '<td>'+
            '<select name="" id="p1sel2" class="form-control">'+
                '<option value="" disabled selected>Seleccione</option>'+
                '<option value="V">V</option>'+
                '<option value="F">F</option>'+
            '</select>'+
        '</td>',
    '<td>Piña</td>'+
        '<td>⊄</td>'+
        '<td><span style="color: #003486;">G</span></td>'+
        '<td>'+
            '<select name="" id="p1sel3" class="form-control">'+
                '<option value="" disabled selected>Seleccione</option>'+
                '<option value="V">V</option>'+
                '<option value="F">F</option>'+
            '</select>'+
        '</td>',
    '<td>Cerdo</td>'+
        '<td>⊄</td>'+
        '<td><span style="color: #003486;">F</span></td>'+
        '<td>'+
            '<select name="" id="p1sel4" class="form-control">'+
                '<option value="" disabled selected>Seleccione</option>'+
                '<option value="V">V</option>'+
                '<option value="F">F</option>'+
            '</select>'+
        '</td>'];
    var a108num2=['V','F','V','V'];
    var p1aux1=[];
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
            $("#p1im"+i).html(a108num1[c]);
            p1aux1.push(a108num2[c]);
            
        };

    var pal1=['<img class="img-responsive drag3 c1" src="img/i2_p128_ev3.jpg" alt="1" style="display:inline-block; mix-blend-mode:multiply;">',
        '<img class="img-responsive drag3 c2" alt="2" src="img/i3_p128_ev3.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
        '<img class="img-responsive drag3 c3" alt="3" src="img/i4_p128_ev3.jpg" style="display:inline-block; mix-blend-mode:multiply;">'];
    var pal2=['<div><b>Escudo</b></div>',
        '<div><b>Himno Nacional</b></div>',
        '<div><b>Bandera</b></div>'];
    
    pal1.sort(f_randomico);
    var p2vec1=['1','2','3'];
    var p2aux2=[];
    $(".textos").append(pal1);
    var myArray2 = ['0','1','2'];
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
            ui.draggable.attr("style", "mix-blend-mode:multiply;");
            $(this).append(ui.draggable);
            
        }
   });



    var p3num1 = [parseInt((Math.random() * 300) + 80)];
    var p3pt1 = parseInt((Math.random() * 9) + 1);
    for (var i =0; i < 7; i++) {
      p3num1.push((p3num1[i]-p3pt1));
    }
    $('#p3dcon11').val(p3num1[0]);
    $('#p3dcon12').val(p3num1[1]);
    $('#p3dcon13').val(p3num1[2]);
    var p3num2 = [parseInt((Math.random() * 300) + 80)];
    var p3pt2 = parseInt((Math.random() * 9) + 1);
    for (var i =0; i < 7; i++) {
      p3num2.push((p3num2[i]-p3pt2));
    }
    $('#p31dcon11').val(p3num2[0]);
    $('#p31dcon12').val(p3num2[1]);
    $('#p31dcon13').val(p3num2[2]);


    var p4num1 = [parseInt((Math.random() * 400) + 100),parseInt((Math.random() * 400) + 100),parseInt((Math.random() * 400) + 100),parseInt((Math.random() * 400) + 100),parseInt((Math.random() * 300) + 500),parseInt((Math.random() * 300) + 100),parseInt((Math.random() * 300) + 500),parseInt((Math.random() * 300) + 100)];

    for (var i =0; i < 8; i++) {

      $('#p4im'+(i + 1)).html(p4num1[i]);
    }


    var p5num1 = [parseInt((Math.random() * 400) + 100),parseInt((Math.random() * 400) + 100),parseInt((Math.random() * 400) + 100),parseInt((Math.random() * 400) + 100),parseInt((Math.random() * 400) + 100),parseInt((Math.random() * 400) + 100),parseInt((Math.random() * 400) + 100),parseInt((Math.random() * 400) + 100),parseInt((Math.random() * 400) + 100),parseInt((Math.random() * 400) + 100),parseInt((Math.random() * 400) + 100),parseInt((Math.random() * 400) + 100),parseInt((Math.random() * 400) + 100),parseInt((Math.random() * 400) + 100),parseInt((Math.random() * 400) + 100),parseInt((Math.random() * 400) + 100)];
    for (var i =0; i < 16; i++) {

      $('#p5im'+(i + 1)).html(p5num1[i]);
    }

    var p6num1=parseInt((Math.random() * 70) + 1);
    if (p6num1%2==0) {
        p6num1;
    }else{
        p6num1=p6num1 + 1;
    }
    $('#p6im1').html(p6num1);
    $('#p6im2').html(p6num1 + 20);
    var p6num2=parseInt((Math.random() * 70) + 1);
    if (p6num2%2==0) {
        p6num2=p6num2 + 1;
    }else{
        p6num2;
    }
    $('#p6im3').html(p6num2);
    $('#p6im4').html(p6num2 + 20);


    var pal3=['<img class="img-responsive drag4 c1" src="img/i5_p128_ev3.jpg" alt="1" style="display:inline-block; mix-blend-mode:multiply;">',
        '<img class="img-responsive drag4 c2" alt="2" src="img/i6_p128_ev3.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
        '<img class="img-responsive drag4 c3" alt="3" src="img/i7_p128_ev3.jpg" style="display:inline-block; mix-blend-mode:multiply;">'];
    var pal4=['<div><b>ángulo agudo</b></div>',
        '<div><b>ángulo obtuso</b></div>',
        '<div><b>ángulo recto</b></div>'];
    
    pal3.sort(f_randomico);
    var p7vec1=['3','1','2'];
    var p7aux2=[];
    $(".textos1").append(pal3);
    var myArray2 = ['0','1','2'];
       var i,j,k;
        for (i = myArray2.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray2[i - 1];
            myArray2[i - 1] = myArray2[j];
            myArray2[j] = k;
        }
    //aleatorio literal 1
        for (var i = 1; i <= 5 ; i++) {
            var c2=myArray2[i-1];
            $(".p7cim1"+i).html(pal4[c2]);
            p7aux2.push(p7vec1[c2]);
            
        };
    $(".drag4").draggable({
        revert:"invalid",
        zIndex:5,
        containment: ".actividad17",
        scroll: false,
    });
    
   $(".drop4").droppable({
        accept: ".drag4",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag4");
            $(ui.draggable).removeClass("bg_palabra");
            ui.draggable.attr("style", "mix-blend-mode:multiply;");
            $(this).append(ui.draggable);
            
        }
   });
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var p1sel1= $('#p1sel1').val();
      var p1sel2= $('#p1sel2').val();
      var p1sel3= $('#p1sel3').val();
      var p1sel4= $('#p1sel4').val();
      var p1cont1=0;  
      if (p1sel1=='V') {
        p1cont1++;
        f_ok($('#p1sel1'));
      }else{
        p1cont1;
        f_no($('#p1sel1'));
      }
      if (p1sel2=='F') {
        p1cont1++;
        f_ok($('#p1sel2'));
      }else{
        p1cont1;
        f_no($('#p1sel2'));
      }
      if (p1sel3=='V') {
        p1cont1++;
        f_ok($('#p1sel3'));
      }else{
        p1cont1;
        f_no($('#p1sel3'));
      }
      if (p1sel4=='V') {
        p1cont1++;
        f_ok($('#p1sel4'));
      }else{
        p1cont1;
        f_no($('#p1sel4'));
      }
      var result1=(p1cont1*1)/4
      cor=cor + result1;
      inc= inc + (1- result1);
      $('#nota1_1').val(result1.toFixed(2));
      $('#nota1_1').css("display", "");
      f_ok($('#nota1_1'));


      var p2im1=$('.p2im1 > img').attr('alt');
      var p2im2=$('.p2im2 > img').attr('alt');
      var p2im3=$('.p2im3 > img').attr('alt');
      var p2cont1=0;
      if (p2im1==p2aux2[0]) {
        p2cont1++;
        f_ok($('.p2im1'));
      }else{
        p2cont1;
        f_no($('.p2im1'));
      }
      if (p2im2==p2aux2[1]) {
        p2cont1++;
        f_ok($('.p2im2'));
      }else{
        p2cont1;
        f_no($('.p2im2'));
      }
      if (p2im3==p2aux2[2]) {
        p2cont1++;
        f_ok($('.p2im3'));
      }else{
        p2cont1;
        f_no($('.p2im3'));
      }
      var result2=(p2cont1*1)/3
      cor=cor + result2;
      inc= inc + (1- result2);
      $('#nota1_2').val(result2.toFixed(2));
      $('#nota1_2').css("display", "");
      f_ok($('#nota1_2'));

      var p3dcon14=$('#p3dcon14').val();
      var p3dcon15=$('#p3dcon15').val();
      var p3dcon16=$('#p3dcon16').val();
      var p3dcon17=$('#p3dcon17').val();
      var p3cont1=0;
      if (p3dcon14==p3num1[3]) {
        p3cont1++;
        f_ok($('#p3dcon14'));
      }else{
        p3cont1;
        f_no($('#p3dcon14'));
      }
      if (p3dcon15==p3num1[4]) {
        p3cont1++;
        f_ok($('#p3dcon15'));
      }else{
        p3cont1;
        f_no($('#p3dcon15'));
      }
      if (p3dcon16==p3num1[5]) {
        p3cont1++;
        f_ok($('#p3dcon16'));
      }else{
        p3cont1;
        f_no($('#p3dcon16'));
      }
      if (p3dcon17==p3num1[6]) {
        p3cont1++;
        f_ok($('#p3dcon17'));
      }else{
        p3cont1;
        f_no($('#p3dcon17'));
      }

      var p31dcon14=$('#p31dcon14').val();
      var p31dcon15=$('#p31dcon15').val();
      var p31dcon16=$('#p31dcon16').val();
      var p31dcon17=$('#p31dcon17').val();
      
      if (p31dcon14==p3num2[3]) {
        p3cont1++;
        f_ok($('#p31dcon14'));
      }else{
        p3cont1;
        f_no($('#p31dcon14'));
      }
      if (p31dcon15==p3num2[4]) {
        p3cont1++;
        f_ok($('#p31dcon15'));
      }else{
        p3cont1;
        f_no($('#p31dcon15'));
      }
      if (p31dcon16==p3num2[5]) {
        p3cont1++;
        f_ok($('#p31dcon16'));
      }else{
        p3cont1;
        f_no($('#p31dcon16'));
      }
      if (p31dcon17==p3num2[6]) {
        p3cont1++;
        f_ok($('#p31dcon17'));
      }else{
        p3cont1;
        f_no($('#p31dcon17'));
      }

      var p3dcon1=$('#p3dcon1').val();
      var p3dcon2=$('#p3dcon2').val();
      var p3dcon3=$('#p3dcon3').val();
      var p3dcon4=$('#p3dcon4').val();
      var p3dcon5=$('#p3dcon5').val();
      var p3dcon6=$('#p3dcon6').val();
      if (p3dcon1==p3pt1) {
        p3cont1++;
        f_ok($('#p3dcon1'));
      }else{
        p3cont1;
        f_no($('#p3dcon1'));
      }
      if (p3dcon2==p3pt1) {
        p3cont1++;
        f_ok($('#p3dcon2'));
      }else{
        p3cont1;
        f_no($('#p3dcon2'));
      }
      if (p3dcon3==p3pt1) {
        p3cont1++;
        f_ok($('#p3dcon3'));
      }else{
        p3cont1;
        f_no($('#p3dcon3'));
      }
      if (p3dcon4==p3pt1) {
        p3cont1++;
        f_ok($('#p3dcon4'));
      }else{
        p3cont1;
        f_no($('#p3dcon4'));
      }
      if (p3dcon5==p3pt1) {
        p3cont1++;
        f_ok($('#p3dcon5'));
      }else{
        p3cont1;
        f_no($('#p3dcon5'));
      }
      if (p3dcon6==p3pt1) {
        p3cont1++;
        f_ok($('#p3dcon6'));
      }else{
        p3cont1;
        f_no($('#p3dcon6'));
      }


      var p31dcon1=$('#p31dcon1').val();
      var p31dcon2=$('#p31dcon2').val();
      var p31dcon3=$('#p31dcon3').val();
      var p31dcon4=$('#p31dcon4').val();
      var p31dcon5=$('#p31dcon5').val();
      var p31dcon6=$('#p31dcon6').val();
      if (p31dcon1==p3pt2) {
        p3cont1++;
        f_ok($('#p31dcon1'));
      }else{
        p3cont1;
        f_no($('#p31dcon1'));
      }
      if (p31dcon2==p3pt2) {
        p3cont1++;
        f_ok($('#p31dcon2'));
      }else{
        p3cont1;
        f_no($('#p31dcon2'));
      }
      if (p31dcon3==p3pt2) {
        p3cont1++;
        f_ok($('#p31dcon3'));
      }else{
        p3cont1;
        f_no($('#p31dcon3'));
      }
      if (p31dcon4==p3pt2) {
        p3cont1++;
        f_ok($('#p31dcon4'));
      }else{
        p3cont1;
        f_no($('#p31dcon4'));
      }
      if (p31dcon5==p3pt2) {
        p3cont1++;
        f_ok($('#p31dcon5'));
      }else{
        p3cont1;
        f_no($('#p31dcon5'));
      }
      if (p31dcon6==p3pt2) {
        p3cont1++;
        f_ok($('#p31dcon6'));
      }else{
        p3cont1;
        f_no($('#p31dcon6'));
      }
      var result3=(p3cont1*1)/20
      cor=cor + result3;
      inc= inc + (1- result3);
      $('#nota1_3').val(result3.toFixed(2));
      $('#nota1_3').css("display", "");
      f_ok($('#nota1_3'));

      var p4dcon1=[$('#p4dcon1').val(),$('#p4dcon2').val(),$('#p4dcon3').val()];
      p4dcon1=p4dcon1.join('');
      var p4dcon2=[$('#p4dcon4').val(),$('#p4dcon5').val(),$('#p4dcon6').val()];
      p4dcon2=p4dcon2.join('');
      var p4dcon3=[$('#p4dcon7').val(),$('#p4dcon8').val(),$('#p4dcon9').val()];
      p4dcon3=p4dcon3.join('');
      var p4cont1=0;
      if (p4dcon1==p4num1[0]) {
        p4cont1++;
        f_ok($('#p4dcon1'));
        f_ok($('#p4dcon2'));
        f_ok($('#p4dcon3'));
      }else{
        p4cont1;
        f_no($('#p4dcon1'));
        f_no($('#p4dcon2'));
        f_no($('#p4dcon3'));
      }
      if (p4dcon2==p4num1[1]) {
        p4cont1++;
        f_ok($('#p4dcon4'));
        f_ok($('#p4dcon5'));
        f_ok($('#p4dcon6'));
      }else{
        p4cont1;
        f_no($('#p4dcon4'));
        f_no($('#p4dcon5'));
        f_no($('#p4dcon6'));
      }
      if (p4dcon3==(p4num1[0] + p4num1[1])) {
        p4cont1++;
        f_ok($('#p4dcon7'));
        f_ok($('#p4dcon8'));
        f_ok($('#p4dcon9'));
      }else{
        p4cont1;
        f_no($('#p4dcon7'));
        f_no($('#p4dcon8'));
        f_no($('#p4dcon9'));
      }


      var p4dcon4=[$('#p41dcon1').val(),$('#p41dcon2').val(),$('#p41dcon3').val()];
      p4dcon4=p4dcon4.join('');
      var p4dcon5=[$('#p41dcon4').val(),$('#p41dcon5').val(),$('#p41dcon6').val()];
      p4dcon5=p4dcon5.join('');
      var p4dcon6=[$('#p41dcon7').val(),$('#p41dcon8').val(),$('#p41dcon9').val()];
      p4dcon6=p4dcon6.join('');
      if (p4dcon4==p4num1[2]) {
        p4cont1++;
        f_ok($('#p41dcon1'));
        f_ok($('#p41dcon2'));
        f_ok($('#p41dcon3'));
      }else{
        p4cont1;
        f_no($('#p41dcon1'));
        f_no($('#p41dcon2'));
        f_no($('#p41dcon3'));
      }
      if (p4dcon5==p4num1[3]) {
        p4cont1++;
        f_ok($('#p41dcon4'));
        f_ok($('#p41dcon5'));
        f_ok($('#p41dcon6'));
      }else{
        p4cont1;
        f_no($('#p41dcon4'));
        f_no($('#p41dcon5'));
        f_no($('#p41dcon6'));
      }
      if (p4dcon6==(p4num1[2] + p4num1[3])) {
        p4cont1++;
        f_ok($('#p41dcon7'));
        f_ok($('#p41dcon8'));
        f_ok($('#p41dcon9'));
      }else{
        p4cont1;
        f_no($('#p41dcon7'));
        f_no($('#p41dcon8'));
        f_no($('#p41dcon9'));
      }

      var p4dcon7=[$('#p42dcon1').val(),$('#p42dcon2').val(),$('#p42dcon3').val()];
      p4dcon7=p4dcon7.join('');
      var p4dcon8=[$('#p42dcon4').val(),$('#p42dcon5').val(),$('#p42dcon6').val()];
      p4dcon8=p4dcon8.join('');
      var p4dcon9=[$('#p42dcon7').val(),$('#p42dcon8').val(),$('#p42dcon9').val()];
      p4dcon9=p4dcon9.join('');
      if (p4dcon7==p4num1[4]) {
        p4cont1++;
        f_ok($('#p42dcon1'));
        f_ok($('#p42dcon2'));
        f_ok($('#p42dcon3'));
      }else{
        p4cont1;
        f_no($('#p42dcon1'));
        f_no($('#p42dcon2'));
        f_no($('#p42dcon3'));
      }
      if (p4dcon8==p4num1[5]) {
        p4cont1++;
        f_ok($('#p42dcon4'));
        f_ok($('#p42dcon5'));
        f_ok($('#p42dcon6'));
      }else{
        p4cont1;
        f_no($('#p42dcon4'));
        f_no($('#p42dcon5'));
        f_no($('#p42dcon6'));
      }
      if (p4dcon9==(p4num1[4] - p4num1[5])) {
        p4cont1++;
        f_ok($('#p42dcon7'));
        f_ok($('#p42dcon8'));
        f_ok($('#p42dcon9'));
      }else{
        p4cont1;
        f_no($('#p42dcon7'));
        f_no($('#p42dcon8'));
        f_no($('#p42dcon9'));
      }
      var p4dcon10=[$('#p43dcon1').val(),$('#p43dcon2').val(),$('#p43dcon3').val()];
      p4dcon10=p4dcon10.join('');
      var p4dcon11=[$('#p43dcon4').val(),$('#p43dcon5').val(),$('#p43dcon6').val()];
      p4dcon11=p4dcon11.join('');
      var p4dcon12=[$('#p43dcon7').val(),$('#p43dcon8').val(),$('#p43dcon9').val()];
      p4dcon12=p4dcon12.join('');
      if (p4dcon10==p4num1[6]) {
        p4cont1++;
        f_ok($('#p43dcon1'));
        f_ok($('#p43dcon2'));
        f_ok($('#p43dcon3'));
      }else{
        p4cont1;
        f_no($('#p43dcon1'));
        f_no($('#p43dcon2'));
        f_no($('#p43dcon3'));
      }
      if (p4dcon11==p4num1[7]) {
        p4cont1++;
        f_ok($('#p43dcon4'));
        f_ok($('#p43dcon5'));
        f_ok($('#p43dcon6'));
      }else{
        p4cont1;
        f_no($('#p43dcon4'));
        f_no($('#p43dcon5'));
        f_no($('#p43dcon6'));
      }
      if (p4dcon12==(p4num1[6] - p4num1[7])) {
        p4cont1++;
        f_ok($('#p43dcon7'));
        f_ok($('#p43dcon8'));
        f_ok($('#p43dcon9'));
      }else{
        p4cont1;
        f_no($('#p43dcon7'));
        f_no($('#p43dcon8'));
        f_no($('#p43dcon9'));
      }

      var result4=(p4cont1*2)/12
      cor=cor + result4;
      inc= inc + (2- result4);
      $('#nota1_4').val(result4.toFixed(2));
      $('#nota1_4').css("display", "");
      f_ok($('#nota1_4'));


      var p5dcon1=$('#p5dcon1').val();
      var p5dcon2=$('#p5dcon2').val();
      var p5dcon3=$('#p5dcon3').val();
      var p5dcon4=$('#p5dcon4').val();
      var p5dcon5=$('#p5dcon5').val();
      var p5dcon6=$('#p5dcon6').val();
      var p5dcon7=$('#p5dcon7').val();
      var p5dcon8=$('#p5dcon8').val();
      var p5cont1=0;
      if (p5dcon1==(p5num1[0] + p5num1[1])) {
        p5cont1++;
        f_ok($('#p5dcon1'));
      }else{
        p5cont1;
        f_no($('#p5dcon1'));
      }
      if (p5dcon2==(p5num1[2] + p5num1[3])) {
        p5cont1++;
        f_ok($('#p5dcon2'));
      }else{
        p5cont1;
        f_no($('#p5dcon2'));
      }
      if (p5dcon3==(p5num1[4] + p5num1[5])) {
        p5cont1++;
        f_ok($('#p5dcon3'));
      }else{
        p5cont1;
        f_no($('#p5dcon3'));
      }
      if (p5dcon4==(p5num1[7] + p5num1[6])) {
        p5cont1++;
        f_ok($('#p5dcon4'));
      }else{
        p5cont1;
        f_no($('#p5dcon4'));
      }
      if (p5dcon5==(p5num1[8] + p5num1[9])) {
        p5cont1++;
        f_ok($('#p5dcon5'));
      }else{
        p5cont1;
        f_no($('#p5dcon5'));
      }
      if (p5dcon6==(p5num1[11] + p5num1[10])) {
        p5cont1++;
        f_ok($('#p5dcon6'));
      }else{
        p5cont1;
        f_no($('#p5dcon6'));
      }
      if (p5dcon7==(p5num1[12] + p5num1[13])) {
        p5cont1++;
        f_ok($('#p5dcon7'));
      }else{
        p5cont1;
        f_no($('#p5dcon7'));
      }
      if (p5dcon8==(p5num1[15] + p5num1[14])) {
        p5cont1++;
        f_ok($('#p5dcon8'));
      }else{
        p5cont1;
        f_no($('#p5dcon8'));
      }

      var result5=(p5cont1*2)/8
      cor=cor + result5;
      inc= inc + (2- result5);
      $('#nota1_5').val(result5.toFixed(2));
      $('#nota1_5').css("display", "");
      f_ok($('#nota1_5'));

      
      var p6cont1=0;
      var p6aux1=[p6num1];
      for (var i =0; i < 10; i++) {
        p6aux1.push(p6aux1[i] + 2);
      }
      for (var i =0; i < 11; i++) {
        if ($('#p6dcon'+(i + 1)).val()==p6aux1[i]) {
            p6cont1++;
            f_ok($('#p6dcon'+(i + 1)));
        }else{
            p6cont1;
            f_no($('#p6dcon'+(i + 1)));
        }
      }
      var p6aux2=[p6num2];
      for (var i =0; i < 10; i++) {
        p6aux2.push(p6aux2[i] + 2);
      }
      for (var i =0; i < 11; i++) {
        if ($('#p61dcon'+(i + 1)).val()==p6aux2[i]) {
            p6cont1++;
            f_ok($('#p61dcon'+(i + 1)));
        }else{
            p6cont1;
            f_no($('#p61dcon'+(i + 1)));
        }
      }
      var result6=(p6cont1*1)/22
      cor=cor + result6;
      inc= inc + (1- result6);
      $('#nota1_6').val(result6.toFixed(2));
      $('#nota1_6').css("display", "");
      f_ok($('#nota1_6'));

      var p7im1=$('.p7im1 > img').attr('alt');
      var p7im2=$('.p7im2 > img').attr('alt');
      var p7im3=$('.p7im3 > img').attr('alt');
      var p7cont1=0;
      if (p7im1==p7aux2[0]) {
        p7cont1++;
        f_ok($('.p7im1'));
      }else{
        p7cont1;
        f_no($('.p7im1'));
      }
      if (p7im2==p7aux2[1]) {
        p7cont1++;
        f_ok($('.p7im2'));
      }else{
        p7cont1;
        f_no($('.p7im2'));
      }
      if (p7im3==p7aux2[2]) {
        p7cont1++;
        f_ok($('.p7im3'));
      }else{
        p7cont1;
        f_no($('.p7im3'));
      }
      var result7=(p7cont1*1)/3
      cor=cor + result7;
      inc= inc + (1- result7);
      $('#nota1_7').val(result7.toFixed(2));
      $('#nota1_7').css("display", "");
      f_ok($('#nota1_7'));

      var p8dcon1=$('#p8dcon1').val();
      var p8dcon2=$('#p8dcon2').val();
      var p8dcon3=$('#p8dcon3').val();
      var p8cont1=0;
      if (p8dcon1=='costurera') {
        p8cont1++;
        f_ok($('#p8dcon1'));
      }else{
        p8cont1;
        f_no($('#p8dcon1'));
      }
      if (p8dcon2=='pastelero') {
        p8cont1++;
        f_ok($('#p8dcon2'));
      }else{
        p8cont1;
        f_no($('#p8dcon2'));
      }
      if (p8dcon3=='88') {
        p8cont1++;
        f_ok($('#p8dcon3'));
      }else{
        p8cont1;
        f_no($('#p8dcon3'));
      }
      var result8=(p8cont1*1)/3
      cor=cor + result8;
      inc= inc + (1- result8);
      $('#nota1_8').val(result8.toFixed(2));
      $('#nota1_8').css("display", "");
      f_ok($('#nota1_8'));
      Calculo_nota();
   }
}