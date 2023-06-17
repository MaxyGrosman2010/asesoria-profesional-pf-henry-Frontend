import Swal from "sweetalert2"
import { Link } from "react-router-dom"

const Payment = () => {


  const handleChange = () => {
    Swal.fire({
      title: 'Are you sure to cancel the payment ?',
      icon: 'question',
      iconHtml:'?',
      confirmButtonText: 'yes',
      cancelButtonColor:'no',
      showCancelButton: true,
      showCloseButton: true
    })
  }


  return (
    <div>
        <p>payment</p>
        <Link to='/confirmPay' className="bg-green-600" >pay</Link>
        <button onClick={handleChange} className="bg-red-600" >cancel</button>
    </div>
  )
}

export default Payment