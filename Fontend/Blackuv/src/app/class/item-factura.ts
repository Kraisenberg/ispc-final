import { Producto } from "./producto";

export class ItemFactura {

    producto!: Producto;
    cantidad: number = 1;
    importe!: number;

    public calcularImporte(): number{
        return this.importe * this.cantidad;
    }





}
