import React from 'react'
import './controlpad.css'
import ZingTouch from 'zingtouch'
class ControlPad extends React.Component{


    captureRotation=()=>{

        var angle=0;
        const target=document.getElementById('outer-wheel');
        const region=new  ZingTouch.Region(target);
        region.bind(target,'rotate',(e)=>{
            // angle+=e.detail.distanceFromLast;
            console.log("wheel");
        })

    }
    render(){
        return(

                <div className="outerController" id="outer-wheel" onClick={this.captureRotation}>
                   
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