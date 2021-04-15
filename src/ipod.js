import React from 'react'
import IpodScreen from './IpodScreen'
import ControlPad from './ControlPad'
import ZingTouch from 'zingtouch'
import sound from './afterglow.mp3'

class Ipod extends React.Component{

    constructor(){
        super();
        this.state={
            activeItem:'NowPlaying',
            activePage:'Home',
            enter:0,
            play:true
        }
    }
    //to capture the rotation movements 
    captureRotation=()=>{
        const target=document.getElementById('outer-wheel');
        const region=new ZingTouch.Region(target); //add the control pad region as the region to observe rotations
        let change=0; //to maintain gap between the movements on the screen
        this.state.enter+=1; //this means that the bind method must be attached to the target region only once when the onMouseOver is activated for the first time
        console.log(this.state.enter);
        if(this.state.enter<2){
            region.bind(target,'rotate',(e)=>{

               let angle=e.detail.distanceFromLast;
                //travelling forwards if the rotation is done anti clock wise
                if(angle<0){

                    change++;
                    let {activePage}=this.state;
                    let {activeItem}=this.state;
                    if(change===15){ //this slows the movement of the css applied to the lists on the home and music components ie changes the state omly when change ==15

                        change=0;
                        
                        if(activePage==='Home'){
                            if(activeItem==='NowPlaying'){
                                this.setState({
                                    activeItem:"Music"
                                })
                            }
                            else if(activeItem==='Music'){
                                this.setState({
                                    activeItem:"Games"
                                })
                            }
                            else if(activeItem==='Games'){
                                this.setState({
                                    activeItem:"Settings"
                                })
                            }
                            else if(activeItem==='Settings'){
                                this.setState({
                                    activeItem:"NowPlaying"
                                })
                            }
                        }

                        else if(activePage==="Music"){
                                if(activeItem==="MyMusic"){
                                    this.setState({
                                        activeItem:"Artists"
                                    })
                                }else if(activeItem==="Artists"){
                                    this.setState({
                                        activeItem:"MyMusic"
                                    })
                                }
                        }
                    }
                }else{
                            change++;
                            let {activePage}=this.state;
                            if(change===15){

                            change=0;
                            //travelling backwards if the rotation is done  clock wise

                            if(activePage==='Home'){

                                if(this.state.activeItem === 'NowPlaying'){
                                    this.setState({
                                        activeItem : "Settings"
                                    })
                                }else if(this.state.activeItem === 'Music'){
                                    this.setState({
                                        activeItem : "NowPlaying"
                                    })
                                }else if(this.state.activeItem === 'Games'){
                                    this.setState({
                                        activeItem : "Music"
                                    })
                                }else if(this.state.activeItem === 'Settings'){
                                    this.setState({
                                        activeItem : "Games"
                                    })
                                }


                            }else if(activePage==='Music'){
                                if(this.state.activeItem === 'MyMusic'){
                                    this.setState({
                                        activeItem : "Artists"
                                    })
                                }else if(this.state.activeItem === 'Artists'){
                                    this.setState({
                                        activeItem : "MyMusic"
                                    })
                            }
                        }


                }
            }
             
            }); //end of bind()
        }
        
    }
  
 //whenever the middle button is clicked,this function is called to perfrom page change operation
    changePage= ()=>{
        console.log(this.state);

        let {activeItem}=this.state;
        if(activeItem==='Music'){
            this.setState({
                activeItem:'MyMusic',
                activePage:'Music'
            })
        }else if(activeItem==='NowPlaying'){
            this.setState({
                activeItem : 'NowPlaying',
                activePage : 'MyMusic'
            })

        }else{
            this.setState({
                activeItem : activeItem,
                activePage : activeItem
            })

        }
        



    }

   //whenu menu button is clicked
    changePageToHomeScreen=()=>{
        if(this.state.activeItem==="MyMusic" || this.state.activeItem==="Artists"){
            this.setState({
                activeItem:'Music',
                activePage:'Home'
            })
        }
        else{
            this.setState({
                activeItem:this.state.activeItem,
                activePage:'Home'
            })
        }
    }

    //when the play-pause button is clicked,the audio pauses and plays (toggles)
    toggle = () =>{
        if(this.state.activePage === 'MyMusic'){
            if(this.state.play === true){
                this.state.audio.pause();
                this.setState({
                    play : false
                })
            }else{
                this.state.audio.play();
                this.setState({
                    play : true
                })
            }
        }
    }

    //the audio is loaded whenever the main ipod component is loaded
    componentDidMount(){
        let audio = document.getElementsByClassName("audio-element")[0]
        console.log(audio);
        this.setState({
            audio : audio,
        })
    }

  render(){
    return (
        //To make sure audio runs in the background even when are in other pages
    <div  style={styles.ipodContainer} className="ipod">
        <audio className="audio-element">
            <source src={sound}></source>
        </audio>
        <IpodScreen  activeItem={this.state.activeItem} activePage={this.state.activePage} audio={this.state.audio}/>
        <ControlPad rotate={this.captureRotation} changePageToHomeScreen={this.changePageToHomeScreen} changePage={this.changePage} toggle={this.toggle}/>
    </div>
  );
 }
}

const styles={
    ipodContainer:{
        height : '33rem',
        width : '20rem',
        backgroundImage: 'radial-gradient(#adb1b5, #4d4f80)',
        margin : '4rem auto',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center',
        borderRadius : '24px'
    }
}

export default Ipod;
