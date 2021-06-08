
import React from 'react';
import Hls from 'hls.js';
class ScreenThree extends React.Component{

  componentDidMount(){
    
    let channelUrl=JSON.parse(localStorage.getItem('urls'));
    // if (Hls.isSupported()) {
    //   var video = document.getElementById('video');
    //   var hls = new Hls();
    //   hls.loadSource(channelUrl);
    //   hls.attachMedia(video);
    //   hls.on(Hls.Events.MANIFEST_PARSED, function() {
    //     video.play();
    //   });
    // }
    var video = document.getElementById('video');
    var videoSrc =channelUrl;
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
    } else if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
    }
      }
   
    
     
    
  
    render(){
     
        return(
        
            <div className='screenThree'>
              <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
                <video id="video"  controls ></video>
             </div>
        )
    }
}
export default ScreenThree;