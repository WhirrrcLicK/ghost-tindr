import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./home.scss"

export default function AuthModal(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:8000/${props.isSignUp ? "signup" : "login"}`,
        { email, password }
      );

      setCookie("Email", response.data.email);
      setCookie("AuthToken", response.data.token);
      setCookie("UserId", response.data.userId);

      const success = response.status === 201;

      if (success && props.isSignUp) history.push("/create");
      if (success && !props.isSignUp) history.push("/cards");

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
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
            name="pass"
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
