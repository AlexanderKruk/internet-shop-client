import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite'
import { Context } from '../index';
import { ListGroup } from 'react-bootstrap'

const TypeBar = observer(() => {
  const { devices }  = useContext(Context)
  return (
  <ListGroup>
    {devices._types.map((device) => 
    <ListGroup.Item 
      key={device.id}
      style={{cursor: 'pointer'}}
      active={device.id === devices._selectedType.id}
      onClick={() => devices.setSelectedType(device)}
      >
        {device.name}
    </ListGroup.Item>)}
  </ListGroup>
)});

export default TypeBar;