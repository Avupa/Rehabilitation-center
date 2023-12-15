import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from '../features/Navbar/Navbar';
import Main from '../features/main/Main';
import Profile from '../features/profile/Profile';
import Price from '../features/price/Price';
import Appointment from '../features/appointment/Appointment';
import Doctors from '../features/doctors/Doctors';
import Services from '../features/services/Services';
import 'tailwindcss/tailwind.css';
import LoginPage from '../features/auth/LoginPage';
import RegisterPage from '../features/auth/RegisterPage';

function App(): JSX.Element {
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
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/registration" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
