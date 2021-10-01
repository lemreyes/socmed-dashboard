import React from "react";

import fbIcon from "./images/icon-facebook.svg";
import instagramIcon from "./images/icon-instagram.svg";
import twitterIcon from "./images/icon-twitter.svg";
import youtubeIcon from "./images/icon-youtube.svg";

const SocmedIcon = (props) => {
  let icon = "";
  let altIcon = "";
  if (props.platformName === "facebook") {
    icon = fbIcon;
    altIcon = "Facebook";
  } else if (props.platformName === "instagram") {
    icon = instagramIcon;
    altIcon = "Instagram";
  } else if (props.platformName === "twitter") {
    icon = twitterIcon;
    altIcon = "Twitter";
  } else {
    icon = youtubeIcon;
    altIcon = "Youtube";
  }

  return <img src={icon} alt={altIcon} />;
};

export default SocmedIcon;
