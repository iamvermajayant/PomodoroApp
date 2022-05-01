import React from 'react'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Audio = (props) => {
  return (
    <AudioPlayer
        autoPlay={true}
        showJumpControls={false}
        src="https://pomofocus.io/audios/alarms/alarm-kitchen.mp3"
      />
  )
}

export default Audio