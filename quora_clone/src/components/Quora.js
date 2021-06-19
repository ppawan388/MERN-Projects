import React from "react";
import "../components/Quora.css";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
function Quora() {
  return (
    <div className="Quora">
      <Navbar />
      <div className="qcontent">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default Quora;
