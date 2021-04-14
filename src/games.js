import React from 'react'

class Games extends React.Component{


    render(){
        return(
        <div style={styles.game}>
                <div style={styles.titlebar}>
                    <p style={{fontWeight:'bold'}}>iPod</p>
                    <img style={styles.battery} src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
                </div>
            
            <div style={styles.imageContainer}>

            <img style={styles.image} src="https://i.gifer.com/Brc6.gif" />


             </div>
        </div>
        )
    }
}

const styles={
    game:{
        height:'100%',
        width:'100%',        
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap'
    },

    battery:{
        width:'20px',
        height:'20px'
    },
    image : {
        width:'100%',
        height:'100%',
        alignSelf : 'center'
    },
    imageContainer : {
        height : '90%',
        width : '100%',
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
    }
}


export default Games;