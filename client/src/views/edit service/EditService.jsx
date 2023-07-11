import { useEffect, useState } from 'react';
// import validationsService from './validations';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateService, getService } from '../../Redux/actions';

const EditService = () => {
  const dispatch = useDispatch();

  const serv = useSelector((state) => state.oneActivity);
  console.log("hola soy oneActivity",serv);
  console.log("asjkdhhjkasdhjklasjkhldhjkls", serv.id);

 const [edit, setEdit] = useState({
    id: +serv.id,
    name: '',
    description: '',
    price: '',
    file: null,
    typeService: serv.type,
  })


  useEffect(() =>{
    dispatch(getService())
  }, [])

  const handleChange = (event) => {
    setEdit({
      ...edit,
      [event.target.name]: 
      event.target.value == 'price'
      ? +event.target.value
      : event.target.value,
    })
  };

  const handleFile = (e) => {
    const filed = e.target.files[0];
    setEdit({
      ...edit,
      file: filed,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(updateService(edit))
    console.log(edit);
  };


  return (
<div className='w-full bg-white h-screen flex flex-row mt-20'>
  <div className='w-1/2 flex flex-col items-center justify-center'>
    <div className='flex flex-col mx-auto px-10 shadow-xl p-10 pt-6 w-3/4 h-[750px]'>
      <span className='font-bold text-slate-950 w-[200px] pl-3 py-2 uppercase'>
        EXISTING SERVICE
      </span>
      <div className='w-full flex flex-col space-y-12 mt-10'>
        <input
          name='name'
          value={serv.name}
          className='bg-gray-200 border border-gray-300 py-2 pl-2'
          type='text'
        />
        <input
          name='type Service'
          value={serv.type}
          className='bg-gray-200 border border-gray-300 py-2 pl-2'
          type='text'
        />
        <input
          name='price'
          value={Number(serv.price)}
          className='bg-gray-200 border border-gray-300 py-2 pl-2 '
          type='text'
        />
        <textarea
          name='description'
          value={serv.description}
          className='bg-gray-200 border border-gray-300 py-2 pl-2 h-[100px]'
        />
      </div>
      <div className='flex justify-center mt-8'>
        <NavLink to='/miServices'>
          <button
            type='submit'
            className='shadow-xl bg-slate-900 w-[180px] h-[40px] py-1 rounded uppercase text-white font-bold hover:bg-gray-800 mt-20'
          >
            GO BACK
          </button>
        </NavLink>
      </div>
    </div>
  </div>

  <div className='w-1/2 flex flex-col items-center justify-center'>
    <div className='flex flex-col mx-auto px-10 shadow-xl p-10 pt-6 w-3/4 h-[750px]'>
    <form onSubmit={handleSubmit}>
      <span className='font-bold text-slate-950 w-[200px] pl-3 py-2 uppercase'>
        EDIT SERVICE
      </span>
      <div className='w-full flex flex-col space-y-8 mt-10'>
      
        <input
          name='name'
          value={edit.name}
          onChange={handleChange}
          className='bg-gray-200 border border-gray-300 py-2 pl-2'
          placeholder={serv.name}
          type='text'
        />
        <input
          name='type'
          value={serv.type}
          className='bg-gray-200 border border-gray-300 py-2 pl-2'
          placeholder='type'
          type='text'
        />
        <input
          name='price'
          value={edit.price}
          onChange={handleChange}
          className='bg-gray-200 border border-gray-300 py-2 pl-2 '
          type='number'
          placeholder={serv.price}
        />
        <textarea
          name='description'
          value={edit.description}
          onChange={handleChange}
          className='bg-gray-200 border border-gray-300 py-2 pl-2 h-[100px]'
          placeholder={serv.description}
        />
      </div>
      <div className='w-full flex flex-col h-[150px] mt-10'>
        <input
          name='file'
          className='mb-2'
          type='file'
          onChange={handleFile}
        />
      </div>
      <div className='flex'>
        <button
          type='submit'
          className='shadow-xl bg-slate-900 w-[180px] h-[40px] py-1 rounded uppercase text-white font-bold mx-auto mt-4 hover:bg-gray-800'
        >
          CONFIRM EDIT
        </button>
      </div>
      </form>
    </div>
  </div>
</div>

  
  );
};


export default EditService;

