import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./components/Home"
import Services from "./components/Services"
import OneService from "./views/service/OneService"
import Navbar from "./components/Navbar"
import Payment from "./views/payment/Payment"
import LandingLogin from "./views/login/LandingLogin"
import ContactForm from "./views/contact/ContactForm"
import AllServices from "./views/services/AllServices"
import EditProfile from "./views/edit profile/EditProfile"
import CreateServices from "./views/create service/CreateServices"
import Register from "./views/register/Register"
import AdminLogin from "./views/admin/login/AdminLogin"
import AdminHome from "./views/admin/AdminHome"
import AdminNav from "./views/admin/login/AdminNav"
import AdminUsers from "./views/admin/login/AdminUsers"
import MiServices from "./views/miServices/MiServices"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from "./Redux/actions"


function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const isAdminRoute = location.pathname.startsWith('/admin')
  const isLoginAdmin = location.pathname === '/adminLogin'

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {

      dispatch(signIn({ token }));
    }
  }, [dispatch]);



  return (
    <div className="h-screen flex flex-col">
      {(location.pathname === '/') ? (<Home />) : (
        <>
        {!isLoginAdmin && (isAdminRoute ? <AdminNav /> : <Navbar />)}
        <Routes>
          <Route path='/login' element={<LandingLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path='/allServices/:id' element={<OneService />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path="/allServices" element={<AllServices />} />
          <Route path='/editProfile' element={<EditProfile />} />
          <Route path='/createServices' element={<CreateServices />} />
          <Route path='/register' element={<Register />} />
          <Route path='/miServices' element={<MiServices />} />
        </Routes>
        <Routes>
          <Route path='/adminLogin' index element={<AdminLogin />} />
          <Route path='/adminHome' element={<AdminHome />} />
          <Route path='/adminUsers' element={<AdminUsers />} />
        </Routes>
        </>
      )}
    </div>
  )
}

export default App