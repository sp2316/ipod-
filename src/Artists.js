import React from 'react' ;
import artistImage from './sai_.jpg'

// const artistImage=require('./assets/images/sai_.jpg');
class Artists extends React.Component{


    render(){
        return(
        <div style={styles.artistsContainer} >
            {/* The header */}
                <div style={styles.titlebar}>
                    <p style={{fontWeight:'bold'}}>iPod</p>
                    <img  alt="battery" style={styles.battery} src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
                </div>
            

            <div style={styles.info}>
                 {/* Artist image */}
            <div style={styles.imageContainer} id='image-container'>
             </div>
                 {/*Artist details */}
             <div style={styles.subInfo}>

                <h4 style={{marginBottom:'0.5rem'}}>IPOD.js <span><img  alt=" " style={styles.image} src="https://image.flaticon.com/icons/svg/953/953909.svg"></img></span></h4>
                <p style={{marginBottom:'0'}}>React Project</p>
                <p>App Made by :<br/> <i>Palivela Sai Prasad</i></p>
             </div>

            </div>
             {/*Thank you  */}
            <div style={styles.info2}>
                <h5 style={{alignSelf:'center'}}>Thanks for visiting the app!!</h5>
                <p style={{fontSize:'1.2rem',fontWeight:"bold"}}>Enjoy the song</p>
            </div>
            
        </div>
        )
    }
}

const styles={
    artistsContainer:{
        height:'100%',
        width:'100%',
        display:'flex',
        flexDirection:'column'
    },
   image:{
       width:'2rem',
       height:'2rem'
   },
    battery:{
        width:'20px',
        height:'20px'
    },
    imageContainer : {
        height : '85%',
        width : '45%',
        backgroundImage : `url(${artistImage})`,
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        borderRadius : '50%',
        margin:'12px'
    },
    titlebar:{
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0 ',
        backgroundImage:'linear-gradient(0deg,rgb(123,132,140),transparent)',
        borderBottom:'1px solid #6c757d',
        padding:'1px 5px 10px 8px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    info : {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    info2 : {
        width : '100%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
    subInfo : {
        alignSelf : 'center'
    },
}


export default Artists;