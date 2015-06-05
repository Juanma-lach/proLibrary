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

<%@page import="net.daw.helper.AppInformationHelper"%>
<%@page import="net.daw.helper.EstadoHelper"%>
<!--<h1>Bienvenidos a <%=AppInformationHelper.getAppName()%> <%=EstadoHelper.getAnyo()%></h1>
    <h3>Versión (v.<%=EstadoHelper.getVersion()%>) de <%=EstadoHelper.getFecha()%></h3>
    <h5>Desarrollo de aplicaciones web. CPIFP Ausiàs March. Curso <%=EstadoHelper.getCurso()%></h5>   
<%
    if (EstadoHelper.getTipo_estado() == EstadoHelper.getTipo_estado().Debug) {
        out.print("<h5>Modo debug</h5>");
    }
%>
</div>-->


<div class="intro">

</div>

<div class="row informaInicio">
    <div class="col-md-6">
        <div class="row">
            <div class="col-md-12">
                <div class="back-white">
                    <h3 class="centered">¿Qué es <%=AppInformationHelper.getAppName()%>?</h3>
                    <p class="inicio-padding">ProLibrary es una aplicación web desarrollada en JAVA. Usa el modelo MVC (modelo vista controlador).</p>
                    <p class="inicio-padding-ultimo">Mediante esta aplicación, el usuario podrá almacenar libros, clientes y operar con opciones de compras. Este proyecto es ampliable y 
                        de momento solo tiene lo esencial que necesita el cliente. En un futuro será mejorado.</p>
                </div>
            </div>
            <div class="col-md-12">
                <div class="back-white">
                    <h3 class="centered">¿Qué licencia tiene?</h3>
                    <p class="inicio-padding-ultimo">La he liberado con licencia <%=EstadoHelper.getLicenciaLink()%></p>
                </div>
            </div>  
        </div>
    </div>
    <div class="col-md-6">
        <div class="row">
            <div class="col-md-12">
                <div class="back-white">
                    <h3 class="centered">¿Cuáles son sus características?</h3>
                    <ul class="inicio-padding-lista">
                        <li>Es un desarrollo didáctico</li>
                        <li>Estructura de servidor MVC por niveles sin frameworks</li> 
                        <li>Servidor escrito en Java (servlets y jsp)</li>  
                        <li>Dos controladores, uno para servir jsp y otro para servir json</li>  
                        <li>Cliente AJAX con Javascript y JQuery</li>              
                        <li>Cliente desarrollado sobre Bootstrap responsivo</li>
                        <li>Acceso a datos (base de datos MySQL) mediante clases de negocio y DAO</li>
                        <li>Mantenimientos paginados</li>
                        <li>Ajax Stock soporta Relaciones 1:M</li>
                        <li>Ajax Stock soporta Relaciones M:M</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    <div class="col-md-12">
        <a href="http://www.w3.org/WAI/WCAG2A-Conformance" title="Explanation of WCAG 2.0 Level A Conformance">
            <img height="32" width="88" src="http://www.w3.org/WAI/wcag2A" alt="Level A conformance, W3C WAI Web Content Accessibility Guidelines 2.0">
        </a>
    </div>
</div>
