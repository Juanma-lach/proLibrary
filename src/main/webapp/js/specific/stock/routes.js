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


function fStockRoutes() {

//    Path.map("#/stock").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('stock').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //stockControl.modalListEventsLoading(stockObject, stockView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/stock").to(function () {
        $('#indexContenidoJsp').spinner();
        oStockControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oStockModel, oStockView);
        //stockControl.modalListEventsLoading(stockObject, stockView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oStockControl.getClassNameStock());
        return false;
    });

    Path.map("#/stock/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oStockControl.list($('#indexContenido'), paramsObject, null, oStockModel, oStockView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/stock/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oStockControl.view($('#indexContenido'), paramsObject['id'], oStockModel, oStockView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/stock/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oStockControl.edit($('#indexContenido'), paramsObject['id'], oStockModel, oStockView);
        $('#indexContenidoJsp').empty();
    });
    Path.map("#/stock/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oStockControl.new($('#indexContenido'), null, oStockModel, oStockView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/stock/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oStockControl.new($('#indexContenido'), paramsObject, oStockModel, oStockView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/stock/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oStockControl.remove($('#indexContenido'), paramsObject['id'], oStockModel, oStockView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/stock/verprecios").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oStockControl.verPrecios($('#indexContenido'), oStockModel, oStockView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}