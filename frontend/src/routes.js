// src/routes.js (Solo rutas DENTRO del DefaultLayout)
import React from 'react';

// --- Vistas Principales ---
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Calendario = React.lazy(() => import('./views/Calendario/Calendario'));
const Estadisticas = React.lazy(() => import('./views/Estadisticas/Estadisticas'));

// --- Gestión ---
const Pacientes = React.lazy(() => import('./views/Pacientes/Pacientes'));
const Citas = React.lazy(() => import('./views/Citas/Citas'));

// --- Recursos ---
const Inventario = React.lazy(() => import('./views/Inventario/Inventario'));
const Habitaciones = React.lazy(() => import('./views/Habitaciones/Habitaciones'));

// --- Administración ---
const Personal = React.lazy(() => import('./views/Personal/Personal'));
const Facturacion = React.lazy(() => import('./views/Facturacion/Facturacion'));

// --- Herramientas ---
const AsistenteVirtual = React.lazy(() => import('./views/AsistenteVirtual/AsistenteVirtual'));

// --- (Opcional: Puedes mantener o eliminar las vistas de ejemplo de CoreUI) ---
// const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
// ... (otras vistas de ejemplo) ...

const routes = [
  // Rutas de tu aplicación MediAssist
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/calendario', name: 'Calendario', element: Calendario }, // Ruta renombrada
  { path: '/estadisticas', name: 'Estadisticas', element: Estadisticas }, // Ruta renombrada
  { path: '/pacientes', name: 'Pacientes', element: Pacientes }, // Ruta renombrada
  { path: '/citas', name: 'Citas', element: Citas }, // Ruta renombrada
  { path: '/inventario', name: 'Inventario', element: Inventario }, // Ruta renombrada
  { path: '/habitaciones', name: 'Habitaciones', element: Habitaciones }, // Ruta renombrada
  { path: '/personal', name: 'Personal', element: Personal }, // Ruta renombrada
  { path: '/facturacion', name: 'Facturacion', element: Facturacion }, // Ruta renombrada
  { path: '/asistente-virtual', name: 'Asistente Virtual', element: AsistenteVirtual }, // Ruta renombrada

  // Ruta principal (opcional, usualmente redirige a dashboard)
  { path: '/', exact: true, name: 'Home' }, // AppContent puede manejar la redirección a /dashboard

  // --- (Rutas de ejemplo de CoreUI - Puedes eliminarlas si no las usas) ---
  // { path: '/theme', name: 'Theme', element: Colors, exact: true },
  // ... (otras rutas de ejemplo) ...
];

export default routes;