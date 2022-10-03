import React from "react";
import "./Nav.css";

export default function Nav(props) {
  const handleClick = () => {
    props.setShowModel(true);
  };
  return (
    <nav>
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.guim.co.uk/img/media/58eca0c36f70c545928cd37e6667d16355a3b5e1/0_0_2560_1536/master/2560.jpg?width=620&quality=85&dpr=1&s=none"
          alt=""
        />
      </div>
      {!props.authToken && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={props.showModel}
        >
          Log in
        </button>
      )}
    </nav>
  );
}
