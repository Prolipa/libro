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
 function f_iniciar() {
    var a87vec1=['11.°','32.°','15.°','44.°','10002.°'];
    var a87vec2=['<input type="text" class="form-control" style="border:none; border-bottom: 1px dotted black;" id="p2in1">','<input type="text" class="form-control" style="border:none; border-bottom: 1px dotted black;" id="p2in2">','<input type="text" class="form-control" style="border:none; border-bottom: 1px dotted black;" id="p2in3">','<input type="text" class="form-control" style="border:none; border-bottom: 1px dotted black;" id="p2in4">','<input type="text" class="form-control" style="border:none; border-bottom: 1px dotted black;" id="p2in5">'];
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
      var c=myArray1[i-1];
      $("#a87im"+(i)).html(a87vec1[c]);
      $("#a87inp"+(i)).html(a87vec2[c]);
    };
    var p3vec1=['<ul style="color: #005CA9"><li><span class="text-question" style="color: black;">Esta es la (22.°) <input type="text" style="border:none; text-align: center; border-bottom: 1px dotted black; width: 180px;" id="p3in1"> reunión de graduados.</span></li></ul>',
    '<ul style="color: #005CA9"><li><span class="text-question" style="color: black;">Celebró su (71.°) <input type="text" style="border:none; text-align: center; border-bottom: 1px dotted black; width: 180px;" id="p3in2"> cumpleaños.</span></li></ul>',
    '<ul style="color: #005CA9"><li><span class="text-question" style="color: black;">Pasó al (12.°) <input type="text" style="border:none; text-align: center; border-bottom: 1px dotted black; width: 180px;" id="p3in3"> nivel del juego.</span></li></ul>',
    '<ul style="color: #005CA9"><li><span class="text-question" style="color: black;">Este es el (63.°) <input type="text" style="border:none; text-align: center; border-bottom: 1px dotted black; width: 180px;" id="p3in4"> congreso de dentistas.</span></li></ul>',
    '<ul style="color: #005CA9"><li><span class="text-question" style="color: black;">En la maratón, llegó en el (25.°) <input type="text" style="border:none; text-align: center; border-bottom: 1px dotted black; width: 140px;" id="p3in5"> lugar.</span></li></ul>'];
    var myArray2 = ['0','1','2','3','4'];
    
    var i,j,k;
    for (i = myArray2.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray2[i - 1];
      myArray2[i - 1] = myArray2[j];
      myArray2[j] = k;
    }
    var p3vec2=[];
    //aleatorio literal 1
    for (var i = 1; i <= 5 ; i++) {
      var c=myArray2[i-1];
      p3vec2.push(p3vec1[c]);
    };
    $("#p3im1").html(p3vec2);
    bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var p2in1=$('#p2in1').val().toLowerCase();
      var p2in2=$('#p2in2').val().toLowerCase();
      var p2in3=$('#p2in3').val().toLowerCase();
      var p2in4=$('#p2in4').val().toLowerCase();
      var p2in5=$('#p2in5').val().toLowerCase();
      var p2cont1=0;
      if (p2in1=='décimo primero' || p2in1=='undécimo' || p2in1=='décimo primero/undécimo') {
        p2cont1++;
        f_ok($('#p2in1'));
      }else{
        p2cont1;
        f_no($('#p2in1'));
      }
      if (p2in2=='trigésimo segundo') {
        p2cont1++;
        f_ok($('#p2in2'));
      }else{
        p2cont1;
        f_no($('#p2in2'));
      }
      if (p2in3=='décimo quinto') {
        p2cont1++;
        f_ok($('#p2in3'));
      }else{
        p2cont1;
        f_no($('#p2in3'));
      }
      if (p2in4=='cuadragésimo cuarto' ) {
        p2cont1++;
        f_ok($('#p2in4'));
      }else{
        p2cont1;
        f_no($('#p2in4'));
      }
      if (p2in5=='diezmilésimo segundo') {
        p2cont1++;
        f_ok($('#p2in5'));
      }else{
        p2cont1;
        f_no($('#p2in5'));
      }
      var result1=(p2cont1*4)/5;
      cor=cor + result1;
      inc=inc + (4 - result1);
      var p3in1=$('#p3in1').val().toLowerCase();
      var p3in2=$('#p3in2').val().toLowerCase();
      var p3in3=$('#p3in3').val().toLowerCase();
      var p3in4=$('#p3in4').val().toLowerCase();
      var p3in5=$('#p3in5').val().toLowerCase();
      var p3cont1=0;
      if (p3in1=='vigésimo segunda') {
        p3cont1++;
        f_ok($('#p3in1'));
      }else{
        p3cont1;
        f_no($('#p3in1'));
      }
      if (p3in2=='septuagésimo primer') {
        p3cont1++;
        f_ok($('#p3in2'));
      }else{
        p3cont1;
        f_no($('#p3in2'));
      }
      if (p3in3=='duodécimo' || p3in3=='décimo segundo' || p3in3=='duodécimo o décimo segundo') {
        p3cont1++;
        f_ok($('#p3in3'));
      }else{
        p3cont1;
        f_no($('#p3in3'));
      }
      if (p3in4=='sexagésimo tercer') {
        p3cont1++;
        f_ok($('#p3in4'));
      }else{
        p3cont1;
        f_no($('#p3in4'));
      }
      if (p3in5=='vigésimo quinto') {
        p3cont1++;
        f_ok($('#p3in5'));
      }else{
        p3cont1;
        f_no($('#p3in5'));
      }
      var result2=(p3cont1*4)/5;
      cor=cor + result2;
      inc=inc + (4 - result2);

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
      Calculo_nota();
   }
}