import React from 'react'
import { ListGroup } from 'react-bootstrap';
//npm install bootstrap


class Home extends React.Component{


    render(){
        return(
        <div style={styles.homeScreen} id="home-screen">
            <div style={styles.menuList} id="menu-list">
              {/*The header part*/}
                <div style={styles.titlebar}>
                    <p style={{fontWeight:'bold'}}>iPod</p>
                    <img alt="battery" style={styles.battery} src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
                </div>
                {/* The list of utilities  */}
            <ListGroup>
            <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='NowPlaying'?'active':''}>
                Now Playing {this.props.activeItem ==='NowPlaying'?<span style={{float:'right',fontWeight:'bold'}}>&gt;</span>:''}
            </ListGroup.Item>

            <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='Music'?'active':''}>
                Music {this.props.activeItem ==='Music'?<span style={{float:'right',fontWeight:'bold'}}>&gt;</span>:''}
            </ListGroup.Item>

            <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='Games'?'active':''}>
                Games {this.props.activeItem ==='Games'?<span style={{float:'right',fontWeight:'bold'}}>&gt;</span>:''}
            </ListGroup.Item>

            <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='Settings'?'active':''}>
                Settings {this.props.activeItem ==='Settings'?<span style={{float:'right',fontWeight:'bold'}}>&gt;</span>:''}
            </ListGroup.Item>

            </ListGroup>

            </div>
             {/*For background */}
            <div style={styles.imageContainer} id='image-container'>
             </div>
        </div>
        )
    }
}

const styles={
    homeScreen:{
        height:'100%',
        width:'100%',
        display:'flex',
        flexDirection:'row'
    },
    menuList:{
        // border:"1px solid black",
        height:'100%',
        width:'50%',
        boxShadow:'10px 0px 15px -5px rgba(0,0,0,0.75)',
        zIndex:'1'
    },
    battery:{
        width:'20px',
        height:'20px'
    },
    imageContainer : {
        height : '100%',
        width : '50%',
        backgroundImage : 'url("https://i.scdn.co/image/ab67706c0000bebbcb52a7efbba12acf296c1c64")',
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        borderRadius : '0 12px 12px 0'
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


export default Home;