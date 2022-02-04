import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Row, Card } from 'react-bootstrap';
import { Context } from '../index';

const BrandBar = observer(() => {
  const { devices }  = useContext(Context)

  return (
    <Row className="ml-0">
      {devices._brands.map(brand => 
        <Card 
          key={brand.id}
          className="p-3 mr-2"
          style={{cursor: 'pointer'}}
          border={devices._selectedBrand.id === brand.id ? 'danger' : 'lite'}
          onClick={() => devices.setSelectedBrand(brand)}>
          {brand.name}
        </Card>
      )}
    </Row>
  );
});

export default BrandBar;
