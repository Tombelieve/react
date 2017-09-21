
import NavsComponent from './NavsComponent'
import WaiMaiHeader from './WaiMaiHeader'
import Position from '../modules/position'
class WaiMaiComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            position_info:{}
        }
    }
    componentWillMount(){
        let that = this
        Position((info)=>{
            that.setState({
                position_info:info
            })
        })
    }
    render(){
        let {position_info} = this.state
        return (
            <div className="full-height waimai">
               <WaiMaiHeader position_info={position_info}/>
               <NavsComponent/>
            </div>
        )
    }
}
//定义默认属性
WaiMaiComponent.defaultProps={

}



export default WaiMaiComponent