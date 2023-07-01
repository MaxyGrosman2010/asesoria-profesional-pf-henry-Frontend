import React from "react"

const Data = ({items, handleDeleteItem}) => {



  return (
    <div>
        {items.map((item) => (
            <div key={item.id} className="bg-slate-300 flex p-3 my-1 rounded items-center justify-center">
                <div className="flex w-2/3 items-center justify-between">
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <div className="bg-red-600 text-white rounded w-[30px] h-[30px] flex items-center justify-center cursor-pointer">
                        <button onClick={() => handleDeleteItem(item.id)}>
                            <span className="material-symbols-outlined">delete</span>
                        </button>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Data