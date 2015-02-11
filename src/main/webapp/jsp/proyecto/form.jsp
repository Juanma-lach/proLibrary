<%-- 
 Copyright (C) July 2014 Rafael Aznar

 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 2
 of the License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program; if not, write to the Free Software
 Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
--%>



<form class="form-horizontal" role="form" action="#" id="proyectoForm" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="titulo">Titulo</label>
        <div class="col-sm-6">
            <input type="text" id="titulo" class="form-control"  name="titulo" size="15" placeholder="Pon aqu� tu nombre de proyecto" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="autor">Autor</label>
        <div class="col-sm-6">
            <input type="text" id="autor" class="form-control"  name="autor" size="15" placeholder="Pon aqu� tu contrase�a" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label" for="descripcion">Descripci�n </label> 
        <div class="col-sm-2">              
            <textarea rows="5" cols="100" id="descripcion" class="form-control" name="descripcion"></textarea>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label" for="Tags">Tags </label> 
        <div class="col-sm-2">              
            <input type="text" id="tags" class="form-control"  name="tags" size="15" placeholder="Pon etiquetas" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label"  for="fecha">Fecha</label>
        <div class="col-sm-2">
            <input type="text"  class="form-control"  id="fecha" name="fecha" size="15" placeholder="Fecha del alta" />
        </div>
    </div>



    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <div id="messages"></div>
        </div>
    </div>

    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button class="btn btn-primary" id="submitForm">Guardar</button>
        </div>
    </div>

</form>


<script type="text/javascript">

    $(document).ready(function () {
        $('#fecha').datetimepicker({
            pickTime: false,
            language: 'es',
            showToday: true
        });
        //http://jqueryvalidation.org/documentation/
        $('#proyectoForm')
                .bootstrapValidator({
                    container: '#messages',
                    feedbackIcons: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                        titulo: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un t�tulo'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El t�tulo debe tener como m�ximo 255 caracteres'
                                }
                            }
                        },
                        autor: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir el nombre del autor'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El autor debe tener como m�ximo 255 caracteres'
                                }
                            }
                        },
                        descripcion: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una descripcion'
                                }
                            }
                        },
                        tags: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir etiquetas'
                                }
                            }

                        },
                        alta_group: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una fecha de alta'
                                },
                                date: {
                                    format: 'DD/MM/YYYY',
                                    message: 'La fecha de alta no tiene formato DD/MM/YYYY'
                                }
                            }
                        }
                    }
                })
                .on('change', '[name="id_proyecto"]', function () {
                    $('#proyectoForm').bootstrapValidator('revalidateField', 'id_proyecto');
                })

                .on('change', '[name="id_tipoproyecto"]', function () {
                    $('#proyectoForm').bootstrapValidator('revalidateField', 'id_tipoproyecto');
                })
                ;
        $('#alta_group').on('dp.change dp.show', function (e) {
            // Revalidate the date when user change it
            $('#proyectoForm').bootstrapValidator('revalidateField', 'alta_group');
        });
        $('#cambio_group').on('dp.change dp.show', function (e) {
            // Revalidate the date when user change it
            $('#proyectoForm').bootstrapValidator('revalidateField', 'cambio_group');
        });
    });



</script>
