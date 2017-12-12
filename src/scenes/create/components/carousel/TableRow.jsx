import React from 'react';
import { Icon } from 'components';
import './TableRow.css'
import * as classNames from 'classnames';

export const TableRow = ({ contents, onChange, value, type }) => {

  const outcome = type === '支出' ? 1 : 0;
  const income = type === '支出' ? 0 : 1;

  return (
      <div className="yime-items">
          {contents.map(function(item, index) {
              return (
                  <div className={classNames("item", { outcomeSelected : item.type === value && outcome }, { incomeSelected : item.type === value && income })} onClick={() => onChange(item.type, item.content)} key={index} >
                      <Icon type={item.type} size={24} />
                      <p>{item.content}</p>
                  </div>
              );
          })}
          {/* <div className="item">
              <Icon type={type[0]} size={24} />
              <p>{content[0]}</p>
          </div>
          <div className="item">
              <Icon type={type[1]} size={24} />
              <p>{content[1]}</p>
          </div>
          <div className="item">
              <Icon type={type[2]} size={24} />
              <p>{content[2]}</p>
          </div>
          <div className="item">
              <Icon type={type[3]} size={24} />
              <p>{content[3]}</p>
          </div>
          <div className="item">
              <Icon type={type[4]} size={24} />
              <p>{content[4]}</p>
          </div> */}
      </div>
  )
}