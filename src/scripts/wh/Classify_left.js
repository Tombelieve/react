import $ from "./jquery.min"
import Classify_ulcontent from "./Classify_ulcontent"

class Classify_left extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    componentDidMount(){
  		$("#classify_left").on("click","li",function(){
   			 $("#classify_left li").removeClass()
    			$(this).addClass("on")
    	})
    }
    render(){
        console.log(this) 
        return (
        	<ul id="classify_left">
				<li className="on">
					<p>推荐</p>
				</li>
				<li id="2">
					<p>我厨优选</p>
				</li>
				<li id="3">
					<p>餐馆名菜</p>
				</li>
				<li id="1">
					<p>全部净菜</p>
				</li>
				<li id="4">
					<p>儿童专区</p>
				</li>
				<li id="6">
					<p>蔬菜</p>
				</li>
				<li id="7">
					<p>水果</p>
				</li>
				<li id="8">
					<p>肉禽蛋</p>
				</li>
				<li id="9">
					<p>水产海鲜</p>
				</li>
				<li id="10">
					<p>乳饮西点</p>
				</li>
				<li id="5">
					<p>点心速食</p>
				</li>
				<li id="11">
					<p>粮油副食</p>
				</li>
			</ul>
        )
    }
}
//定义默认属性




export default Classify_left