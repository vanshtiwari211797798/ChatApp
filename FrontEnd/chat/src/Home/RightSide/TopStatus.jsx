import React from 'react'
import vansh from '/Images/vansh.jpeg'


const TopStatus = () => {
  return (
    <>
          <div className='flex space-x-4 px-6 py-5 bg-slate-600 hover:bg-slate-500 duration-300 cursor-pointer '>
            <div className="avatar online">
                <div className="w-14 rounded-full">
                    <img src={vansh} alt='user picture' title='vansh'/>
                </div>
            </div>

            <div>
                <h3 className='font-bold text-2xl'>Vansh</h3>
                <span>Online</span>
            </div>
            
        </div>
       
    </>
  )
}

export default TopStatus