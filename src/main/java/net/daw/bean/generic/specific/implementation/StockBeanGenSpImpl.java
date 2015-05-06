/*
 * Copyright (C) July 2014 Rafael Aznar
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
package net.daw.bean.generic.specific.implementation;

import net.daw.bean.generic.implementation.BeanGenImpl;
import net.daw.bean.publicinterface.BeanInterface;
import com.google.gson.annotations.Expose;

public class StockBeanGenSpImpl extends BeanGenImpl implements BeanInterface {

    @Expose
    private String cantidad = "";
    @Expose
    private Double precio = 0.00;
    @Expose(serialize = false)
    private Integer id_libro = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private LibroBeanGenSpImpl obj_libro = null;

    public StockBeanGenSpImpl() {

    }

    public StockBeanGenSpImpl(Integer id) {
        super(id);
    }

    public String getCantidad() {
        return cantidad;
    }

    public void setCantidad(String cantidad) {
        this.cantidad = cantidad;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public Integer getId_libro() {
        return id_libro;
    }

    public void setId_libro(Integer id_libro) {
        this.id_libro = id_libro;
    }

    public LibroBeanGenSpImpl getObj_libro() {
        return obj_libro;
    }

    public void setObj_libro(LibroBeanGenSpImpl obj_libro) {
        this.obj_libro = obj_libro;
    }
    
    
    
    
}
