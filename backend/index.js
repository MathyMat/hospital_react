const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const pacientesRoutes = require("./routes/pacientesRoutes");
const citasRoutes = require("./routes/citasRoutes");
const habitacionesRoutes = require("./routes/habitacionesRoutes");
const inventarioRoutes = require("./routes/inventarioRoutes");
const dashboardRoutes = require('./routes/dashboardRoutes')


require("dotenv").config();

const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(cors());
app.use(express.json());
app.use('/api/dashboard', dashboardRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/pacientes", pacientesRoutes);
app.use("/api/citas", citasRoutes);
app.use("/api/habitaciones", habitacionesRoutes);
app.use("/api/inventario", inventarioRoutes);
app.use('/api/doctores', require('./routes/doctorRoutes'));
app.use('/api/facturacion', require('./routes/facturacionRoutes'));
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor iniciado en puerto ${PORT}`));