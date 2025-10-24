import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Global from "./Global";
import axios from "axios";

const Jugador = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const url = Global.apiApuestas;
  const [jugador, setJugador] = useState(null);

  const loadJugador = () => {
    let request = "api/Jugadores/" + props.idjugador;
    axios.get(url + request).then((response) => {
      setJugador(response.data);
    });
  };

  useEffect(() => {
    loadJugador();
  });

  return (
    <Container className="text-center">
      {jugador != null && (
        <div className="flex flex-col items-center">
          <h1 className="!text-xl !font-normal">{jugador.nombre}</h1>
          <hr />
          <img
            src={jugador.imagen}
            alt={jugador.nombre}
            style={{ width: "150px", height: "150px" }}
          />
          <h1 className="mt-4">{jugador.posicion}</h1>
          <p>{jugador.fechaNacimiento}</p>
          <p>País: {jugador.pais}</p>
          <button
            className="btn btn-success"
            onClick={() => navigate(location.pathname.substring(0, 19))}
          >
            Jugadores
          </button>
        </div>
      )}
    </Container>
  );
};

export default Jugador;
