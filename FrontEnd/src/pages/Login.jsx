import React, { useEffect, useState, useRef } from "react";
//Styles
import loginModule from "./Login.module.css";
//Components
import Button from "../components/Button";
//React - BootStrap
import { CloseButton, Form, Modal } from "react-bootstrap";
//React-Router-Dom
import { useNavigate } from "react-router-dom";
//Redux
import { useDispatch, useSelector } from "react-redux";
//Cookies
import { useCookies } from "react-cookie";
//Services
import getTokenByUser from "../services/getTokenByUser";

const Login = () => {
  const [usernane, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  //Cookies
  const [cookies, setCookies] = useCookies(["User"]);

  //Navegacion entre componentes
  const navigate = useNavigate();

  //Referencia del login
  const usernameRef = useRef(null);
  const passRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = usernameRef.current.value;

    if (!(username != null && username != "")) {
      return;
    }
    if (!(password != null && password != "")) {
      return;
    }

    getTokenByUser({
      username,
      password,
    }).then((res) => {
      setCookies("User", { username, token: res.token });
      navigate("/admin");
    });

    usernameRef.current.value = "";
    passRef.current.value = "";
  };

  return (
    <>
      <Modal size="md" show={true}>
        <Modal.Header className={loginModule.modal_header}>
          <Modal.Title>Inicio de sesion</Modal.Title>
          <CloseButton onClick={() => navigate(-1)}></CloseButton>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            gap: "20px",
          }}
          className={loginModule.modal_body}
        >
          <Form className="w-100 px-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite el usuario"
                ref={usernameRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Usuario">
              <Form.Label>Clave</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite la clave"
                ref={passRef}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className={loginModule.modal_footer}>
          <Button
            text="Iniciar sesion"
            classes="blue"
            handleEvent={handleLogin}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
