const express = require('express');
let router = express.Router();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'practicasmaternomodelo',
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
    console.log(IdConsulta)

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

  module.exports = router;