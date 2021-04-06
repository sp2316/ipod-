import React from 'react'
import IpodScreen from './IpodScreen'
import ControlPad from './ControlPad'
import ZingTouch from 'zingtouch'
import './ipod.css'

class Ipod extends React.Component{

  
  
  render(){
    return (
    <div className="ipod">
        <IpodScreen/>
        <ControlPad/>
    </div>
  );
 }
}

export default Ipod;
