import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
export default function Notime() {
  return (
    <div className="messagecard">
      <h1>Well come</h1>
      <h3>Your class is start at 7PM for parctice choose quiz option</h3>
      <Link to="/">
        <p>Back to Home</p>
      </Link>
    </div>
  );
}
