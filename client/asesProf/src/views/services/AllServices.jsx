import { useSelector } from 'react-redux'
import Card from '../card/Card'


const AllServices = () => {

  const allActivities = useSelector((state) => state.allActivities)
  console.log(allActivities, 'adasd');



  return (
    <div className="flex flex-col mx-auto w-full h-screen items-center border border-green-900">

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
        <button>show all services</button>
    </div>
    <div>

    <div className="flex flex-wrap justify-center gap-4 mt-10 border border-red-800 w-full overflow-y-auto max-w-screen-lg mx-auto">
      {allActivities.map((user, idx) => (
        <div key={idx} className='bg-gray-50 shadow-lg rounded text-gray-900 w-[300px] h-[300px]'>
          <Card user={user} />
        </div>
      ))}
    </div>
    </div>
    
    </div>
  )
}

export default AllServices