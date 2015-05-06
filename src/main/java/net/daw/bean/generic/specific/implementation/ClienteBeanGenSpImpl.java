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

public class ClienteBeanGenSpImpl extends BeanGenImpl implements BeanInterface {

    @Expose
    private String nombre = "";
    @Expose
    private String apellidos = "";
    @Expose
    private String telefono = "";
    @Expose(serialize = false)
    private Integer id_tipocliente = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private TipoclienteBeanGenSpImpl obj_tipocliente = null;

    public ClienteBeanGenSpImpl() {

    }

    public ClienteBeanGenSpImpl(Integer id) {
        super(id);
    }
    
    
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    
    public Integer getId_tipocliente() {
        return id_tipocliente;
    }

    public void setId_tipocliente(Integer id_tipocliente) {
        this.id_tipocliente = id_tipocliente;
    }

    public TipoclienteBeanGenSpImpl getObj_tipocliente() {
        return obj_tipocliente;
    }

    public void setObj_tipocliente(TipoclienteBeanGenSpImpl obj_tipocliente) {
        this.obj_tipocliente = obj_tipocliente;
    }

    
}
