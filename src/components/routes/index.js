import { Routes, Route, Navigate } from "react-router-dom";

// paginas
import Home from "../../views/Home/Home";
import Login from "../../views/login/Login";
import Registrarse from "../../views/login/Registrarse";
import Explicame from "../../views/explicame/Explicame";
import Presentacion from "../../views/presentacion/components/Presentacion";
import PruebaFlex from "../../views/Home/PruebaFlex";
import Presentaciones from "../../views/presentacion/views/Presentaciones";
import PresentacionesDriver from "../../views/presentacion/components/PresentacionesDriver";

export const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registrarse" element={<Registrarse />} />
        <Route path="presentacion" element={<Presentacion />} />
        <Route
          path="presentacion/:opcionId"
          element={<PresentacionesDriver />}
        />
        <Route path="explicame" element={<Explicame />} />
        <Route path="pruebaflex" element={<PruebaFlex />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
};
