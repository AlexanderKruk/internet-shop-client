import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import { createBrand } from '../../http/deviceApi'

const CreateBrand = ({show, onHide}) => {
  const [brand, setBrand] = useState()
  const addBrand = () => {
    createBrand(brand).then(() => onHide())
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
        Add brand
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Control placeholder="New brand" value={brand} onChange={(e)=>{setBrand(e.target.value)}}/>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="outline-danger" onClick={() => onHide()}>Cancel</Button>
      <Button variant="outline-success" onClick={() => addBrand()}>Add</Button>
    </Modal.Footer>
  </Modal>
  );
};

export default CreateBrand;
