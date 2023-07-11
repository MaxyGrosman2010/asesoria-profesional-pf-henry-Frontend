import { NavLink } from "react-router-dom"

const AdminNav = () => {
  return (
    <div className="w-full bg-slate-400 p-10 h-[80-px] border flex items-center justify-center text-white">
        <ul className="flex items-center justify-between w-1/2">
            <NavLink to='/adminHome' className="cursor-pointer bg-slate-700 w-[180px] text-center py-2 rounded hover:bg-slate-800">Home</NavLink>
            <NavLink to='/adminUsers' className="cursor-pointer bg-slate-700 w-[180px] text-center py-2 rounded hover:bg-slate-800 flex items-center justify-center gap-2">
              <span class="material-symbols-outlined">badge</span>
              <span>admins</span>
            </NavLink>
            <NavLink to='/adminServices' className="cursor-pointer bg-slate-700 w-[180px] text-center py-2 rounded hover:bg-slate-800 flex items-center justify-center gap-2">All Servicies</NavLink>
            <NavLink to='/adminLogin' className="cursor-pointer bg-slate-700 w-[180px] text-center py-2 rounded hover:bg-slate-800 flex items-center justify-center gap-2">
              <span class="material-symbols-outlined">face</span>
              <span>Logout</span>
            </NavLink>
        </ul>
    </div>
  )
}

export default AdminNav