const express = require('express');
let router = express.Router();
const mysql = require('mysql');

// Todas las rutas relacionadas con información del paciente.

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

router.post('/registrar-paciente', (request, response) => {
  const IdPaciente = request.body.id;
  const NombrePaciente = request.body.NombrePaciente;
  const NombrePreferido = request.body.NombrePreferido;
  const Edad = request.body.Edad;
  const Genero = request.body.Genero;
  const GustosPersonales = request.body.GustosPersonales;
  const FechaDeNacimiento = request.body.FechaDeNacimiento;
  const LugarDeNacimiento = request.body.LugarDeNacimiento;
  const PadreMadreTutor = request.body.PadreMadreTutor;
  const TutorEncargado = request.body.TutorEncargado;
  const Domicilio = request.body.Domicilio;
  const Telefono = request.body.Telefono;
  const Celular = request.body.Celular;
  const OtroContacto = request.body.OtroContacto;
  const NombrePediatra = request.body.NombrePediatra;
  const Mydate = request.body.Mydate;

  const peticionSql =
    'INSERT INTO paciente (IdPaciente, NombrePaciente, NombrePreferido, Edad, Genero, GustosPersonales, FechaDeNacimiento, LugarDeNacimiento, PadreMadreTutor, TutorEncargado, Domicilio, Telefono, Celular, OtroContacto, Mydate, NombrePediatra) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(
    peticionSql,
    [
      IdPaciente,
      NombrePaciente,
      NombrePreferido,
      Edad,
      Genero,
      GustosPersonales,
      FechaDeNacimiento,
      LugarDeNacimiento,
      PadreMadreTutor,
      TutorEncargado,
      Domicilio,
      Telefono,
      Celular,
      OtroContacto,
      Mydate,
      NombrePediatra,
    ],
    (err, result) => {
      if (err) {
        response.status(400).send({ message: err });
        console.error(err);
      } else {
        response.send(200, { message: 'Info submitted' });
      }
    }
  );
});

router.get('/obtener-pacientes', (req, res) => {
  const peticionSql = 'SELECT * FROM paciente ';

  db.query(peticionSql, (err, result) => {
    if (err) {
      res.status(400).send({ message: err });
      console.error(err);
    } else {
      res.status(200).send({ pacientes: result });
    }
  });
});

router.get('/obtener-paciente/:id', (req, res) => {
  const IdPaciente = req.params.id;
  const peticionSql =
    'SELECT IdPaciente, NombrePaciente, TutorEncargado, Mydate FROM paciente WHERE IdPaciente = ? ';

  db.query(peticionSql, IdPaciente, (err, result) => {
    if (err) {
      res.status(400).send({ message: err });
      console.error(err);
    } else {
      res.status(200).send({ paciente: result });
    }
  });
});

router.get('/obtener-paciente-completo/:id', (req, res) => {
  const IdPaciente = req.params.id;
  const peticionSql = 'SELECT * FROM paciente WHERE IdPaciente = ? ';

  db.query(peticionSql, IdPaciente, (err, result) => {
    if (err) {
      res.status(400).send({ message: err });
      console.error(err);
    } else {
      res.status(200).send({ paciente: result });
    }
  });
});

router.delete('/eliminar-paciente/:id', (req, res) => {
  const IdPaciente = req.params.id;
  const peticionSql = 'DELETE FROM paciente where IdPaciente = ?';
  db.query(peticionSql, IdPaciente, (err, result) => {
    if (err) {
      res.status(400).send({ message: err });
    } else {
      res.status(200).send({ message: result });
    }
  });
});

router.put('/actualizar-paciente', (request, response) => {
  //a
  const IdPaciente = request.body.id;
  const NombrePaciente = request.body.NombrePaciente;
  const NombrePreferido = request.body.NombrePreferido;
  const Edad = request.body.Edad;
  const Genero = request.body.Genero;
  const GustosPersonales = request.body.GustosPersonales;
  const FechaDeNacimiento = request.body.FechaDeNacimiento;
  const LugarDeNacimiento = request.body.LugarDeNacimiento;
  const PadreMadreTutor = request.body.PadreMadreTutor;
  const TutorEncargado = request.body.TutorEncargado;
  const Domicilio = request.body.Domicilio;
  const Telefono = request.body.Telefono;
  const Celular = request.body.Celular;
  const OtroContacto = request.body.OtroContacto;
  const NombrePediatra = request.body.NombrePediatra;

  const peticionSql =
    'UPDATE paciente SET NombrePaciente = ?, NombrePreferido = ?, Edad = ?, Genero = ?, GustosPersonales = ?, FechaDeNacimiento = ?, LugarDeNacimiento = ?, PadreMadreTutor = ?, TutorEncargado = ?, Domicilio = ?, Telefono = ?, Celular = ?, OtroContacto = ?, NombrePediatra = ? WHERE IdPaciente = ?;';
  db.query(
    peticionSql,
    [
      NombrePaciente,
      NombrePreferido,
      Edad,
      Genero,
      GustosPersonales,
      FechaDeNacimiento,
      LugarDeNacimiento,
      PadreMadreTutor,
      TutorEncargado,
      Domicilio,
      Telefono,
      Celular,
      OtroContacto,
      NombrePediatra,
      IdPaciente,
    ],
    (err, result) => {
      if (err) {
        response.status(400).send({ message: err });
        console.error(err);
      } else {
        console.error(result);
        response.send(200, { message: 'Info submitted' });
      }
    }
  );
});

module.exports = router;
