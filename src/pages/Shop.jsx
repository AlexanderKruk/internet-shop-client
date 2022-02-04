import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Context } from '..';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar'
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceApi';
import Pages from '../components/Pages'

const Shop = observer(() => {
  const { devices } = useContext(Context)
 
  useEffect(() => {
    fetchTypes().then( types => devices.setTypes(types))
    fetchBrands().then( brands => devices.setBrands(brands))
  }, [])

  useEffect(()=> {
    fetchDevices(devices.selectedBrand.id, devices.selectedType.id, devices.page, devices.limit).then( data => { 
      devices.setDevices(data.rows)
      devices.setTotalCount(data.count)
    })
  }, [devices.page, devices.selectedType, devices.selectedBrand])

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar/>
          <DeviceList/>
          <Pages/>
        </Col>
      </Row>
    </Container>
  );
})

export default Shop;
