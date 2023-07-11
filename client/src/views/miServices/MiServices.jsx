import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServicesByUser } from '../../Redux/actions'
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const MiServices = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const services = useSelector((state) => state.userServices)
    const [data, setData] = useState(services)

    //falta funcion de editar - freddy desde aca debes llamar al form de edicion

    const handleDelete = (id) => {
      Swal.fire({
        icon: 'warning',
        title: 'Delete Service',
        text: 'Are you sure you want to delete this service',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.isConfirmed) {
            const updatedData = data.filter((ser) => ser.id !== id);
            setData(updatedData);

            if (updatedData.length === 0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Services not found',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/allServices');
                    }
                });
            }
        }
    });
};

    useEffect(() => {
      dispatch(getServicesByUser());
    }, [])

  
      




  return (
    
    <div className="bg-slate-400 w-full h-screen p-20 flex flex-col items-center justify-center gap-5">
    <div className='container w-full mx-auto flex items-center justify-center'>
    {data && data.length > 0 ? (
      <table className='bg-slate-100 w-full'>
        <thead className=''>
          <tr className=''>
            <th className='border border-gray-400 h-auto w-auto py-4'>Type Service</th>
            <th className='border border-gray-400 h-auto w-auto py-4'>Name Service</th>
            <th className='border border-gray-400 h-auto w-auto py-4'>Price</th>
            <th>edit</th>
          </tr>
        </thead>
        <tbody className='w-full'>
          {data.map((serv) => (
          <tr key={serv.id}>
            <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>{serv.typeServices}</td>
            <td className='border border-gray-400 px-4 py-2 h-auto w-auto cursor-pointer text-center hover:bg-slate-600 hover:text-white' >
              {serv.name}
            </td>
            <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>
                <p>${serv.price}</p>
            </td>
            <td className="flex items-center gap-2 justify-center w-full py-2">
              <NavLink to='/editService'> 
                <button onClick={'edit'} className="bg-blue-500 w-[100px] rounded py-1 text-white">edit</button>
              </NavLink>
                <button onClick={() => handleDelete(serv.id)} className="bg-red-500 w-[100px] rounded py-1 text-white">delete</button>
            </td>
          </tr>
          ))}
        </tbody>
    </table>

    ) : (
      <p>no services found</p>
    )}




  </div>
  </div>
  )
}

export default MiServices