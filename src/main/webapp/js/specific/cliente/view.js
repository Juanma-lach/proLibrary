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


var clienteView = function (strClase) {
    this.clase = strClase;
};
clienteView.prototype = new view('cliente');
clienteView.prototype.getClassNameCliente = function () {
    return this.getClassName() + "Vista";
};
var oClienteView = new clienteView('cliente');

clienteView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-th-list"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-file"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-trash"></i></a>';
    botonera += '</div></div>';
    return botonera;

};
clienteView.prototype.loadFormValues = function (valores, campos) {
    this.doFillForm(valores, campos);
};

clienteView.prototype.getFormValues = function () {
    var valores = [];
    var disabled = $('#clienteForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#clienteForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

clienteView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#clienteForm #obj_estado_button').unbind('click');
    $("#clienteForm #obj_estado_button").click(function () {
        var oControl = oEstadoControl;  //para probar dejar cliente
        //vista('cliente').cargaModalBuscarClaveAjena('#modal01', "cliente");

        $("#clienteForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de cliente'), "", thisObject.getFormFooter(), true);

        $('#clienteForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oEstadoModel, oEstadoView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_estado_id').val(id).change();
            $('#obj_estado_desc').text(decodeURIComponent(oEstadoModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oEstadoModel, oEstadoView);
        return false;
    });
    $('#clienteForm #obj_tipocliente_button').unbind('click');
    $("#clienteForm #obj_tipocliente_button").click(function () {
        var oControl = oTipoClienteControl;

        $("#clienteForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de tipo de cliente'), "", thisObject.getFormFooter(), true);

        $('#clienteForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oTipoClienteModel, oTipoClienteView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_tipocliente_id').val(id).change();
            $('#obj_tipocliente_desc').text(decodeURIComponent(oTipoClienteModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oTipoClienteModel, oTipoClienteView);
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

        $('#clienteForm').append(thisObject.getEmptyModal());

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

clienteView.prototype.okValidation = function (f) {
    $('#clienteForm').on('success.form.bv', f);
};