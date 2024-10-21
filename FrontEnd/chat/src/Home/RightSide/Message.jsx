import React from 'react'

const Message = ({ msg }) => {
  
  return (
    <div>
     {
      msg.map((item) => {
        return(
          <div className="chat chat-start" key={item._id}>
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