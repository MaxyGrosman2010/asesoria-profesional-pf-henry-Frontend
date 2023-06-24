import { Route, Routes, createBrowserRouter, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import Home from "./components/Home"
import Services from "./components/Services"
import OneService from "./views/service/OneService"
import Navbar from "./components/Navbar"
import Payment from "./views/Payment"
import LandingLogin from "./views/login/LandingLogin"
import ContactForm from "./views/contact/ContactForm"
import AllServices from "./views/services/AllServices"
import ConfirmPayment from "./views/ConfirmPayment"
import EditProfile from "./views/edit profile/EditProfile"
import CreateServices from "./views/create service/CreateServices"
import Register from "./views/register/Register"



function App() {

  const location = useLocation();

  return (
    <div className="h-screen flex flex-col">
      {(location.pathname === '/')
      ? (<Home />
      ) : (
        <>
        {location.pathname !== '/register' && <Navbar />}
        <Routes>
          <Route path='/login' element={<LandingLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path='/allServices/:id' element={<OneService />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path="/allServices" element={<AllServices />} />
          <Route path='/confirmPay' element={<ConfirmPayment />} />
          <Route path='/editProfile' element={<EditProfile />} />
          <Route path='/createServices' element={<CreateServices />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        </>
      )}
    </div>
  )
}

export default App
