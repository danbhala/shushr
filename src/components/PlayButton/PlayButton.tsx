import React from "react";

type PlayButtonProps = {
  isPlaying: boolean;
  onPlayPauseClick: (e: boolean) => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function PlayButton({isPlaying, onPlayPauseClick, ...p}: PlayButtonProps) {
  const classes = "inline-flex text-white w-40 h-40 rounded-full justify-center items-center text-2xl uppercase tracking-widest border-2 border-white drop-shadow-md"
  return (
    <div>
      {isPlaying ? (
      <button
      className="inline-flex text-white w-40 h-40 rounded-full justify-center items-center text-2xl uppercase tracking-widest border-2 border-white shadow drop-shadow-md scale-100 transition-all"
        type="button"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        Pause
      </button>
    ) : (
      <button
        type="button"
        className="inline-flex text-white w-40 h-40 rounded-full justify-center items-center text-2xl uppercase tracking-widest border-2 border-white shadow drop-shadow-md opacity-80 hover:opacity-100 transition-all"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        Play
      </button>
    )}
    </div>
  );
}
