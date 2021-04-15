import React from 'react'
class ControlPad extends React.Component{


    
    render(){
        return(

                <div style={styles.wheel} id="outer-wheel" onMouseOver={()=>this.props.rotate()}>
                   
                   <div style={styles.buttonContainer}>
                         {/* The menu button */}
                   <div style={styles.menuButton}>
                   <i  onClick={()=>this.props.changePageToHomeScreen()} style = {styles.image} className="fas fa-bars"></i>
                   <i onClick={()=>this.props.changePageToHomeScreen()} style = {styles.image} className="fas fa-bars"></i>
                   </div>

                   </div>
                   
                   <div style={styles.buttonContainer}>
                    {/* the previous changePage and forward button*/}
                     <div style={styles.middleButtons}>
                        
                         <i style = {styles.image} className="fas fa-fast-backward"></i>
                         <div onClick={()=>this.props.changePage()} style={{backgroundImage: 'linear-gradient(45deg, #8c8181, transparent)' , width : '5rem' , height : '5rem' , borderRadius : '50%'}}></div>
                         <i style = {styles.image} className="fas fa-fast-forward"></i>
                        
                         </div>
                   </div>
                             {/*The play pause buttons..Songs can only be paused or played from MyMusic screen*/}
                   <div style={styles.buttonContainer}>
                         <div onClick={()=>this.props.toggle()} style = {styles.playButton}>
                           
                         <i onClick={()=>this.props.toggle()} style = {styles.image} className="fas fa-play"></i>&nbsp;
                         <i onClick={()=>this.props.toggle()} style = {styles.image} className="fas fa-pause"></i>

                         </div>

                        
                   </div>
                    
                </div>

        )
    }


}

const styles={
wheel:{
    width : '75%',
    height : '40%',
    margin : '1rem auto',
    backgroundColor : '#4b4e52',
    borderRadius : '50%',
    display : 'flex',
    flexDirection : 'row',
    flexWrap : 'wrap',
    justifyContent : 'center'
},
buttonContainer : {
    width : '85%',
    height : '30%',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center'
},
menuButton : {
    alignSelf:'center'
},
playButton : {
    alignSelf:'center'
},
middleButtons : {
    alignSelf:'center',
    width : '100%',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-between',
    cursor:'pointer'
},
image: {
    alignSelf : 'center',
   fontSize:'1.5rem',
    color : 'white',
    

}
}



export default ControlPad;