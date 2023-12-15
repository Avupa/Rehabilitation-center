import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from '../features/Navbar/Navbar';
import Main from '../features/main/Main';
import Profile from '../features/profile/components/myProfile/Profile';
import Price from '../features/price/Price';
import Appointment from '../features/appointment/Appointment';
import Doctors from '../features/doctors/Doctors';
import Services from '../features/services/Services';
import Admin from '../features/admin/AdminPage';
import 'tailwindcss/tailwind.css';
import LoginPage from '../features/auth/LoginPage';
import RegisterPage from '../features/auth/RegisterPage';

import ErrorPage from '../features/404/404';
import { useAppDispatch } from '../store/store';
import { initNoNameUsers } from '../features/noNameUser/noNameUserSlice';
import Help from '../features/help/Help';
import MyDoctors from '../features/profile/components/myDoctors/MyDoctors';
import MyAppointment from '../features/profile/components/myAppointment/MyAppointment';
import ProfileNavbar from '../features/profile/profileNavbar/ProfileNavbar';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initNoNameUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Main />} />
          <Route path="price" element={<Price />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="services" element={<Services />} />
          <Route path="admin" element={<Admin />} />
          <Route path="auth/login" element={<LoginPage />} />
          <Route path="auth/registration" element={<RegisterPage />} />
        </Route>
        <Route path="/" element={<ProfileNavbar />}>
          <Route path="profile" element={<Profile />} />
          <Route path="profile/my/appointment" element={<MyAppointment />} />
          <Route path="profile/my/doctors" element={<MyDoctors />} />
          <Route path="help" element={<Help />} />
        </Route>
          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
