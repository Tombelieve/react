
import {Link} from 'react-router'

class NewsComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    
    render(){
        let {active} = this.props
        return (
            <div className="navs">
                <Link to="/index" className={active=='/index'?'active':''}>
                    <span className="iconfont icon-shouye"></span>
                    <span>首页</span>
                </Link>
                <Link to="/fenlei" className={active=='/fenlei'?'active':''}>
                    <span className="iconfont icon-leimupinleifenleileibie"></span>
                    <span>分类</span>
                </Link>
                <Link to="/cart" className={active=='/cart'?'active':''}>
                <span className="iconfont icon-cart"></span>
                    <span>购物车</span>
                </Link>
                <Link to="/mine" className={active=='/mine'?'active':''}>
                    <span className="iconfont icon-wode"></span>
                    <span>我的</span>
                </Link>
               
            </div>
        )
    }
}
//定义默认属性
NewsComponent.defaultProps={
    active:"/index"
}



export default NewsComponent