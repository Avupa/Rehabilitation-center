import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'tailwindcss/tailwind.css';
import Navbar from '../features/Navbar/Navbar';
import Main from '../features/main/components/Main';
import Profile from '../features/profile/components/myProfile/Profile';
import Price from '../features/price/Price';
import Appointment from '../features/appointment/Appointment';
import Doctors from '../features/doctors/Doctors';
import Procedure from '../features/procedure/Procedure';
import Admin from '../features/admin/AdminPage';
import LoginPage from '../features/auth/LoginPage';
import RegisterPage from '../features/auth/RegisterPage';
import MyDoctors from '../features/profile/components/myDoctors/MyDoctors';
import MyAppointment from '../features/profile/components/myAppointment/MyAppointment';
import ProfileNavbar from '../features/profile/profileNavbar/ProfileNavbar';
import Help from '../features/help/Help';
import Check from '../features/profile/Check';

import ErrorPage from '../features/404/404';
import { useAppDispatch } from '../store/store';
import { initNoNameUsers } from '../features/noNameUser/noNameUserSlice';
import { initDoctors } from '../features/doctors/doctorSlice';
import { initProcedures } from '../features/procedure/redux/procedureSlice';

import { check } from '../features/auth/authSlice';
import type { User } from '../features/User/userType';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(initNoNameUsers());
    void dispatch(initProcedures());
    void dispatch(initDoctors());
    void dispatch(check());
  }, [dispatch]);

  useEffect(() => {
    fetch('/api/auth/check')
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'success') {
          const userData: User = data.user;
          dispatch({ type: 'user/login', payload: userData });
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="check" element={<Check />} />
        <Route path="/" element={<Navbar />}>
          <Route index element={<Main />} />
          <Route path="price" element={<Price />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="procedure" element={<Procedure />} />
          <Route path="admin" element={<Admin />} />
          <Route path="auth/sign-in" element={<LoginPage />} />
          <Route path="auth/sugn-up" element={<RegisterPage />} />
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
