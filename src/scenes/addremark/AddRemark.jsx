import React, { Component } from 'react';
import { 
  NavBar, 
  TextareaItem,
} from 'antd-mobile';
import { Icon } from 'components';
import * as classNames from 'classnames';
import './AddRemark.css';

export class AddRemark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    }
    this.history = this.props.history;
  }

  changeTwoDecimal = (v) => {
    v = (Math.round(v * 100) / 100).toString();
    let index = v.indexOf('.');
    if (index < 0) {
      index = v.length;
      v += '.';
    }
    while (v.length <= index + 2) {
      v += '0';
    }
    return v
  }

  cancelClick = () => {
    this.history.push("/create");
  }

  handleConfirm = () => {
    if (this.state.content) {
      this.history.push({ 
        pathname: "/create", 
        state: { 
          content: this.state.content, 
          money: this.state.money, 
          category: this.state.category, 
          categoryContent: this.state.categoryContent, 
          type: this.state.type ,
        }
      });
    } else {
      this.history.push("/create");
    }
  }

  handleContentChange = (v) => {
    this.setState({ content: v });
  }

  componentDidMount() {
    if(this.history.location.state) {
      this.setState({ 
        category: this.history.location.state.category,
        categoryContent: this.history.location.state.categoryContent, 
        money: this.history.location.state.money,
        type: this.history.location.state.type,
        content: this.history.location.state.content,
        date: this.history.location.state.date,
      });
    }
    this.autoFocus.focus();
  }

  render() {
    const outcome = this.state.type === '支出' ? 1 : 0;
    const income = this.state.type === '支出' ? 0 : 1;
    return (
      <div>
        <NavBar 
          mode="light" 
          leftContent={<div onTouchEnd={this.cancelClick}>取消</div>} 
          rightContent={<div onTouchEnd={this.handleConfirm}>完成</div>}
        >
          详情
        </NavBar>
        <div className="yime-addremark-detail">
          <span className="date">{this.state.date}</span>
          <div className={classNames({ outSelected : outcome }, { inSelected : income })}>
            <Icon type={this.state.category} size={24} color="white" />
            <span className="category">{this.state.categoryContent}</span>
            <span className="money">{this.changeTwoDecimal(this.state.money)}</span>
          </div>
        </div>
        <TextareaItem
          maxLength={50}
          rows={4}
          placeholder="说点什么"
          value={this.state.content}
          onChange={this.handleContentChange}
          ref={el => this.autoFocus = el}
        />
      </div>
    )
  }
};