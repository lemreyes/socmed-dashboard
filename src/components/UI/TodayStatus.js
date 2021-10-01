import React from "react";

import upIcon from "./images/icon-up.svg";
import downIcon from "./images/icon-down.svg";

import classes from "./TodayStatus.module.css";

const TodayStatus = props => {

    let icon = "";
    let altIcon = "";
    let todayStyle = "";
    if (props.status === "up") {
      icon = upIcon;
      altIcon = "Up";
      todayStyle = classes.up;
    } else {
      icon = downIcon;
      altIcon = "Down";
      todayStyle = classes.down;
    }

    return (
        <div className={classes.today}>
            <img className={classes.statusIcon} src={icon} alt={altIcon} />
            <span className={todayStyle}>{props.count} {props.unit}</span>
        </div>
    );
}; 

export default TodayStatus;