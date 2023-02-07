import { Region } from "./region";

export class User {
    id!: number;
    name!: string;
    lastname!: string;
    email!: string;
    password!: string;
    createAt!: Date;
    foto!: string;
    region!: Region;

}
