import React, { useEffect, useRef } from "react";
//Styles
import loginModule from "./Login.module.css";
//Components
import Button from "../components/Button";
//React - BootStrap
import { CloseButton, Form, Modal } from "react-bootstrap";
//React-Router-Dom
import { useNavigate } from "react-router-dom";
//Redux
import { authUser, validateUser } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  //Navegacion entre componentes
  const navigate = useNavigate();

  //Referencia del login
  const emailRef = useRef(null);
  const passRef = useRef(null);

  //Redux - userSlice
  const { loading, email, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && loading == "succeeded") navigate("/admin");
  }, [loading, token, dispatch]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!(emailRef != null && emailRef.current.value != "")) {
      return;
    }
    if (!(passRef != null && passRef.current.value != "")) {
      return;
    }

    if (loading == "idle") console.log(loading);
    dispatch(
      validateUser({
        email: emailRef.current.value,
        password: passRef.current.value,
      })
    );

    emailRef.current.value = "";
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
                ref={emailRef}
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
