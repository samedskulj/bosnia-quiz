import React, { useState } from "react";
import { Modal, Button, Nav } from "react-bootstrap";
const KontaktPodaci = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Nav.Link variant="primary" onClick={handleShow}>
        O kvizu
      </Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>O kvizu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Kviz napravljen za zabavu i obrazovanje. Nije napravljen da uvrijedi
            bilo koga, već da se ponovi znanje vezano za Bosnu i Hercegovinu,
            ili da se nauči nešta novo. Sretno sa kvizom!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Zatvori
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default KontaktPodaci;
