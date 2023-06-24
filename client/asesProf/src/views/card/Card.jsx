import profile from '../../assets/bgcard.jpg'
import { NavLink } from 'react-router-dom'

const Card = ({user}) => {

  return (
    <div className='flex flex-col items-center justify-center rounded h-[300px]'  style={{ backgroundImage: `url(${profile})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <p className='font-bold uppercase text-white'>{user.name}</p>
        <div>
          <p className='text-white'>${user.price}</p>
        </div>
        <NavLink to='/allServices/:id' className='bg-slate-100 text-slate-950 uppercase w-[150px] py-2 mt-2 text-center shadow-lg rounded hover:bg-slate-900 hover:text-white cursor-pointer'>more</NavLink>
 
    </div>
  )
}

export default Card