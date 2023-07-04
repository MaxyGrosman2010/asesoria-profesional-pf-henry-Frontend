import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const AdminHome = () => {

  const users = useSelector((state) => state.users)


  return (
    <div className="bg-slate-300 w-full h-screen p-20">
     <div className='container w-full mx-auto flex items-center justify-center shadow-lg'>

      <table className='bg-slate-100 w-full'>

        <thead className=''>
          <tr className=''>
            <th className='border border-gray-400 h-auto w-auto py-4'>Profile</th>
            <th className='border border-gray-400 h-auto w-auto py-4'>Name</th>
            <th className='border border-gray-400 h-auto w-auto py-4'>Email</th>
            <th className='border border-gray-400 h-auto w-auto py-4'>Services</th>
            <th className='border border-gray-400 h-auto w-auto py-4'>Phone</th>
            <th className='border border-gray-400 h-auto w-auto py-4'>Status</th>
          </tr>
        </thead>

          <tbody className='w-full'>
          {users.map((user) => (
            <tr className='hover:bg-slate-300'>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'><span class="material-symbols-outlined">account_circle</span></td>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>{user.name}</td>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>{user.email}</td>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>{user.services}</td>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>{'123456'}</td>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>
                <select className='flex items-center justify-center py-2 mx-auto bg-slate-200 rounded w-full text-center cursor-pointer'>
                  <option>user blocked</option>
                  <option>user Unblocked</option>
                </select>
              </td>
            </tr>
          ) )}
          </tbody>
      </table>

     </div>
    </div>
  )
}

export default AdminHome