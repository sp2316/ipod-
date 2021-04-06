import React from 'react'
import IpodScreen from './IpodScreen'
import ControlPad from './ControlPad'
import ZingTouch from 'zingtouch'
import './ipod.css'

class Ipod extends React.Component{

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
                angle=46;
            }
            if(angle>=0 &&angle<15 ){
                songs.classList.add('selected');
                album.classList.remove('selected');
                artist.classList.remove('selected');
                settings.classList.remove('selected');

            }
            else if(angle>15 && angle<30){
                songs.classList.remove('selected');
                album.classList.add('selected');
                artist.classList.remove('selected');
                settings.classList.remove('selected');
            }
            if(angle>30 && angle<45){
                songs.classList.remove('selected');
                album.classList.remove('selected');
                artist.classList.add('selected');
                settings.classList.remove('selected');
            }
            if(angle>45 && angle<90){
                songs.classList.remove('selected');
                album.classList.remove('selected');
                artist.classList.remove('selected');
                settings.classList.add('selected');
            }
            if(angle>90){
                angle=0;
            }
        })

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
