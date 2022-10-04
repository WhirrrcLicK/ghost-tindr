import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function AuthModal(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  let history = useHistory();

  console.log(email, password);
  const handleClick = () => {
    props.setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8000/${props.isSignUp ? 'signup' : 'login'}`, { email, password })
     
      setCookie('Email', response.data.email);
      setCookie('UserId', response.data.userId);
      setCookie('AuthToken', response.data.token);

      const success = response.status === 201;


      if(success && props.isSignUp) history.push('/create');
      if(success && !props.isSignUp) history.push('/cards');

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="auth-modal">
      <div className="close-icon" onClick={handleClick}>
        ⓧ
      </div>
      <h2>{props.isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
      <form onSubmit={handleSubmit}>
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
        <input className="secondary-button" type="submit" />
      </form>
    </div>
  );
}
