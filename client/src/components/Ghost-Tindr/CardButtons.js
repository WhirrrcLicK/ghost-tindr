import React from "react";
import TinderCards from "./TinderCards";
import "./CardButtons.scss";
import { Link } from "react-router-dom";

export default function CardButtons({ profileId }) {
  return (
    <div className="cardButtons">
      <a href={``}>
        <img
          src="https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/Untitled_Artwork%204.png?raw=true"
          height="110"
          className="like"
        />
      </a>
      <Link to={`/profile/${profileId}`}>
        <img
          src="https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/Untitled_Artwork%202.png?raw=true"
          height="110"
          className="profile"
        />
      </Link>
      <a href={``} className="dislike">
        <img
          src="https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/Untitled_Artwork%205.png?raw=true"
          height="110"
        />
      </a>
    </div>
  );
}
