const express = require('express');
const app = express();
const cors = require('cors');

// Rutas
const paciente = require('./routes/paciente');
const alimentacion = require('./routes/alimentacion');
const alimentacionbebe = require('./routes/alimentacionBebe');
const antecedentesfamiliares = require('./routes/antecedentesfamiliares');
const antecedentespersonales = require('./routes/antecedentespersonales');
const mediobucalgeneral = require('./routes/mediobucalgeneral');
const erupcionydenticion = require('./routes/erupcionydenticion');
const oclusionyalinamiento = require('./routes/oclusionyalinamiento');

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
app.use('/api/v1', oclusionyalinamiento)

// -----------------------------------

app.listen('3001', () => {
  console.log('Corriendo en el puerto 3001');
});
