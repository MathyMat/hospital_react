// src/components/header/AppHeaderDropdown.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CAvatar, // Importamos CAvatar
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react';
import {
  cilAccountLogout,
  cilUserPlus,
} from '@coreui/icons';
import CIcon from '@coreui/icons-react';

// --- CAMBIO 1: Importa tu imagen ---
// Comenta o elimina la importación anterior
// import avatar8 from './../../assets/images/avatars/8.jpg';
// Importa la nueva imagen (¡OJO CON LA EXTENSIÓN .PNG!)
import avatarFlor from './../../assets/images/avatars/flor.PNG';
// --- FIN CAMBIO 1 ---

const AppHeaderDropdown = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Cerrando sesión y redirigiendo a Google...');
    // **IMPORTANTE:** Limpia aquí los datos de sesión
    // localStorage.removeItem('authToken');
    // sessionStorage.clear();
    window.location.href = 'https://www.google.com';
  };

  const handleNavigateToRegister = () => {
    navigate('/register');
  };

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        {/* --- CAMBIO 2: Usa la nueva imagen importada en el src --- */}
        <CAvatar src={avatarFlor} size="md" />
        {/* --- FIN CAMBIO 2 --- */}
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-body-secondary fw-semibold my-2">
          Mi Cuenta
        </CDropdownHeader>
        <CDropdownItem onClick={handleNavigateToRegister} style={{ cursor: 'pointer' }}>
          <CIcon icon={cilUserPlus} className="me-2" />
          Registrar Personal
        </CDropdownItem>
        <CDropdownItem onClick={handleLogout} style={{ cursor: 'pointer' }}>
          <CIcon icon={cilAccountLogout} className="me-2" />
          Cerrar Sesión
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;