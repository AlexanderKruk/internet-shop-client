import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap'
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';

function Admin() {
  const [brandModalVisible, setBrandModalVisible] = useState(false)
  const [typeModalVisible, setTypeModalVisible] = useState(false)
  const [deviceModalVisible, setDeviceModalVisible] = useState(false)
  
  return (
    <Container className="d-flex flex-column">
      <Button variant='outline-dark' className="mt-4 p-2" onClick={() => setTypeModalVisible(true)}>Add type</Button>
      <Button variant='outline-dark' className="mt-4 p-2" onClick={() => setBrandModalVisible(true)}>Add brand</Button>
      <Button variant='outline-dark' className="mt-4 p-2" onClick={() => setDeviceModalVisible(true)}>Add device</Button>
      <CreateBrand show={brandModalVisible} onHide={() => setBrandModalVisible(false)}/>
      <CreateType show={typeModalVisible} onHide={() => setTypeModalVisible(false)}/>
      <CreateDevice show={deviceModalVisible} onHide={() => setDeviceModalVisible(false)}/>
    </Container>
  );
}

export default Admin;
