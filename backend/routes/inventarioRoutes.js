const express = require('express');
const router = express.Router();
const db = require("../config/db");

// Obtener todo el inventario (sin autenticación)
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM inventario');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener inventario' });
  }
});

// Agregar insumo (sin autenticación)
router.post('/', async (req, res) => {
  const { nombre, cantidad, descripcion } = req.body;
  try {
    await db.query('INSERT INTO inventario (nombre, cantidad, descripcion) VALUES (?, ?, ?)', [nombre, cantidad, descripcion]);
    res.json({ mensaje: 'Insumo agregado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al agregar insumo' });
  }
});

// Editar insumo (sin autenticación)
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, cantidad, descripcion } = req.body;
  try {
    await db.query('UPDATE inventario SET nombre=?, cantidad=?, descripcion=? WHERE id=?', [nombre, cantidad, descripcion, id]);
    res.json({ mensaje: 'Insumo actualizado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar' });
  }
});

// Eliminar insumo (sin autenticación)
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM inventario WHERE id=?', [id]);
    res.json({ mensaje: 'Insumo eliminado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar' });
  }
});

module.exports = router;
