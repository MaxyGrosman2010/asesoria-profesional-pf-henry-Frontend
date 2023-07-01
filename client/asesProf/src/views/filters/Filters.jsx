import { useState,useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { filter, getData, getTypeServices } from "../../Redux/actions"



const Filters = ({setPage}) => {
 
  const dispatch = useDispatch()
  const copyState = useSelector((state) => state.copyState)
  const allActivities = useSelector((state) => state.allActivities)


  useEffect(() => {
    dispatch(getTypeServices())
  }, [])
  

  const [order, setOrder] = useState('')
  const [orderService, setOrderService] = useState('')
  const [filterByType, setFilterByType] = useState('')
  const [originalServices, setOriginalServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);

  const handleOrder = () => {
    let services = [...copyState]
    if(order === 'asc') services = services.sort((a, b) => a.name.localeCompare(b.name))
    if(order === 'des') services = services.sort((a, b) => b.name.localeCompare(a.name))
    if(order === 'high') services = services.sort((a, b) => b.price - a.price)
    if(order === 'low') services = services.sort((a, b) => a.price - b.price)
    dispatch(filter(services))
  }

  const selectTypeService = (event) => {
    const selectedType = event.target.value;
    setFilterByType(selectedType);
  
    if (selectedType === "all") {
      dispatch(getData())
    } else {
      const filteredServices = allActivities.filter(
        (srv) => srv.typeService === selectedType
      );
      setFilteredServices(filteredServices);
      dispatch(filter(filteredServices));
    }
    setPage(1)
  };

  useEffect(() => {
    handleOrder()
    setPage(1)
  }, [order])
  

  return (
    <div className="mt-10">

        <select value={order} onChange={(event) => setOrder(event.target.value)} className="bg-salte-300 rounded w-[200px] text-center py-2 mx-2" >
          <option value=''>select by</option>
          <option value='asc'>A-Z</option>
          <option value='des'>Z-A</option>
          <option value='high'>High price</option>
          <option value='low'>Low price</option>
        </select>

        <select
        value={filterByType}
        className="bg-salte-300 rounded w-[200px] text-center py-2 mx-2"
        onChange={selectTypeService}
      >
        <option value="all">Select a Service type</option>
        <option value="Gastronomia">Gastronomia</option>
        <option value="Legal">Legal</option>
        <option value="Medicina">Medicina</option>
        <option value="Automotor">Automotor</option>
        <option value="Construcción">Construcción</option>
        <option value="Educación">Educación</option>
        <option value="Tech">Tech</option>
        <option value="Otros">Otros</option>
      </select>


    </div>
  )
}


export default Filters;