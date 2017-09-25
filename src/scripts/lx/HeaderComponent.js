class HeaderComponent extends React.Component{
    constructor(props,context){
        super(props,context)

        this.state={
            
        }
    }
    render(){
        return (
            <div className="header_L">
                <div className="logo_L">
                    <img src="./img/wochulogo.png" className="logo_img_L"/>
                </div>
                <a href="/search_address"><div className="addr_L">
                    <p>北京</p>
                    {/* <img src="./img/icon.png"/> */}
                </div></a>
                <div className="search-btn_L">
                    <img src="./img/search.png"/>
                </div>
            </div>
        )
    }
}

HeaderComponent.defaultProps={

}
export default HeaderComponent