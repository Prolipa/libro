var n1=0,sum_total=0,cont=0,ejer=1,itemsT=4,cor=0,inc=0,str='',calificacion=10, suma_total=0,contador=0;
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
        if ($('#a54pnt'+(i)).hasClass('pinta')) {
            $('#a54pnt'+(i)).removeClass('pinta');
                
        }
    }
    $('#a54dcon1').val('0');
    suma_total=0;
    contador=0;
}
 function f_iniciar() {
    var numero = parseInt((Math.random() * 5) + 1);
    var numero1 = parseInt((Math.random() * 4) + 1);
    $('#a54da1').html(numero);
    $('#a54da2').html(numero1);
    
    
    if ($('.pint1').hasClass('pinta')) {
        var auxr1=$('#a54pnt1 > b').html();
        suma_total=suma_total-parseInt(auxr1);
        $('#a54dcon1').val(suma_total);
        
    }

    
    $('.pint2').click(function(){

            if ($(this).hasClass('pinta')) {

                
            }else{
                if (contador=='0') {
                    $(this).addClass('pinta')
                    var auxr1=$('#a54pnt2 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    sumando1=suma_total;

                    $('#a54dcon1').val(suma_total);
                    contador++;
                }else if (contador=='1') {
                    alert('El segundo número seleccionado debe ser mayor al primer número seleccionado');
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
                    var auxr1=$('#a54pnt3 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a54dcon1').val(suma_total);
                    sumando1=suma_total;
                    contador++;
                }else if (contador=='1') {
                    if (suma_total<($('#a54pnt3 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a54pnt3 > b').html();
                        var rst1=parseInt(auxr1)-suma_total;
                        suma_total=suma_total+rst1;
                        sumando2=rst1;
                        sumando3=suma_total;
                        $('#a54dcon1').val(suma_total);
                        contador++;
                    }else {
                        alert('El segundo número seleccionado debe ser mayor al primer número seleccionado');    
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
                    var auxr1=$('#a54pnt4 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a54dcon1').val(suma_total);
                    sumando1=suma_total;
                    contador++;
                }else if (contador=='1') {
                    if (suma_total<($('#a54pnt4 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a54pnt4 > b').html();
                        var rst1=parseInt(auxr1)-suma_total;
                        suma_total=suma_total+rst1;
                        sumando2=rst1;
                        sumando3=suma_total;
                        $('#a54dcon1').val(suma_total);
                        contador++;
                    }else {
                        alert('El segundo número seleccionado debe ser mayor al primer número seleccionado');    
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
                    var auxr1=$('#a54pnt5 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a54dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total<($('#a54pnt5 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a54pnt5 > b').html();
                        var rst1=parseInt(auxr1)-suma_total;
                        suma_total=suma_total+rst1;
                        $('#a54dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser mayor al primer número seleccionado');    
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
                    var auxr1=$('#a54pnt6 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a54dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total<($('#a54pnt6 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a54pnt6 > b').html();
                        var rst1=parseInt(auxr1)-suma_total;
                        suma_total=suma_total+rst1;
                        $('#a54dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser mayor al primer número seleccionado');    
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
                    var auxr1=$('#a54pnt7 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a54dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total<($('#a54pnt7 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a54pnt7 > b').html();
                        var rst1=parseInt(auxr1)-suma_total;
                        suma_total=suma_total+rst1;
                        $('#a54dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser mayor al primer número seleccionado');    
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
                    var auxr1=$('#a54pnt8 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a54dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total<($('#a54pnt8 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a54pnt8 > b').html();
                        var rst1=parseInt(auxr1)-suma_total;
                        suma_total=suma_total+rst1;
                        $('#a54dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser mayor al primer número seleccionado');    
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
                    var auxr1=$('#a54pnt9 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a54dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total<($('#a54pnt9 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a54pnt9 > b').html();
                        var rst1=parseInt(auxr1)-suma_total;
                        suma_total=suma_total+rst1;
                        $('#a54dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser mayor al primer número seleccionado');    
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
                    var auxr1=$('#a54pnt10 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a54dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total<($('#a54pnt10 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a54pnt10 > b').html();
                        var rst1=parseInt(auxr1)-suma_total;
                        suma_total=suma_total+rst1;
                        $('#a54dcon1').val(suma_total);
                        contador++;
                        sumando2=rst1;
                        sumando3=suma_total;
                    }else {
                        alert('El segundo número seleccionado debe ser mayor al primer número seleccionado');    
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
        $('#a54pnt1').unbind( "click" );
        $('#a54pnt2').unbind( "click" );
        $('#a54pnt3').unbind( "click" );
        $('#a54pnt4').unbind( "click" );
        $('#a54pnt5').unbind( "click" );
        $('#a54pnt6').unbind( "click" );
        $('#a54pnt7').unbind( "click" );
        $('#a54pnt8').unbind( "click" );
        $('#a54pnt9').unbind( "click" );
        $('#a54pnt10').unbind( "click" );

        
        var a54dlg =$('.pinta').length;
        
        if (a54dlg=='1') {
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
           f_no($('#a54dcon1'));
           inc++;
        }else {
           if (sumando1==numero && sumando2==numero1 && sumando3==(numero+numero1)) {
                cor++;

                $('.pinta').addClass('valid');

                f_ok($('#a54dcon1'));
            }else {
                inc++;
                $('.pinta').addClass('no-valid');
                f_no($('#a54dcon1'));
            }
        }
        
        var a54dcon2=$('#a54dcon2').val();
        var a54dcon3=$('#a54dcon3').val();
        var a54dcon4=$('#a54dcon4').val();
        if (a54dcon2=='1') {
            cor++;
            f_ok($('#a54dcon2'));
        }else {
            inc++;
            f_no($('#a54dcon2'));
        }
        if (a54dcon3=='5') {
            cor++;
            f_ok($('#a54dcon3'));
        }else {
            inc++;
            f_no($('#a54dcon3'));
        }
        if (a54dcon4=='6') {
            cor++;
            f_ok($('#a54dcon4'));
        }else {
            inc++;
            f_no($('#a54dcon4'));
        }
        Calculo_nota();
   }
}