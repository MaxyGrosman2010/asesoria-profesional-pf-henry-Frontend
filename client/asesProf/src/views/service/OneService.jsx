import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import Swal from "sweetalert2"
import { addToCart } from "../../Redux/actions"

const OneService = () => {

  const dispatch = useDispatch()
  const data = useSelector((state) => state.allActivities)
  console.log(data, 'aca data');

  const [cart, setCart] = useState(0)

  const addItem = () => {
    setCart(cart + 1)
  }


  const delItem = () =>{
    if(cart < 1){
      return;
    }
    setCart(cart - 1)
  }

  const addCart = () => {
    dispatch(addToCart(data))
    Swal.fire({
      title:'producto agregado',
      icon: 'success',
    })
  }

  console.log(cart);

  return (
    <>
    <div className="flex items-center px-4 h-screen">
      <div className="flex flex-col justify-evenly items-center bg-gray-800 w-full h-screen">
        <div className="text-white absolute mb-[100px] mr-[200px]">
          <span className="material-symbols-outlined">account_circle</span>
        </div>
        <p className="font-medium text-white text-6xl">Dr. Lorenz</p>
      </div>

      <div className="bg-gray-100 py-4 h-screen flex justify-center flex-col items-center">
        <div className="flex flex-col w-full p-4 items-center">
          <p className="py-4 bg-gray-800 text-white w-[200px] px-3 rounded shadow-lg my-4">Services</p>
          <p className="w-1/2 text-justify">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
        </div>
        <div className="flex w-full p-4 justify-center items-center">
          <p className="text-gray-900 px-3">Price</p>
          <p className="text-justify">${'10'}</p>
        </div>
        <div className="flex gap-4">
            <button onClick={addItem} className="bg-green-600 w-[80px] text-white py-1 rounded">+</button>
            <div className="mx-auto bg-gray-600 py-2 w-[200px] text-center text-white rounded shadow-lg">
                <NavLink onClick={addCart}>add to cart</NavLink>
            </div>
            <button onClick={delItem} className="bg-red-600 w-[80px] text-white py-1 rounded">-</button>
        </div>
      </div>
      
        
    </div> 
      
    </>
  )
}

export default OneService