import { useState, useRef, useEffect } from "react";

interface IVideoProps {
  src: string;
  width?: number | string;
  height?: number | string;
  loop?: boolean;
  startPauseController: boolean;
  autoPlay: boolean;
  mute: boolean;
}

const Video = ({
  src,
  width,
  height,
  loop = false,
  startPauseController = false,
  autoPlay,
  mute = true,
}: IVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (videoRef.current && autoPlay) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  return (
    <div className="flex w-full relative">
      <video
        ref={videoRef}
        src={src}
        width={width}
        height={height}
        loop={loop}
        autoPlay={autoPlay}
        muted={mute}
        className="flex w-full h-full object-cover"
      />
      {startPauseController && !isPlaying && (
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
          onClick={handlePlayPauseClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isPlaying ? "M6 18L18 12 6 6v12z" : "M4 6h16v12H4z"}
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Video;
