export class User {
    id!: number;
    name!: string;
    lastname!: string;
    email!: string;
    password!: string;
    createAt!: Date;
}

export class LoginUser {

    email!: string;
    password!: string;

}