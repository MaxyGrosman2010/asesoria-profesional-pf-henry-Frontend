import Swal from "sweetalert2"
import bgd from '../../assets/background.jpg'
import goog from '../../assets/iconGoogle.png'
import validations from "./validations"
import { useState } from "react"
import { NavLink, Link,  useNavigate } from "react-router-dom"
import { handleLogIn } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from "../../Redux/actions"


const LandingLogin = () => {


  const users = useSelector((state) => state.userData)



  const navigate = useNavigate();
  const dispatch = useDispatch()


  const [data, setData] = useState({
    email: '',
    password: '',
  })


  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })


  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
    setErrors(validations({
      ...data,
      [event.target.name]: event.target.value,
    }))
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validations(data);
    console.log(formErrors);
    if (Object.keys(formErrors).length > 0) {
      Swal.fire({
        title: 'empty fields',
        icon: 'error',
        confirm: 'acept'
      })
      return;
    }
    dispatch(signIn(data));
    navigate('/home');
  }


  const handleClickLogin = () => {
    dispatch(handleLogIn());
    navigate('/home');
  }


  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${bgd})` }}>
      <form onSubmit={handleSubmit} className="drop-shadow-lg flex flex-col justify-center items-center mx-auto w-[500px] bg-white h-[650px] rounded-md rounded-tr-[100px]">
        <div className="h-[300px] w-full flex items-start justify-center flex-col">
          <p className="font-bold uppercase ml-10">login</p>
          <div className="my-4 flex flex-col ml-10">
            <input
              name='email'
              value={data.email}
              onChange={handleChange}
              className="bg-gray-200 der-gray-300 w-[350px] h-[35px] p-3 py-5 rounded text-black"
              placeholder="email..."
              type="email" />
            {errors.email && (
              <div className="text-red-600 absolute ml-80 mt-[8px]">
                <span className="material-symbols-outlined">error</span>
              </div>
            )}
          </div>


          <div className="flex flex-col ml-10">
            <input
              name='password'
              value={data.password}
              onChange={handleChange}
              className="bg-gray-200 der-gray-300 w-[350px] h-[35px] p-3 py-5 rounded text-black"
              placeholder="password..."
              type="password" />
          </div>




          <div className='flex flex-col ml-10 mt-4'>
            <button type="submit" className="drop-shadow-md uppercase bg-gray-700 w-[200px] py-3 text-white rounded mt-2">login</button>
            <p className="font-light mt-3">Forgot password?</p>
          </div>


        </div>
        <div className="flex items-center justify-center gap-3 mt-6 w-full py-2">
          <p className="font-light mt-1">You don´t have account?</p>
          <Link to='/register'>
            <span className="ml-1 font-bold cursor-pointer underline">Register</span>
          </Link>
        </div>
        <NavLink to='/adminLogin' className="bg-red-600 w-[120px]">logAdmin</NavLink>
        <div className='flex flex-col items-center justify-center mx-auto mt-2'>
          <p className='py-4'>or Login with</p>
          <img className="w-[40px]" src={goog} />
          <button onClick={handleClickLogin}>
            <span className="font-bold uppercase mt-4">logo</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default LandingLogin