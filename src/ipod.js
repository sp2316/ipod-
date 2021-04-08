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
        }
    }
    captureRotation=()=>{
        const songs=document.getElementById('songs');
        const album=document.getElementById('Album');
        const artist=document.getElementById('Artist');
        const settings=document.getElementById('Settings');
        let angle=0;
        const target=document.getElementById('outer-wheel');
        const region=new  ZingTouch.Region(target);

        region.bind(target,'rotate',(e)=>{
            angle+=e.detail.distanceFromLast;
            console.log(angle);
            if(angle<0 && this.state.Menu===true){
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
            if(angle>0 &&angle<15 && this.state.Menu===true ){
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
             if(angle>15 && angle<30 && this.state.Menu===true){
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
            if(angle>30 && angle<45 && this.state.Menu===true){
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
            if(angle>45 && this.state.Menu===true){
                angle=-10;
            //     songs.classList.add('selected');
            //         album.classList.remove('selected');
            //         artist.classList.remove('selected');
            //         settings.classList.remove('selected');
            //         this.setState({
            //             Menu:true,
            //             album:false,
            //             songs:true,
            //             artist:false,
            //             setting:true
            // });
        }
            // if(angle>45 && angle<90 && this.state.Menu===true){
            //     songs.classList.remove('selected');
            //     album.classList.remove('selected');
            //     artist.classList.remove('selected');
            //     settings.classList.add('selected');
            //     this.setState({
            //         Menu:true,
            //         album:false,
            //         songs:false,
            //         artist:false,
            //         setting:true
            //     })
            // }
            // if(angle>90 && this.state.Menu===true){
            //     angle=0;
            //     this.setState({
            //         Menu:true,
            //         album:false,
            //         songs:true,
            //         artist:false,
            //         setting:false
            //     })

            // }
        })
        // console.log(this.state);

    }

    handleItemClick=()=>{
        if(this.state.songs===true && this.state.Menu===true){
            this.setState({
                Menu:false
            })
        

            let screen=document.getElementById('screen');
            let list=document.getElementById('list');
             
            list.style.display="none";
            let newScreen=document.createElement('img');
            newScreen.id='img-id';
            newScreen.setAttribute('src',"https://i.pinimg.com/originals/0b/4b/b0/0b4bb0878c4f4e8a43446b4cf992d454.jpg");
            screen.appendChild(newScreen)
            
    }

    if(this.state.album===true && this.state.Menu===true){
        this.setState({
            Menu:false
        })
    

        let screen=document.getElementById('screen');
        let list=document.getElementById('list');
        list.style.display="none";
        let newScreen=document.createElement('img');
        newScreen.id='img-id';
        newScreen.setAttribute('src',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQemq_16W-ChKFFNxp-lrCZ_ez11cg2vOgHWQ&usqp=CAU");
        screen.appendChild(newScreen)
        

}

if(this.state.artist===true && this.state.Menu===true){
    this.setState({
        Menu:false
    })


    let screen=document.getElementById('screen');
    let list=document.getElementById('list');
    list.style.display="none";
    let newScreen=document.createElement('img');
    newScreen.id='img-id';
    newScreen.setAttribute('src',"https://static01.nyt.com/images/2019/07/17/arts/17album-sheeran-grid/17album-sheeran-grid-articleLarge.jpg?quality=75&auto=webp&disable=upscale");
    screen.appendChild(newScreen)
        

}

if(this.state.setting===true && this.state.Menu===true){
    this.setState({
        Menu:false
    })


    let screen=document.getElementById('screen');
    let list=document.getElementById('list');
    list.style.display="none";
    let newScreen=document.createElement('img');
    newScreen.id='img-id';
    newScreen.setAttribute('src',"http://www.howtogeek.com/wp-content/uploads/2010/08/sshot201008022149437.png'");
    screen.appendChild(newScreen)
        

}
    }

onMenuClick= ()=>{
    console.log(this.state.Menu);
    
    if(this.state.Menu===false){
        let prev=document.getElementById('img-id');
        let list=document.getElementById('list');
        prev.remove();
        list.style.display="block";
        this.setState({
            Menu:true,
    },()=>{
        console.log(this.state);

    })

    }

}
  
  render(){
    return (
    <div className="ipod">
        <IpodScreen />
        <ControlPad rotate={this.captureRotation} handleItemClick={this.handleItemClick} handleMenuClick={this.onMenuClick}/>
    </div>
  );
 }
}

export default Ipod;
