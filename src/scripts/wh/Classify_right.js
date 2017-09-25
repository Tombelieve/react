import $ from "./jquery.min"
import Classify_tj from "./Classify_tj"
import Classify_ulcontent from "./Classify_ulcontent"
class Classify_right extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          loading: true,
	      error: "",
	      data: ""
        }
    }
  render(){
      return (
      		<div className="classify_right">
      			<Classify_tj ida={0}/>
      			<div className="Classify_fgx"></div>
      			<Classify_tj ida={1}/>
      			
      			<Classify_ulcontent/>
      		</div>
      		
      		
      	)
    }
}
//定义默认属性


export default Classify_right