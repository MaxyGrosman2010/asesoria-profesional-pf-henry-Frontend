import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/actions';

const AllServices = () => {

  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers)

  useEffect(() => {
    dispatch(getData())
  }, [])


  return (
    <div className="flex flex-col mx-auto w-full border border-red-600 h-screen items-center">

    <div>
        <p>all services</p>
        <div>
        <input type='text' />
        <button>search</button>
        </div>
        <select>
          <option>select by name</option>
        </select>
        <select>
          <option>select by price</option>
        </select>
        <select>
          <option>show all services</option>
        </select>
    </div>
    <div>

    <div className="flex items-center mx-auto gap-4 mt-10">
      {allUsers.map(user => (
        <div>
          <p>{user.name}</p>
          <p>{user.profesion}</p>
          <img src={user.picture} />
        </div>
      ))}
    </div>
    </div>
    
    </div>
  )
}

export default AllServices