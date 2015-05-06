/* 
 * Copyright (C) 2014 raznara
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */


var stockView = function (strClase) {
    this.clase = strClase;
};
stockView.prototype = new view('stock');
stockView.prototype.getClassNameStock = function () {
    return this.getClassName() + "Vista";
};
var oStockView = new stockView('stock');

stockView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#stockForm #obj_libro_button').unbind('click');
    $("#stockForm #obj_libro_button").click(function () {
        var oControl = oLibroControl;  //para probar dejar usuario
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "usuario");

        $("#stockForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de libro'), "", thisObject.getFormFooter(), true);

        $('#stockForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oLibroModel, oLibroView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_libro_id').val(id).change();
            $('#obj_libro_desc').text(decodeURIComponent(oLibroModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        }, oLibroModel, oLibroView);
        return false;
    });
    $('#contenido_button').unbind('click');
    $('#contenido_button').click(function () {
        //cabecera = '<button id="full-width" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' + '<h3 id="myModalLabel">Edición de contenidos</h3>';
        cabecera = thisObject.getFormHeader('Edición de contenidos');
        //pie = '<button type="button" class="btn btn-default" data-dismiss="modal" aria-hidden="true">Cerrar</button>';                        
        pie = '<a class="btn btn-primary" href="http://creoleparser.googlecode.com/svn/trunk/creoleparser/test_pages/CheatSheetPlus.html">Sintaxis</a>';
        pie += thisObject.getFormFooter();
        contenido = '<div class="row"><div class="col-md-6">';
        contenido += '<textarea type="text" id="contenidomodal" name="contenido" rows="20" cols="70" placeholder="contenido"></textarea>';
        contenido += '</div><div class="col-md-6"><div id="textoparseado"></div></div>';
        contenido += '</div>';

        $('#usuarioForm').append(thisObject.getEmptyModal());

        util().loadForm('#modal01', cabecera, contenido, pie, true);
        var texto = $('#contenido').val();
        $('#contenidomodal').val(texto);
        util().creoleParse(texto, $('#textoparseado'));
        $('#contenido').val($('#contenidomodal').val());
        $('#contenidomodal').keyup(function () {
            util().creoleParse($('#contenidomodal').val(), $('#textoparseado'));
            $('#contenido').val($('#contenidomodal').val());
        });
        return false;
    });
};

stockView.prototype.getLibrosConTodo = function (jason) {

    function replaceAll(text, busca, reemplaza) {
        while (text.toString().indexOf(busca) != - 1)
            text = text.toString().replace(busca, reemplaza);
        return text;
    }

    var long = jason.list.length;
    listado = "<div class='m12 margin-top'>";
    imagennull = "css/images/prueba.jpg";
    for (i = 0; i < long; i++) {
        cantidad = jason.list[i].cantidad;
        precio = jason.list[i].precio + "€";
        imagen = jason.list[i].obj_libro.urlimagen;
        titulo = jason.list[i].obj_libro.titulo;
        isbn = jason.list[i].obj_libro.isbn;
        editorial = jason.list[i].obj_libro.editorial;
        longTitulo = titulo.substring(0, 25);
        longT = longTitulo.length;
        listado += "<div class='col s12 m3'>";
        listado += "<div class='card'>";
        listado += "<div class='card-image waves-effect waves-block waves-light'>";
        listado += "<img class='activator' src='images/" + imagen + ".jpg' />";
        listado += "</div>";
        listado += "<div class='card-content'>";
        listado += "<span class='card-title activator'>" + titulo.substring(0, 25);
        if (longT >= 25) {
            listado += "...";
        }
        listado += "<i class='mdi-navigation-more-vert right'></i></span>";
        if (cantidad > 0) {
            listado += "<p>" + replaceAll(precio, ".", ",") + "</p></div>";
        }
        if (cantidad == 0) {
            listado += "<p>No está disponible</p></div>";
        }
        listado += "<div class='card-reveal' style='transform: translateY(0px);'>"
        listado += "<span class='card-title'>" + titulo;
        listado += "<i class='mdi-navigation-close right'></i></span>";
        listado += "<p>EDITORIAL: " + editorial + "</p><p> ISBN: " + isbn + "</p></div>";
        listado += "</div>";
        listado += "</div>";
    }
    listado += "</div>";

    listado += "<script type='text/javascript' src='https://code.jquery.com/jquery-2.1.1.min.js'></script>";
    listado += "<script type='text/javascript' src='css/js/materialize.min.js'></script>";
    return listado;
};

stockView.prototype.okValidation = function (f) {
    $('#stockForm').on('success.form.bv', f);
};