import React from "react";
import ForestRoundedIcon from "@mui/icons-material/ForestRounded";
import "../../styling/HomePage.css";
export default function HomePage() {
  return (
    <>
      <div className="reminder-card">
        <div className="icon-circle">
          <ForestRoundedIcon size="large" />
        </div>
        <div className="reminder-info-text">
          <h3>All tasks completed! 🎉</h3>
          <h4>new tasks will show up here </h4>
        </div>
      </div>
    </>
  );
}
