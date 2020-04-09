$("#txtNota").html("0"); //impresion de nota
var i,j,inputs=[],cajas=[],cont=0,ejer=5,itemsT=6*ejer,calificacion=10,cor=0,inc=0,nums=[],t_nums=[],res_txt=[],temp_txt=[],sum1=0;
var claseAnimada='animate bounceIn';
f_cargar();
function f_cargar(){
    t_nums=['','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','doce','trece','catorce','quince','dieciseis','diecisiete','dieciocho','diecinueve','veinte','veintiuno','veintidos','veintitres','veinticuatro','veinticinco','veintiseis','veintisiete','veintiocho','veintinueve','treinta','treinta y uno','treinta y dos','treinta y tres','treinta y cuatro','treinta y cinco','treinta y seis','treinta y siete','treinta y ocho','treinta y nueve','cuarenta','cuarenta y uno','cuarenta y dos','cuarenta y tres','cuarenta y cuatro','cuarenta y cinco','cuarenta y seis','cuarenta y siete','cuarenta y ocho','cuarenta y nueve','cincuenta','cincuenta y uno','cincuenta y dos','cincuenta y tres','cincuenta y cuatro','cincuenta y cinco','cincuenta y seis','cincuenta y siete','cincuenta y ocho','cincuenta y nueve','sesenta','sesenta y uno','sesenta y dos','sesenta y tres','sesenta y cuatro','sesenta y cinco','sesenta y seis','sesenta y siete','sesenta y ocho','sesenta y nueve','setenta','setenta y uno','setenta y dos','setenta y tres','setenta y cuatro','setenta y cinco','setenta y seis','setenta y siete','setenta y ocho','setenta y nueve','ochenta','ochenta y uno','ochenta y dos','ochenta y tres','ochenta y cuatro','ochenta y cinco','ochenta y seis','ochenta y siete','ochenta y ocho','ochenta y nueve','noventa','noventa y uno','noventa y dos','noventa y tres','noventa y cuatro','noventa y cinco','noventa y seis','noventa y siete','noventa y ocho','noventa y nueve','cien'];
    inputs = ['r1','r2','r3','r4','r5','r6'];
    cajas=['contenido'];
    var conten=[];
    for(i=1;i<7;i++){
        conten.push("<div class='col-lg-2 col-md-2 col-sm-2 col-xs-4'><p id='n"+i+"' class='c_numeros'></p></div><div class='col-lg-4 col-md-4 col-sm-4 col-xs-8'><input type='text' id='r"+i+"' class='form-control text-lowercase'><br></div>");
    }
    $("#contenido").append(conten);
    for(i=1;i<101;i++){
        nums.push(i);
    }
    f_iniciar();
}
function f_iniciar(){
    QuitaClase(".nota",claseAnimada);
    AgregaClase(".actividad",claseAnimada);
    $("#trace").hide();//resultados
    $("#n_cont").html(cont+1);//contador de ejercicios
    $("#n_ejer").html(ejer);//total de ejercicios
    nums.sort(f_randomico);
    res_txt=[],temp_txt=[];            
    $(".c_numeros").each(function(index){
        $(this).html(nums[sum1]);//numeros a mostrar
        $(this).addClass( "animate bounceIn" );//agregamos clase de animacion
        res_txt.push(t_nums[nums[sum1]]);//mostrar respuestas
        var temp = $("#r"+(index+1)).val('');//quitamos la clase de correcto o incorrecto a los inputs     
        removerClase(temp);
        sum1++;
    });
    $("#r1").focus();
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        $(".c_numeros").each(function(){
           $(this).removeClass( "animate bounceIn" );
        });        
        this.removeEventListener("click", f_comprobar);
        $('.actividad1 input').each(function(i){               
            var temp = $(this);                  
            if(temp.val().toLowerCase() == res_txt[i]){
                cor++;
                f_ok(temp);
            }else{
                inc++;
                f_no(temp);
            }
        });    
        
        Calculo_nota();
        cont++;
    };
}