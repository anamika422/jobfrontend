import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Signup from './pages/student/Signup'
import Login from './pages/student/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/student/Home'
import CompanyDashboard from './pages/company/CompanyDashboard'
import CompanySignup from './pages/company/CompanySignup'
import LandingPage from './pages/LandingPage'
import PNF from './pages/PNF'
import { useSelector } from 'react-redux'
import Navbarr from './components/Navbarr'
import CreateJob from './pages/company/CreateJob'
import AllcompanyJob from './pages/company/AllcompanyJob'
import ApplyJob from './pages/student/ApplyJob'
function App() {
  let userStore= useSelector((state)=>state.user);
  console.log(userStore)
  let login=userStore.login;
  let role= userStore.role;

  return (
    <>                       
      
      <BrowserRouter>
      {login===true && <Navbarr/>}
      <Routes>
        <Route path='/' element={login===true && role==='student'?<Home/>:<Navigate to ={'/landingpage'}/>}/>
        <Route path='/landingpage' element={login===false ? <LandingPage/>: login===true && role==='student'?<Navigate to='/'/>:<Navigate to={'/companydashboard'}/>}/>
        <Route path='/login' element={login===false ? <Login/>: role==='company'?<Navigate to='/companydashboard'/>:<Navigate to ={'/'}/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/companysignup' element={<CompanySignup/>}/>
        <Route path='/companydashboard' element={login===true && role==='company' ? <CompanyDashboard/>: <Navigate to='/login'/> }/>
        <Route path='/companydashboard/createjob' element={<CreateJob/>}/>
        <Route path='/companydashboard/alljob' element={<AllcompanyJob/>}/>
        <Route path='/applyjob' element={<ApplyJob/>}/>
       
       <Route path='/*' element={<PNF/>}/>
        
      </Routes>
      <ToastContainer/>
      </BrowserRouter>
    </>
  )
}

export default App
