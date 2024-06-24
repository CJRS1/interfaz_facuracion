import * as React from "react";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "./components/header";
import Sidebar from "./components/sidebarmenu";

type User = {
  nombre: string;
  apellido: string;
};

function Dashboard({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User;
}) {
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
    <main className="dashboard_container">
      <Header toggleSidebar={toggleSidebar} user={user} />
      <div className="container">
        <Sidebar showSidebar={showSidebar} />
        <div
          className={`${
            showSidebar ? "windows_container" : "windows_container_full"
          }`}
        >
          {children}
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
