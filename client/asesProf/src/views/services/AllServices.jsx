import { useSelector } from 'react-redux'
import Card from '../card/Card'
import Pagination from '../../components/pagination/Pagination'


const AllServices = ({currentData, page, setPage, max}) => {


  // const data = useSelector((state) => state.copyState)
  // console.log(data);
  



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

    <div className='flex flex-wrap items-center justify-center flex-col'>
      <div className="flex flex-wrap justify-between border border-red-900 w-[800px]">
        {currentData && currentData.map(user => {
          return (
              <Card user={user} />
          )
        })}
      </div>
      <Pagination currentData={currentData} page={page} setPage={setPage} max={max} />
    </div>
       
       
    
    </div>
  )
}

export default AllServices