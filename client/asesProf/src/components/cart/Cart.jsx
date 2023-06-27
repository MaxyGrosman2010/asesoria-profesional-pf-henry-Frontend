import { useEffect, useState } from "react"


const Cart = ({handleCloseCart}) => {

  const [numCart, setNumCart] = useState(0)

  const handleAdd = () => {
    setNumCart(numCart + 1)
  }

  const handleSubs = () => {
    if(numCart < 1) return;
    setNumCart(numCart - 1)
  }


  return (
    <div className="p-10 fixed right-0 top-0 h-[900px] bg-white shadow-lg w-[40%]">
      <div className="p-4 rounded h-full">

        <div className="flex gap-4 w-full items-center justify-between ">
          <div className="flex gap-4">
            <span className="material-symbols-outlined">shopping_cart</span>
            <p>items in the cart: {numCart}</p>
          </div>
          <button className="bg-slate-800 text-white w-[30px] rounded" onClick={handleCloseCart}>X</button>
        </div>

        <div className="mt-10 gap-10 flex flex-col items-center justify-around bg-gray-50 h-[500px] overflow-y-auto p-10">
          <div className="bg-slate-400 rounded w-full flex gap-2 p-2 items-center justify-between">
            <span class="material-symbols-outlined">account_circle</span>
            <p>Service</p>
            <div className="flex gap-4 items-center">
              <button onClick={handleAdd} className="bg-slate-50 rounded w-[30px]">+</button>
              <button onClick={handleSubs} className="bg-slate-50 rounded w-[30px]">-</button>
              <p>quantity: {numCart}</p>
              <button className="bg-red-600 rounded text-white flex items-center justify-center p-1"><span className="material-symbols-outlined">delete</span></button>
            </div>
          </div>

          <div className="bg-slate-400 rounded w-full flex gap-2 p-2 items-center justify-between">
            <span class="material-symbols-outlined">account_circle</span>
            <p>Service</p>
            <div className="flex gap-4 items-center">
              <button onClick={handleAdd} className="bg-slate-50 rounded w-[30px]">+</button>
              <button onClick={handleSubs} className="bg-slate-50 rounded w-[30px]">-</button>
              <p>quantity: {numCart}</p>
              <button className="bg-red-600 rounded text-white flex items-center justify-center p-1"><span className="material-symbols-outlined">delete</span></button>
            </div>
          </div>

          <div className="bg-slate-400 rounded w-full flex gap-2 p-2 items-center justify-between">
            <span class="material-symbols-outlined">account_circle</span>
            <p>Service</p>
            <div className="flex gap-4 items-center">
              <button onClick={handleAdd} className="bg-slate-50 rounded w-[30px]">+</button>
              <button onClick={handleSubs} className="bg-slate-50 rounded w-[30px]">-</button>
              <p>quantity: {numCart}</p>
              <button className="bg-red-600 rounded text-white flex items-center justify-center p-1"><span className="material-symbols-outlined">delete</span></button>
            </div>
          </div>

          <div className="bg-slate-400 rounded w-full flex gap-2 p-2 items-center justify-between">
            <span class="material-symbols-outlined">account_circle</span>
            <p>Service</p>
            <div className="flex gap-4 items-center">
              <button onClick={handleAdd} className="bg-slate-50 rounded w-[30px]">+</button>
              <button onClick={handleSubs} className="bg-slate-50 rounded w-[30px]">-</button>
              <p>quantity: {numCart}</p>
              <button className="bg-red-600 rounded text-white flex items-center justify-center p-1"><span className="material-symbols-outlined">delete</span></button>
            </div>
          </div>

          <div className="bg-slate-400 rounded w-full flex gap-2 p-2 items-center justify-between">
            <span class="material-symbols-outlined">account_circle</span>
            <p>Service</p>
            <div className="flex gap-4 items-center">
              <button onClick={handleAdd} className="bg-slate-50 rounded w-[30px]">+</button>
              <button onClick={handleSubs} className="bg-slate-50 rounded w-[30px]">-</button>
              <p>quantity: {numCart}</p>
              <button className="bg-red-600 rounded text-white flex items-center justify-center p-1"><span className="material-symbols-outlined">delete</span></button>
            </div>
          </div>

          <div className="bg-slate-400 rounded w-full flex gap-2 p-2 items-center justify-between">
            <span class="material-symbols-outlined">account_circle</span>
            <p>Service</p>
            <div className="flex gap-4 items-center">
              <button onClick={handleAdd} className="bg-slate-50 rounded w-[30px]">+</button>
              <button onClick={handleSubs} className="bg-slate-50 rounded w-[30px]">-</button>
              <p>quantity: {numCart}</p>
              <button className="bg-red-600 rounded text-white flex items-center justify-center p-1"><span className="material-symbols-outlined">delete</span></button>
            </div>
          </div>

          <div className="bg-slate-400 rounded w-full flex gap-2 p-2 items-center justify-between">
            <span class="material-symbols-outlined">account_circle</span>
            <p>Service</p>
            <div className="flex gap-4 items-center">
              <button onClick={handleAdd} className="bg-slate-50 rounded w-[30px]">+</button>
              <button onClick={handleSubs} className="bg-slate-50 rounded w-[30px]">-</button>
              <p>quantity: {numCart}</p>
              <button className="bg-red-600 rounded text-white flex items-center justify-center p-1"><span className="material-symbols-outlined">delete</span></button>
            </div>
          </div>

          <div className="bg-slate-400 rounded w-full flex gap-2 p-2 items-center justify-between">
            <span class="material-symbols-outlined">account_circle</span>
            <p>Service</p>
            <div className="flex gap-4 items-center">
              <button onClick={handleAdd} className="bg-slate-50 rounded w-[30px]">+</button>
              <button onClick={handleSubs} className="bg-slate-50 rounded w-[30px]">-</button>
              <p>quantity: {numCart}</p>
              <button className="bg-red-600 rounded text-white flex items-center justify-center p-1"><span className="material-symbols-outlined">delete</span></button>
            </div>
          </div>
        </div>

        

          <div className="flex w-full">
            <p className="mx-auto mt-10">Total: {'$100'}</p>
          </div>

        <div className="flex items-center justify-around w-full mt-10">
          <div className="flex bg-green-600 items-center justify-center gap-2 text-white rounded w-[140px] px-2">
            <span class="material-symbols-outlined">payments</span>
            <button className="py-2">go to pay</button>
          </div>
          <div className="flex bg-red-600 items-center justify-center gap-2 text-white rounded w-[140px] px-2">
            <span className="material-symbols-outlined">delete</span>
            <button className="py-2">delete items</button>         
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart