import Topnav from './Topnav_y'
import ImageList from './ImageList_y'
import GoodCarousel from './GoodCarousel_y'
import NavsComponent from './NavsComponent'
import RootComponent from "../lx/RootComponent"
class IndexComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    
    render(){
       
        return (
            <div>
              <RootComponent/>
              <Topnav/>
              <ImageList/>
              <GoodCarousel/>
               <NavsComponent/>
             
            </div>
        )
    }
}
//定义默认属性
IndexComponent.defaultProps={

}



export default IndexComponent