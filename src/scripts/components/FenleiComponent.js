

import NavsComponent from './NavsComponent'

class FenleiComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    
    render(){
        console.log(this) 
        return (
            <div className="full-height">
               FenleiComponent
               <NavsComponent active="/fenlei"/>
            </div>
        )
    }
}
//定义默认属性
FenleiComponent.defaultProps={

}



export default FenleiComponent