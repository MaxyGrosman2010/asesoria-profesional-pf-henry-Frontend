import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { initMercadoPago } from '@mercadopago/sdk-react';
import { removeAll } from '../../Redux/actions';

initMercadoPago('TEST-d494afdf-12b5-4b17-800f-9eaa2d0c21ce');

const Payment = () => {
  
  const items = useSelector((state) => state.items)
  const totalPrice = items.reduce((acc, curr) => acc + curr.price, 0)
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const itemsMapped = items.map((item) => ({
    item_id: item.id,
    name: item.name,
    price: item.price,
    quantity: 1,
    seller_id: item.user_id,
    totalAmount: totalPrice,
  }));


  const handleClick = () => {
    const token = localStorage.getItem('token');
    const config = { headers: { Authorization: ` Bearer ${token}` } }
    axios
      .post('http://localhost:3001/orderMP/', itemsMapped, config)
      .then((response) => {
        console.log('copraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', response.data);
        return response.data.id
      })
      .then((preference) => {
        window.open(preference)
      })
      .then(() => {
        dispatch(removeAll())
        navigate('/allServices')
      })
      .catch((error) => {
        console.error(error, 'ACA ERROR')
      })
  }

  const handleChange = () => {
    Swal.fire({
      title: 'Are you sure to cancel the payment?',
      icon: 'question',
      iconHtml: '?',
      confirmButtonText: 'Yes',
      cancelButtonColor: 'No',
      showCancelButton: true,
      showCloseButton: true
    }).then((result) => {
      if(result.isConfirmed){
        navigate('/allServices')
        dispatch(removeAll())
      }
    })
  }

  return (
    <div className='h-screen w-full flex flex-col items-center justify-center'>
      <div className='bg-white mx-auto w-full p-10 flex flex-col h-[800px] mt-40'>

        <div className=''>
          <h1 className='text-2xl font-bold font-montserrat'>Proceed to pay</h1>
        </div>

        <div>
          {items.map((item) => (
            <div key={item.id} className='flex items-center justify-center'>
              <div className='flex items-center m-20 gap-4'>
                <span class='material-symbols-outlined'>task_alt</span>
                <span className='font-medium'>{item.name}</span>
                <span className='italic'>{item.description}</span>
              </div>

              <div className='flex'>
                <span>$ {item.price}</span>
              </div>
            </div>

          ))}
        </div>

          <div className='flex flex-col shadow-lg h-[700px] w-1/2 mx-auto items-center justify-center py-2 my-10'>
            <div className='flex gap-4 items-center my-10 h-[300px] w-3/4 justify-center'>
              <p className='font-medium mr-80'>Total to pay:</p>
              <span class='material-symbols-outlined'>paid</span>
              <p>{totalPrice}</p>
            </div>
            <div className='flex items-center justify-center w-1/2 mx-auto gap-4'>
              <button className='bg-green-600 w-[120px] rounded py-2 text-white' onClick={handleClick}>pay</button>
              <button onClick={handleChange} className='bg-red-700 px-4 py-2 rounded text-white w-[120px] text-center'>Cancel</button>
            </div>
          </div>

      </div>
    </div>
  );
};

export default Payment;
