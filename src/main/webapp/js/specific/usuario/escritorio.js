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


function fEscritorio() {
    $.ajax({
        url: "http://localhost:8081/proLibrary/json?ob=libro&op=getpage&order=id&ordervalue=desc",
        type: "GET",
        dataType: "json",
        success: function (data) {
            ultimos = "<table>";
            for (i = 0; i < 4; i++) {
                titulo = data.list[i].titulo;
                id = data.list[i].id;
                ultimos += "<tr><td>"
                ultimos += "<center><a href='jsp#/libro/view/" + id + "'>" + titulo + "</a></center>";
                ultimos += "</td></tr>"
            }
            $("#ultimosLibros").html(ultimos);
        }});
    $.ajax({
        url: "http://localhost:8081/proLibrary/json?ob=libro&op=getpage&order=puntuacion&ordervalue=desc",
        type: "GET",
        dataType: "json",
        success: function (data) {
            ultimosP = "<table class='tab-border'>";
            for (i = 0; i < 4; i++) {
                tituloP = data.list[i].titulo;
                idP = data.list[i].id;
                puntuacion = data.list[i].puntuacion;
                ultimosP += "<tr>"
                ultimosP += "<td>";
                ultimosP += "<a href='jsp#/libro/view/" + idP + "'>" + tituloP + "</a>";
                ultimosP += "</td>";
                ultimosP += "<td class='td-padding'>";
                ultimosP += puntuacion;
                ultimosP += "</td>";
                ultimosP += "</tr>"
            }
            $("#librosPuntuados").html(ultimosP);
        }});

    $.ajax({
        url: "http://localhost:8081/proLibrary/json?ob=cliente&op=getpage&order=id&ordervalue=desc",
        type: "GET",
        dataType: "json",
        success: function (data) {
            ultimosC = "<table class='tab-border'>";
            for (i = 0; i < 4; i++) {
                nombre = data.list[i].nombre;
                apellidos = data.list[i].apellidos;
                idC = data.list[i].id;
                tipo = data.list[i].obj_tipocliente.descripcion;
                isbn = data.list[i].isbn;
                ultimosC += "<tr>"
                ultimosC += "<td>";
                ultimosC += "<a href='jsp#/cliente/view/" + idC + "'>" + nombre + " " + apellidos + "</a>";
                ultimosC += "</td>";
                ultimosC += "<td class='td-padding'>";
                ultimosC += tipo;
                ultimosC += "</td>";
                ultimosC += "</tr>"
            }
            $("#ultimosClientes").html(ultimosC);
        }});

    $.ajax({
        url: "http://localhost:8081/proLibrary/json?op=getregisters&ob=cliente",
        type: "GET",
        dataType: "json",
        success: function (data) {
            cantidadC = data.data;
            countC = "<table class='tab-border'>";
            countC += "<tr>"
            countC += "<td>";
            countC += "Total de Clientes: ";
            countC += "</td>";
            countC += "<td class='td-padding'>";
            countC += cantidadC;
            countC += "</td>";
            countC += "</tr>"
            $("#countC").html(countC);
        }});

    $.ajax({
        url: "http://localhost:8081/proLibrary/json?op=getregisters&ob=libro",
        type: "GET",
        dataType: "json",
        success: function (data) {
            cantidadL = data.data;
            countL = "<table class='tab-border'>";
            countL += "<tr>"
            countL += "<td>";
            countL += "Total de Libros: ";
            countL += "</td>";
            countL += "<td class='td-padding'>";
            countL += cantidadL;
            countL += "</td>";
            countL += "</tr>"
            $("#countL").html(countL);
        }});

    $.ajax({
        url: "http://localhost:8081/proLibrary/json?ob=compra&op=getpage&order=id&ordervalue=desc",
        type: "GET",
        dataType: "json",
        success: function (data) {
            trans = "<table class='tab-border'>";
            for (i = 0; i < 4; i++) {
                nombreT = data.list[i].obj_cliente.nombre;
                apellidoT = data.list[i].obj_cliente.apellidos;
                tituloT = data.list[i].obj_libro.titulo;
                trans += "<tr>"
                trans += "<td>";
                trans += nombreT + " " + apellidoT;
                trans += "</td>";
                trans += "<td class='td-padding'>";
                trans += " Ha comprado ";
                trans += "</td>";
                trans += "<td class='td-padding'>";
                trans += tituloT;
                trans += "</td>";
                trans += "</tr>"
            }
            trans += "</table>";
            $("#transacciones").html(trans);
        }});




    /*$.ajax({
     url: "http://prolibrary-jguisado.rhcloud.com/prolibrary/json?ob=libro&op=getpage&order=id&ordervalue=desc",
     type: "GET",
     dataType: "json",
     success: function (data) {
     ultimos = "<table>";
     for (i = 1; i <= 4; i++) {
     titulo = data.list[i].titulo;
     id = data.list[i].id;
     ultimos += "<tr><td>"
     ultimos += "<a href='http://prolibrary-jguisado.rhcloud.com/prolibrary/jsp#/libro/view/" + id + "'>" + titulo + "</a>";
     ultimos += "</td></tr>"
     }
     $("#ultimosLibros").html(ultimos);
     }});
     $.ajax({
     url: "http://prolibrary-jguisado.rhcloud.com/prolibrary/json?ob=libro&op=getpage&order=puntuacion&ordervalue=desc",
     type: "GET",
     dataType: "json",
     success: function (data) {
     ultimosP = "<table class='tab-border'>";
     for (i = 1; i <= 4; i++) {
     tituloP = data.list[i].titulo;
     idP = data.list[i].id;
     puntuacion = data.list[i].puntuacion;
     ultimosP += "<tr>"
     ultimosP += "<td>";
     ultimosP += "<a href='http://prolibrary-jguisado.rhcloud.com/prolibrary/jsp#/libro/view/" + idP + "'>" + tituloP + "</a>";
     ultimosP += "</td>";
     ultimosP += "<td class='td-padding'>";
     ultimosP += puntuacion;
     ultimosP += "</td>";
     ultimosP += "</tr>"
     }
     $("#librosPuntuados").html(ultimosP);
     }});
     
     $.ajax({
     url: "http://prolibrary-jguisado.rhcloud.com/prolibrary/json?ob=cliente&op=getpage&order=id&ordervalue=desc",
     type: "GET",
     dataType: "json",
     success: function (data) {
     ultimosC = "<table class='tab-border'>";
     for (i = 1; i <= 4; i++) {
     nombre = data.list[i].nombre;
     apellidos = data.list[i].apellidos;
     idC = data.list[i].id;
     tipo = data.list[i].obj_tipocliente.descripcion;
     isbn = data.list[i].isbn;
     ultimosC += "<tr>"
     ultimosC += "<td>";
     ultimosC += "<a href='http://prolibrary-jguisado.rhcloud.com/prolibrary/jsp#/cliente/view/" + idC + "'>" + nombre + " " + apellidos + "</a>";
     ultimosC += "</td>";
     ultimosC += "<td class='td-padding'>";
     ultimosC += tipo;
     ultimosC += "</td>";
     ultimosC += "</tr>"
     }
     $("#ultimosClientes").html(ultimosC);
     }});
     
     $.ajax({
     url: "http://prolibrary-jguisado.rhcloud.com/prolibrary/json?op=getregisters&ob=cliente",
     type: "GET",
     dataType: "json",
     success: function (data) {
     cantidadC = data.data;
     countC = "<table class='tab-border'>";
     countC += "<tr>"
     countC += "<td>";
     countC += "Total de Clientes: ";
     countC += "</td>";
     countC += "<td class='td-padding'>";
     countC += cantidadC;
     countC += "</td>";
     countC += "</tr>"
     $("#countC").html(countC);
     }});
     
     $.ajax({
     url: "http://prolibrary-jguisado.rhcloud.com/prolibrary/json?op=getregisters&ob=libro",
     type: "GET",
     dataType: "json",
     success: function (data) {
     cantidadL = data.data;
     countL = "<table class='tab-border'>";
     countL += "<tr>"
     countL += "<td>";
     countL += "Total de Libros: ";
     countL += "</td>";
     countL += "<td class='td-padding'>";
     countL += cantidadL;
     countL += "</td>";
     countL += "</tr>"
     $("#countL").html(countL);
     }});
     
     $.ajax({
     url: "http://prolibrary-jguisado.rhcloud.com/prolibrary/json?ob=compra&op=getpage&order=id&ordervalue=desc",
     type: "GET",
     dataType: "json",
     success: function (data) {
     trans = "<table class='tab-border'>";
     for (i = 0; i < 4; i++) {
     nombreT = data.list[i].obj_cliente.nombre;
     apellidoT = data.list[i].obj_cliente.apellidos;
     tituloT = data.list[i].obj_libro.titulo;
     trans += "<tr>"
     trans += "<td>";
     trans += nombreT + " " + apellidoT;
     trans += "</td>";
     trans += "<td class='td-padding'>";
     trans += " Ha comprado ";
     trans += "</td>";
     trans += "<td class='td-padding'>";
     trans += tituloT;
     trans += "</td>";
     trans += "</tr>"
     }
     trans += "</table>";
     $("#transacciones").html(trans);
     }});*/
}