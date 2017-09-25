



class HeaderComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={

        }
    }
    render(){
        return (
            <div className="mine_header_L">
                <div className="mine_header_icon_L">
                    <img src="./img/cust-icon-defualt.png"/>
                    <p>fdhftghgjjhg</p>
                </div>
                <div className="mine_header_balance_L">
                    <ul className="mine_header_ul_L">
                        <li>
                            <a href="#">
                                <div>0</div>
                                <p>账户余额</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div>0</div>
                                <p>优惠券</p>
                            </a>
                        </li>
                    </ul>
                    <div className="mine_header_div_L">
                        <img src="./img/profile-arrow@3x.png"/>
                        <ul className="mine_header_div_ul_L">
                            <li>
                                <a href="#">
                                    <img src="./img/g-recharge@3x.png"/>
                                    <p>充值立送现金券哦~</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="./img/recharge@3x.png"/>
                                    <p>马上充值</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}




export default HeaderComponent