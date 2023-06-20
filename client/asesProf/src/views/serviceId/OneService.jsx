import bgd from '../../assets/background.jpg'
import Price from "../price/Price"
import ServiceDetail from "../serviceDetail/ServiceDetail"

const OneService = () => {




  return (
   
      <div className="flex w-full h-screen items-center justify-center bg-cover bg-center" style={{backgroundImage:`url(${bgd})`}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex">

        <div className="w-[20%]">
          <div className="w-[70%] bg-white h-screen flex flex-col items-center pt-20 mx-auto">
            <span class="material-symbols-outlined">account_circle</span>
            <p>Dr. Karl</p>
            <div className="bg-gray-700 h-[90%] w-full pt-20 text-white flex flex-col items-center rounded-md rounded-tr-[100px] mt-10">
              <p className="font-bold tracking-widest uppercase mt-10 hover:bg-white hover:text-gray-700 cursor-pointer w-[80%] py-2 pl-2 rounded">service</p>
              <p className="font-bold tracking-widest uppercase mt-10 hover:bg-white hover:text-gray-700 cursor-pointer w-[80%] py-2 pl-2 rounded">price</p>
            </div>
          </div>
          
        </div>

        
        <div className="bg-red-100 w-[80%] h-screen">
          
        </div>
          <ServiceDetail />
          <Price />
        </div>
      </div>

  )
}

export default OneService