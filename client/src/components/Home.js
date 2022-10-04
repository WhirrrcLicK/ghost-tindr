import React, { useState } from "react";
import Nav from "./Nav";
import AuthModal from "./AuthModal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const authToken = false;
  const handleClick = () => {
    if (!showModal) {
    setShowModal(true);
    setIsSignUp(true);
  } else {
    setShowModal(false);
    setIsSignUp(false);
  }
}
  return (
    <div className="overlay">
      <div className="home">
        <div className="logo-lrg">RELIC</div>
    <div className="login">
      <Nav
        minimal={false}
        setShowModal={setShowModal}
        showModal={showModal}
        setIsSignUp={setIsSignUp}
      />
        <p>Newly Haunted?</p>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>

        {showModal && (
          <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
        )}
        </div>
      </div>
    </div>
  );
}
