import React from "react";
import TinderCards from "./TinderCards";
import "./styles.scss";

export default function ViewProfile(props) {
  return (
    <article className="viewprofile">
      <container className="user_profile">
        <TinderCards />
        <div className="user_info">User Info</div>
      </container>
      <div className="swipe_buttons">Like or Dislike</div>
    </article>
  );
}
