const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

// Rutas
const paciente = require('./routes/paciente');
const alimentacion = require('./routes/alimentacion');
const alimentacionbebe = require('./routes/alimentacionBebe');
const antecedentesfamiliares = require('./routes/antecedentesfamiliares');
const antecedentespersonales = require('./routes/antecedentespersonales');
const mediobucalgeneral = require('./routes/mediobucalgeneral');
const erupcionydenticion = require('./routes/erupcionydenticion');
const oclusionyalineamiento = require('./routes/oclusionyalineamiento');
const habitoshigiene = require('./routes/habitoshigiene');
const tejidosblandos = require('./routes/tejidosblandos');
const habitosperniciosos = require('./routes/habitosperniciosos');
const consultas = require('./routes/consultas');
const tratamientodental = require('./routes/tratamientodental');

// ----------- MIDDLEWARES ---------------------
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ----------------------------------------------

// ----------- RUTAS ----------------

app.use('/api/v1', paciente);
app.use('/api/v1', alimentacion);
app.use('/api/v1', alimentacionbebe);
app.use('/api/v1', antecedentesfamiliares);
app.use('/api/v1', antecedentespersonales);
app.use('/api/v1', mediobucalgeneral);
app.use('/api/v1', erupcionydenticion);
app.use('/api/v1', oclusionyalineamiento);
app.use('/api/v1', habitoshigiene);
app.use('/api/v1', tejidosblandos);
app.use('/api/v1', habitosperniciosos);
app.use('/api/v1', consultas);
app.use('/api/v1', tratamientodental);

// -----------------------------------

app.listen('3001', () => {
  console.log('Corriendo en el puerto 3001');
  console.log(process.env.DB_HOST);
  console.log(process.env.DB_USER);
  console.log(process.env.DB_PASSWORD);
  console.log(process.env.DB_NAME);
});