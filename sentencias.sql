-- TABLA PACIENTE
-- sentencia select
SELECT * FROM paciente;

-- sentencia insert
INSERT INTO paciente (IdPaciente, NombrePaciente, NombrePreferido, Edad, Genero, GustosPersonales, FechaDeNacimiento, LugarDeNacimiento,
PadreMadreTutor, TutorEncargado, Domicilio, Telefono, Celular, OtroContacto) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)

-- TABLA ALIMENTACION