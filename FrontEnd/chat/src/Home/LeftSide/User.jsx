import React from 'react';
import vansh from '/Images/vansh.jpeg'; // Ensure this path is correct
import useConversation from '../../StateManage/useConversation';
import GetMsg from '../../GetMsg/GetMsg';


const User = ({ users }) => {
    const { setselectedConversation } = useConversation();
    const { setMessages} = GetMsg();

  // User.js
const handleUserClick = () => {
    setselectedConversation(users);
    setMessages('');
  
};

    return (
        <div
            className="flex space-x-4 px-6 py-5 hover:bg-slate-500 duration-300 cursor-pointer"
            onClick={handleUserClick}
            key={users._id} // Ensure this is unique
        >
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img src={vansh} alt={`${users.name}'s avatar`} title={users.name} />
                </div>
            </div>
            <div>
                <h3 className="font-bold">{users.name}</h3>
                <span>{users.email}</span>
            </div>
        </div>
    );
};

export default User;
