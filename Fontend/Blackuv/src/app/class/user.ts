import { Factura } from "./factura";

export class User {
    id!: number;
    email!: string;
    name!: string ;
    lastname!: string;
    password!: string;
    role!: string;
    dateofbirth!: Date;
    facturas: Array<Factura> = []

constructor(){}
}

export interface Credentials{
    email: string;
    password: string;
}