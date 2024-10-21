import React from 'react';
import Message from './Message';
// import useConversation from '../../StateManage/useConversation';
import GetMsg from '../../GetMsg/GetMsg';

const Messages = () => {
  const { messages } = GetMsg();
  // console.log('msg is',messages)
  return (
    <div style={{ maxHeight: "calc(75vh)", overflow: "auto" }}>
      {messages.length > 0 ? <Message msg={messages}/> : <h2 className='text-center text-2xl pt-4 font-bold'>Say Hii to Start Conversation</h2>}
    </div>
  );

}

export default Messages;
