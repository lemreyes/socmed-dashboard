import React, { useState, useEffect, Fragment } from "react";
import ToggleSwitch from "./components/ToggleSwitch";
import BigCard from "./components/UI/BigCard";
import SmallCard from "./components/UI/SmallCard";
import ThemeContext from "./components/UI/ThemeContext";

import classes from "./App.module.css";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setIsHttpError] = useState(null);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-a0e15-default-rtdb.asia-southeast1.firebasedatabase.app/socmed_dashboard.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();
      console.log("Response data: " + responseData);

      // load platforms data into array
      const platforms = [];
      console.log("Response data: " + responseData);

      for (const key in responseData.platforms) {
        console.log("key: " + key);
        platforms.push({
          id: key,
          platform: responseData.platforms[key].platform,
          account: responseData.platforms[key].account,
          followers: {
            count: responseData.platforms[key].followers.count,
            string: responseData.platforms[key].followers.string,
            today: responseData.platforms[key].followers.today,
            today_status: responseData.platforms[key].followers.today_status,
          },
          param1: {
            count: responseData.platforms[key].param1.count,
            string: responseData.platforms[key].param1.string,
            today: responseData.platforms[key].param1.today,
            today_status: responseData.platforms[key].param1.today_status,
          },
          param2: {
            count: responseData.platforms[key].param2.count,
            string: responseData.platforms[key].param2.string,
            today: responseData.platforms[key].param2.today,
            today_status: responseData.platforms[key].param2.today_status,
          },
        });
      }

      // transfer fetch data
      const socmedData = {
        totalFollowers: responseData.total_followers,
        platforms: platforms,
      };
      console.log("socmedData: " + socmedData);
      console.log(socmedData.platforms[0]);

      setData(socmedData);
      setIsLoading(false);
    };

    fetchData().catch((error) => {
      setIsLoading(false);
      setIsHttpError(error);
    });
  }, []);

  // render when still loading
  if (isLoading) {
    return (
      <section>
        <p>Loading... </p>
      </section>
    );
  }

  // render when error
  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }

  console.log("platformList");

  // populate for big card data
  const platformList = data.platforms.map((platform) => (
    <BigCard
      key={`${platform.id}_3`}
      id={`${platform.id}_3`}
      platformName={platform.platform}
      account={platform.account}
      count={platform.followers.count}
      string={platform.followers.string}
      today={platform.followers.today}
      todayStatus={platform.followers.today_status}
    />
  ));

  console.log("PlatformStatList");

  const platformStatList = data.platforms.map((platform) => (
    <Fragment>
      <SmallCard
        key={`${platform.id}_1`}
        id={`${platform.id}_1`}
        platformName={platform.platform}
        count={platform.param1.count}
        string={platform.param1.string}
        today={platform.param1.today}
        todayStatus={platform.param1.today_status}
      />
      <SmallCard
        key={`${platform.id}_2`}
        id={`${platform.id}_2`}
        platformName={platform.platform}
        count={platform.param2.count}
        string={platform.param2.string}
        today={platform.param2.today}
        todayStatus={platform.param2.today_status}
      />
    </Fragment>
  ));

  const themeChangeHandler = () => {
    console.log("ToggleSwitch onChangeHandler theme: " + theme);
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`${theme} ${classes.pseudoBody}`}>
        <div class={`${theme} ${classes.topBg}`} />
        <div className={`${theme} ${classes.appContainer}`}>
          <section id="header">
            <h1 className={`${theme} ${classes.title}`}>
              Social Media Dashboard
            </h1>
            <span className={`${theme} ${classes.totalCount}`}>
              Total Followers:{" "}
              {data.totalFollowers.toLocaleString("en", { useGrouping: true })}
            </span>
          </section>
          <section id="main-apps" className={`${theme} ${classes.borderTop}`}>
            <ToggleSwitch onChangeTheme={themeChangeHandler} />
            <ul className={`${theme} ${classes.bigCardContainer}`}>
              {platformList}
            </ul>
          </section>
          <section id="today">
            <h1 className={`${theme} ${classes.overviewToday}`}>
              Overview - Today
            </h1>
            <ul className={`$(theme) ${classes.smallCardContainer}`}>
              {platformStatList}
            </ul>
          </section>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
