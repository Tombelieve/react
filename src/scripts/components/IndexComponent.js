

import NavsComponent from './NavsComponent'
class IndexComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    
    render(){
        console.log(this) 
        return (
            <div>
              IndexComponent
              <NavsComponent/>
            </div>
        )
    }
}
//定义默认属性
IndexComponent.defaultProps={

}



export default IndexComponent