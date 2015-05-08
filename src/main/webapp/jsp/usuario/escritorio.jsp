<%-- 
    Document   : escritorio
    Created on : 06-may-2015, 12:55:02
    Author     : Juanma
--%>
<%@page import="net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl"%>
<%  UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
    String level = user.getObj_tipousuario().getDescripcion();

    if (level != null) {%>

    
    <div class="row">
        <div class="bloque"></div>
    </div>
<div id="bloque1" class="bloque">
    <p>Últimos Libros</p>
    <div id="ultimosLibros"></div>
</div>
<div id="bloque2" class="bloque">
    <p>Libros mejor valorados</p>
    <div id="librosPuntuados"></div>
</div>
<div id="bloque3" class="bloque">
    <p>Últimos Clientes</p>
    <div id="ultimosClientes"></div>
</div>

    <%}%>

<script type='text/javascript'>
$(document).ready(function () {
        $.ajax({
            url: "http://localhost:8081/proyectosDAW/json?ob=libro&op=getpage&order=id&ordervalue=desc",
            type: "GET",
            dataType: "json",
            success: function (data) {
                ultimos = "<table>";
                for (i = 1; i <= 4; i++) {
                    titulo = data.list[i].titulo;
                    ultimos += "<tr><td>"
                    ultimos += titulo;
                    ultimos += "</td></tr>"
                }
                $("#ultimosLibros").html(ultimos);
            }});
        $.ajax({
            url: "http://localhost:8081/proyectosDAW/json?ob=libro&op=getpage&order=puntuacion&ordervalue=desc",
            type: "GET",
            dataType: "json",
            success: function (data) {
                ultimosP = "<table>";
                for (i = 1; i <= 4; i++) {
                    tituloP = data.list[i].titulo;
                    puntuacion = data.list[i].puntuacion;
                    ultimosP += "<tr>"
                    ultimosP += "<td>";
                    ultimosP += tituloP;
                    ultimosP += "</td>";
                    ultimosP += "<td>";
                    ultimosP += puntuacion;
                    ultimosP += "</td>";
                    ultimosP += "</tr>"
                }
                $("#librosPuntuados").html(ultimosP);
            }});
        
        $.ajax({
            url: "http://localhost:8081/proyectosDAW/json?ob=cliente&op=getpage&order=id&ordervalue=desc",
            type: "GET",
            dataType: "json",
            success: function (data) {
                ultimosC = "<table>";
                for (i = 1; i <= 4; i++) {
                    nombre = data.list[i].nombre;
                    apellidos = data.list[i].apellidos;
                    tipo = data.list[i].obj_tipocliente.descripcion;
                    isbn = data.list[i].isbn;
                    ultimosC += "<tr>"
                    ultimosC += "<td>";
                    ultimosC += nombre + " " + apellidos;
                    ultimosC += "</td>";
                    ultimosC += "<td>";
                    ultimosC += tipo;
                    ultimosC += "</td>";
                    ultimosC += "</tr>"
                }
                $("#ultimosClientes").html(ultimosC);
            }});
});
</script>
