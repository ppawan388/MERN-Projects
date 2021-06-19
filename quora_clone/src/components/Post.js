import React from 'react'
import './Post.css'
import {Avatar} from '@material-ui/core';
import {ArrowUpwardOutlined,
    ArrowDownwardOutlined,
    ShareOutlined,
    MoreHorizOutlined,
    ChatBubbleOutlineOutlined,
    RepeatOutlined} from '@material-ui/icons';

function Post() {
    return (
        <div className="post">
            <div className="post_info">
                <Avatar/>
                <h5>Username</h5>
                <small>Timestamp</small>
            </div>
            <div className="post_body">
                <div className="post_question">
                    <p>Question</p>
                    <button className="post_btn_answer">Answer</button>
 
                </div>
                <div className="post_answer">
                    <p></p>
                        <img src ="https://images.unsplash.com/photo-1623428454614-abaf00244e52?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8eGpQUjRobGtCR0F8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                    

                </div>
                <div className="post_footer">
                    <div className="post_footerAction">
                        <ArrowUpwardOutlined />
                        <ArrowDownwardOutlined />
                    </div>
                       <RepeatOutlined />
                     <ChatBubbleOutlineOutlined />

                      <div className="post_footer_left">
                          <ShareOutlined />
                          <MoreHorizOutlined />

                      </div>
                </div>
            </div>
        </div>
    )
}

export default Post; 