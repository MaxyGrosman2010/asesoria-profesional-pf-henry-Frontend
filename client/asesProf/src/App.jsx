import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./components/Home"
import Services from "./components/Services"
import OneService from "./views/OneService"
import Navbar from "./components/Navbar"
import Payment from "./views/Payment"
import LandingLogin from "./views/LandingLogin"
import ContactForm from "./views/ContactForm"
import AllServices from "./views/AllServices"
import ConfirmPayment from "./views/ConfirmPayment"
import EditProfile from "./views/EditProfile"
import CreateServices from "./views/CreateServices"

function App() {

  const location = useLocation();

  return (
    <div className="bg-slate-300 h-screen">
      {(location.pathname === '/')
      ? (<LandingLogin />
      ) : (
        <>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path='/allServices/:id' element={<OneService/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/contact' element={<ContactForm/>}/>
          <Route path="/allServices" element={<AllServices/>}/>
          <Route path='/confirmPay' element={<ConfirmPayment/>}/>
          <Route path='/editProfile' element={<EditProfile/>}/>
          <Route path='/createServices' element={<CreateServices/>}/>
        </Routes>
        </>
      )}
    </div>
  )
}

export default App
