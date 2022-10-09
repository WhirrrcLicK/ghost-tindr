import React from 'react'
import TinderCards from "./TinderCards"
import "./CardButtons.scss"

export default function CardButtons(props) {
console.log("profile", props.profileId)
  return (
    <div className="cardButtons">
    <a href={``}><img src="https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/Untitled_Artwork%204.png?raw=true" height ="110" className="like" /></a>
      <a href={`/profile/${props.profileId}`}><img src="https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/Untitled_Artwork%202.png?raw=true" height ="110" className="profile"/></a>
      <a href={``} className="dislike"><img src="https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/Untitled_Artwork%205.png?raw=true"  height ="110"/></a>
      </div>
  );
}
