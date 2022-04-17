const express = require('express');
let router = express.Router();
const mysql = require('mysql');

// Todas las rutas relacionadas con el medio bucal general.

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'practicasmaternomodelo',
});

router
  .route('/medio-bucal-general/:id')
  .get((req, res) => {
    const IdPaciente = req.params.id;

    const peticionSql = 'SELECT * FROM mediobucalgeneral WHERE IdPaciente = ?';

    db.query(peticionSql, IdPaciente, (err, result) => {
      if (err) {
        res.status(400).send({ message: err });
        console.error(err);
      } else {
        res.status(200).send({ mediobucalgeneral: result });
      }
    });
  })
  .post((req, res) => {
    const IdPaciente = req.params.id;
    const Higiene = req.body.Higiene;
    const PlacaDentobacteriana = req.body.PlacaDentobacteriana;
    const PHSaliva = req.body.PHSaliva;
    const Localizacion = req.body.Localizacion;
    const CalculoDental = req.body.CalculoDental;

    const peticionSql =
      'INSERT INTO mediobucalgeneral (IdPaciente, Higiene, PlacaDentobacteriana, PHSaliva, Localizacion, CalculoDental) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(
      peticionSql,
      [
        IdPaciente,
        Higiene,
        PlacaDentobacteriana,
        PHSaliva,
        Localizacion,
        CalculoDental,
      ],
      (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ mediobucalgeneral: result });
        }
      }
    );
  })
  .put((req, res) => {
    const IdPaciente = req.params.id;
    const Higiene = req.body.Higiene;
    const PlacaDentobacteriana = req.body.PlacaDentobacteriana;
    const PHSaliva = req.body.PHSaliva;
    const Localizacion = req.body.Localizacion;
    const CalculoDental = req.body.CalculoDental;

    const peticionSql =
      'UPDATE mediobucalgeneral SET Higiene = ?, PlacaDentobacteriana = ?, PHSaliva = ?, Localizacion = ?, CalculoDental = ? WHERE IdPaciente = ?';
    db.query(
      peticionSql,
      [
        Higiene,
        PlacaDentobacteriana,
        PHSaliva,
        Localizacion,
        CalculoDental,
        IdPaciente,
      ],
      (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ mediobucalgeneral: result });
        }
      }
    );
  });

module.exports = router;
