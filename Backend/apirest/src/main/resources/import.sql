INSERT INTO `users` (`mail`, `lastname`, `name`, `password`,`create_at`) VALUES ('mati@hotmail.com','sacchi','matias','1234', '0001-01-01');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`,`create_at`) VALUES ('paco@hotmail.com','motal','bobinian','1234', '2025-12-12');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`,`create_at`) VALUES ('dio@speedwagon.com','Brando','Dioo','123sd4','2013-09-01');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`,`create_at`) VALUES ('jotaro@speedwagon.com','Joestar','Joseph','1dh234', '2023-12-03' );
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`,`create_at`) VALUES ('jolyne@speedwagon.com','Cujoh ','Jolyne','12dfgh34', '2025-12-12');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`,`create_at`) VALUES ('jotaro@speedwagon.com','Cujoh ','Jotaro','12fdgh34', '2025-12-12');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`,`create_at`) VALUES ('josuke@speedwagon.com','Higashikata','Josuke','sdfgfdgh', '2025-12-12');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`,`create_at`) VALUES ('caesarzeppeli@speedwagon.com','Zeppeli','Caesar','Anthonio', '2025-12-12');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`,`create_at`) VALUES ('williamzeppeli@speedwagon.com','Zeppeli','William','wili23', '2025-12-12');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`,`create_at`) VALUES ('jodftaro@speedwagon.com','Joestar','Joseph','1dh234', '0001-01-01' );
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`,`create_at`) VALUES ('jodfglyne@speedwagon.com','Cujoh ','Jolyne','12dfgh34', '0001-01-01');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`,`create_at`) VALUES ('jotdgdfgaro@speedwagon.com','Cujoh ','Jotaro','12fdgh34', '0001-01-01');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`,`create_at`) VALUES ('jghfhosuke@speedwagon.com','Higashikata','Josuke','sdfgfdgh', '0001-01-01');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`,`create_at`) VALUES ('caehgjghjsarzeppeli@speedwagon.com','Zeppeli','Caesar','Anthonio', '0001-01-01');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`,`create_at`) VALUES ('willighjgjhghjamzeppeli@speedwagon.com','Zeppeli','William','wili23', '0001-01-01');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`,`create_at`) VALUES ('joghjghjtaro@speedwagon.com','Joestar','Joseph','1dh234', '0001-01-01' );
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`,`create_at`) VALUES ('jolyghjghjghjne@speedwagon.com','Cujoh ','Jolyne','12dfgh34', '0001-01-01');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`,`create_at`) VALUES ('jodfdtaro@speedwagon.com','Cujoh ','Jotaro','12fdgh34', '0001-01-01');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`,`create_at`) VALUES ('josufggghghke@speedwagon.com','Higashikata','Josuke','sdfgfdgh', '0001-01-01');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`,`create_at`) VALUES ('caesahjghjrzeppeli@speedwagon.com','Zeppeli','Caesar','Anthonio', '0001-01-01');

INSERT INTO `usuarios` (username, password, enabled, name, lastname, email) VALUES ('andres', '$2a$10$gQ1tXMjGZJ4VQnsZBpgope5DRKr8x/SQnVY0ZMwfygZlJ/aRq/G/W', 1, 'Andres','Guzman','andresguszman@email.com');
INSERT INTO `usuarios` (username, password, enabled, name, lastname, email) VALUES ('admin', '$2a$10$ngx5QrouZV/3l79cQ0GiWOtDGTMggm1M5ebDl.txIySQkLttsfQXy', 1, 'Ernesto', 'Lopez', 'ernesto@email.com');

INSERT INTO `roles` (nombre) VALUES ('ROLE_USER');
INSERT INTO `roles` (nombre) VALUES ('ROLE_ADMIN');

INSERT INTO `usuario_roles` (usuario_id, role_id) VALUES (1, 1);
INSERT INTO `usuario_roles` (usuario_id, role_id) VALUES (2, 2);
INSERT INTO `usuario_roles` (usuario_id, role_id) VALUES (2, 1);
