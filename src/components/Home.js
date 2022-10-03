import React, { useState } from "react";
import Nav from "./Nav";
import AuthModal from "./AuthModal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const authToken = false;
  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <div className="overlay">
      <Nav />
      <div className="home">
        <h1>Happy Halloween!</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>

        {showModal && <AuthModal setShowModal={setShowModal} />}
      </div>
    </div>
  );
}
