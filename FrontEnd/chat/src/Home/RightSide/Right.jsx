import React from 'react'
import TopStatus from './TopStatus'
import Messages from './Messages'
import SendMsg from './SendMsg'



const Right = () => {

 
  return (
    <div className='w-[70%] h-screen bg-slate-950 text-white'>
      <TopStatus />
      <Messages />
      <SendMsg />

    </div>
  )
}

export default Right