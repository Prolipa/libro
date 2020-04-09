var n1=0,sum_total=0,cont=0,ejer=1,itemsT=3,cor=0,inc=0,str='',calificacion=10,suma_total=0,contador=0;
var claseAnimada ='animate bounceIn';
var sumando1=0;
var sumando2=0;
var sumando3=0;
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
function limpia(){
    for (var i = 2; i<=26; i++) {
        if ($('#a113pnt'+(i)).hasClass('pinta')) {
            $('#a113pnt'+(i)).removeClass('pinta');
                
        }
    }
    $('#a113dcon1').val('0');
    suma_total=0;
    contador=0;
}

 function f_iniciar() {
    var numero = parseInt((Math.random() * 10) + 15);
    var numero1 = parseInt((Math.random() * 10) + 5);
    var nm1=0;
    var nm2=0;
    if (numero>numero1) {
        $('#a113da1').html(numero);
        $('#a113da2').html(numero1); 
        nm1=numero;
        nm2=numero1;
    }else {
        if (numero==numero1) {
            $('#a113da1').html((numero1+1));
            $('#a113da2').html(numero);
            nm1=(numero1+1);
            nm2=numero;    
        }else {
            $('#a113da1').html((numero1));
            $('#a113da2').html(numero);
            nm1=numero1;
            nm2=numero;
        }
        
    }

    if ($('.pint1').hasClass('pinta')) {
        var auxr1=$('#a113pnt1 > b').html();
        suma_total=suma_total-parseInt(auxr1);
        $('#a113dcon1').val(suma_total);
        
    }

    
    $('.pint2').click(function(){

            if ($(this).hasClass('pinta')) {

                
            }else{
                if (contador=='0') {

                    $(this).addClass('pinta')
                    var auxr1=$('#a113pnt2 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    sumando1=suma_total;

                    $('#a113dcon1').val(suma_total);
                    contador++;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt2 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt2 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a113dcon1').val(suma_total);
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
                    var auxr1=$('#a113pnt3 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    sumando1=suma_total;
                    contador++;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt3 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt3 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        sumando2=rst1;
                        sumando3=suma_total;
                        $('#a113dcon1').val(suma_total);
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
                    var auxr1=$('#a113pnt4 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    sumando1=suma_total;
                    contador++;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt4 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt4 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        sumando2=rst1;
                        sumando3=suma_total;
                        $('#a113dcon1').val(suma_total);
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
                    var auxr1=$('#a113pnt5 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt5 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt5 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a113dcon1').val(suma_total);
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
                    var auxr1=$('#a113pnt6 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt6 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt6 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a113dcon1').val(suma_total);
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
                    var auxr1=$('#a113pnt7 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt7 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt7 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a113dcon1').val(suma_total);
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
                    var auxr1=$('#a113pnt8 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt8 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt8 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a113dcon1').val(suma_total);
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
                    var auxr1=$('#a113pnt9 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt9 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt9 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a113dcon1').val(suma_total);
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
                    var auxr1=$('#a113pnt10 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt10 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt10 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a113dcon1').val(suma_total);
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
                    var auxr1=$('#a113pnt11 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt11 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt11 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a113dcon1').val(suma_total);
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
                    var auxr1=$('#a113pnt12 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt12 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt12 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a113dcon1').val(suma_total);
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
                    var auxr1=$('#a113pnt13 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt13 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt13 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a113dcon1').val(suma_total);
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
                    var auxr1=$('#a113pnt14 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt14 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt14 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a113dcon1').val(suma_total);
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
                    var auxr1=$('#a113pnt15 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt15 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt15 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a113dcon1').val(suma_total);
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
                    var auxr1=$('#a113pnt16 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt16 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt16 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a113dcon1').val(suma_total);
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
                    var auxr1=$('#a113pnt17 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt17 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt17 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a113dcon1').val(suma_total);
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
                    var auxr1=$('#a113pnt18 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt18 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt18 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a113dcon1').val(suma_total);
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
                    var auxr1=$('#a113pnt19 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt19 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt19 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a113dcon1').val(suma_total);
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
                    var auxr1=$('#a113pnt20 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt20 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt20 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a113dcon1').val(suma_total);
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
                    var auxr1=$('#a113pnt21 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt21 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt21 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a113dcon1').val(suma_total);
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
    $('.pint22').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#a113pnt22 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt22 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt22 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a113dcon1').val(suma_total);
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
    $('.pint23').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#a113pnt23 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt23 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt23 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a113dcon1').val(suma_total);
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
    $('.pint24').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#a113pnt24 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt24 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt24 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a113dcon1').val(suma_total);
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
    $('.pint25').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#a113pnt25 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt25 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt25 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a113dcon1').val(suma_total);
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
    $('.pint26').click(function(){

            if ($(this).hasClass('pinta')) {
                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#a113pnt26 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a113dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a113pnt26 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a113pnt26 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a113dcon1').val(suma_total);
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
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        $('#a113pnt1').unbind( "click" );
        $('#a113pnt2').unbind( "click" );
        $('#a113pnt3').unbind( "click" );
        $('#a113pnt4').unbind( "click" );
        $('#a113pnt5').unbind( "click" );
        $('#a113pnt6').unbind( "click" );
        $('#a113pnt7').unbind( "click" );
        $('#a113pnt8').unbind( "click" );
        $('#a113pnt9').unbind( "click" );
        $('#a113pnt10').unbind( "click" );
        $('#a113pnt11').unbind( "click" );
        $('#a113pnt12').unbind( "click" );
        $('#a113pnt13').unbind( "click" );
        $('#a113pnt14').unbind( "click" );
        $('#a113pnt15').unbind( "click" );
        $('#a113pnt16').unbind( "click" );
        $('#a113pnt17').unbind( "click" );
        $('#a113pnt18').unbind( "click" );
        $('#a113pnt19').unbind( "click" );
        $('#a113pnt20').unbind( "click" );
        $('#a113pnt21').unbind( "click" );
        $('#a113pnt22').unbind( "click" );
        $('#a113pnt23').unbind( "click" );
        $('#a113pnt24').unbind( "click" );
        $('#a113pnt25').unbind( "click" );
        $('#a113pnt26').unbind( "click" );
        var a113dlg =$('.pinta').length;
        
        if (a113dlg=='1') {
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
           $('.pint22').addClass('no-valid');
           $('.pint23').addClass('no-valid');
           $('.pint24').addClass('no-valid');
           $('.pint25').addClass('no-valid');
           $('.pint26').addClass('no-valid');     
           f_no($('#a113dcon1'));
           inc++;
        }else {
           if (sumando1==nm1 && sumando2==nm2 && sumando3==(nm1-nm2)) {
                cor++;

                $('.pinta').addClass('valid');

                f_ok($('#a113dcon1'));
            }else {
                inc++;
                $('.pinta').addClass('no-valid');
                f_no($('#a113dcon1'));
            }
        }
        var a113dcon2=$('#a113dcon2').val();
        var a113dcon3=$('#a113dcon3').val();
        if (a113dcon2=='11') {
          cor++;
          f_ok($('#a113dcon2'));
        }else{
          inc++;
          f_no($('#a113dcon2'));
        }
        if (a113dcon3=='16') {
          cor++;
          f_ok($('#a113dcon3'));
        }else{
          inc++;
          f_no($('#a113dcon3'));
        }
        Calculo_nota();
   }
}