import React, { useRef } from "react";
//Styles
import loginModule from "./Login.module.css";
//Components
import Button from "../components/Button";
//React - BootStrap
import { CloseButton, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  //Referencia del login
  const userRef = useRef(null);
  const passRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (userRef != null && userRef.current.value != "") {
      console.log(userRef.current.value);
    }
    if (passRef != null && passRef.current.value != "") {
      console.log(passRef.current.value);
    }
    userRef.current.value = "";
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
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite el usuario"
                ref={userRef}
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
