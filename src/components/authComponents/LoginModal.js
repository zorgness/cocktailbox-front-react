import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const LoginModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Welcome to</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>CocktailBox</h4>
        <p>Now you are able to like and give reviews</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={props.onHide}
          style={{ backgroundColor: " #670BFF", border: "1px solid  #670BFF" }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
