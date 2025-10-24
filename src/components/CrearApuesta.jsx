import React from "react";
import { Container } from "react-bootstrap";

const CrearApuesta = () => {
  return (
    <Container className="flex flex-col items-center">
      <h1>Nueva apuesta</h1>
      <form className="flex flex-col items-center">
        <div>
          <label>Usuario:</label>
          <input type="text" className="form-control" />
          <label>Real Madrid:</label>
          <input type="number" className="form-control" min={0} />
          <label>FC Barcelona:</label>
          <input type="number" className="form-control" min={0} />
          <label>Fecha:</label>
          <input type="text" className="form-control" />
        </div>
        <button className="text-white bg-cyan-500 px-2 mt-2">
          Nueva Apuesta
        </button>
      </form>
    </Container>
  );
};

export default CrearApuesta;
