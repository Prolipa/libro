var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10,suma_total=0,contador=0,suma_total1=0,contador1=0;
var claseAnimada ='animate bounceIn';
var sumando1=0;
var sumando2=0;
var sumando3=0;
var sumando11=0;
var sumando12=0;
var sumando13=0;
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

function limpia(){
    for (var i = 2; i<=21; i++) {
        if ($('#p4pnt'+(i)).hasClass('pinta')) {
            $('#p4pnt'+(i)).removeClass('pinta');
                
        }
    }
    $('#p4dcon1').val('0');
    suma_total=0;
    contador=0;
}
function limpia1(){
    for (var i = 2; i<=26; i++) {
        if ($('#p41pnt'+(i)).hasClass('pinta')) {
            $('#p41pnt'+(i)).removeClass('pinta');
                
        }
    }
    $('#p41dcon1').val('0');
    suma_total1=0;
    contador1=0;
}
 function f_iniciar() {
    var numero = parseInt((Math.random() * 5) + 1);
    var numero1 = parseInt((Math.random() * 4) + 1);
    var numero2= numero + numero1;
    var p3vec1=['<img src="img/i1_p107_act108.jpg" width="140px" class="img-responsive" style="display: inline-block;">'];
    for (var i =0; i < numero; i++) {
      p3vec1.push('<img src="img/i2_p107_act108.jpg" width="20px" class="img-responsive" style="display: inline-block;">');
    }
    var p3vec2=[];
    for (var i =0; i < numero1; i++) {
      p3vec2.push('<img src="img/i2_p107_act108.jpg" width="20px" class="img-responsive" style="display: inline-block;">');
    }
    $('#p3im1').html(p3vec1);
    $('#p3im11').html(p3vec2);
    $('#a3p1').html(' <b> 1'+numero+'</b>');

    var numero3 = parseInt((Math.random() * 5) + 1);
    var numero4 = parseInt((Math.random() * 4) + 1);
    var numero5= numero3 + numero4;
    var p3vec3=['<img src="img/i1_p107_act108.jpg" width="140px" class="img-responsive" style="display: inline-block;">'];
    for (var i =0; i < numero3; i++) {
      p3vec3.push('<img src="img/i2_p107_act108.jpg" width="20px" class="img-responsive" style="display: inline-block;">');
    }
    var p3vec4=[];
    for (var i =0; i < numero4; i++) {
      p3vec4.push('<img src="img/i2_p107_act108.jpg" width="20px" class="img-responsive" style="display: inline-block;">');
    }
    $('#p3im2').html(p3vec3);
    $('#p3im12').html(p3vec4);

    /////////////////////////////pregunta4/////////////////////////////////////////////////////////////////////////////////////////////
    var p4num = parseInt((Math.random() * 10) + 10);
    var p4num1 = parseInt((Math.random() * 10) + 5);
    var p4nm1=0;
    var p4nm2=0;
    if (p4num>p4num1) {
        $('#p4da1').html(p4num);
        $('#p4da2').html(p4num1); 
        p4nm1=p4num;
        p4nm2=p4num1;
    }else {
        if (p4num==p4num1) {
            $('#p4da1').html((p4num1+1));
            $('#p4da2').html(p4num);
            p4nm1=(p4num1+1);
            p4nm2=p4num;    
        }else {
            $('#p4da1').html((p4num1));
            $('#p4da2').html(p4num);
            p4nm1=p4num1;
            p4nm2=p4num;
        }
        
    }
    var p4num3 = parseInt((Math.random() * 10) + 15);
    var p4num4 = parseInt((Math.random() * 10) + 5);
    var p4nm3=0;
    var p4nm4=0;
    if (p4num3>p4num4) {
        $('#p41da1').html(p4num3);
        $('#p41da2').html(p4num4); 
        p4nm3=p4num3;
        p4nm4=p4num4;
    }else {
        if (p4num3==p4num4) {
            $('#p41da1').html((p4num4+1));
            $('#p41da2').html(p4num3);
            p4nm3=(p4num4+1);
            p4nm4=p4num3;    
        }else {
            $('#p41da1').html((p4num4));
            $('#p41da2').html(p4num3);
            p4nm3=p4num4;
            p4nm4=p4num3;
        }
        
    }
    if ($('.pint1').hasClass('pinta')) {
        var auxr1=$('#p4pnt1 > b').html();
        suma_total=suma_total-parseInt(auxr1);
        $('#p4dcon1').val(suma_total);
        
    }

    
    $('.pint2').click(function(){

            if ($(this).hasClass('pinta')) {

                
            }else{
                if (contador=='0') {

                    $(this).addClass('pinta')
                    var auxr1=$('#p4pnt2 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    sumando1=suma_total;

                    $('#p4dcon1').val(suma_total);
                    contador++;
                }else if (contador=='1') {
                    if (suma_total>($('#p4pnt2 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#p4pnt2 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#p4dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                }
                else {
                    alert('Pinte solo dos opciones');
                }
                
            }
        })
    $('.pint3').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#p4pnt3 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#p4dcon1').val(suma_total);
                    sumando1=suma_total;
                    contador++;
                }else if (contador=='1') {
                    if (suma_total>($('#p4pnt3 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#p4pnt3 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        sumando2=rst1;
                        sumando3=suma_total;
                        $('#p4dcon1').val(suma_total);
                        contador++;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.pint4').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                $(this).addClass('pinta')
                    var auxr1=$('#p4pnt4 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#p4dcon1').val(suma_total);
                    sumando1=suma_total;
                    contador++;
                }else if (contador=='1') {
                    if (suma_total>($('#p4pnt4 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#p4pnt4 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        sumando2=rst1;
                        sumando3=suma_total;
                        $('#p4dcon1').val(suma_total);
                        contador++;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.pint5').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#p4pnt5 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#p4dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#p4pnt5 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#p4pnt5 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#p4dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.pint6').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#p4pnt6 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#p4dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#p4pnt6 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#p4pnt6 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#p4dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.pint7').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#p4pnt7 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#p4dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#p4pnt7 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#p4pnt7 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#p4dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.pint8').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#p4pnt8 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#p4dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#p4pnt8 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#p4pnt8 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#p4dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.pint9').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#p4pnt9 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#p4dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#p4pnt9 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#p4pnt9 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#p4dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.pint10').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#p4pnt10 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#p4dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#p4pnt10 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#p4pnt10 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#p4dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.pint11').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#p4pnt11 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#p4dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#p4pnt11 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#p4pnt11 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#p4dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.pint12').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#p4pnt12 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#p4dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#p4pnt12 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#p4pnt12 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#p4dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.pint13').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#p4pnt13 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#p4dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#p4pnt13 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#p4pnt13 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#p4dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.pint14').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#p4pnt14 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#p4dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#p4pnt14 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#p4pnt14 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#p4dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.pint15').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#p4pnt15 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#p4dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#p4pnt15 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#p4pnt15 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#p4dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.pint16').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#p4pnt16 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#p4dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#p4pnt16 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#p4pnt16 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#p4dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.pint17').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#p4pnt17 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#p4dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#p4pnt17 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#p4pnt17 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#p4dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.pint18').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#p4pnt18 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#p4dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#p4pnt18 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#p4pnt18 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#p4dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.pint19').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#p4pnt19 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#p4dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#p4pnt19 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#p4pnt19 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#p4dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.pint20').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#p4pnt20 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#p4dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#p4pnt20 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#p4pnt20 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#p4dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.pint21').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#p4pnt21 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#p4dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#p4pnt21 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#p4pnt21 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#p4dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })



    if ($('.p4pint1').hasClass('pinta1')) {
        var p4auxr1=$('#p41pnt1 > b').html();
        suma_total1=suma_total1-parseInt(p4auxr1);
        $('#p41dcon1').val(suma_total1);
        
    }

    
    $('.p4pint2').click(function(){

            if ($(this).hasClass('pinta1')) {

                
            }else{
                if (contador1=='0') {

                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt2 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    sumando11=suma_total1;

                    $('#p41dcon1').val(suma_total1);
                    contador1++;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt2 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt2 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                        sumando12=rst1;
                        sumando13=suma_total1;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                }
                else {
                    alert('Pinte solo dos opciones');
                }
                
            }
        })
    $('.p4pint3').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt3 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    sumando11=suma_total1;
                    contador1++;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt3 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt3 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        sumando12=rst1;
                        sumando13=suma_total1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.p4pint4').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt4 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    sumando11=suma_total1;
                    contador1++;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt4 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt4 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        sumando12=rst1;
                        sumando13=suma_total1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.p4pint5').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt5 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    contador1++;
                    sumando11=suma_total1;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt5 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt5 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                        sumando12=rst1;
                        sumando13=suma_total1;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.p4pint6').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt6 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    contador1++;
                    sumando11=suma_total1;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt6 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt6 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                        sumando12=rst1;
                        sumando13=suma_total1;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.p4pint7').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt7 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    contador1++;
                    sumando11=suma_total1;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt7 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt7 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                        sumando12=rst1;
                        sumando13=suma_total1;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.p4pint8').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt8 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    contador1++;
                    sumando11=suma_total1;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt8 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt8 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                        sumando12=rst1;
                        sumando13=suma_total1;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.p4pint9').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt9 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    contador1++;
                    sumando11=suma_total1;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt9 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt9 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                        sumando12=rst1;
                        sumando13=suma_total1;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.p4pint10').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt10 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    contador1++;
                    sumando11=suma_total1;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt10 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt10 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                        sumando12=rst1;
                        sumando13=suma_total1;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.p4pint11').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt11 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    contador1++;
                    sumando11=suma_total1;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt11 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt11 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                        sumando12=rst1;
                        sumando13=suma_total1;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.p4pint12').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt12 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    contador1++;
                    sumando11=suma_total1;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt12 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt12 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                        sumando12=rst1;
                        sumando13=suma_total1;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.p4pint13').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt13 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    contador1++;
                    sumando11=suma_total1;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt13 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt13 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                        sumando12=rst1;
                        sumando13=suma_total1;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.p4pint14').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt14 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    contador1++;
                    sumando11=suma_total1;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt14 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt14 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                        sumando12=rst1;
                        sumando13=suma_total1;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.p4pint15').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt15 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    contador1++;
                    sumando11=suma_total1;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt15 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt15 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                        sumando12=rst1;
                        sumando13=suma_total1;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.p4pint16').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt16 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    contador1++;
                    sumando11=suma_total1;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt16 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt16 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                        sumando12=rst1;
                        sumando13=suma_total1;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.p4pint17').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt17 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    contador1++;
                    sumando11=suma_total1;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt17 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt17 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                        sumando12=rst1;
                        sumando13=suma_total1;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.p4pint18').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt18 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    contador1++;
                    sumando11=suma_total1;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt18 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt18 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                        sumando12=rst1;
                        sumando13=suma_total1;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.p4pint19').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt19 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    contador1++;
                    sumando11=suma_total1;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt19 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt19 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                        sumando12=rst1;
                        sumando13=suma_total1;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.p4pint20').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt20 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    contador1++;
                    sumando11=suma_total1;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt20 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt20 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                        sumando12=rst1;
                        sumando13=suma_total1;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.p4pint21').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt21 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    contador1++;
                    sumando11=suma_total1;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt21 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt21 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                        sumando12=rst1;
                        sumando13=suma_total1;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.p4pint22').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt22 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    contador1++;
                    sumando11=suma_total1;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt22 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt22 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                        sumando12=rst1;
                        sumando13=suma_total1;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.p4pint23').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt23 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    contador1++;
                    sumando11=suma_total1;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt23 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt23 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                        sumando12=rst1;
                        sumando13=suma_total1;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.p4pint24').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt24 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    contador1++;
                    sumando11=suma_total1;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt24 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt24 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                        sumando12=rst1;
                        sumando13=suma_total1;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.p4pint25').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt25 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    contador1++;
                    sumando11=suma_total1;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt25 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt25 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                        sumando12=rst1;
                        sumando13=suma_total1;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })
    $('.p4pint26').click(function(){

            if ($(this).hasClass('pinta1')) {
                
            }else{
                if (contador1=='0') {
                    $(this).addClass('pinta1')
                    var p4auxr1=$('#p41pnt26 > b').html();
                    suma_total1=suma_total1+parseInt(p4auxr1);
                    $('#p41dcon1').val(suma_total1);
                    contador1++;
                    sumando11=suma_total1;
                }else if (contador1=='1') {
                    if (suma_total1>($('#p41pnt26 > b').html())) {
                        $(this).addClass('pinta1')
                        var p4auxr1=$('#p41pnt26 > b').html();
                        var rst1=suma_total1-parseInt(p4auxr1);
                        suma_total1=suma_total1-rst1;
                        $('#p41dcon1').val(suma_total1);
                        contador1++;
                        sumando12=rst1;
                        sumando13=suma_total1;
                    }else {
                        alert('El segundo número seleccionado debe ser menor al primer número seleccionado');    
                    }
                    
                }else {
                    alert('Pinte solo dos opciones');
                }
            }

        })

    //////////////////////////////////////////////////pregunta5///////////////////////////////////////////////////
    var p5num3 = parseInt((Math.random() * 10) + 17);
    var p5num4 = parseInt((Math.random() * 10) + 5);
    var p5nm3=0;
    var p5nm4=0;
    if (p5num3>p5num4) {
        $('#p5da1').html(p5num3);
        $('#p5da2').html(p5num4); 
        $('#p5da3').html(p5num3);
        $('#p5da4').html(p5num4); 
        p5nm3=p5num3;
        p5nm4=p5num4;
    }else {
        if (p5num3==p5num4) {
            $('#p5da1').html((p5num4+1));
            $('#p5da2').html(p5num3);
            $('#p5da3').html((p5num4+1));
            $('#p5da4').html(p5num3);
            p5nm3=(p5num4+1);
            p5nm4=p5num3;    
        }else {
            $('#p5da1').html((p5num4));
            $('#p5da2').html(p5num3);
            $('#p5da3').html((p5num4));
            $('#p5da4').html(p5num3);
            p5nm3=p5num4;
            p5nm4=p5num3;
        }
        
    }

    var p5num1 = parseInt((Math.random() * 10) + 10);
    var p5num2 = parseInt((Math.random() * 10) + 10);
    $('#p5da5').html(p5num1);
    $('#p5da6').html(p5num2);
   	bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p3dcon1= $('#p3dcon1').val();
        var p3dcon2= $('#p3dcon2').val();
        var p3dcon3= $('#p3dcon3').val();
        var p3dcon4= $('#p3dcon4').val();
        var p3dcon5= $('#p3dcon5').val();
        var p3dcon6= $('#p3dcon6').val();
        var p3dcon7= $('#p3dcon7').val();
        
        var p3cont1=0;
        if (p3dcon1==numero1) {
          p3cont1++;
          f_ok($('#p3dcon1'));
        }else{
          p3cont1;
          f_no($('#p3dcon1'));
        }
        if (p3dcon2==('1'+(numero + numero1))) {
          p3cont1++;
          f_ok($('#p3dcon2'));
        }else{
          p3cont1;
          f_no($('#p3dcon2'));
        }
        if (p3dcon3=='1') {
          p3cont1++;
          f_ok($('#p3dcon3'));
        }else{
          p3cont1;
          f_no($('#p3dcon3'));
        }
        if (p3dcon4==numero) {
          p3cont1++;
          f_ok($('#p3dcon4'));
        }else{
          p3cont1;
          f_no($('#p3dcon4'));
        }
        if (p3dcon5==numero1) {
          p3cont1++;
          f_ok($('#p3dcon5'));
        }else{
          p3cont1;
          f_no($('#p3dcon5'));
        }
        if (p3dcon6=='1') {
          p3cont1++;
          f_ok($('#p3dcon6'));
        }else{
          p3cont1;
          f_no($('#p3dcon6'));
        }
        if (p3dcon7==numero2) {
          p3cont1++;
          f_ok($('#p3dcon7'));
        }else{
          p3cont1;
          f_no($('#p3dcon7'));
        }

        var p3dcon8= $('#p3dcon8').val();
        var p3dcon9= $('#p3dcon9').val();
        var p3dcon10= $('#p3dcon10').val();
        var p3dcon11= $('#p3dcon11').val();
        var p3dcon12= $('#p3dcon12').val();
        var p3dcon13= $('#p3dcon13').val();
        var p3dcon14= $('#p3dcon14').val();
        var p3dcon15= $('#p3dcon15').val();
        if (p3dcon8=='1'+numero3) {
          p3cont1++;
          f_ok($('#p3dcon8'));
        }else{
          p3cont1;
          f_no($('#p3dcon8'));
        }
        if (p3dcon9==numero4) {
          p3cont1++;
          f_ok($('#p3dcon9'));
        }else{
          p3cont1;
          f_no($('#p3dcon9'));
        }
        if (p3dcon10==('1'+(numero5))) {
          p3cont1++;
          f_ok($('#p3dcon10'));
        }else{
          p3cont1;
          f_no($('#p3dcon10'));
        }
        if (p3dcon11=='1') {
          p3cont1++;
          f_ok($('#p3dcon11'));
        }else{
          p3cont1;
          f_no($('#p3dcon11'));
        }
        if (p3dcon12==numero3) {
          p3cont1++;
          f_ok($('#p3dcon12'));
        }else{
          p3cont1;
          f_no($('#p3dcon12'));
        }
        if (p3dcon13==numero4) {
          p3cont1++;
          f_ok($('#p3dcon13'));
        }else{
          p3cont1;
          f_no($('#p3dcon13'));
        }
        if (p3dcon14=='1') {
          p3cont1++;
          f_ok($('#p3dcon14'));
        }else{
          p3cont1;
          f_no($('#p3dcon14'));
        }
        if (p3dcon15==numero5) {
          p3cont1++;
          f_ok($('#p3dcon15'));
        }else{
          p3cont1;
          f_no($('#p3dcon15'));
        }
        var result3=(p3cont1*2)/15;
        cor=cor+ parseFloat(result3);
        inc=inc+(2-parseFloat(result3));

        ///////////////////////////////////////////////pregunta4///////////////////////////////////////////////////////////
        $('#p41pnt1').unbind( "click" );
        $('#p41pnt2').unbind( "click" );
        $('#p41pnt3').unbind( "click" );
        $('#p41pnt4').unbind( "click" );
        $('#p41pnt5').unbind( "click" );
        $('#p41pnt6').unbind( "click" );
        $('#p41pnt7').unbind( "click" );
        $('#p41pnt8').unbind( "click" );
        $('#p41pnt9').unbind( "click" );
        $('#p41pnt10').unbind( "click" );
        $('#p41pnt11').unbind( "click" );
        $('#p41pnt12').unbind( "click" );
        $('#p41pnt13').unbind( "click" );
        $('#p41pnt14').unbind( "click" );
        $('#p41pnt15').unbind( "click" );
        $('#p41pnt16').unbind( "click" );
        $('#p41pnt17').unbind( "click" );
        $('#p41pnt18').unbind( "click" );
        $('#p41pnt19').unbind( "click" );
        $('#p41pnt20').unbind( "click" );
        $('#p41pnt21').unbind( "click" );
        $('#p41pnt22').unbind( "click" );
        $('#p41pnt23').unbind( "click" );
        $('#p41pnt24').unbind( "click" );
        $('#p41pnt25').unbind( "click" );
        $('#p41pnt26').unbind( "click" );
        var p41dlg =$('.pinta1').length;
        var p4cont1=0;
        if (p41dlg=='1') {
           $('.p4pint1').addClass('no-valid');
           $('.p4pint2').addClass('no-valid');
           $('.p4pint3').addClass('no-valid');
           $('.p4pint4').addClass('no-valid');
           $('.p4pint5').addClass('no-valid');
           $('.p4pint6').addClass('no-valid');
           $('.p4pint7').addClass('no-valid');
           $('.p4pint8').addClass('no-valid');
           $('.p4pint9').addClass('no-valid');
           $('.p4pint10').addClass('no-valid');
           $('.p4pint11').addClass('no-valid');
           $('.p4pint12').addClass('no-valid');
           $('.p4pint13').addClass('no-valid');
           $('.p4pint14').addClass('no-valid');
           $('.p4pint15').addClass('no-valid');
           $('.p4pint16').addClass('no-valid');
           $('.p4pint17').addClass('no-valid');
           $('.p4pint18').addClass('no-valid');
           $('.p4pint19').addClass('no-valid');
           $('.p4pint20').addClass('no-valid');
           $('.p4pint21').addClass('no-valid');
           $('.p4pint22').addClass('no-valid');
           $('.p4pint23').addClass('no-valid');
           $('.p4pint24').addClass('no-valid');
           $('.p4pint25').addClass('no-valid');
           $('.p4pint26').addClass('no-valid');     
           f_no($('#p41dcon1'));
           p4cont1;
        }else {
           if (sumando11==p4nm3 && sumando12==p4nm4 && sumando13==(p4nm3-p4nm4)) {
                p4cont1++;

                $('.pinta1').addClass('valid');

                f_ok($('#p41dcon1'));
            }else {
                p4cont1;
                $('.pinta1').addClass('no-valid');
                f_no($('#p41dcon1'));
            }
        }


        $('#p4pnt1').unbind( "click" );
        $('#p4pnt2').unbind( "click" );
        $('#p4pnt3').unbind( "click" );
        $('#p4pnt4').unbind( "click" );
        $('#p4pnt5').unbind( "click" );
        $('#p4pnt6').unbind( "click" );
        $('#p4pnt7').unbind( "click" );
        $('#p4pnt8').unbind( "click" );
        $('#p4pnt9').unbind( "click" );
        $('#p4pnt10').unbind( "click" );
        $('#p4pnt11').unbind( "click" );
        $('#p4pnt12').unbind( "click" );
        $('#p4pnt13').unbind( "click" );
        $('#p4pnt14').unbind( "click" );
        $('#p4pnt15').unbind( "click" );
        $('#p4pnt16').unbind( "click" );
        $('#p4pnt17').unbind( "click" );
        $('#p4pnt18').unbind( "click" );
        $('#p4pnt19').unbind( "click" );
        $('#p4pnt20').unbind( "click" );
        $('#p4pnt21').unbind( "click" );
        
        var p4dlg =$('.pinta').length;
        
        if (p4dlg=='1') {
           $('.pint1').addClass('no-valid');
           $('.pint2').addClass('no-valid');
           $('.pint3').addClass('no-valid');
           $('.pint4').addClass('no-valid');
           $('.pint5').addClass('no-valid');
           $('.pint6').addClass('no-valid');
           $('.pint7').addClass('no-valid');
           $('.pint8').addClass('no-valid');
           $('.pint9').addClass('no-valid');
           $('.pint10').addClass('no-valid');
           $('.pint11').addClass('no-valid');
           $('.pint12').addClass('no-valid');
           $('.pint13').addClass('no-valid');
           $('.pint14').addClass('no-valid');
           $('.pint15').addClass('no-valid');
           $('.pint16').addClass('no-valid');
           $('.pint17').addClass('no-valid');
           $('.pint18').addClass('no-valid');
           $('.pint19').addClass('no-valid');
           $('.pint20').addClass('no-valid');
           $('.pint21').addClass('no-valid');
           
           f_no($('#p4dcon1'));
           p4cont1;
        }else {
           if (sumando1==p4nm1 && sumando2==p4nm2 && sumando3==(p4nm1-p4nm2)) {
                p4cont1++;

                $('.pinta').addClass('valid');

                f_ok($('#p4dcon1'));
            }else {
                p4cont1;
                $('.pinta').addClass('no-valid');
                f_no($('#p4dcon1'));
            }
        }
        var result4=(p4cont1*2)/2;
        cor=cor+ parseFloat(result4);
        inc=inc+(2-parseFloat(result4));

        /////////////////////////////////////pregunta5///////////////////////////////////////////////////////
        var p5dcon1=$('#p5dcon1').val();
        var p5dcon2=$('#p5dcon2').val();
        var p5dcon3=$('#p5dcon3').val();
        var p5dcon4=$('#p5dcon4').val();
        var p5dcon5=$('#p5dcon5').val();
        var p5dcon6=[$('#p5dcon6').val(),$('#p5dcon7').val()];
        var p5dcon7= p5dcon6.join('');
        var p5dcon8=[$('#p5dcon8').val(),$('#p5dcon9').val()];
        var p5dcon9= p5dcon8.join('');
        var p5dcon10=[$('#p5dcon10').val(),$('#p5dcon11').val()];
        var p5dcon11=p5dcon10.join('');
        var p5dcon12=$('#p5dcon12').val();
        var p5cont1=0;
        if (p5dcon1==p5nm3) {
          p5cont1++;
          f_ok($('#p5dcon1'));
        }else{
          p5cont1;
          f_no($('#p5dcon1'));
        }
        if (p5dcon2==p5nm4) {
          p5cont1++;
          f_ok($('#p5dcon2'));
        }else{
          p5cont1;
          f_no($('#p5dcon2'));
        }
        if (p5dcon3=='resta' || p5dcon3=='sustracción') {
          p5cont1++;
          f_ok($('#p5dcon3'));
        }else{
          p5cont1;
          f_no($('#p5dcon3'));
        }
        if (p5dcon4==p5nm3) {
          p5cont1++;
          f_ok($('#p5dcon4'));
        }else{
          p5cont1;
          f_no($('#p5dcon4'));
        }
        if (p5dcon5==p5nm4) {
          p5cont1++;
          f_ok($('#p5dcon5'));
        }else{
          p5cont1;
          f_no($('#p5dcon5'));
        }
        
        if (p5dcon7==p5nm3) {
          p5cont1++;
          f_ok($('#p5dcon7'));
          f_ok($('#p5dcon6'));
        }else{
          p5cont1;
          f_no($('#p5dcon7'));
          f_no($('#p5dcon6'));
        }
        if (p5dcon9==p5nm4) {
          p5cont1++;
          f_ok($('#p5dcon9'));
          f_ok($('#p5dcon8'));
        }else{
          p5cont1;
          f_no($('#p5dcon9'));
          f_no($('#p5dcon8'));
        }
        if (p5dcon11==(p5nm3-p5nm4)) {
          p5cont1++;
          f_ok($('#p5dcon11'));
          f_ok($('#p5dcon10'));
        }else{
          p5cont1;
          f_no($('#p5dcon11'));
          f_no($('#p5dcon10'));
        }
        if (p5dcon12==(p5nm3-p5nm4)) {
          p5cont1++;
          f_ok($('#p5dcon12'));
        }else{
          p5cont1;
          f_no($('#p5dcon12'));
        }
        var p5dcon26=$('#p5dcon26').val();
        var p5dcon13=$('#p5dcon13').val();
        var p5dcon14=$('#p5dcon14').val();
        var p5dcon15=$('#p5dcon15').val();
        var p5dcon16=$('#p5dcon16').val();
        var p5dcon17=[$('#p5dcon17').val(),$('#p5dcon18').val()];
        var p5dcon18= p5dcon17.join('');
        var p5dcon19=[$('#p5dcon19').val(),$('#p5dcon20').val()];
        var p5dcon20= p5dcon19.join('');
        var p5dcon21=[$('#p5dcon21').val(),$('#p5dcon22').val()];
        var p5dcon22=p5dcon21.join('');
        var p5dcon23=$('#p5dcon23').val();
        var p5dcon24=$('#p5dcon24').val();
        var p5dcon25=$('#p5dcon25').val();
        var p5dcon27=$('#p5dcon27').val();
        if (p5dcon26==p5num1) {
          p5cont1++;
          f_ok($('#p5dcon26'));
        }else{
          p5cont1;
          f_no($('#p5dcon26'));
        }
        if (p5dcon13==p5num2) {
          p5cont1++;
          f_ok($('#p5dcon13'));
        }else{
          p5cont1;
          f_no($('#p5dcon13'));
        }
        if (p5dcon14=='suma' || p5dcon14=='adición') {
          p5cont1++;
          f_ok($('#p5dcon14'));
        }else{
          p5cont1;
          f_no($('#p5dcon14'));
        }
        if (p5dcon15==p5num1) {
          p5cont1++;
          f_ok($('#p5dcon15'));
        }else{
          p5cont1;
          f_no($('#p5dcon15'));
        }
        if (p5dcon16==p5num2) {
          p5cont1++;
          f_ok($('#p5dcon16'));
        }else{
          p5cont1;
          f_no($('#p5dcon16'));
        }
        if (p5dcon18==p5num1) {
          p5cont1++;
          f_ok($('#p5dcon18'));
          f_ok($('#p5dcon17'));
        }else{
          p5cont1;
          f_no($('#p5dcon18'));
          f_no($('#p5dcon17'));
        }
        if (p5dcon20==p5num2) {
          p5cont1++;
          f_ok($('#p5dcon20'));
          f_ok($('#p5dcon19'));
        }else{
          p5cont1;
          f_no($('#p5dcon20'));
          f_no($('#p5dcon19'));
        }
        if (p5dcon22==(p5num1 + p5num2)) {
          p5cont1++;
          f_ok($('#p5dcon22'));
          f_ok($('#p5dcon21'));
        }else{
          p5cont1;
          f_no($('#p5dcon22'));
          f_no($('#p5dcon21'));
        }
        if (p5dcon23==p5num1) {
          p5cont1++;
          f_ok($('#p5dcon23'));
        }else{
          p5cont1;
          f_no($('#p5dcon23'));
        }
        if (p5dcon24==p5num2) {
          p5cont1++;
          f_ok($('#p5dcon24'));
        }else{
          p5cont1;
          f_no($('#p5dcon24'));
        }
        if (p5dcon25==(p5num1 + p5num2)) {
          p5cont1++;
          f_ok($('#p5dcon25'));
        }else{
          p5cont1;
          f_no($('#p5dcon25'));
        }
        if (p5dcon27==(p5num1 + p5num2)) {
          p5cont1++;
          f_ok($('#p5dcon27'));
        }else{
          p5cont1;
          f_no($('#p5dcon27'));
        }
        var result5=(p5cont1*2)/21;
        cor=cor+ parseFloat(result5);
        inc=inc+(2-parseFloat(result5));

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