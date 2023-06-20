import { useState } from "react"
import validationsContact from "./validationsContact"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

const ContactForm = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
    setErrors(validationsContact({
      ...form,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validationsContact(form)
    if(Object.keys(formErrors).length > 0){
      Swal.fire({
        title: 'empty fields',
        icon: 'error',
        confirm: 'acept'
      })
      return;
    }
    setForm({
      name: '',
      email: '',
      message: '',
    })

    Swal.fire({
      title: 'Success',
      text: 'Your message has been sent!',
      icon: 'success',
      confirmButtonText: 'OK',
    })
  }



  return (
    <>
    <div id='contact' className='flex items-center justify-center h-screen'>
      <form onSubmit={handleSubmit} className="w-full bg-white rounded-md rounded-tr-[100px] flex flex-col items-center justify-center gap-4 h-screen">
        <p className="font-bold">Contact us for more information</p>

        <div className="flex flex-col w-[500px] h-20">
          <input
          name='name'
          value={form.name}
          onChange={handleChange}
          className="bg-gray-200 w-[500px] py-2 pl-2 rounded" placeholder="name..." type="text" />
          {errors.name && (<div className="flex ml-1 gap-1 text-red-600 mt-1"><span class="material-symbols-outlined">error</span>{errors.name}</div>)}
        </div>

        <div className="flex flex-col w-[500px] h-20">
          <input
          name='email'
          value={form.email}
          onChange={handleChange}
          className="bg-gray-200 w-[500px] py-2 pl-2 rounded" placeholder="email..." type="email" />
          {errors.email && (<div className="flex ml-1 gap-1 text-red-600 mt-1"><span class="material-symbols-outlined">error</span>{errors.email}</div>)}
        </div>

        <div className="flex flex-col w-[500px] h-[250px]">
          <textarea
          name='message'
          value={form.message}
          onChange={handleChange}
          className="bg-gray-200 w-[500px] h-[200px] py-2 pl-2 rounded" placeholder="message..." />
          {errors.message && (<div className="flex ml-1 gap-1 text-red-600 mt-1"><span class="material-symbols-outlined">error</span>{errors.message}</div>)}
        </div>
        <button type="submit" className="w-[200px] bg-gray-600 shadow-lg text-white rounded py-2 uppercase font-bold">Send</button>
      <p className="uppercase font-bold mt-10">logo</p>
      </form>
    </div>
    </>
  )
}

export default ContactForm