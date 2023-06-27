import { useState,useEffect} from "react"

const Filters = ({copyState, updateFilterSelect}) => {
  
  const [filterBy,setFilterBy] = useState('');
  
  useEffect(() => {
    filterSelect();
  },[filterBy]);
   
  const filterSelect = () => {
      let filtros = [...copyState];
      if(filterBy === 'a-z'){
        filtros = filtros.sort((a,b) => a.name.localeCompare(b.name));
      }else if ( filterBy === 'z-a'){
        filtros = filtros.sort((a,b) => b.name.localeCompare(a.name));
      }else if (filterBy ==='ma-mi'){
        filtros = filtros.sort((a,b) => a.price - b.price);
      }else if (filterBy ==='mi-ma' ){
        filtros = filtros.sort((a,b) => b.price - a.price);
      }
      updateFilterSelect(filtros);
  } 

  return (
    <div className="mt-10">
        <select className="bg-salte-300 rounded w-[200px] text-center py-2 mx-2" onChange={(event) => setFilterBy(event.target.value)}>
          <option value=''>select by</option>
          <option value='a-z'>A-Z</option> 
          <option value='z-a'>Z-A</option>
          <option value='ma-mi'>major minor price</option>
          <option value='mi-ma'>major minor price</option>
        </select>
    </div>
  )
}

export default Filters;

