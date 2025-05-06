const db = require('../config/db');

exports.obtenerCitas = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT c.id, c.fecha, c.motivo, c.estado, c.notas,
             p.nombre AS paciente_nombre, d.nombre AS doctor_nombre
      FROM citas c
      LEFT JOIN pacientes p ON c.paciente_id = p.id
      LEFT JOIN doctores d ON c.doctor_id = d.id
    `);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener citas' });
  }
};

exports.crearCita = async (req, res) => {
  const { paciente_id, doctor_id, fecha, motivo, estado, notas } = req.body;
  try {
    await db.query(
      'INSERT INTO citas (paciente_id, doctor_id, fecha, motivo, estado, notas) VALUES (?, ?, ?, ?, ?, ?)',
      [paciente_id, doctor_id, fecha, motivo, estado, notas]
    );
    res.sendStatus(201);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear cita' });
  }
};

exports.eliminarCita = async (req, res) => {
  try {
    await db.query('DELETE FROM citas WHERE id = ?', [req.params.id]);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar cita' });
  }
};
