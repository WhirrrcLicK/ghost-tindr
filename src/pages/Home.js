import React from "react";
import "./Home.css";
import Nav from "../components/Nav";
import AuthModel from "../components/AuthModel";
import { useState } from "react";

export default function Home() {
  const [showModel, setShowModel] = useState(false);
  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
    setShowModel(true);
  };
  return (
    <div className="overlay">
      <Nav
        minimal={false}
        authToken={authToken}
        setShowModel={setShowModel}
        showModel={showModel}
      />
      <div className="home">
        <h1>Swipe Right</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>

        {showModel && <AuthModel setShowModel={setShowModel} />}
      </div>
    </div>
  );
}
