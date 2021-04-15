import React from 'react'
class ControlPad extends React.Component{


    
    render(){
        return(

                <div id="outerController" style={styles.wheel} id="outer-wheel" onMouseOver={()=>this.props.rotate()}>
                   
                   <div style={styles.buttonContainer}>
                         {/* The menu button */}
                   <div style={styles.menuButton}>
                   <img alt=" " src="https://www.flaticon.com/svg/vstatic/svg/1828/1828859.svg?token=exp=1618394191~hmac=9d3f3e5c8565e9fe060b683b95be275f" onClick={()=>this.props.changePageToHomeScreen()} style = {styles.image} ></img>
                   </div>

                   </div>
                   
                   <div style={styles.buttonContainer}>
                    {/* the previous changePage and forward button*/}
                     <div style={styles.middleButtons}>
                        <img  alt=" " style={styles.image} src="https://www.flaticon.com/svg/vstatic/svg/56/56760.svg?token=exp=1618393986~hmac=b95d3e702eb3ae83fe9284001ce3fb8d"></img>
                        <div onClick={()=>this.props.changePage()} style={{backgroundImage: 'linear-gradient(45deg, #8c8181, transparent)' , width : '5rem' , height : '5rem' , borderRadius : '50%'}}></div>
                        
                          <img  alt=" " style = {styles.image} src="https://www.flaticon.com/svg/vstatic/svg/54/54366.svg?token=exp=1618394128~hmac=02bd7bcd983f75e317989cbb74678424"></img>
                        
                         </div>
                   </div>
                             {/*The play pause buttons*/}
                   <div style={styles.buttonContainer}>
                         <div onClick={()=>this.props.toggle()} style = {styles.playButton}>
                           
                            <img  alt=" " onClick={()=>this.props.toggle()} style = {styles.image} src="https://www.flaticon.com/svg/vstatic/svg/27/27223.svg?token=exp=1618394578~hmac=6999878720207448d8cac1af1096c917"></img>&nbsp;
                            <img  alt=" "onClick={()=>this.props.toggle()} style = {styles.image} src="https://www.flaticon.com/svg/vstatic/svg/151/151859.svg?token=exp=1618394618~hmac=80d0980d60de49b9e2839886991c1d83"></img>
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
    width:'40px',
    height:'50px',
    color : 'white',
    

}
}



export default ControlPad;