import React, { Component } from 'react';
import { 
  NavBar, 
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
import { Icon } from 'components';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

class Total extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: now,
    }
  }
  
  render() {
    const { date } = this.state;
    return (
      <div className="home-total">
        <div className="home-monthPick">
          <p>{date.getFullYear()}年</p>
          <p>{date.getMonth()+1}月</p>
          <DatePicker 
            mode="month"
            title=""
            value={date} 
            onChange={date=> this.setState({ date })}
          >
            <i>
              <Icon type="xiaosanjiao" size={12} />
            </i>
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
      default:
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
    default:
      break;
  }
  
  return (
    <div>
      <NavBar
        mode="dark"
        leftContent = {
          <Icon type="gengduo" size={16} /> 
        }
      >
        记账本
      </NavBar> 
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
          <Icon type="add" size={32} />
          <span>记一笔</span>
        </div>
      </Link>
    </div>
  )
}

