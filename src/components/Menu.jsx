import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import Global from "./Global";
import axios from "axios";

function Menu() {
  let navigate = useNavigate();
  const [equipos, setEquipos] = useState([]);
  const url = Global.apiApuestas;

  const loadEquipos = () => {
    let request = "api/Equipos";

    axios.get(url + request).then((response) => {
      setEquipos(response.data);
    });
  };

  useEffect(() => {
    loadEquipos();
  });

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="flex items-center">
          <img src={logo} className="w-48 h-32" />
          <span className="text-2xl">Champions</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/apuestas")}>Apuestas</Nav.Link>
            <NavDropdown title="Equipos" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> */}
              {equipos.map((equipo, index) => {
                return (
                  <NavDropdown.Item
                    key={index}
                    onClick={() => navigate(`/equipo/${equipo.idEquipo}`)}
                  >
                    {equipo.nombre}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
