const db = require('../config/db');

exports.obtenerPacientes = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM pacientes');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener pacientes:', error);
    res.status(500).json({ error: 'Error al obtener pacientes' });
  }
};

exports.crearPaciente = async (req, res) => {
  const {
    usuario_id,
    fecha_nacimiento,
    direccion,
    nombre,
    apellido,
    dni,
    genero,
    telefono,
    notas
  } = req.body;

  try {
    await db.query(
      `INSERT INTO pacientes 
      (usuario_id, fecha_nacimiento, direccion, nombre, apellido, dni, genero, telefono, notas) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [usuario_id, fecha_nacimiento, direccion, nombre, apellido, dni, genero, telefono, notas]
    );
    res.sendStatus(201);
  } catch (error) {
    console.error('Error al crear paciente:', error);
    res.status(500).json({ error: 'Error al crear paciente' });
  }
};


exports.eliminarPaciente = async (req, res) => {
  try {
    await db.query('DELETE FROM pacientes WHERE id = ?', [req.params.id]);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error al eliminar paciente:', error);
    res.status(500).json({ error: 'Error al eliminar paciente' });
  }
};
