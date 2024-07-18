export default class Cl_tienda {
    constructor(){
        this.contArticulos = 0;
        this.contArticulosSuperior = 0;
        this.acumPrecioventa = 0;
    }

    procesarArticulo(a){
        this.contArticulos++;
        this.acumPrecioventa += a.precioVenta;
        if(a.precioVenta > 65){
            this.contArticulosSuperior++;
        }
    }

    PromedioPrecioVenta(){
        return this.acumPrecioventa / this.contArticulos;
    }
    CantidadArticulosSuperior(){
        return this.contArticulosSuperior;
    }



}