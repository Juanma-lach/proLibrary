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


var tipoTipoClienteView = function (strClase) {
    this.clase = strClase;
};
tipoTipoClienteView.prototype = new view('tipocliente');
tipoTipoClienteView.prototype.getClassNameTipoCliente = function () {
    return this.getClassName() + "Vista";
};
var oTipoClienteView = new tipoTipoClienteView('tipocliente');


tipoTipoClienteView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-th-list"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-file"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-trash"></i></a>';
    botonera += '</div></div>';
    return botonera;

};
tipoTipoClienteView.prototype.loadFormValues = function (valores, campos) {
//                    $('#tipoTipoCliente_form #titulo').val(valores['titulo']);
//                    $('#tipoTipoCliente_form #contenido').val(valores['contenido']);
//                    $('#tipoTipoCliente_form #alta').val(valores['alta']);
//                    $('#tipoTipoCliente_form #cambio').val(valores['cambio']);
//                    $('#tipoTipoCliente_form #hits').val(valores['hits']);
//                    $('#tipoTipoCliente_form #id_cliente').val(valores['id_cliente']);
//                    $('#tipoTipoCliente_form #etiquetas').val(valores['etiquetas']);
//                    $('#tipoTipoCliente_form #publicado').val(valores['publicado']);
//                    $('#tipoTipoCliente_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

tipoTipoClienteView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#tipoTipoCliente_form #titulo');
//                    valores['contenido'] = $('#tipoTipoCliente_form #contenido');
//                    valores['alta'] = $('#tipoTipoCliente_form #alta');
//                    valores['cambio'] = $('#tipoTipoCliente_form #cambio');
//                    valores['hits'] = $('#tipoTipoCliente_form #hits');
//                    valores['id_cliente'] = $('#tipoTipoCliente_form #id_cliente');
//                    valores['etiquetas'] = $('#tipoTipoCliente_form #etiquetas');
//                    valores['publicado'] = $('#tipoTipoCliente_form #publicado');
//                    valores['portada'] = $('#tipoTipoCliente_form #portada');

    var disabled = $('#tipoTipoClienteForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#tipoTipoClienteForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

tipoTipoClienteView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#tipoTipoClienteForm #obj_cliente_button').unbind('click');
    $("#tipoTipoClienteForm #obj_cliente_button").click(function () {
        var oControl = oClienteControl;  //para probar dejar tipoTipoCliente
        //vista('cliente').cargaModalBuscarClaveAjena('#modal01', "tipoTipoCliente");

        $("#tipoTipoClienteForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de cliente'), "", thisObject.getFormFooter(), true);

        $('#tipoTipoClienteForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oClienteModel, oClienteView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_cliente_id').val(id).change();
            $('#obj_cliente_desc').text(decodeURIComponent(oClienteModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oClienteModel, oClienteView);
        return false;
    });
    $('#tipoTipoClienteForm #obj_tipotipoTipoCliente_button').unbind('click');
    $("#tipoTipoClienteForm #obj_tipotipoTipoCliente_button").click(function () {
        var oControl = oTipoclienteControl;

        $("#tipoTipoClienteForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de tipo de tipoTipoCliente'), "", thisObject.getFormFooter(), true);

        $('#tipoTipoClienteForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oTipoclienteModel, oTipoclienteView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_tipotipoTipoCliente_id').val(id).change();
            $('#obj_tipotipoTipoCliente_desc').text(decodeURIComponent(oTipotipoTipoClienteModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oTipoclienteModel, oTipoclienteView);
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

        $('#tipoTipoClienteForm').append(thisObject.getEmptyModal());

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

tipoTipoClienteView.prototype.okValidation = function (f) {
    $('#tipoTipoClienteForm').on('success.form.bv', f);
};