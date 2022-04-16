const express = require('express');
let router = express.Router();
const mysql = require('mysql');

// Todas las rutas relacionadas con la tabla habitos perniciosos.

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'practicasmaternomodelo',
});

router
  .route('/oclusion-y-alineamiento/:id')
  .get((req, res) => {
    const IdPaciente = req.params.id;

    const peticionSql =
      'SELECT * FROM oclusionyalinamiento WHERE IdPaciente = ?';

    db.query(peticionSql, IdPaciente, (err, result) => {
      if (err) {
        res.status(400).send({ message: err });
        console.error(err);
      } else {
        res.status(200).send({ oclusionyalinamiento: result });
      }
    });
  })
  .post((req, res) => {
    const IdPaciente = req.params.id;
    const LineaMedia = req.body.LineaMedia;
    const PlanoTerminal = req.body.PlanoTerminal;
    const ClaseMolar = req.body.ClaseMolar;
    const EspaciosPrimates = req.body.EspaciosPrimates;
    const EspaciosFisiologicos = req.body.EspaciosFisiologicos;
    const Traslape = req.body.Traslape;
    const Sobremordida = req.body.Sobremordida;
    const MordidaAbierta = req.body.MordidaAbierta;
    const MordidaProfunda = req.body.MordidaProfunda;
    const MalposicionDentaria = req.body.MalposicionDentaria;
    const Diastema = req.body.Diastema;

    const peticionSql =
      'INSERT INTO oclusionyalinamiento (IdPaciente, LineaMedia, PlanoTerminal, ClaseMolar, EspaciosPrimates, EspaciosFisiologicos, Traslape, Sobremordida, MordidaAbierta, MordidaProfunda, MalposicionDentaria, Diastema) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(
      peticionSql,
      [
        IdPaciente,
        LineaMedia,
        PlanoTerminal,
        ClaseMolar,
        EspaciosPrimates,
        EspaciosFisiologicos,
        Traslape,
        Sobremordida,
        MordidaAbierta,
        MordidaProfunda,
        MalposicionDentaria,
        Diastema,
      ],
      (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ oclusionyalinamiento: result });
        }
      }
    );
  })
  .put((req, res) => {
    const IdPaciente = req.params.id;
    const LineaMedia = req.body.LineaMedia;
    const PlanoTerminal = req.body.PlanoTerminal;
    const ClaseMolar = req.body.ClaseMolar;
    const EspaciosPrimates = req.body.EspaciosPrimates;
    const EspaciosFisiologicos = req.body.EspaciosFisiologicos;
    const Traslape = req.body.Traslape;
    const Sobremordida = req.body.Sobremordida;
    const MordidaAbierta = req.body.MordidaAbierta;
    const MordidaProfunda = req.body.MordidaProfunda;
    const MalposicionDentaria = req.body.MalposicionDentaria;
    const Diastema = req.body.Diastema;

    const peticionSql =
      'UPDATE oclusionyalinamiento SET LineaMedia = ?, PlanoTerminal = ?, ClaseMolar = ?, EspaciosPrimates = ?, EspaciosFisiologicos = ?, Traslape = ?, Sobremordida = ?, MordidaAbierta = ?, MordidaProfunda = ?, MalposicionDentaria = ?, Diastema = ? WHERE IdPaciente = ?';
    db.query(
      peticionSql,
      [
        LineaMedia,
        PlanoTerminal,
        ClaseMolar,
        EspaciosPrimates,
        EspaciosFisiologicos,
        Traslape,
        Sobremordida,
        MordidaAbierta,
        MordidaProfunda,
        MalposicionDentaria,
        Diastema,
        IdPaciente,
      ],
      (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ oclusionyalinamiento: result });
        }
      }
    );
  });

module.exports = router;
