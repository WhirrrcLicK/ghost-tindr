import React from 'react'
import TinderCards from "./TinderCards"
import "./CardButtons.scss"

export default function CardButtons(props) {

  return (
    <>
    <container className="cardButtons">
    <button className="dislike"><a href={`/profile/${props.profileId}`}>Dislike</a>
      </button>
      <button className="profile"><img src="https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/Untitled_Artwork%202.png?raw=true" height ="100"/><a href={`/profile/${props.profileId}`}></a></button>
      <button className="like">
        <a href={`/profile/${props.profileId}`}>Like</a>
      </button>
      </container>
    </>
  );
}