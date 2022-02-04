import React, { useContext, useEffect, useState } from 'react';
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import bigStar from '../assets/bigStar.png'
import SetRate from '../components/modals/SetRate';
import { fetchOneDevice, addToCart } from '../http/deviceApi';
import { Context } from '../'

const Device = () => {
  const [device, setDevice]= useState({ info: [] })
  const [ratingModalVisible, setRatingModalVisible] = useState(false);
  const {id} = useParams()
  const { user } = useContext(Context)

  useEffect(() => {
    fetchDevice()
  }, [])

  const fetchDevice = () => {
    fetchOneDevice(id, user.user.id).then(device => setDevice(device))
  }


  return (
    <Container className="mt-2">
      <SetRate 
        show={ratingModalVisible} 
        onHide={() => setRatingModalVisible(false)}
        currentRate={device.userRating}
        deviceId={id} 
        userId={user.user.id}
        fetchDevice={fetchDevice}
        />
      <Row>
        <Col md={4}>
          <Image 
            height={300} 
            width={300} 
            src={device.img ? `${process.env.REACT_APP_API_URL}/${device.img}` : ""} 
            style={{objectFit: 'cover'}}/>
        </Col>
        <Col md={4}>
          <Row className="d-flec flex-column align-items-center">
            <h2>{device.name}</h2>
            <div className="d-flex align-items-center justify-content-center"
              style={{background: `url(${bigStar}) no-repeat center center`,
                      width: 240, 
                      height: 240,
                      backgroundSize: 'cover',
                      fontSize: 64 }}>
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card className="d-flex flex-column align-items-center justify-content-around" 
                style={{height: 300, width: 300, fontSize: 32, border: '5px solid lightgray'}}>
            <h3>From: {device.price}$</h3>
            <Button variant="outline-dark" onClick={() => addToCart(id)}>Add to cart</Button>
            {user.isAuth && <Button variant="outline-dark" onClick={() => setRatingModalVisible(true)}>Rate</Button>}
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        {device?.info.map(({title, description}, index)=> 
          <Row 
            key={description} 
            style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
              {title}: {description}
          </Row>)}
      </Row>
    </Container>
  );
};

export default Device;
