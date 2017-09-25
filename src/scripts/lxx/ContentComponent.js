

import OtherTopComponent from "./OtherTopComponent"


class ContentComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={

        }
    }
    render(){
        return (
            <div>
                <OtherTopComponent className="othertop"/>
                <OtherTopComponent url="./json/othercontenttop.json" className="othercontenttop"/>
                <OtherTopComponent url="./json/othercontentbottom.json" className="othercontentbottom"/>
                <a href="#" className="Go">
                    <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d13bdc0a-3ffe-46da-9166-c06267564dfb.gif"/>
                </a>
            </div>
        )
    }
}




export default ContentComponent