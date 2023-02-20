insert into users (dateofbirth, email, lastname, name, password, role) values ('1998-02-14', 'benito@mail', 'gutierrez', 'benito', '1234', 'ROLE_ADMIN');
insert into users (dateofbirth, email, lastname, name, password, role) values ('1975-08-18', 'esteban@mail', 'polo', 'esteban', '1234', 'ROLE_USER');
insert into users (dateofbirth, email, lastname, name, password, role) values ('1989-03-24', 'jaime@mail', 'altozano', 'jaime', '1234', 'ROLE_USER');

/*Populate tabla productos*/
INSERT INTO productos (nombre, precio, create_at) VALUES('Vino Santa Julia', 8000 , NOW() );
INSERT INTO productos (nombre, precio, create_at) VALUES('Vino Toro', 400 , NOW() );
INSERT INTO productos (nombre, precio, create_at) VALUES('Vino Malbec', 5673 , NOW() );
INSERT INTO productos (nombre, precio, create_at) VALUES('Vino y se fué', 2987 , NOW() );
INSERT INTO productos (nombre, precio, create_at) VALUES('Vino nativo', 29237 , NOW() );
INSERT INTO productos (nombre, precio, create_at) VALUES('Vino patero', 1234 , NOW() );
INSERT INTO productos (nombre, precio, create_at) VALUES('Vino guaton', 2645 , NOW() );

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