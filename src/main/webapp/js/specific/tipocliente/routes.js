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


function fTipoClienteRoutes() {

//    Path.map("#/tipocliente").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('tipocliente').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //tipoclienteControl.modalListEventsLoading(tipoclienteObject, tipoclienteView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/tipocliente").to(function () {
        $('#indexContenidoJsp').spinner();
        oTipoClienteControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oTipoClienteModel, oTipoClienteView);
        //tipoclienteControl.modalListEventsLoading(tipoclienteObject, tipoclienteView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oTipoClienteControl.getClassNameTipoCliente());
        return false;
    });

    Path.map("#/tipocliente/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipoClienteControl.list($('#indexContenido'), paramsObject, null, oTipoClienteModel, oTipoClienteView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/tipocliente/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipoClienteControl.view($('#indexContenido'), paramsObject['id'], oTipoClienteModel, oTipoClienteView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/tipocliente/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipoClienteControl.edit($('#indexContenido'), paramsObject['id'], oTipoClienteModel, oTipoClienteView);
        $('#indexContenidoJsp').empty();
    });
    Path.map("#/tipocliente/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipoClienteControl.new($('#indexContenido'), null, oTipoClienteModel, oTipoClienteView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/tipocliente/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipoClienteControl.new($('#indexContenido'), paramsObject, oTipoClienteModel, oTipoClienteView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/tipocliente/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipoClienteControl.remove($('#indexContenido'), paramsObject['id'], oTipoClienteModel, oTipoClienteView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}