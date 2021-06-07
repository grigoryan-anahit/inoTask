
import React from 'react';
import Hls from 'hls.js';
class ScreenThree extends React.Component{

  componentDidMount(){
    let channelUrl=JSON.parse(localStorage.getItem('urls'));
    if (Hls.isSupported()) {
      var video = document.getElementById('video');
      var hls = new Hls();
      hls.loadSource(channelUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function (){
            video.play();
      })
    }
  }
    render(){

        return(
            <div className='screenThree'>
                <video id="video"  controls ></video>
             </div>
        )
    }
}
export default ScreenThree;