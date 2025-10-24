import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Equipo from "./Equipo";
import Jugadores from "./Jugadores";
import Jugador from "./Jugador";
import Apuestas from "./Apuestas";
import CrearApuesta from "./CrearApuesta";

const Router = () => {
  const DetalleEquipo = () => {
    let { idequipo } = useParams();
    return <Equipo idequipo={idequipo} />;
  };

  const DetalleJugadores = () => {
    let { idequipo } = useParams();
    return <Jugadores idequipo={idequipo} />;
  };

  const DetalleJugador = () => {
    let { idequipo, idjugador } = useParams();
    return <Jugador idequipo={idequipo} idjugador={idjugador} />;
  };

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipo/:idequipo" element={<DetalleEquipo />} />
        <Route
          path="/equipo/:idequipo/jugadores"
          element={<DetalleJugadores />}
        />
        <Route
          path="/equipo/:idequipo/jugadores/:idjugador"
          element={<DetalleJugador />}
        />
        <Route path="/apuestas" element={<Apuestas />} />
        <Route path="/apuestas/crear" element={<CrearApuesta />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
