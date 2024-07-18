/**Conociendo el código, costo y el precio de venta de los artículos que vende una tienda, se 
desea hacer un procesamiento que determine el promedio de los precios de venta y cantidad de 
artículos con precio superior a 65$ 
El encargado de la tienda informa que dispone de los siguientes artículos: 888 (costo $10, 
precio venta $15), 777 (costo $20, precio $25), 999 ($15, $25), 666 ($25, $35), 111 ($50, $70), 
333 ($40, $50), 444 ($80, $100) y 222 ($5, $10) 
Promedio de los precios de venta: 41.25 
Cantidad de artículos con precio superior a 65$:2 */

import Cl_tienda from "./Cl_tienda.js";
import Cl_articulo from "./Cl_articulo.js";

let tienda = new Cl_tienda();
let articulo = new Cl_articulo(10,888,15);
let articulo2 = new Cl_articulo(20,777,25);
let articulo3 = new Cl_articulo(15,999,25);
let articulo4 = new Cl_articulo(25,666,35);
let articulo5 = new Cl_articulo(50,111,70);
let articulo6 = new Cl_articulo(40,333,50);
let articulo7 = new Cl_articulo(80,444,100);
let articulo8 = new Cl_articulo(5,222,10);
tienda.procesarArticulo(articulo);
tienda.procesarArticulo(articulo2);
tienda.procesarArticulo(articulo3);
tienda.procesarArticulo(articulo4);
tienda.procesarArticulo(articulo5);
tienda.procesarArticulo(articulo6);
tienda.procesarArticulo(articulo7);
tienda.procesarArticulo(articulo8);

let salida = document.getElementById("salida");

salida.innerHTML = "Promedio de los precios de venta: " + tienda.PromedioPrecioVenta() + "<br>" + "Cantidad de artículos con precio superior a 65$: " + tienda.CantidadArticulosSuperior()