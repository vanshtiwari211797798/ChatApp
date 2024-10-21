import React from 'react'
import Search from './Search'
import Users from './Users'

const Left = () => {
  return (
    <div className="w-[30%] h-screen bg-black text-white">
      <h1 className='text-3xl py-3 px-4'>Tech-Chat</h1>
      <Search />
      <hr />
      <Users />
    </div>
  )
}

export default Left