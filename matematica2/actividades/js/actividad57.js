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
        if ($('#a57pnt'+(i)).hasClass('pinta')) {
            $('#a57pnt'+(i)).removeClass('pinta');
                
        }
    }
    $('#a57dcon1').val('0');
    suma_total=0;
    contador=0;
}
 function f_iniciar() {
    var numero = parseInt((Math.random() * 8) + 1);
    var numero1 = parseInt((Math.random() * 8) + 1);
    var nm1=0;
    var nm2=0;
    if (numero>numero1) {
        $('#a57da1').html(numero);
        $('#a57da2').html(numero1); 
        nm1=numero;
        nm2=numero1;
    }else {
        if (numero==numero1) {
            $('#a57da1').html((numero1+1));
            $('#a57da2').html(numero);
            nm1=(numero1+1);
            nm2=numero;    
        }else {
            $('#a57da1').html((numero1));
            $('#a57da2').html(numero);
            nm1=numero1;
            nm2=numero;
        }
        
    }
    
    
    
    if ($('.pint1').hasClass('pinta')) {
        var auxr1=$('#a57pnt1 > b').html();
        suma_total=suma_total-parseInt(auxr1);
        $('#a57dcon1').val(suma_total);
        
    }

    
    $('.pint2').click(function(){

            if ($(this).hasClass('pinta')) {

                
            }else{
                if (contador=='0') {

                    $(this).addClass('pinta')
                    var auxr1=$('#a57pnt2 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    sumando1=suma_total;

                    $('#a57dcon1').val(suma_total);
                    contador++;
                }else if (contador=='1') {
                    if (suma_total>($('#a57pnt2 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a57pnt2 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a57dcon1').val(suma_total);
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
                    var auxr1=$('#a57pnt3 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a57dcon1').val(suma_total);
                    sumando1=suma_total;
                    contador++;
                }else if (contador=='1') {
                    if (suma_total>($('#a57pnt3 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a57pnt3 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        sumando2=rst1;
                        sumando3=suma_total;
                        $('#a57dcon1').val(suma_total);
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
                    var auxr1=$('#a57pnt4 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a57dcon1').val(suma_total);
                    sumando1=suma_total;
                    contador++;
                }else if (contador=='1') {
                    if (suma_total>($('#a57pnt4 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a57pnt4 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        sumando2=rst1;
                        sumando3=suma_total;
                        $('#a57dcon1').val(suma_total);
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
                    var auxr1=$('#a57pnt5 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a57dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a57pnt5 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a57pnt5 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a57dcon1').val(suma_total);
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
                    var auxr1=$('#a57pnt6 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a57dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a57pnt6 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a57pnt6 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a57dcon1').val(suma_total);
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
                    var auxr1=$('#a57pnt7 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a57dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a57pnt7 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a57pnt7 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a57dcon1').val(suma_total);
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
                    var auxr1=$('#a57pnt8 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a57dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a57pnt8 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a57pnt8 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a57dcon1').val(suma_total);
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
                    var auxr1=$('#a57pnt9 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a57dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a57pnt9 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a57pnt9 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a57dcon1').val(suma_total);
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
                    var auxr1=$('#a57pnt10 > b').html();
                    suma_total=suma_total+parseInt(auxr1);
                    $('#a57dcon1').val(suma_total);
                    contador++;
                    sumando1=suma_total;
                }else if (contador=='1') {
                    if (suma_total>($('#a57pnt10 > b').html())) {
                        $(this).addClass('pinta')
                        var auxr1=$('#a57pnt10 > b').html();
                        var rst1=suma_total-parseInt(auxr1);
                        suma_total=suma_total-rst1;
                        $('#a57dcon1').val(suma_total);
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
        $('#a57pnt1').unbind( "click" );
        $('#a57pnt2').unbind( "click" );
        $('#a57pnt3').unbind( "click" );
        $('#a57pnt4').unbind( "click" );
        $('#a57pnt5').unbind( "click" );
        $('#a57pnt6').unbind( "click" );
        $('#a57pnt7').unbind( "click" );
        $('#a57pnt8').unbind( "click" );
        $('#a57pnt9').unbind( "click" );
        $('#a57pnt10').unbind( "click" );

        
        var a57dlg =$('.pinta').length;
        
        if (a57dlg=='1') {
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
           f_no($('#a57dcon1'));
           inc++;
        }else {
           if (sumando1==nm1 && sumando2==nm2 && sumando3==(nm1-nm2)) {
                cor++;

                $('.pinta').addClass('valid');

                f_ok($('#a57dcon1'));
            }else {
                inc++;
                $('.pinta').addClass('no-valid');
                f_no($('#a57dcon1'));
            }
        }
        
        var a57dcon2=$('#a57dcon2').val();
        var a57dcon3=$('#a57dcon3').val();
        var a57dcon4=$('#a57dcon4').val();
        if (a57dcon2=='9') {
            cor++;
            f_ok($('#a57dcon2'));
        }else {
            inc++;
            f_no($('#a57dcon2'));
        }
        if (a57dcon3=='4') {
            cor++;
            f_ok($('#a57dcon3'));
        }else {
            inc++;
            f_no($('#a57dcon3'));
        }
        if (a57dcon4=='5') {
            cor++;
            f_ok($('#a57dcon4'));
        }else {
            inc++;
            f_no($('#a57dcon4'));
        }
        Calculo_nota();
   }
}