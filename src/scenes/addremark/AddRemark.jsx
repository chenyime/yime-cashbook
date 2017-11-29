import React, { Component } from 'react';
import { 
	NavBar, 
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

  cancelClick = () => {
    this.history.push("/create");
  }

  handleConfirm = () => {
    if (this.state.content) {
      this.history.push({ pathname: "/create", state: { content: this.state.content }});
    } else {
      this.history.push("/create");
    }
  }

  componentDidMount() {
    if(this.history.location.state) {
      this.setState({ 
        category: this.history.location.state.category,
        categoryContent: this.history.location.state.categoryContent, 
        money: this.history.location.state.money,
        type: this.history.location.state.type,
      });
    }
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
          <div className={classNames({ outSelected : outcome }, { inSelected : income })}>
            <Icon type={this.state.category} size={24} color="white" />
            <span className="category">{this.state.categoryContent}</span>
            <span className="money">{this.state.money}</span>
          </div>
        </div>
        
      </div>
    )
  }
};