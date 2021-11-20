import React from "react";
import ReactPlayButton from 'react-audio-player';

type PlayButtonProps = {
  playing?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function PlayButton({playing = false, ...p}: PlayButtonProps) {
  return (
    <button {...p} className="inline-flex bg-blue-600 text-white w-40 h-40 rounded-full justify-center items-center text-3xl uppercase tracking-widest border-8 border-blue-700 shadow-inner drop-shadow-md">
      {playing ? (<span>Stop</span>) : <span>Play</span>}
    </button>
  );
}
