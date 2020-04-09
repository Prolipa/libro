var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 1)
});
document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 1)
});
document.getElementById('nota1_3').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_3'), 1)
});
document.getElementById('nota1_4').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_4'), 1)
});
function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    $('.enc1').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')
            
        }

    })
    $('.enc2').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')
            
        }

    })
    $('.enc3').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')
            
        }

    })
    $('.enc4').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')

        }

    })
    $('.enc11').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')
            
        }

    })
    $('.enc12').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')
            
        }

    })
    $('.enc13').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')
            
        }

    })
    $('.enc14').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')

        }

    })
    $('.enc15').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')

        }

    })
    $('#a52cnm1').click(function(){

        if ($(this).hasClass('encierra1')) {
            $(this).removeClass('encierra1')

        }else{
            $(this).addClass('encierra1')
            $('#a52cnm2').removeClass('encierra1')
            $('#a52cnm3').removeClass('encierra1')
        }

    })
    $('#a52cnm2').click(function(){

        if ($(this).hasClass('encierra1')) {
            $(this).removeClass('encierra1')

        }else{
            $(this).addClass('encierra1')
            $('#a52cnm1').removeClass('encierra1')
            $('#a52cnm3').removeClass('encierra1')
        }

    })
    $('#a52cnm3').click(function(){

        if ($(this).hasClass('encierra1')) {
            $(this).removeClass('encierra1')

        }else{
            $(this).addClass('encierra1')
            $('#a52cnm2').removeClass('encierra1')
            $('#a52cnm1').removeClass('encierra1')
        }

    })
 function f_iniciar() {
    var p1ima1=['<div class="enc1"><img src="img/i5_p46_act52.png" style="mix-blend-mode: multiply;" class="img-responsive" alt=""></div>','<div class="enc2"><img src="img/i6_p46_act52.png" style="mix-blend-mode: multiply;" class="img-responsive" alt=""></div>','<div class="enc3"><img src="img/i7_p46_act52.png" style="mix-blend-mode: multiply;" class="img-responsive" alt=""></div>','<div class="enc4"><img src="img/i8_p46_act52.png" style="mix-blend-mode: multiply;" class="img-responsive" alt=""></div>'];
    var p1ima2=['<div class="enc11"><img src="img/i9_p46_act52.png" style="mix-blend-mode: multiply;" class="img-responsive" alt=""></div>','<div class="enc12"><img src="img/i10_p46_act52.png" style="mix-blend-mode: multiply;" class="img-responsive" alt=""></div>','<div class="enc13"><img src="img/i11_p46_act52.png" style="mix-blend-mode: multiply;" class="img-responsive" alt=""></div>','<div class="enc14"><img src="img/i12_p46_act52.png" style="mix-blend-mode: multiply;" class="img-responsive" alt=""></div>','<div class="enc15"><img src="img/i13_p46_act52.png" style="mix-blend-mode: multiply;" class="img-responsive" alt=""></div>'];
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
            $("#a52im"+i).html(p1ima1[c]);
            
        };
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
            var c=myArray2[i-1];
            $("#a52im1"+i).html(p1ima2[c]);
            
        };
    var p5txt1=['<img src="img/i19_p46_act52.png" class="img-responsive" alt=""><p>En palabras: <input type="text" class="form-control" id="p5inp1" style="text-align:center;"></p>','<img src="img/i20_p46_act52.png" class="img-responsive" alt=""><p>En palabras: <input type="text" class="form-control" style="text-align:center;" id="p5inp2"></p>','<img src="img/i21_p46_act52.png" class="img-responsive" alt=""><p>En números: <input type="text" style="text-align:center;" onkeypress="return soloNumeros1(event)" class="form-control" id="p5inp3"></p>']
    var myArray3 = ['0','1','2'];
    var i,j,k;
        for (i = myArray3.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray3[i - 1];
            myArray3[i - 1] = myArray3[j];
            myArray3[j] = k;
        }
        //aleatorio literal 1
        for (var i = 1; i <= 3 ; i++) {
            var c=myArray3[i-1];
            $("#a52tex"+i).html(p5txt1[c]);
            
        };
    var p5txt2=[1934,1834,3940];
    var myArray4 = ['0','1','2'];
    var i,j,k;
        for (i = myArray4.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray4[i - 1];
            myArray4[i - 1] = myArray4[j];
            myArray4[j] = k;
        }
        //aleatorio literal 1
        for (var i = 1; i <= 3 ; i++) {
            var c=myArray4[i-1];
            $("#a52cnm"+i).html(p5txt2[c]);
            
        };
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1conj1 =$('#p1conj1').val().toLowerCase();
        var p1conj2 =$('#p1conj2').val().toLowerCase();
        var p1conj3 =$('#p1conj3').val().toLowerCase();
        var res=['cono','esfera','cilindro'];
        var p1cn1=0 ,p1cn2=0,p1cn3=0;
        var p1rcn1=0;
        for (var i = 0; i < res.length; i++) {
            if (p1conj1==res[i]) {
                p1cn1++;
                res[i]=p1cn1;
                
            }
        }
        if (p1cn1=='1') {
                    p1rcn1++;
                    f_ok($('#p1conj1'));
                }else {
                    p1rcn1;
                    f_no($('#p1conj1'));
                }
        for (var i = 0; i < res.length; i++) {
            if (p1conj2==res[i]) {
                p1cn2++;
                res[i]=p1cn2;
            }
        }
        if (p1cn2=='1') {
                    p1rcn1++;
                    f_ok($('#p1conj2'));
                }else {
                    p1rcn1;
                    f_no($('#p1conj2'));
                }
        for (var i = 0; i < res.length; i++) {
            if (p1conj3==res[i]) {
                p1cn3++;
                res[i]=p1cn3;
            }
        }
        if (p1cn3=='1') {
                    p1rcn1++;
                    f_ok($('#p1conj3'));
                }else {
                    p1rcn1;
                    f_no($('#p1conj3'));
                }
        
        var p1conj11 =$('#p1conj11').val().toLowerCase();
        var p1conj12 =$('#p1conj12').val().toLowerCase();
        var p1conj13 =$('#p1conj13').val().toLowerCase();
        var p1conj14 =$('#p1conj14').val().toLowerCase();
        var p1conj15 =$('#p1conj15').val().toLowerCase();
        var p1conj16 =$('#p1conj16').val().toLowerCase();
        var p1conj17 =$('#p1conj17').val().toLowerCase();
        var p1cn11=0 ,p1cn12=0,p1cn13=0,p1cn14=0,p1cn15=0,p1cn16=0,p1cn17=0;
        var p1rcn11=0;
        var res1=['do','re','mi','fa','sol','la','si'];
        for (var i = 0; i < res1.length; i++) {
            if (p1conj11==res1[i]) {
                p1cn11++;
                res1[i]=p1cn11;
            }
        }
        if (p1cn11=='1') {
            p1rcn11++;
            f_ok($('#p1conj11'));
        }else {
            p1rcn11;
            f_no($('#p1conj11'));
        }
        for (var i = 0; i < res1.length; i++) {
            if (p1conj12==res1[i]) {
                p1cn12++;
                res1[i]=p1cn12;
            }
        }
        if (p1cn12=='1') {
            p1rcn11++;
            f_ok($('#p1conj12'));
        }else {
            p1rcn11;
            f_no($('#p1conj12'));
        }
        for (var i = 0; i < res1.length; i++) {
            if (p1conj13==res1[i]) {
                p1cn13++;
                res1[i]=p1cn13;
            }
        }
        if (p1cn13=='1') {
            p1rcn11++;
            f_ok($('#p1conj13'));
        }else {
            p1rcn11;
            f_no($('#p1conj13'));
        }
        for (var i = 0; i < res1.length; i++) {
            if (p1conj14==res1[i]) {
                p1cn14++;
                res1[i]=p1cn14;
            }
        }
        if (p1cn14=='1') {
            p1rcn11++;
            f_ok($('#p1conj14'));
        }else {
            p1rcn11;
            f_no($('#p1conj14'));
        }
        for (var i = 0; i < res1.length; i++) {
            if (p1conj15==res1[i]) {
                p1cn15++;
                res1[i]=p1cn15;
            }
        }
        if (p1cn15=='1') {
            p1rcn11++;
            f_ok($('#p1conj15'));
        }else {
            p1rcn11;
            f_no($('#p1conj15'));
        }
        for (var i = 0; i < res1.length; i++) {
            if (p1conj16==res1[i]) {
                p1cn16++;
                res1[i]=p1cn16;
            }
        }
        if (p1cn16=='1') {
            p1rcn11++;
            f_ok($('#p1conj16'));
        }else {
            p1rcn11;
            f_no($('#p1conj16'));
        }
        for (var i = 0; i < res1.length; i++) {
            if (p1conj17==res1[i]) {
                p1cn17++;
                res1[i]=p1cn17;
            }
        }
        if (p1cn17=='1') {
            p1rcn11++;
            f_ok($('#p1conj17'));
        }else {
            p1rcn11;
            f_no($('#p1conj17'));
        }
        var p1resu=((p1rcn1+p1rcn11)*1)/10;
        cor=cor+p1resu;
        inc=cor+(1-p1resu);
        var p5inp1=$('#p5inp1').val().toLowerCase();
        var p5inp2=$('#p5inp2').val().toLowerCase();
        var p5inp3=$('#p5inp3').val();
        var p5cn1=0,p5cn2=0,p5cn3=0;
        if (p5inp1=='tres mil setecientos veintiocho') {
            p5cn1++;
            f_ok($('#p5inp1'));
        }else {
            p5cn1;
            f_no($('#p5inp1'));
        }
        if (p5inp2=='tres mil doscientos trece') {
            p5cn1++;
            f_ok($('#p5inp2'));
        }else {
            p5cn1;
            f_no($('#p5inp2'));
        }
        if (p5inp3=='4269') {
            p5cn1++;
            f_ok($('#p5inp3'));
        }else {
            p5cn1;
            f_no($('#p5inp3'));
        }
        var p5resu=((p5cn1)*3)/3;
        cor=cor+p5resu;
        inc=cor+(1-p5resu);

        var a52dcon1=$('#a52dcon1').val();
        var a52dcon2=$('#a52dcon2').val();
        var a52dcon3=$('#a52dcon3').val().toLowerCase();
        var p6cn1=0;
        if (a52dcon1=='2634') {
            p6cn1++;
            f_ok($('#a52dcon1'));
        }else {
            p6cn1;
            f_no($('#a52dcon1'));
        }
        if (a52dcon2=='2624') {
            p6cn1++;
            f_ok($('#a52dcon2'));
        }else {
            p6cn1;
            f_no($('#a52dcon2'));
        }
        if (a52dcon3=='sábado' || a52dcon3=='sabado') {
            p6cn1++;
            f_ok($('#a52dcon3'));
        }else {
            p6cn1;
            f_no($('#a52dcon3'));
        }
        var p6enc1=$('.encierra1').html();
        if (p6enc1===undefined) {
            p6cn1;
            f_no($('#a52cnm1'));
            f_no($('#a52cnm2'));
            f_no($('#a52cnm3'));
        }else {
            if (p6enc1=='3940') {
            p6cn1++;
            f_ok($('.encierra1'));
        }else {
            p6cn1;
            f_no($('.encierra1'));
        }    
        }
        
        var p6resu=((p6cn1)*1)/4;
        cor=cor+p6resu;
        inc=cor+(1-p6resu);
        var p8ma1=$('#p8ma1').val().toLowerCase();
        var p8ma2=$('#p8ma2').val().toLowerCase();
        var p8ma3=$('#p8ma3').val().toLowerCase();
        var p8ma4=$('#p8ma4').val().toLowerCase();
        var p8ma5=$('#p8ma5').val();
        var p8cn1=0;
        if (p8ma1=='arte') {
            p8cn1++;
            f_ok($('#p8ma1'));
        }else {
            p8cn1;
            f_no($('#p8ma1'));
        }
        if (p8ma2=='educación física' || p8ma2=='educacion fisica' || p8ma2=='ed. física' || p8ma2=='ed. fisica') {
            p8cn1++;
            f_ok($('#p8ma2'));
        }else {
            p8cn1;
            f_no($('#p8ma2'));
        }
        if (p8ma3=='matemática' || p8ma3=='matematica') {
            p8cn1++;
            f_ok($('#p8ma3'));
        }else {
            p8cn1;
            f_no($('#p8ma3'));
        }
        if (p8ma4=='lengua') {
            p8cn1++;
            f_ok($('#p8ma4'));
        }else {
            p8cn1;
            f_no($('#p8ma4'));
        }
        if (p8ma5=='30') {
            p8cn1++;
            f_ok($('#p8ma5'));
        }else {
            p8cn1;
            f_no($('#p8ma5'));
        }
        var p8resu=((p8cn1)*1)/5;
        cor=cor+p8resu;
        inc=cor+(1-p8resu);
        var nota1_1=parseFloat($('#nota1_1').val());
        var nota1_2=parseFloat($('#nota1_2').val());
        var nota1_3=parseFloat($('#nota1_3').val());
        var nota1_4=parseFloat($('#nota1_4').val());
        if (!nota1_1) {
            nota1_1=0;
            f_no($('#nota1_1'));
        }else {
            nota1_1;
            f_ok($('#nota1_1'));
        }
        if (!nota1_2) {
            nota1_2=0;
            f_no($('#nota1_2'));
        }else {
            nota1_2;
            f_ok($('#nota1_2'));
        }
        if (!nota1_3) {
            nota1_3=0;
            f_no($('#nota1_3'));
        }else {
            nota1_3;
            f_ok($('#nota1_3'));
        }
        if (!nota1_4) {
            nota1_4=0;
            f_no($('#nota1_4'));
        }else {
            nota1_4;
            f_ok($('#nota1_4'));
        }
        var p9resu=(nota1_1+nota1_2+nota1_3+nota1_4);
        cor=cor+p9resu;
        inc=cor+(4-p9resu);
        Calculo_nota();
   }
}