INSERT INTO `users` (`mail`, `lastname`, `name`, `password`) VALUES ('mati@hotmail.com','sacchi','matias','1234');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`) VALUES ('paco@hotmail.com','motal','bobinian','1234');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`) VALUES ('dio@speedwagon.com','Brando','Dio','123sd4');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`) VALUES ('jotaro@speedwagon.com','Joestar','Joseph','1dh234');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`) VALUES ('jolyne@speedwagon.com','Cujoh ','Jolyne','12dfgh34');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`) VALUES ('jotaro@speedwagon.com','Cujoh ','Jotaro','12fdgh34');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`) VALUES ('josuke@speedwagon.com','Higashikata','Josuke','sdfgfdgh');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`) VALUES ('caesarzeppeli@speedwagon.com','Zeppeli','Caesar','Anthonio');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`) VALUES ('williamzeppeli@speedwagon.com','Zeppeli','William','wili23');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`) VALUES ('koichi@speedwagon.com','Hirose','Koichi','123asd4');  
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`) VALUES ('kishibe@speedwagon.com','Kishibe','Rohan','manga');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`) VALUES ('giorno@speedwagon.com','Giovanna','Giorno','12asdf34');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`) VALUES ('kira@speedwagon.com','Kira','Yoshikage','123433');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`) VALUES ('joseph2@speedwagon.com','joe2star','josrteph','125634');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`) VALUES ('joseph3@speedwagon.com','joes3tar','jos4eph','1238564');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`) VALUES ('joseph4@speedwagon.com','joest5ar','jos3eph','123564');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`) VALUES ('josep5@speedwagon.com','joest4ar','jose6ph','12834');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`) VALUES ('joseph6@speedwagon.com','joest5r','jose43ph','18234');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`) VALUES ('joseph7@speedwagon.com','joest6ar','jos8eph','1234');
INSERT INTO `users` (`mail`, `lastname`, `name`, `password`) VALUES ('joseph8@speedwagon.com','joesta6r','jose68ph','12348');

INSERT INTO `usuarios` (username, password, enabled, name, lastname, email) VALUES ('andres', '$2a$10$gQ1tXMjGZJ4VQnsZBpgope5DRKr8x/SQnVY0ZMwfygZlJ/aRq/G/W', 1, 'Andres','Guzman','andresguszman@email.com');
INSERT INTO `usuarios` (username, password, enabled, name, lastname, email) VALUES ('admin', '$2a$10$ngx5QrouZV/3l79cQ0GiWOtDGTMggm1M5ebDl.txIySQkLttsfQXy', 1, 'Ernesto', 'Lopez', 'ernesto@email.com');

INSERT INTO `roles` (nombre) VALUES ('ROLE_USER');
INSERT INTO `roles` (nombre) VALUES ('ROLE_ADMIN');

INSERT INTO `usuario_roles` (usuario_id, role_id) VALUES (1, 1);
INSERT INTO `usuario_roles` (usuario_id, role_id) VALUES (2, 2);
INSERT INTO `usuario_roles` (usuario_id, role_id) VALUES (2, 1);
