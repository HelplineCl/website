import React from 'react'

const Video: React.FC = () => {
  return (
    <div className="contenedor-video">
      <iframe
        className="video"
        src="https://www.youtube.com/embed/l3G1Hd0jwTE?si=F9EMAjbEbcSktS-7"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default Video
