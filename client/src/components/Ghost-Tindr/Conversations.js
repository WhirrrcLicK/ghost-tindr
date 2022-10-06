import React, { useState, useEffect } from "react";
import Header from "./Header"
import Footer from "./Footer"
import Matched from "./Matched";
import "./conversations.scss"

export default function Conversations() {

  return (
    <div className="conversations">
      <Header />
      <div>
      </div>
      <div className="chat-items-container">
      <Matched />
      <Matched />
      <Matched />
      <Matched />
      <Footer />
      </div>
    </div>
  );
}
