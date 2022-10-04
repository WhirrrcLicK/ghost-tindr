<<<<<<< HEAD
import React from 'react'


export default function Conversations(props) {
=======
import React from "react";
import Chat from "./Chat";
import ChatHeader from "./ChatHeader";
import Matched from "./Matched";
>>>>>>> 46085aaf82ba73ecf3936bd489adbb5d9b160a55

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
