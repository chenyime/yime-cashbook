import React, { Component } from 'react';
import { Icon } from 'components';
import { TableRow } from './TableRow';

export const CarouselPage = ({ contents, onChange, value, type }) => {
  return (
    <div style={{
      marginTop: "30px"
    }}>
      {contents.map(function (item, index) {
        return <TableRow contents={item} key={index} onChange={onChange} value={value} type={type}/>;
      })}
    </div>
  )
}