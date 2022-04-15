const express = require('express');
let router = express.Router();
const mysql = require('mysql');

// Todas las rutas relacionadas con antecedentes personales.

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'practicasmaternomodelo',
});

router
  .route('/antecedentespersonales/:id')
  .get((req, res) => {
    const IdPaciente = req.params.id;

    const peticionSql = 'SELECT * FROM antecedentespersonales WHERE IdPaciente = ?';

    db.query(peticionSql, IdPaciente, (err, result) => {
      if (err) {
        res.status(400).send({ message: err });
        console.error(err);
      } else {
        res.status(200).send({ antecedentespersonales: result });
      }
    });
  })
  .post((req, res) => {
    const IdPaciente = req.params.id;
    const BuenaSalud = req.body.BuenaSalud;
    const Hospitalizado = req.body.Hospitalizado;
    const LblRealizaDeporte = req.body.LblRealizaDeporte;
    const LblAlergiasMedAlim = req.body.LblAlergiasMedAlim;
    const LblTrastornoMentalEmocional = req.body.LblTrastornoMentalEmocional;
    const DificultadesEscolares = req.body.DificultadesEscolares;
    const RespiraPorBoca = req.body.RespiraPorBoca;
    const ApneaRoncar = req.body.ApneaRoncar;
    const ChupaLabioDedos = req.body.ChupaLabioDedos;
    const LblChupaLabioDedos = req.body.LblChupaLabioDedos;
    const Asma = req.body.Asma;
    const Sarampion = req.body.Sarampion;
    const FiebreReumatica = req.body.FiebreReumatica;
    const PaladarHendido = req.body.PaladarHendido;
    const TosFerina = req.body.TosFerina;
    const Poliomelitis = req.body.Poliomelitis;
    const Epilepsia = req.body.Epilepsia;
    const Escarlatina = req.body.Escarlatina;
    const Tuberculosis = req.body.Tuberculosis;
    const EnfermedadCardiaca = req.body.EnfermedadCardiaca;
    const Varicela = req.body.Varicela;
    const Paperas = req.body.Paperas;
    const Hepatitis = req.body.Hepatitis;
    const Difteria = req.body.Difteria;
    const Tifoidea = req.body.Tifoidea;
    const EnfermedadRenal = req.body.EnfermedadRenal;
    const Hemofilia = req.body.Hemofilia;
    const TrastornoHepatico = req.body.TrastornoHepatico;
    const Diabetes = req.body.Diabetes;
    const Reflujo = req.body.Reflujo;
    const TrastornoDeLenguaje = req.body.TrastornoDeLenguaje;
    const Otros = req.body.Otros;
    const TratamientosActivos = req.body.TratamientosActivos;
    const LblTomaMedicamentos = req.body.LblTomaMedicamentos;
    const LblMadreMedicamentoEmbarazo = req.body.LblMadreMedicamentoEmbarazo;
    const AccidentesEmbarazo = req.body.AccidentesEmbarazo;
    const TipoParto = req.body.TipoParto;
    const LblDificultadNacimiento = req.body.LblDificultadNacimiento;
    const LblAnomaliaCongenitaNacimiento = req.body.LblAnomaliaCongenitaNacimiento;
    const HaSidoAnestesiado = req.body.HaSidoAnestesiado;
    const LblReaccionAnestesia = req.body.LblReaccionAnestesia;

    const peticionSql =
      'INSERT INTO antecedentespersonales (IdPaciente, BuenaSalud, Hospitalizado, RealizaDeporte, AlergiasMedAlim, TrastornoMentalEmocional, DificultadesEscolares, RespiraPorBoca, ApneaRoncar, ChupaLabioDedos, Asma, Sarampion, FiebreReumatica, PaladarHendido, TosFerina, Poliomelitis, Epilepsia, Escarlatina, Tuberculosis, EnfermedadCardiaca, Varicela, Paperas, Hepatitis, Difteria, Tifoidea, EnfermedadRenal, Hemofilia, TrastornoHepatico, Diabetes, Reflujo, TrastornoDeLenguaje, Otros, TratamientosActivos, TomaMedicamentos, MadreMedicamentoEmbarazo, AccidentesEmbarazo, TipoParto, DificultadNacimiento, AnomaliaCongenitaNacimiento, HaSidoAnesteciado, ReaccionAnestecia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(
      peticionSql,
      [
        IdPaciente,
        BuenaSalud,
        Hospitalizado,
        LblRealizaDeporte,
        LblAlergiasMedAlim,
        LblTrastornoMentalEmocional,
        DificultadesEscolares,
        RespiraPorBoca,
        ApneaRoncar,
        ChupaLabioDedos,
        LblChupaLabioDedos,
        Asma,
        Sarampion,
        FiebreReumatica,
        PaladarHendido,
        TosFerina,
        Poliomelitis,
        Epilepsia,
        Escarlatina,
        Tuberculosis,
        EnfermedadCardiaca,
        Varicela,
        Paperas,
        Hepatitis,
        Difteria,
        Tifoidea,
        EnfermedadRenal,
        Hemofilia,
        TrastornoHepatico,
        Diabetes,
        Reflujo,
        TrastornoDeLenguaje,
        Otros,
        TratamientosActivos,
        LblTomaMedicamentos,
        LblMadreMedicamentoEmbarazo,
        AccidentesEmbarazo,
        TipoParto,
        LblDificultadNacimiento,
        LblAnomaliaCongenitaNacimiento,
        HaSidoAnestesiado,
        LblReaccionAnestesia,
      ],
      (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ antecedentespersonales: result });
        }
      }
    );
  })
  .put((req, res) => {
    const IdPaciente = req.params.id;
    const BuenaSalud = req.body.BuenaSalud;
    const Hospitalizado = req.body.Hospitalizado;
    const LblRealizaDeporte = req.body.LblRealizaDeporte;
    const LblAlergiasMedAlim = req.body.LblAlergiasMedAlim;
    const LblTrastornoMentalEmocional = req.body.LblTrastornoMentalEmocional;
    const DificultadesEscolares = req.body.DificultadesEscolares;
    const RespiraPorBoca = req.body.RespiraPorBoca;
    const ApneaRoncar = req.body.ApneaRoncar;
    const ChupaLabioDedos = req.body.ChupaLabioDedos;
    const LblChupaLabioDedos = req.body.LblChupaLabioDedos;
    const Asma = req.body.Asma;
    const Sarampion = req.body.Sarampion;
    const FiebreReumatica = req.body.FiebreReumatica;
    const PaladarHendido = req.body.PaladarHendido;
    const TosFerina = req.body.TosFerina;
    const Poliomelitis = req.body.Poliomelitis;
    const Epilepsia = req.body.Epilepsia;
    const Escarlatina = req.body.Escarlatina;
    const Tuberculosis = req.body.Tuberculosis;
    const EnfermedadCardiaca = req.body.EnfermedadCardiaca;
    const Varicela = req.body.Varicela;
    const Paperas = req.body.Paperas;
    const Hepatitis = req.body.Hepatitis;
    const Difteria = req.body.Difteria;
    const Tifoidea = req.body.Tifoidea;
    const EnfermedadRenal = req.body.EnfermedadRenal;
    const Hemofilia = req.body.Hemofilia;
    const TrastornoHepatico = req.body.TrastornoHepatico;
    const Diabetes = req.body.Diabetes;
    const Reflujo = req.body.Reflujo;
    const TrastornoDeLenguaje = req.body.TrastornoDeLenguaje;
    const Otros = req.body.Otros;
    const TratamientosActivos = req.body.TratamientosActivos;
    const LblTomaMedicamentos = req.body.LblTomaMedicamentos;
    const LblMadreMedicamentoEmbarazo = req.body.LblMadreMedicamentoEmbarazo;
    const AccidentesEmbarazo = req.body.AccidentesEmbarazo;
    const TipoParto = req.body.TipoParto;
    const LblDificultadNacimiento = req.body.LblDificultadNacimiento;
    const LblAnomaliaCongenitaNacimiento = req.body.LblAnomaliaCongenitaNacimiento;
    const HaSidoAnestesiado = req.body.HaSidoAnestesiado;
    const LblReaccionAnestesia = req.body.LblReaccionAnestesia;

    const peticionSql =
      'UPDATE antecedentespersonales SET IdPaciente = ?, BuenaSalud = ?, Hospitalizado = ?, RealizaDeporte = ?, AlergiasMedAlim = ?, TrastornoMentalEmocional = ?, DificultadesEscolares = ?, RespiraPorBoca = ?, ApneaRoncar = ?, ChupaLabioDedos = ?, Asma = ?, Sarampion = ?, FiebreReumatica = ?, PaladarHendido = ?, TosFerina = ?, Poliomelitis = ?, Epilepsia = ?, Escarlatina = ?, Tuberculosis = ?, EnfermedadCardiaca = ?, Varicela = ?, Paperas = ?, Hepatitis = ?, Difteria = ?, Tifoidea = ?, EnfermedadRenal = ?, Hemofilia = ?, TrastornoHepatico = ?, Diabetes = ?, Reflujo = ?, TrastornoDeLenguaje = ?, Otros = ?, TratamientosActivos = ?, TomaMedicamentos = ?, MadreMedicamentoEmbarazo = ?, AccidentesEmbarazo = ?, TipoParto = ?, DificultadNacimiento = ?, AnomaliaCongenitaNacimiento = ?, HaSidoAnesteciado = ?, ReaccionAnestecia = ? WHERE IdPaciente = ?';
    db.query(
      peticionSql,
      [
        BuenaSalud,
        Hospitalizado,
        LblRealizaDeporte,
        LblAlergiasMedAlim,
        LblTrastornoMentalEmocional,
        DificultadesEscolares,
        RespiraPorBoca,
        ApneaRoncar,
        ChupaLabioDedos,
        LblChupaLabioDedos,
        Asma,
        Sarampion,
        FiebreReumatica,
        PaladarHendido,
        TosFerina,
        Poliomelitis,
        Epilepsia,
        Escarlatina,
        Tuberculosis,
        EnfermedadCardiaca,
        Varicela,
        Paperas,
        Hepatitis,
        Difteria,
        Tifoidea,
        EnfermedadRenal,
        Hemofilia,
        TrastornoHepatico,
        Diabetes,
        Reflujo,
        TrastornoDeLenguaje,
        Otros,
        TratamientosActivos,
        LblTomaMedicamentos,
        LblMadreMedicamentoEmbarazo,
        AccidentesEmbarazo,
        TipoParto,
        LblDificultadNacimiento,
        LblAnomaliaCongenitaNacimiento,
        HaSidoAnestesiado,
        LblReaccionAnestesia,
        IdPaciente,
      ],
      (err, result) => {
        if (err) {
          res.status(400).send({ message: err });
          console.error(err);
        } else {
          res.status(200).send({ antecedentespersonales: result });
        }
      }
    );
  });

module.exports = router;
