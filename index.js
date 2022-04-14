const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'practicasmaternomodelo',
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/v1/registrar-paciente', (request, response) => {
  
  const IdPaciente = request.body.id;
  const NombrePaciente = request.body.NombrePaciente;
  const NombrePreferido = request.body.NombrePaciente;
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
  const Mydate = request.body.Mydate;

  const peticionSql =
    'INSERT INTO paciente (IdPaciente, NombrePaciente, NombrePreferido, Edad, Genero, GustosPersonales, FechaDeNacimiento, LugarDeNacimiento, PadreMadreTutor, TutorEncargado, Domicilio, Telefono, Celular, OtroContacto, Mydate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
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

app.get('/api/v1/obtener-pacientes', (req, res) => {
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

app.get('/api/v1/obtener-paciente/:id', (req, res) => {
  const IdPaciente = req.params.id;
  const peticionSql =
    'SELECT IdPaciente, NombrePaciente FROM paciente WHERE IdPaciente = ? ';

  db.query(peticionSql, IdPaciente, (err, result) => {
    if (err) {
      res.status(400).send({ message: err });
      console.error(err);
    } else {
      res.status(200).send({ paciente: result });
    }
  });
});

app.get('/api/v1/obtener-paciente-completo/:id', (req, res) => {
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

app.delete('/api/v1/eliminar-paciente/:id', (req, res) => {
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

app.put('/api/v1/actualizar-paciente', (request, response) => {
  //a
  const IdPaciente = request.body.id;
  const NombrePaciente = request.body.NombrePaciente;
  const NombrePreferido = request.body.NombrePaciente;
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

  const peticionSql =
    'UPDATE paciente SET NombrePaciente = ?, NombrePreferido = ?, Edad = ?, Genero = ?, GustosPersonales = ?, FechaDeNacimiento = ?, LugarDeNacimiento = ?, PadreMadreTutor = ?, TutorEncargado = ?, Domicilio = ?, Telefono = ?, Celular = ?, OtroContacto = ? WHERE IdPaciente = ?';
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

app.listen('3001', () => {
  console.log('Corriendo en el puerto 3001');
});
