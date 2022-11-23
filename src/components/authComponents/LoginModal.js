import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const LoginModal = props =>  {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Welcome
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Cocktail</h4>
        <p>
          Désormais tu peux liker et commenter
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} style={{backgroundColor: ' #670BFF', border: '1px solid  #670BFF'}}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
