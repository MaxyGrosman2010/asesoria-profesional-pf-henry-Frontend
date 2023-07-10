import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getServicesByUser, getService} from '../../Redux/actions'
import { NavLink } from 'react-router-dom';

const MiServices = () => {

    
    const dispatch = useDispatch();
    const data = useSelector((state) => state.userServices)

    const handleEdit = () => {
        dispatch(getService())
    }

    const handleDelete = () => {
        console.log('delete');
    }

    useEffect(() => {
      dispatch(getServicesByUser());
    }, [])

    console.log(data, 'asdasdasda');


  return (
    <div className="bg-slate-300 w-full h-screen p-20 flex flex-col items-center justify-center gap-5">
    <div className='container w-full mx-auto flex items-center justify-center shadow-lg'>
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
     
        <>
          <tr>
            <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>{'user.typeServices'}</td>
            <td className='border border-gray-400 px-4 py-2 h-auto w-auto cursor-pointer text-center hover:bg-slate-600 hover:text-white' >
              {'user.name'}
            </td>
            <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>
                <p>${'user.price'}</p>
            </td>
            <td className="flex items-center gap-2 justify-center w-full py-2">
              <NavLink to='/editService'> 
                <button onClick={handleEdit} className="bg-blue-500 w-[100px] rounded py-1 text-white">edit</button>
              </NavLink>
                <button onClick={handleDelete} className="bg-red-500 w-[100px] rounded py-1 text-white">delete</button>
            </td>
          </tr>
        </>
     
        </tbody>
    </table>
  </div>
  </div>
  )
}

export default MiServices