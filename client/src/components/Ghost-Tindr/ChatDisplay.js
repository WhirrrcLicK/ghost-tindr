import React, { useState } from "react";
import { useCookies } from "react-cookie";
import Header from "./Header";
import Footer from "./Footer";
import "./conversations.scss";

export default function ChatDisplay() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ghost 1",
      image:
        "https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/IMG_0178.jpg?raw=true",
      message: "Hey there.",
    },
    {
      name: "Ghost 1",
      image:
        "https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/IMG_0178.jpg?raw=true",
      message: "Wanna stand in front of a mirror and say my name a bunch?",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    const replyMessage = {
      name: "Ghost 1",
      image:
        "https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/IMG_0178.jpg?raw=true",
      message: "Summon me, and I'll scream at whomever you want.",
    };
    setMessages([...messages, { message: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, replyMessage]);
    }, 4000);
  };

  return (
    <div className="chat-display">
      <Header />
      {messages.map((message) =>
        message.name ? (
          <div className="chat-display-message">
            <img
              className="chat-display-image"
              alt={message.name}
              src={message.image}
            />
            <p className="chat-display-text">{message.message}</p>
          </div>
        ) : (
          <div className="chat-display-message">
            <p className="chat-display-owntext">{message.message}</p>
            <img
              className="chat-display-image"
              alt={message.name}
              src={
                "https://static.scientificamerican.com/sciam/cache/file/D3E36D4B-4DAC-41ED-9A090F94600ABDFE_source.jpg?w=390&h=520&33C2C20C-213F-4EC0-A493EF26CFD87E62"
              }
            />
          </div>
        )
      )}
      <p className="chat-display-timestamp">
        YOU MATCHED WITH BlOODY MARY ON 10/13/22
      </p>
      <form className="msg-form">
        <input
          className="msg-input"
          type="text"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend} type="submit" className="send-button">
          SEND
        </button>
      </form>
      <Footer />
    </div>
  );
}
