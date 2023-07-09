import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../Redux/actions'
import { useEffect, useState } from 'react'

const AdminHome = () => {

  const [selectedUser, setSelectedUser] = useState([])


  const dispatch = useDispatch()
  const users = useSelector((state) => state.allUsers)
  console.log(users);

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  const colors = {
    green: 'green',
    red: 'red'
  }


  const handleLogicalDelete = (userId, value) => {
    setSelectedUser(prevState => ({...prevState,[userId]: value}))
  }

  return (
    <div className="bg-slate-300 w-full h-screen p-20">
     <div className='container w-full mx-auto flex items-center justify-center shadow-lg'>

      <table className='bg-slate-100 w-full'>

        <thead className='w-full'>
          <tr className='w-full'>
            <th className='border border-gray-400 h-auto w-auto py-4'>Profile</th>
            <th className='border border-gray-400 h-auto w-auto py-4'>Name</th>
            <th className='border border-gray-400 h-auto w-auto py-4'>Email</th>
            <th className='border border-gray-400 h-auto w-auto py-4'>Services</th>
            <th className='border border-gray-400 h-auto w-auto py-4'>Logical deletion</th>
          </tr>
        </thead>

          <tbody className='w-full'>
            {users.map((user) => (
              <tr className='hover:bg-slate-300'>
              <div className='flex items-center justify-center'>
                  <img className='my-2 w-[50px] h-[50px] mx-auto text-center rounded-full' src={user.profilePict} />
              </div>
                  <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>{user.name}</td>
                  <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>{user.email}</td>
                  <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>{user.cantService}</td>
                  <td className='flex items-center justify-center h-[80px]' style={{color: user.isDeleted === true ? colors.green : colors.red}}>
                    <select value={selectedUser[user.id] || user.isDeleted} onChange={(e) => handleLogicalDelete(user.id, e.target.value)}>
                      <option value={true}>True</option>
                      <option value={false}>False</option>
                    </select>
                  </td>
              </tr>
            ))}
          </tbody>
      </table>

     </div>
    </div>
  )
}

export default AdminHome