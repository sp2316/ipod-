import React from 'react'
import IpodScreen from './IpodScreen'
import ControlPad from './ControlPad'
import ZingTouch from 'zingtouch'

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
    
    captureRotation=()=>{
        const target=document.getElementById('outer-wheel');
        const region=new ZingTouch.Region(target);
        let change=0;
        this.state.enter+=1;
        if(this.state.enter<2){
            region.bind(target,'rotate',(e)=>{

               let angle=e.detail.distanceFromLast;
                console.log("angle",angle," ",this.state.enter);

                if(angle<0){

                    console.log("change ",change);
                    change++;
                    let {activePage}=this.state;
                    let {activeItem}=this.state;

                    if(change===15){
                        console.log("change state");
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
        }else{
            console.log('Not allowed to Enter');
        }

        
    }
  

    changePage= ()=>{
        console.log(this.state);

        let {activeItem}=this.state;
        if(activeItem==='Music'){
            this.setState({
                activeItem:'MyMusic',
                activePage:activeItem
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

  render(){
    return (
    <div  style={styles.ipodContainer} className="ipod">
        <IpodScreen  activeItem={this.state.activeItem} activePage={this.state.activePage}/>
        <ControlPad rotate={this.captureRotation} changePageToHomeScreen={this.changePageToHomeScreen} changePage={this.changePage}/>
    </div>
  );
 }
}

const styles={
    ipodContainer:{
        height : '33rem',
        width : '20rem',
        backgroundImage: 'radial-gradient(#adb1b5, #4d4f50)',
        margin : '4rem auto',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center',
        borderRadius : '24px'
    }
}

export default Ipod;
