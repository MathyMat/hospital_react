const express = require('express');
const router = express.Router();
const habitacionesController = require('../controllers/habitacionesController');

router.get('/', habitacionesController.obtenerHabitaciones);
router.post('/asignar', habitacionesController.createHabitacion);
router.get('/asignadas', habitacionesController.obtenerAsignaciones);
router.get('/', habitacionesController.getAllHabitaciones);
router.post('/', habitacionesController.createHabitacion);
router.get('/disponibles', habitacionesController.obtenerHabitacionesDisponibles);


module.exports = router;
