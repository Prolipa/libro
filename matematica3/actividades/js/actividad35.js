var ejer=10,itemsT=(4*ejer),cont=0,tmp,cor=0,inc=0,calificacion=10,claseAnimada='animate bounceIn';
var i,n1,n2,t1,t_nums=[],resp=[],cajas=[],img1,img2,y1,y2,decr;
f_cargar();
function f_cargar(){
    $("#txtNota").html("0"); //impresion de nota
    t_nums=['cero','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','doce','trece','catorce','quince','dieciseis','diecisiete','dieciocho','diecinueve','veinte','veintiuno','veintidos','veintitres','veinticuatro','veinticinco','veintiseis','veintisiete','veintiocho','veintinueve','treinta','treinta y uno','treinta y dos','treinta y tres','treinta y cuatro','treinta y cinco','treinta y seis','treinta y siete','treinta y ocho','treinta y nueve','cuarenta','cuarenta y uno','cuarenta y dos','cuarenta y tres','cuarenta y cuatro','cuarenta y cinco','cuarenta y seis','cuarenta y siete','cuarenta y ocho','cuarenta y nueve','cincuenta','cincuenta y uno','cincuenta y dos','cincuenta y tres','cincuenta y cuatro','cincuenta y cinco','cincuenta y seis','cincuenta y siete','cincuenta y ocho','cincuenta y nueve','sesenta','sesenta y uno','sesenta y dos','sesenta y tres','sesenta y cuatro','sesenta y cinco','sesenta y seis','sesenta y siete','sesenta y ocho','sesenta y nueve','setenta','setenta y uno','setenta y dos','setenta y tres','setenta y cuatro','setenta y cinco','setenta y seis','setenta y siete','setenta y ocho','setenta y nueve','ochenta','ochenta y uno','ochenta y dos','ochenta y tres','ochenta y cuatro','ochenta y cinco','ochenta y seis','ochenta y siete','ochenta y ocho','ochenta y nueve','noventa','noventa y uno','noventa y dos','noventa y tres','noventa y cuatro','noventa y cinco','noventa y seis','noventa y siete','noventa y ocho','noventa y nueve','cien'];
    f_iniciar();
} 
function f_iniciar(){
    QuitaClase(".nota",claseAnimada);
    AgregaClase(".actividad",claseAnimada);
    $("#trace").hide();//resultados
    $("#n_cont").html(cont+1);//contador de ejercicios
    $("#n_ejer").html(ejer);//total de ejercicios
    $("#n1").val('').focus();
    $(".t1").each(function(){
        $(this).val('');
        var temp = $(this).val('');         
        removerClase(temp);
     });
    img1="",img2="",y1=110,y2=y1, decr=13;
    $(".c_piezas").html('');
    $(".t1")[0].focus();
    n1 = (Math.floor(Math.random()*9)+1);
    n2 = (Math.floor(Math.random()*9)+1);
    for(i=0;i<n1;i++){
        img1=("<img src='img/i2_p19_act2.png' style='position:absolute;top:"+y1+"px;left: 36px'>");
        y1-=decr;
        $(".c_piezas").append(img1);
        $(".c_piezas").append(img1);
    }
    for(i=0;i<n2;i++){
        img2=("<img src='img/i3_p19_act2.png' style='position:absolute;top:"+y2+"px;left: 77px'>");
        y2-=decr;
        $(".c_piezas").append(img2);
    }
    var a = String(n1)+String(n2);
    var b = t_nums[parseInt(String(n1)+String(n2))];
    var c = n1+'D y ' + n2 + 'U';
    var d = (n1*10) + String(' + '+n2);
    resp=[];
    resp.push(a,b,c,d);
    //console.log(resp); //respuestas
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){  
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        this.removeEventListener("click", f_comprobar);
        $('.t1').each(function(i){
            //var temp = $("#"+inputs[i]);                  
            var temp = $(this);                  
            if(temp.val() == resp[i]){
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