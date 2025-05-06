const db = require("../config/db");

exports.obtenerInventario = async (req, res) => {
  try {
    const [filas] = await db.query("SELECT * FROM inventario");
    res.json(filas);
  } catch (err) {
    res.status(500).json({ mensaje: "Error al obtener inventario" });
  }
};