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


function fCompraRoutes() {

//    Path.map("#/compra").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('compra').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //compraControl.modalListEventsLoading(compraObject, compraView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/compra").to(function () {
        $('#indexContenidoJsp').spinner();
        oCompraControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oCompraModel, oCompraView);
        //compraControl.modalListEventsLoading(compraObject, compraView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oCompraControl.getClassNameCompra());
        return false;
    });

    Path.map("#/compra/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oCompraControl.list($('#indexContenido'), paramsObject, null, oCompraModel, oCompraView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/compra/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oCompraControl.view($('#indexContenido'), paramsObject['id'], oCompraModel, oCompraView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/compra/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oCompraControl.edit($('#indexContenido'), paramsObject['id'], oCompraModel, oCompraView);
        $('#indexContenidoJsp').empty();
    });
    Path.map("#/compra/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oCompraControl.new($('#indexContenido'), null, oCompraModel, oCompraView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/compra/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oCompraControl.new($('#indexContenido'), paramsObject, oCompraModel, oCompraView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/compra/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oCompraControl.remove($('#indexContenido'), paramsObject['id'], oCompraModel, oCompraView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}