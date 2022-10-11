import React, { useState } from "react";
import Nav from "./Nav";
import AuthModal from "./AuthModal";
import "./home.scss"

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
      <div className="home">
        <div className="logo-lrg"><img src="https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/Untitled_Artwork%2013.png?raw=true" className="logo" /></div>
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
  );
}
