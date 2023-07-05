import { useEffect, useState } from "react"
import validationsEdit from "./validations"
import { useDispatch, useSelector } from "react-redux"
import { personalUserData, editUser } from "../../Redux/actions"

const EditProfile = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.userData);

  const [edit, setEdit] = useState({
    name: '',
    password: '',
    repeatPassword: '',
    picture: null
  })

  const [errors, setErrors] = useState({
    name: '',
    password: '',
    repeatPassword: '',
    picture: null,
  });

  useEffect(() => {
    dispatch(personalUserData());
    setEdit({
      ...edit,
      name: user.name,
    });
  }, []);

  const handleChange = (event) => {
    setEdit({
      ...edit,
      [event.target.name]: event.target.value,
    })
    setErrors(validationsEdit({
      ...edit,
      [event.target.name]: event.target.value,
    }))
  }

  const handleFile = (event) => {
    setEdit({
      ...edit,
      picture: event.target.files[0]
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validationsEdit(edit);

    if(Object.keys(formErrors).length > 0){
      Swal.fire({
        title: 'empty fields',
        icon: 'error',
        confirm: 'acept'
      })
      return;
    };

    dispatch(editUser(edit));

    Swal.fire({
      title: 'Success',
      text: 'El Perfil fue editado!',
      icon: 'success',
      confirmButtonText: 'OK',
    });

    setEdit({
      ...edit,
      password: '',
      repeatPassword: ''
    })

  };



  return (
    <div className="w-full bg-white h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-1/2">
        
        <div className="flex flex-col items-left w-1/2 h-[110px]">
          <label>name</label>
          <input
          name='name'
          onChange={handleChange}
          value={edit.name}
          className="bg-gray-300 w-full py-2 rounded pl-2" placeholder="name..." type='text' />
           {errors.name && (<div className="flex ml-1 gap-1 text-red-600 mt-1"><span class="material-symbols-outlined">error</span>{errors.name}</div>)}
        </div>

        <div className="flex flex-col items-left w-1/2 h-[110px]">
          <label>password</label>
          <input
          name='password'
          onChange={handleChange}
          value={edit.password}
          className="bg-gray-300 w-full py-2 rounded pl-2" placeholder="password..." type='password' />
           {errors.password && (<div className="flex ml-1 gap-1 text-red-600 mt-1"><span class="material-symbols-outlined">error</span>{errors.password}</div>)}
        </div>

        <div className="flex flex-col items-left w-1/2 h-[110px]">
          <label>repeat password</label>
          <input
          name='repeatPassword'
          onChange={handleChange}
          value={edit.repeatPassword}
          className="bg-gray-300 w-full py-2 rounded pl-2" placeholder="repeat password..." type='password' />
           {errors.repeatPassword && (<div className="flex ml-1 gap-1 text-red-600 mt-1"><span class="material-symbols-outlined">error</span>{errors.repeatPassword}</div>)}
        </div>

        <div className="flex flex-col items-left w-1/2 h-[110px]">
          <label>picture</label>
          <input
          name='picture'
          value={edit.picture}
          onChange={handleFile}
          className="bg-gray-300 w-full py-2 rounded pl-2" type='file' />
           {errors.picture && (<div className="flex ml-1 gap-1 text-red-600 mt-1"><span class="material-symbols-outlined">error</span>{errors.picture}</div>)}
        </div>

        <button type="submit" className="shadow-lg bg-gray-500 w-[200px] py-2 rounded uppercase text-white font-bold mx-auto mt-10 hover:bg-gray-800">edit profile</button>
      </form>
    </div>
  )
}

export default EditProfile