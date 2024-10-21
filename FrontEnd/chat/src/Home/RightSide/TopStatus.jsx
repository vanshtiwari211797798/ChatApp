import React from 'react'
import vansh from '/Images/vansh.jpeg'
import useConversation from '../../StateManage/useConversation'

const TopStatus = () => {
  const {selectedConversation} = useConversation();
  // let Name = selectedConversation.name;
console.log()
  return (
    <>
          <div className='flex space-x-4 px-6 py-5 bg-slate-600 hover:bg-slate-500 duration-300 cursor-pointer '>
            <div className="avatar online">
                <div className="w-14 rounded-full">
                    <img src={vansh} alt='user picture' title='vansh'/>
                </div>
            </div>

            <div>
                <h3 className='font-bold text-2xl'>{selectedConversation ? selectedConversation.name : "Welcome"}</h3>
                <span>Online</span>
            </div>
            
        </div>
       
    </>
  )
}

export default TopStatus