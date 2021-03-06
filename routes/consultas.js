const express = require('express');
let router = express.Router();
const mysql = require('mysql');

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

router.
  route('/consultas/:id/:consulta?')
  .get((req, res) => {

    const IdPaciente = req.params.id;
    const peticionSql =
    'SELECT * FROM consultas WHERE IdPaciente = ?';

    db.query(peticionSql, IdPaciente, (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ consultas: result });
        }
      });
  })
  .post((req, res) => {
    const IdPaciente = req.params.id;
    const IdConsulta = req.body.IdConsulta;
    const Fecha = req.body.Fecha;
    const Area = req.body.Area;
    const Progreso = req.body.Progreso;
  
    const peticionSql =
    'INSERT INTO consultas (IdConsulta, IdPaciente, Fecha, Area, Progreso) VALUES (?, ?, ?, ?, ?)';

    db.query(
      peticionSql,
      [
        IdConsulta,
        IdPaciente,
        Fecha,
        Area,
        Progreso
      ],
      (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ consulta: result });
        }
      }
    );
  })
  .delete((req, res) => {
    const IdConsulta = req.params.consulta;

    const peticionSql =
    'DELETE FROM consultas WHERE IdConsulta = ?';

    db.query(
      peticionSql,
      [
        IdConsulta,
      ],
      (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ consulta: result });
        }
      }
    );
  })
  .put((req, res) => {
    const IdConsulta = req.body.IdConsulta;
    const Fecha = req.body.Fecha;
    const Area = req.body.Area;
    const Progreso = req.body.Progreso;

    const peticionSql =
    'UPDATE consultas SET Fecha = ?, Area = ?, Progreso = ? WHERE IdConsulta = ?';

    db.query(
      peticionSql,
      [
        Fecha,
        Area,
        Progreso,
        IdConsulta,
      ],
      (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ consulta: result });
        }
      }
    );
  })

  module.exports = router;