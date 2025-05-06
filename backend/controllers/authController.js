const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { correo, password } = req.body;
  try {
    const [usuarios] = await db.query("SELECT * FROM usuarios WHERE correo = ?", [correo]);
    const usuario = usuarios[0];
    if (!usuario) return res.status(404).json({ mensaje: "Usuario no encontrado" });

    const esValido = await bcrypt.compare(password, usuario.password);
    if (!esValido) return res.status(401).json({ mensaje: "Contraseña incorrecta" });

    if (usuario.rol_id !== 1) {
      return res.status(403).json({ mensaje: "Acceso restringido solo para administradores" });
    }

    const token = jwt.sign({ id: usuario.id, rol: usuario.rol_id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ token, usuario: { id: usuario.id, nombre: usuario.nombre, rol_id: usuario.rol_id } });
  } catch (err) {
    res.status(500).json({ mensaje: "Error en el servidor" });
  }
};


exports.register = async (req, res) => {
  const { nombre, correo, password, rol_id } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    await db.query("INSERT INTO usuarios (nombre, correo, password, rol_id) VALUES (?, ?, ?, ?)", [nombre, correo, hashed, rol_id]);
    res.json({ mensaje: "Usuario registrado exitosamente" });
  } catch (err) {
    res.status(500).json({ mensaje: "Error al registrar" });
  }
};