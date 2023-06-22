import { NavLink, useLocation } from 'react-router-dom';
import bgd from '../assets/background.jpg';

const Hero = () => {

  return (
    <div className="h-screen w-full flex items-center justify-center bg-center bg-cover gap-2 flex-col" style={{backgroundImage:`url(${bgd})`}}>
           <p className="text-6xl font-bold text-amber-400">Servicios de asesoria comercial</p>
           <NavLink to='/login' className='bg-gray-200 w-[100px] text-center uppercase py-2 rounded'>Login</NavLink>
    </div>
  )
}

export default Hero