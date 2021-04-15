import React from 'react';


class MyMusic extends React.Component{

    constructor(){
        super();
        this.state={ 
            isMounted:true  //used to know if the component is loaded
        }
    }

    componentDidMount(){
       
        this.props.audio.play();

       
            this.props.audio.addEventListener("timeupdate",()=>{
                if(this.state.isMounted){ //if component is loaded,then only execute the below lines of code
                    var pos = this.props.audio.currentTime/this.props.audio.duration;
                    this.updateTime();
                    let fill = document.getElementById("fill");

                    if(fill!==null) //if component is not loaded or unmounted , fill will be null so we put a check here
                    fill.style.width = pos*100 + "%";
               
                }
            })
        
    }

    updateTime=()=>{
        this.setState({
            audio:this.props.audio   // can be left empty too..its just to make state change happen so that the current time can be reflected on the UI (left to the player)
        })
    }

    componentWillUnmount(){
        this.state.isMounted = false; //unmount this component if we change to other component
    }


    render(){
        
        let audio=this.props.audio;
        return(

          <div style={styles.myMusicContainer}>
             {/* The header part*/}
            <div style={styles.titleBar}>
                    <p style={{fontWeight:'bold'}}>iPod</p>
                    <img alt="battery" style={styles.battery} src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
            </div>

                 {/* The singer info part*/}
             <div style={styles.info}>
                <img alt="singer_image"style={styles.image} src="https://i.ytimg.com/vi/_NGQfFCFUn4/maxresdefault.jpg"></img>
                <div style={styles.subInfo}>
                    <h4 style={{marginBottom:'0.5rem'}}>Afterglow</h4>
                    <p style={{marginBottom:'0'}}>Ed Sheeran</p>
                </div>
            </div>

                 {/* The audio player part*/}
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