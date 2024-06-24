import Dashboard from "./features/dashboard/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/root.css'
type User = {
  nombre: string;
  apellido: string;
};

function App() {
  const user: User = { nombre: "Christian", apellido: "Reyes" };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <Dashboard user={user}>
              <div className="hola">jeje</div>
            </Dashboard>
          } 
        />
        {/* Aquí puedes agregar más rutas si las necesitas */}
      </Routes>
    </Router>
  );
}

export default App;