import { useState } from "react"
import validationsService from "./validations"
import Swal from "sweetalert2"
import { useDispatch } from "react-redux"
import { postData } from "../../Redux/actions"
import { useNavigate } from "react-router-dom"

const CreateServices = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [service, setService] = useState({
    name: '',
    description: '',
    price: '',
    file: '',
    tipoServ: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    description: '',
    price: '',
    file:'',
    tipoServ: '',
  })

  const handleChange = (event) => {
    setService({
      ...service,
       [event.target.name] : event.target.name === 'price' ?  +event.target.value : event.target.value,
    })
    setErrors(validationsService({
      ...service,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validationsService(service)
    if(Object.keys(formErrors).length > 0){
      Swal.fire({
        title: 'empty fields',
        icon: 'error',
        confirm: 'acept'
      })
      return;
    }

    dispatch(postData(service))
    
    setService({
      name: '',
      description: '',
      price: '',
      file: '',
      tipoServ: '',
    })

    Swal.fire({
      title: 'Success',
      text: 'servicio creado!',
      icon: 'success',
      confirmButtonText: 'OK',
    })
    navigate('/allServices')
    
  }

  return (
    <div className="w-full bg-white h-screen flex flex-col items-center justify-center mt-20">

      <form onSubmit={handleSubmit} className="flex flex-col mx-auto px-10 shadow-lg p-10 w-3/4">
        <span className="font-bold text-slate-950 w-[200px] pl-3 py-2 uppercase">Create service</span>
        <div className="w-full flex flex-col h-[80px] mt-10">
          <input name='name' value={service.name} onChange={handleChange} className="bg-gray-200 border border-gray-300 py-2 pl-2" placeholder="service name..." type="text" />
          {errors.name && (<div className="flex ml-1 gap-1 text-red-600 mt-1"><span class="material-symbols-outlined">error</span>{errors.name}</div>)}
        </div>

        <div className="w-full flex flex-col h-[100px] mt-10">
          <select name='tipoServ' onChange={handleChange} className="bg-slate-900 text-white py-2 rounded">
            <option>Select a Service type</option>
            <option>Gastronomia</option>
            <option>Legales</option>
            <option>Medicina</option>
            <option>Automotor</option>
            <option>Construcción</option>
            <option>Enseñanza</option>
            <option>Tech</option>
            <option>Otros</option>
          </select>
            {errors.tipoServ && (<div className="flex ml-1 gap-1 text-red-600 mt-1"><span className="material-symbols-outlined">error</span>{errors.tipoServ}</div>)}
        </div>

        <div className="w-full flex flex-col h-[40px] mb-4">
          <input name='price' value={service.price} onChange={handleChange} className="bg-gray-200 border border-gray-300 py-2 pl-2 h-[100px]" type="number" placeholder="price..." />
          {errors.price && (<div className="flex ml-1 gap-1 text-red-600 mt-1"><span class="material-symbols-outlined">error</span>{errors.price}</div>)}
        </div>
        
        <div className="w-full flex flex-col h-[150px] mt-10">
          <textarea name='description' value={service.description} onChange={handleChange} className="bg-gray-200 border border-gray-300 py-2 pl-2 h-[100px]" placeholder="description..." />
          {errors.description && (<div className="flex ml-1 gap-1 text-red-600 mt-1"><span class="material-symbols-outlined">error</span>{errors.description}</div>)}
        </div>
        <div className="flex">
          <input className="my-10 mx-auto" type="file" />
          <button type="submit" className="shadow-lg bg-slate-900 w-[180px] h-[40px] py-1 rounded uppercase text-white font-bold mx-auto mt-10 hover:bg-gray-800">create service</button>
        </div>
      </form>
    </div>
  )
}

export default CreateServices