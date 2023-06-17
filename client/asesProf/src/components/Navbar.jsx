import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-center gap-4">
        <div className="">
            <img alt='logo' />
        </div>
        <ul className="flex items-center justify-center gap-4">
            <Link to='/home'>home</Link>
            <Link to='/services'>services</Link>
            <Link to='/contact'>contact</Link>
            <ul className='flex gap-4 flex-col'>
              <li>Welcome user</li>
              <Link to='/createServices'>create service</Link>
              <Link to='/editProfile'>edit profile</Link>
              <Link to='/'>logout</Link>
            </ul>
        </ul>
    </div>
  )
}

export default Navbar