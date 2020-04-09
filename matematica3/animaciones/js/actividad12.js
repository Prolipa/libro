var n1=0,n2=0,cont=0,ejer=10,itemsT=5*ejer,cor=0,inc=0,calificacion=10,t_nums=[],inputs=[],resp=[], resp_temp=[],n_txt='';
var claseAnimada ='animate bounceIn';
t_nums=['','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','doce','trece','catorce','quince','dieciseis','diecisiete','dieciocho','diecinueve','veinte','veintiuno','veintidos','veintitres','veinticuatro','veinticinco','veintiseis','veintisiete','veintiocho','veintinueve','treinta','treinta y uno','treinta y dos','treinta y tres','treinta y cuatro','treinta y cinco','treinta y seis','treinta y siete','treinta y ocho','treinta y nueve','cuarenta','cuarenta y uno','cuarenta y dos','cuarenta y tres','cuarenta y cuatro','cuarenta y cinco','cuarenta y seis','cuarenta y siete','cuarenta y ocho','cuarenta y nueve','cincuenta','cincuenta y uno','cincuenta y dos','cincuenta y tres','cincuenta y cuatro','cincuenta y cinco','cincuenta y seis','cincuenta y siete','cincuenta y ocho','cincuenta y nueve','sesenta','sesenta y uno','sesenta y dos','sesenta y tres','sesenta y cuatro','sesenta y cinco','sesenta y seis','sesenta y siete','sesenta y ocho','sesenta y nueve','setenta','setenta y uno','setenta y dos','setenta y tres','setenta y cuatro','setenta y cinco','setenta y seis','setenta y siete','setenta y ocho','setenta y nueve','ochenta','ochenta y uno','ochenta y dos','ochenta y tres','ochenta y cuatro','ochenta y cinco','ochenta y seis','ochenta y siete','ochenta y ocho','ochenta y nueve','noventa','noventa y uno','noventa y dos','noventa y tres','noventa y cuatro','noventa y cinco','noventa y seis','noventa y siete','noventa y ocho','noventa y nueve','cien'];
inputs=['a0','a1','a2','a3','a4','a5'];
f_iniciar();
 function f_iniciar() {
    QuitaClase(".nota",claseAnimada);
    AgregaClase(".actividad",claseAnimada);
    $("#n_cont").html(cont+1);
    $("#n_ejer").html(ejer);
    $("#trace").hide();
    resp=[],resp_temp=[];
    n1=(Math.floor(Math.random()*80)+20);
    n2=(Math.floor(Math.random()*2)+1);
     $(inputs).each(function(){
        $("#"+this).val('');
        $("#"+this).removeAttr('disabled');
        QuitaClase("#"+this,"color_disabled");                    
        removerClase("#"+this,"color_disabled");      
        var temp = $("#"+this).val('');         
        removerClase(temp);              
     });
     $('input.nospace').keydown(function(e) {  alert (e.keyCode); });
     if(String(n1)[1]==1){
        n_txt=" unidad";
     }else{
        n_txt=" unidades";
     }
    if(n2== 1){
        $("#a1").focus();
        $("#a0").val(n1);
        AgregaClase("#a0",'.color_disabled');
        $("#a0").attr('disabled','disabled');
        resp.push(t_nums[n1],String(n1)[0],String(n1)[1],String(n1)[0]+" decenas",String(n1)[1]+n_txt);
    }else if(n2== 2){
        $("#a0").focus();
        $("#a1").val(t_nums[n1]);
        AgregaClase("#a1",'.color_disabled');
        $("#a1").attr('disabled','disabled');
        resp.push(n1,String(n1)[0],String(n1)[1],String(n1)[0]+" decenas",String(n1)[1]+n_txt);
        console.log(resp.length);
    }/*else{
        $("#a0").focus();
        $("#a4").val(String(n1)[0]+" decenas");
        $("#a5").val(String(n1)[1]+n_txt);
        AgregaClase("#a4",'.color_disabled');
        $("#a4").attr('disabled','disabled');
        $("#a5").attr('disabled','disabled');
        resp.push(n1,t_nums[n1],String(n1)[0],String(n1)[1]);
    }*/
    /*$('input:enabled').each(function(index){ //respuestas
        $(this).val(resp[index]);
     });*/
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        $('.actividad1 input:enabled').each(function(i){
            var temp = $(this);
            if(temp.val().toLowerCase()==resp[i]){
                cor++;
                f_ok(temp);
            }else{
                inc++;
                f_no(temp);
            }
        });
        Calculo_nota();
    }
}