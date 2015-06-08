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
<% UsuarioBeanGenSpImpl oUsuario = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean"); %>
<% if (oUsuario==null){%>

<div class="margen-superiorForm col-md-6 col-md-offset-3 login-bloque">
    <meta HTTP-EQUIV="REFRESH" CONTENT="3;url=jsp">
    <h1>Vd. no ha entrado en el sistema</h1>
    <h4>Ha habido un problema con su autenticación. Revise su login o su password.</h4>
    <a href="jsp?ob=usuario&op=logout">Volver atrás.</a>
    <p>Redireccionando a la página de logueo...</p>
    <div class="spinner col-md-3 col-md-offset-5"></div>
</div>

<% } else { %>
<div class="margen-superiorForm col-md-6 col-md-offset-3">
    <meta HTTP-EQUIV="REFRESH" CONTENT="3;url=jsp">
    <h1 class="margen-superior">Vd. ha entrado en el sistema</h1>
    <h4>Bienvenido, <%=oUsuario.getLogin() %>. Ahora puede operar con los menús de la aplicación.</h4>
    <p>Redireccionando al Escritorio, espere un momento...</p>
    <div class="spinner col-md-4 col-md-offset-5"></div>
</div>
    <% } %>
