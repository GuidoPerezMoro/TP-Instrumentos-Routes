import { Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Home } from "../pages/Home/Home";
import { DondeEstamos } from "../pages/DondeEstamos/DondeEstamos";
import { Productos } from "../pages/Productos/Productos";

// Componente AppRouter que define las rutas de la aplicación
export const AppRouter = () => {
  return (
    <>
      {/* Barra de navegación */}
      <NavBar />
      {/* Definición de las rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donde-estamos" element={<DondeEstamos />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </>
  );
};
