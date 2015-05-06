/* 
 * Copyright (C) 2014 rafa
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

var stockControl = function (strClase) {
    this.clase = strClase;
};
stockControl.prototype = new control('stock');
stockControl.prototype.getClassNameStock = function () {
    return this.getClassName() + "Control";
};
var oStockControl = new stockControl('stock');

stockControl.prototype.verPrecios = function (place, oModel, oView) {
    var thisObject = this;
    $(place).empty();
    var oStockModel = oModel;
    var oStockView = oView;
    data = oStockModel.setGenericOperation("getpage&rpp=5000","");
    listadoLibrosConPrecio = oStockView.getLibrosConTodo(data);
    $("#indexContenido").html(listadoLibrosConPrecio);
};

control.prototype.view = function (place, id, oModel, oView) {
    $(place).empty();
    var oDocumentoModel = oModel;
    oDocumentoModel.loadAggregateViewOne(id);
    $(place).append(oView.getPanel("Detalle de " + this.clase, oView.getObjectTable(oDocumentoModel.getCachedPrettyFieldNames(), oDocumentoModel.getCachedOne(), oDocumentoModel.getCachedFieldNames())));
    $(place).append('<a class="btn btn-primary" href="jsp#/' + this.clase + '/edit/' + id + '">Editar</a>');
    $(place).append('<a class="btn btn-primary" href="jsp#/' + this.clase + '/remove/' + id + '">Borrar</a>');
    $(place).append('<a class="btn btn-primary" href="jsp#/' + this.clase + '/list/' + id + '">Listar</a>');
    $(place).append('<a class="btn btn-primary" href="jsp#/' + this.clase + '/new">Nuevo</a>');
};