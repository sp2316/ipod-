import React from 'react'

class ControlPanel extends React.Component{

    render(){
        return(
            <div className="control-panel">
         <div className="menu" >
                <button onClick={()=>this.props.changeVisibility()} >MENU</button>
            </div>
            <div className="controls">
            <div className="previous">
                <button><img src="https://www.flaticon.com/svg/vstatic/svg/808/808571.svg?token=exp=1617693688~hmac=68db686a48ab2e5a22b77c09e333ef14"></img></button>
            </div>
            <div className="center">
            <button><img src="https://www.flaticon.com/svg/vstatic/svg/3515/3515278.svg?token=exp=1617693337~hmac=b75d7d0e63bb39d66d054ddddc6ca93d"></img></button>

            </div>
            <div className="forward">
            <button><img src="https://www.flaticon.com/svg/vstatic/svg/70/70082.svg?token=exp=1617693405~hmac=7425eefc798779fa5f5952016cf01c01"></img></button>

            </div>
            </div>
            <div className="play-pause">
            <button><img src="https://www.flaticon.com/svg/vstatic/svg/4029/4029004.svg?token=exp=1617693737~hmac=72bd7806282abf13b2eb2295be43ae4f"></img></button>

            </div>


                
            </div>
        )
    }


}



export default ControlPanel;