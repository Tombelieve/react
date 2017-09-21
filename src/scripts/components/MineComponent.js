
import NavsComponent from './NavsComponent'

class MineComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
  
    render(){
        console.log(this) 
        return (
            <div className="full-height">
               MineComponent
               <NavsComponent active="/mine"/>
            </div>
        )
    }
}
//定义默认属性
MineComponent.defaultProps={

}



export default MineComponent