import React from "react";
import "./AuthModel.css";

export default function AuthModel(props) {
  const handleClick = () => {
    props.setShowModel(false);
  };
  return (
    <div className="auth-model">
      <div className="close" onClick={handleClick}>
        close
      </div>
      <h2></h2>
    </div>
  );
}
