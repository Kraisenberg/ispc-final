insert into users (dateofbirth, email, lastname, name, password, role) values ('1998-02-14', 'benito@mail', 'gutierrez', 'benito', '$2a$10$sHYrM9cSuZyUY74ytneafuo7E9sBfrDs.qHG63DDFjKjnykKCgj3G', 'ROLE_ADMIN');
insert into users (dateofbirth, email, lastname, name, password, role) values ('1975-08-18', 'esteban@mail', 'polo', 'esteban', '$2a$10$acuj.mYM3y6j8wsKN.KwlOYzI4YAUlrwRNWyKlX6/Dz2lBg6GQACG', 'ROLE_USER');
insert into users (dateofbirth, email, lastname, name, password, role) values ('1989-03-24', 'jaime@mail', 'altozano', 'jaime', '$2a$10$acuj.mYM3y6j8wsKN.KwlOYzI4YAUlrwRNWyKlX6/Dz2lBg6GQACG', 'ROLE_USER');

/*Populate tabla productos*/
INSERT INTO productos (nombre, precio, create_at, foto) VALUES('El Parotet Vermell Tintoc', 9.90 , NOW(), 'ElParotetVermell.webp');
INSERT INTO productos (nombre, precio, create_at, foto) VALUES('Salentein extra brut', 11 , NOW() ,'salentein-extra-brut-750.webp');
INSERT INTO productos (nombre, precio, create_at, foto) VALUES('9d Octubre Blanco', 4 , NOW(), '9-octubre-blanco.webp' );
INSERT INTO productos (nombre, precio, create_at, foto) VALUES('Vino Tinto Paquito el Chocolatero', 10 , NOW(), 'Paquito-el-chocolatero.webp' );
INSERT INTO productos (nombre, precio, create_at, foto) VALUES('Maloco', 9 , NOW(), 'Maloco.webp' );
INSERT INTO productos (nombre, precio, create_at, foto) VALUES('Los Arraez Lagares Tinto', 11 , NOW(), 'LOS-ARRAEZ_LAGARES_SPANISH.webp' );
INSERT INTO productos (nombre, precio, create_at, foto) VALUES('Vino Blanco Cent Piques', 8 , NOW(),'Cent-Piques-Blanco_540x.webp' );

/*Creamos unas Facturas */
INSERT INTO facturas (descripcion, user_id , create_at) VALUES('Factura varios', 1, NOW());
INSERT INTO facturas_items(cantidad, factura_id, producto_id) VALUES(1, 1, 1);
INSERT INTO facturas_items(cantidad, factura_id, producto_id) VALUES(2, 1, 4);
INSERT INTO facturas_items(cantidad, factura_id, producto_id) VALUES(1, 1, 2);
INSERT INTO facturas_items(cantidad, factura_id, producto_id) VALUES(1, 1, 3);

INSERT INTO facturas (descripcion, user_id , create_at) VALUES('Factura Evento de boda', 1, NOW());
INSERT INTO facturas_items(cantidad, factura_id, producto_id) VALUES(6, 2, 4);
INSERT INTO facturas_items(cantidad, factura_id, producto_id) VALUES(18, 2, 1);
INSERT INTO facturas_items(cantidad, factura_id, producto_id) VALUES(9, 2, 2);
INSERT INTO facturas_items(cantidad, factura_id, producto_id) VALUES(12, 2, 3);