
import NavsComponent from './NavsComponent'

class NewsComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    
    render(){
        console.log(this) 
        return (
            <div className="full-height">
              NewsComponent
              <NavsComponent active="/news"/>
            </div>
        )
    }
}
//定义默认属性
NewsComponent.defaultProps={

}



export default NewsComponent