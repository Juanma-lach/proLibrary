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
<%@page import="net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl"%>
<%UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");%>
<%
        int id = user.getId();
%>

<form class="form-horizontal" role="form" action="#" id="usuarioForm" name="formulario">
    <div class="form-group id-oculto">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="login">Nombre de Usuario:</label>
        <div class="col-sm-4">
            <input type="text" id="login" class="form-control"  name="login" size="15" placeholder="Pon aquí tu nombre de usuario" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="password">Contraseña:</label>
        <div class="col-sm-4">
            <input type="password" id="password" class="form-control"  name="password" size="15" placeholder="Pon aquí tu contraseña" />
        </div>
    </div>
    

    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_tipousuario_id">Tipo de usuario: </label> 
        <div class="col-sm-2">              
            <input readonly="true"  class="form-control"  id="obj_tipousuario_id" class="input-mini" name="id_tipousuario" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_tipousuario_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_usuario_desc" id="obj_tipousuario_desc"></label>                     
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

    $(document).ready(function() {
        $('#alta_group').datetimepicker({
            pickTime: false,
            language: 'es',
            showToday: true
        });
        $('#cambio_group').datetimepicker({
            pickTime: false,
            language: 'es',
            showToday: true
        });
        //http://jqueryvalidation.org/documentation/
        $('#usuarioForm')
                .bootstrapValidator({
                    container: '#messages',
                    feedbackIcons: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                        login: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir algo en el login'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El login debe tener como máximo 255 caracteres'
                                }
                            }
                        },
                        password: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una contraseña'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'La contraseña debe tener como máximo 255 caracteres'
                                }
                            }
                        },
                        id_usuario: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe elegir un usuario'
                                },
                                integer: {
                                    message: 'El identificador de usuario debe ser un entero'
                                }
                            }
                        },
                        id_tipousuario: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe elegir un tipo de usuario'
                                },
                                integer: {
                                    message: 'El identificador de tipo de usuario debe ser un entero'
                                }
                            }
                        }

                    }
                })
                .on('change', '[name="id_usuario"]', function() {
                    $('#usuarioForm').bootstrapValidator('revalidateField', 'id_usuario');
                })

                .on('change', '[name="id_tipousuario"]', function() {
                    $('#usuarioForm').bootstrapValidator('revalidateField', 'id_tipousuario');
                })
                ;
        $('#alta_group').on('dp.change dp.show', function(e) {
// Revalidate the date when user change it
            $('#usuarioForm').bootstrapValidator('revalidateField', 'alta_group');
        });
        $('#cambio_group').on('dp.change dp.show', function(e) {
// Revalidate the date when user change it
            $('#usuarioForm').bootstrapValidator('revalidateField', 'cambio_group');
        });
    });       

    
    
</script>
     