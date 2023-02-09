/* Populate tabla de regiones */

INSERT INTO regiones (id, nombre) VALUES (1, 'Córdoba');
INSERT INTO regiones (id, nombre) VALUES (2, 'Tucuman');
INSERT INTO regiones (id, nombre) VALUES (3, 'Rio Negro');
INSERT INTO regiones (id, nombre) VALUES (4, 'Salta');
INSERT INTO regiones (id, nombre) VALUES (5, 'Santa Fe');
INSERT INTO regiones (id, nombre) VALUES (6, 'Buenos Aires');

/*¨populkate tabla usuarios */

INSERT INTO `users` (region_id ,`mail`, `lastname`, `name`, `password`,`create_at`) VALUES (1 ,'mati@hotmail.com','sacchi','matias','1234', '0001-01-01');
INSERT INTO `users` (region_id ,`mail`, `lastname`, `name`, `password`,`create_at`) VALUES (4 ,'paco@hotmail.com','motal','bobinian','1234', '2025-12-12');
INSERT INTO `users` (region_id ,`mail`, `lastname`, `name`, `password`,`create_at`) VALUES (2 ,'dio@speedwagon.com','Brando','Dioo','123sd4','2013-09-01');
INSERT INTO `users` (region_id ,`mail`, `lastname`, `name`, `password`,`create_at`) VALUES (3 ,'jotaro@speedwagon.com','Joestar','Joseph','1dh234', '2023-12-03' );
INSERT INTO `users` (region_id ,`mail`, `lastname`, `name`, `password`,`create_at`) VALUES (2 ,'jolyne@speedwagon.com','Cujoh ','Jolyne','12dfgh34', '2025-12-12');
INSERT INTO `users` (region_id ,`mail`, `lastname`, `name`, `password`,`create_at`) VALUES (6 ,'digo@speedwghghagon.com','Brandjjo','Digghjoo','12ghj3sd4','2013-09-01');
INSERT INTO `users` (region_id ,`mail`, `lastname`, `name`, `password`,`create_at`) VALUES (5 ,'josuke@speedwagon.com','Higashikata','Josuke','sdfgfdgh', '2025-12-12');


INSERT INTO `usuarios` (username, password, enabled, name, lastname, email) VALUES ('andres', '$2a$10$gQ1tXMjGZJ4VQnsZBpgope5DRKr8x/SQnVY0ZMwfygZlJ/aRq/G/W', 1, 'Andres','Guzman','andresguszman@email.com');
INSERT INTO `usuarios` (username, password, enabled, name, lastname, email) VALUES ('admin', '$2a$10$ngx5QrouZV/3l79cQ0GiWOtDGTMggm1M5ebDl.txIySQkLttsfQXy', 1, 'Ernesto', 'Lopez', 'ernesto@email.com');

INSERT INTO `roles` (nombre) VALUES ('ROLE_USER');
INSERT INTO `roles` (nombre) VALUES ('ROLE_ADMIN');

INSERT INTO `usuario_roles` (usuario_id, role_id) VALUES (1, 1);
INSERT INTO `usuario_roles` (usuario_id, role_id) VALUES (2, 2);
INSERT INTO `usuario_roles` (usuario_id, role_id) VALUES (2, 1);
