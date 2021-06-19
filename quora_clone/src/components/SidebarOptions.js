import React from 'react'
import './SidebarOptions.css'
import {Add} from '@material-ui/icons';

 function SidebarOptions() {
    return (
        <div className="SidebarOptions">
            <div className="SidebarOption">
                <img
                  src ="https://images.unsplash.com/photo-1515325595179-59cd5262ca53?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGlzdG9yeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt =""
                  />
                <p>History</p>
            </div>
            <div className="SidebarOption">
                <img
                  src ="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt =""
                  />
                <p>Technology</p>
            </div>
            <div className="SidebarOption">
                <img
                  src ="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNjaWVuY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt =""
                  />
                <p>Science</p>
            </div>
            <div className="SidebarOption">
                <img
                  src ="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt =""
                  />
                <p>Music</p>
            </div>
            <div className="SidebarOption">
                <img
                  src = "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt =""
                  />
                <p>Movies</p>
            </div>
            <div className="SidebarOption">
                <Add />
                <p>More</p>
            </div>
        </div>
    )
}

export default SidebarOptions;