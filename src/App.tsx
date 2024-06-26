import Dashboard from "./features/dashboard/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Guser from "./features/users/user";
import ErrorPage from "./features/pagenotfound/pagenotfound";
import "./styles/root.css";

type User = {
  nombre: string;
  apellido: string;
};

export default function App() {
  const user: User = { nombre: "Christian", apellido: "Reyes" };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard user={user} />}>
          <Route path="gestionusuarios" element={<Guser />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
