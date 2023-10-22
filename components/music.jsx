import { useEffect, useRef } from "react";

const Music = ({ src, isPlaying }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);
  return <audio autoplay ref={ref} src={src} loop type="audio/mpeg" />;
};

export default Music;
