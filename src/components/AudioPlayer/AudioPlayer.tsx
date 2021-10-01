import React from "react";
import ReactAudioPlayer from 'react-audio-player';

type AudioPlayerProps = {
  file: string;
};

export default function AudioPlayer({file}: AudioPlayerProps) {
  return (
    <div>
      <ReactAudioPlayer
        src={file}
        autoPlay
        controls
        loop
      />
    </div>
  );
}
