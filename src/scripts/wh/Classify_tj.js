//推荐信息
import $ from "./jquery.min"



class Classify_tj extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          loading: true,
	      error: "",
	      data: ""
        }
        
    }
    
  componentDidMount() {
  	let that = this.props.ida;
  	console.log(that)
    $.getJSON('http://api5.wochu.cn/client/v1/goods/GetCategoryRecommendList').then(
      value =>{
      	JSON.stringify(value)
      	this.setState({loading: false, data: value.data[that]})
      	},
      error => this.setState({loading: false, error: error}));
  }

  render(){
  		if(this.state.loading){
	     	return (
	      		<div className="classify_right_ul">
	      		</div>
	      	)
     	}else{
     		return (
     			<div className="classify_right_ul">
	      			<div className="classify_right_ultm">
	      			<span></span>
	      				<h3>{this.state.data.name}</h3>
	      			<span></span>
	      			</div>
	      			<ul className="classify_right_ula">
	      				{
	      					this.state.data.children.map(function(item,i){
	      						return (
	      							<li>
	      							<img src={this.state.data.children[i].imgUrl} />
				      					<p>{this.state.data.children[i].name}</p>
				      					
				      				</li>
	      						)
	      					}.bind(this))
	      				}
	      				
	      			</ul>

	      		</div>
     		)
     	}
    }
}
//定义默认属性


export default Classify_tj