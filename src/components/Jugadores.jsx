import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Global from "./Global";
import axios from "axios";

const Jugadores = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const [jugadores, setJugadores] = useState([]);
  const url = Global.apiApuestas;
  let idEquipo = location.pathname.substring(8, 9, 1);

  const loadJugadores = () => {
    let request = "api/Jugadores/JugadoresEquipos/" + idEquipo;
    axios.get(url + request).then((response) => {
      console.log(response.data);
      setJugadores(response.data);
    });
  };

  useEffect(() => {
    loadJugadores();
  }, []);

  return (
    <Container className="flex flex-col items-center">
      <button className="btn btn-success" onClick={() => navigate(-1)}>
        Volver
      </button>
      <table className="table table-info text-center">
        <thead>
          <tr className="font-bold">
            <th>NOMBRE</th>
            <th>IMAGEN</th>
            <th>DETALLES</th>
          </tr>
        </thead>
        <tbody>
          {jugadores.map((jug, index) => {
            return (
              <tr key={index}>
                <td>{jug.nombre}</td>
                <td>
                  <img
                    src={jug.imagen}
                    alt="ImgJugador"
                    style={{
                      width: "150px",
                      height: "150px",
                    }}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() =>
                      navigate(`/equipo/${idEquipo}/jugadores/${jug.idJugador}`)
                    }
                  >
                    Detalles
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default Jugadores;
