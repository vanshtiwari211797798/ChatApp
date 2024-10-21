import React,{useState} from 'react'
import { IoMdSend } from "react-icons/io";



const SendMsg = () => {

    const [message, setSendMsg] = useState('');

    const handleMessage = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className='pt-10 pl-2'>
                <div className='w-[62%] fixed bottom-4'>
                    <label className="input input-bordered flex items-center gap-2 text-black h-12 px-2">
                        <input type="text" className="grow" placeholder="Enter Message" name='message' onChange={(e) => setSendMsg(e.target.value)} value={message}/>
                        <IoMdSend onClick={handleMessage} className='cursor-pointer text-2xl'/>
                    </label>
                </div>

            </div>


        </>
    )
}

export default SendMsg