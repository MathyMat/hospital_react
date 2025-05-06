const express = require('express');
const router = express.Router();
const facturacionController = require('../controllers/facturacionController');

router.post('/facturacion', facturacionController.crearItemFactura);
router.get('/facturacion/:numero_factura', facturacionController.obtenerItemsPorFactura);

module.exports = router;