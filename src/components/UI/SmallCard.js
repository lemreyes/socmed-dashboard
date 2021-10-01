import React, { useContext } from "react";

import SocmedIcon from "./SocmedIcon";
import ThemeContext from "./ThemeContext";

import classes from "./SmallCard.module.css";
import TodayStatus from "./TodayStatus";

const SmallCard = (props) => {
  const theme = useContext(ThemeContext);

  // when exceed 10000, format as 2-digit with k suffix
  const formattedCount =
    props.count > 10000 ? `${props.count / 1000}k` : props.count;

  return (
    <li className={`${theme} ${classes.smallCard}`}>
      <span className={classes.string}>{props.string}</span>
      <span className={classes.icon}>
        <SocmedIcon platformName={props.platformName} />
      </span>
      <span className={classes.count}>{formattedCount}</span>
      <TodayStatus status={props.todayStatus} count={props.today} unit="%" />
    </li>
  );
};

export default SmallCard;
