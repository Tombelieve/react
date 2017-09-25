
import NavsComponent from './NavsComponent'
import RootComponent from '../lxx/RootComponent'

class MineComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
  
    render(){
        return (
            <div className="full-height">
               <RootComponent/>
               <NavsComponent active="/mine"/>
            </div>
        )
    }
}
//定义默认属性
MineComponent.defaultProps={

}



export default MineComponent