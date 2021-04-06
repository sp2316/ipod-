import React from 'react'
import './controlpad.css'
class ControlPad extends React.Component{

  
    render(){
        return(

                <div className="outerController">
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