import React, { useRef, useState } from "react";
import { Modal, Form, Button, Spinner } from "react-bootstrap";

const FormCreateProduct = () => {
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const rateRef = useRef();
  const countRef = useRef();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); 
  const [messageType, setMessageType] = useState(""); 
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setErrors({});
  };

  const validate = () => {
    const newErrors = {};

    if (!titleRef.current.value.trim()) {
      newErrors.title = "El título es obligatorio.";
    }

    if (!priceRef.current.value.trim() || isNaN(priceRef.current.value)) {
      newErrors.price = "El precio debe ser un número válido.";
    }

    if (!descriptionRef.current.value.trim()) {
      newErrors.description = "La descripción es obligatoria.";
    }

    if (!categoryRef.current.value.trim()) {
      newErrors.category = "La categoría es obligatoria.";
    }

    if (
      !imageRef.current.value.trim() ||
      !imageRef.current.value.startsWith("http")
    ) {
      newErrors.image = "La URL de la imagen debe ser válida.";
    }

    if (rateRef.current.value && (isNaN(rateRef.current.value) || rateRef.current.value < 0 || rateRef.current.value > 5)) {
      newErrors.rate = "La calificación (rate) debe ser un número entre 0 y 5.";
    }

    if (countRef.current.value && (isNaN(countRef.current.value) || countRef.current.value < 0)) {
      newErrors.count = "El número de valoraciones (count) debe ser un entero positivo.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="container mt-5">
      

      <div className="d-flex justify-content-end mb-3">
        <Button variant="secondary" onClick={handleShow}>
          Agregar Nuevo Producto
        </Button>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Introduce el título"
                ref={titleRef}
                isInvalid={!!errors.title}
              />
              <Form.Control.Feedback type="invalid">
                {errors.title}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                placeholder="Introduce el precio"
                ref={priceRef}
                isInvalid={!!errors.price}
              />
              <Form.Control.Feedback type="invalid">
                {errors.price}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Introduce la descripción"
                ref={descriptionRef}
                isInvalid={!!errors.description}
              />
              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCategory">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type="text"
                placeholder="Introduce la categoría"
                ref={categoryRef}
                isInvalid={!!errors.category}
              />
              <Form.Control.Feedback type="invalid">
                {errors.category}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formImage">
              <Form.Label>URL de la Imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="Introduce la URL de la imagen"
                ref={imageRef}
                isInvalid={!!errors.image}
              />
              <Form.Control.Feedback type="invalid">
                {errors.image}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRate">
              <Form.Label>Calificación (Rate)</Form.Label>
              <Form.Control
                type="number"
                step="0.1"
                placeholder="Introduce la calificación entre 0-5"
                ref={rateRef}
                isInvalid={!!errors.rate}
              />
              <Form.Control.Feedback type="invalid">
                {errors.rate}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCount">
              <Form.Label>Número de comprados (Count)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Introduce el número de valoraciones"
                ref={countRef}
                isInvalid={!!errors.count}
              />
              <Form.Control.Feedback type="invalid">
                {errors.count}
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={validate} disabled={loading}>
            {loading ? (
              <Spinner as="span" animation="border" size="sm" />
            ) : (
              "Crear Producto"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FormCreateProduct;
