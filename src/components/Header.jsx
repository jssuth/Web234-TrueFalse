import React from "react";
import reactLogo from "../assets/react-logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="title">
        <img src={reactLogo} alt="React Logo" className="logo-inline" />
        The Reactor Learning Generator
      </h1>
     
      <h3 className="subtitle">For those who want to learn React</h3>
    </header>
  );
}
