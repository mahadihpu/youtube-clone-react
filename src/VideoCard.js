import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css";
const VideoCard = ({ image, title, channel, views, timestamp }) => {
  return (
    <div className="videoCard">
      <img className="videoCard_thumbnail" src={image} alt="" />
      <div className="videoCard_info">
        <Avatar className="videoCard_avatar" alt="channel" src={channel} />
        <div className="videoCard_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
