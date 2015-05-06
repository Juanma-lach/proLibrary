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


var libroView = function (strClase) {
    this.clase = strClase;
};
libroView.prototype = new view('libro');
libroView.prototype.getClassNameLibro = function () {
    return this.getClassName() + "Vista";
};
var oLibroView = new libroView('libro');


libroView.prototype.okValidation = function (f) {
    $('#libroForm').on('success.form.bv', f);
};

libroView.prototype.getLibrosList = function (jason) {

    function replaceAll(text, busca, reemplaza) {
        while (text.toString().indexOf(busca) != - 1)
            text = text.toString().replace(busca, reemplaza);
        return text;
    }

    var long = jason.list.length;
    listado = "<div class='col m10 offset-m1 margin-top margin-top'>";
    imagennull = "css/images/prueba.jpg";
    for (i = 0; i < long; i++) {
        imagen = jason.list[i].urlimagen;
        titulo = jason.list[i].titulo;
        isbn = jason.list[i].isbn;
        editorial = jason.list[i].editorial;
        longTitulo = titulo.substring(0, 25);
        longT = longTitulo.length;
        listado += "<div class='hovered col s12 m3'>";
        listado += "<div class='card'>";
        listado += "<div class='card-image waves-effect waves-block waves-light'>";
        listado += "<img class='img-list activator' src='images/" + imagen + ".jpg' />";
        listado += "</div>";
        listado += "<div class='card-content'>";
        listado += "<span class='card-title activator'>" + titulo.substring(0, 25);
        if (longT >= 25) {
            listado += "...";
        }
        listado += "<i class='mdi-navigation-more-vert right'></i></span></div>";
        listado += "<div class='card-reveal' style='transform: translateY(0px);'>"
        listado += "<span class='card-title'>" + titulo;
        listado += "<i class='mdi-navigation-close right'></i></span>";
        listado += "<p>EDITORIAL: " + editorial + "</p><p> ISBN: " + isbn + "</p></div>";
        listado += "</div>";
        listado += "</div>";
    }
    listado += "</div>";
    listado += "<div id='pagination'></div>";

    listado += "<script type='text/javascript' src='https://code.jquery.com/jquery-2.1.1.min.js'></script>";
    listado += "<script type='text/javascript' src='css/js/materialize.min.js'></script>";
    return listado;
};