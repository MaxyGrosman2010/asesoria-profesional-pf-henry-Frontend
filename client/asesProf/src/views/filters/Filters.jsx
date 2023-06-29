import { useState,useEffect} from "react";
import { useSelector } from "react-redux";
const Filters = ({copyState, updateFilterSelect}) => {
  
  const [filterBy,setFilterBy] = useState('');
  const [filterByProf,setFilterByProf] = useState('');
  const typeServices = useSelector((state) => state.typeServices);
 
  
  useEffect(() => {
    filterSelect();
    filterSelectProf();
  },[filterBy,filterByProf]);
   
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

  const filterSelectProf = () => {
    let filtros = [...copyState];
 
    switch (filterByProf) {
      case 'g':
        filtros  = filtros.filter((prof) => prof.tipoServ === "Gastronomia'"); break;
      case 'l':
        filtros  = filtros.filter((prof) => prof.tipoServ === "Legal");break;
      case 'm':
        filtros  = filtros.filter((prof) => prof.tipoServ === "Medicina");break;
      case 'a':
        filtros  = filtros.filter((prof) => prof.tipoServ === "Automotor"); break;
      case 'c':
        filtros  = filtros.filter((prof) => prof.tipoServ === "Construccion");break;
      case 'e':
        filtros  = filtros.filter((prof) => prof.tipoServ === "Educacion");break;
      case 't':
        filtros  = filtros.filter((prof) => prof.tipoServ === "Tech");break;
      case 'o':
        filtros  = filtros.filter((prof) => prof.tipoServ === "Otros"); break;
      default:
        filtros = filtros;
        break;
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
        <select className="bg-salte-300 rounded w-[200px] text-center py-2 mx-2" onChange={(event) => setFilterByProf(event.target.value)} >
        <option>Select a Service type</option>
            <option value="g">Gastronomia</option>
            <option value="l">Legales</option>
            <option value="m">Medicina</option>
            <option value="a">Automotor</option>
            <option value="c">Construcción</option>
            <option value="e">Enseñanza</option>
            <option value="t">Tech</option>
            <option value="o">Otros</option>
        </select>

    </div>
  )
}

export default Filters;

