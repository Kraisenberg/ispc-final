INSERT INTO `users` (`mail`, `lastname`, `name`, `password`) VALUES ('mati@hotmail.com','sacchi','matias','1234');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`) VALUES ('paco@hotmail.com','motal','bobinian','1234');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`) VALUES ('joseph@speedwagon.com','joestar','joseph','1234');

INSERT INTO `usuarios` (username, password, enabled, name, lastname, email) VALUES ('andres', '$2a$10$gQ1tXMjGZJ4VQnsZBpgope5DRKr8x/SQnVY0ZMwfygZlJ/aRq/G/W', 1, 'Andres','Guzman','andresguszman@email.com');
INSERT INTO `usuarios` (username, password, enabled, name, lastname, email) VALUES ('admin', '$2a$10$ngx5QrouZV/3l79cQ0GiWOtDGTMggm1M5ebDl.txIySQkLttsfQXy', 1, 'Ernesto', 'Lopez', 'ernesto@email.com');

INSERT INTO `roles` (nombre) VALUES ('ROLE_USER');
INSERT INTO `roles` (nombre) VALUES ('ROLE_ADMIN');

INSERT INTO `usuario_roles` (usuario_id, role_id) VALUES (1, 1);
INSERT INTO `usuario_roles` (usuario_id, role_id) VALUES (2, 2);
INSERT INTO `usuario_roles` (usuario_id, role_id) VALUES (2, 1);
