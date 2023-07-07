import { useState } from "react"
import validationReview from './validatationReview'


const FormReview = () => {

    const [review, setReview] = useState({
        name: '',
        message: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        message: ''
    })

    const handleChange = () => {
        console.log('click');
    }

    const handleSubmitReview = () => {
        console.log('review sended', review);
    }




  return (
    <div>
        <form onSubmit={handleSubmitReview}>
            <div >
                <label>name</label>
                <input onChange={handleChange} />
            </div>
            <div>
                <label>review</label>
                <textarea onChange={handleChange} />
            </div>
        </form>
    </div>
  )
}

export default FormReview