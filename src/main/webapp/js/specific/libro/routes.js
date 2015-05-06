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


function fLibroRoutes() {

//    Path.map("#/libro").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('libro').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //libroControl.modalListEventsLoading(libroObject, libroView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/libro").to(function () {
        $('#indexContenidoJsp').spinner();
        oLibroControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oLibroModel, oLibroView);
        //libroControl.modalListEventsLoading(libroObject, libroView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oLibroControl.getClassNameLibro());
        return false;
    });

    Path.map("#/libro/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oLibroControl.list($('#indexContenido'), paramsObject, null, oLibroModel, oLibroView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/libro/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oLibroControl.view($('#indexContenido'), paramsObject['id'], oLibroModel, oLibroView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/libro/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oLibroControl.edit($('#indexContenido'), paramsObject['id'], oLibroModel, oLibroView);
        $('#indexContenidoJsp').empty();
    });
    Path.map("#/libro/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oLibroControl.new($('#indexContenido'), null, oLibroModel, oLibroView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/libro/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oLibroControl.new($('#indexContenido'), paramsObject, oLibroModel, oLibroView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/libro/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oLibroControl.remove($('#indexContenido'), paramsObject['id'], oLibroModel, oLibroView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/libro/libros").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oLibroControl.listar($('#indexContenido'), oLibroModel, oLibroView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/libro/buscar").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oLibroControl.buscar($('#indexContenido'), paramsObject, oLibroModel, oLibroView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}