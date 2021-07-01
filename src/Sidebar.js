import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link style={{textDecoration: "none"}} to="/">
        <SidebarRow selected title="Home" Icon={HomeIcon} />
      </Link>
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
      <hr />
      <SidebarRow title="Library" Icon={VideoLibraryIcon} />
      <SidebarRow title="History" Icon={HistoryIcon} />
      <SidebarRow title="Your videos" Icon={OndemandVideoIcon} />
      <SidebarRow title="Watch Later" Icon={WatchLaterIcon} />
      <SidebarRow title="Liked Videos" Icon={ThumbUpAltOutlinedIcon} />
      <SidebarRow title="Show More" Icon={ExpandMoreOutlinedIcon} />
      <hr />
    </div>
  );
};

export default Sidebar;
