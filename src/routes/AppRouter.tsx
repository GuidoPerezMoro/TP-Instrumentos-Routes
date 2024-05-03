import { Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Home } from "../pages/Home";
import { DondeEstamos } from "../pages/DondeEstamos";

// Componente AppRouter que define las rutas de la aplicación
export const AppRouter = () => {
  return (
    <>
      {/* Barra de navegación */}
      <NavBar />
      {/* Definición de las rutas */}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/DondeEstamos" element={<DondeEstamos />} />
      </Routes>
    </>
  );
};
