import { useSelector } from 'react-redux'

const MiServices = () => {

    const services = useSelector((state) => state.copyState)
    console.log(services);

    const handleEdit = () => {
        console.log('edit');
    }

    const handleDelete = () => {
        console.log('delete');
    }


  return (
    <div className="bg-slate-300 w-full h-screen p-20 flex flex-col items-center justify-center gap-5">
    <div className='container w-full mx-auto flex items-center justify-center shadow-lg'>
      <table className='bg-slate-100 w-full'>
        <thead className=''>
          <tr className=''>
            <th className='border border-gray-400 h-auto w-auto py-4'>Services</th>
            <th className='border border-gray-400 h-auto w-auto py-4'>Description</th>
            <th className='border border-gray-400 h-auto w-auto py-4'>Price</th>
            <th>edit</th>
          </tr>
        </thead>


        <tbody className='w-full'>
        {services.map((user) => (
        <>
          <tr>
            <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>{'user.typeServices'}</td>
            <td className='border border-gray-400 px-4 py-2 h-auto w-auto cursor-pointer text-center hover:bg-slate-600 hover:text-white'>
              {user.name}
            </td>
            <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>
                <p>${user.price}</p>
            </td>
            <td className="flex items-center gap-2 justify-center w-full py-2">
                <button onClick={handleEdit} className="bg-blue-500 w-[100px] rounded py-1 text-white">edit</button>
                <button onClick={handleDelete} className="bg-red-500 w-[100px] rounded py-1 text-white">delete</button>
            </td>
          </tr>
        </>
        ))}
        </tbody>
    </table>
  </div>
  </div>
  )
}

export default MiServices