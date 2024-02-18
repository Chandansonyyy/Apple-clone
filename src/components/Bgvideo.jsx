import React, { useRef } from 'react';

const Bgvideo = () => {
  const videoRef = useRef(null);

  const handleTimeUpdate = () => {
    if (videoRef.current.currentTime >= 5) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="back-video">
      <video
        autoPlay
        loop
        muted
        playsInline
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
      >
        <source src="./public/Videos/intt.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Bgvideo;
