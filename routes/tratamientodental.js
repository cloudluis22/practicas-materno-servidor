const express = require('express');
let router = express.Router();
const mysql = require('mysql');

// Todas las rutas relacionadas con el tratamiento dental.

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

router
    .route('/tratamiento-dental/:id/:numero')
    .get((req, res) => {
        const IdPaciente = req.params.id;
        const NumeroDiente = req.params.numero;

        const peticionSql = 'SELECT * FROM odontograma WHERE IdPaciente = ? AND NumeroDiente = ?';

        db.query(peticionSql, [IdPaciente, NumeroDiente], (err, result) => {
          if (err) {
            res.status(400).send({ message: err });
            console.error(err);
          } else {
            res.status(200).send({ odontograma: result });
          }
        });

  })
  .post((req, res) => {
    const IdPaciente = req.params.id;
    const NumeroDiente = req.params.numero;
    const EstadoDiente = req.body.EstadoDiente
    const IdEstado = req.body.IdEstado

    const peticionSql =
    'INSERT INTO odontograma (IdEstado, IdPaciente, NumeroDiente, EstadoDiente) VALUES (?, ?, ?, ?)';
    db.query(peticionSql, [IdEstado, IdPaciente, NumeroDiente, EstadoDiente],
      (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ odontograma: result });
        }
      })
  })
  .put((req, res) => {
    const EstadoDiente = req.body.EstadoDiente
    const IdEstado = req.body.IdEstado

    const peticionSql =
    'UPDATE odontograma SET EstadoDiente = ? WHERE IdEstado = ?';
    db.query(peticionSql, [EstadoDiente, IdEstado],
      (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ odontograma: result });
        }
      })
  })

module.exports = router;
