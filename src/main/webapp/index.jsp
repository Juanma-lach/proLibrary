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


<%@page import="net.daw.helper.EstadoHelper"%>
<%@page import="net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl"%>
<%@page import="net.daw.helper.AppInformationHelper"%>
<%UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");%>

<!DOCTYPE html>
<html lang="es">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>ProLibrary</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="shortcut icon" href="images/library-logo.png">
        <!-- <link rel="stylesheet" href="css/jquery-ui.css"> -->
        <link rel="stylesheet" href="css/bootstrapValidator.min.css">
        <link rel="stylesheet" href="css/bootstrap-datetimepicker.min.css"  />
        <link rel="stylesheet" href="css/skin/main.css">
        <link rel="stylesheet" href="css/skin/proyectos.css">
        <link rel="stylesheet" id="open-sans-css" href="//fonts.googleapis.com/css?family=Open+Sans%3A300italic%2C400italic%2C600italic%2C300%2C400%2C600&amp;subset=latin%2Clatin-ext&amp;ver=4.1.1" type="text/css" media="all">



        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
        <!--[if lt IE 7]>
        <p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
        <![endif]-->

        <!-- Fixed navbar -->
        <%if (user != null) {%>
        <div class="row">
            <nav class="navbar navbar-inverse navbar-fixed-top col-md-12">
                <div class="sinmargin">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header enlace">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="botones-izq" href="jsp?ob=usuario&op=inicio"><b class="glyphicon glyphicon-home"> </b>Proyectos DAW</a>
                    </div>

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="porcien" id="bs-example-navbar-collapse-1">
                        <ul class="botones-izq">
                            <li><a href="jsp?ob=usuario&op=inicio">Inicio <span class="sr-only">(current)</span></a></li>
                        </ul>

                        <%if (user != null) {%>
                        <ul class="botones-izq">
                            <jsp:include page="jsp/menuSuperior.jsp" />
                        </ul>
                        <%}%>
                        <ul class="botones-izq botones-der">
                            <jsp:include page="jsp/usuario/infologin.jsp" />
                        </ul>
                    </div><!-- /.navbar-collapse -->
                </div><!-- /.container-fluid -->
            </nav>
        </div>
        <%}%>

        <% if (user != null) {%>


        <div class="row"> 
            <div class="col-md-1" id="menuLateral">
                <jsp:include page="jsp/menuLateral.jsp" />
            </div>
            <div class="col-md-10 margen-contenido">
                <div id="indexContenido"></div>
                <div id="indexContenidoJsp">
                    <jsp:include page='<%=(String) request.getAttribute("contenido")%>' />                
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12" id="contenidoParseado"></div>   
        </div>


        <% } else {%>


        <div class="row">
            <div class="col-md-12 bg-login">
                <div id="indexContenidoJsp">
                    <jsp:include page='<%=(String) request.getAttribute("contenido")%>' />                
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12" id="contenidoParseado"></div>   
        </div>



        <% }%>

        <!-- carga de javascript   -->

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
        <script type="text/javascript"  src="./js/vendor/bootstrap.min.js"></script>
        <script type="text/javascript"  src="./js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>

        <script type="text/javascript"  src="./js/vendor/moment.js"></script>
        <script type="text/javascript"  src="./js/vendor/moment.locale.es.js"></script>
        <script type="text/javascript"  src="./js/vendor/bootstrap-datetimepicker.min.js"></script>

        <script type="text/javascript"  src="./js/vendor/path.min.js"></script> 
        <script type="text/javascript"  src="./js/vendor/bootstrapValidator.min.js"></script>
        <script type="text/javascript"  src="./js/vendor/language/es_ES.js"></script>
        <script type="text/javascript"  src="./js/vendor/creole-parser.js"></script>



        <script src="js/generic/view.js" charset="UTF-8"></script>    
        <script src="js/generic/param.js" charset="UTF-8"></script>
        <script src="js/generic/ajax.js" charset="UTF-8"></script>
        <script src="js/generic/util.js" charset="UTF-8"></script>
        <script src="js/generic/model.js" charset="UTF-8"></script>        
        <script src="js/generic/control.js" charset="UTF-8"></script> 
        <script src="js/generic/initialization.js" charset="UTF-8"></script>

        <script type="text/javascript">
            var path = '<%=request.getContextPath()%>';
        </script>

        <script src="js/specific/usuario/control.js" charset="UTF-8"></script>
        <script src="js/specific/usuario/model.js" charset="UTF-8"></script>
        <script src="js/specific/usuario/view.js" charset="UTF-8"></script>
        <script src="js/specific/usuario/routes.js" charset="UTF-8"></script>

        <script src="js/specific/libro/control.js" charset="UTF-8"></script>
        <script src="js/specific/libro/model.js" charset="UTF-8"></script>
        <script src="js/specific/libro/view.js" charset="UTF-8"></script>
        <script src="js/specific/libro/routes.js" charset="UTF-8"></script>

        <script src="js/specific/cliente/control.js" charset="UTF-8"></script>
        <script src="js/specific/cliente/model.js" charset="UTF-8"></script>
        <script src="js/specific/cliente/view.js" charset="UTF-8"></script>
        <script src="js/specific/cliente/routes.js" charset="UTF-8"></script>

        <script src="js/specific/compra/control.js" charset="UTF-8"></script>
        <script src="js/specific/compra/model.js" charset="UTF-8"></script>
        <script src="js/specific/compra/view.js" charset="UTF-8"></script>
        <script src="js/specific/compra/routes.js" charset="UTF-8"></script>

        <script src="js/specific/stock/control.js" charset="UTF-8"></script>
        <script src="js/specific/stock/model.js" charset="UTF-8"></script>
        <script src="js/specific/stock/view.js" charset="UTF-8"></script>
        <script src="js/specific/stock/routes.js" charset="UTF-8"></script>        

        <script src="js/specific/tipousuario/control.js" charset="UTF-8"></script>
        <script src="js/specific/tipousuario/model.js" charset="UTF-8"></script>
        <script src="js/specific/tipousuario/view.js" charset="UTF-8"></script>
        <script src="js/specific/tipousuario/routes.js" charset="UTF-8"></script>
        
        <script src="js/specific/tipocliente/control.js" charset="UTF-8"></script>
        <script src="js/specific/tipocliente/model.js" charset="UTF-8"></script>
        <script src="js/specific/tipocliente/view.js" charset="UTF-8"></script>
        <script src="js/specific/tipocliente/routes.js" charset="UTF-8"></script>

        <script type="text/javascript">

            //path = '<%=request.getContextPath()%>';

            $(document).ready(function () {

                //$('#indexContenidoJsp').addClass('animated slideInDown');
                //$('#menuSuperior').addClass('animated slideInLeft');
                //$('#menuLateral').addClass('animated slideInRight');

                inicializacion();

                fUsuarioRoutes();
                fLibroRoutes();
                fClienteRoutes();
                fCompraRoutes();
                fStockRoutes();
                fTipousuarioRoutes();
                fTipoClienteRoutes();

                Path.listen();

            });

        </script>
    </body>
</html>

