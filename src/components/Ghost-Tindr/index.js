import React from 'react'
import "./styles.scss"

import Header from './Header';
import Browse from './Browse';
import Chat from './Chat';
import Conversations from './Conversations';
import Create from './Create';
import Edit from './Edit';
import Footer from './Footer';
import Login from './Login';
import Matched from './Matched'
import ViewProfile from './ViewProfile'

export default function Tinder(props) {

  return (
    <container className="tindr">
    <Header />
    <ViewProfile />
    <Footer />
    </container>
  );
}