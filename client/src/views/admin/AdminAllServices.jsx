import { useDispatch, useSelector } from "react-redux"
import { allServicesAdmin } from "../../Redux/actions"
import { useEffect } from "react"

const AdminAllServices = () => {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(allServicesAdmin())
    }, [])
    
    const data = useSelector((state) => state.allServicesAdmin)

    console.log(data, 'SERVICIOS');


  return (
    <div className="bg-slate-300 w-full h-screen p-20 flex flex-col items-center justify-center gap-5">
    <div className='container w-full mx-auto flex items-center justify-center shadow-lg'>
      <table className='bg-slate-100 w-full'>
        <thead className=''>
          <tr className=''>
            <th className='border border-gray-400 h-auto w-auto py-4'>Name</th>
            <th className='border border-gray-400 h-auto w-auto py-4'>Type Of Service</th>
            <th className='border border-gray-400 h-auto w-auto py-4'>Is Logical deleted</th>
            <th className='border border-gray-400 h-auto w-auto py-4'>User is Deleted</th>
          </tr>
        </thead>
        <tbody className='w-full'>
        {data && data.map((user) => (
          <tr key={user.id}>
            <td className='flex items-center justify-center'>{user.name}</td>
            <td className='border border-gray-400 px-4 py-2 h-auto w-auto cursor-pointer text-center hover:bg-slate-600 hover:text-white'>{user.typeService}</td>
            <td>{user.isDeleted}</td>
            <td>{user.userIsDeleted}</td>
          </tr>
        ))}
        </tbody>
    </table>
  </div>
  </div>
  )
}

export default AdminAllServices