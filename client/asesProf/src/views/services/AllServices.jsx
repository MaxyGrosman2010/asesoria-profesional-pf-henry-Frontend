import { useSelector } from 'react-redux'
import Card from '../card/Card'
import Pagination from '../../components/pagination/Pagination'


const AllServices = () => {

  const allActivities = useSelector((state) => state.allActivities)
  



  return (
    <div className="flex flex-col mx-auto w-full h-screen items-center pt-[100px]">

    <div>
        <div className='flex gap-2'>
          <input className='bg-gray-100 border border-gray-400 pl-2 py-2 rounded w-[600px]' placeholder='search a service...' type='text' />
          <button className='bg-gray-500 shadow-lg w-[200px] rounded text-white'>search</button>
        </div>
        <div className='flex rounded py-2 px-2 items-center justify-center gap-10'>
          <select className='bg-slate-300 rounded w-[200px] text-center py-2 mx-2'><option>select by name</option></select>
          <select className='bg-slate-300 rounded w-[200px] text-center py-2 mx-2'><option>select by price</option></select>
          <button className='bg-gray-500 shadow-lg w-[200px] rounded text-white py-2 font-medium'>clear</button>
        </div>
    </div>
    <div>

    <div className="flex flex-wrap justify-center gap-4 mt-10 w-full max-w-screen-lg mx-auto">
      {allActivities.slice(0, 6).map((user, idx) => (
        <div key={idx} className='bg-gray-50 shadow-lg rounded text-gray-900 w-[300px] h-[300px]'>
          <Card user={user} />
        </div>
      ))}
    </div>
    </div>
        <Pagination />
    
    </div>
  )
}

export default AllServices