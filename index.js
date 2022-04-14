const express = require('express');
const app = express();
const cors = require('cors');

// Rutas
const paciente = require('./routes/paciente');

// ----------- MIDDLEWARES ---------------------
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ----------------------------------------------

// ----------- RUTAS ----------------

app.use('/api/v1', paciente);

// -----------------------------------

app.get('/api/v1/obtener-alimentacion/:id', (req, res) => {
  const IdPaciente = req.params.id;
  const peticionSql = 'SELECT * FROM paciente WHERE IdPaciente = ? ';

  db.query(peticionSql, IdPaciente, (err, result) => {
    if (err) {
      res.status(400).send({ message: err });
      console.error(err);
    } else {
      res.status(200).send({ paciente: result });
    }
  });
});

app.listen('3001', () => {
  console.log('Corriendo en el puerto 3001');
});
