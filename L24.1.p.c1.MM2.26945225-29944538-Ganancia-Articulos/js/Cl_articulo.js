export default class Cl_articulo {
    constructor(costo, codigo, precioVenta){
        this.costo = costo;
        this.precioVenta = precioVenta;
        this.codigo = codigo;
    }

    set costo(costo){
        this._costo = costo;
    }
    get costo(){
        return this._costo;
    }
    set precioVenta(precioVenta){
        this._precioVenta = precioVenta;
    }
    get precioVenta(){
        return this._precioVenta;
    }
    set codigo(codigo){
        this._codigo = codigo;
    }
    get codigo(){
        return this._codigo;
    }
}