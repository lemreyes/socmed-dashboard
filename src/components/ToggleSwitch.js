import React, { useContext } from "react";

import classes from "./ToggleSwitch.module.css";
import ThemeContext from "./UI/ThemeContext";

const ToggleSwitch = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <div className={classes.toggle}>
      <span className={classes.toggleLabel}>{theme} Mode</span>
      <label className={`${theme} ${classes.switch}`}>
        <input type="checkbox" onChange={props.onChangeTheme} />
        <span className={`${theme} ${classes.slider}`}></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
