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

<%  UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
    String level = user.getObj_tipousuario().getDescripcion();%>

<div class="sidebar panel panel-primary">
    <div class="list-group">
        <ul class="navegador">
            <li><p class="list-group-item" href="ob=usuario&op=inicio" title="Escritorio"><b class="glyphicon glyphicon-tasks"> </b>Escritorio</p></li>
            <li><p href="#" class="desplegable list-group-item" title="Gestión de usuarios"><b class="glyphicon glyphicon-user"> </b>Usuarios</p>
                <ul class="subnavegador">
                    <li><a class="list-group-item" href="jsp#/usuario" title="Lista de Usuarios">Lista de Usuarios</a></li>			
                    <li><a class="list-group-item" href="jsp#/usuario/new" title="Crear un nuevo Usuario">Crear un nuevo Usuario</a></li>
                </ul>
            </li>
            <li><p href="#" class="desplegable list-group-item" title="Gestión de libros"><b class="glyphicon glyphicon-book"> </b>Libros</p>
                <ul class="subnavegador">
                    <li><a class="list-group-item" href="jsp#/libro" title="Lista de Libros">Lista de Libros</a></li>			
                    <li><a class="list-group-item" href="jsp#/libro/new" title="Crear un nuevo Libro">Crear un nuevo Libro</a></li>
                </ul>
            </li>
            <li><p href="#" class="desplegable list-group-item" title="Gestión de libros"><b class="glyphicon glyphicon-flash"> </b>Ofertas</p>
                <ul class="subnavegador">
                    <li><a class="list-group-item" href="jsp#/oferta" title="Lista de Ofertas">Lista de Ofertas</a></li>			
                    <li><a class="list-group-item" href="jsp#/oferta/new" title="Crear un nuevo Oferta">Crear un nuevo Oferta</a></li>
                </ul>
            </li>
            <li><p href="#" class="desplegable list-group-item" title="Gestión de Clientes"><b class="glyphicon glyphicon-tag"> </b>Clientes</p>
                <ul class="subnavegador">
                    <li><a class="list-group-item" href="jsp#/cliente" title="Todos los Clientes">Todos los Clientes</a></li>			
                    <li><a class="list-group-item" href="jsp#/cliente/new" title="Añadir un nuevo Cliente">Añadir un nuevo Cliente</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>



<script type='text/javascript'>
    $("ul.subnavegador").hide();
    $(document).ready(function () { // Script del Navegador
        $("p.desplegable").toggle(
                function () {
                    $(this).parent().find("ul.subnavegador").slideDown('fast');
                },
                function () {
                    $(this).parent().find("ul.subnavegador").slideUp('fast');
                }
        );
    });
</script>