import { Box, CssBaseline } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from "./Components/Navbar"
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import Auth from "./Pages/Auth"
import AboutUs from "./Pages/AboutUs"
import Menu from "./Pages/Menu"
import NotFound from "./Pages/NotFound"
import Profile from "./Pages/Profile"
import CartBox from "./Pages/CartBox"
export default function App() {
  const { token } = useSelector((state) => state.auth);
  return (
<Box
  sx={{
    position: "fixed",
    height: "100vh",
    width:"100%",
    backgroundImage: 'url("/slide2.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center"
    }}>
      <CssBaseline/>
      <Navbar/>
      <Box>
        <Routes>
          <Route exact path='/' element={< Home />} />
          <Route path='/auth' element={< Auth />} />
          <Route path='/menu' element={< Menu />} />
          <Route path='/about-us' element={< AboutUs />} />
          <Route path='*' element={< NotFound />} />
          {/* <Route path='/' element={< Order />} /> */}
          <Route path='/profile' element={token ? < Profile /> : <Navigate to={"/auth"} />} />
          <Route path='/cart-box' element={ token ? < CartBox /> : <Navigate to={"/auth"}/>} />
        </Routes>
      </Box>
    </Box>
  )
}
