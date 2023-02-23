import { ItemFactura } from "./item-factura";
import { User } from "./user";

export class Factura {
    id!: number;
    descripcion!: string;
    items: Array<ItemFactura> = [];
    user!: User;
    total!: number;
    createAt!: String;

    calcularGranTotal(): number{
        this.total = 0;
        this.items.forEach((item:ItemFactura)=>{
            this.total += item.calcularImporte();
        });
        return this.total;
    }
}
