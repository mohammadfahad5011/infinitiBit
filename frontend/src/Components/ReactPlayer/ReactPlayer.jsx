// import React, { Component } from "react";
// import ReactPlayer from "react-player";
// import "./player.css";

// class ResponsivePlayer extends Component {
//   render() {
//     return (
//       <div className="player-wrapper">
//         <ReactPlayer
//           className="react-player"
//           url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
//           width="100%"
//           height="100%"
//         />
//       </div>
//     );
//   }
// }

// export default ResponsivePlayer;

import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const [playing, setPlaying] = React.useState(false);

  const handlePlay = () => {
    setPlaying(true);
  };

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%", // 16:9 aspect ratio
        background: 'url("../../../public/images/vedeo.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {playing ? null : (
          <button
            onClick={handlePlay}
            style={{ border: "none", background: "none", cursor: "pointer" }}
          >
            <img src="https://example.com/play-button.svg" alt="Play" />
          </button>
        )}
        <ReactPlayer
            url="https://example.com/video.mp4"
          playing={playing}
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
