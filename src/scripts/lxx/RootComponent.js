
import HeaderComponent from "./HeaderComponent"
import ContentComponent from "./ContentComponent"


class RootComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={

        }
    }
    render(){
        return (
            <div>
                <HeaderComponent/>
                <ContentComponent/>
            </div>
        )
    }
}

export default RootComponent