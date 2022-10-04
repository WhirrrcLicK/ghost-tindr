import React, { useState } from "react";

export default function AuthModal(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  console.log(email, password);
  const handleClick = () => {
    props.setShowModal(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="createform">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <input className="secondary-button" type="submit" />
      </form>
    </div>
  );
}