import { NavLink } from "react-router-dom"

const AdminNav = () => {
  return (
    <div className="w-full bg-slate-400 p-10 h-[80-px] border flex items-center justify-center">
        <ul className="flex items-center justify-between w-1/2">
            <NavLink to='/adminHome' className="cursor-pointer">home</NavLink>
            <NavLink to='adminUsers' className="cursor-pointer">users</NavLink>
            <NavLink to='/adminLogin' className="cursor-pointer">logout</NavLink>
        </ul>
    </div>
  )
}

export default AdminNav