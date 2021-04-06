import React from 'react'
import IpodScreen from './IpodScreen'
import ControlPad from './ControlPad'
import ZingTouch from 'zingtouch'
import './ipod.css'

class Ipod extends React.Component{

    constructor(){
        super();
        this.state={
            Menu:true,
            album:false,
            songs:true,
            setting:false,
            artist:false,
            showHide:false
        }
    }
    captureRotation=()=>{

        let songs=document.getElementById('songs');
        let album=document.getElementById('Album');
        let artist=document.getElementById('Artist');
        let settings=document.getElementById('Settings');
        var angle=0;
        const target=document.getElementById('outer-wheel');
        const region=new  ZingTouch.Region(target);
        region.bind(target,'rotate',(e)=>{
            angle+=e.detail.distanceFromLast;
            console.log(angle);
            if(angle<0){
                angle=56;
                this.setState({
                    Menu:true,
                    album:false,
                    songs:false,
                    artist:false,
                    setting:true
                })
            }
            if(angle>=0 &&angle<15 ){
                songs.classList.add('selected');
                album.classList.remove('selected');
                artist.classList.remove('selected');
                settings.classList.remove('selected');
                this.setState({
                    Menu:true,
                    album:false,
                    songs:true,
                    artist:false,
                    setting:false
                })

            }
            else if(angle>15 && angle<30){
                songs.classList.remove('selected');
                album.classList.add('selected');
                artist.classList.remove('selected');
                settings.classList.remove('selected');
                this.setState({
                    Menu:true,
                    album:true,
                    songs:false,
                    artist:false,
                    setting:false
                })
            }
            if(angle>30 && angle<45){
                songs.classList.remove('selected');
                album.classList.remove('selected');
                artist.classList.add('selected');
                settings.classList.remove('selected');
                this.setState({
                    Menu:true,
                    album:false,
                    songs:false,
                    artist:true,
                    setting:false
                })
            }
            if(angle>45 && angle<90){
                songs.classList.remove('selected');
                album.classList.remove('selected');
                artist.classList.remove('selected');
                settings.classList.add('selected');
                this.setState({
                    Menu:true,
                    album:false,
                    songs:false,
                    artist:false,
                    setting:true
                })
            }
            if(angle>90){
                angle=0;
                this.setState({
                    Menu:true,
                    album:false,
                    songs:true,
                    artist:false,
                    setting:false
                })

            }
        })
        console.log(this.state);

    }

    handleItemClick=()=>{

        
    }
  
  render(){
    return (
    <div className="ipod">
        <IpodScreen />
        <ControlPad rotate={this.captureRotation}/>
    </div>
  );
 }
}

export default Ipod;
