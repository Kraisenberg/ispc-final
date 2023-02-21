import { ItemFactura } from "./item-factura";
import { User } from "./user";

export class Factura {
    id!: number;
    descripcion!: string;
    items: Array<ItemFactura> = [];
    user!: User;
    total!: number;
    createAt!: String;

}
