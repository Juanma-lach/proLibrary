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

<form class="form-horizontal" role="form" action="#" id="libroForm" name="formulario">
    <div class="form-group  id-oculto">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="titulo">Título:</label>
        <div class="col-sm-6">
            <input type="text" id="titulo" class="form-control"  name="titulo" size="15" placeholder="Introduce el título del libro" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="isbn">ISBN:</label>
        <div class="col-sm-6">
            <input type="text" id="isbn" class="form-control"  name="isbn" size="15" placeholder="Introduce el código ISBN" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label"  for="editorial">Editorial:</label>
        <div class="col-sm-10">
            <input type="text"  class="form-control"  id="editorial" name="editorial" size="15" placeholder="Introduce la editorial del libro" />
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

        //http://jqueryvalidation.org/documentation/
        $('#libroForm')
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
                                    message: 'Debe introducir un título'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El título debe tener como máximo 255 caracteres'
                                }
                            }
                        },
                        isbn: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un ISBN'
                                }
                            }
                        },
                        editorial: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una editorial'
                                }
                            }
                        }

                    }
                });

    });



</script>
