import Classify_header from "./Classify_header"
import Classify_right from "./Classify_right"
import Classify_iscroll from "./Classify_iscroll.js"
//分类
class Classify_w extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    
    render(){
        console.log(this) 
        return (
            <div>
				<Classify_header />
				<div className="header_footer"></div>
				<Classify_iscroll />
				<Classify_right/>
            </div>
            
        )
    }
}
//定义默认属性
Classify_w.defaultProps={

}



export default Classify_w