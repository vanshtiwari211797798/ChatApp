import React, {useState, useEffect} from 'react'
import User from './User'



const Users = () => {

  const [getAllUser, setAllUser] = useState([]);

  const getUser = async () => {
    try {
      const res = await fetch(`http://localhost:5002/get-all-user`, {
        method:"GET",
        headers:{
          'Content-Type':'application/json',
          Authorization:`Bearer ${localStorage.getItem('chatuser')}`
        }
      })

      if(res.status === 200){
        const finalUser = await res.json();
        setAllUser(finalUser.user);
      }
    } catch (error) {
      console.error('error from get all user', error);
    }
  }


  useEffect(() => {
    getUser();
  }, [])


  return (
    <>
      <div style={{ maxHeight: "calc(82vh)" }} className='overflow-y-auto'>
        {
          getAllUser.map((item, index) => {
            return (<User key={index} users={item}/>)
          })
        }


      </div>

    </>

  )
}

export default Users