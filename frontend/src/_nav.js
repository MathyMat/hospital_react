// src/_nav.js
import React from 'react';
import CIcon from '@coreui/icons-react';
// Asegúrate de tener solo los iconos que realmente usas en las secciones restantes
import {
  cilSpeedometer,
  cilCalendar,
  cilChartPie,
  cilPeople,
  // cilClipboard, // Si no usas "Consultas"
  cilCalendarCheck,
  cilStorage,
  cilBed,
  cilGroup,
  cilCreditCard,
  cilChatBubble,
  // Los iconos de Cuentas (cilUser, cilInput, cilUserPlus) ya no son necesarios aquí
} from '@coreui/icons';
// Ya no necesitas CNavGroup si este era el único grupo
import { CNavItem, CNavTitle } from '@coreui/react'; // CNavGroup eliminado de la importación

const _nav = [
  // --- Secciones existentes ---
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Calendario',
    to: '/calendario', // Usa la ruta corregida
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Estadisticas',
    to: '/estadisticas', // Usa la ruta corregida
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'GESTIÓN',
  },
  {
    component: CNavItem,
    name: 'Pacientes',
    to: '/pacientes', // Usa la ruta corregida
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Citas',
    to: '/citas', // Usa la ruta corregida
    icon: <CIcon icon={cilCalendarCheck} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'RECURSOS',
  },
  {
    component: CNavItem,
    name: 'Inventario',
    to: '/inventario', // Usa la ruta corregida
    icon: <CIcon icon={cilStorage} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Habitaciones',
    to: '/habitaciones', // Usa la ruta corregida
    icon: <CIcon icon={cilBed} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'ADMINISTRACIÓN',
  },
  {
    component: CNavItem,
    name: 'Personal',
    to: '/personal', // Usa la ruta corregida
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Facturacion',
    to: '/facturacion', // Usa la ruta corregida
    icon: <CIcon icon={cilCreditCard} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'HERRAMIENTAS',
  },
  {
    component: CNavItem,
    name: 'Asistente Virtual',
    to: '/asistente-virtual', // Usa la ruta corregida
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
  },

  // ---- SECCIÓN "PERSONAL" Y "CUENTAS" COMPLETAMENTE ELIMINADA ----

];

export default _nav;