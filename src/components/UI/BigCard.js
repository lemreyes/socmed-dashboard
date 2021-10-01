import React from "react";
import { useContext } from "react/cjs/react.development";

import SocmedIcon from "./SocmedIcon";
import ThemeContext from "./ThemeContext";

import classes from "./BigCard.module.css";
import TodayStatus from "./TodayStatus";

const BigCard = (props) => {
  const theme = useContext(ThemeContext);
  console.log("BigCard theme: " + theme);
  console.log("BigCard props.platformName: " + props.platformName);

  // when exceed 10000, format as 2-digit with k suffix
  const formattedCount =
    props.count > 10000 ? `${props.count / 1000}k` : props.count;

  return (
    <li className={`${theme} ${classes.bigCard} ${props.platformName}`}>
      <div className={`${theme} ${classes.cardTitle}`}>
        <SocmedIcon platformName={props.platformName} />
        <span>{props.account}</span>
      </div>
      <div className={`${theme} ${classes.count}`}>
        <span className={`${theme} ${classes.countNum}`}>{formattedCount}</span>
        <span className={`${theme} ${classes.countString}`}>
          {props.string}
        </span>
      </div>
      <TodayStatus status={props.todayStatus} count={props.today} unit="Today"/>
    </li>
  );
};

export default BigCard;
