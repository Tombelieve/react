import IScroll from "./iscroll"
import Classify_left from "./Classify_left"

class Classify_iscroll extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    componentDidMount(){
    	var myScroll;
	    myScroll = new IScroll('#wrapper', {
	        mouseWheel: true,
	        interactiveScrollbars: true,
	        shrinkScrollbars: 'scale',
	        fadeScrollbars: true
	    });
		
		document.addEventListener('touchmove', function (e) { 
			if (event.cancelable) {
	        if (!event.defaultPrevented) {
	            event.preventDefault();
	        }
		  }
		}, { passive: false });
    }
    render(){
        console.log(this) 
        return (
        	<div className="Classify_nav">
	            <div id="wrapper">
					<div id="scroller">
						<Classify_left />
					</div>
				</div>
			</div>
        )
    }
}
//定义默认属性




export default Classify_iscroll