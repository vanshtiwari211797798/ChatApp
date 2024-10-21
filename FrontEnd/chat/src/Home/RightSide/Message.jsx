import React from 'react'

const Message = ({ msg }) => {
  // console.log(msg)

  return (
    <div>
     {
      msg.map((item) => {
        return(
          <div className={`chat ${localStorage.getItem('id') == item.sender ? 'chat-end' : 'chat-start'}`} key={item._id}>
          <div className="chat-bubble chat-bubble-accent mx-2">
            {item.message}
          </div>
        </div>
        )
      })
     }
    </div>
  )
}

export default Message