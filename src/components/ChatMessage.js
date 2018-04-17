import React, { Component} from 'react'
import '../styles/ChatMessage.css'
import {timeDifference} from '../utils'
import localStorage from 'localStorage'

class ChatMessage extends Component {

  render() {

    const sentMessage = localStorage.getItem("CHAT_USER_NAME")
    const createdAtTimestamp = new Date(this.props.time).getTime()
    const nowTimestamp = new Date().getTime()
    const ago = timeDifference(nowTimestamp, createdAtTimestamp)

    console.log("sentMessage", sentMessage);

    return (
      <div className='ChatMessage'>
        <div className='MessageHeader'>
          <div className='Username'>{this.props.username}</div>
          <div className='Time'>({ago})</div>
        </div>
        <div className={
          sentMessage == this.props.username ? "Message sent_message" : "Message tes"
        }>{this.props.message}</div>
      </div>
    )
  }

}

export default ChatMessage
