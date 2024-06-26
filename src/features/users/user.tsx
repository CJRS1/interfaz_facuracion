import * as React from "react";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { useState } from "react";
import { Link } from "react-router-dom";



function User() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  // const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // // Función para mostrar el sidebar con retardo
  // const showSidebarWithDelay = () => {
  //   setIsSidebarVisible(true);
  //   setTimeout(() => {
  //     showSidebar();
  //   }, 100); // Ajusta el retardo según lo deseado (en milisegundos)
  // };

  return (
    <main className="user_container">
        holaaaa
    </main>
  );
}

export default User;
