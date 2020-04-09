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
    validNumero(0, 2, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 2)
});
document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 2)
});
 function f_iniciar() {
    var pal1=['<img src="img/i1_p132_act133.jpg" alt="1" style="display:inline-block; min-width:50px;" class="img-responsive c1 ">',
        '<img src="img/i2_p132_act133.jpg" alt="2" style="display:inline-block; min-width:50px;" class="img-responsive c2">',
        '<img src="img/i3_p132_act133.jpg" alt="3" style="display:inline-block; min-width:50px;" class="img-responsive c3">',
        '<img src="img/i4_p132_act133.jpg" alt="4" style="display:inline-block; min-width:50px;" class="img-responsive c4">',
        '<img src="img/i5_p132_act133.jpg" alt="5" style="display:inline-block; min-width:50px;" class="img-responsive c5">'];
    var pal2=['<img src="img/i6_p132_act133.jpg" alt="1" style="display:inline-block; mix-blend-mode: multiply;" class="img-responsive c1 drag">',
        '<img src="img/i7_p132_act133.jpg" alt="3" style="display:inline-block; mix-blend-mode: multiply;" class="img-responsive c2 drag">',
        '<img src="img/i8_p132_act133.jpg" alt="2" style="display:inline-block;mix-blend-mode: multiply;" class="img-responsive c3 drag">',
        '<img src="img/i9_p132_act133.jpg" alt="5" style="display:inline-block;mix-blend-mode: multiply;" class="img-responsive c4 drag">',
        '<img src="img/i10_p132_act133.jpg" alt="4" style="display:inline-block;mix-blend-mode: multiply;" class="img-responsive c5 drag">'];
    pal1.sort(f_randomico);
    pal2.sort(f_randomico);
    $(".textos").append(pal2);
    for (var i =0; i < pal2.length; i++) {
      $(".p1cim1"+(i+1)).append(pal1[i]);  
    }
    $(".drag").draggable({
        revert:"invalid",
        zIndex:5,
        containment: ".actividad17",
        scroll: false,
    });
    
   $(".drop").droppable({
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag");
            ui.draggable.attr("style", "mix-blend-mode: multiply;");
            $(this).append(ui.draggable);
            
        }
   });



   var p3vec1=['<img src="img/i19_p132_act133.jpg" class="img-responsive" alt="">',
        '<img src="img/i20_p132_act133.jpg" class="img-responsive" alt="">',
        '<img src="img/i21_p132_act133.jpg" class="img-responsive" alt="">',
        '<img src="img/i22_p132_act133.jpg" class="img-responsive" alt="">'];
    var p3vec2=[11,20,14,12];
    var p3vec3=[];
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
            $("#p3im"+i).html(p3vec1[c]);
            p3vec3.push(p3vec2[c]);
        };



    var p4vec1=['<img src="img/i23_p132_act133.jpg" class="img-responsive" alt="">',
        '<img src="img/i24_p132_act133.jpg" class="img-responsive" alt="">'];
    var p4vec2=[26,13,19,12];
    var p4vec3=[];
    var myArray2 = ['0','1'];
       var i,j,k;
        for (i = myArray2.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray2[i - 1];
            myArray2[i - 1] = myArray2[j];
            myArray2[j] = k;
        }
    //aleatorio literal 1
        for (var i = 1; i <= 2 ; i++) {
            var c1=myArray2[i-1];
            $("#p4im"+i).html(p4vec1[c1]);
            if (c1=='0') {
              p4vec3.push('26');
              p4vec3.push('13');
            }else{
              p4vec3.push('19');
              p4vec3.push('12');
            }
            
        };
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1cim1=$('.p1cim1 img').attr('alt');
        var p1cim2=$('.p1cim2 img').attr('alt');
        var p1cim3=$('.p1cim3 img').attr('alt');
        var p1cim4=$('.p1cim4 img').attr('alt');
        var p1cim5=$('.p1cim5 img').attr('alt');

        var p1cim11=$('.p1cim11 img').attr('alt');
        var p1cim12=$('.p1cim12 img').attr('alt');
        var p1cim13=$('.p1cim13 img').attr('alt');
        var p1cim14=$('.p1cim14 img').attr('alt');
        var p1cim15=$('.p1cim15 img').attr('alt');
        var p1cont1=0;
        if (p1cim1==p1cim11) {
          p1cont1++;
          f_ok($('.p1cim1'));
        }else{
          p1cont1;
          f_no($('.p1cim1'));
        }
        if (p1cim2==p1cim12) {
          p1cont1++;
          f_ok($('.p1cim2'));
        }else{
          p1cont1;
          f_no($('.p1cim2'));
        }
        if (p1cim3==p1cim13) {
          p1cont1++;
          f_ok($('.p1cim3'));
        }else{
          p1cont1;
          f_no($('.p1cim3'));
        }
        if (p1cim4==p1cim14) {
          p1cont1++;
          f_ok($('.p1cim4'));
        }else{
          p1cont1;
          f_no($('.p1cim4'));
        }
        if (p1cim5==p1cim15) {
          p1cont1++;
          f_ok($('.p1cim5'));
        }else{
          p1cont1;
          f_no($('.p1cim5'));
        }
        var result1=(p1cont1*1)/5;
        cor=cor+parseFloat(result1);
        inc=inc+(1-parseFloat(result1))
        if (result1>=0.6) {
          f_ok($('#p1fe1'));
        }else{
          f_no($('#p1tr1'));
        }



        var p2imag1 =$('#p2imag1 > img').attr('alt');
        var p2imag2 =$('#p2imag2 > img').attr('alt');
        var p2imag3 =$('#p2imag3 > img').attr('alt');
        var p2imag4 =$('#p2imag4 > img').attr('alt');
        var p2imag5 =$('#p2imag5 > img').attr('alt');
        var p2imag6 =$('#p2imag6 > img').attr('alt');
        var p2imag7 =$('#p2imag7 > img').attr('alt');
        var p2imag8 =$('#p2imag8 > img').attr('alt');
        var p2cont1=0;
        if (p2imag1=='1') {
          p2cont1++;
          f_ok($('#p2imag1'));
        }else {
          p2cont1;
          f_no($('#p2imag1'));
        }
        if (p2imag2=='2') {
          p2cont1++;
          f_ok($('#p2imag2'));
        }else {
          p2cont1;
          f_no($('#p2imag2'));
        }
        if (p2imag3=='3') {
          p2cont1++;
          f_ok($('#p2imag3'));
        }else {
          p2cont1;
          f_no($('#p2imag3'));
        }
        if (p2imag4=='1') {
          p2cont1++;
          f_ok($('#p2imag4'));
        }else {
          p2cont1;
          f_no($('#p2imag4'));
        }


        if (p2imag5=='5') {
          p2cont1++;
          f_ok($('#p2imag5'));
        }else {
          p2cont1;
          f_no($('#p2imag5'));
        }
        if (p2imag6=='4') {
          p2cont1++;
          f_ok($('#p2imag6'));
        }else {
          p2cont1;
          f_no($('#p2imag6'));
        }
        if (p2imag7=='6') {
          p2cont1++;
          f_ok($('#p2imag7'));
        }else {
          p2cont1;
          f_no($('#p2imag7'));
        }
        if (p2imag8=='5') {
          p2cont1++;
          f_ok($('#p2imag8'));
        }else {
          p2cont1;
          f_no($('#p2imag8'));
        }
        var result2=(p2cont1*1)/8;
        cor=cor+parseFloat(result2);
        inc=inc+(1-parseFloat(result2))
        if (result2>=0.6) {
          f_ok($('#p2fe1'));
        }else{
          f_no($('#p2tr1'));
        }

        var p3dcon1=$('#p3dcon1').val();
        var p3dcon2=$('#p3dcon2').val();
        var p3dcon3=$('#p3dcon3').val();
        var p3cont1=0;
        if (p3dcon1==p3vec3[0]) {
          p3cont1++;
          f_ok($('#p3dcon1'));
        }else{
          p3cont1;
          f_no($('#p3dcon1'));
        }
        if (p3dcon2==p3vec3[1]) {
          p3cont1++;
          f_ok($('#p3dcon2'));
        }else{
          p3cont1;
          f_no($('#p3dcon2'));
        }
        if (p3dcon3==(p3vec3[0] + p3vec3[1])) {
          p3cont1++;
          f_ok($('#p3dcon3'));
        }else{
          p3cont1;
          f_no($('#p3dcon3'));
        }
        var p3dcon10=$('#p3dcon10').val();
        var p3dcon11=$('#p3dcon11').val();
        var p3dcon12=$('#p3dcon12').val();
        
        if (p3dcon10==p3vec3[2]) {
          p3cont1++;
          f_ok($('#p3dcon10'));
        }else{
          p3cont1;
          f_no($('#p3dcon10'));
        }
        if (p3dcon11==p3vec3[3]) {
          p3cont1++;
          f_ok($('#p3dcon11'));
        }else{
          p3cont1;
          f_no($('#p3dcon11'));
        }
        if (p3dcon12==(p3vec3[2] + p3vec3[3])) {
          p3cont1++;
          f_ok($('#p3dcon12'));
        }else{
          p3cont1;
          f_no($('#p3dcon12'));
        }

        var p3dcon4=[$('#p3dcon4').val(),$('#p3dcon5').val()];
        var p3dcon5=p3dcon4.join('');
        var p3dcon6=[$('#p3dcon6').val(),$('#p3dcon7').val()];
        var p3dcon7=p3dcon6.join('');
        var p3dcon8=[$('#p3dcon8').val(),$('#p3dcon9').val()];
        var p3dcon9=p3dcon8.join('');
        if (p3dcon5==p3vec3[0]) {
          p3cont1++;
          f_ok($('#p3dcon5'));
          f_ok($('#p3dcon4'));
        }else{
          p3cont1;
          f_no($('#p3dcon5'));
          f_no($('#p3dcon4'));
        }
        if (p3dcon7==p3vec3[1]) {
          p3cont1++;
          f_ok($('#p3dcon7'));
          f_ok($('#p3dcon6'));
        }else{
          p3cont1;
          f_no($('#p3dcon7'));
          f_no($('#p3dcon6'));
        }
        if (p3dcon9==(p3vec3[0] + p3vec3[1])) {
          p3cont1++;
          f_ok($('#p3dcon9'));
          f_ok($('#p3dcon8'));
        }else{
          p3cont1;
          f_no($('#p3dcon9'));
          f_no($('#p3dcon8'));
        }

        var p3dcon13=[$('#p3dcon13').val(),$('#p3dcon14').val()];
        var p3dcon14=p3dcon13.join('');
        var p3dcon15=[$('#p3dcon15').val(),$('#p3dcon16').val()];
        var p3dcon16=p3dcon15.join('');
        var p3dcon17=[$('#p3dcon17').val(),$('#p3dcon18').val()];
        var p3dcon18=p3dcon17.join('');
        if (p3dcon14==p3vec3[2]) {
          p3cont1++;
          f_ok($('#p3dcon14'));
          f_ok($('#p3dcon13'));
        }else{
          p3cont1;
          f_no($('#p3dcon14'));
          f_no($('#p3dcon13'));
        }
        if (p3dcon16==p3vec3[3]) {
          p3cont1++;
          f_ok($('#p3dcon16'));
          f_ok($('#p3dcon15'));
        }else{
          p3cont1;
          f_no($('#p3dcon16'));
          f_no($('#p3dcon15'));
        }
        if (p3dcon18==(p3vec3[2] + p3vec3[3])) {
          p3cont1++;
          f_ok($('#p3dcon18'));
          f_ok($('#p3dcon17'));
        }else{
          p3cont1;
          f_no($('#p3dcon18'));
          f_no($('#p3dcon17'));
        }
        var result3=(p3cont1*2)/12;
        cor=cor+parseFloat(result3);
        inc=inc+(2-parseFloat(result3))
        if (result3>=1.5) {
          f_ok($('#p3fe1'));
        }else{
          f_no($('#p3tr1'));
        }



        var p4dcon1=$('#p4dcon1').val();
        var p4dcon2=$('#p4dcon2').val();
        var p4dcon3=$('#p4dcon3').val();
        var p4cont1=0;
        if (p4dcon1==p4vec3[0]) {
          p4cont1++;
          f_ok($('#p4dcon1'));
        }else{
          p4cont1;
          f_no($('#p4dcon1'));
        }
        if (p4dcon2==p4vec3[1]) {
          p4cont1++;
          f_ok($('#p4dcon2'));
        }else{
          p4cont1;
          f_no($('#p4dcon2'));
        }
        if (p4dcon3==(p4vec3[0] - p4vec3[1])) {
          p4cont1++;
          f_ok($('#p4dcon3'));
        }else{
          p4cont1;
          f_no($('#p4dcon3'));
        }
        var p4dcon10=$('#p4dcon10').val();
        var p4dcon11=$('#p4dcon11').val();
        var p4dcon12=$('#p4dcon12').val();
        
        if (p4dcon10==p4vec3[2]) {
          p4cont1++;
          f_ok($('#p4dcon10'));
        }else{
          p4cont1;
          f_no($('#p4dcon10'));
        }
        if (p4dcon11==p4vec3[3]) {
          p4cont1++;
          f_ok($('#p4dcon11'));
        }else{
          p4cont1;
          f_no($('#p4dcon11'));
        }
        if (p4dcon12==(p4vec3[2] - p4vec3[3])) {
          p4cont1++;
          f_ok($('#p4dcon12'));
        }else{
          p4cont1;
          f_no($('#p4dcon12'));
        }

        var p4dcon4=[$('#p4dcon4').val(),$('#p4dcon5').val()];
        var p4dcon5=p4dcon4.join('');
        var p4dcon6=[$('#p4dcon6').val(),$('#p4dcon7').val()];
        var p4dcon7=p4dcon6.join('');
        var p4dcon8=[$('#p4dcon8').val(),$('#p4dcon9').val()];
        var p4dcon9=p4dcon8.join('');
        if (p4dcon5==p4vec3[0]) {
          p4cont1++;
          f_ok($('#p4dcon5'));
          f_ok($('#p4dcon4'));
        }else{
          p4cont1;
          f_no($('#p4dcon5'));
          f_no($('#p4dcon4'));
        }
        if (p4dcon7==p4vec3[1]) {
          p4cont1++;
          f_ok($('#p4dcon7'));
          f_ok($('#p4dcon6'));
        }else{
          p4cont1;
          f_no($('#p4dcon7'));
          f_no($('#p4dcon6'));
        }
        if (p4dcon9==(p4vec3[0] - p4vec3[1])) {
          p4cont1++;
          f_ok($('#p4dcon9'));
          f_ok($('#p4dcon8'));
        }else{
          p4cont1;
          f_no($('#p4dcon9'));
          f_no($('#p4dcon8'));
        }

        var p4dcon13=[$('#p4dcon13').val(),$('#p4dcon14').val()];
        var p4dcon14=p4dcon13.join('');
        var p4dcon15=[$('#p4dcon15').val(),$('#p4dcon16').val()];
        var p4dcon16=p4dcon15.join('');
        var p4dcon17=[$('#p4dcon17').val(),$('#p4dcon18').val()];
        var p4dcon18=p4dcon17.join('');
        if (p4dcon14==p4vec3[2]) {
          p4cont1++;
          f_ok($('#p4dcon14'));
          f_ok($('#p4dcon13'));
        }else{
          p4cont1;
          f_no($('#p4dcon14'));
          f_no($('#p4dcon13'));
        }
        if (p4dcon16==p4vec3[3]) {
          p4cont1++;
          f_ok($('#p4dcon16'));
          f_ok($('#p4dcon15'));
        }else{
          p4cont1;
          f_no($('#p4dcon16'));
          f_no($('#p4dcon15'));
        }
        if (p4dcon18==(p4vec3[2] - p4vec3[3])) {
          p4cont1++;
          f_ok($('#p4dcon18'));
          f_ok($('#p4dcon17'));
        }else{
          p4cont1;
          f_no($('#p4dcon18'));
          f_no($('#p4dcon17'));
        }
        var result3=(p4cont1*2)/12;
        cor=cor+parseFloat(result3);
        inc=inc+(2-parseFloat(result3))
        if (result3>=1.5) {
          f_ok($('#p4fe1'));
        }else{
          f_no($('#p4tr1'));
        }

        var nota1_1=$('#nota1_1').val();
        if (nota1_1>=1.5) {
          f_ok($('#p5fe1'));
        }else{
          f_no($('#p5tr1'));
        }
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
        if (nota1_2>=1.5) {
          f_ok($('#p6fe1'));
        }else{
          f_no($('#p6tr1'));
        }
        if (!nota1_2) {
          inc=inc+2;
          f_no($('#nota1_2'));
          $('#nota1_2').attr('disabled','true');
        }else{
          cor=cor+parseFloat(nota1_2);
          inc=inc+(2-parseFloat(nota1_2));
          f_ok($('#nota1_2'));
          $('#nota1_2').attr('disabled','true');
        }
        Calculo_nota();
   }
}