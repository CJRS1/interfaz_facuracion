import * as React from "react";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { useState } from "react";
import { Link } from 'react-router-dom';
import '../../../styles/sidebarmenu.css'

function Sidebar({ showSidebar } : { showSidebar: boolean }) {

    // const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    // // Función para mostrar el sidebar con retardo
    // const showSidebarWithDelay = () => {
    //   setIsSidebarVisible(true);
    //   setTimeout(() => {
    //     showSidebar();
    //   }, 100); // Ajusta el retardo según lo deseado (en milisegundos)
    // };

  return (
    <nav className={`sidebarmenu_container ${
        showSidebar ? "sidebarmenu_container_show" : "sidebarmenu_container_hide"
      }`}>
      <ul>
        <li >
          <PermContactCalendarIcon />
          <Link to="/usuario" className="menu_option">Usuario</Link>
        </li>
        <li>
          <PermContactCalendarIcon />
          <Link to="/usuario" className="menu_option">Lista de Área</Link>
        </li>
        <li>
          <PermContactCalendarIcon />
          <Link to="/sale" className="menu_option">Venta</Link>
        </li>
        <li>
          <PermContactCalendarIcon />
          <Link to="/sale" className="menu_option">Anulación (Nota)</Link>
        </li>
      </ul>
    </nav>
  ); 
}

export default Sidebar;
