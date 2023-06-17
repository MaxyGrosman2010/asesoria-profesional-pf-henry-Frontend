import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

const ConfirmPayment = () => {

    const navigate = useNavigate();

    const confirmPayment = () => {
        Swal.fire({
            title: 'tu pago se realizó con exito',
            icon: 'success',
            position: 'center',
            showConfirmButton: false,
            timer: '3000'
        })
        navigate('/home')
    }



  


  return (
    <div>
        <p>proceed to pay</p>
        <p>total</p>
        <button onClick={confirmPayment} className="bg-green-600" >pay</button>
    </div>
  )
}

export default ConfirmPayment