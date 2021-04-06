import React from 'react'

class IpodScreen extends React.Component{

   

    render(){
        
       
        return(
            <div className="ipod-screen" > 

                <div className="options" style={{visibility:this.props.visibility}}>
                <span>MENU</span>  
                <div>
                <span>Settings</span>  
                </div>

                <div>
                <span>Games</span>  
                </div>

                <div>
                <span>Music</span>  
                </div>

                <div>
                <span>Images</span>  
                </div>

                </div>
            </div>
        )
    }


}







export default IpodScreen;