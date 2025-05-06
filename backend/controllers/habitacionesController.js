const db = require('../config/db');
exports.obtenerHabitacionesDisponibles = async (req, res) => {
  try {
    const [habitaciones] = await db.query(
      `SELECT id, numero, tipo FROM habitaciones_disponibles`
    );
    res.json(habitaciones);
  } catch (error) {
    console.error('Error al obtener habitaciones disponibles:', error);
    res.status(500).json({ mensaje: 'Error al obtener habitaciones disponibles' });
  }
};


// Obtener habitaciones disponibles
exports.obtenerHabitaciones = async (req, res) => {
  try {
    const [result] = await db.query('SELECT * FROM habitaciones');
    res.json(result);
  } catch (error) {
    console.error('Error al obtener habitaciones:', error);
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
};
// controllers/habitacionesController.js

// controllers/habitacionesController.js

exports.createHabitacion = (req, res) => {
  const {
    habitacion_disponible_id,
    paciente_id,
    doctor_id,
    fecha_ingreso,
    fecha_salida_estimada,
    estado_paciente,
    motivo_ingreso
  } = req.body;

  const insertQuery = `
    INSERT INTO habitaciones (
      habitacion_disponible_id,
      paciente_id,
      doctor_id,
      fecha_ingreso,
      fecha_salida_estimada,
      estado_paciente,
      motivo_ingreso
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    habitacion_disponible_id,
    paciente_id || null,
    doctor_id || null,
    fecha_ingreso || null,
    fecha_salida_estimada || null,
    estado_paciente || null,
    motivo_ingreso || null
  ];

  db.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error('Error al crear habitación:', err);
      return res.status(500).json({ message: 'Error al crear habitación' });
    }

    // Marcar la habitación como ocupada
    const updateQuery = `
      UPDATE habitaciones_disponibles
      SET estado = 'Ocupada'
      WHERE id = ?
    `;

    db.query(updateQuery, [habitacion_disponible_id], (err2) => {
      if (err2) {
        console.error('Error al actualizar estado de habitación disponible:', err2);
        return res.status(500).json({ message: 'Habitación creada pero no se pudo actualizar su estado' });
      }

      res.status(201).json({ message: 'Habitación creada y asignada correctamente', id: result.insertId });
    });
  });
};


// Registrar habitación para paciente
exports.registrarHabitacionPaciente = async (req, res) => {
  const {
    paciente_id,
    habitacion_id,
    fecha_ingreso,
    fecha_salida_estimada,
    medico_responsable, // doctor_id
    estado_paciente,
    motivo_ingreso
  } = req.body;
const habitacion_disponible_id = habitacion_id;

  // Validación de campos obligatorios
  if (
    paciente_id == null ||
    habitacion_id == null ||
    fecha_ingreso == null ||
    medico_responsable == null ||
    estado_paciente == null ||
    motivo_ingreso == null
  ) {
    return res.status(400).json({ mensaje: 'Faltan campos obligatorios para registrar la habitación.' });
  }
  console.log('Body recibido en registrarHabitacionPaciente:', req.body);
  

  try {
    const query = `
      UPDATE habitaciones
      SET paciente_id = ?, 
          fecha_ingreso = ?, 
          fecha_salida_estimada = ?, 
          doctor_id = ?, 
          estado = 'Ocupado',
          estado_paciente = ?, 
          motivo_ingreso = ?
      WHERE id = ?
    `;

    const [result] = await db.query(query, [
      paciente_id,
      fecha_ingreso,
      fecha_salida_estimada,
      medico_responsable,
      estado_paciente,
      motivo_ingreso,
      habitacion_disponible_id
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Habitación no encontrada o no actualizada.' });
    }

    res.status(200).json({ mensaje: 'Habitación asignada correctamente al paciente.' });
  } catch (error) {
    console.error('ERROR SQL:', error.message);
    res.status(500).json({ mensaje: 'Error del servidor', error: error.message });
  }
};


exports.obtenerAsignaciones = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM habitaciones');
    res.json(rows);
  } catch (err) {
    console.error('Error al obtener asignaciones:', err);
    res.status(500).json({ error: 'Error del servidor' });
  }
};
// controllers/habitacionesController.js



exports.getAllHabitaciones = (req, res) => {
  const query = `
    SELECT h.*, 
           hd.numero AS numero_disponible,
           hd.tipo AS tipo_disponible,
           hd.estado AS estado_disponible,
           p.nombre AS paciente_nombre,
           p.apellido AS paciente_apellido,
           d.nombre AS doctor_nombre,
           d.apellidos AS doctor_apellido
    FROM habitaciones h
    LEFT JOIN pacientes p ON h.paciente_id = p.id
    LEFT JOIN doctores d ON h.doctor_id = d.id
    LEFT JOIN habitaciones_disponibles hd ON h.habitacion_disponible_id = hd.id
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener habitaciones:', err);
      return res.status(500).json({ message: 'Error al obtener habitaciones' });
    }
    res.json(results);
  });
};
