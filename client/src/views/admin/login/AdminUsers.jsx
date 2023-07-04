import { NavLink } from "react-router-dom"

const AdminUsers = () => {
  return (
    <div className="bg-slate-300 w-full h-screen p-20 flex flex-col items-center justify-center gap-5">
      <div className='container w-full mx-auto flex items-center justify-center shadow-lg'>
        <table className='bg-slate-100 w-full'>
          <thead className=''>
            <tr className=''>
              <th className='border border-gray-400 h-auto w-auto py-4'>Profile</th>
              <th className='border border-gray-400 h-auto w-auto py-4'>Name</th>
              <th className='border border-gray-400 h-auto w-auto py-4'>isAdmin</th>
            </tr>
          </thead>
          <tbody className='w-full'>
            <tr>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'><span class="material-symbols-outlined">account_circle</span></td>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto cursor-pointer text-center hover:bg-slate-600 hover:text-white'>
                <NavLink to='/adminUsers'>{'Martin'}</NavLink>
              </td>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>
                <select className='flex items-center justify-center py-2 mx-auto bg-slate-200 rounded w-full text-center'>
                  <option>no</option>
                  <option>yes</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'><span class="material-symbols-outlined">account_circle</span></td>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto cursor-pointer text-center hover:bg-slate-600 hover:text-white'>
                <NavLink to='/adminUsers'>{'Freddy'}</NavLink>
              </td>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>
                <select className='flex items-center justify-center py-2 mx-auto bg-slate-200 rounded w-full text-center'>
                  <option>no</option>
                  <option>yes</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'><span class="material-symbols-outlined">account_circle</span></td>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto cursor-pointer text-center hover:bg-slate-600 hover:text-white'>
                <NavLink to='/adminUsers'>{'Francisco'}</NavLink>
              </td>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>
                <select className='flex items-center justify-center py-2 mx-auto bg-slate-200 rounded w-full text-center'>
                  <option>no</option>
                  <option>yes</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'><span class="material-symbols-outlined">account_circle</span></td>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto cursor-pointer text-center hover:bg-slate-600 hover:text-white'>
                <NavLink to='/adminUsers'>{'Federico'}</NavLink>
              </td>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>
                <select className='flex items-center justify-center py-2 mx-auto bg-slate-200 rounded w-full text-center'>
                  <option>no</option>
                  <option>yes</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'><span class="material-symbols-outlined">account_circle</span></td>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto cursor-pointer text-center hover:bg-slate-600 hover:text-white'>
                <NavLink to='/adminUsers'>{'Maximiliano'}</NavLink>
              </td>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>
                <select className='flex items-center justify-center py-2 mx-auto bg-slate-200 rounded w-full text-center'>
                  <option>no</option>
                  <option>yes</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'><span class="material-symbols-outlined">account_circle</span></td>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto cursor-pointer text-center hover:bg-slate-600 hover:text-white'>
                <NavLink to='/adminUsers'>{'Santiago'}</NavLink>
              </td>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>
                <select className='flex items-center justify-center py-2 mx-auto bg-slate-200 rounded w-full text-center'>
                  <option>no</option>
                  <option>yes</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'><span class="material-symbols-outlined">account_circle</span></td>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto cursor-pointer text-center hover:bg-slate-600 hover:text-white'>
                <NavLink to='/adminUsers'>{'Franco'}</NavLink>
              </td>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>
                <select className='flex items-center justify-center py-2 mx-auto bg-slate-200 rounded w-full text-center'>
                  <option>no</option>
                  <option>yes</option>
                </select>
              </td>
            </tr>
          </tbody>
      </table>
    </div>
    </div>
  )
}

export default AdminUsers