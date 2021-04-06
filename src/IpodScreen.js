import React from 'react'
import './ipodScreen.css'
class IpodScreen extends React.Component{


   

    render(){

       
        return(
            <div className="ipod-screen" > 
                <ul id="list">

                <li className="selected">Songs</li>
                <li id="Album" >Album</li>
                <li id="Artist">Artist</li>
                <li id="Settings">Setting</li>

                </ul>
            </div>
        )
    }


}









export default IpodScreen;