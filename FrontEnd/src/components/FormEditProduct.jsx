//React-Booptrap
import { Button, Form, Modal } from "react-bootstrap";
//Hooks
import React, { useEffect, useRef } from "react";
//Dispach
import { useDispatch } from "react-redux";
import { uptadeProduct } from "../redux/slices/productsSlice";

const FormEditProduct = ({ showUpdate, setShowUpdate, product }) => {
  //useRef
  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRef = useRef(null);
  const imageRef = useRef(null);

  //Redux
  const dispatch = useDispatch();

  useEffect(() => {
    if (product) {
      titleRef.current.value = product.title;
      priceRef.current.value = product.price;
      descriptionRef.current.value = product.description;
      categoryRef.current.value = product.category;
      imageRef.current.value = product.image;
    }
  }, [product]);

  const handleValidateForm = () => {
    if (titleRef.current.value == "") {
      return alert("El titulo es obligatoria");
    }
    if (priceRef.current.value == "") {
      return alert("el precio es obligatorio");
    }

    if (descriptionRef.current.value == "") {
      return alert("La discripcion es obligatoria");
    }

    if (categoryRef.current.value == "") {
      return alert("la categoria es obligatoria");
    }

    const productUpdate = {
      _id: product._id,
      title: titleRef.current.value,
      price: priceRef.current.value,
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
      image: imageRef.current.value,
    };
    dispatch(uptadeProduct(productUpdate));
    setShowUpdate(false);

    titleRef.current.value = null;
    priceRef.current.value = null;
    descriptionRef.current.value = null;
    categoryRef.current.value = null;
    imageRef.current.value = null;
  };

  return (
    <>
      <Modal show={showUpdate} onHide={() => setShowUpdate(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Productos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="mb-3">
            <Form.Label htmlFor="titulo">Titulo</Form.Label>
            <input
              type="text"
              id="titulo"
              ref={titleRef}
              className="form-control"
              placeholder="Ingrese el titulo"
            />
          </section>
          <section className="mb-3">
            <Form.Label htmlFor="precio">Precio</Form.Label>
            <input
              type="number"
              id="precio"
              ref={priceRef}
              className="form-control"
              placeholder="Ingrese el precio"
            />
          </section>

          <section className="mb-3">
            <Form.Label htmlFor="descripcion">Descripcion</Form.Label>
            <input
              type="text"
              id="descripcion"
              ref={descriptionRef}
              className="form-control"
              placeholder="Ingrese una descripcion"
            />
          </section>
          <section className="mb-3">
            <Form.Label htmlFor="imagen">Categoria</Form.Label>
            <input
              type="text"
              id="imagen"
              ref={categoryRef}
              className="form-control"
              placeholder="Ingrese categoria"
            />
          </section>

          <section className="mb-3">
            <Form.Label htmlFor="imagen">Imagen</Form.Label>
            <input
              type="text"
              id="imagen"
              ref={imageRef}
              className="form-control"
              placeholder="Ingrese la url imagen"
            />
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleValidateForm}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormEditProduct;
