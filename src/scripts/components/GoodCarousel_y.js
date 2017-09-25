
import Fetch from '../modules/fetch'
class ImageList extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            date:[]
        }
    }
    componentWillMount(){
        let that=this
        Fetch.Get('/json/ImageList2.json',{a:1,b:2,c:3}).then((res)=>{
            return res.json()
        }).then((json)=>{
            // console.log(json)
            that.setState({date:json})
        })
       
    }
    getPic(arr){
        var a = [];
        arr.forEach(function(obj,i){
            a.push(
            <div className="advice-group" >
                <a href={"http://wmall.wochu.cn/h5/mall/goodsDetail.html?goodsId="+obj.source}><img src={obj.imgUrl} alt=""/></a>
                <div className="group-name ellipsis">      
                     {obj.goodsName}
                </div>
                <div className="m-price">
                    ￥{obj.marketPrice}
                </div>
			    <div className="o-price">
                    ￥{obj.price}
                </div>
                <div className="add-cart" onclick="">
                    <img src="/images/add.png"/>
                </div>
            </div>)
        })
{/* <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2f87b1bf-2eed-4e83-92d6-ca5002ca10de.jpg" alt="" onclick="HomePage.urlJumpType('2','d7015eef-672d-4566-aebc-e7b7df8cfa1f')" elementplace1="21" elementdescription1="每周新菜货架" elementplace2="3" elementdescription2="红烧牛腩萝卜煲" goodsname="红烧牛腩萝卜煲" goodsprice="29.9" goodsguid="d7015eef-672d-4566-aebc-e7b7df8cfa1f"> */}










        return a;
    }
    showImage(){
        let arr = []
        var that = this;
        this.state.date.forEach((item,i)=>{
            if(item.items.length==1){
                arr.push(<a href={item.items[0].source}><img src={item.items[0].imgUrl}/></a>)
            }else{
                arr.push(
                  <div className="goodCarousel">  
                   {that.getPic( item.items)}
                 </div>
                )
            }
        })
        return arr;
    }
    
    render(){
        let {active} = this.props
        return (
            <div className="remind-msg">
                 { this.state.date?this.showImage():""} 
            </div>    
        )
    }
}
//定义默认属性
ImageList.defaultProps={
    active:"/index"
}



export default ImageList