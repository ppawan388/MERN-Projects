import React from "react";
import "../components/Navbar.css";
import {Home,FeaturedPlayListOutlined,AssignmentTurnedInOutlined,PeopleAltOutlined,NotificationsOutlined,Search,Language} from '@material-ui/icons';
import {Avatar,Button} from '@material-ui/core';
export default function Navbar() {
  return (
    <div className="qheader">
      <div className="qheader_logo">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.J3rIP_P7H9fWytIXZLyrJQHaCD%26pid%3DApi%26h%3D160&f=1"
          alt=""
        />
      </div>
      <div className="qheader_icons">
        <div className="qheader_icon">
           <Home/>
        </div>
        <div className="qheader_icon">
           <FeaturedPlayListOutlined/>
        </div>
        <div className="qheader_icon">
            <AssignmentTurnedInOutlined />
        </div>
        <div className="qheader_icon">
           <PeopleAltOutlined />
        </div>
        <div className="qheader_icon">
           <NotificationsOutlined />
        </div>
        <div className="qheader_input">
           <Search />
        <input type = "text" placeholder ="Search Quora"></input>
        </div>
        <div className="qheader_rem">
          <div className="qheader_avatar">
              <Avatar />
          </div>
          <Language />
         <div className="qheader_rem">
         <Button>Add Question</Button>
         </div>
         

        </div>
      </div>

    </div>
  );
}
