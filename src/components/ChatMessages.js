import React, { Component} from 'react'
import '../styles/ChatMessages.css'
import ChatMessage from './ChatMessage'

class ChatMessages extends Component {

  render() {
    console.log()
    return (
      <div className='ChatMessages'>
        {this.props.messages.map((message, i) => {
          return (<ChatMessage
            key={i}
            message={message.text}
            username={message.sentBy ? message.sentBy.name : 'Anonymous'}
            time={message.createdAt}
          />)
        })}
        <div style={ {float:"left", clear: "both"} }
             ref={el => { this.props.endRef(el) }}></div>
      </div>
    )
  }

}

export default ChatMessages
