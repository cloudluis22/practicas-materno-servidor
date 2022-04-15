const express = require('express');
let router = express.Router();
const mysql = require('mysql');

// Todas las rutas relacionadas con la alimentación del paciente.

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'practicasmaternomodelo',
});

router
  .route('/alimentacion/:id')
  .get((req, res) => {
    const IdPaciente = req.params.id;

    const peticionSql = 'SELECT * FROM alimentacion WHERE IdPaciente = ?';

    db.query(peticionSql, IdPaciente, (err, result) => {
      if (err) {
        res.status(400).send({ message: err });
        console.error(err);
      } else {
        res.status(200).send({ alimentacion: result });
      }
    });
  })
  .post((req, res) => {
    const IdPaciente = req.params.id;
    const ComidasDiarias = req.body.ComidasDiarias;
    const Carne = req.body.Carne;
    const Leche = req.body.Leche;
    const Pan = req.body.Pan;
    const Frutas = req.body.Frutas;
    const Yoghurt = req.body.Yoghurt;
    const Jugos = req.body.Jugos;
    const Vegetales = req.body.Vegetales;
    const Dulces = req.body.Dulces;
    const Gomitas = req.body.Gomitas;
    const Huevo = req.body.Huevo;
    const Galletas = req.body.Galletas;
    const Chocolate = req.body.Chocolate;
    const Pescado = req.body.Pescado;
    const Mermelada = req.body.Mermelada;
    const Chicle = req.body.Chicle;
    const Agua = req.body.Agua;
    const Yakult = req.body.Yakult;
    const Te = req.body.Te;

    const peticionSql =
      'INSERT INTO alimentacion (IdPaciente, ComidasDiarias, Carne, Leche, Pan, Frutas, Yoghurt, Jugos, Vegetales, Dulces, Gomitas, Huevo, Galletas, Chocolate, Pescado, Mermelada, Chicle, Agua, Yakult, Te) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(
      peticionSql,
      [
        IdPaciente,
        ComidasDiarias,
        Carne,
        Leche,
        Pan,
        Frutas,
        Yoghurt,
        Jugos,
        Vegetales,
        Dulces,
        Gomitas,
        Huevo,
        Galletas,
        Chocolate,
        Pescado,
        Mermelada,
        Chicle,
        Agua,
        Yakult,
        Te,
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
    const ComidasDiarias = req.body.ComidasDiarias;
    const Carne = req.body.Carne;
    const Leche = req.body.Leche;
    const Pan = req.body.Pan;
    const Frutas = req.body.Frutas;
    const Yoghurt = req.body.Yoghurt;
    const Jugos = req.body.Jugos;
    const Vegetales = req.body.Vegetales;
    const Dulces = req.body.Dulces;
    const Gomitas = req.body.Gomitas;
    const Huevo = req.body.Huevo;
    const Galletas = req.body.Galletas;
    const Chocolate = req.body.Chocolate;
    const Pescado = req.body.Pescado;
    const Mermelada = req.body.Mermelada;
    const Chicle = req.body.Chicle;
    const Agua = req.body.Agua;
    const Yakult = req.body.Yakult;
    const Te = req.body.Te;

    const peticionSql =
      'UPDATE alimentacion SET ComidasDiarias = ?, Carne = ?, Leche = ?, Pan = ?, Frutas = ?, Yoghurt = ?, Jugos = ?, Vegetales = ?, Dulces = ?, Gomitas = ?, Huevo = ?, Galletas = ?, Chocolate = ?, Pescado = ?, Mermelada = ?, Chicle = ?, Agua = ?, Yakult = ?, Te = ? WHERE IdPaciente = ?';
    db.query(
      peticionSql,
      [
        ComidasDiarias,
        Carne,
        Leche,
        Pan,
        Frutas,
        Yoghurt,
        Jugos,
        Vegetales,
        Dulces,
        Gomitas,
        Huevo,
        Galletas,
        Chocolate,
        Pescado,
        Mermelada,
        Chicle,
        Agua,
        Yakult,
        Te,
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
