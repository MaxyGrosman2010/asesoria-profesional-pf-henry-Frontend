import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import Swal from "sweetalert2"
import { addToCart } from "../../Redux/actions"
import doc from '../../assets/doc.jpg'

const OneService = () => {

  const dispatch = useDispatch()
  const data = useSelector((state) => state.allActivities)

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

  return (
    <>
    <div className="flex items-center px-4 h-screen bg-slate-300 w-full">

      <div className="bg-white shadow-lg w-3/4 h-3/4 mx-auto rounded flex">
        <div className="bg-slate-800 w-[30%] h-full flex flex-col items-center justify-between gap-4">
          <img src={doc} />
          <div className="flex flex-col items-center mb-20 h-1/2 w-full text-center justify-center">
            <p className="text-white text-2xl font-bold">Mr. Karl</p>
            <p className="text-white">doctor</p>
          </div>
          <div className="mb-10 text-white">
            <span class="material-symbols-outlined">deployed_code</span>
          </div>
        </div>

        <div className="w-[70%] flex items-center px-10">
        <div className="w-full flex flex-col gap-5">
          <p className="h-[10%] text-2xl bg-slate-100 py-2 pl-2 font-semibold">Service</p>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          <div className="flex gap-4 w-full justify-center">
            <p className="italic font-medium">Hour service</p>
            <span>$10</span>
          </div>
          <div className="flex mx-auto gap-4">
            <button onClick={addCart} className="bg-green-600 rounded w-[150px] py-2 text-white hover:bg-green-700">Add to cart</button>
            <NavLink to='/allServices'>
              <button className="bg-slate-800 rounded w-[150px] py-2 text-white hover:bg-slate-900">more services</button>
            </NavLink>
          </div>
        </div>
        </div>
      </div>

    </div> 
      
    </>
  )
}

export default OneService