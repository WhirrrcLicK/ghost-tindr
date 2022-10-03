import React from "react";

const Nav = ({ authToken, minimal }) => {
  return (
    <nav>
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.alittlenudge.com/wp-content/uploads/2017/03/ghosting2.jpg"
          alt="logo"
        />
      </div>
      {!authToken && !minimal && <button className="nav-button">Log in</button>}
    </nav>
  );
};
export default Nav;
