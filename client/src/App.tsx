import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Chat from './pages/Chat'
import { io } from "socket.io-client";
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

import "./styles/global.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
export const socket = io("http://localhost:8000")

function App() {
  const user = useSelector((state: RootState) => state.User.user);
  useEffect(() => {
    socket.emit('userOnline', user?._id)
  }, [user])
  
  return (
    <div className='main' style={{padding:10}}>
    <Navbar/>
    {/* <Menu/> */}
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="/login-account" />
      <Route element={<Chat />} path="/chat" />
      <Route element={<Register />} path="/register-account" />
      <Route element={<NotFound />} path="/*" />
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
