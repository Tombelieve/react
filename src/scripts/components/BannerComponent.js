

import Fetch from '../modules/fetch'


class BannerComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            date:[]
        }
    }



    getbanner(){
        let that = this
        Fetch.Get('http://127.0.0.1:9000/carousel/client/v1/app/layoutamend?parameters=%7B%22version%22%3A%2210.0.0%22%2C%22source%22%3A%22H%22%7D',{ 
        }).then(res=>{
            return res.json()
        }).then(json=>{
            that.setState({
                date:json.data.carousel
            })
        })
    }
    showBanner(){
        let that=this
        let arr=[]
        that.state.date.forEach((item,i)=>{
            arr.push(<div className="swiper-slide swiper-div_L"><img src={item.picUrl}/></div>)
        })
        return arr  
    }


    componentWillMount(){
        this.getbanner()
    }    
        
    
    render(){
        let that=this
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {this.showBanner()}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
    componentDidMount(){
        this.swiper = new Swiper('.swiper-container', {
             initialSlide :2,
             pagination: '.swiper-pagination',
             autoplay : 1000,
             loop : true,
            direction:"horizontal",
            paginationClickable: true
        });  
      
    }
    componentDidUpdate(){
        this.swiper.update()
    }


}


// BannerComponent.defaultProps={
//    url:'./json/banner.json'
// }
export default BannerComponent