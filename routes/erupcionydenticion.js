const express = require('express');
let router = express.Router();
const mysql = require('mysql');

// Todas las rutas relacionadas con los antecedentes familiares.

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

router
  .route('/erupcion-y-denticion/:id')
  .get((req, res) => {
    const IdPaciente = req.params.id;

    const peticionSql = 'SELECT * FROM erupcionydenticion WHERE IdPaciente = ?';

    db.query(peticionSql, IdPaciente, (err, result) => {
      if (err) {
        res.status(400).send({ message: err });
        console.error(err);
      } else {
        res.status(200).send({ erupcionydenticion: result });
      }
    });
  })
  .post((req, res) => {
    const IdPaciente = req.params.id;
    const EdadDental = req.body.EdadDental;
    const SecuenciaAnormal = req.body.SecuenciaAnormal;
    const PerdidaPrematura = req.body.PerdidaPrematura;
    const RetencionProlongada = req.body.RetencionProlongada;
    const ErupcionRetardada = req.body.ErupcionRetardada;
    const FaltaContactoProximal = req.body.FaltaContactoProximal;
    const HipoplasiaIncisivo = req.body.HipoplasiaIncisivo;
    const HipoplasiaEnDeciduos = req.body.HipoplasiaEnDeciduos;
    const AmeloDentinogenesisImperfecta = req.body.AmeloDentinogenesisImperfecta;
    const Fluorosis = req.body.Fluorosis;
    const Otros = req.body.Otros;

    const peticionSql =
      'INSERT INTO erupcionydenticion (IdPaciente, EdadDental, SecuenciaAnormal, PerdidaPrematura, RetencionProlongada, ErupcionRetardada, FaltaContactoProximal, HipoplasiaIncisivo, HipoplasiaEnDeciduos, AmeloDentinogenesisImperfecta, Fluorosis, Otros) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(
      peticionSql,
      [
        IdPaciente,
        EdadDental,
        SecuenciaAnormal,
        PerdidaPrematura,
        RetencionProlongada,
        ErupcionRetardada,
        FaltaContactoProximal,
        HipoplasiaIncisivo,
        HipoplasiaEnDeciduos,
        AmeloDentinogenesisImperfecta,
        Fluorosis,
        Otros,
      ],
      (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ erupcionydenticion: result });
        }
      }
    );
  })
  .put((req, res) => {
    const IdPaciente = req.params.id;
    const EdadDental = req.body.EdadDental;
    const SecuenciaAnormal = req.body.SecuenciaAnormal;
    const PerdidaPrematura = req.body.PerdidaPrematura;
    const RetencionProlongada = req.body.RetencionProlongada;
    const ErupcionRetardada = req.body.ErupcionRetardada;
    const FaltaContactoProximal = req.body.FaltaContactoProximal;
    const HipoplasiaIncisivo = req.body.HipoplasiaIncisivo;
    const HipoplasiaEnDeciduos = req.body.HipoplasiaEnDeciduos;
    const AmeloDentinogenesisImperfecta = req.body.AmeloDentinogenesisImperfecta;
    const Fluorosis = req.body.Fluorosis;
    const Otros = req.body.Otros;

    const peticionSql =
      'UPDATE erupcionydenticion SET EdadDental = ?, SecuenciaAnormal = ?, PerdidaPrematura = ?, RetencionProlongada = ?, ErupcionRetardada = ?, FaltaContactoProximal = ?, HipoplasiaIncisivo = ?, HipoplasiaEnDeciduos = ?, AmeloDentinogenesisImperfecta = ?, Fluorosis = ?, Otros = ? WHERE IdPaciente = ?;';
    db.query(
      peticionSql,
      [
        EdadDental,
        SecuenciaAnormal,
        PerdidaPrematura,
        RetencionProlongada,
        ErupcionRetardada,
        FaltaContactoProximal,
        HipoplasiaIncisivo,
        HipoplasiaEnDeciduos,
        AmeloDentinogenesisImperfecta,
        Fluorosis,
        Otros,
        IdPaciente,
      ],
      (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ erupcionydenticion: result });
        }
      }
    );
  });

module.exports = router;
