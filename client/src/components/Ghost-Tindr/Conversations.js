import React from "react";
import Chat from "./Chat";
import ChatHeader from "./ChatHeader";
import Matched from "./Matched";

export default function Conversations() {
  return (
    <div className="conversations">
      <ChatHeader />
      <div>
        <button className="option">Matched</button>
        <button className="option">Chat</button>
      </div>

      <Matched />
      <Chat />
    </div>
  );
}
