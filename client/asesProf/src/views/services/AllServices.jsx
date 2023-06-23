import { useSelector } from 'react-redux'
import Card from '../card/Card'
import Pagination from '../../components/pagination/Pagination'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { filter, clearFilters} from '../../Redux/actions'

const AllServices = ({ currentData, page, setPage, max }) => {

  const dispatch = useDispatch();

  const copyState = useSelector((state) => state.copyState);

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
    <div className="flex flex-col mx-auto w-full h-screen items-center pt-[100px]">
      <div>
        <div className="flex gap-2">
          <input
            className="bg-gray-100 border border-gray-400 pl-2 py-2 rounded w-[600px]"
            placeholder="search a service...zz"
            type="text"
          />
          <button className="bg-gray-500 shadow-lg w-[200px] rounded text-white">search</button>
        </div>
        <div className="flex rounded py-2 px-2 items-center justify-center gap-10">
          <select className="bg-slate-300 rounded w-[200px] text-center py-2 mx-2" onChange={(e) => setOrderByName(e.target.value)}>
            <option value="">select by name</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>
          <select className="bg-slate-300 rounded w-[200px] text-center py-2 mx-2" onChange={(e) => setOrderByPrice(e.target.value)}>
            <option value="">select by price</option>
            <option value="asc">Minor-Major</option>
            <option value="des">Major-Minor</option>

          </select>
          <button className="bg-gray-500 shadow-lg w-[200px] rounded text-white py-2 font-medium" onClick={handlerResetFilter}>clear</button>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-center gap-4 mt-10 w-full max-w-screen-lg mx-auto">
          {currentData.slice(0, 6).map((user, idx) => (
            <div key={idx} className="bg-gray-50 shadow-lg rounded text-gray-900 w-[300px] h-[300px]">
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

