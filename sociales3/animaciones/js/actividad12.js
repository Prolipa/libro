var titulos = 'aplico';

var persCuento = [];
var resp_correctas = [];
var contador_resp_cor = 0;
var contador_resp_incor = 0;
var contador_resp_cor_img = 0;
var contador_resp_incor_img = 0;
var cajas = document.getElementsByClassName('cajasTexto');
var testimg = ['img/i1_p14_act12.png','img/i2_p14_act12.png','img/i3_p14_act12.png']
    
    //testimg.sort(f_randomico);

fIniciar();
finitimg();
numero_pagina(14);
function fIniciar(){
    resp_correctas = ["Hace mucho tiempo"];
    persCuento = ["Ahora","Ayer","Hace mucho tiempo","En los próximos años"];
    persCuento.sort(f_randomico);
    for (i = 0; i < cajas.length; i++) {
        
		$('#'+cajas[i].id).html('<span class= "cajas-cuentos" id="' + persCuento[i] + '">' + persCuento[i] + '</span>');
    }
}

function finitimg(){
    var cajasImg = document.getElementsByClassName('imagen');
    
    testimg.sort(f_randomico);
    for (i = 0; i < cajasImg.length; i++) {
        
		$('#'+cajasImg[i].id).html('<img class="img-responsive imgAcom" src="'+ testimg[i] +'" alt="' + testimg[i] + '" width="227px" height="180px">');
    } 
}

    function bloquearElemento(sel,isImg){ //sel 0 deseleccionado, 1 seleccionado
        var operacion ;
        var operacion_letras = contador_resp_cor+contador_resp_incor;
        var operacion_img = contador_resp_cor_img+contador_resp_incor_img;
        var num_valid;
        if(isImg == 1){
            operacion = operacion_img;
            num_valid =2;
            
        }else{
            operacion = operacion_letras;
            num_valid =1;
        }
        if(operacion==num_valid){
            if(sel == 0){
                return true;
            }
                       
        }
        else{
            return false;
        }
    }

    function validaArray(sel,ca,isImg){
        var validador_array ;
        //var validadorImg = $("div[class=imagen]").find('img')[0].alt;
        var validador ;
        if(isImg == 1){ //1 isImg 0 noImg
            if(ca=='img/i3_p14_act12.png' || ca=='img/i1_p14_act12.png'){ //correcto
                validador=2;
            }else{
                //validadorImg = -1;
                validador = -1;
            }
            
        } else if(isImg==0){
            validador_array = resp_correctas.indexOf(ca);
            validador = validador_array;
        }

        if(sel == 1){
            if(validador!= -1){ //-1 no pertenece; != pertenece
                if(isImg==1){
                    contador_resp_cor_img = contador_resp_cor_img+1;
                }else{
                    contador_resp_cor = contador_resp_cor+1;
                }
                
            }else if(validador== -1){
                if(isImg==1){
                    contador_resp_incor_img=contador_resp_incor_img+1;
                }else{
                    contador_resp_incor=contador_resp_incor+1;
                }
                
            }    
        }else{
            if(validador != -1){
                if(isImg==1){
                    contador_resp_cor_img = contador_resp_cor_img-1;
                }else{
                    contador_resp_cor = contador_resp_cor-1;
                }
                
            }else if(validador == -1){
                if(isImg==1){
                    contador_resp_incor_img=contador_resp_incor_img-1;
                }else{
                    contador_resp_incor=contador_resp_incor-1;
                }
                
            }  
        }
            
    }

    $(document).ready(function(){
    
    var seleccionado1 = 0; 
    var seleccionado2 = 0;   
    var seleccionado3 = 0; 
    var seleccionado4 = 0; 
    var seleccionado5 = 0; 
    var seleccionado6 = 0;   
    var seleccionado7 = 0; 
    var seleccionado8 = 0; 
    var seleccion = {
        imgSel1 : 0,
        imgSel2 : 0,
        imgSel3 : 0,
    }
     

    $("div[id=caja1]").click(function(){
        var e = $("div[id=caja1]").find('span')[0].id;
        
        if(!bloquearElemento(seleccionado1,0)){
            if(seleccionado1 == 0){
                $("div[id=caja1]").addClass('seleccionCaja');
                $("div[id=caja1]").removeClass('deseleccionCaja');
                seleccionado1 = seleccionado1+1;
                validaArray(seleccionado1,e,0);
            }else {
                $("div[id=caja1]").addClass('deseleccionCaja');
                $("div[id=caja1]").removeClass('seleccionCaja');
                seleccionado1 = seleccionado1-1;
                validaArray(seleccionado1,e,0);
            }
        }
        
    });

    $("div[id=caja2]").click(function(){
        var e = $("div[id=caja2]").find('span')[0].id;
        
        if(!bloquearElemento(seleccionado2,0)){
            if(seleccionado2 == 0){
                $("div[id=caja2]").addClass('seleccionCaja');
                $("div[id=caja2]").removeClass('deseleccionCaja');
                seleccionado2 = seleccionado2+1;
                validaArray(seleccionado2,e,0);
            }else {
                $("div[id=caja2]").addClass('deseleccionCaja');
                $("div[id=caja2]").removeClass('seleccionCaja');
                seleccionado2 = seleccionado2-1;
                validaArray(seleccionado2,e,0);
            }
        }
        
    });

    $("div[id=caja3]").click(function(){
        var e = $("div[id=caja3]").find('span')[0].id;
        if(!bloquearElemento(seleccionado3,0)){
            if(seleccionado3 == 0){
                $("div[id=caja3]").addClass('seleccionCaja');
                $("div[id=caja3]").removeClass('deseleccionCaja');
                seleccionado3 = seleccionado3+1;
                validaArray(seleccionado3,e,0);
            }else {
                $("div[id=caja3]").addClass('deseleccionCaja');
                $("div[id=caja3]").removeClass('seleccionCaja');
                seleccionado3 = seleccionado3-1;
                validaArray(seleccionado3,e,0);
            }
        }
        
    });

    $("div[id=caja4]").click(function(){
        var e = $("div[id=caja4]").find('span')[0].id;
        if(!bloquearElemento(seleccionado4,0)){
            if(seleccionado4 == 0){
                $("div[id=caja4]").addClass('seleccionCaja');
                $("div[id=caja4]").removeClass('deseleccionCaja');
                seleccionado4 = seleccionado4+1;
                validaArray(seleccionado4,e,0);
            }else {
                $("div[id=caja4]").addClass('deseleccionCaja');
                $("div[id=caja4]").removeClass('seleccionCaja');
                seleccionado4 = seleccionado4-1;
                validaArray(seleccionado4,e,0);
            }
        }
        
    });

    $("div[id=caja5]").click(function(){
        var e = $("div[id=caja5]").find('span')[0].id;
        if(!bloquearElemento(seleccionado5,0)){
            if(seleccionado5 == 0){
                $("div[id=caja5]").addClass('seleccionCaja');
                $("div[id=caja5]").removeClass('deseleccionCaja');
                seleccionado5 = seleccionado5+1;
                validaArray(seleccionado5,e,0);
            }else {
                $("div[id=caja5]").addClass('deseleccionCaja');
                $("div[id=caja5]").removeClass('seleccionCaja');
                seleccionado5 = seleccionado5-1;
                validaArray(seleccionado5,e,0);
            }
        }
        
    });

    $("div[id=caja6]").click(function(){
        var e = $("div[id=caja6]").find('span')[0].id;
        if(!bloquearElemento(seleccionado6,0)){
            if(seleccionado6 == 0){
                $("div[id=caja6]").addClass('seleccionCaja');
                $("div[id=caja6]").removeClass('deseleccionCaja');
                seleccionado6 = seleccionado6+1;
                validaArray(seleccionado6,e,0);
            }else {
                $("div[id=caja6]").addClass('deseleccionCaja');
                $("div[id=caja6]").removeClass('seleccionCaja');
                seleccionado6 = seleccionado6-1;
                validaArray(seleccionado6,e,0);
            }
        }
        
    });

    $("div[id=caja7]").click(function(){
        var e = $("div[id=caja7]").find('span')[0].id;
        if(!bloquearElemento(seleccionado7,0)){
            if(seleccionado7 == 0){
                $("div[id=caja7]").addClass('seleccionCaja');
                $("div[id=caja7]").removeClass('deseleccionCaja');
                seleccionado7 = seleccionado7+1;
                validaArray(seleccionado7,e,0);
            }else {
                $("div[id=caja7]").addClass('deseleccionCaja');
                $("div[id=caja7]").removeClass('seleccionCaja');
                seleccionado7 = seleccionado7-1;
                validaArray(seleccionado7,e,0);
            }
        }
        
    });

    $("div[id=caja8]").click(function(){
        var e = $("div[id=caja8]").find('span')[0].id;
        if(!bloquearElemento(seleccionado8,0)){
            if(seleccionado8 == 0){
                $("div[id=caja8]").addClass('seleccionCaja');
                $("div[id=caja8]").removeClass('deseleccionCaja');
                seleccionado8 = seleccionado8+1;
                validaArray(seleccionado8,e,0);
            }else {
                $("div[id=caja8]").addClass('deseleccionCaja');
                $("div[id=caja8]").removeClass('seleccionCaja');
                seleccionado8 = seleccionado8-1;
                validaArray(seleccionado8,e,0);
            }
        }
        
    }); 
    
    var esImg = 1; //1 si es imagen 0 no es imagen
    $("div[id=caja_img1]").click(function(){
        var imdiv = $("div[id=caja_img1]").find('img')[0].alt;
        if(!bloquearElemento(seleccion.imgSel1,1)){
            if(seleccion.imgSel1 == 0){
                $("div[id=caja_img1]").addClass('selecImg');
                $("div[id=caja_img1]").removeClass('deselecImg');
                seleccion.imgSel1 = seleccion.imgSel1+1;
                validaArray(seleccion.imgSel1,imdiv,esImg);
            }else {
                $("div[id=caja_img1]").addClass('deselecImg');
                $("div[id=caja_img1]").removeClass('selecImg');
                seleccion.imgSel1 = seleccion.imgSel1-1;
                validaArray(seleccion.imgSel1,imdiv,esImg);
            }
        }
        
        
        
    });
    $("div[id=caja_img2]").click(function(){
        var imdiv = $("div[id=caja_img2]").find('img')[0].alt;
        if(!bloquearElemento(seleccion.imgSel2,1)){
            if(seleccion.imgSel2 == 0){
                $("div[id=caja_img2]").addClass('selecImg');
                $("div[id=caja_img2]").removeClass('deselecImg');
                seleccion.imgSel2 = seleccion.imgSel2+1;
                validaArray(seleccion.imgSel2,imdiv,esImg);
            }else {
                $("div[id=caja_img2]").addClass('deselecImg');
                $("div[id=caja_img2]").removeClass('selecImg');
                seleccion.imgSel2 = seleccion.imgSel2-1;
                validaArray(seleccion.imgSel2,imdiv,esImg);
            }
        }
    });
    $("div[id=caja_img3]").click(function(){
        var imdiv = $("div[id=caja_img3]").find('img')[0].alt;
        if(!bloquearElemento(seleccion.imgSel3,1)){
            if(seleccion.imgSel3 == 0){
                $("div[id=caja_img3]").addClass('selecImg');
                $("div[id=caja_img3]").removeClass('deselecImg');
                seleccion.imgSel3 = seleccion.imgSel3+1;
                validaArray(seleccion.imgSel3,imdiv,esImg);
            }else {
                $("div[id=caja_img3]").addClass('deselecImg');
                $("div[id=caja_img3]").removeClass('selecImg');
                seleccion.imgSel3 = seleccion.imgSel3-1;
                validaArray(seleccion.imgSel3,imdiv,esImg);
            }
        }
    });

});

function calificar()
{
    
    var respuestas = {
        sum_resp : contador_resp_cor+contador_resp_incor, 
        sum_resp_img : contador_resp_cor_img+contador_resp_incor_img, 
        tot_correctas : resp_correctas.length+2,//se suma uno porque es uno mas de imagenes
        result_test : contador_resp_cor+contador_resp_cor_img,
        result_sobre : 10  

    }

    if(respuestas.sum_resp < 1){
        alert("Debe escoger 2 respuestas de la primera pregunta");
        if(respuestas.sum_resp_img < 2){
            alert("Debe escoger 1 respuestas de la segunda pregunta");
        }
    }else{
        var calculo = (respuestas.result_test * respuestas.result_sobre )/ respuestas.tot_correctas
        $('#txtNota').html(calculo.toFixed(2)+' ');
    }




}
