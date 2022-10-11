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
        "https://as2.ftcdn.net/v2/jpg/04/54/73/29/1000_F_454732959_pjHIUTqFz68f2VxnJMKs4JrMaXuxVo6l.jpg",
      message: "What's up",
    },
    {
      name: "Ghost 1",
      image:
        "https://as2.ftcdn.net/v2/jpg/04/54/73/29/1000_F_454732959_pjHIUTqFz68f2VxnJMKs4JrMaXuxVo6l.jpg",
      message: "What's up",
    },
    {
      message: "How's it going!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
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
              src={"https://static.scientificamerican.com/sciam/cache/file/D3E36D4B-4DAC-41ED-9A090F94600ABDFE_source.jpg?w=390&h=520&33C2C20C-213F-4EC0-A493EF26CFD87E62"}
            />
          </div>
        )
      )}
            <p className="chat-display-timestamp">
        YOU MATCHED WITH ELLEN ON 10/13/22
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
