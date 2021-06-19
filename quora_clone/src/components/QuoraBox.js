import React from "react";
import "./QuoraBox.css";
import { Avatar } from "@material-ui/core";

export default function QuoraBox() {
  return (
    <div className="quorabox">
      <div className="quorabox_info">
        <Avatar />
        <h5>Username</h5>
      </div>
      <div className="quorabox_quora">
        <p>What is Your Question?</p>
      </div>
    </div>
  );
}
