const db = require('../config/db');

// Obtener todos los doctores
exports.obtenerDoctores = async (req, res) => {
  try {
    const [doctores] = await db.execute(`
      SELECT d.id, d.usuario_id, d.nombre, d.apellidos, d.especialidad, d.dni, d.telefono, d.correo, d.genero, d.fecha_nacimiento,
             d.foto,
             u.nombre AS nombre_usuario, u.correo AS correo_usuario
      FROM doctores d
      LEFT JOIN usuarios u ON d.usuario_id = u.id
    `);

    res.status(200).json(doctores);
  } catch (error) {
    console.error('Error al obtener doctores:', error);
    res.status(500).json({ mensaje: 'Error al obtener doctores' });
  }
};
