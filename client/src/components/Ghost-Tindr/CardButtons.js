import React from 'react'
import TinderCards from "./TinderCards"
import "./CardButtons.scss"

export default function CardButtons(props) {

  return (
    <>
    <container className="cardButtons">
    <button className="dislike"><img src="https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/Untitled_Artwork%204.png?raw=true" height ="110" /><a href={``}></a>
      </button>
      <button className="profile"><img src="https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/Untitled_Artwork%202.png?raw=true" height ="110"/><a href={`/profile/${props.profileId}`}></a></button>
      <button className="like"><img src="https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/Untitled_Artwork%205.png?raw=true"  height ="110"/><a href={``}></a>
      </button>
      </container>
    </>
  );
}
