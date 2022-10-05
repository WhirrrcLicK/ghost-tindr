import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Nav({ minimal, setShowModal, showModal, setIsSignUp }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  let history = useHistory();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });

      setCookie("Email", response.data.email);
      setCookie("UserId", response.data.userId);
      setCookie("AuthToken", response.data.token);

      const success = response.status === 201;

      if (success) history.push("/cards");
    } catch (error) {
      console.log(error);
    }
  };

  const authToken = false;

  return (
    <div className="loginForm">
      <form>
        <div className="input-container">
          <input
            type="text"
            name="email"
            placeholder="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            name="pass"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {!authToken && (
          <div className="login-button">
            <button onClick={handleClick}>Login</button>
          </div>
        )}
      </form>
    </div>
  );
}
