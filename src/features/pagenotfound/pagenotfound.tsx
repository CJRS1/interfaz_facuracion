// ErrorPage.tsx
import * as React from "react";
import "../../styles/notfound.css";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const ErrorPage = () => {
  return (
    <div className="notfound_container">
      <div className="notfound_card">
        <h1>Error: Página no encontrada</h1>
        <p>La página que estabas buscando no existe.</p>
        <Link to="/gestionusuarios" className="back_button">
          <KeyboardBackspaceIcon />
          Volver
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
