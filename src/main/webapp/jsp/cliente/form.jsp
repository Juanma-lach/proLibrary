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

<form class="form-horizontal" role="form" action="#" id="clienteForm" name="formulario">
    <div class="form-group id-oculto">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="nombre">Nombre:</label>
        <div class="col-sm-6">
            <input type="text" id="nombre" class="form-control"  name="nombre" size="15" placeholder="Introduce el nombre del cliente" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="apellidos">Apellidos:</label>
        <div class="col-sm-6">
            <input type="text" id="apellidos" class="form-control"  name="apellidos" size="15" placeholder="Introduce los apellidos" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label"  for="telefono">Telefono:</label>
        <div class="col-sm-6">
            <input  type="tel" pattern="^[9|8|7|6]\d{8}$" class="form-control"  id="telefono" name="telefono" size="15" placeholder="Introduce el telefono del cliente" />
        </div>
    </div>
    
    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_tipocliente_id">Tipo de cliente:</label> 
        <div class="col-sm-2">              
            <input readonly="true"  class="form-control"  id="obj_tipocliente_id" class="input-mini" name="id_tipocliente" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_tipocliente_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_cliente_desc" id="obj_tipocliente_desc"></label>                     
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

        //http://jqueryvalidation.org/documentation/
        $('#clienteForm')
                .bootstrapValidator({
                    container: '#messages',
                    feedbackIcons: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                        nombre: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un nombre'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El título debe tener como máximo 255 caracteres'
                                }
                            }
                        },
                        apellidos: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir apellidos'
                                }
                            }
                        },
                        telefono: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un telefono'
                                }
                            }
                        }

                    }
                });

    });



</script>
