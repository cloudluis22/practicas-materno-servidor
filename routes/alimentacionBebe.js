const express = require('express');
let router = express.Router();
const mysql = require('mysql');

// Todas las rutas relacionadas con la alimentación del bebe, en el formulario amamantacion.

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
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
    const LblFrecuenciaAlimentacionPecho = req.body.LblFrecuenciaAlimentacionPecho;
    const TipoDeAlimentacion = req.body.TipoDeAlimentacion;
    const UsabaBiberon = req.body.UsabaBiberon;
    const LblUsabaBiberon = req.body.LblUsabaBiberon;
    const CBLecheMaterna = req.body.CBLecheMaterna;
    const CBLecheFormula = req.body.CBLecheFormula;
    const CBChocolate = req.body.CBChocolate;
    const CBAzucar = req.body.CBAzucar;
    const CBTe = req.body.CBTe;
    const ContenidoBiberonOtro = req.body.ContenidoBiberonOtro;
    const EdadYaNoTomaBiberon = req.body.EdadYaNoTomaBiberon;
    const UsabaChupon = req.body.UsabaChupon;
    const LblUsabaChupon = req.body.LblUsabaChupon;
    const CCNada = req.body.CCNada;
    const CCMiel = req.body.CCMiel;
    const ContenidoChuponOtro = req.body.ContenidoChuponOtro;   
    const EdadYaNoUsaChupon = req.body.EdadYaNoUsaChupon;
    const AlimentacionNocturna = req.body.AlimentacionNocturna;
    const ANPecho = req.body.ANPecho;
    const ANBiberon = req.body.ANBiberon;
    const ANVasoEntrenador = req.body. ANVasoEntrenador;
    const LblAlimentacionNocturna = req.body.LblAlimentacionNocturna;
    const LimpiaSuBoquita = req.body.LimpiaSuBoquita;
    const BebeConsumeSolidos = req.body.BebeConsumeSolidos;
    const LblBebeConsumeSolidos = req.body.LblBebeConsumeSolidos;

    const peticionSql =
      'INSERT INTO alimentacionbebe (IdPaciente, TomaPechoEdad, LblTomaPechoEdad, LblFrecuenciaAlimentacionPecho, TipoDeAlimentacion, UsabaBiberon, LblUsabaBiberon, CBLecheMaterna, CBLecheFormula, CBChocolate, CBAzucar, CBTe, ContenidoBiberonOtro, EdadYaNoTomaBiberon, UsabaChupon, LblUsabaChupon, CCNada, CCMiel, ContenidoChuponOtro, EdadYaNoUsaChupon, AlimentacionNocturna, ANPecho, ANBiberon, ANVasoEntrenador, LblAlimentacionNocturna, LimpiaSuBoquita, BebeConsumeSolidos, LblBebeConsumeSolidos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
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
        CBLecheMaterna,
        CBLecheFormula,
        CBChocolate,
        CBAzucar,
        CBTe,
        ContenidoBiberonOtro,  
        EdadYaNoTomaBiberon,
        UsabaChupon,
        LblUsabaChupon,
        CCNada,
        CCMiel,
        ContenidoChuponOtro,  
        EdadYaNoUsaChupon,
        AlimentacionNocturna,
        ANPecho,
        ANBiberon,
        ANVasoEntrenador,
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
    const LblFrecuenciaAlimentacionPecho = req.body.LblFrecuenciaAlimentacionPecho;
    const TipoDeAlimentacion = req.body.TipoDeAlimentacion;
    const UsabaBiberon = req.body.UsabaBiberon;
    const LblUsabaBiberon = req.body.LblUsabaBiberon;
    const CBLecheMaterna = req.body.CBLecheMaterna;
    const CBLecheFormula = req.body.CBLecheFormula;
    const CBChocolate = req.body.CBChocolate;
    const CBAzucar = req.body.CBAzucar;
    const CBTe = req.body.CBTe;
    const ContenidoBiberonOtro = req.body.ContenidoBiberonOtro;
    const EdadYaNoTomaBiberon = req.body.EdadYaNoTomaBiberon;
    const UsabaChupon = req.body.UsabaChupon;
    const LblUsabaChupon = req.body.LblUsabaChupon;
    const CCNada = req.body.CCNada;
    const CCMiel = req.body.CCMiel;
    const ContenidoChuponOtro = req.body.ContenidoChuponOtro;   
    const EdadYaNoUsaChupon = req.body.EdadYaNoUsaChupon;
    const AlimentacionNocturna = req.body.AlimentacionNocturna;
    const ANPecho = req.body.ANPecho;
    const ANBiberon = req.body.ANBiberon;
    const ANVasoEntrenador = req.body. ANVasoEntrenador;
    const LblAlimentacionNocturna = req.body.LblAlimentacionNocturna;
    const LimpiaSuBoquita = req.body.LimpiaSuBoquita;
    const BebeConsumeSolidos = req.body.BebeConsumeSolidos;
    const LblBebeConsumeSolidos = req.body.LblBebeConsumeSolidos;

    const peticionSql =
      'UPDATE alimentacionbebe SET TomaPechoEdad = ?, LblTomaPechoEdad = ?, LblFrecuenciaAlimentacionPecho = ?, TipoDeAlimentacion = ?, UsabaBiberon = ?, LblUsabaBiberon = ?, CBLecheMaterna = ?, CBLecheFormula = ?, CBChocolate = ?, CBAzucar = ?, CBTe = ?, ContenidoBiberonOtro = ?, EdadYaNoTomaBiberon = ?, UsabaChupon = ?, LblUsabaChupon = ?, CCNada = ?, CCMiel = ?, ContenidoChuponOtro = ?, EdadYaNoUsaChupon = ?, AlimentacionNocturna = ?, ANPecho = ?, ANBiberon = ?, ANVasoEntrenador = ?, LblAlimentacionNocturna = ?, LimpiaSuBoquita = ?, BebeConsumeSolidos = ?, LblBebeConsumeSolidos = ? WHERE IdPaciente = ?';
    db.query(
      peticionSql,
      [
        TomaPechoEdad,
        LblTomaPechoEdad,
        LblFrecuenciaAlimentacionPecho,
        TipoDeAlimentacion,
        UsabaBiberon,
        LblUsabaBiberon,
        CBLecheMaterna,
        CBLecheFormula,
        CBChocolate,
        CBAzucar,
        CBTe,
        ContenidoBiberonOtro,  
        EdadYaNoTomaBiberon,
        UsabaChupon,
        LblUsabaChupon,
        CCNada,
        CCMiel,
        ContenidoChuponOtro,  
        EdadYaNoUsaChupon,
        AlimentacionNocturna,
        ANPecho,
        ANBiberon,
        ANVasoEntrenador,
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
