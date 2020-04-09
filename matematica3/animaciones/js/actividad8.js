var n1=0,n2=0,i,j, cor=0, inc=0, ejer=3,itemsT=2*ejer, cont=0,v_imagenes=[],inputs=[],cajas=[],resp=[],nums=[],calificacion=10;
var claseAnimada='animate bounceIn';
$("#txtNota").html("0"); //impresion de nota
inputs = ['r1','r2'];
cajas=['img1','img2'];
for(i=1;i<4;i++){
    nums.push(i);
}
var msj =['piqueros de patas azules.','lobos marinos','tortugas']; //mensajes para respuestas
f_iniciar();
function f_iniciar() {
    QuitaClase(".nota",claseAnimada);
    AgregaClase(".actividad",claseAnimada);
    $("#trace").hide();//resultados
    $("#n_cont").html(cont+1);//contador de ejercicios
    $("#n_ejer").html(ejer);//total de ejercicios
    resp=[];
    v_imagenes=[];
    nums.sort(f_randomico);
    $(inputs).each(function(){
        var temp = $("#"+this).val('');         
        removerClase(temp);
    })
    n1 = (Math.floor(Math.random()*20)+10);
    n2 = (Math.floor(Math.random()*20)+10);
    resp.push(n1,n2);
    $("#resR1").html(msj[nums[0]-1]);
    $("#resR2").html(msj[nums[1]-1]);
    for(i=1;i<=n1;i++){ //grupo uno
        v_imagenes.push("<img src='img/i"+(nums[0])+"_p18_act2.jpg' class='c_imagenes'>");
    }
    $("#r1").focus();
    $("#img1").html('');
    $("#img1").append(v_imagenes);
    v_imagenes=[];
    for(i=1;i<=n2;i++){//grupo dos
        v_imagenes.push("<img src='img/i"+(nums[1])+"_p18_act2.jpg' class='c_imagenes'>");
    }
    $("#img2").html('');
    $("#img2").append(v_imagenes);
    //console.log('respuestas >> ' + n1,n2);
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        this.removeEventListener("click", f_comprobar);
        for(i=0;i<inputs.length;i++){
            var temp = $("#"+inputs[i]);
            if(temp.val() == resp[i]){
                cor++;
                f_ok(temp);
            }else{
                inc++;
                f_no(temp);
            }
        }
        Calculo_nota();
        cont++;
    };
}   