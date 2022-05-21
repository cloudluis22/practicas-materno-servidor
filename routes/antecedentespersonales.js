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
  .route('/antecedentes-personales/:id')
  .get((req, res) => {
    const IdPaciente = req.params.id;

    const peticionSql =
      'SELECT * FROM antecedentespersonales WHERE IdPaciente = ?';

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
    const RealizaDeporte = req.body.RealizaDeporte;
    const LblRealizaDeporte = req.body.LblRealizaDeporte;
    const AlergiasMedAlim = req.body.AlergiasMedAlim;
    const LblAlergiasMedAlim = req.body.LblAlergiasMedAlim;
    const TrastornoMentalEmocional = req.body.TrastornoMentalEmocional;
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
    const TomaMedicamentos = req.body.TomaMedicamentos;
    const LblTomaMedicamentos = req.body.LblTomaMedicamentos;
    const MadreMedicamentoEmbarazo = req.body.MadreMedicamentoEmbarazo;
    const LblMadreMedicamentoEmbarazo = req.body.LblMadreMedicamentoEmbarazo;
    const AccidentesEmbarazo = req.body.AccidentesEmbarazo;
    const TipoParto = req.body.TipoParto;
    const DificultadNacimiento = req.body.DificultadNacimiento;
    const LblDificultadNacimiento = req.body.LblDificultadNacimiento;
    const AnomaliaCongenitaNacimiento = req.body.AnomaliaCongenitaNacimiento;
    const LblAnomaliaCongenitaNacimiento =
      req.body.LblAnomaliaCongenitaNacimiento;
    const HaSidoAnestesiado = req.body.HaSidoAnestesiado;
    const ReaccionAnestesia = req.body.ReaccionAnestesia;
    const LblReaccionAnestesia = req.body.LblReaccionAnestesia;

    const peticionSql =
      'INSERT INTO antecedentespersonales (IdPaciente, BuenaSalud, Hospitalizado, RealizaDeporte, LblRealizaDeporte, AlergiasMedAlim, LblAlergiasMedAlim, TrastornoMentalEmocional, LblTrastornoMentalEmocional, DificultadesEscolares, RespiraPorBoca, ApneaRoncar, ChupaLabioDedos, LblChupaLabioDedos, Asma, Sarampion, FiebreReumatica, PaladarHendido, TosFerina, Poliomelitis, Epilepsia, Escarlatina, Tuberculosis, EnfermedadCardiaca, Varicela, Paperas, Hepatitis, Difteria, Tifoidea, EnfermedadRenal, Hemofilia, TrastornoHepatico, Diabetes, Reflujo, TrastornoDeLenguaje, Otros, TratamientosActivos, TomaMedicamentos, LblTomaMedicamentos, MadreMedicamentoEmbarazo, LblMadreMedicamentoEmbarazo, AccidentesEmbarazo, TipoParto, DificultadNacimiento, LblDificultadNacimiento, AnomaliaCongenitaNacimiento, LblAnomaliaCongenitaNacimiento, HaSidoAnestesiado, ReaccionAnestesia, LblReaccionAnestesia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
    db.query(
      peticionSql,
      [
        IdPaciente,
        BuenaSalud,
        Hospitalizado,
        RealizaDeporte,
        LblRealizaDeporte,
        AlergiasMedAlim,
        LblAlergiasMedAlim,
        TrastornoMentalEmocional,
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
        TomaMedicamentos,
        LblTomaMedicamentos,
        MadreMedicamentoEmbarazo,
        LblMadreMedicamentoEmbarazo,
        AccidentesEmbarazo,
        TipoParto,
        DificultadNacimiento,
        LblDificultadNacimiento,
        AnomaliaCongenitaNacimiento,
        LblAnomaliaCongenitaNacimiento,
        HaSidoAnestesiado,
        ReaccionAnestesia,
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
    const RealizaDeporte = req.body.RealizaDeporte;
    const LblRealizaDeporte = req.body.LblRealizaDeporte;
    const AlergiasMedAlim = req.body.AlergiasMedAlim;
    const LblAlergiasMedAlim = req.body.LblAlergiasMedAlim;
    const TrastornoMentalEmocional = req.body.TrastornoMentalEmocional;
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
    const TomaMedicamentos = req.body.TomaMedicamentos;
    const LblTomaMedicamentos = req.body.LblTomaMedicamentos;
    const MadreMedicamentoEmbarazo = req.body.MadreMedicamentoEmbarazo;
    const LblMadreMedicamentoEmbarazo = req.body.LblMadreMedicamentoEmbarazo;
    const AccidentesEmbarazo = req.body.AccidentesEmbarazo;
    const TipoParto = req.body.TipoParto;
    const DificultadNacimiento = req.body.DificultadNacimiento;
    const LblDificultadNacimiento = req.body.LblDificultadNacimiento;
    const AnomaliaCongenitaNacimiento = req.body.AnomaliaCongenitaNacimiento;
    const LblAnomaliaCongenitaNacimiento =
      req.body.LblAnomaliaCongenitaNacimiento;
    const HaSidoAnestesiado = req.body.HaSidoAnestesiado;
    const ReaccionAnestesia = req.body.ReaccionAnestesia;
    const LblReaccionAnestesia = req.body.LblReaccionAnestesia;

    const peticionSql = 'UPDATE antecedentespersonales SET BuenaSalud = ?, Hospitalizado = ?, RealizaDeporte = ?, LblRealizaDeporte = ?, AlergiasMedAlim = ?, LblAlergiasMedAlim = ?, TrastornoMentalEmocional = ?, LblTrastornoMentalEmocional = ?, DificultadesEscolares = ?, RespiraPorBoca = ?, ApneaRoncar = ?, ChupaLabioDedos = ?, LblChupaLabioDedos = ?, Asma = ?, Sarampion = ?, FiebreReumatica = ?, PaladarHendido = ?, TosFerina = ?, Poliomelitis = ?, Epilepsia = ?, Escarlatina = ?, Tuberculosis = ?, EnfermedadCardiaca = ?, Varicela = ?, Paperas = ?, Hepatitis = ?, Difteria = ?, Tifoidea = ?, EnfermedadRenal = ?, Hemofilia = ?, TrastornoHepatico = ?, Diabetes = ?, Reflujo = ?, TrastornoDeLenguaje = ?, Otros = ?, TratamientosActivos = ?, TomaMedicamentos = ?, LblTomaMedicamentos = ?, MadreMedicamentoEmbarazo = ?, LblMadreMedicamentoEmbarazo = ?, AccidentesEmbarazo = ?, TipoParto = ?, DificultadNacimiento = ?, LblDificultadNacimiento = ?, AnomaliaCongenitaNacimiento = ?, LblAnomaliaCongenitaNacimiento = ?, HaSidoAnestesiado = ?, ReaccionAnestesia = ?, LblReaccionAnestesia = ? WHERE antecedentespersonales.IdPaciente = ?';
    db.query(
      peticionSql,
      [
        BuenaSalud,
        Hospitalizado,
        RealizaDeporte,
        LblRealizaDeporte,
        AlergiasMedAlim,
        LblAlergiasMedAlim,
        TrastornoMentalEmocional,
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
        TomaMedicamentos,
        LblTomaMedicamentos,
        MadreMedicamentoEmbarazo,
        LblMadreMedicamentoEmbarazo,
        AccidentesEmbarazo,
        TipoParto,
        DificultadNacimiento,
        LblDificultadNacimiento,
        AnomaliaCongenitaNacimiento,
        LblAnomaliaCongenitaNacimiento,
        HaSidoAnestesiado,
        ReaccionAnestesia,
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
