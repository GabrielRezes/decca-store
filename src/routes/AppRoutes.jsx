import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import AdmProducts from '../pages/AdmProducts'

export default function AppRoutes () {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admProducts' element={<AdmProducts/>}/>
      </Routes>
  );
};