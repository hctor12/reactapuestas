import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Global from "./Global";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Apuestas = () => {
  const url = Global.apiApuestas;
  const [apuestas, setApuestas] = useState([]);
  const navigate = useNavigate();

  const loadApuestas = () => {
    let request = "api/Apuestas";
    axios.get(url + request).then((response) => {
      setApuestas(response.data);
    });
  };

  useEffect(() => {
    loadApuestas();
  }, []);

  return (
    <Container className="flex flex-col items-center">
      <button
        className="btn btn-danger"
        onClick={() => navigate("/apuestas/crear")}
      >
        Realizar apuesta
      </button>
      {apuestas.length != 0 && (
        <>
          <table className="text-center table table-info">
            <thead>
              <tr className="font-bold">
                <td>USUARIO</td>
                <td>RESULTADO</td>
                <td>FECHA</td>
              </tr>
            </thead>
            <tbody>
              {apuestas.map((ap, index) => {
                return (
                  <tr key={index}>
                    <td>{ap.usuario}</td>
                    <td>{ap.resultado}</td>
                    <td>{ap.fecha}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </Container>
  );
};

export default Apuestas;
