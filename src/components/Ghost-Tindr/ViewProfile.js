import React from 'react'

import './styles.scss'

export default function Profile(props) {

  return (
    <article className="viewprofile"> 
    <container className="user_profile">
    <div className="user_img">User Image</div>
    <div className="user_info">User Info</div>
    </container>
    <div className="swipe_buttons">Like or Dislike</div>
    </article>
  );
}