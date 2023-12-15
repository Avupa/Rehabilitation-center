import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from '../features/Navbar/Navbar';
import Main from '../features/main/Main';
import Profile from '../features/profile/Profile';
import Price from '../features/price/Price';
import Appointment from '../features/appointment/Appointment';
import Doctors from '../features/doctors/Doctors';
import Services from '../features/services/Services';
import Admin from '../features/admin/AdminPage';
import 'tailwindcss/tailwind.css';
import { useAppDispatch } from '../store/store';
import { initNoNameUsers } from '../features/noNameUser/noNameUserSlice';
import { initDoctors } from '../features/doctors/doctorSlice';



function App(): JSX.Element {
  const dispatch=useAppDispatch()
  useEffect(()=>{
    dispatch (initNoNameUsers())
    dispatch (initDoctors())
    },[dispatch])
    
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/price" element={<Price />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/services" element={<Services />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
