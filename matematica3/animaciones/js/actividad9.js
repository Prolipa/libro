var i,n1,n2,t1,cont=0,ejer=10,itemsT=2*ejer,t_nums=[],inputs=[],cajas=[],img1,img2,y1,y2,decr,cor=0,inc=0,calificacion=10;
var claseAnimada='animate bounceIn';
f_cargar();
function f_cargar(){
    $("#txtNota").html("0"); //impresion de nota
    t_nums=['','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','doce','trece','catorce','quince','dieciseis','diecisiete','dieciocho','diecinueve','veinte','veintiuno','veintidos','veintitres','veinticuatro','veinticinco','veintiseis','veintisiete','veintiocho','veintinueve','treinta','treinta y uno','treinta y dos','treinta y tres','treinta y cuatro','treinta y cinco','treinta y seis','treinta y siete','treinta y ocho','treinta y nueve','cuarenta','cuarenta y uno','cuarenta y dos','cuarenta y tres','cuarenta y cuatro','cuarenta y cinco','cuarenta y seis','cuarenta y siete','cuarenta y ocho','cuarenta y nueve','cincuenta','cincuenta y uno','cincuenta y dos','cincuenta y tres','cincuenta y cuatro','cincuenta y cinco','cincuenta y seis','cincuenta y siete','cincuenta y ocho','cincuenta y nueve','sesenta','sesenta y uno','sesenta y dos','sesenta y tres','sesenta y cuatro','sesenta y cinco','sesenta y seis','sesenta y siete','sesenta y ocho','sesenta y nueve','setenta','setenta y uno','setenta y dos','setenta y tres','setenta y cuatro','setenta y cinco','setenta y seis','setenta y siete','setenta y ocho','setenta y nueve','ochenta','ochenta y uno','ochenta y dos','ochenta y tres','ochenta y cuatro','ochenta y cinco','ochenta y seis','ochenta y siete','ochenta y ocho','ochenta y nueve','noventa','noventa y uno','noventa y dos','noventa y tres','noventa y cuatro','noventa y cinco','noventa y seis','noventa y siete','noventa y ocho','noventa y nueve','cien'];
    f_iniciar();
} 
function f_iniciar(){
    QuitaClase(".nota",claseAnimada);
    AgregaClase(".actividad",claseAnimada);
    $("#trace").hide();//resultados
    $("#n_cont").html(cont+1);//contador de ejercicios
    $("#n_ejer").html(ejer);//total de ejercicios
    $("#n1").val('').focus();
    inputs=['n1','n2'];
    $(inputs).each(function(){
        $(this).val('');
        var temp = $("#"+this).val('');         
        removerClase(temp);
     });
    n1 = (Math.floor(Math.random()*9)+1);
    n2 = (Math.floor(Math.random()*9)+1);
    t1 = parseInt(n1.toString()+n2.toString());
    img1="",img2="",y1=110,y2=y1, decr=13;
    $(".c_piezas").html('');
    for(i=0;i<n1;i++){
        img1=("<img src='img/i2_p19_act2.png' style='position:absolute;top:"+y1+"px;left: 51px'>");
        y1-=decr;
        $(".c_piezas").append(img1);
        $(".c_piezas").append(img1);
        $(".c_piezas").addClass( "animate fadeIn" );//agregamos clase de animacion
        //$(".c_piezas").addClass( "animate fadeIn" );//agregamos clase de animacion
    }
    for(i=0;i<n2;i++){
        img2=("<img src='img/i3_p19_act2.png' style='position:absolute;top:"+y2+"px;left: 92px'>");
        y2-=decr;
        $(".c_piezas").append(img2);
        $(".c_piezas").addClass( "animate fadeIn" );//agregamos clase de animacion
    }
    /*console.log(t1,t_nums[t1]);
     $("#n1").val(t1);
     $("#n2").val(t_nums[t1]);*/
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){  
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        this.removeEventListener("click", f_comprobar);
        var res1=[t1,t_nums[t1]];
        $('.actividad1 input').each(function(i){
            //var temp = $("#"+inputs[i]);                  
            var temp = $(this);                  
            if(temp.val().toLowerCase() == res1[i]){
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