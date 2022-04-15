const express = require('express');
let router = express.Router();
const mysql = require('mysql');

// Todas las rutas relacionadas con la alimentación del bebe, en el formulario amamantacion.

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'practicasmaternomodelo',
});

router
  .route('/alimentacionbebe/:id')
  .get((req, res) => {
    const IdPaciente = req.params.id;

    const peticionSql = 'SELECT * FROM alimentacionbebe WHERE IdPaciente = ?';

    db.query(peticionSql, IdPaciente, (err, result) => {
      if (err) {
        res.status(400).send({ message: err });
        console.error(err);
      } else {
        res.status(200).send({ alimentacionbebe: result });
      }
    });
  })
  .post((req, res) => {
    const IdPaciente = req.params.id;
    const TomaPechoEdad = req.body.TomaPechoEdad;
    const FrecuenciaAlimentacionPecho = req.body.FrecuenciaAlimentacionPecho;
    const TipoDeAlimentacion = req.body.TipoDeAlimentacion;
    const UsabaBiberon = req.body.UsabaBiberon;
    const ContenidoBiberon = req.body.ContenidoBiberon;
    const EdadYaNoTomaBiberon = req.body.EdadYaNoTomaBiberon;
    const LblUsabaChupon = req.body.LblUsabaChupon;
    const ContenidoChupon = req.body.ContenidoChupon;
    const EdadYaNoUsaChupon = req.body.EdadYaNoUsaChupon;
    const LblAlimentacionNocturna = req.body.LblAlimentacionNocturna;
    const LimpiaSuBoquita = req.body.LimpiaSuBoquita;
    const LblBebeConsumeSolidos = req.body.LblBebeConsumeSolidos;

    const peticionSql =
      'INSERT INTO alimentacionbebe (IdPaciente, TomaPechoEdad, FrecuenciaAlimentacionPecho, TipoDeAlimentacion,  UsabaBiberon, ContenidoBiberon, EdadYaNoTomaBiberon, UsabaChupon, ContenidoChupon, EdadYaNoUsaChupon,  AlimentacionNocturna, LimpiaSuBoquita, BebeConsumeSolidos,) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(
      peticionSql,
      [
        IdPaciente,
        TomaPechoEdad,
        FrecuenciaAlimentacionPecho,
        TipoDeAlimentacion,
        UsabaBiberon,
        ContenidoBiberon,
        EdadYaNoTomaBiberon,
        LblUsabaChupon,
        ContenidoChupon,
        EdadYaNoUsaChupon,
        LblAlimentacionNocturna,
        LimpiaSuBoquita,
        LblBebeConsumeSolidos,
      ],
      (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ alimentacion: result });
        }
      }
    );
  })
  .put((req, res) => {
    const IdPaciente = req.params.id;
    const TomaPechoEdad = req.body.TomaPechoEdad;
    const FrecuenciaAlimentacionPecho = req.body.FrecuenciaAlimentacionPecho;
    const TipoDeAlimentacion = req.body.TipoDeAlimentacion;
    const UsabaBiberon = req.body.UsabaBiberon;
    const ContenidoBiberon = req.body.ContenidoBiberon;
    const EdadYaNoTomaBiberon = req.body.EdadYaNoTomaBiberon;
    const LblUsabaChupon = req.body.LblUsabaChupon;
    const ContenidoChupon = req.body.ContenidoChupon;
    const EdadYaNoUsaChupon = req.body.EdadYaNoUsaChupon;
    const LblAlimentacionNocturna = req.body.LblAlimentacionNocturna;
    const LimpiaSuBoquita = req.body.LimpiaSuBoquita;
    const LblBebeConsumeSolidos = req.body.LblBebeConsumeSolidos;

    const peticionSql =
      'UPDATE alimentacionbebe SET IdPaciente = ?, TomaPechoEdad = ?, FrecuenciaAlimentacionPecho = ? , TipoDeAlimentacion = ?, UsabaBiberon = ?, ContenidoBiberon = ?, EdadYaNoTomaBiberon = ?, UsabaChupon = ?, ContenidoChupon = ?, EdadYaNoUsaChupon = ?, AlimentacionNocturna = ?, LimpiaSuBoquita = ?, BebeConsumeSolidos = ? WHERE IdPaciente = ?';
    db.query(
      peticionSql,
      [
        TomaPechoEdad,
        FrecuenciaAlimentacionPecho,
        TipoDeAlimentacion,
        UsabaBiberon,
        ContenidoBiberon,
        EdadYaNoTomaBiberon,
        LblUsabaChupon,
        ContenidoChupon,
        EdadYaNoUsaChupon,
        LblAlimentacionNocturna,
        LimpiaSuBoquita,
        LblBebeConsumeSolidos,
        IdPaciente,
      ],
      (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ alimentacion: result });
        }
      }
    );
  });

module.exports = router;
