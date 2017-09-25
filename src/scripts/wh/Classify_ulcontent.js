import $ from "./jquery.min"

class Classify_ulcontent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          loading: true,
	      error: "",
	      data: ""
        }
        
    }
    
  componentDidMount() {
    $.getJSON('http://api5.wochu.cn/client/v1/goods/GetCategoryListByMenuId?parameters=%7B%22menu%22%3A0%7D').then(
      value =>{
      	JSON.stringify(value)
      	this.setState({loading: false, data: value.data})
      	console.log(this.state.data)
      	},
      error => this.setState({loading: false, error: error}));
  }

  render(){
  		return <div></div>
     	}
   }

//定义默认属性


export default Classify_ulcontent