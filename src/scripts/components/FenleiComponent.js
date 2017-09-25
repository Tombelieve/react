

import NavsComponent from './NavsComponent'
import Classify_w from '../wh/Classify_w'

class FenleiComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    
    render(){
        return (
            <div className="full-height">
               <Classify_w/>
               <NavsComponent active="/fenlei"/>
            </div>
        )
    }
}
//定义默认属性
FenleiComponent.defaultProps={

}



export default FenleiComponent