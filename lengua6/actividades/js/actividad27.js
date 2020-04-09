        var totalC=0, total=0, totalFinal=0; //variables de la calificacion
        var ejer=1,itemsT=0,cont=0,tmp,cor=0,inc=0,calificacion=9,claseAnimada='animate bounceIn';
        var i,t_contep1=[],t_arras_p1=[],r_idsp1=[],v_idsp1=[]; //pregunta 1
        var txt_p2=[],txt_p5=[],txt_p6=[],txt_p8=[],r1_p7=[],r2_p7=[];
        var r_idsp9=[],v_idsp9=[], costa=[],sierra=[],oriente=[];
        var contenido_p3; 
        f_preg_1();
        f_preg_2();
        f_preg_3();
        f_preg_5();
        f_preg_6();
        f_preg_7();
        f_preg_8();
        f_preg_9();
        function f_preg_1(){
            itemsT+=4;
            var valores_p1=["Espacio", "Tiempo", "Narrador", "Personaje"];
            var cont_p1 = ['Se trataba de un castillo abandonado. Las paredes estaban tan derruidas que podían caerse en cualquier momento.','Habían transcurrido dos años, tres meses y cuatro días desde que su hijo se marchó con los gitanos.','La historia que voy a relatar...','Se levantaba todos los días a la misma hora. Tejía una trenza para sujetar su larga cabellera y estaba lista para una nueva jornada.'];
            for(i=0;i<valores_p1.length;i++){
                    t_arras_p1.push("<div class='c_arrast_p1' id='ori"+i+"'><p>"+valores_p1[i]+"</p></div>");
                }
            for(i=0;i<cont_p1.length;i++){
                t_contep1.push('<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center"> <p class="borde_p1 destin_p1" id="dest'+i+'"></p><label class="txt_p1_clase">'+cont_p1[i]+'</label></div>');
            }
            t_arras_p1.sort(f_randomico);
            t_contep1.sort(f_randomico);
            $(".arrastres_p1").append(t_arras_p1);
            $(".cont_p1").append(t_contep1);
            $(".c_arrast_p1").css('cursor','pointer');
            $(".c_arrast_p1").draggable({ //arrastramos
                revert: "invalid",
                zIndex:5,
                containment: "#collapse1",
                scroll: false,
            });
           $(".destin_p1").droppable({
                drop: function(e, ui) {
                    $(this).removeClass("borde_p1");
                    v_idsp1.push(ui.draggable.attr("id").substr(3));//obtenemos el id del arrastre
                    r_idsp1.push($(this).attr("id").substr(4)); //obtenemos el id del destino
                    ui.draggable.attr("style", "");
                    $(this).append(ui.draggable);
                    $(this).find(".c_imagenes").draggable({disabled:true});
                    //console.log(v_idsp1, r_idsp1);
                }
            });
        };
        function f_preg_2(){
            itemsT+=4;
            var cont_p2 =['<tr><td style="border: 2px solid #005CA9"><input type="text" class="form-control text-lowercase resp_p2"><input type="hidden" class="solu_p2" value="cuentos de hadas"></td><td style="border: 2px solid #005CA9"><p class="fuente">narran hechos fantásticos y utilizan personajes como duendes, brujas, hadas, ogros.</p></td></tr>','<tr><td style="border: 2px solid #005CA9"><p class="fuente">cuentos de terror</p></td><td style="border: 2px solid #005CA9"><input type="text" class="form-control text-lowercase resp_p2"><input type="hidden" class="solu_p2" value="narran hechos sobrenaturales para provocar miedo." ></td></tr>','<tr><td style="border: 2px solid #005CA9"><input type="text" class="form-control text-lowercase resp_p2"><input type="hidden" class="solu_p2" value="cuento de realismo social"></td><td style="border: 2px solid #005CA9"><p class="fuente">narran problemas sociales, como la pobreza o el racismo.</p></td></tr>','<tr><td style="border: 2px solid #005CA9"><p class="fuente">cuentos policiales</p></td><td style="border: 2px solid #005CA9"><input type="text" class="form-control text-lowercase resp_p2"><input type="hidden" class="solu_p2" value="narran la resolución de un misterio o crimen."></td></tr>'];
            cont_p2.sort(f_randomico);
            $(".filas_p2").append(cont_p2);
        }
        function f_preg_3(){
            itemsT +=3; //cantidad de respuestas correctas y multiplicar x la cantidad de ejercicios a realizar                       
            contenido_p3=[
                ['Bolsas de tela, dos por el precio de una.','publicidad'],
                ['La democracia es tu voz. Ven a votar.','propaganda'],
                ['Siempre los mejores precios, todo el año. Gran comisariato, la alegría de comprar.','publicidad'],                
              ];
            contenido_p3.sort(f_randomico);
            $(".t3").each(function(index){
                $(this).html(contenido_p3[index][0]);
                //console.log(contenido_p3[index][1]);//respuestas
            });
        }
        function f_preg_5(){
            itemsT+=5;
        }
        function f_preg_6(){
            itemsT+=6;
            var cont_p6=['<input type="text" class="form-control resp_p6 fuente2"><input type="hidden" class="solu_p6" value="Este"> abrigo que traigo puesto me queda mejor que <input type="text" class="form-control resp_p6 fuente2"><input type="hidden" class="solu_p6" value="ese/aquel"> que está guardado.','Me gusta más <input type="text" class="form-control resp_p6 fuente2"><input type="hidden" class="solu_p6" value="mi"> canción que la tuya.','No hay <input type="text" class="form-control resp_p6 fuente2"><input type="hidden" class="solu_p6" value="mucha"> diferencia de edad entre nosotros, tú naciste el 5 de enero y yo, dos días después.','Han pasado <input type="text" class="form-control resp_p6 fuente2"><input type="hidden" class="solu_p6" value="varios"> días desde que no nos vemos, casi una semana.','Hijo <input type="text" class="form-control resp_p6 fuente2"><input type="hidden" class="solu_p6" value="mío">, te extrañé tanto.'];
            cont_p6.sort(f_randomico);
            $(".conteni_p6").each(function(index){
                $(this).html(cont_p6[index]);
            });
        }
        function f_preg_7(){ 
            itemsT+=8;                        
            var orac_1_p7=['<p class="fuente"><span class="fuentecolorlista">●</span><span class="b0">Teresa</span> <span class="b0">me</span> <span class="b0">dio</span> <span class="a0">sus</span> <span class="b0">guantes</span> <span class="b0">y</span> <span class="b0">se</span> <span class="b0">llevó</span> <span class="b0">los</span> <span class="b0">míos</span> <span class="b0">por</span> <span class="b0">error</span>.</p>','<p class="fuente"><span class="fuentecolorlista">●</span><span class="b0">El</span> <span class="b0">tuyo</span> <span class="b0">es</span> <span class="b0">este</span>, <span class="b0">te</span> <span class="b0">lo</span> <span class="b0">devuelvo</span>.</p>','<p class="fuente"><span class="fuentecolorlista">●</span><span class="a0">Mi</span> <span class="b0">hermano</span> <span class="b0">llegó</span> <span class="b0">de</span> <span class="b0">su</span> <span class="b0">viaje</span> <span class="b0">ayer</span>.</p>','<p class="fuente"><span class="fuentecolorlista">●</span><span class="b0">Susana</span> <span class="b0">perdió</span> <span class="a0">su</span> <span class="b0">computadora</span>, <span class="b0">por</span> <span class="b0">eso</span> <span class="b0">necesita</span> <span class="b0">la</span> <span class="b0">nuestra</span> <span class="b0">prestada</span>.</p>','<p class="fuente"><span class="fuentecolorlista">●</span><span class="b0">Miguel</span> <span class="b0">está</span> <span class="b0">usando</span> <span class="a0">tus</span> <span class="b0">esferos</span> <span class="b0">un</span> <span class="b0">momento</span>, <span class="b0">mientras</span> <span class="b0">te</span> <span class="b0">presto</span> <span class="b0">los</span> <span class="b0">míos</span>.</p>'];
            var orac_2_p7=['<p class="fuente"><span class="fuentecolorlista">●</span><span class="b0">Teresa</span> <span class="b0">me</span> <span class="b0">dio</span> <span class="b0">sus</span> <span class="b0">guantes</span> <span class="b0">y</span> <span class="b0">se</span> <span class="b0">llevó</span> <span class="b0">los</span> <span class="c0">míos</span> <span class="b0">por</span> <span class="b0">error</span>.</p>','<p class="fuente"><span class="fuentecolorlista">●</span><span class="b0">El</span> <span class="c0">tuyo</span> <span class="b0">es</span> <span class="b0">este</span>, <span class="b0">te</span> <span class="b0">lo</span> <span class="b0">devuelvo</span>.</p>','<p class="fuente"><span class="fuentecolorlista">●</span><span class="b0">Mi</span> <span class="b0">hermano</span> <span class="b0">llegó</span> <span class="b0">de</span> <span class="b0">su</span> <span class="b0">viaje</span> <span class="b0">ayer</span>.</p>','<p class="fuente"><span class="fuentecolorlista">●</span><span class="b0">Susana</span> <span class="b0">perdió</span> <span class="b0">su</span> <span class="b0">computadora</span>, <span class="b0">por</span> <span class="b0">eso</span> <span class="b0">necesita</span> <span class="b0">la</span> <span class="c0">nuestra</span> <span class="b0">prestada</span>.</p>','<p class="fuente"><span class="fuentecolorlista">●</span><span class="b0">Miguel</span> <span class="b0">está</span> <span class="b0">usando</span> <span class="b0">tus</span> <span class="b0">esferos</span> <span class="b0">un</span> <span class="b0">momento</span>, <span class="b0">mientras</span> <span class="b0">te</span> <span class="b0">presto</span> <span class="b0">los</span> <span class="c0">míos</span>.</p>'];
            orac_1_p7.sort(f_randomico);
            orac_2_p7.sort(f_randomico);
            var n_p7 = (Math.floor(Math.random()*2));
            console.log(n_p7);
            if(n_p7 == 0){
                $(".select1_p7").html('<h4>SELECCIONE LOS ADJETIVOS</h4>').append(orac_1_p7);
                $(".select2_p7").html('<h4>SELECCIONE LOS PRONOMBRES</h4>').append(orac_2_p7);                 
            }else{
                $(".select1_p7").html('<h4>SELECCIONE LOS PRONOMBRES</h4>').append(orac_2_p7);
                $(".select2_p7").html('<h4>SELECCIONE LOS ADJETIVOS</h4>').append(orac_1_p7);               
            }
            $('.a0').click(function(){
                $(this).unbind("click");
                $(this).addClass("p_adjetivo");
                if( $(this).hasClass('a0') ){
                    r1_p7.push('ok');
                }else{
                    r1_p7.push('no');
                }
            });            
            $('.select1_p7 .b0').click(function(){
                 $(this).unbind("click");
                 $(this).addClass("pintarincorrecto");
                r1_p7.push('no');
            });           
            $('.select2_p7 .b0').click(function(){
                 $(this).unbind("click");
                 $(this).addClass("pintarincorrecto");
                r2_p7.push('no');
                
            });
            $('.c0').click(function(){
                $(this).unbind("click");
                $(this).addClass("p_pronombre");
                 if( $(this).hasClass('c0') ){
                    r2_p7.push('ok');
                }else{
                    r2_p7.push('no');
                }
            });
            $('.select1_p7, .select2_p7').click(function(){
                console.log('res1 ' , r1_p7);
                console.log('res2 ' , r2_p7);
            });
        }
        function f_preg_8(){
            itemsT+=6;
            var cont_p8=['<div class="col-lg-2 col-md-2 col-sm-4 col-xs-6"><div class="cuad_p8" align="center"><label>relo</label><input type="text" class="form-control resp_p8 fuente2" style="width: 40px" maxlength="1"><input type="hidden" class="solu_p8" value="j"><span>ero</span></div></div>','<div class="col-lg-2 col-md-2 col-sm-4 col-xs-6"><div class="cuad_p8" align="center"><label>sufra</label><input type="text" class="form-control resp_p8 fuente2" style="width: 40px" maxlength="1"><input type="hidden" class="solu_p8" value="g"><span>io</span></div></div>','<div class="col-lg-2 col-md-2 col-sm-4 col-xs-6"><div class="cuad_p8" align="center"><label>cole</label><input type="text" class="form-control resp_p8 fuente2" style="width: 40px" maxlength="1"><input type="hidden" class="solu_p8" value="g"><span>io</span></div></div>','<div class="col-lg-2 col-md-2 col-sm-4 col-xs-6"><div class="cuad_p8" align="center"><label>venda</label><input type="text" class="form-control resp_p8 fuente2" style="width: 40px" maxlength="1"><input type="hidden" class="solu_p8" value="j"><span>e</span></div></div>','<div class="col-lg-2 col-md-2 col-sm-4 col-xs-6"><div class="cuad_p8" align="center"><label>cerra</label><input type="text" class="form-control resp_p8 fuente2" style="width: 40px" maxlength="1"><input type="hidden" class="solu_p8" value="j"><span>ería</span></div></div>','<div class="col-lg-2 col-md-2 col-sm-4 col-xs-6"><div class="cuad_p8" align="center"><label>liti</label><input type="text" class="form-control resp_p8 fuente2" style="width: 40px" maxlength="1"><input type="hidden" class="solu_p8" value="g"><span>io</span></div></div>'];
            cont_p8.sort(f_randomico);
            $(".conte_p8").append(cont_p8);
        }
        function f_preg_9(){
            itemsT+=6;
            var cont_p9 =['<span class="c_arrast_p9 solu3">Secoya</span>','<span class="c_arrast_p9 solu1">Awá</span>','<span class="c_arrast_p9 solu1">Epera</span>','<span class="c_arrast_p9 solu2">Kichwa</span>','<span class="c_arrast_p9 solu3">Shuar</span>','<span class="c_arrast_p9 solu1">Chachi</span>'];
            cont_p9.sort(f_randomico);
            $(".palabras_p9").append(cont_p9);
            $(".c_arrast_p9").css('cursor','pointer');
            $(".c_arrast_p9").draggable({ //arrastramos
                revert: "invalid",
                zIndex:5,
                containment: "#collapse9",
                scroll: false,
            });
           $(".destin_p9").droppable({
                drop: function(e, ui) {

                    if($(this).hasClass('solu1') && $(ui.draggable).hasClass('solu1')){
                        costa.push('ok');
                    }else  if($(this).hasClass('solu2') && $(ui.draggable).hasClass('solu2')){
                        sierra.push('ok');
                    } else if($(this).hasClass('solu3') && $(ui.draggable).hasClass('solu3')){
                        oriente.push('ok');
                    }
                    ui.draggable.prop("style", "");
                    $(this).append(ui.draggable);
                    $(this).find(".c_arrast_p9").draggable({disabled:true});
                    /*console.log('costa ', costa);
                    console.log('sierra ', sierra);
                    console.log('oriente ', oriente);*/
                }
            });
        }
        $( ".btnCalificar" ).bind( "click", function() { //click en el boton iniciar
            cont++;
            $( this).unbind( "click" );
            AgregaClase(".nota",claseAnimada);
            QuitaClase(".actividad",claseAnimada);
            //pregunta 1
            temp = $(".destin_p1");
            for(i=0;i<t_contep1.length;i++){
                if(v_idsp1.length == t_contep1.length && v_idsp1[i]==r_idsp1[i]){
                    cor++;
                    f_ok(temp);
                }else{
                    inc++;
                    f_no(temp);
                }
            }
            //pregunta 2
            $(".solu_p2").each(function(){
                 txt_p2.push($( this).val());//almacenamos las respuestas
            });
            //console.log(txt_p2)
            $(".resp_p2").each(function(index){
                tmp = $(this);
                if(tmp.val().toLowerCase()== txt_p2[index]){ //comparamos las respuestas
                    cor++
                    f_ok(tmp);
                }else{
                    inc++
                    f_no(tmp);
                }                       
            });
            //pregunta 3
            $(".r3").each(function(index){
                tmp = $(this);
                if($(this).val().toLowerCase() == contenido_p3[index][1]){
                    cor++;
                    f_ok(tmp);
                }else{
                    inc++
                    f_no(tmp);
               };
           });
            //pregunta 5
            $(".solu_p5").each(function(){
                 txt_p5.push($( this).val());//almacenamos las respuestas
            });
            //console.log(txt_p2)
            $(".resp_p5").each(function(index){
                tmp = $(this);
                if(tmp.val().toLowerCase()== txt_p5[index]){ //comparamos las respuestas
                    cor++
                    f_ok(tmp);
                }else{
                    inc++
                    f_no(tmp);
                }                       
            });
            //pregunta 6
            $(".solu_p6").each(function(){
                 txt_p6.push($(this).val());//almacenamos las respuestas
            });
            $(".resp_p6").each(function(index){
                tmp = $(this);
                if(tmp.val()== txt_p6[index]){ //comparamos las respuestas
                    cor++
                    f_ok(tmp);
                }else{
                    inc++
                    f_no(tmp);
                }                       
            });
            //pregunta 7
            for(i=0;i<r1_p7.length;i++){
                if(r1_p7[i]== 'ok'){
                    cor++;
                }else{
                    inc++;
                }
            }
            for(i=0;i<r2_p7.length;i++){
                if(r2_p7[i]== 'ok'){
                    cor++;
                }else{
                    inc++;
                }
            }
            //pregunta 8
            $(".solu_p8").each(function(){
                 txt_p8.push($(this).val());//almacenamos las respuestas
            });
            $(".resp_p8").each(function(index){
                tmp = $(this);
                if(tmp.val()== txt_p8[index]){ //comparamos las respuestas
                    cor++
                    f_ok(tmp);
                }else{
                    inc++
                    f_no(tmp);
                }                       
            });
            //pregunta 9
            temp = $(".destin_p9");console.log('999 ',temp)
            for(i=0;i<costa.length;i++){
                if(costa.length == 3 && costa[i]=='ok' ){
                    cor++;
                    f_ok(temp);
                }else{
                    inc++;
                    f_no(temp);
                }
            }
            for(i=0;i<sierra.length;i++){
                if(sierra.length == 1  && sierra[i]=='ok' ){
                    cor++;
                    f_ok(temp);
                }else{
                    inc++;
                    f_no(temp);
                }
            }
            for(i=0;i<oriente.length;i++){
                if(oriente.length == 2  && oriente[i]=='ok' ){
                    cor++;
                    f_ok(temp);
                }else{
                    inc++;
                    f_no(temp);
                }
            }
            totalC = (cor * (calificacion / itemsT)).toFixed(2);//suma de calificacion cerrada
            $('.calif').each(function(){ //suma de puntajes en respuestas abiertas
                if( $(this).val()!='' ) {
                    total+= parseFloat($(this).val());
                    f_ok( $(this));
                }else{
                    inc++;
                    f_no( $(this));
                }
            });
            totalFinal = parseFloat(total)+parseFloat(totalC);
            //console.log(total,totalC,totalFinal);
            if(totalFinal>10){
                alert("Verifique su puntaje en las respuestas Abiertas, excede el limite de calificación");
            }else{
                $("#txtNota").html(totalFinal);
            }

        });
