const express = require('express');
let router = express.Router();
const mysql = require('mysql');

// Todas las rutas relacionadas con los habitos de higiene.

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'practicasmaternomodelo',
});

router
  .route('/habitos-higiene/:id')
  .get((req, res) => {
    const IdPaciente = req.params.id;

    const peticionSql = 'SELECT * FROM habitoshigiene WHERE IdPaciente = ?';

    db.query(peticionSql, IdPaciente, (err, result) => {
      if (err) {
        res.status(400).send({ message: err });
        console.error(err);
      } else {
        res.status(200).send({ habitoshigiene: result });
      }
    });
  })
  .post((req, res) => {
    const IdPaciente = req.params.id;
    const EncargadoCepillado = req.body.EncargadoCepillado;
    const CepilladosDiarios = req.body.CepilladosDiarios;
    const MarcaPastaDental = req.body.MarcaPastaDental;
    const CepilladoDiarioDormir = req.body.CepilladoDiarioDormir;
    const EnjuagueBucal = req.body.EnjuagueBucal;
    const HiloDental = req.body.HiloDental;

    const peticionSql =
      'INSERT INTO habitoshigiene (IdPaciente, EncargadoCepillado, CepilladosDiarios, MarcaPastaDental, CepilladoDiarioDormir, EnjuagueBucal, HiloDental) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(
      peticionSql,
      [
        IdPaciente,
        EncargadoCepillado,
        CepilladosDiarios,
        MarcaPastaDental,
        CepilladoDiarioDormir,
        EnjuagueBucal,
        HiloDental,
      ],
      (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ habitoshigiene: result });
        }
      }
    );
  })
  .put((req, res) => {
    const IdPaciente = req.params.id;
    const EncargadoCepillado = req.body.EncargadoCepillado;
    const CepilladosDiarios = req.body.CepilladosDiarios;
    const MarcaPastaDental = req.body.MarcaPastaDental;
    const CepilladoDiarioDormir = req.body.CepilladoDiarioDormir;
    const EnjuagueBucal = req.body.EnjuagueBucal;
    const HiloDental = req.body.HiloDental;

    const peticionSql =
      'UPDATE habitoshigiene SET EncargadoCepillado = ?, CepilladosDiarios = ?, MarcaPastaDental = ?, CepilladoDiarioDormir = ?, EnjuagueBucal = ?, HiloDental = ? WHERE IdPaciente = ?';
    db.query(
      peticionSql,
      [
        EncargadoCepillado,
        CepilladosDiarios,
        MarcaPastaDental,
        CepilladoDiarioDormir,
        EnjuagueBucal,
        HiloDental,
        IdPaciente,
      ],
      (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ habitoshigiene: result });
        }
      }
    );
  });

module.exports = router;
