<%-- 
    Document   : escritorio
    Created on : 06-may-2015, 12:55:02
    Author     : Juanma
--%>
<%@page import="net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl"%>
<%  UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
    String level = user.getObj_tipousuario().getDescripcion();

    if (level != null) {%>

<h1 class="h1escritorio col-sm-10" style=" margin-left: 50px;">Escritorio</h1>

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

<div class="bloque col-md-7 col-sm-9 col-sm-offset-2 col-md-offset-1">
    <p class="centered">Últimas Transacciones</p>
    <div id="transacciones" class="col-md-12 col-sm-3"></div>
</div>

<div class="bloque col-md-3 col-sm-9">
    <p class="centered">Acciones de Compra</p>
    <a href="jsp#/compra/new" role="button" class="btn btn-primary boton-centrado">Nueva Compra</a>
    <a href="jsp#/compra" role="button" class="btn btn-primary boton-centrado">Listado de Compras</a>
</div>

<div class="bloque bloque-superior col-md-10" style=" margin-left: 50px;">
    <div id="countC" class="col-md-3 col-sm-3 col-sm-offset-2"></div>
    <div id="countL" class="col-md-3 col-sm-3 col-sm-offset-2"></div>
</div>


<script src="js/specific/usuario/escritorio.js" charset="UTF-8"></script>

<%}%>

<script type='text/javascript'>
    $(document).ready(function () {

        fEscritorio();

    });
</script>
