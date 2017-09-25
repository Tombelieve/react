
import HeaderComponent from './HeaderComponent'

import BannerComponent_a from './BannerComponent_a'
class RootComponent extends React.Component{
    constructor(props,context){
        super(props,context)

        this.state={

        }
    }
    render(){
        return (
            <div className="full-height">
                <HeaderComponent/>
                <BannerComponent_a/>
            </div>
        )
    }
}
RootComponent.defaultProps={

}
export default RootComponent