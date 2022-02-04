import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap'
import { fetchCart } from '../http/deviceApi'

function Cart() {

  const [devices, setDevices] = useState([])
  useEffect(()=> {
    fetchCart().then(data => setDevices(data))
  }, [])
  return (
    <Table striped bordered hover className="mt-4">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    {devices.map((item, index)=>(
      <tr>
        <td>{index+1}</td>
        <td>{item.device.name}</td>
        <td>{item.device.price}</td>
      </tr>
    ))}
      <tr>
        <td></td>
        <td style={{textAlign: 'right'}}>All cost</td>
        <td>{devices.reduce((acc, item) => acc + item.device.price, 0)}</td>
      </tr>
  </tbody>
</Table>
  );
}

export default Cart;
