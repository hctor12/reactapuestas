import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import Global from "./Global";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CrearApuesta = () => {
  const url = Global.apiApuestas;
  const navigate = useNavigate();
  const cajaUser = useRef();
  const cajaRes1 = useRef();
  const cajaRes2 = useRef();
  const cajaFecha = useRef();

  const insertApuesta = (e) => {
    e.preventDefault();
    const fecha = new Date(cajaFecha.current.value).toLocaleDateString("es-ES");
    let request = "api/Apuestas";
    let apuesta = {
      idApuesta: 0,
      usuario: cajaUser.current.value,
      resultado: cajaRes1.current.value + "-" + cajaRes2.current.value,
      fecha: fecha,
    };
    axios.post(url + request, apuesta).then(() => {
      navigate("/apuestas");
    });
  };

  return (
    <Container className="flex flex-col items-center">
      <h1>Nueva apuesta</h1>
      <form className="flex flex-col items-center">
        <div>
          <label>Usuario:</label>
          <input type="text" className="form-control" ref={cajaUser} />
          <label>Real Madrid:</label>
          <input
            type="number"
            className="form-control"
            min={0}
            ref={cajaRes1}
          />
          <label>FC Barcelona:</label>
          <input
            type="number"
            className="form-control"
            min={0}
            ref={cajaRes2}
          />
          <label>Fecha:</label>
          <input type="date" className="form-control" ref={cajaFecha} />
        </div>
        <button
          className="text-white bg-cyan-500 px-2 mt-2"
          onClick={insertApuesta}
        >
          Nueva Apuesta
        </button>
      </form>
    </Container>
  );
};

export default CrearApuesta;
