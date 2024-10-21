import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Signup = () => {

    const navigate = useNavigate();

    const [signup, setSignup] = useState({
        name:"",
        phone:"",
        email:"",
        password:""
    });


    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        setSignup({
            ...signup,
            [name]:value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:5002/signup`, {
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(signup)
            })

            if(res.status === 201){
                toast.success("Register Successfully");
                setSignup({name:"",phone:"",email:"",password:""})
                navigate('/signin')
            }else if(res.status === 400){
                toast.error("All field is required")
            }else if(res.status === 500){
                toast.error("Internal Server Error");
                setSignup({name:"",phone:"",email:"",password:""})
            }else if(res.status === 409){
                toast.info("User allready Registered, please login")
                setSignup({name:"",phone:"",email:"",password:""})
                navigate('/signin')
            }else{
                toast.error("Invalid Creadential");
                setSignup({name:"",phone:"",email:"",password:""})
            }
        } catch (error) {
            console.error('error from signup user', error);
        }
    }


  return (
    <div className='h-screen flex justify-center items-center'>
        <form className="h-[400px] w-[400px] border-2 border-gray-950 px-4 py-4 flex flex-col items-center rounded" onSubmit={handleSubmit}>
            <h3 className="text-blue-800 text-3xl text-left  font-semibold underline">Create your Account</h3>
            <input type="text" className="border-2 block border-black px-2 mt-6 mb-2 rounded h-[43px] w-[100%]" placeholder='Enter Name'  name='name' value={signup.name} onChange={handleChange}/>
            <input type="number" className="border-2 block border-black px-2 mt-4 mb-2 rounded h-[43px] w-[100%]" placeholder='Enter Phone' name='phone' value={signup.phone} onChange={handleChange}/>
            <input type="email" className="border-2 block border-black px-2 mt-4 mb-2 rounded h-[43px] w-[100%]" placeholder='Enter Email' name='email' value={signup.email} onChange={handleChange}/>
            <input type="password" className="border-2 block border-black px-2 mt-4 mb-2 roundeds h-[43px] w-[100%]" placeholder='Enter Password' name='password' value={signup.password} onChange={handleChange}/>
            <button className='border-2 w-[100px] h-[40px] rounded text-white bg-slate-950 text-1xl'>Signup</button>
            <Link to={'/signin'} className='hover:text-red-800 duration-200'>Have an account ? Signin</Link>
        </form>
    </div>
  )
}

export default Signup