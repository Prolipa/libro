<?php
	$idusuario = $_REQUEST['idusuario'];
	$idgroup = $_REQUEST['id_group'];
?>
    <!--Bootstrap-->
    <link href="actividades/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="actividades/css/normalize.min.css">
    <link rel="stylesheet" href="actividades/css/animate.min.css">
    <!--Animaciones-->
    <!--Css propio del proyecto-->
    <link href="actividades/css/menu.css" rel="stylesheet">
    <!-- /.Llamando al  Libro -->
    <!-- /.Menu Libro -->
    <button class="btn btn-warning btn1-menu" data-toggle="modal" data-target="#menuModal">Menú</button>
    <div class="modal fade" tabindex="-1" role="dialog" id="menuModal">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-body" id="menu_body">
                    <ul hidden>
                        <li><a class="demo02" href="#modal-02">PROLIPA DEMO 2</a></li>
                    </ul>
                    <ul class="nav nav-tabs" id="menu_tabs">
                    </ul>
                    <div class="tab-content" id="body_tabs">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="modal-02">
        <div  id="btn-close-modal" class="close-modal-02 btn btn-warning form-control text-center salir" hidden>
           <b><i class="fa fa-times"></i> Salir </b>
        </div>
        <div class="modal-content">
            <span class="contenido">
            </span>
        </div>
    </div>

    <!-- /.modal -->
    <!-- <script>window.$ = window.jQuery = require('jquery');</script> -->
    <script src="actividades/js/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="actividades/js/bootstrap.min.js"></script>
    <!--menu generator-->
    <script src="actividades/js/menu_marks.js"></script>
    <script src="actividades/js/menu_generator.js"></script>
    <?php include "detalle.php";
    ?>
    <script src="actividades/js/animatedModal.js"></script>

