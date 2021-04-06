import React from 'react'
import IpodScreen from './IpodScreen'
import ControlPanel from './ControlPanel'
class App extends React.Component{
 
  constructor(){
    super();
    this.state={
        visibility:'hidden'
    }
   }

  changeVisibility =()=>{
    console.log(this.state.visibility);
    this.setState((prevState)=>{
      if(prevState.visibility=='hidden')
      return{
          visibility:'visible'
      }
      return{
        visibility:'hidden'
    }
    }
    );
    }
  
  render(){
    return (
    <div className="ipod">
        <IpodScreen
          visibility={this.state.visibility}
        />
        <ControlPanel 
          changeVisibility={this.changeVisibility}
        />
    </div>
  );
 }
}

export default App;
