var resp3=new Array();
    id=new Array();

function Inicio() {
    $('#nota-informativa').slideUp('slow');
} 
function cojerdatos(nombre,vct){
    sim="#";
    nom=sim+nombre;
    aux=$(nom).val();
    vct.push(parseInt(aux)); 
    
}
function Cargar() {
    Inicio();
    var myArray = []; 
    pre2 = [];
    pre3 = [];
    NumerosAleatorios(myArray,3);
    NumerosAleatorios(pre2,4);
    NumerosAleatorios(pre3,4);


//Pregunta2
    contenido3= new Array();
    contenido2[pre2[0]] = '<tr><td><label><li><input type=radio id=id value=0 name=ra2></li></label></td> <td>837 200 700</td> <td>638 500 100</td> <td>594 199 300</td> <td>419 300 200</td> <td>159 600 700</td></tr>';
    contenido2[pre2[1]] = '<tr><td><label><li><input type=radio id=id value=1 name=ra2></li></label></td> <td>159 600 700</td> <td>419 300 200</td> <td>594 199 300</td> <td>638 500 100</td> <td>837 200 700</td></tr>';
    contenido2[pre2[2]] = '<tr><td><label><li><input type=radio id=id value=2 name=ra2></li></label></td> <td>837 200 700</td> <td>594 199 300</td> <td>638 500 100</td> <td>419 300 200</td> <td>159 600 700</td></tr>';
    contenido2[pre2[3]] = '<tr><td><label><li><input type=radio id=id value=3 name=ra2></li></label></td> <td>159 600 700</td> <td>594 199 300</td> <td>638 500 100</td> <td>419 300 200</td> <td>837 200 700</td></tr>';
    
    $("#contenido2").append(contenido2[1],contenido2[2],contenido2[3],contenido2[4])


//Pregunta3
    contenidoa= new Array();
    contenidob= new Array();

    contenidoa[pre3[0]] = '<tr><td><label><li><input type=radio id=id value=4 name=ra>     es divisible para 4 porque sus últimas cifras son impares. <label></li></td></tr>';
    contenidoa[pre3[1]] = '<tr><td><label><li><input type=radio id=id value=5 name=ra>     es divisible para 5 porque tiene un 5 en las centenas. <label></li></td></tr>';
    contenidoa[pre3[2]] = '<tr><td><label><li><input type=radio id=id value=6 name=ra>     no es divisible para 6 porque no es múltiplo de 2 y 3 <label></li></td></tr>';
    contenidoa[pre3[3]] = '<tr><td><label><li><input type=radio id=id value=7 name=ra>     es divisible para 3 porque al sumar sus cifras dan múltiplo de 3. <label></li></td></tr>';
    
    $("#contenidoa3").append(contenidoa[1],contenidoa[2],contenidoa[3],contenidoa[4]);

    contenidob[pre3[0]] = '<tr><td><label><li><input type=radio id=id value=8 name=rb>     no es múltiplo de 11 porque no termina en 12. <label></li></td></tr>';
    contenidob[pre3[1]] = '<tr><td><label><li><input type=radio id=id value=9 name=rb>     es divisible para 8 porque es divisible para 2 y para 4 a la vez.  <label></li></td></tr>';
    contenidob[pre3[2]] = '<tr><td><label><li><input type=radio id=id value=10 name=rb>     es divisible para 6 porque sus dos últimas cifras son múltiplos de 6. <label></li></td></tr>';
    contenidob[pre3[3]] = '<tr><td><label><li><input type=radio id=id value=11 name=rb>     es divisible para 5 porque la suma de sus dígitos es múltiplo de 5. <label></li></td></tr>';
    
    $("#contenidob3").append(contenidob[1],contenidob[2],contenidob[3],contenidob[4]);




//Pregunta6
    contenido6= new Array();
    contenido6[myArray[0]] = '<td><img src=img/i1_p53_actp.png ><input class=form-control min=0 style=width:50%; type=number id=r0 ></td>';
    contenido6[myArray[1]] = '<td><img src=img/i2_p53_actp.png ><input class=form-control min=0 style=width:50%; type=number id=r1 ></td>';
    contenido6[myArray[2]] = '<td><img src=img/i3_p53_actp.png ><input class=form-control min=0 style=width:50%; type=number id=r2 ></td>';

    $("#contenido6").append(contenido6[1],contenido6[2],contenido6[3]);

//Pregunta7
    contenido7 = new Array();
    contenido7[myArray[0]] = '<tr><td>Número de caras (C)</td><td><input class=form-control min=0  type=number id=a0 ></td><td><input class=form-control min=0  type=number id=a1 ></td><td><input class=form-control min=0  type=number id=a2 ></td></tr>';
    contenido7[myArray[1]] = '<tr><td>Número de aristas (A)</td><td><input class=form-control min=0  type=number id=b0 ></td><td><input class=form-control min=0  type=number id=b1 ></td><td><input class=form-control min=0  type=number id=b2 ></td></tr>';
    contenido7[myArray[2]] = '<tr><td>Número de vértices (V)</td><td><input class=form-control min=0  type=number id=c0 ></td><td><input class=form-control min=0  type=number id=c1 ></td><td><input class=form-control min=0  type=number id=c2 ></td></tr>';
    contenido7[4] = '<tr><td>Fórmula de Euler  C = A – V + 2 </td><td><input class=form-control min=0  type=number id=d0 ></td><td><input class=form-control min=0  type=number id=d1 ></td><td><input class=form-control min=0  type=number id=d2 ></td></tr>';

    $("#contenido7").append(contenido7[1],contenido7[2],contenido7[3],contenido7[4]);

}



