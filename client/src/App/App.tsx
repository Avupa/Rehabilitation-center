import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../features/Navbar/Navbar';
import Main from '../features/main/Main';
import './App.css';
import 'tailwindcss/tailwind.css';

function App(): JSX.Element {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initAnimals());
  // }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
