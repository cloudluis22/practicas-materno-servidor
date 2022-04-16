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
  .route('/alimentacion-bebe/:id')
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
    const LblTomaPechoEdad = req.body.LblTomaPechoEdad;
    const FrecuenciaAlimentacionPecho = req.body.FrecuenciaAlimentacionPecho;
    const LblFrecuenciaAlimentacionPecho =
      req.body.LblFrecuenciaAlimentacionPecho;
    const TipoDeAlimentacion = req.body.TipoDeAlimentacion;
    const UsabaBiberon = req.body.UsabaBiberon;
    const LblUsabaBiberon = req.body.LblUsabaBiberon;
    const ContenidoBiberon = req.body.ContenidoBiberon;
    const EdadYaNoTomaBiberon = req.body.EdadYaNoTomaBiberon;
    const UsabaChupon = req.body.UsabaChupon;
    const LblUsabaChupon = req.body.LblUsabaChupon;
    const ContenidoChupon = req.body.ContenidoChupon;
    const EdadYaNoUsaChupon = req.body.EdadYaNoUsaChupon;
    const AlimentacionNocturna = req.body.AlimentacionNocturna;
    const LblAlimentacionNocturna = req.body.LblAlimentacionNocturna;
    const LimpiaSuBoquita = req.body.LimpiaSuBoquita;
    const BebeConsumeSolidos = req.body.BebeConsumeSolidos;
    const LblBebeConsumeSolidos = req.body.LblBebeConsumeSolidos;

    const peticionSql =
      'INSERT INTO alimentacionbebe (IdPaciente, TomaPechoEdad, LblTomaPechoEdad, LblFrecuenciaAlimentacionPecho, TipoDeAlimentacion, UsabaBiberon, LblUsabaBiberon, ContenidoBiberon, EdadYaNoTomaBiberon, UsabaChupon, LblUsabaChupon, ContenidoChupon, EdadYaNoUsaChupon, AlimentacionNocturna, LblAlimentacionNocturna, LimpiaSuBoquita, BebeConsumeSolidos, LblBebeConsumeSolidos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(
      peticionSql,
      [
        IdPaciente,
        TomaPechoEdad,
        LblTomaPechoEdad,
        LblFrecuenciaAlimentacionPecho,
        TipoDeAlimentacion,
        UsabaBiberon,
        LblUsabaBiberon,
        ContenidoBiberon,
        EdadYaNoTomaBiberon,
        UsabaChupon,
        LblUsabaChupon,
        ContenidoChupon,
        EdadYaNoUsaChupon,
        AlimentacionNocturna,
        LblAlimentacionNocturna,
        LimpiaSuBoquita,
        BebeConsumeSolidos,
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
    const LblTomaPechoEdad = req.body.LblTomaPechoEdad;
    const FrecuenciaAlimentacionPecho = req.body.FrecuenciaAlimentacionPecho;
    const LblFrecuenciaAlimentacionPecho =
      req.body.LblFrecuenciaAlimentacionPecho;
    const TipoDeAlimentacion = req.body.TipoDeAlimentacion;
    const UsabaBiberon = req.body.UsabaBiberon;
    const LblUsabaBiberon = req.body.LblUsabaBiberon;
    const ContenidoBiberon = req.body.ContenidoBiberon;
    const EdadYaNoTomaBiberon = req.body.EdadYaNoTomaBiberon;
    const UsabaChupon = req.body.UsabaChupon;
    const LblUsabaChupon = req.body.LblUsabaChupon;
    const ContenidoChupon = req.body.ContenidoChupon;
    const EdadYaNoUsaChupon = req.body.EdadYaNoUsaChupon;
    const AlimentacionNocturna = req.body.AlimentacionNocturna;
    const LblAlimentacionNocturna = req.body.LblAlimentacionNocturna;
    const LimpiaSuBoquita = req.body.LimpiaSuBoquita;
    const BebeConsumeSolidos = req.body.BebeConsumeSolidos;
    const LblBebeConsumeSolidos = req.body.LblBebeConsumeSolidos;

    const peticionSql =
      'UPDATE alimentacionbebe SET TomaPechoEdad = ?, LblTomaPechoEdad = ?, LblFrecuenciaAlimentacionPecho = ?, TipoDeAlimentacion = ?, UsabaBiberon = ?, LblUsabaBiberon = ?, ContenidoBiberon = ?, EdadYaNoTomaBiberon = ?, UsabaChupon = ?, LblUsabaChupon = ?, ContenidoChupon = ?, EdadYaNoUsaChupon = ?, AlimentacionNocturna = ?, LblAlimentacionNocturna = ?, LimpiaSuBoquita = ?, BebeConsumeSolidos = ?, LblBebeConsumeSolidos = ? WHERE IdPaciente = ?';
    db.query(
      peticionSql,
      [
        TomaPechoEdad,
        LblTomaPechoEdad,
        LblFrecuenciaAlimentacionPecho,
        TipoDeAlimentacion,
        UsabaBiberon,
        LblUsabaBiberon,
        ContenidoBiberon,
        EdadYaNoTomaBiberon,
        UsabaChupon,
        LblUsabaChupon,
        ContenidoChupon,
        EdadYaNoUsaChupon,
        AlimentacionNocturna,
        LblAlimentacionNocturna,
        LimpiaSuBoquita,
        BebeConsumeSolidos,
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
