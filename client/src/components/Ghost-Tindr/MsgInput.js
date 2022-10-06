import React from "react";
import { useState } from "react";
import "./conversations.scss"

export default function MsgInput() {
  const [text, setText] = useState("");
  return (
    <div className="msg-input">
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button className="send-button">Send</button>
    </div>
  );
}
