import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import { createRate } from '../../http/deviceApi';

const SetRate = ({show, onHide, currentRate, deviceId, fetchDevice}) => {
  const [rate, setRate] = useState()

  const onSetRate = () => {
    if(rate) {
     createRate(rate, deviceId).then(() => fetchDevice()).then(() => onHide())
    } else {
      onHide()
    }
  }

  useEffect(() => {
    setRate(currentRate)
  }, [currentRate])

  return (
    <Modal
    show={show}
    onHide={onHide}
    size="sm"
    centered
  >
    <Modal.Header>
      <Modal.Title id="contained-modal-title-vcenter">
        Set rating
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="align-self-center">
    <Form.Select value={rate} onChange={(e) => {setRate(+e.target.value)}}>
      <option>Choose rate</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </Form.Select>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="outline-danger" onClick={() => onHide()}>Cancel</Button>
      <Button variant="outline-success" onClick={() => onSetRate()}>Rate</Button>
    </Modal.Footer>
  </Modal>
  );
};

export default SetRate;