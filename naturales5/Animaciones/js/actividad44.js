var titulos = 'aplico',
    resp_toolTip = 'RESPUESTA INCORRECTA LA OPCIÓN SELECCIONADA NO ES UNA ORACIÓN';

var resp_cor = ['Eres genial.','Corre.','Gracias por ser mi amigo.','Voy.']
var cajas = document.getElementsByClassName('cajas');
var resp_select = [];
var loadTxt = [ 'zapato',
    'Eres genial.',
    'esto',
    'Corre.',
    'Gracias por ser mi amigo.',
    'mesa',
    'la',
    'Voy.'];
var divs = $(".imagen, .texto");
var cont_resp_cor = [];
var divsImg, divsTxt,divsImgReduc ;
var indice;
var contador_nota=0,contArrayRespCor = 0;
var cont_sel=0;

numero_pagina(25);
initElementos("texto",loadTxt);
enviarEventosListener("caja_txt1"); 
enviarEventosListener("caja_txt2");
enviarEventosListener("caja_txt3");
enviarEventosListener("caja_txt4");
enviarEventosListener("caja_txt5"); 
enviarEventosListener("caja_txt6");
enviarEventosListener("caja_txt7");
enviarEventosListener("caja_txt8");



function validNumero(){
    var regex = new RegExp("^[1-5]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
}
function enviarEventosListener(id)
{
    document.getElementById(id).addEventListener('click',function(){
        selectDselect(id);
    });

    document.getElementById('bt_comprobar').addEventListener('click',contarRespCorrecta);

}
function initElementos(classDiv,arrayElement){       //Funcion para iniciar elementos como imagenes o texto en divs de acuerdo a un array
    var cajas = document.getElementsByClassName(classDiv);
    arrayElement.sort(f_randomico);
    for (i = 0; i < cajas.length; i++) {
        if(classDiv == "imagen"){
            $('#'+cajas[i].id).html('<img class="center"  src="'+ arrayElement[i] +'" alt="' + arrayElement[i] + '" width="227px" height="180px"  id="img'+ [i] +'">');
        }else if(classDiv == "texto"){
            $('#'+cajas[i].id).html('<span id="'+ arrayElement[i] +'">' + arrayElement[i] + '</span>');
        }
		
    } 
}
function selectDselect(id){
    var elemento = document.getElementById(id);
    if(cont_sel==4 && !elemento.classList.contains('seleccionCaja') ){
        alert('SOLO PUEDE SELECCINAR HASTA 4 ORACIONES');
    }else if(!elemento.classList.contains('seleccionCaja')){
        cont_sel = cont_sel+1;
        elemento.classList.add('seleccionCaja');
        elemento.classList.remove('deseleccionCaja');
        insertRespSelect(elemento.textContent);
        armarTabla(elemento.textContent);

    }else{
        cont_sel = cont_sel-1;
        elemento.classList.add('deseleccionCaja');
        elemento.classList.remove('seleccionCaja');
        deleteRespDselect(elemento.textContent);
        borrarCelda('tabla',elemento.textContent);
    }
}
function insertRespSelect(text){
    cont_resp_cor.push(text);
}
function deleteRespDselect(text){
    var pos = cont_resp_cor.indexOf(text);
    cont_resp_cor.splice(pos,1);
}
function armarTabla(texto){
    var tabla = document.getElementById("tabla");
    var row = tabla.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = '<div style="border-radius: 5px; text-align: center;" class="'+texto+'" id="'+texto+'">'+texto+'</div>';
    cell2.innerHTML = '&nbsp&nbsp<input type="text" class="quantity" maxlength="1" size="2" style="text-align:center" onkeypress="validNumero()">';
}
function borrarCelda(id, texto){
    var tabla = document.getElementById(id);
    var row = tabla.rows;

    for(i=0; i< row.length;i++){
        if(Object.values(row)[i].firstChild.innerText.indexOf(texto) != -1){
            tabla.deleteRow(i);
        }
        
    }

    
}
function contarRespCorrecta(){
    var arrayCorrestarColorear =[];
    var arrayInput = document.getElementsByClassName('quantity');
    var contador =0;
    for(i=0; i<arrayInput.length;i++){
       
        if(arrayInput[i].value == ''){
            contador = contador+1;
        }
    }
    if(contador != 0){
        alert('DEBE LLENAR TODOS RECUADROS CON EL NUMERO DE PALABRAS DE LA ORACIÓN');
    }else{
        for(var i=0; i<Object.values(resp_cor).length; i++){
            for(j=0; j<Object.values(cont_resp_cor).length;j++){
                if(JSON.stringify(Object.values(resp_cor)[i]) === JSON.stringify(Object.values(cont_resp_cor)[j])){
                    contador_nota = contador_nota+1;
                    arrayCorrestarColorear.push(cont_resp_cor[j]);
                }else{
                    var idParentDiv = document.getElementById((cont_resp_cor)[j]).parentNode.id;
                    document.getElementsByClassName(cont_resp_cor[j])[0].style.background='#FF0000';
                    document.getElementsByClassName(cont_resp_cor[j])[0].style.color='#FFFFFF';
                    
                    document.getElementById(idParentDiv).style.background='#FF0000';
                    
                    $('#'+idParentDiv).attr({
                        "data-toggle" : "tooltip",
                        "title" : resp_toolTip
                        
                    }); 
                }
            }
        }
        for(i=0; i<arrayCorrestarColorear.length;i++){
            var id = document.getElementById(arrayCorrestarColorear[i]).parentNode.id;
            document.getElementById(id).style.background='#65CE6D';
            document.getElementsByClassName(cont_resp_cor[i])[0].style.background='#65CE6D';
            $('#'+id).removeAttr('data-toggle'); 
            $('#'+id).removeAttr('title');
            
            contarPalabras(arrayCorrestarColorear[i]);
        }
        $('[data-toggle="tooltip"]').tooltip();
    
        
    
        calcularNotaGeneral44(
            Object.keys(resp_cor).length+4, //se le suma 4 porque tambien es nota con el conteo de palabras del array
            contador_nota+contArrayRespCor,
            Object.keys(cont_resp_cor).length);
    }
    

}
function contarPalabras(arrayValid){
    
    var arrayInput = document.getElementsByClassName('quantity');
    var separador = " ";
    for(i=0;i<arrayInput.length;i++){
        var txtSeparado = arrayInput[i].parentNode.parentNode.getElementsByTagName('div')[0].textContent.split(separador);  
        var txtDivValid = arrayInput[i].parentNode.parentNode.getElementsByTagName('div')[0].textContent;   
        if(arrayValid == txtDivValid){
            if(txtSeparado.length == arrayInput[i].value){
                contArrayRespCor = contArrayRespCor+1;
            }
        }    
        
        
    }
    
    
}
function calcularNotaGeneral44(total_nota,r_correctas,op_seleccionadas){
    var result_sobre = 10;
    
        if(op_seleccionadas < total_nota-4){
            alert('Debe escoger '+ total_nota-4 + ' respuestas de la pregunta');
            
        }else{
            var calculo = (result_sobre * r_correctas )/ total_nota
            $('#txtNota').html(calculo.toFixed(2)+' ');
        }    
    document.getElementById('bt_comprobar').disabled = true;    
    
}
