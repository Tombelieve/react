
import Fetch from '../modules/fetch'
class GoodCarousel extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            date:[]
        }
    }
    componentWillMount(){
        let that=this
        Fetch.Get('/json/ImageList.json',{a:1,b:2,c:3}).then((res)=>{
            return res.json()
        }).then((json)=>{
            that.setState({date:json})
        })
       
    }
    showImage(){
        let arr = []
        this.state.date.forEach((item,i)=>{
            arr.push(<a href={item.source}><img src={item.imgUrl}/></a>)
        })
        return arr;
    }
       
    render(){
        let {active} = this.props
        return (
            <div className="remind-msg">
                 { this.state.date[1]?this.showImage():""} 
                 <div></div>
          
            </div>    
         
        )
    }
}
//定义默认属性
GoodCarousel.defaultProps={
    active:"/index"
}



export default GoodCarousel