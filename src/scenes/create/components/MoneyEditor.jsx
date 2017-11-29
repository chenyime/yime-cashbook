import React, {Component} from 'react';
import TouchFeedBack from 'rmc-feedback';
import { Icon } from 'components';

export const Item = ({ className, onClick, children }) => {
  return (
    <TouchFeedBack activeClassName="am-number-keyboard-item-active">
      {children}
    </TouchFeedBack>
  );
}

export class MoneyEditor extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '0',
    }
  }

  handleItemClick = (v) => {
    const { onChange } = this.props;
    this.handleValueChange(''+this.state.inputValue+v);
    onChange(this.state.inputValue);
  }

  handleValueChange = (v) => {
    if (v.length > 1 && v[0] === '0' && v[1] !== '.') {
      return this.setState({ inputValue: v.substring(1) });
    }
		if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
			if (v === '.') {
				this.setState({ inputValue: '0.' });
      }
      return;
    }
    if (!v) {
      return this.setState({ inputValue: '0' });
    }
		this.setState({ inputValue: v });
	}

  handleDeleteClick = () => {
    if (this.state.inputValue) {
      this.handleValueChange(this.state.inputValue.substring(0, this.state.inputValue.length-1));
    }
  }

  handleClean = () => {
    this.setState({ inputValue: '0' });
  }

  render() {
    const { onConfirm } = this.props;
    return (
      <div className="yime-create-editor">
        <p className="yime-create-price">
          {this.state.inputValue}
          <Icon className="yime-create-clear" type="guanbi" size={20} color="#ccc" onClick={this.handleClean} />
        </p>
        <div id="am-number-keyboard-container">
          <div className="am-number-keyboard-wrapper">
            <table>
              <tbody>
                <tr>
                  {[1, 2, 3].map(i => (
                    <Item key={i}>
                      <td className="am-number-keyboard-item" onClick={() => this.handleItemClick(i)}>{i}</td>
                    </Item>
                  ))}
                  <Item>
                    <td className="am-number-keyboard-item keyboard-delete" rowSpan="2" onClick={this.handleDeleteClick}></td>
                  </Item>
                </tr>
                <tr>
                  {[4, 5, 6].map(i => (
                    <Item key={i}>
                      <td className="am-number-keyboard-item" onClick={() => this.handleItemClick(i)}>{i}</td>
                    </Item>
                  ))}
                </tr>
                <tr>
                  {[7, 8, 9].map(i => (
                    <Item key={i}>
                      <td className="am-number-keyboard-item" onClick={() => this.handleItemClick(i)}>{i}</td>
                    </Item>
                  ))}
                  <Item>
                    <td className="am-number-keyboard-item keyboard-confirm" rowSpan="2" onClick={onConfirm}>确定</td>
                  </Item>
                </tr>
                <tr>
                  <Item>
                    <td className="am-number-keyboard-item" onClick={() => this.handleItemClick('.')}>.</td>
                  </Item>
                  <Item>
                    <td className="am-number-keyboard-item" colSpan="2" onClick={() => this.handleItemClick(0)}>0</td>
                  </Item>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};