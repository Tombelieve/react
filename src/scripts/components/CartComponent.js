
import NavsComponent from './NavsComponent'

class CartComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    componentWillMount(){
       
    }
    render(){
        console.log(this) 
        return (
            <div className="full-height">
                CartComponent
                <NavsComponent active="/cart"/>
            </div>
        )
    }
}
//定义默认属性
CartComponent.defaultProps={

}



export default CartComponent