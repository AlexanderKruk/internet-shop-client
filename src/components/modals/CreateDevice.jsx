import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap'
import { Context } from '../..';
import { fetchBrands, fetchTypes, createDevice } from '../../http/deviceApi';

const CreateDevice = observer(({show, onHide}) => {
  const { devices } = useContext(Context)
  const [infoDevice, setInfoDevice] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [img, setImage] = useState('')

  useEffect(() => {
    fetchTypes().then( types => devices.setTypes(types))
    fetchBrands().then( brands => devices.setBrands(brands))
  }, [])

  const addInfoDevice = (title="", description="") => {
    setInfoDevice([...infoDevice, { title, description, number: Date.now()}])
  }

  const deleteInfoDevice = (id) => {
    setInfoDevice(infoDevice.filter( item => item.number !== id))
  }

  const selectImage = (e) => {
    setImage(e.target.files[0])
  }

  const changeInfo = (key, value, number) => {
    setInfoDevice(infoDevice.map((item) => item.number === number ? {...item, [key]: value} : item))
  }

  const addDevice = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', img)
    formData.append('brandId', devices._selectedBrand.id)
    formData.append('typeId', devices._selectedType.id)
    formData.append('info', JSON.stringify(infoDevice))
    createDevice(formData)
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
        Add device
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Dropdown className="mb-2">
          <Dropdown.Toggle>{devices._selectedType.name || 'Choose type'}</Dropdown.Toggle>
          <Dropdown.Menu>
            {devices._types.map((type) => <Dropdown.Item key={type.id} onClick={() => devices.setSelectedType(type)}>{type.name}</Dropdown.Item>)}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="mb-2">
          <Dropdown.Toggle>{devices._selectedBrand.name || 'Choose brand'}</Dropdown.Toggle>
          <Dropdown.Menu>
            {devices._brands.map((brand) => <Dropdown.Item key={brand.id} onClick={() => devices.setSelectedBrand(brand)}>{brand.name}</Dropdown.Item>)}
          </Dropdown.Menu>
        </Dropdown>
      </Form>
      <Form.Control placeholder="Name" className="mb-2" value={name} onChange={(e) => setName(e.target.value)}/>
      <Form.Control placeholder="Price" type="number" min="0" className="mb-2" value={price} onChange={(e) => setPrice(+e.target.value)}/>
      <Form.Control placeholder="Picture" type="file" className="mb-2" onChange={selectImage}/>
      <hr/>
      <Button  onClick={() => addInfoDevice()}>Add new property</Button>
        {infoDevice.map((item) => {
          return (
            <Row className="mt-4" key={item.number}>
              <Col md={4}>
                <Form.Control onChange={(e) => changeInfo('title', e.target.value, item.number)}/>
              </Col>
              <Col md={4}>
                <Form.Control onChange={(e) => changeInfo('description', e.target.value, item.number)}/>
              </Col>
              <Col md={4}>
                <Button onClick={() => deleteInfoDevice(item.number)}>Delete</Button>
              </Col>
            </Row>
          )
        })}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="outline-danger" onClick={() => onHide()}>Cancel</Button>
      <Button variant="outline-success" onClick={() => addDevice()}>Add</Button>
    </Modal.Footer>
  </Modal>
  );
});

export default CreateDevice;