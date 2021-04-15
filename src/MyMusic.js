import React from 'react';

const sound = require('./assets/music/afterglow.mp3')

class MyMusic extends React.Component{

    constructor(){
        super();
        this.state={
            isMounted:true
        }
    }

    componentDidMount(){
       
        this.props.audio.play();

       
            this.props.audio.addEventListener("timeupdate",()=>{
                if(this.state.isMounted){
                    var pos = this.props.audio.currentTime/this.props.audio.duration;
                    this.updateTime();
                    let fill = document.getElementById("fill");
                    // console.log(fill);
                    // if(fill !== null){
                        fill.style.width = pos*100 + "%";
                    // }
                }
            })
        
    }

    updateTime=()=>{
        this.setState({
            audio:this.props.audio
        })
    }

    componentWillUnmount(){
        this.state.isMounted = false;
    }


    render(){
        let audio=this.props.audio;
        console.log('a' ,audio)
        return(
          <div style={styles.myMusicContainer}>
            <div style={styles.titleBar}>
                    <p style={{fontWeight:'bold'}}>iPod</p>
                    <img style={styles.battery} src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
            </div>

            <div style={styles.info}>
                <img style={styles.image} src="https://i.ytimg.com/vi/_NGQfFCFUn4/maxresdefault.jpg"></img>
                <div style={styles.subInfo}>
                    <h4 style={{marginBottom:'0.5rem'}}>Afterglow</h4>
                    <p style={{marginBottom:'0'}}>Ed Sheeran</p>
                </div>
            </div>

            <div style={styles.statusBar}>
                <p style={styles.currTime}>{Math.floor(audio.currentTime)}</p>
                <div style={styles.seekBar}>
                        <div style={styles.fill} id='fill'></div>
                </div>
                    <p style={styles.dur}>{Math.floor(audio.duration)}</p>
            </div>
          </div>
        )
    }
}

const styles = {
    myMusicContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    image : {
        height : '75%',
        width : '45%',
        alignSelf : 'center'
    },
    info : {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    statusBar : {
        width : '100%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-evenly'
    },
    subInfo : {
        alignSelf : 'center'
    },
    seekBar : {
        width:'70%',
        height:'20%',
        border : '1px solid grey',
        cursor: 'pointer',
        alignSelf : 'center',
        display: 'flex',
    },
    fill : {
        height: '100%',
        backgroundColor: 'royalblue',
    },
    currTime : {
        margin : '0',
        alignSelf : 'center'
    },
    dur : {
        margin : '0',
        alignSelf : 'center'
    },
    titleBar : {
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'

    },
    battery :{
        width : '20px',
        height: '20px',
    }
}


export default MyMusic;