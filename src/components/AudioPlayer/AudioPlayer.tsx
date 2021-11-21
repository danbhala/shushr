import React, { useEffect, useRef, useState } from "react";
import PlayButton from '../PlayButton'

type AudioPlayerProps = {
  file: string;
};

export default function AudioPlayer({file}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio() : undefined
  );
  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    if (!audioRef.current.src) {
      audioRef.current.src = file;
    }
    if (isPlaying) {
      audioRef.current.play();
      audioRef.current.loop = true;
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, file]);

  return (
    <div>
       <audio ref={audioRef} />
       <PlayButton isPlaying={isPlaying} onPlayPauseClick={setIsPlaying}  />
    </div>
  );
}
