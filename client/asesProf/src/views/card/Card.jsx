import messi from '../../assets/messi.png'
import { NavLink } from 'react-router-dom'

const Card = ({user}) => {

  return (
    <div className='flex flex-col items-center justify-center h-full'>
        <img className='rounded-full w-[30%]' src={messi} />
        <p className="text-2xl font-bold tracking-wide">{user.name}</p>
        <NavLink to='/allServices/:id' className='bg-gray-500 text-white uppercase w-[150px] py-2 mt-2 text-center shadow-lg rounded hover:bg-gray-600 cursor-pointer'>more</NavLink>
    </div>
  )
}

export default Card