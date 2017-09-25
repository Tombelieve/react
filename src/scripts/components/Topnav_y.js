//首页本周特惠那行图标

class Topnav extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    
    render(){
        let {active} = this.props
        return (
            <div className="top-nav">
                <a><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5963f5d2-58d1-427a-b3b7-e3ff77a22143.jpg"/></a>
                <a ><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/94794f56-24ed-4b99-bbfb-41304d04f7bb.jpg"/></a>
                <a ><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/26dc3641-2c3b-41a5-be3a-df7ba71a34d5.jpg"/></a>
                <a ><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e8200e4e-26ce-4836-92a6-a350dbec4e5d.jpg"/></a>
            </div>
        )
    }
}
//定义默认属性
Topnav.defaultProps={
    active:"/index"
}



export default Topnav