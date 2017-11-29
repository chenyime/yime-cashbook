import React, { Component } from 'react';
import { 
	NavBar, 
	Popover,
	Carousel,
	InputItem,
} from 'antd-mobile';
import { 
  Link,
} from 'react-router-dom';
import { Icon } from 'components';
import { CarouselPage } from './components';
import './Create.css';
import { MoneyEditor } from 'scenes/create/components/MoneyEditor';

const Item = Popover.Item;

const outdata = [
	[
		[{content: "一般", type: "yiban"}, {content: "餐饮", type: "canyin"}, {content: "购物", type: "gouwu"}, {content: "服饰", type: "fushi"}, {content: "交通", type: "jiaotong"}], 
		[{content: "娱乐", type: "yule"}, {content: "社交", type: "shejiao"}, {content: "居家", type: "jujia"}, {content: "通讯", type: "tongxun"}, {content: "零食", type: "lingshi"}], 
		[{content: "美容", type: "meirong"}, {content: "运动", type: "yundong"}, {content: "旅行", type: "lvxing"}, {content: "数码", type: "shuma"}, {content: "学习", type: "xuexi"}]
	],
	[
		[{content: "医疗", type: "yiliao"}, {content: "书籍", type: "shuji"}, {content: "宠物", type: "chongwu"}, {content: "彩票", type: "caipiao"}, {content: "汽车", type: "qiche"}], 
		[{content: "办公", type: "bangong"}, {content: "住房", type: "zhufang"}, {content: "维修", type: "weixiu"}, {content: "孩子", type: "haizi"}, {content: "长辈", type: "changbei"}], 
		[{content: "礼物", type: "liwu"}, {content: "礼金", type: "lijin"}, {content: "还款", type: "huankuan"}, {content: "捐赠", type: "juanzeng"}, {content: "理财", type: "licai"}]
	],
	[[{content: "添加", type: "tianjialeimu"}]],
];

const indata = [
	[[{content: "工资", type: "gongzi"}, {content: "兼职", type: "jianzhi"}, {content: "理财", type: "licaishouyi"}, {content: "礼金", type: "lijin"}, {content: "其他", type: "qitashouru"}]],
	[[{content: "添加", type: "tianjialeimu"}]],
];

const TYPE = { in: '收入', out: '支出' };

export class Create extends Component {
	constructor(props) {
    super(props);
    console.log(props);
		this.state = {
			visiable: false,
			type: TYPE.out,
      category: 'yiban',
      categoryContent: '一般',
      money: '0.00',
      content: '添加备注信息',
		}
    this.history = this.props.history;
	}
	
	cancelClick = () => {
		this.history.push("/");
	}
	
	onSelect = (opt) => {
		// console.log(opt.props.value);
		if (opt.props.value === TYPE.out) {
			this.setState({ 
				visible: false,
				type: opt.props.value,
			});
		} else if (opt.props.value === TYPE.in) {
			this.setState({ 
				visible: false,
				type: opt.props.value,
			});
		}
  };
  
	handleVisibleChange = (visible) => {
		this.setState({
			visible,
		});
	};
  
  handleConfirm = (v) => {

  }

  handleMoneyChange = (money) => {
    this.setState({ money });
  }

  handleCategorySelect = (category, categoryContent) => {
    this.setState({ category, categoryContent });
  }

  componentDidMount() {
    if(this.history.location.state) {
      this.setState({ content: this.history.location.state.content });
    }
  }
	
	render() {
		return (
			<div>
				<NavBar mode="light" rightContent={<div onTouchEnd={this.cancelClick}>取消</div>}>
          <Popover
            mask
            visible={this.state.visiable}
            overlay={[
              (<Item key="0" value="支出" icon={<Icon className="icon-fukuan" size="16px" />}
              data-seed="logId">支出</Item>), 
              (<Item key="1" value="收入" icon={<Icon className="icon-shoukuan" size="16px" />} style={{ whiteSpace: 'nowrap' }}>收入</Item>), 
            ]} 
            align={{ overflow: { adjustY: 0, adjustX: 0 }, offset: [0, 20], }}
            onVisibleChange={this.handleVisibleChange}
            onSelect={this.onSelect} 
          >
            <div>
              {this.state.type}
              <Icon type="xiaosanjiao" size={12} />
            </div>
          </Popover>
				</NavBar>
				<Carousel 
					className="yime-create-carousel" 
					autoplay={false} 
					infinite selectedIndex={0} 
					swipeSpeed={35} 
				> 
					{(this.state.type === TYPE.out ? outdata : indata ).map((item, index) => (
            <div key={index} style={{ height: "210px" }} >
						  <CarouselPage contents={item} onChange={this.handleCategorySelect} value={this.state.category} type={this.state.type}/> 
            </div>
					))}
				</Carousel>
        
        <Link to={{ pathname : "/addremark", state : { category: this.state.category, categoryContent: this.state.categoryContent, money: this.state.money, type: this.state.type } }} >
          <p className="yime-create-content" >{this.state.content}</p>
        </Link>

				<MoneyEditor onConfirm={this.handleConfirm} onChange={this.handleMoneyChange}/>
			</div>
		);
	}
}