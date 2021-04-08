import React from 'react'
import './controlpad.css'
class ControlPad extends React.Component{


    
    render(){
        return(

                <div className="outerController" id="outer-wheel" onClick={()=>this.props.rotate()}>
                   
                    <p className="menu" onClick={()=>this.props.handleMenuClick()}>MENU</p>
                   
                    <p className="prev">|&lt;&lt;</p>
                   
                    <p className="forward">&gt;&gt;|</p>
                   
                    <p className="play-pause">&gt;||</p>
                   
                      <div className="innerController" onClick={()=>this.props.handleItemClick()}>
                      </div>
 

                </div>

        )
    }


}





export default ControlPad;