function NumerosAleatorios(myArray,can){
   
    while(myArray.length < can ){
    var numeroAleatorio = Math.ceil(Math.random()*can);
    var existe = false;
        for(var i=0;i<myArray.length;i++){
            if(myArray [i] == numeroAleatorio){
            existe = true;
            break;
            }
        }
        if(!existe){
            myArray[myArray.length] = numeroAleatorio;
            
        }

    }
}

function calificar(num,a,nombre){
    
    debugger;
    if(a==num){
        nota7=nota7+1;
        $(nombre).css("background-color", "green");
     }else{
         $(nombre).css("background-color", "red");
     }
    
    return nota;

}


function cojerdatos(nombre,vct){
    aux=$(nombre).val();
    vct.push(parseInt(aux)); 
    
}


$(document).ready(function() {
    Cargar();
    $("#Calificar").click(function() {
        nota = 0;
        nota7 =0;
        cont=0;
        r23=[1,5,9]
        
        $(':radio:checked').each(function(i){
            aux= $(this).val();
            auxn=parseInt(aux);
            id.push(auxn);
            cont=cont+1
           });
        
            if(id[0] == r23[0]){
                nota = nota+2;
                $("#p2").css("background-color", "green");
            }else{
                $("#p2").css("background-color", "red");
            }
    
            if(id[1] == r23[1]){
                nota = nota+1;
                $("#pa").css("background-color", "green");
            }else{
                $("#pa").css("background-color", "red");
            }

            if(id[2] == r23[2]){
                nota = nota+1;
                $("#pb").css("background-color", "green");
            }else{
                $("#pb").css("background-color", "red");
            }

            nota1=$("#nota1").val();
            var nota1=parseInt(nota1);

            if(nota1>0){
                $("#nota1").css("background-color", "green");
            }else{
                nota1=0;
                $("#nota1").css("background-color", "red");
            }

            nota2=$("#nota2").val();
            var nota2=parseInt(nota2);

            if(nota2>0){
                $("#nota2").css("background-color", "green");
            }else{
                nota2=0;
                $("#nota2").css("background-color", "red");
            }

            nota3=$("#nota3").val();
            var nota3=parseInt(nota3);


            if(nota3>0){
                $("#nota3").css("background-color", "green");
            }else{
                nota3=0;
                $("#nota3").css("background-color", "red");
            }


            r0=$("#r0").val();
            r1=$("#r1").val();
            r2=$("#r2").val();
            r0=parseInt(r0);
            r1=parseInt(r1);
            r2=parseInt(r2);

            if(r0==90){
                notar0=1;
                $("#r0").css("background-color", "green");
            }else{
                notar0=0;
                $("#r0").css("background-color", "red");
            }

            if(r1==150){
                notar1=1;
                $("#r1").css("background-color", "green");
            }else{
                notar1=0;
                $("#r1").css("background-color", "red");
            }

            if(r2==60){
                notar2=1;
                $("#r2").css("background-color", "green");
            }else{
                notar2=0;
                $("#r2").css("background-color", "red");
            }

            notap3=(notar0+notar1+notar2)/3;
            
            vra=[];
            vrb=[];
            vrc=[];
            vrd=[];
            ra=[6,8,5];
            rb=[12,12,8];
            rc=[8,6,5];
            rd=[6,8,5];
            a="#a";
            b="#b";
            c="#c";
            d="#d";
            for(i=0;i<3;i++){
                cojerdatos(a+i,vra);
                cojerdatos(b+i,vrb);
                cojerdatos(c+i,vrc);
                cojerdatos(d+i,vrd);
            }

            for(i=0;i<3;i++){
                calificar(ra[i],vra[i],a+i);
                calificar(rb[i],vrb[i],b+i);
                calificar(rc[i],vrc[i],c+i);
                calificar(rd[i],vrd[i],d+i);
            }

    not7=nota7/6;
    notaabierta=nota1+nota2+nota3+notap3+not7;

    var notaFinal = nota + notaabierta;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal);
    $('#Calificar').attr('disabled', true);

});

});