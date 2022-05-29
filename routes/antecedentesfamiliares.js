const express = require('express');
let router = express.Router();
const mysql = require('mysql');

// Todas las rutas relacionadas con los antecedentes familiares.

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'practicasmaternomodelo',
});

router
  .route('/antecedentes-familiares/:id')
  .get((req, res) => {
    const IdPaciente = req.params.id;

    const peticionSql =
      'SELECT * FROM antecedentesfamiliares WHERE IdPaciente = ?';

    db.query(peticionSql, IdPaciente, (err, result) => {
      if (err) {
        res.status(400).send({ message: err });
        console.error(err);
      } else {
        res.status(200).send({ antecedentesfamiliares: result });
      }
    });

  })
  .post((req, res) => {
    const IdPaciente = req.params.id;
    const Diabetes = req.body.Diabetes;
    const Cancer = req.body.Cancer;
    const Hipertension = req.body.Hipertension;
    const VIH = req.body.VIH;
    const EnfermedadDegenerativa = req.body.EnfermedadDegenerativa;
    const EnfermedadMental = req.body.EnfermedadMental;

    const peticionSql =
      'INSERT INTO antecedentesfamiliares (IdPaciente, Diabetes, Cancer, Hipertension, VIH, EnfermedadDegenerativa, EnfermedadMental) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(
      peticionSql,
      [
        IdPaciente,
        Diabetes,
        Cancer,
        Hipertension,
        VIH,
        EnfermedadDegenerativa,
        EnfermedadMental,
      ],
      (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ antecedentesfamiliares: result });
        }
      }
    );
  })
  .put((req, res) => {
    const IdPaciente = req.params.id;
    const Diabetes = req.body.Diabetes;
    const Cancer = req.body.Cancer;
    const Hipertension = req.body.Hipertension;
    const VIH = req.body.VIH;
    const EnfermedadDegenerativa = req.body.EnfermedadDegenerativa;
    const EnfermedadMental = req.body.EnfermedadMental;

    const peticionSql =
      'UPDATE antecedentesfamiliares SET Diabetes = ?, Cancer = ?, Hipertension = ?, VIH = ?, EnfermedadDegenerativa = ?, EnfermedadMental = ? WHERE IdPaciente = ?';
    db.query(
      peticionSql,
      [
        Diabetes,
        Cancer,
        Hipertension,
        VIH,
        EnfermedadDegenerativa,
        EnfermedadMental,
        IdPaciente,
      ],
      (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ antecedentesfamiliares: result });
        }
      }
    );
  });

module.exports = router;
