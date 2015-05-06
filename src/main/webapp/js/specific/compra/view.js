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


var compraView = function (strClase) {
    this.clase = strClase;
};
compraView.prototype = new view('compra');
compraView.prototype.getClassNameCompra = function () {
    return this.getClassName() + "Vista";
};
var oCompraView = new compraView('compra');


compraView.prototype.okValidation = function (f) {
    $('#compraForm').on('success.form.bv', f);
};

compraView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#compraForm #obj_cliente_button').unbind('click');
    $("#compraForm #obj_cliente_button").click(function () {
        var oControl = oClienteControl;  //para probar dejar compra
        //vista('compra').cargaModalBuscarClaveAjena('#modal01', "compra");

        $("#compraForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de cliente'), "", thisObject.getFormFooter(), true);

        $('#compraForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oClienteModel, oClienteView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_cliente_id').val(id).change();
            $('#obj_cliente_desc').text(decodeURIComponent(oClienteModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oClienteModel, oClienteView);
        return false;
    });
    $('#compraForm #obj_libro_button').unbind('click');
    $("#compraForm #obj_libro_button").click(function () {
        var oControl = oLibroControl;

        $("#compraForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de libro'), "", thisObject.getFormFooter(), true);

        $('#compraForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oLibroModel, oLibroView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_libro_id').val(id).change();
            $('#obj_libro_desc').text(decodeURIComponent(oLibroModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oLibroModel, oLibroView);
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

        $('#compraForm').append(thisObject.getEmptyModal());

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