import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Pagination } from 'react-bootstrap';
import { Context } from '..';

const Pages = observer(() => {
  const {devices} = useContext(Context)
  const pageCount = Math.ceil(devices.totalCount / devices.limit)
  const pages = []
  for(let i=0; i<pageCount; i++) {
    pages.push(i+1)
  }
  return (
  <Pagination>
    {pages.map(page => 
      <Pagination.Item
        key={page} 
        active={devices.page === page} 
        onClick={() => devices.setPage(page)} 
        activeLabel="">
          {page}
      </Pagination.Item>)}
  </Pagination>
)});

export default Pages;
