import "../components/style.css";
import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  const textSeason =
    season === "winter"
      ? "Oh no, winter again :("
      : "Finally, summer is back :)!!";

  const icon = season === "winter" ? "snowflake" : "sun";

  console.log(season);
  return (
    <div className={`season-display  ${season}`}>
      <i className={`icon-left massive ${icon} icon `} />
      <h1>{textSeason}</h1>
      <i className={`icon-right massive ${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
