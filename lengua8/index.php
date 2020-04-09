<?php
	$idusuario = $_REQUEST['idusuario'];
	$idgroup = $_REQUEST['id_group'];
?>
    <!--Bootstrap-->
    <link href="actividades/css/bootstrap.min.css" rel="stylesheet">
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
                    <ul class="nav nav-tabs" id="menu_tabs">
                    </ul>
                    <div class="tab-content" id="body_tabs">
                    </div>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    <script src="actividades/js/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="actividades/js/bootstrap.min.js"></script>
    <!--menu generator-->
    <script src="actividades/js/menu_marks.js"></script>
    <script src="actividades/js/menu_generator.js"></script>
 <?php include "detalle.php";
 
 
 ?>
