const express = require('express');
let router = express.Router();
const mysql = require('mysql');

// Todas las rutas relacionadas con los tejidos blandos.

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'practicasmaternomodelo',
});

router
  .route('/tejidos-blandos/:id')
  .get((req, res) => {
    const IdPaciente = req.params.id;

    const peticionSql = 'SELECT * FROM tejidosblandos WHERE IdPaciente = ?';

    db.query(peticionSql, IdPaciente, (err, result) => {
      if (err) {
        res.status(400).send({ message: err });
        console.error(err);
      } else {
        res.status(200).send({ tejidosblandos: result });
      }
    });
  })
  .post((req, res) => {
    const IdPaciente = req.params.id;
    const Lengua = req.body.Lengua;
    const FrenilloLingual = req.body.FrenilloLingual;
    const Labios = req.body.Labios;
    const FrenilloLabial = req.body.FrenilloLabial;
    const PaladarDuro = req.body.PaladarDuro;
    const PaladarBlando = req.body.PaladarBlando;
    const PisoBoca = req.body.PisoBoca;
    const MucosaYugal = req.body.MucosaYugal;
    const MucosaMasticatoria = req.body.MucosaMasticatoria;
    const Otros = req.body.Otros;

    const peticionSql =
      'INSERT INTO tejidosblandos (idPaciente, Lengua, FrenilloLingual, Labios, FrenilloLabial, PaladarDuro, PaladarBlando, PisoBoca, MucosaYugal, MucosaMasticatoria, Otros) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(
      peticionSql,
      [
        IdPaciente,
        Lengua,
        FrenilloLingual,
        Labios,
        FrenilloLabial,
        PaladarDuro,
        PaladarBlando,
        PisoBoca,
        MucosaYugal,
        MucosaMasticatoria,
        Otros,
      ],
      (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ tejidosblandos: result });
        }
      }
    );
  })
  .put((req, res) => {
    const IdPaciente = req.params.id;
    const Lengua = req.body.Lengua;
    const FrenilloLingual = req.body.FrenilloLingual;
    const Labios = req.body.Labios;
    const FrenilloLabial = req.body.FrenilloLabial;
    const PaladarDuro = req.body.PaladarDuro;
    const PaladarBlando = req.body.PaladarBlando;
    const PisoBoca = req.body.PisoBoca;
    const MucosaYugal = req.body.MucosaYugal;
    const MucosaMasticatoria = req.body.MucosaMasticatoria;
    const Otros = req.body.Otros;

    const peticionSql =
      'UPDATE tejidosblandos SET Lengua = ?, FrenilloLingual = ?, Labios = ?, FrenilloLabial = ?, PaladarDuro = ?, PaladarBlando = ?, PisoBoca = ?, MucosaYugal = ?, MucosaMasticatoria = ?, Otros = ? WHERE idPaciente = ?';
    db.query(
      peticionSql,
      [
        Lengua,
        FrenilloLingual,
        Labios,
        FrenilloLabial,
        PaladarDuro,
        PaladarBlando,
        PisoBoca,
        MucosaYugal,
        MucosaMasticatoria,
        Otros,
        IdPaciente,
      ],
      (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ tejidosblandos: result });
        }
      }
    );
  });

module.exports = router;
