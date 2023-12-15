import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from '../features/Navbar/Navbar';
import Main from '../features/main/Main';
import Profile from '../features/profile/components/profile/Profile';
import Price from '../features/price/Price';
import Appointment from '../features/appointment/Appointment';
import Doctors from '../features/doctors/Doctors';
import Services from '../features/services/Services';
import 'tailwindcss/tailwind.css';
import ErrorPage from '../features/404/404';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Main />} />
          <Route path="price" element={<Price />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="services" element={<Services />} />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
