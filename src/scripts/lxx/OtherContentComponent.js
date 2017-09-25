




class OtherContentComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            data:[]
        }
    }

    getDate(){
        let that=this
        $.ajax({
            url:that.props.url,
            success:function(results){
                // console.log(results)
                that.setState({
                    data:results
                })
                // console.log(that.state.data)
            }
        })
    }

    showDate(){
        let that=this
        let arr=[]
        that.state.data.forEach(function(item,i){
            arr.push(<li><img src={item.imgUrl}/><p>{item.title}</p></li>)
        })
        return arr
    }

    render(){
        return (
            <div>
                <ul>
                    
                </ul>
            </div>
        )
    }
}


OtherContentComponent.defaultProps={
    url:"/json/othercontent.json"
}

export default OtherContentComponent







   
    showDate(){
        let that=this
        let arr=[]
        that.state.data.forEach(function(item,i){
            arr.push(<li><img src={item.imgUrl}/><p>{item.title}</p></li>)
        })
        return arr
    }
    componentWillMount(){
        this.getDate()
    }
    render(){
        return (
            <div className="othertop">
                <ul>
                    {this.showDate()}
                    
                </ul>
            </div>
        )
    }
}



OtherTopComponent.defaultProps={
    url:"/json/othertop.json"
}






export default OtherTopComponent