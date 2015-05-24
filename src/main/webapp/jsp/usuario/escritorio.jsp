<%-- 
    Document   : escritorio
    Created on : 06-may-2015, 12:55:02
    Author     : Juanma
--%>
<%@page import="net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl"%>
<%  UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
    String level = user.getObj_tipousuario().getDescripcion();

    if (level != null) {%>

<h1 class="h1escritorio col-sm-9 col-sm-offset-2 col-md-offset-1">Escritorio</h1>

<div id="bloque1" class="bloque col-md-3 col-sm-3 col-sm-offset-2 col-md-offset-1">
    <p class="centered">Últimos Libros</p>
    <div id="ultimosLibros" class="paddiv"></div>
</div>
<div id="bloque2" class="bloque col-md-3 col-sm-3 col-sm-offset-2 col-md-offset-1">
    <p class="centered">Libros mejor valorados</p>
    <div id="librosPuntuados" class="paddiv"></div>
</div>
<div id="bloque3" class="bloque col-md-3 col-sm-3 col-sm-offset-2 col-md-offset-1">
    <p class="centered">Últimos Clientes</p>
    <div id="ultimosClientes" class="paddiv"></div>
</div>

<div class="bloque bloque-superior col-md-10 col-sm-9 col-sm-offset-2 col-md-offset-1">
    <div id="countC" class="col-md-3 col-sm-3 col-sm-offset-2"></div>
    <div id="countL" class="col-md-3 col-sm-3 col-sm-offset-2"></div>
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
