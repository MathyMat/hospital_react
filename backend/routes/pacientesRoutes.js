const express = require('express');
const router = express.Router();
const pacientesController = require('../controllers/pacientesController');

// Obtener todos los pacientes
router.get('/', pacientesController.obtenerPacientes);

// Crear nuevo paciente
router.post('/', pacientesController.crearPaciente);

// Eliminar paciente
router.delete('/:id', pacientesController.eliminarPaciente);

module.exports = router;
