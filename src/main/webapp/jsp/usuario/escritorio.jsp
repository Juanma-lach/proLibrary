<%-- 
    Document   : escritorio
    Created on : 06-may-2015, 12:55:02
    Author     : Juanma
--%>
<%@page import="net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl"%>
<%  UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
    String level = user.getObj_tipousuario().getDescripcion();

    if (level != null) {%>

<h1 class="h1escritorio">Escritorio</h1>
<div class="bloque bloque-superior col-md-10">
    <div id="countC" class="col-md-3"></div>
    <div id="countL" class="col-md-3"></div>
</div>
<div id="bloque1" class="bloque col-md-3">
    <p>Últimos Libros</p>
    <div id="ultimosLibros"></div>
</div>
<div id="bloque2" class="bloque col-md-3">
    <p>Libros mejor valorados</p>
    <div id="librosPuntuados"></div>
</div>
<div id="bloque3" class="bloque col-md-3">
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
                ultimosP = "<table class='tab-border'>";
                for (i = 1; i <= 4; i++) {
                    tituloP = data.list[i].titulo;
                    puntuacion = data.list[i].puntuacion;
                    ultimosP += "<tr>"
                    ultimosP += "<td>";
                    ultimosP += tituloP;
                    ultimosP += "</td>";
                    ultimosP += "<td class='td-padding'>";
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
                ultimosC = "<table class='tab-border'>";
                for (i = 1; i <= 4; i++) {
                    nombre = data.list[i].nombre;
                    apellidos = data.list[i].apellidos;
                    tipo = data.list[i].obj_tipocliente.descripcion;
                    isbn = data.list[i].isbn;
                    ultimosC += "<tr>"
                    ultimosC += "<td>";
                    ultimosC += nombre + " " + apellidos;
                    ultimosC += "</td>";
                    ultimosC += "<td class='td-padding'>";
                    ultimosC += tipo;
                    ultimosC += "</td>";
                    ultimosC += "</tr>"
                }
                $("#ultimosClientes").html(ultimosC);
            }});

        $.ajax({
            url: "http://localhost:8081/proyectosDAW/json?op=getregisters&ob=cliente",
            type: "GET",
            dataType: "json",
            success: function (data) {
                cantidadC = data.data;
                countC = "<table class='tab-border'>";
                countC += "<tr>"
                countC += "<td>";
                countC += "Total de Clientes: ";
                countC += "</td>";
                countC += "<td class='td-padding'>";
                countC += cantidadC;
                countC += "</td>";
                countC += "</tr>"
                $("#countC").html(countC);
            }});

        $.ajax({
            url: "http://localhost:8081/proyectosDAW/json?op=getregisters&ob=libro",
            type: "GET",
            dataType: "json",
            success: function (data) {
                cantidadL = data.data;
                countL = "<table class='tab-border'>";
                countL += "<tr>"
                countL += "<td>";
                countL += "Total de Libros: ";
                countL += "</td>";
                countL += "<td class='td-padding'>";
                countL += cantidadL;
                countL += "</td>";
                countL += "</tr>"
                $("#countL").html(countL);
            }});
    });
</script>
