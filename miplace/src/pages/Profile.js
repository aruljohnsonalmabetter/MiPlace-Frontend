import React from 'react'
import Button from '../components/Button'
import { useNavigate  } from 'react-router-dom';
// import {  useSelector } from "react-redux";


export const Profile = ( ) => {

  // const userName = useSelector((state) => state.user.userName);
  

  const navigate = useNavigate();

    const handleclick = () =>{
      navigate("/home");
    }
   


  return (
    <div className='flex mx-auto my-auto justify-center w-[27.875rem] h-[21.5625rem] border-4 border-blue-600'>
        
      <div>
        <div className=''>
        <img class="inline-block mt-4 h-[8rem] w-[8rem] rounded-full ring-2 ring-black" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
        </div>
        <div>
            
            <h3>email</h3>

            <Button
             onClick={handleclick}
             text="Home"
            />
            
        
        </div>
        </div>
    </div>
  )
}
