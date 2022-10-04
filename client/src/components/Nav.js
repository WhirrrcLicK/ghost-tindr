import React from "react";

export default function Nav({ minimal, setShowModal, showModal, setIsSignUp }) {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  const authToken = false;
  return (
    <div className="loginForm">
    <form>
      <div className="input-container">
        <input type="text" name="email" placeholder="email" required />
      </div>
      <div className="input-container">
        <input type="password" name="pass" placeholder="password" required />
      </div>
      <div className="login-button">
        <input type="submit" value="login" />
      </div>
    </form>
  </div>
  );
};
