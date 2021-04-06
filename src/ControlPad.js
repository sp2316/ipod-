import React from 'react'
import './controlpad.css'
import ZingTouch from 'zingtouch'
class ControlPad extends React.Component{


    
    render(){
        return(

                <div className="outerController" id="outer-wheel" onClick={()=>this.props.rotate()}>
                   
                    <p className="menu">MENU</p>
                   
                    <p className="prev">|&lt;&lt;</p>
                   
                    <p className="forward">&gt;&gt;|</p>
                   
                    <p className="play-pause">&gt;||</p>
                   
                      <div className="innerController">
                      </div>
 

                </div>

        )
    }


}





export default ControlPad;