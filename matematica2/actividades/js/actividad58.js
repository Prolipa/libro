var n1=0,sum_total=0,cont=0,ejer=1,itemsT=1,cor=0,inc=0,str='',calificacion=10, suma_total=0,contador=0;
var claseAnimada ='animate bounceIn';
var sumando1=0;
var sumando2=0;
var sumando3=0;
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
    }
function limpia(){
    for (var i = 2; i<=10; i++) {
        if ($('#a58pnt'+(i)).hasClass('pinta')) {
            $('#a58pnt'+(i)).removeClass('pinta');
                
        }
    }
    $('#a58dcon1').val('0');
    suma_total=0;
    contador=0;
}
 function f_iniciar() {
    
    
    
    
    if ($('.pint1').hasClass('pinta')) {
        var auxr1=$('#a58pnt1 > b').html();
        suma_total=suma_total-parseInt(auxr1);
        $('#a58dcon1').val(suma_total);
        
    }

    
    $('.pint2').click(function(){

            if ($(this).hasClass('pinta')) {

                
            }else{
                if (contador=='0') {

                    $(this).addClass('pinta')
                    var auxr1=$('#a58pnt2 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    sumando1=suma_total;

                    $('#a58dcon1').val(suma_total);
                    contador++;
                }else if (contador=='1') {
                    if (suma_total>($('#a58pnt2 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a58pnt2 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a58dcon1').val(suma_total);
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
                    var auxr1=$('#a58pnt3 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a58dcon1').val(suma_total);
                    sumando1=suma_total;
                    contador++;
                }else if (contador=='1') {
                    if (suma_total>($('#a58pnt3 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a58pnt3 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        sumando2=rst1;
                        sumando3=suma_total;
                        $('#a58dcon1').val(suma_total);
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
                    var auxr1=$('#a58pnt4 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a58dcon1').val(suma_total);
                    sumando1=suma_total;
                    contador++;
                }else if (contador=='1') {
                    if (suma_total>($('#a58pnt4 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a58pnt4 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        sumando2=rst1;
                        sumando3=suma_total;
                        $('#a58dcon1').val(suma_total);
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
                    var auxr1=$('#a58pnt5 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a58dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a58pnt5 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a58pnt5 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a58dcon1').val(suma_total);
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
                    var auxr1=$('#a58pnt6 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a58dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a58pnt6 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a58pnt6 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a58dcon1').val(suma_total);
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
                    var auxr1=$('#a58pnt7 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a58dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a58pnt7 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a58pnt7 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a58dcon1').val(suma_total);
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
                    var auxr1=$('#a58pnt8 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a58dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a58pnt8 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a58pnt8 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a58dcon1').val(suma_total);
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
                    var auxr1=$('#a58pnt9 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a58dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a58pnt9 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a58pnt9 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a58dcon1').val(suma_total);
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
                    var auxr1=$('#a58pnt10 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a58dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a58pnt10 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a58pnt10 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a58dcon1').val(suma_total);
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
        $('#a58pnt1').unbind( "click" );
        $('#a58pnt2').unbind( "click" );
        $('#a58pnt3').unbind( "click" );
        $('#a58pnt4').unbind( "click" );
        $('#a58pnt5').unbind( "click" );
        $('#a58pnt6').unbind( "click" );
        $('#a58pnt7').unbind( "click" );
        $('#a58pnt8').unbind( "click" );
        $('#a58pnt9').unbind( "click" );
        $('#a58pnt10').unbind( "click" );

        
        var a58dlg =$('.pinta').length;
        
        if (a58dlg=='1') {
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
           f_no($('#a58dcon1'));
           inc++;
        }else {
           if (sumando1=='9' && sumando2=='2' && sumando3==(9-2)) {
                cor++;

                $('.pinta').addClass('valid');

                f_ok($('#a58dcon1'));
            }else {
                inc++;
                $('.pinta').addClass('no-valid');
                f_no($('#a58dcon1'));
            }
        }
        
        Calculo_nota();
   }
}