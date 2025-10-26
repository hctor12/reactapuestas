import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Global from "./Global";
import axios from "axios";
import rmEscudo from "../assets/rmEscudo.png";
import { useNavigate } from "react-router-dom";

const Equipo = (props) => {
  const navigate = useNavigate();
  const [equipo, setEquipo] = useState(null);
  const url = Global.apiApuestas;

  const getInfoEquipo = () => {
    let id = parseInt(props.idequipo);
    let request = "api/Equipos/" + id;
    axios.get(url + request).then((response) => {
      setEquipo(response.data);
    });
  };

  useEffect(() => {
    getInfoEquipo();
  }, [props.idequipo]);

  return (
    <Container className="flex flex-col items-center">
      {equipo !== null && (
        <>
          <h2 className="font-thin !text-xl">{equipo.nombre}</h2>
          <img
            src={props.idequipo == 3 ? rmEscudo : equipo.imagen}
            alt="Escudo"
            className="w-72"
          />
          <h1 className="!text-2xl">Champions: {equipo.champions}</h1>
          <p className="text-center">{equipo.descripcion}</p>
          <div className="flex gap-x-2">
            <button
              className="btn btn-success"
              onClick={() => navigate(`/equipo/${props.idequipo}/jugadores`)}
            >
              Jugadores
            </button>
            <button className="btn btn-primary" onClick={() => navigate(-1)}>
              Volver
            </button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Equipo;
