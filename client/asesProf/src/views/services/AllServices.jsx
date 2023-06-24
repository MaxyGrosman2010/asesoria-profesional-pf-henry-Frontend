import { useSelector } from 'react-redux'
import Card from '../card/Card'
import Pagination from '../../components/pagination/Pagination'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { filter, clearFilters} from '../../Redux/actions'

const AllServices = ({ currentData, page, setPage, max }) => {

  const dispatch = useDispatch()
  const copyState = useSelector((state) => state.copyState)

  const [orderByName, setOrderByName] = useState('');
  const [orderByPrice, setOrderByPrice] = useState('');

  const filters = () => {
    let copyFilter = [...copyState];
    if (orderByName !== '') {
      if (orderByName === 'a-z') {
        copyFilter = copyFilter.slice().sort((a, b) => a.name.localeCompare(b.name), 'es', { sensitivity: 'base' });
      } else if (orderByName === 'z-a') {
        copyFilter = copyFilter.slice().sort((a, b) => b.name.localeCompare(a.name), 'es', { sensitivity: 'base' });
      }
    }
    if (orderByPrice === 'asc') copyFilter = copyFilter.sort((a, b) => a.price - b.price);
    if (orderByPrice === 'des') copyFilter = copyFilter.sort((a, b) => b.price - a.price);

    dispatch(filter(copyFilter));
  };

  useEffect(() => {
    filters();
  }, [orderByName, orderByPrice]);

 const handlerResetFilter = (event) => {
      setOrderByName('');
      setOrderByPrice('');
      dispatch(clearFilters(event.target.value));
 }

  return (
    <div className="flex flex-col mx-auto w-full items-center border bg-slate-300">
      <div className='mt-40 flex gap-40'>
        <div className="flex gap-2">
          <input className="bg-gray-100 border border-gray-400 pl-2 rounded w-[600px] h-[40px]"
            placeholder="search a service..." type="text" />
          <button className="bg-slate-900 hover:bg-slate-800 shadow-lg rounded text-white h-[40px] w-[150px]">search</button>
        </div>
        <div className="flex rounded items-center justify-center gap-10 text-slate-900">
          <select className="bg-slate-100 rounded w-[200px] text-center py-2 mx-2" onChange={(e) => setOrderByName(e.target.value)}>
            <option value="">select by name</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>
          <select className="bg-slate-100 rounded w-[200px] text-center py-2 mx-2" onChange={(e) => setOrderByPrice(e.target.value)}>
            <option value="">select by price</option>
            <option value="asc">Minor-Major</option>
            <option value="des">Major-Minor</option>
          </select>
          <button className="bg-slate-900 hover:bg-slate-800 shadow-lg w-[200px] rounded text-white py-2 font-medium" onClick={handlerResetFilter}>clear</button>
        </div>
      </div>


      <div className='w-full min-h-[800px] pt-20'>
        <div className="flex flex-wrap justify-center gap-4 w-full max-w-screen-lg mx-auto">
          {currentData.map((user, idx) => (
            <div key={idx} className="bg-gray-50 shadow-lg rounded text-gray-900 w-[300px]">
              <Card user={user} />
            </div>
          ))}
        </div>
      </div>
      <Pagination currentData={currentData} page={page} setPage={setPage} max={max} />
    </div>
  );
};

export default AllServices;

