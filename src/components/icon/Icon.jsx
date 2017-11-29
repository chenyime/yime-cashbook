import React, { Component } from 'react';
import * as classNames from 'classnames';

export const Icon = ({ type, size, color, className, onClick = () => {} }) => {
  return (
    <i className={classNames('iconfont', `icon-${type}`, className)} style={{ fontSize: `${size}px`, color }} onClick={onClick} ></i>
  )
}