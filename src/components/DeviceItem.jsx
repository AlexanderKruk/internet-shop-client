import React from 'react';
import { Col, Card, Image } from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import star from '../assets/star.png'
import { useHistory } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

export const DeviceItem = observer(({ device }) => {
  const history = useHistory()
  return (
    <Col md={3} className='mt-3' onClick={() => history.push(`${DEVICE_ROUTE}/${device.id}`)}>
      <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
        <Image style={{height: 150, width: 150, objectFit: 'cover' }} src={`${process.env.REACT_APP_API_URL}/${device.img}`}></Image>
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>{device.name}</div>
          <div className="d-flex align-items-center">
            <div style={{color: 'black'}}>{device.rating}</div>
            <Image src={star} style={{height: 18, width: 18}}></Image>
          </div>
        </div>
      </Card>
    </Col>
  );
});

export default DeviceItem;
