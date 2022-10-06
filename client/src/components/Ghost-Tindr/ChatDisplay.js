import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import MsgInput from "./MsgInput"
import Matched from "./Matched";
import Header from "./Header"
import Footer from "./Footer"
import "./conversations.scss"

export default function ChatDisplay() {
  return (
    <div className="">
      <Header />
      <MsgInput />
      <Footer />
    </div>
  );
}
