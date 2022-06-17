const express = require('express');
let router = express.Router();
const mysql = require('mysql');

// Todas las rutas relacionadas con la tabla habitos perniciosos.

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

router
  .route('/habitos-perniciosos/:id')
  .get((req, res) => {
    const IdPaciente = req.params.id;

    const peticionSql = 'SELECT * FROM habitosperniciosos WHERE IdPaciente = ?';

    db.query(peticionSql, IdPaciente, (err, result) => {
      if (err) {
        res.status(400).send({ message: err });
        console.error(err);
      } else {
        res.status(200).send({ habitosperniciosos: result });
      }
    });
  })
  .post((req, res) => {
    const IdPaciente = req.params.id;
    const RespiradoBucal = req.body.RespiradoBucal;
    const SuccionDigital = req.body.SuccionDigital;
    const SuccionChupete = req.body.SuccionChupete;
    const SuccionLabial = req.body.SuccionLabial;
    const MorderseLabio = req.body.MorderseLabio;
    const MorderseLasUnas = req.body.MorderseLasUnas;
    const DeglucionAtipica = req.body.DeglucionAtipica;
    const LblOtros = req.body.LblOtros;

    const peticionSql =
      'INSERT INTO habitosperniciosos (IdPaciente, RespiradoBucal, SuccionDigital, SuccionChupete, SuccionLabial, MorderseLabio, MorderseLasUnas, DeglucionAtipica, LblOtros) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(
      peticionSql,
      [
        IdPaciente,
        RespiradoBucal,
        SuccionDigital,
        SuccionChupete,
        SuccionLabial,
        MorderseLabio,
        MorderseLasUnas,
        DeglucionAtipica,
        LblOtros,
      ],
      (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ habitosperniciosos: result });
        }
      }
    );
  })
  .put((req, res) => {
    const IdPaciente = req.params.id;
    const RespiradoBucal = req.body.RespiradoBucal;
    const SuccionDigital = req.body.SuccionDigital;
    const SuccionChupete = req.body.SuccionChupete;
    const SuccionLabial = req.body.SuccionLabial;
    const MorderseLabio = req.body.MorderseLabio;
    const MorderseLasUnas = req.body.MorderseLasUnas;
    const DeglucionAtipica = req.body.DeglucionAtipica;
    const LblOtros = req.body.LblOtros;

    const peticionSql =
      'UPDATE habitosperniciosos SET  RespiradoBucal = ?, SuccionDigital = ?, SuccionChupete = ?, SuccionLabial = ?, MorderseLabio = ?, MorderseLasUnas = ?, DeglucionAtipica = ?, LblOtros = ? WHERE IdPaciente = ?';
    db.query(
      peticionSql,
      [
        RespiradoBucal,
        SuccionDigital,
        SuccionChupete,
        SuccionLabial,
        MorderseLabio,
        MorderseLasUnas,
        DeglucionAtipica,
        LblOtros,
        IdPaciente,
      ],
      (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ habitosperniciosos: result });
        }
      }
    );
  });

module.exports = router;
