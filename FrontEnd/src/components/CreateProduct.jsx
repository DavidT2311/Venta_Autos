import { useState,useId} from "react";
import { useDispatch} from "react-redux";
import { Modal, Form, Button, Spinner} from "react-bootstrap";
import { createProduct} from "../redux/slices/productsSlice/";


const FormCreateProduct = ({ Txttitle, TxtBtn, TxtBtnIn }) => {
  const baseId = useId();
  const [counter, setCounter] = useState(22);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();
  
  
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});
  const handleShow = () => setShowModal(true);
  const handleClose = () => {
  setShowModal(false);
  setErrors({}); 
  setTitle('');
  setPrice('');
  setDescription('');
  setCategory('');
  setImage('');
  };
  
  const validate =  () => {
  const newErrors = {};
    if (!title.trim()) {
      newErrors.title = "El título es obligatorio.";
    }
    if (!price.trim() && isNaN(price)) {
      newErrors.price = "El precio debe ser un número válido.";
    }
    if (!description.trim()) {
      newErrors.description = "La descripción es obligatoria.";
    }
    if (!category.trim()) {
      newErrors.category = "La categoría es obligatoria.";
    }
    if (
      !image.trim() && !image.startsWith("http")
    ) {
      newErrors.image = "La URL de la imagen debe ser válida.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  
  };
  const handleClick =  () => {
    if(!validate()) return;
    const Id = `${baseId}-${counter}`
    const newproduct = {
      _id: Id,
      title: title,
      price: price,
      description: description,
      category: category,
      image: image,
      rating: {
        rate: 1,
        count: 4,
      }
    };
    dispatch(createProduct(newproduct));
    setCounter(counter + 1);
    handleClose()
  };
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-end mb-3">
        <Button variant="secondary" onClick={handleShow}>
          {TxtBtn}
        </Button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{Txttitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Introduce el título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
                value={image}
                onChange={(e) => setImage(e.target.value)}
                isInvalid={!!errors.image}
              />
              <Form.Control.Feedback type="invalid">
                {errors.image}
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClick} disabled={loading}>
            {loading ? (
              <Spinner as="span" animation="border" size="sm" />
            ) : (
              TxtBtnIn
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FormCreateProduct;
