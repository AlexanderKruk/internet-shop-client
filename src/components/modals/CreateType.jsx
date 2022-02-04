import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import { createType } from '../../http/deviceApi';

const CreateType = ({show, onHide}) => {
  const [type, setType] = useState()
  const addType = () => {
    createType(type).then(() => onHide())
  }
  return (
    <Modal
    show={show}
    onHide={onHide}
    size="lg"
    centered
  >
    <Modal.Header>
      <Modal.Title id="contained-modal-title-vcenter">
        Add type
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Control placeholder="New type" value={type} onChange={(e) => setType(e.target.value) } />
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="outline-danger" onClick={() => onHide()}>Cancel</Button>
      <Button variant="outline-success" onClick={() => addType()}>Add</Button>
    </Modal.Footer>
  </Modal>
  );
};

export default CreateType;