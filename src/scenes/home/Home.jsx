import React, { Component } from 'react';
import { 
    NavBar, 
    Icon,
    DatePicker,
    SegmentedControl,
} from 'antd-mobile';
import { Detail, Forms, Accounts } from './tabs';
import { 
    Route,
    Switch,
    Link,
} from 'react-router-dom';
import './Home.css';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

class Total extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: now,
        }
    }

    render() {
        return (
            <div className="home-total">
                <div className="home-monthPick">
                    <p>{this.state.date.getFullYear()}年</p>
                    <p>{this.state.date.getMonth()+1}月</p>
                    <DatePicker 
                        mode="month"
                        title="select month"
                        value={this.state.date}
                        onChange={date => this.setState({ date })}
                    >
                    <i><Icon key="0" type="down" /></i>
                    </DatePicker>
                </div>
                <div className="home-outcome">
                    <p>支出（元）</p>
                    <p>0.00</p>
                </div>
                <div className="home-income">
                    <p>收入（元）</p>
                    <p>0.00</p>
                </div>
            </div>
        );
    }
}

export const Home = (props) => {
    console.log(props);//由router传入（history，location，match）
    const { location, history } = props;
    const onChange = (e) => {
        console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
        switch(e.nativeEvent.selectedSegmentIndex) {
            case 0:
                history.push("/");
                break;
            case 1:
                history.push("/forms");
                break;
            case 2:
                history.push("/accounts");
                break;
        }
    };

    const { pathname } = location;
    let index = 0;
    switch(pathname) {//不同路径设置不同的默认selectedIndex
        case "/":
            index = 0;
            break;
        case "/forms":
            index = 1;
            break;
        case "/accounts":
            index = 2;
            break;
    }

    return (
        <div>
            <NavBar
                mode="dark"
                leftContent = {
                    <Icon key="0" type="ellipsis" /> 
                }
            >记账本</NavBar> 
            <Total />
            <SegmentedControl
                values={['明细', '类别报表', '账户']}
                onChange={onChange}
                className="home-segment"
                selectedIndex={index}
            />
            <Switch>
                <Route exact strict path="/" component={Detail}/>
                <Route exact strict path="/forms" component={Forms}/>
                <Route exact strict path="/accounts" component={Accounts}/>
            </Switch>

            
            <Link to="/create">
                <div className="home-bottom">
                    <i className="iconfont icon-add"></i>
                    <span>记一笔</span>
                </div>
            </Link>
        </div>
    )
}

