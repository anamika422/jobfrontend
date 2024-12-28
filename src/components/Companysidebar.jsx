import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../store/UserSlice'

const CompanySidebar = () => {
  const navigate= useNavigate()
  let dispatch = useDispatch()
  const handleLogout=()=>{

    dispatch(logOut())
   navigate('/landingpage')
  }
  
  return (
    <div className='fixed left-0 top-[63px] w-64 h-full bg-gray-900 text-white p-4'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Company Portal</h2>
      
      <ul className='space-y-4'>
        <li className='bg-green-700 rounded-sm px-4 py-2 hover:bg-green-950'>
          <Link to="/companydashboard" className='block'>Dashboard</Link>
        </li>
        <li className='bg-green-700 rounded-sm px-4 py-2 hover:bg-green-950'>
          <Link to="/companydashboard/createjob" className='block'>Post a Job</Link>
        </li>
        <li className='bg-green-700 rounded-sm px-4 py-2 hover:bg-green-950'>
          <Link to="/companydashboard/alljob" className='block'>Manage Jobs</Link>
        </li>
        <li className='bg-green-700 rounded-sm px-4 py-2 hover:bg-green-950'>
          <Link to="/company/profile" className='block'>Company Profile</Link>
        </li>
        <li className='bg-red-600 rounded-sm px-4 py-2 hover:bg-red-800'>
        <button onClick={handleLogout} className=''>
            Logout 
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CompanySidebar;
