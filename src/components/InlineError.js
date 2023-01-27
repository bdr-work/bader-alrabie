import React from "react";
import { BiError } from "react-icons/bi";
import "./InlineError.css";
const InlineError = ({ error }) => {
  return (
    <div className="main">
      <p className="error p-text">{error}</p>
      <BiError />
    </div>
  );
};

export default InlineError;
