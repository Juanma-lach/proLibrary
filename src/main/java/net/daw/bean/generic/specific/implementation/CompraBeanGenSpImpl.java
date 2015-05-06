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

public class CompraBeanGenSpImpl extends BeanGenImpl implements BeanInterface {

    @Expose(serialize = false)
    private Integer id_cliente = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private ClienteBeanGenSpImpl obj_cliente = null;
    @Expose(serialize = false)
    private Integer id_libro = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private LibroBeanGenSpImpl obj_libro = null;

    public CompraBeanGenSpImpl() {

    }

    public CompraBeanGenSpImpl(Integer id) {
        super(id);
    }
    
    public Integer getId_cliente() {
        return id_cliente;
    }

    public void setId_cliente(Integer id_cliente) {
        this.id_cliente = id_cliente;
    }

    public ClienteBeanGenSpImpl getObj_cliente() {
        return obj_cliente;
    }

    public void setObj_cliente(ClienteBeanGenSpImpl obj_cliente) {
        this.obj_cliente = obj_cliente;
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
