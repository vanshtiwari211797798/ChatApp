import React, { useEffect } from 'react';
import useConversation from '../StateManage/useConversation';

const GetMsg = () => {
    const { setMessages, selectedConversation, messages } = useConversation();
    // console.log("sele", selectedConversation)
    // console.log('Selected user is:', selectedConversation);

    useEffect(() => {
        const getMsg = async () => {
            if (selectedConversation) {
                if(selectedConversation && selectedConversation._id){
                    try {
                        const res = await fetch(`http://localhost:5002/get-message/${selectedConversation._id}`, {
                            method: "GET",
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem('chatuser')}`
                            }
                        });
    
                        if (res.status === 200) {
                            const fMsg = await res.json();
                            setMessages(fMsg.msg); // Set the messages directly
                        }
                    } catch (error) {
                        console.error('Error fetching messages:', error);
                    }
                }
            }
        };

        getMsg();
    }, [selectedConversation, setMessages]);

    return {messages, setMessages}; 
};

export default GetMsg;
