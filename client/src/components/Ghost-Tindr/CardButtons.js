import React from 'react'
import TinderCards from "./TinderCards"
import "./CardButtons.scss"

export default function CardButtons(props) {

  return (
    <>
    <container className="cardButtons">
    <button className="dislike">
      <a href={`/profile/${props.profileId}`}>Dislike</a>
      </button>
      <button className="profile">
        <a href={`/profile/${props.profileId}`}>Profile</a>
        </button>
      <button className="like">
        <a href={`/profile/${props.profileId}`}>Like</a>
      </button>
      </container>
    </>
  );
}