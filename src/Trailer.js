import React from 'react'
import YouTube from 'react-youtube';
import './Trailer.css'

function Trailer({videoID}) {
    const opts ={
        height : '390',
        width : '640',
        playerVars:{
            autoplay:1
        }
    }
    console.log(videoID)
    return (
        <div>
            <YouTube className="video" videoId={videoID} opts={opts}/>
        </div>
    )
}

export default Trailer
