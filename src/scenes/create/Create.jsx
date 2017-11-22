import React, { Component } from 'react';
import { 
    NavBar, 
    Icon,
    Popover
} from 'antd-mobile';
import * as classNames from 'classnames';

const MyIcon = ({ className }) => <i className={classNames('iconfont', className)}></i>
const Item = Popover.Item;

export class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visiable: false,
            selected: '支出',
        }
        this.history = this.props.history;
    }

    cancelClick = () => {
        this.history.push("/");
    }

    onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
          visible: false,
          selected: opt.props.value,
        });
      };
      handleVisibleChange = (visible) => {
        this.setState({
          visible,
        });
      };

    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    rightContent={
                        <div onTouchEnd={this.cancelClick}>取消</div> //
                    }
                >
                    <Popover mask
                        visible={this.state.visiable}
                        overlay={[
                            (<Item key="0" value="支出" icon={<MyIcon className="icon-fukuan" />} data-seed="logId">支出</Item>),
                            (<Item key="1" value="收入" icon={<MyIcon className="icon-shoukuan" />} style={{ whiteSpace: 'nowrap' }}>收入</Item>),
                        ]}
                        align={{
                            overflow: { adjustY: 0, adjustX: 0 },
                            offset: [0, 20],
                        }}
                        onVisibleChange={this.handleVisibleChange}
                        onSelect={this.onSelect}
                    >
                        <div>
                            {this.state.selected}
                            <Icon key="0" type="down" />
                        </div>
                        
                    </Popover>
                </NavBar>
            </div>
        )
    }
}