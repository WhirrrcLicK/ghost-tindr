import React from 'react'
import TinderCards from './TinderCards';
import Header from "./Header";
import Footer from "./Footer";
import "./browse.scss"


export default function Browse(props) {

  return (
    <div className="browse">
    <Header />
     <TinderCards />
     <Footer />
    </div>
  );
}